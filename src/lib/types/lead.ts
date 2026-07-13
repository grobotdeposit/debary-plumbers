export const LEAD_STATUSES = ["new", "contacted", "sold", "closed"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const SERVICE_TYPES = [
  "Leak/Burst pipe",
  "Clog/Drain",
  "Water heater",
  "Toilet/Faucet",
  "Installation",
  "Other",
] as const;
export type ServiceType = (typeof SERVICE_TYPES)[number];

export interface Lead {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  service_type: string;
  description: string | null;
  is_emergency: boolean;
  status: LeadStatus;
  notes: string | null;
}

export interface Settings {
  id: number;
  notification_email: string | null;
  notification_phone: string | null;
  updated_at: string | null;
}
