import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12">
      <div className="flex items-center gap-4">
        <a href="#" className="font-display text-4xl text-primary lowercase tracking-tight">
          nail artist
        </a>
      </div>
      
      <div className="hidden md:flex items-center gap-10 bg-white/20 backdrop-blur-md px-10 py-3 rounded-full border border-gold/10">
        {["services", "portfolio", "booking", "about"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-body text-[11px] uppercase tracking-[0.25em] text-primary/70 hover:text-gold transition-colors font-medium relative group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button className="text-primary/70 hover:text-gold transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-primary/70 hover:text-gold transition-colors relative">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-gold text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
            0
          </span>
        </button>
        <button className="text-primary/70 hover:text-gold transition-colors">
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
