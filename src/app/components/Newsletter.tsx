import { useState } from "react";

interface NewsletterProps {
  bgImage: string;
}

export function Newsletter({ bgImage }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(26,20,15,0.85)" }}
        />
      </div>

      {/* Decorative Border */}
      <div
        className="absolute inset-6 pointer-events-none hidden lg:block"
        style={{ border: "1px solid rgba(201,168,76,0.2)" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-12" style={{ backgroundColor: "#c9a84c" }} />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2C10 2 4 7 4 12C4 15.3 6.7 18 10 18C13.3 18 16 15.3 16 12C16 7 10 2 10 2Z" fill="#c9a84c" opacity="0.8"/>
          </svg>
          <div className="h-px w-12" style={{ backgroundColor: "#c9a84c" }} />
        </div>

        <h2
          className="text-white mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: "400",
            lineHeight: "1.2",
          }}
        >
          Dapatkan Inspirasi Bunga
          <br />
          <span className="italic" style={{ color: "#e8c5c0" }}>
            Langsung ke Email Anda
          </span>
        </h2>

        <p
          className="mb-8"
          style={{
            fontFamily: "'Raleway', sans-serif",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.9rem",
            lineHeight: "1.8",
            letterSpacing: "0.05em",
          }}
        >
          Daftar newsletter kami dan dapatkan penawaran eksklusif, tips merawat bunga, 
          dan inspirasi dekorasi terbaru setiap minggu.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda..."
              required
              className="flex-1 px-5 py-4 outline-none text-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#ffffff",
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: "0.05em",
              }}
            />
            <button
              type="submit"
              className="px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: "#c9a84c",
                color: "#1a1410",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: "600",
                border: "1px solid #c9a84c",
                whiteSpace: "nowrap",
              }}
            >
              Daftar
            </button>
          </form>
        ) : (
          <div
            className="py-4 px-8 max-w-md mx-auto"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              backgroundColor: "rgba(201,168,76,0.1)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#c9a84c",
                fontSize: "1.1rem",
                fontStyle: "italic",
              }}
            >
              ✦ Terima kasih! Anda telah terdaftar. ✦
            </p>
          </div>
        )}

        <p
          className="mt-4 text-xs"
          style={{
            fontFamily: "'Raleway', sans-serif",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          Kami menghormati privasi Anda. Tidak ada spam.
        </p>
      </div>
    </section>
  );
}
