import { motion } from "motion/react";

export default function Services() {
  return (
    <section id="services" className="relative py-48 overflow-hidden bg-base">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-silver/5 blur-[120px] pointer-events-none" />
      
      <div className="relative border-y border-white/5 py-32 bg-accent-warm/30">
        <div className="flex flex-col gap-0 items-center overflow-hidden">
          <motion.h2 
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[10vw] font-display whitespace-nowrap chrome-text scale-y-125"
          >
            CUSTOM <span className="text-outline text-white/20">PRESS-ONS</span>
          </motion.h2>
          
          <motion.div 
            initial={{ x: "100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center -mt-4"
          >
            <h2 className="text-[12vw] md:text-[8vw] tracking-tighter leading-[0.75] text-white/90 font-gothic normal-case">
              Booking Now
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-x border-white/5 max-w-[1440px] mx-auto mt-32">
        <div className="divide-y divide-white/5 border-y border-white/5">
          <ServiceItem 
            number="01" 
            title="FULL CUSTOM SET" 
            description="Handmade press-on nails created to your exact measurements and design preferences."
          />
          <ServiceItem 
            number="02" 
            title="NAIL ARTISTRY" 
            description="Specialized hand-painted designs ranging from minimalist to complex creative patterns."
          />
        </div>
        <div className="divide-y divide-white/5 border-y border-white/5 border-l border-white/5">
          <ServiceItem 
            number="03" 
            title="CHROME & 3D" 
            description="Premium finishes including metallic chrome gradients and custom 3D sculpted textures."
          />
          <ServiceItem 
            number="04" 
            title="SIZING KITS" 
            description="Required for first-time orders to ensure a perfect fit for your custom handmade sets."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="group p-12 hover:bg-white transition-all duration-500 relative"
    >
      <div className="flex justify-between items-start mb-12">
        <span className="font-y2k text-xs opacity-40 group-hover:text-black group-hover:opacity-100 transition-all">{number}</span>
        <div className="w-10 h-[1px] bg-white/20 group-hover:bg-black transition-all" />
      </div>
      <h3 className="text-4xl font-display group-hover:text-black transition-all mb-6">{title}</h3>
      <p className="text-white/40 group-hover:text-black/60 leading-relaxed font-body max-w-sm transition-all">{description}</p>
      
      <div className="absolute bottom-8 right-8 text-black opacity-0 group-hover:opacity-100 transition-all font-gothic text-2xl">
        LD
      </div>
    </motion.div>
  );
}
