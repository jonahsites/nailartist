import { motion } from "motion/react";
import { ArrowUpRight, Mail, Instagram, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

export default function Booking() {
  return (
    <section id="booking" className="bg-accent-warm py-48 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white opacity-[0.01] font-display text-[20vw] flex items-center justify-center -z-10 select-none">
        BOOKING
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10">
        <div className="lg:col-span-7">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[10vw] md:text-[6vw] leading-[0.85] tracking-tighter uppercase font-display"
          >
            Ready for a <br /> 
            <span className="font-gothic normal-case italic text-white/50">Custom Set?</span>
          </motion.h2>
          
          <div className="mt-16 space-y-8 max-w-xl">
            <p className="text-xl font-body text-white/60 leading-relaxed">
              Accepting orders for custom handmade press-on sets. Professional grade materials for a salon-quality finish that lasts.
            </p>
            <div className="flex items-center gap-8 py-8 border-y border-white/10">
              <div>
                <span className="block font-y2k text-[10px] opacity-30 mb-2 uppercase tracking-widest">Booking Status</span>
                <span className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  OPEN
                </span>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div>
                <span className="block font-y2k text-[10px] opacity-30 mb-2 uppercase tracking-widest">Ships From</span>
                <span className="text-white font-bold uppercase tracking-widest">UNITED STATES</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end space-y-12">
          <div className="space-y-4">
            <InquiryLink 
              title="DM to Order" 
              subtitle="Direct message for the fastest response."
              href="https://instagram.com" 
              icon={<Instagram className="w-5 h-5" />}
            />
            <InquiryLink 
              title="Email Inquiry" 
              subtitle="Ldclaws16@gmail.com"
              href="mailto:Ldclaws16@gmail.com" 
              icon={<Mail className="w-5 h-5" />}
            />
            <InquiryLink 
              title="Sizing Guide" 
              subtitle="Get the perfect fit for your set."
              href="#" 
              icon={<ArrowUpRight className="w-5 h-5" />}
            />
          </div>
          
          <div className="p-8 glass rounded-xs border-white/5 space-y-6">
            <h4 className="font-display text-2xl uppercase underline decoration-white/20 underline-offset-8">Studio Policy</h4>
            <div className="space-y-4 text-sm text-white/60 font-light leading-relaxed">
              <p>⭒ I do not give out PR or free sets for exposure.</p>
              <p>⭒ Shipping strictly within the US currently.</p>
              <p>⭒ All custom sets are non-refundable once production begins.</p>
            </div>
          </div>
        </div>
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
      <div className="flex items-center justify-between p-6 glass border-white/5 group-hover:border-white/20 transition-all duration-300">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 flex items-center justify-center glass rounded-full group-hover:bg-white group-hover:text-black transition-all">
            {icon}
          </div>
          <div>
            <h4 className="text-xl font-display group-hover:translate-x-2 transition-transform duration-300">{title}</h4>
            <p className="text-[10px] uppercase font-y2k tracking-widest text-white/40 mt-1">{subtitle}</p>
          </div>
        </div>
        <ArrowUpRight className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity" />
      </div>
    </a>
  );
}
