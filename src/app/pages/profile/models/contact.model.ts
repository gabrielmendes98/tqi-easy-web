interface EmergencyContact {
  cellPhone: string;
  landPhone: string;
  name: string;
  relationship: string;
}

export interface Contact {
  alternativeEmail?: string;
  cellPhone: string;
  landPhone: string;
  emergencyContact: EmergencyContact;
}