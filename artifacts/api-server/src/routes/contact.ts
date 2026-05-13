import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { z } from "zod";

const router: IRouter = Router();

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

router.post("/contact", async (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data" });
    return;
  }

  const { name, email, phone, message } = parsed.data;
  const apiKey = process.env["RESEND_API_KEY"];

  if (!apiKey) {
    req.log.error("RESEND_API_KEY is not set");
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Dimension Space Architecture <onboarding@resend.dev>",
    to: ["dimensionspacearchitecture@gmail.com"],
    replyTo: email,
    subject: `New enquiry from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
        <h2 style="color: #1e2d3d; margin-bottom: 24px;">New Project Enquiry</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #666; width: 120px;"><strong>Name</strong></td>
            <td style="padding: 10px 0; color: #1e2d3d;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Email</strong></td>
            <td style="padding: 10px 0; color: #1e2d3d;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding: 10px 0; color: #666;"><strong>Phone</strong></td>
            <td style="padding: 10px 0; color: #1e2d3d;">${phone}</td>
          </tr>` : ""}
        </table>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <h3 style="color: #1e2d3d; margin-bottom: 12px;">Project Details</h3>
        <p style="color: #444; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="color: #999; font-size: 12px;">Sent via philausten.co.nz contact form</p>
      </div>
    `,
  });

  if (error) {
    req.log.error({ error }, "Failed to send email via Resend");
    res.status(500).json({ error: "Failed to send message. Please try again." });
    return;
  }

  res.json({ success: true });
});

export default router;
