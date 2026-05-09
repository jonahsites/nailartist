import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[95vh] w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-[1px] w-8 bg-gold/50"></span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-medium">
            bespoke nail artistry
          </span>
          <span className="h-[1px] w-8 bg-gold/50"></span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl md:text-[10rem] font-display mb-12 leading-[0.8] text-primary"
        >
          nail <br />
          <span className="pl-12 md:pl-32 italic font-light lowercase">artist</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <p className="max-w-md text-primary/60 text-sm md:text-base leading-relaxed font-light tracking-wide uppercase">
            elevating the craft of nail design through minimalist elegance and distinct precision.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">Based in New York</span>
            <div className="w-1 h-1 bg-gold rounded-full"></div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary/50">EST 2024</span>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-12 py-4 bg-primary text-white rounded-full text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-gold transition-colors duration-500 shadow-xl shadow-primary/10"
          >
            book session
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 flex gap-20 opacity-[0.03]">
        <span className="text-[20vw] font-display italic text-primary">na</span>
        <span className="text-[20vw] font-display translate-y-20 text-primary">nyc</span>
      </div>
      
      <motion.div 
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/40"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
