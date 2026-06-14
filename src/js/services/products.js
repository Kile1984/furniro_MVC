// export const products = [
//   {
//     id: "p1",
//     title: "Aurelia Chair",
//     category: "chair",

//     price: {
//       original: 100,
//       discountPercent: 0,
//     },

//     badges: {
//       isNew: false,
//     },

//     images: {
//       main: new URL(
//         "../../assets/images/products/chairs/chair-01/chair-01-1.png",
//         import.meta.url,
//       ).href,
//       gallery: [
//         new URL(
//           "../../assets/images/products/chairs/chair-01/chair-01-2.png",
//           import.meta.url,
//         ).href,
//         new URL(
//           "../../assets/images/products/chairs/chair-01/chair-01-3.png",
//           import.meta.url,
//         ).href,
//         new URL(
//           "../../assets/images/products/chairs/chair-01/chair-01-4.png",
//           import.meta.url,
//         ).href,
//       ],
//     },

//     shortDescription: "Soft comfort with modern design",

//     properties: {
//       salesPackage: "1 Chair",
//       modelNumber: "AUR-CHR-01",
//       secondaryMaterial: "Metal",
//       configuration: "Straight",
//       fillingMaterial: "Foam",
//       maximumLoadCapacity: "120 kg",
//       originOfManufacture: "Serbia",
//       dimensions: {
//         width: "60 cm",
//         height: "85 cm",
//         depth: "55 cm",
//         weight: "8 kg",
//       },
//       warrantySummary: "1 Year Manufacturer Warranty",
//     },
//   },
//   {
//     id: "p2",
//     title: "Nordic",
//     category: "chair",

//     price: {
//       original: 160,
//       discountPercent: 0,
//     },

//     badges: {
//       isNew: true,
//     },

//     images: {
//       main: new URL(
//         "../../assets/images/products/chairs/chair-02/chair-02-1.png",
//         import.meta.url,
//       ).href,
//       gallery: [
//         new URL(
//           "../../assets/images/products/chairs/chair-02/chair-02-2.png",
//           import.meta.url,
//         ).href,
//         new URL(
//           "../../assets/images/products/chairs/chair-02/chair-02-3.png",
//           import.meta.url,
//         ).href,
//         new URL(
//           "../../assets/images/products/chairs/chair-02/chair-02-4.png",
//           import.meta.url,
//         ).href,
//       ],
//     },

//     shortDescription: "Minimal form",

//     properties: {
//       salesPackage: "1 Chair",
//       modelNumber: "AUR-CHR-01",
//       secondaryMaterial: "Metal",
//       configuration: "Straight",
//       fillingMaterial: "Foam",
//       maximumLoadCapacity: "120 kg",
//       originOfManufacture: "Serbia",
//       dimensions: {
//         width: "60 cm",
//         height: "85 cm",
//         depth: "55 cm",
//         weight: "8 kg",
//       },
//       warrantySummary: "1 Year Manufacturer Warranty",
//     },
//   },
//   {
//     id: "p3",
//     title: "Lunara",
//     category: "chair",

//     price: {
//       original: 100,
//       discountPercent: 20,
//     },

//     badges: {
//       isNew: false,
//     },

//     images: {
//       main: new URL(
//         "../../assets/images/products/chairs/chair-03/chair-03-1.png",
//         import.meta.url,
//       ).href,
//       gallery: [
//         new URL(
//           "../../assets/images/products/chairs/chair-03/chair-03-2.png",
//           import.meta.url,
//         ).href,
//         new URL(
//           "../../assets/images/products/chairs/chair-03/chair-03-3.png",
//           import.meta.url,
//         ).href,
//         new URL(
//           "../../assets/images/products/chairs/chair-03/chair-03-4.png",
//           import.meta.url,
//         ).href,
//       ],
//     },

//     shortDescription: "Curved design",

