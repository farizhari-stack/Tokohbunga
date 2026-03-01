import { useState } from "react";
import { MapPin, Phone, Clock, Instagram, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", occasion: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "", occasion: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(201,169,110,0.3)",
    padding: "14px 0",
    color: "#f5f0e8",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    letterSpacing: "0.05em",
    outline: "none",
    transition: "border-color 0.3s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "9px",
    letterSpacing: "0.3em",
    color: "#c9a96e",
    display: "block",
    marginBottom: "4px",
  };

  return (
    <section id="kontak" className="py-24 px-6" style={{ backgroundColor: "#1a2e1a" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div style={{ width: "50px", height: "1px", backgroundColor: "#c9a96e" }} />
            <span
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.4em",
                color: "#c9a96e",
              }}
            >
              HUBUNGI KAMI
            </span>
            <div style={{ width: "50px", height: "1px", backgroundColor: "#c9a96e" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#f5f0e8",
              fontWeight: 300,
              lineHeight: 1.2,
            }}
          >
            Mari Wujudkan
            <br />
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>Impian</em> Anda
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-10">
              <div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    color: "#f5f0e8",
                    marginBottom: "20px",
                    fontWeight: 400,
                  }}
                >
                  Informasi Toko
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: <MapPin size={16} />,
                      label: "ALAMAT",
                      value: "Jl. Sudirman Kav. 52, Gedung La Fleur Lt. 1\nJakarta Selatan, 12190",
                    },
                    {
                      icon: <Phone size={16} />,
                      label: "TELEPON",
                      value: "+62 821 5555 8888\n+62 21 5555 9999",
                    },
                    {
                      icon: <Clock size={16} />,
                      label: "JAM BUKA",
                      value: "Senin – Sabtu: 08.00 – 20.00\nMinggu: 09.00 – 17.00",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div
                        style={{
                          color: "#c9a96e",
                          marginTop: "3px",
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "9px",
                            letterSpacing: "0.3em",
                            color: "#c9a96e",
                            marginBottom: "4px",
                          }}
                        >
                          {item.label}
                        </p>
                        <p
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "12px",
                            color: "rgba(245,240,232,0.75)",
                            lineHeight: 1.7,
                            fontWeight: 300,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(201,169,110,0.2)", marginBottom: "24px" }} />
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    color: "#c9a96e",
                    marginBottom: "16px",
                  }}
                >
                  IKUTI KAMI
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: <Instagram size={18} />, label: "@lafleur.id" },
                    { icon: <MessageCircle size={18} />, label: "WhatsApp" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                      style={{
                        color: "rgba(245,240,232,0.7)",
                        textDecoration: "none",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "11px",
                      }}
                    >
                      <span style={{ color: "#c9a96e" }}>{social.icon}</span>
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="lg:col-span-3 p-10"
            style={{ border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.8rem",
                color: "#f5f0e8",
                marginBottom: "32px",
                fontWeight: 400,
              }}
            >
              Kirim Pesan
            </h3>

            {submitted ? (
              <div
                className="text-center py-12"
                style={{
                  border: "1px solid rgba(201,169,110,0.3)",
                  backgroundColor: "rgba(201,169,110,0.05)",
                }}
              >
                <div style={{ color: "#c9a96e", marginBottom: "12px" }}>
                  <Send size={32} className="mx-auto" />
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    color: "#f5f0e8",
                  }}
                >
                  Pesan Terkirim!
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "12px",
                    color: "rgba(245,240,232,0.6)",
                    marginTop: "8px",
                  }}
                >
                  Tim kami akan menghubungi Anda segera.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label style={labelStyle}>NAMA LENGKAP</label>
                    <input
                      style={inputStyle}
                      type="text"
                      placeholder="Nama Anda"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>EMAIL</label>
                    <input
                      style={inputStyle}
                      type="email"
                      placeholder="email@anda.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label style={labelStyle}>NOMOR TELEPON</label>
                    <input
                      style={inputStyle}
                      type="tel"
                      placeholder="+62 8xx xxxx xxxx"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>JENIS ACARA</label>
                    <select
                      style={{ ...inputStyle, cursor: "pointer" }}
                      value={form.occasion}
                      onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                    >
                      <option value="" style={{ backgroundColor: "#1a2e1a" }}>Pilih acara</option>
                      <option value="pernikahan" style={{ backgroundColor: "#1a2e1a" }}>Pernikahan</option>
                      <option value="ulang-tahun" style={{ backgroundColor: "#1a2e1a" }}>Ulang Tahun</option>
                      <option value="korporat" style={{ backgroundColor: "#1a2e1a" }}>Event Korporat</option>
                      <option value="lainnya" style={{ backgroundColor: "#1a2e1a" }}>Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>PESAN ANDA</label>
                  <textarea
                    style={{
                      ...inputStyle,
                      resize: "none",
                      minHeight: "100px",
                    }}
                    placeholder="Ceritakan kebutuhan bunga Anda..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: "#c9a96e",
                    color: "#1a2e1a",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.3em",
                    padding: "16px 48px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 600,
                    transition: "all 0.3s",
                  }}
                  className="hover:opacity-85 uppercase w-full sm:w-auto"
                >
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
