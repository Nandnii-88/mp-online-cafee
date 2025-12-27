// Master Menu Data for 40 Cafes (Bhopal 1-20, Indore 21-40)
const menuData = {
    // --- BHOPAL CAFES ---
    1: [ // Indian Coffee House
        { name: "Special Masala Dosa", price: 95, cat: "main" }, { name: "Veg Cutlet", price: 65, cat: "snack" },
        { name: "Filter Coffee", price: 45, cat: "drink" }, { name: "Mutton Omelette", price: 120, cat: "main" },
        { name: "Cold Coffee w/ Ice Cream", price: 90, cat: "drink" }, { name: "Paneer Pakoda", price: 85, cat: "snack" },
        { name: "Bread Omelette", price: 75, cat: "main" }, { name: "Plain Idli Sambhar", price: 60, cat: "snack" },
        { name: "Vada Sambhar", price: 70, cat: "snack" }, { name: "Onion Uttapam", price: 110, cat: "main" },
        { name: "Scrambled Eggs", price: 65, cat: "main" }, { name: "Cheese Sandwich", price: 80, cat: "snack" },
        { name: "Finger Chips", price: 75, cat: "snack" }, { name: "Hot Chocolate", price: 70, cat: "drink" },
        { name: "Assorted Pastries", price: 80, cat: "dessert" }, { name: "Gulab Jamun", price: 50, cat: "dessert" },
        { name: "Bread Butter Toast", price: 40, cat: "snack" }, { name: "Special Cream Coffee", price: 55, cat: "drink" },
        { name: "Mutton Cutlet", price: 110, cat: "snack" }, { name: "Veg Biryani", price: 180, cat: "main" },
        { name: "Upma", price: 55, cat: "snack" }, { name: "Sweet Lassi", price: 60, cat: "drink" },
        { name: "Chicken Curry", price: 210, cat: "main" }, { name: "Egg Roast", price: 95, cat: "main" },
        { name: "Banana Shake", price: 85, cat: "drink" }
    ],
    2: [ // Bake N Shake
        { name: "Paneer Tikka Burger", price: 135, cat: "main" }, { name: "Cheese Blast Fries", price: 120, cat: "snack" },
        { name: "Cold Coffee Classic", price: 115, cat: "drink" }, { name: "Truffle Pastry", price: 95, cat: "dessert" },
        { name: "Veg Club Sandwich", price: 160, cat: "main" }, { name: "Peri Peri Fries", price: 110, cat: "snack" },
        { name: "Hazelnut Cold Coffee", price: 140, cat: "drink" }, { name: "Red Velvet Pastry", price: 110, cat: "dessert" },
        { name: "Margherita Pizza", price: 199, cat: "main" }, { name: "Garlic Bread w/ Cheese", price: 125, cat: "snack" },
        { name: "Oreo Shake", price: 150, cat: "drink" }, { name: "Blueberry Cheesecake", price: 145, cat: "dessert" },
        { name: "Choco Lava Cake", price: 85, cat: "dessert" }, { name: "Nachos w/ Salsa", price: 130, cat: "snack" },
        { name: "White Sauce Pasta", price: 210, cat: "main" }, { name: "Veg Grilled Sandwich", price: 95, cat: "snack" },
        { name: "Strawberry Shake", price: 130, cat: "drink" }, { name: "Lemon Iced Tea", price: 90, cat: "drink" },
        { name: "Falafel With Hummus", price: 380, cat: "snack" }, { name: "Green Apple Soda", price: 180, cat: "drink" },
        { name: "Penne Pasta White", price: 210, cat: "main" }, { name: "Barbecued Sandwich", price: 195, cat: "main" },
        { name: "Aloo Tikki Burger", price: 85, cat: "snack" }, { name: "Spring Rolls", price: 130, cat: "snack" },
        { name: "Death by Chocolate", price: 180, cat: "dessert" }
    ],
    13: [ // Sagar Gaire
        { name: "Special Thali", price: 285, cat: "main" }, { name: "Veg Cheese Pasta", price: 196, cat: "main" },
        { name: "Tomato Cheese Pasta", price: 196, cat: "main" }, { name: "Sagar Special Pizza", price: 238, cat: "main" },
        { name: "Paneer Butter Masala", price: 154, cat: "main" }, { name: "Veg Biryani", price: 126, cat: "main" },
        { name: "Paneer Chole Kulcha", price: 180, cat: "main" }, { name: "Veg Cheese Sandwich", price: 112, cat: "snack" },
        { name: "Chilli Paneer", price: 196, cat: "snack" }, { name: "Soya Tikka Chaap", price: 150, cat: "snack" },
        { name: "Cold Coffee w/ Ice Cream", price: 112, cat: "drink" }, { name: "Chocolate Shake", price: 140, cat: "drink" },
        { name: "Rasgulla (1 Pc)", price: 26, cat: "dessert" }, { name: "Cheese Uttapam", price: 215, cat: "main" },
        { name: "Hot & Sour Soup", price: 43, cat: "snack" }, { name: "Paneer Kulcha (2pcs)", price: 110, cat: "main" },
        { name: "Manchow Soup", price: 70, cat: "snack" }, { name: "Honey Chilli Potato", price: 160, cat: "snack" },
        { name: "Hakka Noodles", price: 150, cat: "main" }, { name: "Pineapple Raita", price: 80, cat: "snack" },
        { name: "Cheese Garlic Bread", price: 115, cat: "snack" }, { name: "Veg Fried Rice", price: 140, cat: "main" },
        { name: "Dal Tadka", price: 130, cat: "main" }, { name: "Butter Naan", price: 35, cat: "main" },
        { name: "Ice Cream Scoop", price: 50, cat: "dessert" }
    ],

    // --- INDORE CAFES ---
    21: [ // Sayaji Indore
        { name: "Indori Poha", price: 45, cat: "snack" }, { name: "Jalebi (100g)", price: 60, cat: "dessert" },
        { name: "Signature Chicken Burger", price: 699, cat: "main" }, { name: "Mutton Roganjosh", price: 799, cat: "main" },
        { name: "Subz Dum Biryani", price: 675, cat: "main" }, { name: "Dal Tadka", price: 599, cat: "main" },
        { name: "Murgh Malai Tikka", price: 625, cat: "snack" }, { name: "Hara Bhara Kebab", price: 625, cat: "snack" },
        { name: "Blueberry Cheesecake", price: 449, cat: "dessert" }, { name: "Gulkand Mawa Bati", price: 325, cat: "dessert" },
        { name: "Vegetable Club Sandwich", price: 675, cat: "main" }, { name: "Butter Naan", price: 149, cat: "main" },
        { name: "Alfredo Pasta", price: 445, cat: "main" }, { name: "Iced Peach Tea", price: 120, cat: "drink" },
        { name: "Virgin Mojito", price: 160, cat: "drink" }, { name: "Chocolate Brownie", price: 140, cat: "dessert" },
        { name: "Pesto Genovese Pasta", price: 445, cat: "main" }, { name: "Arancini Balls", price: 190, cat: "snack" },
        { name: "Flat White Coffee", price: 170, cat: "drink" }, { name: "Lasagna", price: 350, cat: "main" },
        { name: "Tomato Soup", price: 120, cat: "drink" }, { name: "Crispy Corn", price: 180, cat: "snack" },
        { name: "Greek Salad", price: 190, cat: "snack" }, { name: "Fruit Salad", price: 150, cat: "dessert" },
        { name: "Oreo Shake", price: 170, cat: "drink" }
    ],
    25: [ // Farzi Cafe Indore
        { name: "Dal Chawal Sushi", price: 425, cat: "main" }, { name: "Tempura Prawns", price: 575, cat: "snack" },
        { name: "Parle-G Cheesecake", price: 325, cat: "dessert" }, { name: "Chicken Tikka Tart", price: 345, cat: "snack" },
        { name: "Galouti Burger", price: 395, cat: "main" }, { name: "Rose Mojito", price: 245, cat: "drink" },
        { name: "Mishti Doi Amuse", price: 150, cat: "dessert" }, { name: "Prawn Ghee Roast", price: 595, cat: "main" },
        { name: "Jalebi Caviar", price: 345, cat: "dessert" }, { name: "Keema Paratha", price: 325, cat: "main" },
        { name: "Braised Lamb Chops", price: 625, cat: "main" }, { name: "Deconstructed Tart", price: 295, cat: "dessert" },
        { name: "Wild Mushroom Risotto", price: 445, cat: "main" }, { name: "Duck Samosa", price: 385, cat: "snack" },
        { name: "Farzi OK Drink", price: 225, cat: "drink" }, { name: "Tandoori Chaap", price: 295, cat: "snack" },
        { name: "Butter Chicken Bun", price: 375, cat: "main" }, { name: "Chilli Paneer Kulcha", price: 285, cat: "snack" },
        { name: "Karela Calamari", price: 315, cat: "snack" }, { name: "Filter Coffee Martini", price: 265, cat: "drink" },
        { name: "Chicken Tikka Pizza", price: 645, cat: "main" }, { name: "Mutton Seekh Pizza", price: 655, cat: "main" },
        { name: "Spaghetti Makhanwala", price: 555, cat: "main" }, { name: "Asparagus Soup", price: 240, cat: "drink" },
        { name: "Smoked Cola", price: 180, cat: "drink" }
    ],
    26: [ // Chai Sutta Bar Indore
        { name: "Kullad Chai (Regular)", price: 20, cat: "drink" }, { name: "Chocolate Chai", price: 30, cat: "drink" },
        { name: "Adrak Chai", price: 25, cat: "drink" }, { name: "Rose Chai", price: 30, cat: "drink" },
        { name: "Elaichi Chai", price: 25, cat: "drink" }, { name: "Paann Chai", price: 30, cat: "drink" },
        { name: "Bun Maska", price: 45, cat: "snack" }, { name: "Paneer Takatak Sandwich", price: 120, cat: "main" },
        { name: "Bombay Sandwich", price: 110, cat: "main" }, { name: "Cheese Garlic Bread", price: 95, cat: "snack" },
        { name: "Veg Maggi", price: 60, cat: "snack" }, { name: "Cheese Maggi", price: 85, cat: "snack" },
        { name: "Corn Sandwich", price: 100, cat: "main" }, { name: "Cold Coffee", price: 80, cat: "drink" },
        { name: "Strong Coffee", price: 90, cat: "drink" }, { name: "Strawberry Crusher", price: 89, cat: "drink" },
        { name: "Blue Lagoon", price: 99, cat: "drink" }, { name: "Peach Iced Tea", price: 80, cat: "drink" },
        { name: "Peri Peri Fries", price: 90, cat: "snack" }, { name: "Aloo Tikki Burger", price: 75, cat: "main" },
        { name: "Veg Pizza (Small)", price: 150, cat: "main" }, { name: "White Sauce Pasta", price: 140, cat: "main" },
        { name: "Chocolate Shake", price: 120, cat: "drink" }, { name: "Butterscotch Shake", price: 130, cat: "drink" },
        { name: "Maskabun Jam", price: 55, cat: "snack" }
    ]
};

