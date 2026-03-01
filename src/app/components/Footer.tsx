import { Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0a120a", borderTop: "1px solid rgba(201,169,110,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "2.5rem",
                  color: "#c9a96e",
                  lineHeight: 1,
                  display: "block",
                }}
              >
                La Fleur
              </span>
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "8px",
                  letterSpacing: "0.35em",
                  color: "rgba(245,240,232,0.5)",
                }}
              >
                MAISON DE FLEURS
              </span>
            </div>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                color: "rgba(245,240,232,0.55)",
                lineHeight: 1.85,
                fontWeight: 300,
                marginTop: "16px",
              }}
            >
              Menghadirkan keindahan alam dalam setiap rangkaian bunga premium yang penuh kasih dan keahlian.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "9px",
                letterSpacing: "0.3em",
                color: "#c9a96e",
                marginBottom: "20px",
              }}
            >
              TAUTAN CEPAT
            </p>
            <ul className="space-y-3">
              {["Beranda", "Koleksi", "Tentang Kami", "Layanan", "Galeri", "Kontak"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "11px",
                      color: "rgba(245,240,232,0.55)",
                      textDecoration: "none",
                      letterSpacing: "0.05em",
                      transition: "color 0.2s",
                    }}
                    className="hover:text-[#c9a96e]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "9px",
                letterSpacing: "0.3em",
                color: "#c9a96e",
                marginBottom: "20px",
              }}
            >
              LAYANAN
            </p>
            <ul className="space-y-3">
              {[
                "Rangkaian Pernikahan",
                "Hamper & Hadiah",
                "Pengiriman Ekspres",
                "Langganan Bulanan",
                "Event Korporat",
                "Custom Arrangement",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "11px",
                      color: "rgba(245,240,232,0.55)",
                      textDecoration: "none",
                      letterSpacing: "0.05em",
                    }}
                    className="hover:text-[#c9a96e]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "9px",
                letterSpacing: "0.3em",
                color: "#c9a96e",
                marginBottom: "20px",
              }}
            >
              NEWSLETTER
            </p>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                color: "rgba(245,240,232,0.55)",
                lineHeight: 1.7,
                marginBottom: "20px",
                fontWeight: 300,
              }}
            >
              Daftarkan email Anda dan dapatkan penawaran eksklusif serta inspirasi bunga terbaru.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                style={{
                  flex: 1,
                  backgroundColor: "rgba(245,240,232,0.06)",
                  border: "1px solid rgba(201,169,110,0.25)",
                  borderRight: "none",
                  padding: "12px 16px",
                  color: "#f5f0e8",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "11px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  backgroundColor: "#c9a96e",
                  color: "#1a2e1a",
                  border: "none",
                  padding: "12px 16px",
                  cursor: "pointer",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                DAFTAR
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
        >
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "10px",
              color: "rgba(245,240,232,0.35)",
              letterSpacing: "0.05em",
            }}
          >
            © {year} La Fleur Maison de Fleurs. Seluruh hak cipta dilindungi.
          </p>
          <p
            className="flex items-center gap-1 mt-3 md:mt-0"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "10px",
              color: "rgba(245,240,232,0.35)",
            }}
          >
            Dibuat dengan <Heart size={10} fill="#c9a96e" color="#c9a96e" /> penuh kasih di Jakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
