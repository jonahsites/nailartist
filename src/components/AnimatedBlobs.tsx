import { motion } from "motion/react";

export default function AnimatedBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-base">
      {/* Subtle Cheetah Pattern Background */}
      <div className="absolute inset-0 cheetah-pattern opacity-[0.03]" />
      
      {/* Soft Gold/Paper Glows */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-gold-soft blur-[180px]"
      />
      
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[-10%] w-[100vw] h-[100vw] rounded-full bg-paper blur-[150px]"
      />
      
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
    </div>
  );
}
