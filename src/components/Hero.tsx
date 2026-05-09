import { motion } from "motion/react";
import { Zap } from "lucide-react";

const StageHero = () => (
  <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white font-light">
    <div className="relative z-10 flex flex-col items-center text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.3, y: 0 }}
        className="text-[10px] md:text-[11px] font-y2k tracking-[1.5em] uppercase mb-8 border-b border-white/10 pb-4"
      >
        Handmade Press-Ons
      </motion.span>
      
      <motion.h1 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-6xl md:text-9xl tracking-[0.2em] uppercase mb-16 px-6 md:px-12 font-display leading-tight"
      >
        L D <br /> 
        <span className="font-gothic normal-case italic text-white/40 block -mt-4 md:-mt-8">Claws</span>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-8 md:gap-24 items-center"
      >
        <span className="font-y2k text-lg md:text-2xl italic tracking-tighter opacity-40">US BASED</span>
        <button className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group">
          <Zap size={20} className="group-hover:fill-current" />
        </button>
        <span className="font-y2k text-lg md:text-2xl italic tracking-tighter opacity-40">Professional</span>
      </motion.div>
    </div>

    {/* Background elements */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white opacity-[0.02] rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vh] md:text-[60vh] font-black italic opacity-[0.01] select-none leading-none">
        LC
      </div>
    </div>
  </section>
);

export default function Hero() {
  return (
    <div className="bg-[#050505] text-white w-full h-screen overflow-hidden">
      <StageHero />
    </div>
  );
}