//     properties: {
//       salesPackage: "1 Chair",
//       modelNumber: "AUR-CHR-01",
//       secondaryMaterial: "Metal",
//       configuration: "Straight",
//       fillingMaterial: "Foam",
//       maximumLoadCapacity: "120 kg",
//       originOfManufacture: "Serbia",
//       dimensions: {
//         width: "60 cm",
//         height: "85 cm",
//         depth: "55 cm",
//         weight: "8 kg",
//       },
//       warrantySummary: "1 Year Manufacturer Warranty",
//     },
//   },
//   {
//     id: "p4",
//     title: "Velora",
//     category: "chair",

//     price: {
//       original: 300,
//       discountPercent: 30,
//     },

//     badges: {
//       isNew: false,
//     },

//     images: {
//       main: new URL(
//         "../../assets/images/products/chairs/chair-04/chair-04-1.png",
//         import.meta.url,
//       ).href,
//       gallery: [
//         new URL(
//           "../../assets/images/products/chairs/chair-04/chair-04-2.png",
//           import.meta.url,
//         ).href,
//         new URL(
//           "../../assets/images/products/chairs/chair-04/chair-04-3.png",
//           import.meta.url,
//         ).href,
//         new URL(
//           "../../assets/images/products/chairs/chair-04/chair-04-4.png",
//           import.meta.url,
//         ).href,
//       ],
//     },

//     shortDescription: "Modern elegance",

//     properties: {
//       salesPackage: "1 Chair",
//       modelNumber: "AUR-CHR-01",
//       secondaryMaterial: "Metal",
//       configuration: "Straight",
//       fillingMaterial: "Foam",
//       maximumLoadCapacity: "120 kg",
//       originOfManufacture: "Serbia",
//       dimensions: {
//         width: "60 cm",
//         height: "85 cm",
//         depth: "55 cm",
//         weight: "8 kg",
//       },
//       warrantySummary: "1 Year Manufacturer Warranty",
//     },
//   },
// ];

