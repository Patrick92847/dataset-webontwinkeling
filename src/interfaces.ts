
export interface Brand {
    id: number;
    name: string;
    country: string;
    luxury: boolean;
}

export interface Watch {
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    releaseDate: string;
    imageUrl: string;
    movement: string;
    features: string[];
    brand: Brand;
}
