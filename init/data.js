const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "cozy-beachfront-cottage.jpg"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "modern-loft-downtown.jpg"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "mountain-retreat.jpg"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "historic-villa-tuscany.jpg"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "secluded-treehouse-getaway.jpg"
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "beachfront-paradise.jpg"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "rustic-cabin-lake.jpg"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "luxury-penthouse-city-views.jpg"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "ski-in-ski-out-chalet.jpg"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "safari-lodge-serengeti.jpg"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "historic-canal-house.jpg"
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "private-island-retreat.jpg"
    },
    price: 5000,
    location: "Maldives",
    country: "Maldives",
  },
 
    {
      title: "Serene Coastal Cottage",
      description:
        "Relax in this serene coastal cottage with breathtaking sea views and direct beach access.",
      image: {
        url: "https://images.unsplash.com/photo-1597711839426-d6e572f9e8f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29hc3RhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "serene-coastal-cottage.jpg"
      },
      price: 1600,
      location: "Santa Barbara",
      country: "United States",
    },
    {
      title: "Chic Urban Loft",
      description:
        "Experience the vibrant city life in this chic urban loft with modern amenities and a central location.",
      image: {
        url: "https://images.unsplash.com/photo-1600968000837-783a292c4802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVybmFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "chic-urban-loft.jpg"
      },
      price: 1300,
      location: "San Francisco",
      country: "United States",
    },
    {
      title: "Rustic Mountain Lodge",
      description:
        "Reconnect with nature in this rustic mountain lodge, perfect for a peaceful retreat in the great outdoors.",
      image: {
        url: "https://images.unsplash.com/photo-1560648681-7e35a1f2b004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "rustic-mountain-lodge.jpg"
      },
      price: 1100,
      location: "Jackson Hole",
      country: "United States",
    },
    {
      title: "Elegant Tuscan Estate",
      description:
        "Discover the beauty of Tuscany in this elegant estate with panoramic views of the countryside and vineyards.",
      image: {
        url: "https://images.unsplash.com/photo-1602264494621-b042e3e6b7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MnwxfGhpc3RvcmljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "elegant-tuscan-estate.jpg"
      },
      price: 2700,
      location: "Siena",
      country: "Italy",
    },
    {
      title: "Treehouse Retreat in Nature",
      description:
        "Escape to this secluded treehouse, perched high among the trees, for an unforgettable experience in nature.",
      image: {
        url: "https://images.unsplash.com/photo-1604360775848-22c86fc5c665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "treehouse-retreat-nature.jpg"
      },
      price: 850,
      location: "Asheville",
      country: "United States",
    },
    {
      title: "Oceanfront Luxury Suite",
      description:
        "Indulge in luxury with this oceanfront suite, offering stunning views and direct access to a pristine beach.",
      image: {
        url: "https://images.unsplash.com/photo-1572346104251-c9140b7684eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9jZWFuZnJvb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "oceanfront-luxury-suite.jpg"
      },
      price: 2200,
      location: "Bora Bora",
      country: "French Polynesia",
    },
    {
      title: "Charming Lakefront Cabin",
      description:
        "Enjoy lakeside living with this charming cabin, ideal for fishing, kayaking, and relaxing by the water.",
      image: {
        url: "https://images.unsplash.com/photo-1593477805741-1e95898b7573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhayUyMHRvd2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "charming-lakefront-cabin.jpg"
      },
      price: 950,
      location: "Maine",
      country: "United States",
    },
    {
      title: "Opulent City Penthouse",
      description:
        "Experience unparalleled luxury in this opulent city penthouse with panoramic views and top-of-the-line amenities.",
      image: {
        url: "https://images.unsplash.com/photo-1591031440977-89e2c6ea58bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGludG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "opulent-city-penthouse.jpg"
      },
      price: 3600,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Alpine Ski Lodge",
      description:
        "Enjoy ski-in/ski-out access at this luxurious alpine lodge in the heart of the mountains.",
      image: {
        url: "https://images.unsplash.com/photo-1552524947-4d7c4f6d0c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsbG91ZGUlMjBzayUyMGV1c3QfZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "alpine-ski-lodge.jpg"
      },
      price: 3100,
      location: "Zermatt",
      country: "Switzerland",
    },
    {
      title: "Exclusive Safari Camp",
      description:
        "Immerse yourself in the wild with this exclusive safari camp experience, offering close encounters with nature.",
      image: {
        url: "https://images.unsplash.com/photo-1602643460326-26d005f91188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FmYXJpJTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "exclusive-safari-camp.jpg"
      },
      price: 4200,
      location: "Maasai Mara",
      country: "Kenya",
    },
    {
      title: "Beautiful Canal Residence",
      description:
        "Stay in this beautifully restored canal residence, offering a blend of historic charm and modern comfort in Amsterdam.",
      image: {
        url: "https://images.unsplash.com/photo-1597737980480-15f70c9d7e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FubGxlJTIwcmVzaWRlbmNlX2FuZGV0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "beautiful-canal-residence.jpg"
      },
      price: 1900,
      location: "Rotterdam",
      country: "Netherlands",
    },
    ];

module.exports = { data: sampleListings };