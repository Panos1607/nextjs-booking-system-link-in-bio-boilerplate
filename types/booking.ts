export interface TimeSlot {
  id: string;
  time: string;
  label: string;
  available: boolean;
}

export interface BookingFormData {
  name: string;
  email: string;
  notes: string;
}

export interface Booking {
  id: string;
  username: string;
  clientName: string;
  clientEmail: string;
  date: string;
  slotTime: string;
  notes?: string;
  createdAt: string;
  status: "pending" | "confirmed" | "cancelled";
}