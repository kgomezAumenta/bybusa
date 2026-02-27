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
                image: "/assets/products/ketchup405.webp",
                sizes: [
                    { label: "405.8 ml", image: "/assets/products/ketchup405.webp" }
                ],
            },
            {
                id: "mustard-1",
                name: "Mustard Traditional",
                description: "Perfect for pairing with grilled meats, roasts, sausages, and cold cuts.",
                image: "/assets/products/mustard368.webp",
                sizes: [
                    { label: "368 ml", image: "/assets/products/mustard368.webp" }
                ],
            },
        ],
    },
    {
        id: "hot-sauces",
        label: "Hot Sauces & Peppers",
        items: [
            {
                id: "hot_peppers-1",
                name: "Hot Peppers",
                description: "The pickled sliced jalapeño peppers B&B are made from 100% natural ingredients, selected from the best quality and combined with carrots, onions and spices to give them the exquisite flavor that characterizes them.",
                image: "/assets/products/hot_peppers180.webp",
                sizes: [
                    { label: "180 ml", image: "/assets/products/hot_peppers180.webp" }
                ],
            },
            {
                id: "picamas-1",
                name: "Picamás",
                description: "Picamas stands for authentic Guatemalan cuisine, heritage, and culture. Our premium blend makes every meal SABROSO!",
                image: "/assets/products/picamas185.webp",
                sizes: [
                    { label: "185 ml", image: "/assets/products/picamas185.webp" },
                    { label: "405 ml", image: "/assets/products/picamas405.webp" },
                    { label: "490 ml", image: "/assets/products/picamas490.webp" }
                ],
            },
            {
                id: "picamas-2",
                name: "Picamás Rojo",
                description: "Picamas stands for authentic Guatemalan cuisine, heritage, and culture. Our premium blend makes every meal SABROSO!",
                image: "/assets/products/roja185.webp",
                sizes: [
                    { label: "185 ml", image: "/assets/products/roja185.webp" }
                ],
            },
            {
                id: "habanero-1",
                name: "Habanero",
                description: "For lovers of spicy salsa. Its intense orange color, its aroma and delicious flavor come from the ripe habanero pepper with which our PICAMÁS® habanero salsa is prepared.",
                image: "/assets/products/habanero145.webp",
                sizes: [
                    { label: "145 ml", image: "/assets/products/habanero145.webp" }
                ],
            },
            {
                id: "cobanero-1",
                name: "Cobanero",
                description: "The unmatched flavor of the cobanero pepper, made into a salsa",
                image: "/assets/products/cobanero145.webp",
                sizes: [
                    { label: "145 ml", image: "/assets/products/cobanero145.webp" }
                ],
            },
            {
                id: "chiltepe-1",
                name: "Chiltepe",
                description: "Our Chiltepe PICAMÁS® salsa brings the traditional flavor of the Guatemalan recipe to your table.",
                image: "/assets/products/chiltepe145.webp",
                sizes: [
                    { label: "145 ml", image: "/assets/products/chiltepe145.webp" }
                ],
            },
        ],
    },
    {
        id: "culinary",
        label: "Culinary & Seasoning Sauces",
        items: [
            {
                id: "worcestershire-1",
                name: "Worcestershire sauce",
                description: "It is a perfect seasoning for your meals; as well as the preparation of dressings vinaigrettes and marinades.",
                image: "/assets/products/worcestershire152.webp",
                sizes: [
                    { label: "152 ml", image: "/assets/products/worcestershire152.webp" }
                ],
            },
            {
                id: "soy-1",
                name: "Soy Sauce",
                description: "It is one of the condiments that brings the most benefits to our body since it contains a wide variety of nutrients like protein and fiber, which are very beneficial nutrients.",
                image: "/assets/products/soy152.webp",
                sizes: [
                    { label: "152 ml", image: "/assets/products/soy152.webp" }
                ],
            },
        ],
    },
    {
        id: "concentrates",
        label: "Concentrates",
        items: [
            {
                id: "horchata-1",
                name: "Horchata",
                description: "Concentrates B&B are products made from 100% natural fruit pulp. They are practical and easy to use, they only need to be diluted in water and enjoy a delicious natural drink.",
                image: "/assets/products/horchata678.webp",
                sizes: [
                    { label: "678 ml", image: "/assets/products/horchata678.webp" },
                ],
            },
            {
                id: "carambola-1",
                name: "Carambola (Star Fruit)",
                description: "Our Starfruit Concentrate makes it easy to prepare a delicious natural drink—just add water and sugar. It's also perfect for adding a creative touch to desserts or savory dishes.",
                image: "/assets/products/carambola678.webp",
                sizes: [
                    { label: "678 ml", image: "/assets/products/carambola678.webp" },
                ],
            },
            {
                id: "jamaica-1",
                name: "Hibiscus (Jamaica)",
                description: "Our Hibiscus Concentrate lets you make a traditional, refreshing drink in minutes—just add water and sugar. It's also ideal for experimenting in the kitchen with versatile recipes.",
                image: "/assets/products/jamaica678.webp",
                sizes: [
                    { label: "678 ml", image: "/assets/products/jamaica678.webp" }
                ],
            },
            {
                id: "tamarind-1",
                name: "Tamarind",
                description: "Bring an authentic, natural twist to your drinks with our Tamarind Concentrate—simply add water and sugar.",
                image: "/assets/products/tamarind678.webp",
                sizes: [
                    { label: "678 ml", image: "/assets/products/tamarind678.webp" }
                ],
            },
        ],
    },
];

