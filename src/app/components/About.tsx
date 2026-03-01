interface AboutProps {
  shopImage: string;
}

export function About({ shopImage }: AboutProps) {
  const stats = [
    { number: "15+", label: "Tahun Pengalaman" },
    { number: "5.000+", label: "Pelanggan Setia" },
    { number: "200+", label: "Jenis Bunga" },
    { number: "50+", label: "Penghargaan" },
  ];

  return (
    <section id="tentang-kami" className="py-24 px-6" style={{ backgroundColor: "#1a2e1a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{ height: "580px" }}
            >
              <img
                src={shopImage}
                alt="La Fleur Shop"
                className="w-full h-full object-cover"
              />
              {/* Gold frame accent */}
              <div
                className="absolute"
                style={{
                  top: "-16px",
                  left: "-16px",
                  right: "32px",
                  bottom: "32px",
                  border: "1px solid rgba(201,169,110,0.4)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Floating Badge */}
            <div
              className="absolute bottom-8 right-0 text-center p-8"
              style={{
                backgroundColor: "#c9a96e",
                width: "160px",
                height: "160px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.8rem",
                  color: "#1a2e1a",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                15
              </span>
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  color: "#1a2e1a",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: 1.4,
                  marginTop: "4px",
                }}
              >
                TAHUN
                <br />
                KEUNGGULAN
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div style={{ width: "40px", height: "1px", backgroundColor: "#c9a96e" }} />
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.4em",
                  color: "#c9a96e",
                }}
              >
                TENTANG KAMI
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#f5f0e8",
                fontWeight: 300,
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              Seniman Bunga dengan
              <br />
              <em style={{ fontStyle: "italic", color: "#c9a96e" }}>Dedikasi Tanpa Batas</em>
            </h2>

            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "13px",
                color: "rgba(245,240,232,0.75)",
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: "20px",
                letterSpacing: "0.03em",
              }}
            >
              La Fleur berdiri pada tahun 2010 sebagai toko bunga premium yang menggabungkan
              seni floral tradisional dengan sentuhan kontemporer yang elegan. Setiap karya
              kami adalah sebuah ekspresi keindahan yang dibuat dengan sepenuh hati.
            </p>

            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "13px",
                color: "rgba(245,240,232,0.75)",
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: "36px",
                letterSpacing: "0.03em",
              }}
            >
              Kami bekerja sama langsung dengan petani bunga lokal dan internasional untuk
              memastikan setiap bunga yang sampai ke tangan Anda dalam kondisi segar dan
              berkualitas tertinggi.
            </p>

            {/* Divider */}
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(201,169,110,0.25)", marginBottom: "36px" }} />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.5rem",
                      color: "#c9a96e",
                      fontWeight: 600,
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      color: "rgba(245,240,232,0.6)",
                      fontWeight: 400,
                    }}
                  >
                    {stat.label.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
