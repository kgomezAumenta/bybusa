export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    sizes: string[];
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
                name: "Classic Mayonnaise",
                description: "Rich and creamy traditional recipe.",
                image: "/assets/products/mayo.png",
                sizes: ["250ml", "500ml", "1L"],
            },
            {
                id: "mustard-1",
                name: "Honey Mustard",
                description: "Sweet and tangy perfect for salads.",
                image: "/assets/products/mustard.png",
                sizes: ["250ml", "500ml"],
            },
            {
                id: "ketchup-1",
                name: "Tomato Ketchup",
                description: "Made with 100% natural tomatoes.",
                image: "/assets/products/ketchup.png",
                sizes: ["300ml", "600ml", "1L"],
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
                sizes: ["150ml"],
            },
            {
                id: "jalapeno-1",
                name: "Green Jalapeño",
                description: "Fresh and spicy with a citrus touch.",
                image: "/assets/products/mustard.png",
                sizes: ["150ml", "300ml"],
            },
            {
                id: "chipotle-1",
                name: "Smoky Chipotle",
                description: "Sweet and smoky flavor profile.",
                image: "/assets/products/ketchup.png",
                sizes: ["150ml", "300ml"],
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
                sizes: ["250ml", "500ml"],
            },
            {
                id: "worcestershire-1",
                name: "Traditional Worcestershire",
                description: "Essential for your meat and cocktails.",
                image: "/assets/products/mustard.png",
                sizes: ["250ml"],
            },
            {
                id: "teriyaki-1",
                name: "Sweet Teriyaki",
                description: "Perfect glaze for grilled meats.",
                image: "/assets/products/ketchup.png",
                sizes: ["300ml"],
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
                sizes: ["1L", "5L"],
            },
            {
                id: "passion-1",
                name: "Passion Fruit Pulp",
                description: "Fresh tropical flavor for juices.",
                image: "/assets/products/mustard.png",
                sizes: ["1L", "5L"],
            },
            {
                id: "tamarind-1",
                name: "Tamarind Base",
                description: "Traditional sweet and sour base.",
                image: "/assets/products/ketchup.png",
                sizes: ["1L"],
            },
        ],
    },
];
