export function Marquee() {
  const items = [
    "Mawar Premium",
    "✦",
    "Peony Elegan",
    "✦",
    "Anggrek Eksklusif",
    "✦",
    "Rangkaian Pernikahan",
    "✦",
    "Hamper Mewah",
    "✦",
    "Pengiriman Same-Day",
    "✦",
    "Custom Arrangement",
    "✦",
  ];

  return (
    <div
      className="overflow-hidden py-4"
      style={{
        backgroundColor: "#c9a96e",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee 25s linear infinite",
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              color: "#1a2e1a",
              fontWeight: 600,
              padding: "0 20px",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
