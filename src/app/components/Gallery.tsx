interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <section id="galeri" className="py-24 px-6" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
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
              GALERI
            </span>
            <div style={{ width: "50px", height: "1px", backgroundColor: "#c9a96e" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#1a2e1a",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Karya <em style={{ fontStyle: "italic", color: "#8b6f3e" }}>Terbaik</em> Kami
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* Large item */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden" style={{ height: "460px" }}>
            <img
              src={images[0]}
              alt="Gallery 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              style={{ backgroundColor: "rgba(10,18,10,0.4)" }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  color: "#f5f0e8",
                  fontStyle: "italic",
                }}
              >
                Eternal Rouge
              </span>
            </div>
          </div>

          {/* Small items */}
          {images.slice(1, 3).map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden"
              style={{ height: "220px" }}
            >
              <img
                src={img}
                alt={`Gallery ${i + 2}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(10,18,10,0.35)" }}
              />
            </div>
          ))}

          {/* Medium items */}
          {images.slice(3, 7).map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden"
              style={{ height: "220px" }}
            >
              <img
                src={img}
                alt={`Gallery ${i + 4}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(10,18,10,0.35)" }}
              />
            </div>
          ))}

          {/* Wide item */}
          <div className="col-span-2 relative group overflow-hidden" style={{ height: "220px" }}>
            <img
              src={images[7] || images[0]}
              alt="Gallery wide"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              style={{ backgroundColor: "rgba(10,18,10,0.4)" }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  color: "#f5f0e8",
                  fontStyle: "italic",
                }}
              >
                La Fleur Gallery
              </span>
            </div>
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.15em",
              color: "#7a6a5a",
              marginBottom: "16px",
            }}
          >
            Ikuti kami di Instagram untuk inspirasi bunga terbaru
          </p>
          <a
            href="#"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#c9a96e",
              textDecoration: "none",
              borderBottom: "1px solid rgba(201,169,110,0.5)",
              paddingBottom: "2px",
            }}
          >
            @LAFLEUR.ID
          </a>
        </div>
      </div>
    </section>
  );
}
