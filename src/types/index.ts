// Tipo para un producto
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    stock: number;
}

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
