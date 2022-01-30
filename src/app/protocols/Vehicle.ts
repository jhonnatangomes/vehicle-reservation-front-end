interface VehicleImage {
    id: number;
    url: string;
    color: string;
}

export interface Vehicle {
    id: number;
    name: string;
    images: VehicleImage[];
    pricePerDay: number;
}
