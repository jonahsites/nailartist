import { Instagram, Mail, Globe } from "lucide-react";
import type { ReactNode } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-base text-primary py-32 px-6 md:px-12 overflow-hidden relative border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-display mb-8 tracking-tighter">LD Nails<br /><span className="text-white/30 font-gothic normal-case text-2xl">Professional Nail Artistry</span></h2>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialIcon icon={<Mail size={18} />} href="mailto:Ldclaws16@gmail.com" />
              <SocialIcon icon={<Globe size={18} />} href="#" />
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <h5 className="text-white font-y2k uppercase text-[10px] tracking-[0.4em] mb-8 opacity-40">Navigation</h5>
          <ul className="space-y-4 text-xs font-y2k tracking-widest uppercase">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="#booking" className="hover:text-white transition-colors">Booking</a></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h5 className="text-white font-y2k uppercase text-[10px] tracking-[0.4em] mb-8 opacity-40">Contact</h5>
          <ul className="space-y-4 text-sm font-light text-white/60">
            <li className="font-y2k text-[10px] uppercase">Based in US</li>
            <li>Ldclaws16@gmail.com</li>
            <li className="italic font-gothic text-xl"> Booking Open</li>
          </ul>
        </div>

        <div className="md:col-span-1 flex flex-col justify-end items-start md:items-end">
          <div className="text-right">
            <p className="text-[10px] font-y2k tracking-[0.2em] font-medium opacity-20 mb-2 uppercase">© {currentYear} LD Claws Archive</p>
            <p className="text-xs font-light opacity-50">Handcrafted in the US. No PR.</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-12 right-0 opacity-[0.02] select-none pointer-events-none">
        <h1 className="text-[35vw] leading-none mb-0 font-display font-black tracking-tighter">LDC</h1>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      className="w-12 h-12 flex items-center justify-center glass rounded-full hover:bg-white hover:text-black transition-all duration-500"
    >
      {icon}
    </a>
  );
}
