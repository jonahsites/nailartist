import { motion } from "motion/react";
import { ArrowUpRight, Mail, Instagram, MapPin } from "lucide-react";
import type { ReactNode } from "react";

export default function Booking() {
  return (
    <section id="booking" className="py-32 px-6 md:px-12 relative overflow-hidden bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6 block font-semibold"
            >
              exclusive appointments
            </motion.span>
            <h2 className="text-7xl md:text-9xl font-display leading-[0.8] text-primary lowercase mb-12">
              begin your <br />
              <span className="italic font-light">session</span>
            </h2>
            
            <p className="text-primary/50 text-sm md:text-base leading-relaxed font-light tracking-wide uppercase max-w-md mb-12">
              Accepting private bookings for our New York studio and on-site concierge services. 
              Refined artistry delivered with absolute discretion.
            </p>

            <div className="flex items-center gap-12 py-10 border-y border-gold/10">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-primary/40 mb-1">availability</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary">now booking may</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-4 h-4 text-gold" />
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-primary/40 mb-1">location</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary">manhattan, nyc</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <InquiryLink 
              title="instagram direct" 
              subtitle="private message for fastest response"
              href="https://instagram.com" 
              icon={<Instagram className="w-5 h-5" />}
            />
            <InquiryLink 
              title="studio inquiry" 
              subtitle="hello@nailartist.nyc"
              href="mailto:hello@nailartist.nyc" 
              icon={<Mail className="w-5 h-5" />}
            />
            <div className="p-10 border border-gold/10 bg-white shadow-2xl shadow-primary/5 rounded-[2rem]">
              <h4 className="font-display text-3xl lowercase text-primary mb-6">studio guidelines</h4>
              <ul className="space-y-4 text-[10px] uppercase tracking-widest text-primary/50 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-gold rounded-full"></span>
                  sessions by appointment only
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-gold rounded-full"></span>
                  concierge available in greater nyc
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-gold rounded-full"></span>
                  48 hour cancellation policy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Branding */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.02] -z-10 select-none pointer-events-none">
        <span className="text-[30vw] font-display italic text-primary">nail artist</span>
      </div>
    </section>
  );
}

function InquiryLink({ title, subtitle, href, icon }: { title: string, subtitle: string, href: string, icon: ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="group block"
    >
      <div className="flex items-center justify-between p-8 bg-white border border-gold/5 group-hover:border-gold/30 transition-all duration-700 rounded-[2rem] shadow-xl shadow-primary/5">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 flex items-center justify-center bg-gold/5 rounded-full group-hover:bg-gold group-hover:text-white transition-all duration-500 text-gold">
            {icon}
          </div>
          <div>
            <h4 className="text-2xl font-display text-primary lowercase group-hover:text-gold transition-colors duration-500">{title}</h4>
            <p className="text-[9px] uppercase tracking-[0.2em] text-primary/40 mt-1 font-semibold">{subtitle}</p>
          </div>
        </div>
        <ArrowUpRight className="w-6 h-6 text-gold/20 group-hover:text-gold transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
    </a>
  );
}