// Fill remaining cafes
for (let id = 1; id <= 40; id++) {
    if (!menuData[id]) {
        menuData[id] = [
            { name: "Cafe Special Pizza", price: 350, cat: "main" }, { name: "Classic Burger", price: 180, cat: "main" },
            { name: "Pasta Arrabbiata", price: 240, cat: "main" }, { name: "Peri Peri Fries", price: 110, cat: "snack" },
            { name: "Loaded Nachos", price: 160, cat: "snack" }, { name: "Garlic Bread", price: 120, cat: "snack" },
            { name: "Cappuccino", price: 140, cat: "drink" }, { name: "Virgin Mojito", price: 120, cat: "drink" },
            { name: "Choco Lava Cake", price: 90, cat: "dessert" }, { name: "Blueberry Cheesecake", price: 190, cat: "dessert" }
        ];
    }
}

const cafeNames = {
    1: "Indian Coffee House", 2: "Bake N Shake", 3: "Cafe Amado", 4: "Cafechino", 5: "The Roof Tree",
    6: "Kiosk Kaffee", 7: "Caffeine Mug", 8: "Chai & More", 9: "Central Kafe", 10: "Cafe Led",
    11: "Pin & Pan", 12: "Marbella’s Cafe", 13: "Sagar Gaire", 14: "The Tea Factory", 15: "Public Relation",
    16: "Dr. Bubbles", 17: "Wind & Waves", 18: "Aura Cafe", 19: "99 North", 20: "Starbucks",
    21: "Sayaji Indore", 22: "The Piano Project", 23: "Mama Loca", 24: "O2 Cafe de la Ville", 25: "Farzi Cafe",
    26: "Chai Sutta Bar", 27: "Vigour & Verve", 28: "Cafe Palette", 29: "The Chocolate Room", 30: "Kritunga",
    31: "The Monroe", 32: "Hobnob Bistro", 33: "Mr. Beans", 34: "C'est La Vie", 35: "Little Italy",
    36: "Indore Coffee House", 37: "Social", 38: "Siyag's Cafe", 39: "Effotel Coffee Shop", 40: "Chapter One"
};

