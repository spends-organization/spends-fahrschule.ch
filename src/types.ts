export interface Package {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  duration?: string;
}

export interface BookingSlot {
  id: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  maxParticipants: number;
  currentParticipants: number;
}

export interface Booking {
  id: string;
  slotId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface BookingFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  slotId: string;
}

export interface BookingError {
  field: string;
  message: string;
} 