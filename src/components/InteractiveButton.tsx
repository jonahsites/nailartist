import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface InteractiveButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function InteractiveButton({ children, className = "", onClick }: InteractiveButtonProps) {
  return (
    <motion.button
      whileHover="hover"
      onClick={onClick}
      className={`relative overflow-hidden group py-4 px-10 border border-gold/20 bg-white text-primary font-body text-[11px] font-bold uppercase tracking-[0.3em] flex items-center gap-4 transition-all duration-500 rounded-full shadow-lg shadow-primary/5 hover:shadow-gold/20 ${className}`}
    >
      <motion.div
        variants={{
          hover: { x: 0 },
        }}
        initial={{ x: "-101%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-gold"
      />
      <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-4">
        {children}
        <ArrowRight className="w-4 h-4" />
      </span>
    </motion.button>
  );
}
