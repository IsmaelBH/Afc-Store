/* TypeScript types */// src/types/index.ts

// Tipo para un show
export interface Show {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    imageUrl: string;
    ticketUrl: string;
}

// Tipo para un producto en la tienda
export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
}
