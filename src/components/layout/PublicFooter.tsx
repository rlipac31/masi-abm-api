import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

export function PublicFooter() {
  return (
    <footer className="bg-brand-primary text-brand-secondary pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Columna 1: Brand */}
        <div className="col-span-1 md:col-span-1 space-y-6">
          <h2 className="text-3xl font-black tracking-tighter">MASI<span className="text-brand-accent">.</span></h2>
          <p className="text-brand-secondary/50 text-sm leading-relaxed max-w-xs">
            Revolucionando el cuidado asistencial con tecnología y calidez humana en todo el Perú.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<Instagram size={18} />} />
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<Twitter size={18} />} />
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-6">Compañía</h4>
          <ul className="space-y-4 text-sm font-medium text-brand-secondary/60">
            <li><Link href="/nosotros" className="hover:text-brand-secondary transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:text-brand-secondary transition-colors">Nuestros Servicios</Link></li>
            <li><Link href="/blog" className="hover:text-brand-secondary transition-colors">Blog de Salud</Link></li>
          </ul>
        </div>

        {/* Columna 3: Soporte */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-6">Soporte</h4>
          <ul className="space-y-4 text-sm font-medium text-brand-secondary/60">
            <li><Link href="/faq" className="hover:text-brand-secondary transition-colors">Preguntas Frecuentes</Link></li>
            <li><Link href="/terminos" className="hover:text-brand-secondary transition-colors">Términos de Uso</Link></li>
            <li><Link href="/privacidad" className="hover:text-brand-secondary transition-colors">Privacidad</Link></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-6">Contacto</h4>
          <div className="flex items-center gap-3 text-sm text-brand-secondary/60">
            <Mail size={16} className="text-brand-accent" />
            hola@masi.com
          </div>
          <div className="flex items-center gap-3 text-sm text-brand-secondary/60">
            <MapPin size={16} className="text-brand-accent" />
            Lima, Perú
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-secondary/30">
          © 2026 Masi Health Solutions. Todos los derechos reservados.
        </p>
        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-secondary/30">
          Desarrollado con ❤️ para el mundo
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-secondary hover:bg-brand-accent hover:border-brand-accent transition-all cursor-pointer">
      {icon}
    </div>
  );
}