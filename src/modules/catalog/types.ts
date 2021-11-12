export interface ISpecs {
    CPU: string;
    Featured: string;
    IOPorts: string;
}

export interface IProduct {
    id: number;
    img: string[];
    code: string;
    name: string;
    category: string;
    description: string;
    price: number;
    discount: number;
    specs: ISpecs;
    details: string[];
    colors: string[];
    inStock: boolean;
    rating: number;
    reviews: number;
}

export interface ICategory {
    id: number;
    name: string;
    quantity: number;
}

export interface IPrice {
    id: number;
    min: number;
    max: number;
    quantity: number;
}
