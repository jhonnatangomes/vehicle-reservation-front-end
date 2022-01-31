interface VehicleImage {
    id: number;
    url: string;
    color: string;
}

interface User {
    email: string;
}

interface Reservation {
    id: number;
    createdAt: string;
    daysRented: number;
    isDelayed: boolean | null;
    returnDate: string | null;
    totalDelayFee: number | null;
    totalToPay: number | null;
    user: User;
}

export interface Vehicle {
    id: number;
    name: string;
    images: VehicleImage[];
    pricePerDay: number;
    reservations: Reservation | null;
}
