import { ArrowRight, Star, ShieldCheck, Activity } from "lucide-react";

export function PublicHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-secondary">
    
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary rounded-l-[10rem] hidden lg:block" />
      <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-brand-accent/20 rounded-full blur-[120px] hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LADO IZQUIERDO: TEXTO Y ACCIÓN */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">
              Disponible en todo el Perú
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-brand-primary tracking-tighter leading-[0.85] uppercase">
            Cuidado <br />
            <span className="text-brand-accent italic">Inteligente.</span> <br />
            Vida Plena.
          </h1>

          <p className="text-lg text-slate-500 max-w-lg font-medium leading-relaxed">
            La plataforma líder en gestión de cuidados asistenciales. Conectamos tecnología de punta con la calidez humana que tu familia necesita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="px-10 py-5 mb-2 bg-brand-primary text-brand-secondary rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-brand-accent transition-all shadow-2xl shadow-brand-primary/40 group active:scale-95">
              SOLICITAR ASISTENCIA
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-4 px-6 py-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <div>
                <div className="flex text-brand-accent">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="currentColor" />)}
                </div>
                <p className="text-[10px] font-black text-brand-primary uppercase">Staff Verificado</p>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: VISUAL TECNOLÓGICO (Match con el Login) */}
        <div className="lg:col-span-5 relative ">{/* bg-[#021d33]  este color queda bien con la paleta azul */}
          <div className="relative z-10 bg-brand-primary p-2  rounded-[3.5rem] shadow-3xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="bg-[#021d33]  rounded-[3rem] p-8 border border-white/10">
              {/* Card de métricas estilo Dashboard */}
              <div className="space-y-6 ">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-accent/20 rounded-2xl">
                    <Activity className="text-brand-accent" size={24} />
                  </div>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest italic">Live Monitor</span>
                </div>
                
                <div className="space-y-1">
                  <p className="text-white/50 text-xs font-bold uppercase tracking-tight">Estado del Servicio</p>
                  <h4 className="text-3xl font-black text-brand-secondary tracking-tighter">SOPORTE ACTIVO</h4>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[9px] font-black text-brand-accent uppercase">Cuidadores</p>
                    <p className="text-xl font-black text-white">1,240</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[9px] font-black text-brand-accent uppercase">Calificación</p>
                    <p className="text-xl font-black text-white">4.9/5</p>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-3 text-emerald-400">
                  <ShieldCheck size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Protocolos de seguridad ISO 27001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Círculos decorativos de fondo que hacen match con tu login */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>

      </div>
    </section>
  );
}