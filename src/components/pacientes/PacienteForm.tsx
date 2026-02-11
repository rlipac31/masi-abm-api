"use client";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Patient } from '@/src/types/patient';
import { 
  User, MapPin, Save, Mail, Lock, Loader2, 
  HeartPulse, ClipboardList, Calendar, Fingerprint 
} from "lucide-react";
import { createPatientAction } from "@/src/actions/pacientes";





interface PacienteFormProps {
  initialData?: Patient;
 // onClose: () => void;
}



export function PatientForm({ initialData }: PacienteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  const { register, handleSubmit, formState: { errors } } = useForm<any>({
    defaultValues: {
      addressPatient: {
        estado: "Argentina",
        ciudad: "Rosario"
      }
    }
  });


  

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Convertimos la edad a número antes de enviar
    data.agePatient = Number(data.agePatient);

        const finalData = {
        ...data,
       
      };
    
    try {
      const result = await createPatientAction(finalData);
      console.log(" resultado de add pacientes ", result)
      if (result.success) {
        router.push("/admin/dashboard/pacientes"); // Ajusta tu ruta aquí
        router.refresh();
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error al guardar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-in fade-in duration-500 bg-brand-secondary p-8 rounded-2xl">
      
      {/* SECCIÓN 1: ACCESO (USUARIO/TUTOR) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <div className="p-1.5 bg-brand-accent/10 rounded-lg">
            <Lock size={18} className="text-brand-accent" />
          </div>
          <h4 className="text-sm font-black text-brand-primary uppercase tracking-tight">Acceso del Tutor / Usuario</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1 md:col-span-1">
            <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase">Nombre Usuario</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                {...register("nameUser", { required: true })}
                className="w-full p-3 pl-10 rounded-xl border-2 border-slate-100 focus:border-brand-primary outline-none transition-all bg-white"
                placeholder="Julián Álvarez"
              />
            </div>
             
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                {...register("email", { required: true })}
                type="email"
                className="w-full p-3 pl-10 rounded-xl border-2 border-slate-100 focus:border-brand-primary outline-none transition-all bg-white"
                placeholder="julian@example.com"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                {...register("password", { required: true })}
                type="password"
                className="w-full p-3 pl-10 rounded-xl border-2 border-slate-100 focus:border-brand-primary outline-none transition-all bg-white"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: DATOS DEL PACIENTE */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <div className="p-1.5 bg-brand-accent/10 rounded-lg">
            <HeartPulse size={18} className="text-brand-accent" />
          </div>
          <h4 className="text-sm font-black text-brand-primary uppercase tracking-tight">Información del Paciente</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1 md:col-span-1">
            <label className="text-[10px] font-bold text-slate-400 ml-1">NOMBRE COMPLETO</label>
            <input {...register("namePatient", { required: true })} className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-brand-primary outline-none transition-all bg-white" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 ml-1">EDAD</label>
            <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input type="number" {...register("agePatient", { required: true })} className="w-full p-3 pl-10 rounded-xl border-2 border-slate-100 focus:border-brand-primary outline-none transition-all bg-white" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 ml-1">DNI PACIENTE</label>
            <div className="relative">
                <Fingerprint className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input {...register("dniPatient", { required: true })} className="w-full p-3 pl-10 rounded-xl border-2 border-slate-100 focus:border-brand-primary outline-none transition-all bg-white font-mono" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: DIRECCIÓN Y HISTORIA MÉDICA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <div className="p-1.5 bg-brand-accent/10 rounded-lg">
              <MapPin size={18} className="text-brand-accent" />
            </div>
            <h4 className="text-sm font-black text-brand-primary uppercase tracking-tight">Domicilio</h4>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input {...register("addressPatient.ciudad")} placeholder="Ciudad" className="p-3 rounded-xl border border-slate-200 text-sm focus:border-brand-primary outline-none" />
            <input {...register("addressPatient.provincia")} placeholder="Provincia" className="p-3 rounded-xl border border-slate-200 text-sm focus:border-brand-primary outline-none" />
            <input {...register("addressPatient.calle")} placeholder="Calle" className="col-span-1 p-3 rounded-xl border border-slate-200 text-sm focus:border-brand-primary outline-none" />
            <input {...register("addressPatient.numero")} placeholder="N°" className="p-3 rounded-xl border border-slate-200 text-sm focus:border-brand-primary outline-none" />
            <input {...register("addressPatient.estado")} placeholder="País" className="p-3 rounded-xl border border-slate-200 text-sm focus:border-brand-primary outline-none" />
            <input {...register("addressPatient.referencia")} placeholder="Referencia" className="p-3 rounded-xl border border-slate-200 text-sm focus:border-brand-primary outline-none" />
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <div className="p-1.5 bg-brand-accent/10 rounded-lg">
              <ClipboardList size={18} className="text-brand-accent" />
            </div>
            <h4 className="text-sm font-black text-brand-primary uppercase tracking-tight">Historia Médica</h4>
          </div>
          <textarea 
            {...register("medicalHistory")}
            rows={5}
            placeholder="Detalles de salud..."
            className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-brand-primary outline-none transition-all bg-white text-sm"
          />
        </section>
      </div>

      {/* BOTONES */}
      <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
        <button 
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-brand-primary text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-brand-accent transition-all shadow-xl shadow-brand-primary/20 active:scale-95 disabled:opacity-50"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : <Save size={20} />}
          GUARDAR PACIENTE
        </button>
        <button 
          type="button"
          onClick={() => router.back()}
          className="px-8 bg-slate-100 text-slate-500 py-4 rounded-2xl font-black hover:bg-slate-200 transition-all uppercase text-xs tracking-widest"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