// Global variables
let totalAmount = 0;
const selectedId = localStorage.getItem('selectedCafe') || 1;

// Set Title
document.getElementById('cafe-title').innerText = cafeNames[selectedId];

// Rendering Logic
function displayCategorizedMenu() {
    const containers = {
        main: document.getElementById('main-course-list'),
        snack: document.getElementById('snacks-list'),
        drink: document.getElementById('drinks-list'),
        dessert: document.getElementById('desserts-list')
    };

    const items = menuData[selectedId] || [];

    items.forEach(food => {
        const card = document.createElement('div');
        card.className = 'cafe-card';
        card.innerHTML = `
            <h3>${food.name}</h3>
            <p>₹${food.price}</p>
            <button class="view-menu-btn" onclick="addToOrder(${food.price})">Add to Order</button>
        `;

        if (containers[food.cat]) {
            containers[food.cat].appendChild(card);
        } else {
            // Combine drinks and desserts if specific ID is missing
            document.getElementById('drinks-list').appendChild(card);
        }
    });
}

// Fixed Add to Order Function
function addToOrder(price) {
    totalAmount += price;
    const priceDisplay = document.getElementById('total-price');
    
    if (priceDisplay) {
        priceDisplay.innerText = totalAmount;
        
        // Bonus: "Pop" animation when adding
        priceDisplay.parentElement.style.transform = "scale(1.1)";
        setTimeout(() => {
            priceDisplay.parentElement.style.transform = "scale(1)";
        }, 100);
    }
}

// Optional: Reset Order Function
function resetOrder() {
    totalAmount = 0;
    document.getElementById('total-price').innerText = "0";
}

// Start
displayCategorizedMenu();