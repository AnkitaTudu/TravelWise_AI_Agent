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

import hero2 from "../assets/destinations/jaipur/hero2.avif";

import hawaMahal from "../assets/destinations/jaipur/hawamahal.jpg";
import amerFort from "../assets/destinations/jaipur/amerFort.jpg";
import cityPalace from "../assets/destinations/jaipur/cityPalace.jpg";
import dalBaatiChurma from "../assets/destinations/jaipur/dalbaatichurma.jpg";
import laalmaas from "../assets/destinations/jaipur/laalmaas.jpg";
import ghewar from "../assets/destinations/jaipur/ghewar.jpg";

import hero3 from "../assets/destinations/spiti valley/hero3.jpg";
import keyMonastery from "../assets/destinations/spiti valley/keyMonastery.jpg";
import chandratal from "../assets/destinations/spiti valley/chandratal.jpg";
import kazaVillage from "../assets/destinations/spiti valley/kazaVillage.jpg";

import thukpa from "../assets/destinations/spiti valley/thukpa.jpg";
import momos from "../assets/destinations/spiti valley/momos.jpg";
import butterTea from "../assets/destinations/spiti valley/butterTea.jpg";
import sattuRoti from "../assets/destinations/spiti valley/sattuRoti.jpg";
import hero4 from "../assets/destinations/andaman islands/hero4.jpg";
import radhanagar from "../assets/destinations/andaman islands/radhanagar.jpg";
import cellularJail from "../assets/destinations/andaman islands/cellularjail.jpg";
import neilIsland   from "../assets/destinations/andaman islands/neilIsland.jpg";

import lobster from "../assets/destinations/andaman islands/lobster.jpg";
import coconutFishCurry from "../assets/destinations/andaman islands/coconutFishCurry.jpg";
import crabMasala from "../assets/destinations/andaman islands/crabMasala.jpg";
import fishFry from "../assets/destinations/andaman islands/fishFry.jpg";

import hero5 from "../assets/destinations/kashmir valley/hero5.jpg";
import dalLake from "../assets/destinations/kashmir valley/dalLake.jpg";
import gulmarg from "../assets/destinations/kashmir valley/gulmarg.jpg";
import pahalgam from "../assets/destinations/kashmir valley/pahalgam.jpg";

import roganJosh from "../assets/destinations/kashmir valley/roganjosh.jpg";
import kahwa from "../assets/destinations/kashmir valley/kahwa.jpg";
import modurPulao from "../assets/destinations/kashmir valley/modurPulao.jpg";
import yakhni from "../assets/destinations/kashmir valley/yakhni.jpg";

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

