import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: "Amelia Rahayu",
      role: "Pengantin Wanita",
      text: "La Fleur menghadirkan keajaiban di hari pernikahan saya. Setiap rangkaian bunga begitu sempurna dan memukau setiap tamu yang hadir. Saya tidak bisa membayangkan hari spesial saya tanpa sentuhan La Fleur.",
      rating: 5,
      date: "Februari 2026",
    },
    {
      name: "Budi Santoso",
      role: "Direktur PT. Harmoni",
      text: "Kami selalu mempercayakan dekorasi acara korporat perusahaan kepada La Fleur. Kualitas dan profesionalisme mereka selalu melampaui ekspektasi kami. Sangat direkomendasikan!",
      rating: 5,
      date: "Januari 2026",
    },
    {
      name: "Diana Kusuma",
      role: "Pelanggan Langganan",
      text: "Langganan bunga mingguan dari La Fleur telah mengubah suasana rumah saya sepenuhnya. Pilihan bunganya selalu segar dan indah. Tim mereka juga sangat ramah dan perhatian.",
      rating: 5,
      date: "Desember 2025",
    },
    {
      name: "Rizki Pratama",
      role: "Event Organizer",
      text: "Sebagai EO, saya memiliki standar tinggi untuk vendor bunga. La Fleur adalah yang terbaik yang pernah saya temukan. Kreativitas, kualitas, dan ketepatan waktu — mereka unggul dalam semua aspek.",
      rating: 5,
      date: "November 2025",
    },
  ];

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#0f190f" }}
    >
      {/* Decorative background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ opacity: 0.03 }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20vw",
            color: "#c9a96e",
            whiteSpace: "nowrap",
          }}
        >
          La Fleur
        </span>
      </div>

      <div className="max-w-5xl mx-auto relative">
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
              TESTIMONI
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
            Kata Mereka tentang{" "}
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>La Fleur</em>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          className="text-center mx-auto"
          style={{
            maxWidth: "780px",
            padding: "60px 48px",
            border: "1px solid rgba(201,169,110,0.2)",
            backgroundColor: "rgba(201,169,110,0.04)",
            position: "relative",
          }}
        >
          {/* Quote Icon */}
          <div
            className="absolute"
            style={{
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#c9a96e",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Quote size={18} color="#1a2e1a" />
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
              <Star key={i} size={14} fill="#c9a96e" color="#c9a96e" />
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.15rem, 2.5vw, 1.6rem)",
              color: "#f5f0e8",
              lineHeight: 1.7,
              fontStyle: "italic",
              fontWeight: 300,
              marginBottom: "40px",
            }}
          >
            "{testimonials[active].text}"
          </p>

          <div style={{ width: "40px", height: "1px", backgroundColor: "#c9a96e", margin: "0 auto 24px" }} />

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              color: "#c9a96e",
              fontWeight: 500,
              marginBottom: "4px",
            }}
          >
            {testimonials[active].name}
          </p>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            {testimonials[active].role.toUpperCase()} · {testimonials[active].date}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            style={{
              backgroundColor: "transparent",
              color: "#c9a96e",
              border: "1px solid rgba(201,169,110,0.4)",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            className="hover:bg-[#c9a96e] hover:text-[#1a2e1a]"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? "32px" : "8px",
                  height: "2px",
                  backgroundColor: i === active ? "#c9a96e" : "rgba(201,169,110,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              backgroundColor: "transparent",
              color: "#c9a96e",
              border: "1px solid rgba(201,169,110,0.4)",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            className="hover:bg-[#c9a96e] hover:text-[#1a2e1a]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
