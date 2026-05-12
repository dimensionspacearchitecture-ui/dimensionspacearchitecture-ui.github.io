export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif font-semibold tracking-tight">
            PHIL AUSTEN<span className="text-secondary">.</span>
          </h2>
          <p className="text-primary-foreground/60 text-sm mt-2">
            Architectural Designer | LBP Level 2 / Category 2
          </p>
        </div>
        
        <div className="text-center md:text-right text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Phil Austen Design.</p>
          <p className="mt-1">Based in Mount Maunganui, NZ</p>
        </div>
      </div>
    </footer>
  );
}