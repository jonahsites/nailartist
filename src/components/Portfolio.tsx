import { motion } from "motion/react";

const ARCHIVE = [
  {
    id: 1,
    name: "MATTE BLACK ART",
    price: "STYLE 01",
    image: "https://images.unsplash.com/photo-1632345034870-179a5957018c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "CHROME DETAILS",
    price: "STYLE 02",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "METALLIC ACCENTS",
    price: "STYLE 03",
    image: "https://images.unsplash.com/photo-1629190875141-944208d13264?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "GEOMETRIC LINER",
    price: "STYLE 04",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "LIQUID SILVER",
    price: "STYLE 05",
    image: "https://images.unsplash.com/photo-1610992015732-2449b0deec5e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "MINIMALIST NOIR",
    price: "STYLE 06",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black px-6 md:px-12 py-48 border-t border-white/5">
      <div className="flex justify-between items-end mb-24">
        <h2 className="font-display text-6xl md:text-8xl">Work <span className="text-white/20">Portfolio</span></h2>
        <div className="font-y2k text-[10px] opacity-40 text-right hidden md:block tracking-[0.4em]">
          SELECTED SETS BY LD NAILS<br />
          RECENT WORK 2024
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
        {ARCHIVE.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden mb-8 glass relative">
              <motion.img
                whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                initial={{ filter: "grayscale(100%)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-all"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-y2k text-[10px] tracking-widest text-white">VIEW FULL SET ARCHIVE</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <h3 className="font-y2k text-xs tracking-[0.2em] group-hover:text-white transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-white/30 text-[10px] mt-2 uppercase tracking-widest font-body">{product.price}</p>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <span className="text-sm">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
