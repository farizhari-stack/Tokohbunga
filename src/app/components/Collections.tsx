import { useState } from "react";
import { ShoppingBag, Heart, Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  description: string;
}

interface CollectionsProps {
  images: string[];
}

export function Collections({ images }: CollectionsProps) {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const filters = ["Semua", "Mawar", "Peony", "Anggrek", "Campuran", "Premium"];

  const products: Product[] = [
    {
      id: 1,
      name: "Eternal Rouge",
      category: "Mawar",
      price: "Rp 485.000",
      originalPrice: "Rp 620.000",
      image: images[0],
      badge: "Best Seller",
      description: "12 tangkai mawar merah premium dari kebun terbaik",
    },
    {
      id: 2,
      name: "Ivory Dreams",
      category: "Peony",
      price: "Rp 620.000",
      image: images[1],
      badge: "Baru",
      description: "Rangkaian peony putih yang memukau dan elegan",
    },
    {
      id: 3,
      name: "Golden Bliss",
      category: "Campuran",
      price: "Rp 750.000",
      image: images[2],
      badge: "Premium",
      description: "Koleksi bunga premium dengan sentuhan emas",
    },
    {
      id: 4,
      name: "Pink Paradise",
      category: "Peony",
      price: "Rp 540.000",
      originalPrice: "Rp 680.000",
      image: images[3],
      description: "Peony pink lembut yang romantis dan memesona",
    },
    {
      id: 5,
      name: "Pure Orchid",
      category: "Anggrek",
      price: "Rp 890.000",
      image: images[4],
      badge: "Eksklusif",
      description: "Anggrek putih langka dengan kemasan mewah",
    },
    {
      id: 6,
      name: "Sunny Garden",
      category: "Campuran",
      price: "Rp 430.000",
      image: images[5],
      description: "Campuran bunga cerah penuh keceriaan",
    },
  ];

  const filtered =
    activeFilter === "Semua"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const toggleLike = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="koleksi" className="py-24 px-6" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
              KOLEKSI KAMI
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
            Rangkaian Bunga <em style={{ fontStyle: "italic", color: "#8b6f3e" }}>Pilihan</em>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              letterSpacing: "0.05em",
              color: "#5a4a3a",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Setiap rangkaian dibuat dengan tangan oleh para florist berpengalaman kami,
            menggunakan bunga segar pilihan yang dipanen setiap hari.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.25em",
                padding: "10px 24px",
                border: activeFilter === f ? "1px solid #c9a96e" : "1px solid rgba(26,46,26,0.2)",
                backgroundColor: activeFilter === f ? "#c9a96e" : "transparent",
                color: activeFilter === f ? "#1a2e1a" : "#5a4a3a",
                cursor: "pointer",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 4px 30px rgba(26,46,26,0.08)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden" style={{ height: "340px" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(10,18,10,0.45)",
                    opacity: hoveredId === product.id ? 1 : 0,
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#c9a96e",
                      color: "#fff",
                      border: "none",
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                    }}
                    className="hover:scale-110"
                  >
                    <ShoppingBag size={16} />
                  </button>
                  <button
                    onClick={() => toggleLike(product.id)}
                    style={{
                      backgroundColor: likedIds.includes(product.id) ? "#c9a96e" : "rgba(255,255,255,0.9)",
                      color: likedIds.includes(product.id) ? "#fff" : "#1a2e1a",
                      border: "none",
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    className="hover:scale-110"
                  >
                    <Heart size={16} fill={likedIds.includes(product.id) ? "#fff" : "none"} />
                  </button>
                  <button
                    style={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      color: "#1a2e1a",
                      border: "none",
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                    }}
                    className="hover:scale-110"
                  >
                    <Eye size={16} />
                  </button>
                </div>

                {/* Badge */}
                {product.badge && (
                  <div
                    className="absolute top-4 left-4"
                    style={{
                      backgroundColor: "#c9a96e",
                      color: "#1a2e1a",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      padding: "5px 12px",
                      fontWeight: 600,
                    }}
                  >
                    {product.badge.toUpperCase()}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "9px",
                        letterSpacing: "0.25em",
                        color: "#c9a96e",
                        marginBottom: "6px",
                      }}
                    >
                      {product.category.toUpperCase()}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.4rem",
                        color: "#1a2e1a",
                        fontWeight: 500,
                        lineHeight: 1.2,
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="mt-2"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "11px",
                        color: "#7a6a5a",
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5 pt-5" style={{ borderTop: "1px solid rgba(201,169,110,0.2)" }}>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.3rem",
                        color: "#1a2e1a",
                        fontWeight: 600,
                      }}
                    >
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span
                        className="ml-2"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "11px",
                          color: "#9a8a7a",
                          textDecoration: "line-through",
                        }}
                      >
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      color: "#1a2e1a",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      padding: "8px 18px",
                      border: "1px solid rgba(26,46,26,0.3)",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                    className="hover:bg-[#1a2e1a] hover:text-[#f5f0e8] uppercase"
                  >
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <button
            style={{
              backgroundColor: "#1a2e1a",
              color: "#c9a96e",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              padding: "18px 56px",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              transition: "all 0.3s",
            }}
            className="hover:bg-[#c9a96e] hover:text-[#1a2e1a] uppercase"
          >
            Lihat Semua Koleksi
          </button>
        </div>
      </div>
    </section>
  );
}
