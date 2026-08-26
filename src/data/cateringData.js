export const siteData = {
  brand: {
    name: "FRESH CATERING",
    tagline: "~ Flavours of Tradition ~",
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    email: "enquiry@freshcatering.in",
    address: "No. 42, Grand Culinary Avenue, Near City Centre, Tamil Nadu - 641001",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.273892742918!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTcnMjAuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
    instagram: "https://www.instagram.com/thefreshcatering?igsi=MnhnM25tYmpsenpx",
    youtube: "https://youtube.com/@freshcatering",
  },

  services: [
    {
      id: "wedding",
      title: "Wedding & Reception Catering",
      subtitle: "Grand Ceremonial Feasts & Reception Buffets",
      description: "Traditional 21-item banana leaf feasts, royal reception buffets, welcome drinks, and artisanal dessert counters crafted with authentic heritage recipes.",
      icon: "HeartHandshake",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Traditional 21-Item Leaf Feast", "Illuminated Reception Buffet", "Live Mocktail & Sweet Counters"]
    },
    {
      id: "outdoor",
      title: "Outdoor Lawn Catering",
      subtitle: "Bespoke Dining Under Open Skies",
      description: "From scenic garden lawns to beachside celebrations, we set up full live kitchens, weather-proof dining gazebos, and luxury table setups.",
      icon: "Trees",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Live Charcoal Grills & Counters", "Weather-Resistant Gazebo Dining", "Uniformed Butler Service"]
    },
    {
      id: "corporate",
      title: "Corporate Galas & Dining",
      subtitle: "Executive Culinary Solutions for Business",
      description: "Punctual, hygienic, and sophisticated dining for corporate conferences, annual meets, product launches, and daily executive meals.",
      icon: "Briefcase",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Punctual Guaranteed Delivery", "Executive Thali & Buffet Options", "FSSAI & High-Hygiene Assurance"]
    },
    {
      id: "birthday",
      title: "Birthday & Private Events",
      subtitle: "Vibrant Flavours for Intimate Gatherings",
      description: "Interactive chat counters, fun snack stations, mini buffets, and custom dessert tables designed for birthdays, anniversaries, and family reunions.",
      icon: "Cake",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Kids & Adult Friendly Menus", "Live Pani Puri & Chat Counters", "Custom Dessert Tables"]
    },
    {
      id: "housewarming",
      title: "Housewarming Catering",
      subtitle: "Auspicious Hospitality for Sacred Beginnings",
      description: "Auspicious morning pooja breakfast spreads, traditional leaf feasts, and afternoon tiffin spreads prepared with complete purity and devotion.",
      icon: "Home",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Pure Ghee Traditional Menus", "Sacred Morning Pooja Tiffin", "Complete Table Clearance Staff"]
    },
    {
      id: "bulk",
      title: "Bulk Food & Meal Boxes",
      subtitle: "Hygienic Sealed Hot Packed Meals",
      description: "Spill-proof, eco-friendly packed meal boxes for institutional catering, large gatherings, corporate drives, and pilgrim feasts.",
      icon: "Box",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Eco-Friendly Insulated Packaging", "Hot Sealed Delivery", "Scalable for 100 to 10,000+ Packs"]
    },
    {
      id: "buffet",
      title: "Buffet & Dining Service",
      subtitle: "Royal Presentation & Butler Service",
      description: "Illuminated chafing dish setups, floral buffet décor, trained uniform butler staff, and live hot dosa/bread stations.",
      icon: "UtensilsCrossed",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Royal Chafing Dish Displays", "Uniformed Waiter Staff", "Continuous Table Clearance & Refills"]
    }
  ],

  menuCategories: [
    {
      id: "breakfast",
      name: "Breakfast",
      description: "Piping hot ghee Mini Idlis, crisp live Dosas, Madurai Kari Dosa, Kumbakonam degree coffee, and traditional accompaniments.",
      items: [
        { name: "Traditional Ghee Mini Idli", tag: "Veg 🌱", desc: "Served with 3 varieties of fresh coconut chutney & hot drumstick sambar" },
        { name: "Live Counter Ghee Roast Dosa", tag: "Veg 🌱", desc: "Crisp golden dosas cooked hot with pure cow ghee & potato masala" },
        { name: "Madurai Special Chicken Kari Dosa", tag: "Non-Veg 🍗", desc: "Fluffy hot dosa topped with slow-cooked minced chicken gravy & pure ghee" },
        { name: "Medu Vada & Poori Masala", tag: "Veg 🌱", desc: "Fluffy crunchy vadas and hot puffed pooris with potato gravy" },
        { name: "Authentic Kumbakonam Degree Coffee", tag: "Veg 🌱", desc: "Freshly brewed aromatic South Indian filter coffee" },
        { name: "Pineapple Kesari / Rava Halwa", tag: "Veg 🌱", desc: "Melt-in-mouth traditional sweet made with fresh cashew & ghee" }
      ]
    },
    {
      id: "lunch",
      name: "Lunch",
      description: "Authentic ceremonial 21-item leaf feasts, Chettinad biryanis, & countryside non-veg delicacies.",
      items: [
        { name: "Traditional Ela Sapad (Leaf Feast)", tag: "Veg 🌱", desc: "21-item ceremonial leaf meal with payasam, vadai, appalam & ghee" },
        { name: "Chettinad Special Chicken Biryani", tag: "Non-Veg 🍗", desc: "Seeraga samba rice cooked slow in iron cauldrons with authentic spices" },
        { name: "Mutton Chukka & Nattu Kozhi Curry", tag: "Non-Veg 🍗", desc: "Tender countryside spiced meat cooked with small onions & curry leaves" },
        { name: "Kongunadu Pallipalayam Chicken Fry", tag: "Non-Veg 🍗", desc: "Country chicken sautéed with fresh coconut strips, shallots & red chilies" },
        { name: "Vanjaram Fish Tawa Fry", tag: "Non-Veg 🍗", desc: "Fresh king fish marinated in homemade tawa masala & fried hot" },
        { name: "Paneer Butter Masala & Tandoori Naan", tag: "Veg 🌱", desc: "Rich creamy gravy served with live hot tandoori garlic naans" },
        { name: "Elaneer Payasam (Tender Coconut Sweet)", tag: "Veg 🌱", desc: "Signature chilled fresh tender coconut pulp & milk dessert" }
      ]
    },
    {
      id: "dinner",
      name: "Dinner",
      description: "Royal multi-course evening banquets with live charcoal grills, parottas, and Non-Veg specialties.",
      items: [
        { name: "Live Tandoori & Kebab Station", tag: "Non-Veg 🍗", desc: "Chicken Malai Kebab & Tangdi Kebab grilled hot live on charcoal" },
        { name: "Coin Parotta & Nattu Kozhi Curry", tag: "Non-Veg 🍗", desc: "Flaky mini parottas served hot with spicy country chicken gravy" },
        { name: "Chettinad Mutton Kola Urundai", tag: "Non-Veg 🍗", desc: "Crisp golden spiced mutton meatballs prepared with heritage spices" },
        { name: "Indo-Chinese Chili Chicken & Fried Rice", tag: "Non-Veg 🍗", desc: "Wok-tossed aromatic rice with tender chicken & chili garlic sauce" },
        { name: "Live Hot Jalebi & Rabri Counter", tag: "Veg 🌱", desc: "Crisp golden jalebis paired with rich chilled rabri" }
      ]
    },
    {
      id: "hightea",
      name: "High Tea",
      description: "Evening savories, live chat counters, non-veg cutlets, and artisanal brews.",
      items: [
        { name: "Live Pani Puri & Chat Station", tag: "Veg 🌱", desc: "Crunchy puris filled with tangy mint water & spiced potatoes" },
        { name: "Crispy Chicken Keema Cutlet & Samosa", tag: "Non-Veg 🍗", desc: "Crispy fried spiced minced chicken patties served with mint chutney" },
        { name: "Mini Onion Samosa & Cutlet", tag: "Veg 🌱", desc: "Crispy fried evening snacks served with mint & tamarind chutney" },
        { name: "Special Masala Chai & Filter Coffee", tag: "Veg 🌱", desc: "Hot freshly brewed aromatic tea & coffee" }
      ]
    }
  ],

  packages: [
    {
      name: "Silver Package",
      subtitle: "Ideal for Intimate & Housewarming Events",
      price: "₹350",
      priceUnit: "per plate",
      features: ["1 Welcome Drink", "2 Starters", "6 Main Course Items", "1 Dessert & Ice Cream", "Standard Buffet Setup", "Uniformed Service Staff"]
    },
    {
      name: "Gold Package",
      subtitle: "Our Most Popular Choice for Weddings & Birthdays",
      popular: true,
      price: "₹550",
      priceUnit: "per plate",
      features: ["2 Welcome Mocktails", "4 Starters (Live Counter)", "10 Main Course Items", "2 Desserts + Live Counter", "Illuminated Premium Buffet Setup", "Full Uniformed Butler Staff"]
    },
    {
      name: "Platinum Royal Package",
      subtitle: "Luxury Banquet & Destination Catering",
      price: "₹850+",
      priceUnit: "per plate",
      features: ["3 Royal Welcome Drinks", "6 Artisanal Starters (Live Grill)", "15 Main Course Items (Global & Traditional)", "3 Desserts + Live Sweet Station", "Royal Chafing Setup & Floral Décor", "Dedicated Event Manager & Staff"]
    }
  ],

  testimonials: [
    {
      quote: "Fresh Catering organized our wedding reception leaf feast for 1,200 guests. The Elaneer Payasam and Chettinad Biryani were spoken about by every single guest. Truly world-class hospitality.",
      author: "Karthik & Ananya",
      location: "Coimbatore",
      eventType: "Wedding Reception"
    },
    {
      quote: "Punctual, impeccably hygienic, and the live dosa counter was a massive hit at our annual corporate gala. They handled 800 guests without a single hitch.",
      author: "Sundar Rajan",
      location: "Chennai",
      eventType: "Corporate Gala"
    },
    {
      quote: "For our housewarming morning pooja, they served authentic pure ghee breakfast spreads. Pristine hygiene, traditional taste, and polite staff.",
      author: "Meenakshi Sundaram",
      location: "Madurai",
      eventType: "Housewarming Pooja"
    }
  ],

  gallery: [
    { id: 1, category: "Food", title: "Authentic 21-Item Banana Leaf Meal", image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, category: "Buffet Setup", title: "Live Ghee Roast Dosa Counter", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, category: "Events", title: "Traditional South Indian Wedding Feast", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, category: "Catering", title: "Authentic Sambar Mini Idli & Vada", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, category: "Food", title: "Chettinad Seeraga Samba Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, category: "Buffet Setup", title: "South Indian Tiffin & Filter Coffee", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop" },
    { id: 7, category: "Food", title: "Traditional Payasam & Sweet Spread", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop" },
    { id: 8, category: "Events", title: "South Indian Housewarming Pooja Spread", image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop" }
  ]
};
