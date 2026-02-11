import { PatientForm } from "@/src/components/pacientes/PacienteForm";

export default function NewPatientPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-brand-primary tracking-tighter">
            NUEVO <span className="text-brand-accent">PACIENTE</span>
          </h1>
          <p className="text-slate-400 font-bold text-xs tracking-widest uppercase">
            Gestión de alta médica y registro de usuario
          </p>
        </div>

        <PatientForm />
      </div>
    </div>
  );
}