export interface Address {
 estado:string;
 provincia:string;
 ciudad:string;
 numero:string;
 piso:string;
 referencia:string;
}


export interface Patient {
  idPatient: number;
  namePatient: string;
  agePatient: number;
  dniPatient: string;
 addressPatient: string | AddressPatient;
  medicalHistory: string;
  familyContactId: number;
  responsibleFamily:family;
}

export interface AddressPatient {
  calle?: string;
  ciudad?: string;
  numero?: string;
  distrito?: string;
}


export interface family{
    nameUser:string;
    email:string;
}

export interface PatientsResponse {
  ok:boolean;
  msg:string;
  total: number;
  content: Patient[];
}