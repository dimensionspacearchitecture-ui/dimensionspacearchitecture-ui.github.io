const NAV = [
  { href: "#about", label: "About" },
  { href: "#ethos", label: "Ethos" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif font-semibold tracking-tight mb-3">
              DIMENSION SPACE ARCHITECTURE<span className="text-secondary">.</span>
            </h2>
            <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
              Architectural Designer &amp; LBP Level 2 / Category 2.
              <br />
              Mount Maunganui, Bay of Plenty.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-5">
              Get in Touch
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              phil@dimensionspace.co.nz
              <br />
              027 5606 949
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/35 text-xs">
          <p>&copy; {new Date().getFullYear()} Dimension Space Architecture. All rights reserved.</p>
          <p>Mount Maunganui, New Zealand</p>
        </div>
      </div>
    </footer>
  );
}
