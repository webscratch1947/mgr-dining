import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 px-5 md:px-6 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 mb-10 md:mb-12">
          <div>
            <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4">✦ Velora Dining</h3>
            <p className="text-primary-foreground/60 text-xs md:text-sm leading-relaxed">
              An immersive Indian culinary experience where heritage meets contemporary artistry.
            </p>
          </div>
          <div>
            <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase mb-3 md:mb-4 text-primary-foreground/80">
              Navigate
            </h4>
            <div className="space-y-2">
              {[
                { label: "Our Story", href: "#about" },
                { label: "Menu", href: "#dishes" },
                { label: "Atmosphere", href: "#interior" },
                { label: "Visit", href: "#location" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="block text-xs md:text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase mb-3 md:mb-4 text-primary-foreground/80">
              Connect
            </h4>
            <div className="space-y-2">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ x: 4 }}
                  className="block text-xs md:text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 md:pt-8 text-center">
          <p className="text-[10px] md:text-xs text-primary-foreground/40 tracking-wider">
            © 2025 Velora Dining. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
