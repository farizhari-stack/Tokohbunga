import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search, Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Beranda", "Koleksi", "Tentang Kami", "Layanan", "Galeri", "Kontak"];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/ /g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(15, 25, 15, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.2)" : "none",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          backgroundColor: "#1a2e1a",
          borderBottom: "1px solid rgba(201,169,110,0.3)",
        }}
        className="hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2" style={{ color: "#c9a96e" }}>
            <Phone size={12} />
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", letterSpacing: "0.1em" }}>
              +62 821 5555 8888
            </span>
          </div>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "#c9a96e" }}>
            PENGIRIMAN GRATIS UNTUK PEMBELIAN DI ATAS Rp 500.000
          </p>
          <div className="flex items-center gap-4" style={{ color: "#c9a96e" }}>
            <a href="#" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", letterSpacing: "0.1em" }} className="hover:opacity-70 transition-opacity">Instagram</a>
            <span style={{ opacity: 0.4 }}>|</span>
            <a href="#" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", letterSpacing: "0.1em" }} className="hover:opacity-70 transition-opacity">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <span
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "2.4rem",
              color: "#c9a96e",
              lineHeight: 1,
            }}
          >
            La Fleur
          </span>
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "9px",
              letterSpacing: "0.35em",
              color: "#f5f0e8",
              opacity: 0.7,
              marginTop: "2px",
            }}
          >
            MAISON DE FLEURS
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "#f5f0e8",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  padding: "4px 0",
                }}
                className="hover:opacity-70 transition-opacity uppercase"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button style={{ color: "#c9a96e" }} className="hover:opacity-70 transition-opacity hidden md:block">
            <Search size={18} />
          </button>
          <button style={{ color: "#c9a96e" }} className="hover:opacity-70 transition-opacity hidden md:block">
            <ShoppingBag size={18} />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: "#c9a96e" }}
            className="lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            backgroundColor: "rgba(15, 25, 15, 0.98)",
            borderTop: "1px solid rgba(201,169,110,0.2)",
          }}
          className="lg:hidden py-6"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left px-8 py-3 hover:opacity-70 transition-opacity"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.25em",
                color: "#f5f0e8",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {link.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
