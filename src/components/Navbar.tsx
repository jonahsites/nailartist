import { Search, ShoppingBag, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-12 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-4">
        <div className="w-14 h-14 overflow-hidden border border-white/20 glass rounded-sm rotate-3">
          <img 
            src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/449681233_460488253593367_6023639169711507112_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2gFiMK5-J7cEzs_j6hk9WPaIyDhilV0UgdeIhIaLpPlK5lkochkX1pGfJhg-87VexFyeHX1JgVYtMAcDMfUd_kyd&_nc_ohc=0h8TCxA-Y5wQ7kNvwHhwz0K&_nc_gid=a3BUc3eyfFS2WVYSOMUjDQ&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_Af7v0zza4hpCsFP-zhfqZS359gn3zYnFZNDR3acSXQK7mg&oe=6A057FFF&_nc_sid=7d3ac5" 
            alt="LD Claws Logo" 
            className="w-full h-full object-cover grayscale brightness-125"
            referrerPolicy="no-referrer"
          />
        </div>
        <a href="#" className="font-display font-medium text-3xl uppercase tracking-tighter text-white mix-blend-difference">
          LD Claws <span className="text-xs font-y2k align-top opacity-50 ml-1">v.2.0</span>
        </a>
      </div>
      
      <div className="hidden md:flex items-center gap-10 pointer-events-auto glass px-8 py-3 rounded-full border-white/5">
        {["Services", "Portfolio", "Booking", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-y2k text-[10px] uppercase tracking-[0.2em] hover:text-accent-silver transition-colors flex items-center gap-2 group"
          >
            <span className="w-1 h-1 bg-white scale-0 group-hover:scale-100 transition-transform rounded-full"></span>
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4 pointer-events-auto">
        <button className="w-10 h-10 flex items-center justify-center glass rounded-full hover:bg-white hover:text-black transition-all">
          <Moon className="w-4 h-4" />
        </button>
        <button className="relative w-10 h-10 flex items-center justify-center glass rounded-full hover:bg-white hover:text-black transition-all">
          <ShoppingBag className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 bg-white text-black font-bold text-[8px] w-4 h-4 flex items-center justify-center rounded-full border border-black">
            0
          </span>
        </button>
      </div>
    </nav>
  );
}