// =========================
// CHAIRS (1–10)
// =========================
export const products = [
  {
    id: "p1",
    title: "Aurelia",
    category: "chair",
    categorySlug: "chairs",
    price: { original: 120, discountPercent: 0 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/chairs/chair-01/chair-01-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/chairs/chair-01/chair-01-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-01/chair-01-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-01/chair-01-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Soft comfort",

    longDescription: {
      introduction:
        "Aurelia chair combines modern design with everyday comfort.",

      paragraphs: [
        "Crafted from premium fabric and solid wood for durability and style.",
        "The ergonomic seat provides excellent comfort for daily use.",
        "Perfect for dining rooms, home offices, and contemporary interiors.",
      ],
    },

    sizes: ["S", "M", "L"],

    tags: ["Chair", "Modern", "Wood", "Fabric"],

    reviews: [
      {
        id: "r1",
        author: "John D.",
        rating: 3,
        date: "2026-01-12",
        comment: "Very comfortable and looks amazing in my dining room.",
      },
      {
        id: "r2",
        author: "Emma R.",
        rating: 4,
        date: "2026-02-03",
        comment: "Good quality chair. Assembly was quick and easy.",
      },
    ],

    properties: {
      salesPackage: "1 Chair",
      modelNumber: "CHR-AUR-01",
      primaryMaterial: "Fabric",
      secondaryMaterial: "Solid Wood",
      maximumLoadCapacity: "120 kg",
      seatHeight: "45 cm",

      dimensions: {
        width: "55 cm",
        height: "78 cm",
        depth: "52 cm",
        weight: "6 kg",
      },

      warrantySummary: "1 Year Warranty",
      stock: 2,
    },
  },

  {
    id: "p2",
    title: "Nordic",
    category: "chair",
    categorySlug: "chairs",
    price: { original: 160, discountPercent: 10 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/chairs/chair-02/chair-02-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/chairs/chair-02/chair-02-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-02/chair-02-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-02/chair-02-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Minimal form",
    longDescription: {
      introduction:
        "Nordic chair blends Scandinavian simplicity with practical comfort.",

      paragraphs: [
        "Its clean lines and oak frame fit perfectly into modern interiors.",
        "Soft upholstery provides support during long sitting sessions.",
        "Designed to bring elegance and functionality to everyday living.",
      ],
    },

    sizes: ["S", "M", "L"],

    tags: ["Chair", "Scandinavian", "Oak", "Minimal"],

    reviews: [
      {
        id: "r1",
        author: "Michael T.",
        rating: 5,
        date: "2026-02-15",
        comment: "Excellent quality and beautiful design.",
      },
      {
        id: "r2",
        author: "Sarah W.",
        rating: 4,
        date: "2026-03-01",
        comment: "Comfortable and easy to match with other furniture.",
      },
    ],

    properties: {
      salesPackage: "1 Chair",
      modelNumber: "CHR-NOR-02",
      primaryMaterial: "Polyester Fabric",
      secondaryMaterial: "Oak",
      maximumLoadCapacity: "120 kg",
      seatHeight: "46 cm",

      dimensions: {
        width: "50 cm",
        height: "80 cm",
        depth: "54 cm",
        weight: "5.8 kg",
      },

      warrantySummary: "2 Year Warranty",
      stock: 12,
    },
  },

  {
    id: "p3",
    title: "Lunara",
    category: "chair",
    categorySlug: "chairs",
    price: { original: 180, discountPercent: 20 },
    badges: { isNew: false },

    images: {
      main: new URL(
        "../../assets/images/products/chairs/chair-03/chair-03-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/chairs/chair-03/chair-03-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-03/chair-03-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-03/chair-03-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Curved design",
    longDescription: {
      introduction:
        "Lunara chair features elegant curves and exceptional comfort.",

      paragraphs: [
        "Designed with attention to detail and premium materials.",
        "The curved silhouette creates a unique visual identity.",
        "Suitable for both modern homes and commercial spaces.",
      ],
    },

    sizes: ["S", "M", "L"],

    tags: ["Chair", "Curved", "Elegant", "Fabric"],

    reviews: [
      {
        id: "r1",
        author: "Daniel P.",
        rating: 2,
        date: "2026-01-28",
        comment: "Stylish and surprisingly comfortable.",
      },
    ],

    properties: {
      salesPackage: "1 Chair",
      modelNumber: "CHR-LUN-03",
      primaryMaterial: "Textured Fabric",
      secondaryMaterial: "Beech Wood",
      maximumLoadCapacity: "130 kg",
      seatHeight: "45 cm",

      dimensions: {
        width: "56 cm",
        height: "79 cm",
        depth: "53 cm",
        weight: "6.2 kg",
      },

      warrantySummary: "2 Year Warranty",
      stock: 6,
    },
  },

  {
    id: "p4",
    title: "Velora",
    category: "chair",
    categorySlug: "chairs",
    price: { original: 240, discountPercent: 25 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/chairs/chair-04/chair-04-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/chairs/chair-04/chair-04-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-04/chair-04-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-04/chair-04-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Modern elegance",

    longDescription: {
      introduction:
        "Velora brings luxury aesthetics and premium seating comfort.",

      paragraphs: [
        "Soft velvet upholstery creates a sophisticated appearance.",
        "Built with durable materials for long-term performance.",
        "An ideal centerpiece for elegant dining areas.",
      ],
    },

    sizes: ["S", "M", "L"],

    tags: ["Chair", "Velvet", "Luxury", "Modern"],

    reviews: [
      {
        id: "r1",
        author: "Jessica M.",
        rating: 3,
        date: "2026-04-11",
        comment: "Absolutely beautiful and very comfortable.",
      },
    ],

    properties: {
      salesPackage: "1 Chair",
      modelNumber: "CHR-VEL-04",
      primaryMaterial: "Velvet",
      secondaryMaterial: "Wood",
      maximumLoadCapacity: "130 kg",
      seatHeight: "47 cm",

      dimensions: {
        width: "58 cm",
        height: "82 cm",
        depth: "55 cm",
        weight: "6.5 kg",
      },

      warrantySummary: "2 Year Warranty",
      stock: 4,
    },
  },

  {
    id: "p5",
    title: "Arden",
    category: "chair",
    categorySlug: "chairs",
    price: { original: 150, discountPercent: 5 },
    badges: { isNew: false },

    images: {
      main: new URL(
        "../../assets/images/products/chairs/chair-05/chair-05-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/chairs/chair-05/chair-05-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-05/chair-05-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-05/chair-05-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Clean lines",

    longDescription: {
      introduction:
        "Arden chair offers timeless simplicity and reliable comfort.",

      paragraphs: [
        "Clean lines make it suitable for various interior styles.",
        "Built from durable materials and easy to maintain.",
        "A practical choice for everyday dining use.",
      ],
    },

    sizes: ["S", "M", "L"],

    tags: ["Chair", "Minimal", "Oak", "Dining"],

    reviews: [
      {
        id: "r1",
        author: "Chris L.",
        rating: 4,
        date: "2026-02-10",
        comment: "Simple, practical, and comfortable.",
      },
    ],

    properties: {
      salesPackage: "1 Chair",
      modelNumber: "CHR-ARD-05",
      primaryMaterial: "Fabric",
      secondaryMaterial: "Solid Oak",
      maximumLoadCapacity: "120 kg",
      seatHeight: "45 cm",

      dimensions: {
        width: "52 cm",
        height: "77 cm",
        depth: "50 cm",
        weight: "5.5 kg",
      },

      warrantySummary: "1 Year Warranty",
      stock: 2,
    },
  },

  // =========================
  // TABLES (11–20)
  // =========================

  {
    id: "p11",
    title: "Valen",
    category: "table",
    categorySlug: "tables",
    price: { original: 420, discountPercent: 15 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/tables/table-01/table-01-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/tables/table-01/table-01-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-01/table-01-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-01/table-01-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Solid wood",
    longDescription: {
      introduction:
        "Valen dining table is crafted from solid oak for lasting durability.",

      paragraphs: [
        "The spacious tabletop comfortably seats family and guests.",
        "Its timeless design complements both modern and classic interiors.",
        "Built to withstand everyday dining and entertaining.",
      ],
    },

    sizes: ["140 cm", "160 cm", "180 cm"],

    tags: ["Table", "Dining", "Oak", "Family"],

    reviews: [
      {
        id: "r1",
        author: "Anna K.",
        rating: 5,
        date: "2026-01-18",
        comment: "Beautiful craftsmanship and very sturdy.",
      },
    ],

    properties: {
      salesPackage: "1 Table",
      modelNumber: "TBL-VAL-01",

      primaryMaterial: "Solid Oak",
      tableShape: "Rectangle",
      seatingCapacity: "6 People",

      dimensions: {
        width: "160 cm",
        height: "75 cm",
        depth: "90 cm",
        weight: "35 kg",
      },

      warrantySummary: "3 Year Warranty",
      stock: 8,
    },
  },

  {
    id: "p12",
    title: "Norvik",
    category: "table",
    categorySlug: "tables",
    price: { original: 390, discountPercent: 0 },
    badges: { isNew: false },

    images: {
      main: new URL(
        "../../assets/images/products/tables/table-02/table-02-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/tables/table-02/table-02-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-02/table-02-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-02/table-02-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Nordic dining",

    longDescription: {
      introduction:
        "Norvik offers Scandinavian dining style with practical dimensions.",

      paragraphs: [
        "Perfect for smaller dining rooms and apartments.",
        "Oak veneer finish adds warmth and elegance.",
        "Easy to integrate into modern interior designs.",
      ],
    },

    sizes: ["120 cm", "140 cm", "160 cm"],

    tags: ["Table", "Scandinavian", "Dining", "Oak"],

    reviews: [
      {
        id: "r1",
        author: "David R.",
        rating: 5,
        date: "2026-03-05",
        comment: "Perfect size for our apartment.",
      },
    ],

    properties: {
      salesPackage: "1 Table",
      modelNumber: "TBL-NOR-02",

      primaryMaterial: "Oak Veneer",
      tableShape: "Rectangle",
      seatingCapacity: "4 People",

      dimensions: {
        width: "140 cm",
        height: "75 cm",
        depth: "80 cm",
        weight: "30 kg",
      },

      warrantySummary: "3 Year Warranty",
      stock: 2,
    },
  },

  // =========================
  // SOFAS (21–30)
  // =========================

  {
    id: "p21",
    title: "Lioro",
    category: "sofa",
    categorySlug: "sofas",
    price: { original: 850, discountPercent: 25 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/sofas/sofa-01/sofa-01-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/sofas/sofa-01/sofa-01-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-01/sofa-01-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-01/sofa-01-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Luxury sofa",

    longDescription: {
      introduction:
        "Lioro sofa combines luxurious comfort with contemporary design.",

      paragraphs: [
        "Generous seating and premium upholstery create a relaxing experience.",
        "The solid wood frame ensures long-lasting durability.",
        "Ideal for modern living rooms and family spaces.",
      ],
    },

    sizes: ["2 Seater", "3 Seater", "4 Seater"],

    tags: ["Sofa", "Luxury", "Comfort", "Living Room"],

    reviews: [
      {
        id: "r1",
        author: "Mark H.",
        rating: 5,
        date: "2026-01-25",
        comment: "Extremely comfortable and looks fantastic.",
      },
    ],

    properties: {
      salesPackage: "1 Sofa",
      modelNumber: "SFA-LIO-01",

      upholsteryMaterial: "Premium Fabric",
      frameMaterial: "Solid Wood",
      seatingCapacity: "3 People",
      seatHeight: "44 cm",

      dimensions: {
        width: "220 cm",
        height: "85 cm",
        depth: "90 cm",
        weight: "65 kg",
      },

      warrantySummary: "5 Year Warranty",
      stock: 3,
    },
  },

  {
    id: "p22",
    title: "Velmont",
    category: "sofa",
    categorySlug: "sofas",
    price: { original: 920, discountPercent: 30 },
    badges: { isNew: false },

    images: {
      main: new URL(
        "../../assets/images/products/sofas/sofa-02/sofa-02-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/sofas/sofa-02/sofa-02-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-02/sofa-02-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-02/sofa-02-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Deep comfort",

    longDescription: {
      introduction: "Velmont sofa delivers deep comfort and modern aesthetics.",

      paragraphs: [
        "Designed for everyday relaxation and family gatherings.",
        "Soft upholstery and supportive cushions enhance comfort.",
        "A versatile piece that fits a wide range of interiors.",
      ],
    },

    sizes: ["2 Seater", "3 Seater", "4 Seater"],

    tags: ["Sofa", "Comfort", "Modern", "Family"],

    reviews: [
      {
        id: "r1",
        author: "Olivia B.",
        rating: 2,
        date: "2026-04-08",
        comment: "Very comfortable and excellent value.",
      },
    ],

    properties: {
      salesPackage: "1 Sofa",
      modelNumber: "SFA-VEL-02",

      upholsteryMaterial: "Polyester Fabric",
      frameMaterial: "Engineered Wood",
      seatingCapacity: "3 People",
      seatHeight: "43 cm",

      dimensions: {
        width: "200 cm",
        height: "82 cm",
        depth: "88 cm",
        weight: "60 kg",
      },

      warrantySummary: "5 Year Warranty",
      stock: 10,
    },
  },
];
