import hero from "../assets/destinations/goa/heroimage.jpg";

import bagaBeach from "../assets/destinations/goa/bagabeach.jpg";
import dudhsagar from "../assets/destinations/goa/dudhsagar.jpg";
import basilica from "../assets/destinations/goa/basilica.jpg";

import fishCurry from "../assets/destinations/goa/fishcurry.jpg";
import goanxacuti from "../assets/destinations/goa/goanxacuti.jpg";
import chicken from "../assets/destinations/goa/chicken.jpg";
import prawn from "../assets/destinations/goa/prawn.jpg";
import hero1 from "../assets/destinations/kerala/hero1.jpg";

import munnar from "../assets/destinations/kerala/munnar.jpg";
import kovalam from "../assets/destinations/kerala/kovalam.jpg";
import periyar from "../assets/destinations/kerala/periyar.jpg";


import appam from "../assets/destinations/kerala/appam.jpg";
import sadya from "../assets/destinations/kerala/sadya.jpg";
import puttu from "../assets/destinations/kerala/puttu.jpg";
import karimeen from "../assets/destinations/kerala/karimeen.jpg";
export interface Destination {
  id: number;
  slug: string;
  name: string;
  state: string;
  type: string;
  duration: string;

  heroImage: string;

  description: string;

  bestTime: string;

  weather: {
    summer: string;
    winter: string;
    monsoon: string;
  };

  budget: {
    budget: string;
    midRange: string;
    luxury: string;
  };

  food: {
    name: string;
    image: string;
  }[];

  activities: string[];
  airQuality: {
  value: number;
  status: string;
};
crowd: {
  level: string;
  bestTime: string;
};

safety: {
  score: number;
  status: string;
};

  attractions: string[];

  gallery: string[];

  coordinates: {
    lat: number;
    lng: number;
  };

  hotels: {
    name: string;
    type: string;
    price: string;
    rating: number;
  }[];

  packing: string[];

  emergency: {
    police: string;
    ambulance: string;
    coastGuard: string;
  };
  travelAdvisory: string;
} 
export const destinations: Destination[] = [
  {
    id: 1,
    slug: "goa",

    name: "Goa",

    state: "Goa",

    type: "Beach Destination",
    duration: "5-7 days",


    heroImage: hero,

    description: "Goa is famous for its beaches, Portuguese heritage, vibrant nightlife, seafood, and scenic coastal landscapes.",

    bestTime: "November to February",

    weather: {
      summer: "25°C - 35°C",
      monsoon: "24°C - 30°C",
      winter: "20°C - 30°C",
    },

    budget: {
      budget: "₹8,000 - ₹12,000",
      midRange: "₹15,000 - ₹30,000",
      luxury: "₹40,000+",
    },

    food: [
      {
        name: "Goan Fish Curry",
        image: fishCurry,
      },
      {
        name: "Prawn Balchão",
        image: prawn,
      },
      {
        name: "Chicken Cafreal",
        image: chicken,
      },
      
      {
        name: "Goan Xacuti",
        image: goanxacuti,
      },
    ],

    activities: [
      "Beach Hopping",
      "Water Sports",
      "Scuba Diving",
      "Sunset Cruise",
    ],

    airQuality: {
  value: 42,
  status: "Good",
},
crowd: {
  level: "Moderate",
  bestTime: "Morning",
},

safety: {
  score: 8.8,
  status: "Safe",
},

    attractions: [
      "Baga Beach",
      "Calangute Beach",
      "Dudhsagar Falls",
      "Basilica of Bom Jesus",
    ],

    gallery: [
      bagaBeach,
      dudhsagar,
      basilica,
    ],

    hotels: [
      {
        name: "Taj Exotica Resort",
        type: "Luxury",
        price: "₹28,000",
        rating: 4.8,
      },
      {
        name: "Pousada Tauma",
        type: "Mid-range",
        price: "₹5,500",
        rating: 4.5,
      },
      {
        name: "Jungle Beach House",
        type: "Budget",
        price: "₹1,200",
        rating: 4.3,
      },
    ],

    packing: [
      "Swimwear & Flip-flops",
      "Light Cotton Clothes",
      "Mosquito Repellent",
      "Waterproof Bag",
      "Reef-safe Sunscreen",
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      coastGuard: "1554",
    },
    coordinates: {
      lat: 0,
      lng: 0
    },
    travelAdvisory:
  "Ideal conditions for travel. Stay hydrated, carry sunscreen, and respect local beach safety guidelines.",
  },
  {
id: 2,
slug: "kerala",

name: "Kerala",

state: "Kerala",

type: "Backwater Destination",
duration: "6-8 days",


heroImage: hero1,

description: "Kerala, God's Own Country, enchants travelers with its tranquil backwaters, misty tea-clad hills, pristine beaches, and rich cultural heritage rooted in Ayurveda and traditional art forms.",

bestTime: "September to March",

weather: {
  summer: "28°C - 37°C",
  monsoon: "22°C - 28°C",
  winter: "20°C - 32°C",
},

budget: {
  budget: "₹7,000 - ₹11,000",
  midRange: "₹14,000 - ₹28,000",
  luxury: "₹38,000+",
},

food: [
  {
    name: "Kerala Sadya",
    image: sadya,
  },
  {
    name: "Appam with Stew",
    image: appam,
  },
  {
    name: "Karimeen Pollichathu",
    image: karimeen,
  },
  
  {
    name: "Puttu and Kadala Curry",
    image: puttu,
  },
],

activities: [
  "Houseboat Cruise",
  "Tea Plantation Walks",
  "Ayurvedic Spa Therapy",
  "Wildlife Safari",
],

airQuality: {

value: 38,
status: "Good",
},
crowd: {
level: "Moderate",
bestTime: "Early Morning",
},

safety: {
score: 9.0,
status: "Very Safe",
},

attractions: [
  "Alleppey Backwaters",
  "Munnar Tea Gardens",
  "Periyar Wildlife Sanctuary",
  "Kovalam Beach",
],

gallery: [
  munnar,
  kovalam,
  periyar
],

hotels: [
  {
    name: "Kumarakom Lake Resort",
    type: "Luxury",
    price: "₹26,000",
    rating: 4.7,
  },
  {
    name: "Spice Tree Munnar",
    type: "Mid-range",
    price: "₹6,200",
    rating: 4.4,
  },
  {
    name: "Backwater Ripples Homestay",
    type: "Budget",
    price: "₹1,500",
    rating: 4.2,
  },
],

packing: [
  "Light Cotton Clothes",
  "Umbrella & Raincoat",
  "Comfortable Walking Shoes",
  "Mosquito Repellent",
  "Ayurvedic-friendly Loose Wear",
],

emergency: {
  police: "100",
  ambulance: "108",
  coastGuard: "1554",
},
coordinates: {
  lat: 10.8505,
  lng: 76.2711
},
travelAdvisory:
  "Weather is generally pleasant. Carry light cotton clothes and an umbrella, especially during monsoon months.",

},
  
];