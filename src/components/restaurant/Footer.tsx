const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Velora Dining</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              An immersive culinary experience where tradition meets contemporary artistry.
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4 text-primary-foreground/80">
              Navigate
            </h4>
            <div className="space-y-2">
              {["Our Story", "Menu", "Atmosphere", "Visit"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4 text-primary-foreground/80">
              Connect
            </h4>
            <div className="space-y-2">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40 tracking-wider">
            © 2025 Velora Dining. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
