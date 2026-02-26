export interface ProductSize {
    label: string;
    image: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    sizes: ProductSize[];
}

export interface Category {
    id: string;
    label: string;
    items: Product[];
}

export const productData: Category[] = [
    {
        id: "sauces",
        label: "Sauces and Dressings",
        items: [
            {
                id: "mayo-1",
                name: "Mayonnaise Classic",
                description: "Emulsion of oil and proteins, 58% of its composition is vegetable oil.",
                image: "/assets/products/mayo320.webp",
                sizes: [
                    { label: "390.2 ml", image: "/assets/products/mayo320.webp" },
                    { label: "400 gm", image: "/assets/products/mayo400.webp" },
                    { label: "800 gm", image: "/assets/products/mayo800.webp" }
                ],
            },
            {
                id: "ketchup-1",
                name: "Tomato Ketchup",
                description: "The Ketchup type Sauce B&B, is made with fresh tomatoes and fresh vegetables",
                image: "/assets/products/ketchup.png",
                sizes: [
                    { label: "405.8 ml", image: "/assets/products/ketchup.png" }
                ],
            },
            {
                id: "mustard-1",
                name: "Mustard Traditional",
                description: "Perfect for pairing with grilled meats, roasts, sausages, and cold cuts.",
                image: "/assets/products/mustard.png",
                sizes: [
                    { label: "368 ml", image: "/assets/products/mustard.png" }
                ],
            },
        ],
    },
    {
        id: "hot-sauces",
        label: "Hot Sauces & Peppers",
        items: [
            {
                id: "habanero-1",
                name: "Extra Hot Habanero",
                description: "For the brave ones who love intense heat.",
                image: "/assets/products/mayo.png",
                sizes: [
                    { label: "150ml", image: "/assets/products/mayo.png" }
                ],
            },
            {
                id: "jalapeno-1",
                name: "Green Jalapeño",
                description: "Fresh and spicy with a citrus touch.",
                image: "/assets/products/mustard.png",
                sizes: [
                    { label: "150ml", image: "/assets/products/mustard.png" },
                    { label: "300ml", image: "/assets/products/mustard.png" }
                ],
            },
            {
                id: "chipotle-1",
                name: "Smoky Chipotle",
                description: "Sweet and smoky flavor profile.",
                image: "/assets/products/ketchup.png",
                sizes: [
                    { label: "150ml", image: "/assets/products/ketchup.png" },
                    { label: "300ml", image: "/assets/products/ketchup.png" }
                ],
            },
        ],
    },
    {
        id: "culinary",
        label: "Culinary & Seasoning Sauces",
        items: [
            {
                id: "soy-1",
                name: "Premium Soy Sauce",
                description: "Authentic fermented soy beans.",
                image: "/assets/products/mayo.png",
                sizes: [
                    { label: "250ml", image: "/assets/products/mayo.png" },
                    { label: "500ml", image: "/assets/products/mayo.png" }
                ],
            },
            {
                id: "worcestershire-1",
                name: "Traditional Worcestershire",
                description: "Essential for your meat and cocktails.",
                image: "/assets/products/mustard.png",
                sizes: [
                    { label: "250ml", image: "/assets/products/mustard.png" }
                ],
            },
            {
                id: "teriyaki-1",
                name: "Sweet Teriyaki",
                description: "Perfect glaze for grilled meats.",
                image: "/assets/products/ketchup.png",
                sizes: [
                    { label: "300ml", image: "/assets/products/ketchup.png" }
                ],
            },
        ],
    },
    {
        id: "concentrates",
        label: "Concentrates",
        items: [
            {
                id: "lemon-1",
                name: "Lemon Concentrate",
                description: "100% natural lemon juice extract.",
                image: "/assets/products/mayo.png",
                sizes: [
                    { label: "1L", image: "/assets/products/mayo.png" },
                    { label: "5L", image: "/assets/products/mayo.png" }
                ],
            },
            {
                id: "passion-1",
                name: "Passion Fruit Pulp",
                description: "Fresh tropical flavor for juices.",
                image: "/assets/products/mustard.png",
                sizes: [
                    { label: "1L", image: "/assets/products/mustard.png" },
                    { label: "5L", image: "/assets/products/mustard.png" }
                ],
            },
            {
                id: "tamarind-1",
                name: "Tamarind Base",
                description: "Traditional sweet and sour base.",
                image: "/assets/products/ketchup.png",
                sizes: [
                    { label: "1L", image: "/assets/products/ketchup.png" }
                ],
            },
        ],
    },
];

