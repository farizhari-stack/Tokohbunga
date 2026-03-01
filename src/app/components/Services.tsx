import { Heart, Gift, Truck, Calendar, Crown, Sparkles } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Heart size={28} />,
      title: "Rangkaian Pernikahan",
      description:
        "Kami merancang dekorasi bunga pernikahan yang sempurna — dari bouquet pengantin hingga dekorasi pelaminan yang memukau.",
    },
    {
      icon: <Gift size={28} />,
      title: "Hamper & Hadiah",
      description:
        "Rangkaian bunga eksklusif dikemas dalam kotak mewah premium, sempurna sebagai hadiah untuk orang-orang terkasih.",
    },
    {
      icon: <Truck size={28} />,
      title: "Pengiriman Ekspres",
      description:
        "Layanan pengiriman same-day di seluruh kota dengan jaminan kesegaran bunga hingga sampai di tangan penerima.",
    },
    {
      icon: <Calendar size={28} />,
      title: "Langganan Bulanan",
      description:
        "Percantik ruangan Anda dengan berlangganan bunga segar mingguan atau bulanan yang kami antar ke lokasi Anda.",
    },
    {
      icon: <Crown size={28} />,
      title: "Event & Korporat",
      description:
        "Dekorasi bunga mewah untuk acara korporat, peluncuran produk, gala dinner, dan berbagai acara prestisius.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Custom Arrangement",
      description:
        "Wujudkan visi Anda bersama florist ahli kami dalam sesi konsultasi personal untuk rangkaian bunga yang unik.",
    },
  ];

  return (
    <section id="layanan" className="py-24 px-6" style={{ backgroundColor: "#f5f0e8" }}>
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
              LAYANAN KAMI
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
            Kami Hadir untuk Setiap
            <br />
            <em style={{ fontStyle: "italic", color: "#8b6f3e" }}>Momen Berharga</em> Anda
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,169,110,0.2)" }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 transition-all duration-400 cursor-pointer"
              style={{
                backgroundColor: "#f5f0e8",
              }}
            >
              {/* Icon */}
              <div
                className="mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  color: "#c9a96e",
                  width: "56px",
                  height: "56px",
                  border: "1px solid rgba(201,169,110,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  color: "#1a2e1a",
                  fontWeight: 500,
                  marginBottom: "12px",
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12px",
                  color: "#7a6a5a",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                {service.description}
              </p>

              <div
                className="mt-6 flex items-center gap-2 group-hover:gap-4 transition-all duration-300"
                style={{ color: "#c9a96e" }}
              >
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    fontWeight: 500,
                  }}
                >
                  PELAJARI LEBIH
                </span>
                <div style={{ width: "24px", height: "1px", backgroundColor: "#c9a96e" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
