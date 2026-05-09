import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6 block font-semibold"
            >
              our expertise
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-display leading-[0.9] text-primary lowercase line-clamp-2">
              refined <br /> services
            </h2>
          </div>
          <p className="text-primary/50 max-w-xs text-xs md:text-sm leading-relaxed uppercase tracking-widest font-light">
            Every set is a unique masterpiece, tailored to your aesthetic and lifestyle in the heart of NYC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/10">
          <ServiceItem 
            number="01" 
            title="minimalist sets" 
            description="clean lines and subtle elegance for the modern professional."
            price="from $120"
          />
          <ServiceItem 
            number="02" 
            title="gold leaf art" 
            description="premium 24k gold leaf integration with deep architectural textures."
            price="from $180"
          />
          <ServiceItem 
            number="03" 
            title="sculpted forms" 
            description="hand-sculpted 3d elements that redefine nail structure."
            price="from $220"
          />
          <ServiceItem 
            number="04" 
            title="nyc concierge" 
            description="private on-location sessions in Manhattan and Brooklyn."
            price="from $350"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ number, title, description, price }: { number: string, title: string, description: string, price: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group p-10 bg-base transition-all duration-500 flex flex-col h-full relative"
    >
      <span className="font-display italic text-gold/30 text-4xl mb-12 block">{number}</span>
      <h3 className="text-3xl font-display text-primary mb-6 lowercase group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-primary/40 text-xs leading-relaxed lowercase mb-12 flex-grow">{description}</p>
      
      <div className="flex items-center justify-between pt-6 border-t border-gold/5">
        <span className="text-[10px] uppercase tracking-widest font-bold text-gold">{price}</span>
        <ArrowRight className="w-4 h-4 text-primary/20 group-hover:text-gold transition-all group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}
