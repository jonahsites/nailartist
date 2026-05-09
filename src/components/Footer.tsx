import { Instagram, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-paper text-primary py-32 px-6 md:px-12 overflow-hidden relative border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-4xl font-display mb-8 lowercase tracking-tight">nail artist</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-primary/40 leading-relaxed mb-8">
              elevating the craft of nail design through minimalist elegance and distinct precision.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={16} />} href="https://instagram.com" />
              <SocialIcon icon={<Mail size={16} />} href="mailto:hello@nailartist.nyc" />
            </div>
          </div>

          <div className="md:col-span-1">
            <h5 className="text-gold uppercase text-[10px] tracking-[0.4em] mb-10 font-bold">Navigation</h5>
            <ul className="space-y-6 text-[10px] font-medium tracking-[0.25em] uppercase text-primary/60">
              <li><a href="#" className="hover:text-gold transition-colors">home</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">services</a></li>
              <li><a href="#portfolio" className="hover:text-gold transition-colors">portfolio</a></li>
              <li><a href="#booking" className="hover:text-gold transition-colors">booking</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h5 className="text-gold uppercase text-[10px] tracking-[0.4em] mb-10 font-bold">Studio</h5>
            <ul className="space-y-6 text-[10px] font-medium tracking-[0.25em] uppercase text-primary/60">
              <li className="flex items-center gap-3">
                <MapPin size={10} className="text-gold" />
                Manhattan, New York
              </li>
              <li>Brooklyn, New York</li>
              <li className="text-gold font-bold italic lowercase normal-case text-base font-display">hello@nailartist.nyc</li>
            </ul>
          </div>

          <div className="md:col-span-1 flex flex-col justify-between items-start md:items-end">
            <div className="w-px h-24 bg-gold/20 hidden md:block" />
            <div className="text-left md:text-right">
              <p className="text-[9px] tracking-[0.2em] font-bold text-primary/40 mb-2 uppercase">© {currentYear} nail artist nyc</p>
              <p className="text-[9px] tracking-[0.2em] font-medium text-gold/60 uppercase italic">all rights reserved</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 left-10 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[25vw] leading-none mb-0 font-display italic lowercase">nyc</h1>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 flex items-center justify-center bg-white border border-gold/10 rounded-full hover:bg-gold hover:text-white transition-all duration-500 text-gold shadow-lg shadow-primary/5"
    >
      {icon}
    </a>
  );
}
