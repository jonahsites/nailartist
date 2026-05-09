import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface InteractiveButtonProps {
  children: ReactNode;
  className?: string;
}

export default function InteractiveButton({ children, className = "" }: InteractiveButtonProps) {
  return (
    <motion.button
      whileHover="hover"
      className={`relative overflow-hidden group py-4 px-8 bg-primary text-base font-body font-semibold uppercase tracking-widest flex items-center gap-3 transition-colors duration-300 ${className}`}
    >
      <motion.div
        variants={{
          hover: { x: 0 },
        }}
        initial={{ x: "-101%" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-white"
      />
      <span className="relative z-10 group-hover:text-accent transition-colors duration-300 flex items-center gap-3">
        {children}
        <ArrowRight className="w-5 h-5" />
      </span>
    </motion.button>
  );
}