{
  id: 3,
  slug: "jaipur",

  name: "Jaipur",

  state: "Rajasthan",

  type: "Heritage Destination",
  duration: "4-6 days",


  heroImage: hero2,

  description: "Jaipur, the Pink City, dazzles visitors with its majestic forts, opulent palaces, vibrant bazaars, and a royal heritage that reflects the grandeur of Rajasthan's regal past.",

  bestTime: "October to March",

  weather: {
    summer: "26°C - 42°C",
    monsoon: "25°C - 33°C",
    winter: "8°C - 24°C",
  },

  budget: {
    budget: "₹6,000 - ₹10,000",
    midRange: "₹13,000 - ₹26,000",
    luxury: "₹35,000+",
  },

  food: [
    {
      name: "Dal Baati Churma",
      image: dalBaatiChurma,
    },
    {
      name: "Laal Maas",
      image: laalmaas,
    },
    {
      name: "Ghewar",
      image: ghewar,
    },
  ],

  activities: [
    "Fort Exploration",
    "Elephant Ride at Amer Fort",
    "Hot Air Balloon Safari",
    "Bazaar Shopping",
  ],

  airQuality: {
    value: 58,
    status: "Moderate",
  },
  crowd: {
    level: "High",
    bestTime: "Early Morning",
  },

  safety: {
    score: 8.5,
    status: "Safe",
  },

  attractions: [
    "Amer Fort",
    "Hawa Mahal",
    "City Palace",
    "Jantar Mantar",
  ],

  gallery: [
    hawaMahal,
    amerFort,
    cityPalace,
  ],

  hotels: [
    {
      name: "Rambagh Palace",
      type: "Luxury",
      price: "₹32,000",
      rating: 4.9,
    },
    {
      name: "Alsisar Haveli",
      type: "Mid-range",
      price: "₹5,800",
      rating: 4.4,
    },
    {
      name: "Zostel Jaipur",
      type: "Budget",
      price: "₹900",
      rating: 4.1,
    },
  ],

  packing: [
    "Light Cotton Clothes",
    "Sunglasses & Hat",
    "Comfortable Walking Shoes",
    "Sunscreen",
    "Light Jacket for Evenings",
  ],

  emergency: {
    police: "100",
    ambulance: "108",
    coastGuard: "1554",
  },
  coordinates: {
    lat: 26.9124,
    lng: 75.7873,
  },
  travelAdvisory: "Jaipur offers favourable travel conditions throughout the tourist season. Carry water, wear light cotton clothing, protect yourself from the sun, and respect local customs when visiting heritage sites and temples.",
},
{
  id: 4,
  slug: "spiti-valley",

  name: "Spiti Valley",

  state: "Himachal Pradesh",

  type: "Mountain Desert Destination",
  duration: "7-9 days",


  heroImage: hero3,

  description: "Spiti Valley is a high-altitude cold desert cradled between the Himalayas and Tibetan plateau, where ancient monasteries, stark lunar landscapes, and star-studded skies create an otherworldly adventure.",

  bestTime: "May to October",

  weather: {
    summer: "5°C - 20°C",
    monsoon: "8°C - 18°C",
    winter: "-15°C - 5°C",
  },

  budget: {
    budget: "₹9,000 - ₹14,000",
    midRange: "₹16,000 - ₹32,000",
    luxury: "₹42,000+",
  },

  food: [
    {
      name: "Thukpa",
      image: thukpa,
    },
    {
      name: "Momos",
      image: momos,
    },
    {
      name: "Butter Tea",
      image: butterTea,
    },

    {
      name: "Sattu Roti",
      image: sattuRoti,
    },
  ],

  activities: [
    "Monastery Visits",
    "High-Altitude Trekking",
    "Stargazing",
    "River Camping",
  ],

  airQuality: {
    value: 22,
    status: "Excellent",
  },
  crowd: {
    level: "Low",
    bestTime: "Morning",
  },

  safety: {
    score: 8.2,
    status: "Safe",
  },

  attractions: [
    "Key Monastery",
    "Chandratal Lake",
    "Pin Valley National Park",
    "Kaza Village",
  ],

  gallery: [
    keyMonastery,
    chandratal,
    kazaVillage,
  ],

  hotels: [
    {
      name: "Spiti Sarai Eco Lodge",
      type: "Luxury",
      price: "₹18,000",
      rating: 4.6,
    },
    {
      name: "Grand Dewachen",
      type: "Mid-range",
      price: "₹4,500",
      rating: 4.3,
    },
    {
      name: "Zostel Spiti",
      type: "Budget",
      price: "₹1,000",
      rating: 4.2,
    },
  ],

  packing: [
    "Heavy Woolens & Thermals",
    "Windproof Jacket",
    "Sunscreen & Lip Balm",
    "Portable Oxygen Can",
    "Sturdy Trekking Shoes",
  ],

  emergency: {
    police: "100",
    ambulance: "108",
    coastGuard: "1554",
  },
  coordinates: {
    lat: 32.2461,
    lng: 78.0349
  },
  travelAdvisory: ""
},

