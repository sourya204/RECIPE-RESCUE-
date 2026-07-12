// ============================================
// 1. DATA — hardcoded recipes 
// ============================================
const recipes = [
    { name: "Tomato Onion Curry", ingredients: ["tomato", "onion", "garlic", "spices"] },
    { name: "Chicken Fried Rice", ingredients: ["chicken", "rice", "onion", "egg"] },
    { name: "Potato Sabzi", ingredients: ["potato", "onion", "tomato", "spices"] },
    { name: "Vegetable Pasta", ingredients: ["pasta", "tomato", "garlic", "onion"] },
    { name: "Egg Fried Rice", ingredients: ["rice", "egg", "onion", "soy sauce"] },
    { name: "Chicken Soup", ingredients: ["chicken", "onion", "carrot", "garlic"] },
    { name: "Garlic Bread", ingredients: ["bread", "garlic", "butter"] },
    { name: "Simple Salad", ingredients: ["tomato", "cucumber", "onion", "lemon"] }
];

let currentMatches = [];
let itemsShown = 0;
const BATCH_SIZE = 3;

// ============================================
// 2. FEATURES TAB — swipe/glide navigation
// ============================================

function scrollToTab(tabIndex) {
    const featuresContainer = document.querySelector('.features');
    const tabWidth = featuresContainer.clientWidth;
    featuresContainer.scrollTo({
        left: tabIndex * tabWidth,
        behavior: 'smooth'
    });
}
