import hero from "../assets/destinations/goa/heroimage.jpg";

import bagaBeach from "../assets/destinations/goa/bagabeach.jpg";
import dudhsagar from "../assets/destinations/goa/dudhsagar.jpg";
import basilica from "../assets/destinations/goa/basilica.jpg";

import fishCurry from "../assets/destinations/goa/fishcurry.jpg";
import goanxacuti from "../assets/destinations/goa/goanxacuti.jpg";
import chicken from "../assets/destinations/goa/chicken.jpg";
import prawn from "../assets/destinations/goa/prawn.jpg";
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
    }
  },
];