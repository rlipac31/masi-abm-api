"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Smartphone } from "lucide-react";

export function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-brand-primary/90 backdrop-blur-md py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-brand-secondary flex items-center gap-2">
          PYME<span className="text-brand-accent">.Care</span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {["Servicios", "Cuidadores", "Nosotros", "Precios"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-secondary/70 hover:text-brand-accent transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Botones de Acción */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-[11px] font-black uppercase tracking-widest text-brand-secondary hover:text-brand-accent transition-colors"
          >
            Ingresar
          </Link>
          <Link 
            href="/registro" 
            className="px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-brand-secondary rounded-xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-brand-accent/20 active:scale-95"
          >
            Únete al Staff
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-secondary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-white/10 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          <Link href="#servicios" className="block text-brand-secondary font-bold uppercase text-xs">Servicios</Link>
          <Link href="/login" className="block text-brand-secondary font-bold uppercase text-xs">Ingresar</Link>
          <Link href="/registro" className="block text-brand-accent font-bold uppercase text-xs">Registrarse</Link>
        </div>
      )}
    </nav>
  );
}