{
  id: 5,
  slug: "andaman-islands",

  name: "Andaman Islands",

  state: "Andaman and Nicobar Islands",

  type: "Island Destination",
  duration: "5-7 days",


  heroImage: hero4,

  description: "The Andaman Islands offer a tropical paradise of turquoise waters, coral reefs, and pristine white-sand beaches, blending marine adventure with colonial history and serene island life.",

  bestTime: "October to May",

  weather: {
    summer: "26°C - 32°C",
    monsoon: "23°C - 29°C",
    winter: "22°C - 30°C",
  },

  budget: {
    budget: "₹10,000 - ₹15,000",
    midRange: "₹18,000 - ₹35,000",
    luxury: "₹45,000+",
  },

  food: [
    {
      name: "Grilled Lobster",
      image: lobster,
    },
    {
      name: "Coconut Fish Curry",
      image: coconutFishCurry,
    },
    {
      name: "Crab Masala",
      image: crabMasala,
    },

    {
      name: "Amritsari Fish Fry",
      image: fishFry,
    },
  ],

  activities: [
    "Scuba Diving",
    "Snorkeling",
    "Sea Walking",
    "Island Hopping",
  ],

  airQuality: {
    value: 18,
    status: "Excellent",
  },
  crowd: {
    level: "Moderate",
    bestTime: "Morning",
  },

  safety: {
    score: 8.9,
    status: "Very Safe",
  },

  attractions: [
    "Radhanagar Beach",
    "Cellular Jail",
    "Ross Island",
    "Neil Island",
  ],

  gallery: [
    radhanagar,
    cellularJail,
    neilIsland,
  ],

  hotels: [
    {
      name: "Taj Exotica Andamans",
      type: "Luxury",
      price: "₹30,000",
      rating: 4.8,
    },
    {
      name: "SeaShell Port Blair",
      type: "Mid-range",
      price: "₹6,500",
      rating: 4.4,
    },
    {
      name: "Blue Sea Inn",
      type: "Budget",
      price: "₹1,300",
      rating: 4.1,
    },
  ],

  packing: [
    "Swimwear & Flip-flops",
    "Reef-safe Sunscreen",
    "Quick-dry Clothes",
    "Waterproof Bag",
    "Sunglasses & Hat",
  ],

  emergency: {
    police: "100",
    ambulance: "108",
    coastGuard: "1554",
  },
  coordinates: {
    lat: 11.7401,
    lng: 92.6586
  },
  travelAdvisory: ""
},

{
  id: 6,
  slug: "kashmir-valley",

  name: "Kashmir Valley",

  state: "Jammu and Kashmir",

  type: "Mountain Destination",
  duration: "6-8 days",


  heroImage: hero5,

  description: "Kashmir Valley, often called Paradise on Earth, enchants with snow-capped peaks, mirror-like lakes, blooming gardens, and houseboats drifting gently on the serene waters of Dal Lake.",

  bestTime: "March to October",

  weather: {
    summer: "15°C - 30°C",
    monsoon: "18°C - 28°C",
    winter: "-5°C - 10°C",
  },

  budget: {
    budget: "₹9,000 - ₹13,000",
    midRange: "₹16,000 - ₹30,000",
    luxury: "₹40,000+",
  },

  food: [
    {
      name: "Rogan Josh",
      image: roganJosh,
    },
    {
      name: "Yakhni",
      image: yakhni,
    },
    {
      name: "Kashmiri Kahwa",
      image: kahwa,
    },

    {
      name: "Modur Pulao",
      image: modurPulao,
    },
  ],

  activities: [
    "Shikara Ride",
    "Houseboat Stay",
    "Skiing at Gulmarg",
    "Mughal Garden Walks",
  ],

  airQuality: {
    value: 30,
    status: "Good",
  },
  crowd: {
    level: "Moderate",
    bestTime: "Early Morning",
  },

  safety: {
    score: 7.8,
    status: "Moderate",
  },

  attractions: [
    "Dal Lake",
    "Gulmarg",
    "Pahalgam",
    "Shalimar Bagh",
  ],

  gallery: [
    dalLake,
    gulmarg,
    pahalgam,
  ],

  hotels: [
    {
      name: "The Lalit Grand Palace",
      type: "Luxury",
      price: "₹27,000",
      rating: 4.7,
    },
    {
      name: "Heevan Retreat Pahalgam",
      type: "Mid-range",
      price: "₹5,900",
      rating: 4.4,
    },
    {
      name: "New Kashmir Houseboats",
      type: "Budget",
      price: "₹1,400",
      rating: 4.2,
    },
  ],

  packing: [
    "Heavy Woolens & Thermals",
    "Waterproof Jacket",
    "Sturdy Snow Boots",
    "Moisturizer & Lip Balm",
    "Gloves & Woolen Cap",
  ],

  emergency: {
    police: "100",
    ambulance: "108",
    coastGuard: "1554",
  },
  coordinates: {
    lat: 34.0837,
    lng: 74.7973
  },
  travelAdvisory: ""
},
];