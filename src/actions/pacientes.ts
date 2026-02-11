"use server";
import { cookies } from "next/headers";

import { PatientsResponse } from "@/src/types/patient";

export async function getPatientsAction(): Promise<PatientsResponse> {

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) throw new Error("No existe token de sesión");

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patients`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
      next: { revalidate: 3600 }, // Caché de 1 hora
    });

    if (!response.ok) throw new Error("Error al cargar pacientes");
    
    return await response.json();
  } catch (error) {
    console.error(error);
    return { ok:false, msg:"", total: 0,  content: []  };
  
  }
}




export async function createPatientAction(data: any) {
    const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) throw new Error("No existe token de sesión");
  try {
    const response = await fetch("http://localhost:5000/api/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-token":token },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al guardar");
    }

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}