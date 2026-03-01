import { ChevronDown } from "lucide-react";

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  const scrollToCollection = () => {
    const el = document.getElementById("koleksi");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beranda"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "680px" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,18,10,0.55) 0%, rgba(10,18,10,0.3) 50%, rgba(10,18,10,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        {/* Ornament top */}
        <div className="flex items-center gap-4 mb-8">
          <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a96e", opacity: 0.7 }} />
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.4em",
              color: "#c9a96e",
            }}
          >
            LUXURY FLORIST
          </span>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a96e", opacity: 0.7 }} />
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "#f5f0e8",
            lineHeight: 1.05,
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          Keindahan yang
          <br />
          <em style={{ fontStyle: "italic", color: "#c9a96e" }}>Abadi</em> dalam
          <br />
          Setiap Kelopak
        </h1>

        <p
          className="mt-8 max-w-xl"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
            letterSpacing: "0.15em",
            color: "rgba(245,240,232,0.8)",
            lineHeight: 1.9,
            fontWeight: 300,
          }}
        >
          Rangkaian bunga premium pilihan untuk setiap momen istimewa dalam hidupmu.
          Kami menghadirkan keanggunan alam yang dirangkai dengan penuh cinta dan keahlian.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-12">
          <button
            onClick={scrollToCollection}
            style={{
              backgroundColor: "#c9a96e",
              color: "#1a2e1a",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              padding: "16px 44px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
            }}
            className="hover:opacity-90 transition-opacity uppercase tracking-widest"
          >
            Lihat Koleksi
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#f5f0e8",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              padding: "15px 44px",
              border: "1px solid rgba(245,240,232,0.5)",
              cursor: "pointer",
              fontWeight: 400,
            }}
            className="hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all uppercase tracking-widest"
          >
            Pesan Sekarang
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToCollection}
          className="absolute bottom-10 animate-bounce"
          style={{ color: "#c9a96e", background: "none", border: "none", cursor: "pointer" }}
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
}
