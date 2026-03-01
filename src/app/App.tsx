import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Collections } from "./components/Collections";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// Image URLs from Unsplash
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1771164802337-3c980073df4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmbG93ZXIlMjBib3VxdWV0JTIwZWxlZ2FudCUyMHJvc2VzfGVufDF8fHx8MTc3MjM3MDQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  shop: "https://images.unsplash.com/photo-1726678640323-f5ea9ad9e104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBzaG9wJTIwaW50ZXJpb3IlMjBlbGVnYW50JTIwYm91dGlxdWV8ZW58MXx8fHwxNzcyMzY5NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  products: [
    "https://images.unsplash.com/photo-1758738181122-73379c806154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGRhcmslMjBiYWNrZ3JvdW5kJTIwZHJhbWF0aWMlMjBsdXh1cnl8ZW58MXx8fHwxNzcyMzcwNTAzfDA&ixlib=rb-4.1.0&q=80&w=600",
    "https://images.unsplash.com/photo-1770320538703-baa8d8552967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2hpdGUlMjByb3NlcyUyMHdlZGRpbmclMjBib3VxdWV0fGVufDF8fHx8MTc3MjM3MDQ5Nnww&ixlib=rb-4.1.0&q=80&w=600",
    "https://images.unsplash.com/photo-1679452233773-b02d98c6c83c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yYWwlMjBnaWZ0JTIwYm94JTIwcHJlbWl1bSUyMHBhY2thZ2luZyUyMHJpYmJvbnxlbnwxfHx8fDE3NzIzNzA1MDF8MA&ixlib=rb-4.1.0&q=80&w=600",
    "https://images.unsplash.com/photo-1716121202367-3d85fb9beb1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcGVvbnklMjBmbG93ZXJzJTIwY2xvc2UlMjB1cCUyMGx1eHVyeXxlbnwxfHx8fDE3NzIzNzA0OTl8MA&ixlib=rb-4.1.0&q=80&w=600",
    "https://images.unsplash.com/photo-1733760366922-822225987040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoaWQlMjBmbG93ZXJzJTIwbWluaW1hbGlzdCUyMGVsZWdhbnQlMjB3aGl0ZXxlbnwxfHx8fDE3NzIzNzA1MDN8MA&ixlib=rb-4.1.0&q=80&w=600",
    "https://images.unsplash.com/photo-1663613815688-e467a6230ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBtaXhlZCUyMGJvdXF1ZXQlMjBjb2xvcmZ1bCUyMGFycmFuZ2VtZW50fGVufDF8fHx8MTc3MjM3MDUwNHww&ixlib=rb-4.1.0&q=80&w=600",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1724847664518-c62583f1bf69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmbG9yYWwlMjBhcnJhbmdlbWVudCUyMHByZW1pdW0lMjBmbG93ZXJzfGVufDF8fHx8MTc3MjM3MDQ5N3ww&ixlib=rb-4.1.0&q=80&w=800",
    "https://images.unsplash.com/photo-1758738181122-73379c806154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGRhcmslMjBiYWNrZ3JvdW5kJTIwZHJhbWF0aWMlMjBsdXh1cnl8ZW58MXx8fHwxNzcyMzcwNTAzfDA&ixlib=rb-4.1.0&q=80&w=600",
    "https://images.unsplash.com/photo-1716121202367-3d85fb9beb1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcGVvbnklMjBmbG93ZXJzJTIwY2xvc2UlMjB1cCUyMGx1eHVyeXxlbnwxfHx8fDE3NzIzNzA0OTl8MA&ixlib=rb-4.1.0&q=80&w=600",
    "https://images.unsplash.com/photo-1770320538703-baa8d8552967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2hpdGUlMjByb3NlcyUyMHdlZGRpbmclMjBib3VxdWV0fGVufDF8fHx8MTc3MjM3MDQ5Nnww&ixlib=rb-4.1.0&q=80&w=600",
    "https://images.unsplash.com/photo-1679452233773-b02d98c6c83c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yYWwlMjBnaWZ0JTIwYm94JTIwcHJlbWl1bSUyMHBhY2thZ2luZyUyMHJpYmJvbnxlbnwxfHx8fDE3NzIzNzA1MDF8MA&ixlib=rb-4.1.0&q=80&w=600",
    "https://images.unsplash.com/photo-1733760366922-822225987040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoaWQlMjBmbG93ZXJzJTIwbWluaW1hbGlzdCUyMGVsZWdhbnQlMjB3aGl0ZXxlbnwxfHx8fDE3NzIzNzA1MDN8MA&ixlib=rb-4.1.0&q=80&w=600",
    "https://images.unsplash.com/photo-1663613815688-e467a6230ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBtaXhlZCUyMGJvdXF1ZXQlMjBjb2xvcmZ1bCUyMGFycmFuZ2VtZW50fGVufDF8fHx8MTc3MjM3MDUwNHww&ixlib=rb-4.1.0&q=80&w=600",
    "https://images.unsplash.com/photo-1771164802337-3c980073df4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmbG93ZXIlMjBib3VxdWV0JTIwZWxlZ2FudCUyMHJvc2VzfGVufDF8fHx8MTc3MjM3MDQ5Nnww&ixlib=rb-4.1.0&q=80&w=800",
  ],
};

export default function App() {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <Navbar />
      <Hero heroImage={IMAGES.hero} />
      <Marquee />
      <Collections images={IMAGES.products} />
      <About shopImage={IMAGES.shop} />
      <Services />
      <Gallery images={IMAGES.gallery} />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
