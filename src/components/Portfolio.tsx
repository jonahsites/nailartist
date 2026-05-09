import { motion } from "motion/react";

const ARCHIVE = [
  {
    id: 1,
    name: "ethereal pearl",
    collection: "minimal collection",
    image: "https://images.unsplash.com/photo-1632345034870-179a5957018c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "gilded edge",
    collection: "gold series",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "manhattan mornings",
    collection: "city life",
    image: "https://images.unsplash.com/photo-1629190875141-944208d13264?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "velvet ivory",
    collection: "bridal bespoke",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "chrome essence",
    collection: "metallic dream",
    image: "https://images.unsplash.com/photo-1610992015732-2449b0deec5e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "serenity taupe",
    collection: "daily luxury",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 md:px-12 py-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6 block font-semibold">curated archive</span>
          <h2 className="font-display text-7xl md:text-8xl text-primary lowercase">selected <br /> works</h2>
        </div>
        <div className="text-[11px] text-primary/40 text-left md:text-right tracking-[0.2em] font-light uppercase leading-relaxed max-w-xs">
          a digital exhibition of bespoke artistry. focused on form, texture, and the luxury of minimalism.
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
        {ARCHIVE.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden mb-10 relative bg-paper border border-gold/5 shadow-2xl shadow-primary/5">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-4xl text-primary lowercase group-hover:text-gold transition-colors duration-500">
                {product.name}
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">{product.collection}</span>
                <span className="h-[1px] w-6 bg-primary/10"></span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-primary/30 group-hover:text-primary transition-colors">view details</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
