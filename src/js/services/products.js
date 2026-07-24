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
    id: "p8",
    title: "Calvero",
    category: "chair",
    categorySlug: "chairs",
    price: { original: 275, discountPercent: 30 },
    badges: { isNew: false },

    images: {
      main: new URL(
        "../../assets/images/products/chairs/chair-08/chair-08-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/chairs/chair-08/chair-08-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-08/chair-08-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-08/chair-08-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Premium seating",

    longDescription: {
      introduction:
        "Calvero offers luxurious comfort with a bold contemporary look.",
      paragraphs: [
        "Wide seat provides exceptional comfort.",
        "Premium leather-look upholstery.",
        "Built for elegant interiors.",
      ],
    },

    sizes: ["L"],

    tags: ["Chair", "Luxury", "Leather", "Modern"],

    reviews: [
      {
        id: "r1",
        author: "Amanda J.",
        rating: 5,
        date: "2026-04-18",
        comment: "Looks much more expensive than it is.",
      },
    ],

    properties: {
      salesPackage: "1 Chair",
      modelNumber: "CHR-CAL-08",
      primaryMaterial: "PU Leather",
      secondaryMaterial: "Metal",
      maximumLoadCapacity: "150 kg",
      seatHeight: "49 cm",

      dimensions: {
        width: "60 cm",
        height: "85 cm",
        depth: "58 cm",
        weight: "7.6 kg",
      },

      warrantySummary: "3 Year Warranty",
      stock: 3,
    },
  },

  {
    id: "p9",
    title: "Mirel",
    category: "chair",
    categorySlug: "chairs",
    price: { original: 175, discountPercent: 10 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/chairs/chair-09/chair-09-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/chairs/chair-09/chair-09-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-09/chair-09-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-09/chair-09-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Fresh style",

    longDescription: {
      introduction:
        "Mirel brings fresh colors and practical comfort to modern homes.",
      paragraphs: [
        "Soft woven fabric resists everyday wear.",
        "Comfortable backrest encourages proper posture.",
        "Ideal for apartments and offices.",
      ],
    },

    sizes: ["M"],

    tags: ["Chair", "Colorful", "Office", "Modern"],

    reviews: [
      {
        id: "r1",
        author: "Natalie B.",
        rating: 4,
        date: "2026-05-04",
        comment: "Comfortable and surprisingly lightweight.",
      },
    ],

    properties: {
      salesPackage: "1 Chair",
      modelNumber: "CHR-MIR-09",
      primaryMaterial: "Woven Fabric",
      secondaryMaterial: "Ash Wood",
      maximumLoadCapacity: "125 kg",
      seatHeight: "46 cm",

      dimensions: {
        width: "54 cm",
        height: "81 cm",
        depth: "54 cm",
        weight: "5.9 kg",
      },

      warrantySummary: "2 Year Warranty",
      stock: 9,
    },
  },

  // =========================
  // TABLES (11–20)
  // =========================
  {
    id: "p2",
    title: "Nordic",
    category: "chair",
    categorySlug: "chairs",
    price: { original: 160, discountPercent: 10 },
    badges: { isNew: true },
    featured: true,

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
    id: "p10",
    title: "Valora",
    category: "table",
    categorySlug: "tables",

    price: {
      original: 520,
      discountPercent: 15,
    },

    badges: {
      isNew: true,
    },

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

    shortDescription: "Premium family dining",

    longDescription: {
      introduction:
        "Valora is a spacious dining table designed for modern family living.",

      paragraphs: [
        "Its solid ash wood construction ensures outstanding stability and durability.",
        "The smooth matte finish highlights the natural wood grain.",
        "Perfect for family dinners, celebrations, and everyday use.",
      ],
    },

    sizes: ["160 cm", "180 cm", "200 cm"],

    tags: ["Table", "Dining", "Ash Wood", "Modern"],

    reviews: [
      {
        id: "r1",
        author: "Olivia T.",
        rating: 5,
        date: "2026-02-18",
        comment: "Beautiful craftsmanship and plenty of room for our family.",
      },
      {
        id: "r2",
        author: "Lucas W.",
        rating: 4,
        date: "2026-04-11",
        comment: "Very sturdy table with an elegant finish. Easy to assemble.",
      },
    ],

    properties: {
      salesPackage: "1 Table",

      modelNumber: "TBL-VAL-01",

      primaryMaterial: "Solid Ash Wood",

      tableShape: "Rectangle",

      seatingCapacity: "6 People",

      dimensions: {
        width: "180 cm",
        height: "75 cm",
        depth: "90 cm",
        weight: "38 kg",
      },

      warrantySummary: "5 Year Warranty",

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
    featured: true,

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
    id: "p14",
    title: "Oakridge",
    category: "table",
    categorySlug: "tables",
    price: { original: 460, discountPercent: 10 },
    badges: { isNew: false },
    featured: true,

    images: {
      main: new URL(
        "../../assets/images/products/tables/table-10/table-10-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/tables/table-10/table-10-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-10/table-10-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-10/table-10-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Classic oak table",

    longDescription: {
      introduction: "Oakridge brings timeless style to any dining room.",
      paragraphs: [
        "Crafted from premium oak with a durable finish.",
        "Designed for daily family use.",
        "Complements both classic and modern interiors.",
      ],
    },

    sizes: ["140 cm", "160 cm", "180 cm"],

    tags: ["Table", "Oak", "Dining", "Classic"],

    reviews: [
      {
        id: "r1",
        author: "Michael B.",
        rating: 5,
        date: "2026-01-14",
        comment: "Beautiful quality and very sturdy.",
      },
    ],

    properties: {
      salesPackage: "1 Table",
      modelNumber: "TBL-OAK-01",
      primaryMaterial: "Solid Oak",
      tableShape: "Rectangle",
      seatingCapacity: "6 People",

      dimensions: {
        width: "160 cm",
        height: "75 cm",
        depth: "90 cm",
        weight: "35 kg",
      },

      warrantySummary: "5 Year Warranty",
      stock: 5,
    },
  },
  {
    id: "p26",
    title: "Cavero",
    category: "sofa",
    categorySlug: "sofas",
    price: { original: 990, discountPercent: 30 },
    badges: { isNew: false },

    images: {
      main: new URL(
        "../../assets/images/products/sofas/sofa-06/sofa-06-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/sofas/sofa-06/sofa-06-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-06/sofa-06-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-06/sofa-06-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Contemporary modular sofa",

    longDescription: {
      introduction:
        "Cavero modular sofa is designed for flexibility, comfort, and modern living.",

      paragraphs: [
        "Its modular sections allow you to adapt the layout to your space.",
        "Premium foam cushions deliver exceptional seating comfort every day.",
        "A durable frame and elegant upholstery make it a centerpiece in any home.",
      ],
    },

    sizes: ["3 Seater", "4 Seater", "Modular"],

    tags: ["Sofa", "Modular", "Modern", "Living Room"],

    reviews: [
      {
        id: "r1",
        author: "Lucas W.",
        rating: 5,
        date: "2026-02-14",
        comment: "The modular design is brilliant and incredibly comfortable.",
      },
      {
        id: "r2",
        author: "Grace N.",
        rating: 4,
        date: "2026-05-09",
        comment: "Very stylish and easy to rearrange.",
      },
    ],

    properties: {
      salesPackage: "1 Sofa",
      modelNumber: "SFA-CAV-05",

      upholsteryMaterial: "Premium Linen",
      frameMaterial: "Solid Beech Wood",
      seatingCapacity: "4 People",
      seatHeight: "44 cm",

      dimensions: {
        width: "250 cm",
        height: "86 cm",
        depth: "96 cm",
        weight: "74 kg",
      },

      warrantySummary: "5 Year Warranty",
      stock: 7,
    },
  },
  {
    id: "p16",
    title: "Boreal",
    category: "table",
    categorySlug: "tables",
    price: { original: 340, discountPercent: 0 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/tables/table-03/table-03-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/tables/table-03/table-03-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-03/table-03-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-03/table-03-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Minimal Nordic design",

    longDescription: {
      introduction: "Boreal combines minimalist aesthetics with functionality.",
      paragraphs: [
        "Ideal for compact dining spaces.",
        "Scratch-resistant surface.",
        "Stable steel frame ensures durability.",
      ],
    },

    sizes: ["120 cm", "140 cm"],

    tags: ["Table", "Nordic", "Steel", "Minimal"],

    reviews: [
      {
        id: "r1",
        author: "Sarah L.",
        rating: 4,
        date: "2026-02-06",
        comment: "Perfect for our small apartment.",
      },
    ],

    properties: {
      salesPackage: "1 Table",
      modelNumber: "TBL-BOR-01",
      primaryMaterial: "Engineered Wood",
      tableShape: "Rectangle",
      seatingCapacity: "4 People",

      dimensions: {
        width: "140 cm",
        height: "74 cm",
        depth: "80 cm",
        weight: "24 kg",
      },

      warrantySummary: "2 Year Warranty",
      stock: 9,
    },
  },
  {
    id: "p6",
    title: "Savona",
    category: "chair",
    categorySlug: "chairs",
    price: { original: 210, discountPercent: 15 },
    badges: { isNew: true },
    featured: true,

    images: {
      main: new URL(
        "../../assets/images/products/chairs/chair-06/chair-06-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/chairs/chair-06/chair-06-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-06/chair-06-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/chairs/chair-06/chair-06-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Elegant support",

    longDescription: {
      introduction:
        "Savona chair combines soft seating with contemporary styling.",
      paragraphs: [
        "High-density foam provides lasting comfort.",
        "Powder-coated steel legs increase durability.",
        "Perfect for dining rooms and meeting spaces.",
      ],
    },

    sizes: ["M", "L"],

    tags: ["Chair", "Steel", "Modern", "Foam"],

    reviews: [
      {
        id: "r1",
        author: "Olivia H.",
        rating: 5,
        date: "2026-03-17",
        comment: "Very comfortable even after long dinners.",
      },
    ],

    properties: {
      salesPackage: "1 Chair",
      modelNumber: "CHR-SAV-06",
      primaryMaterial: "Linen Fabric",
      secondaryMaterial: "Steel",
      maximumLoadCapacity: "140 kg",
      seatHeight: "48 cm",

      dimensions: {
        width: "57 cm",
        height: "84 cm",
        depth: "56 cm",
        weight: "6.9 kg",
      },

      warrantySummary: "3 Year Warranty",
      stock: 7,
    },
  },

  {
    id: "p17",
    title: "Eldora",
    category: "table",
    categorySlug: "tables",
    price: { original: 610, discountPercent: 15 },
    badges: { isNew: false },
    featured: true,

    images: {
      main: new URL(
        "../../assets/images/products/tables/table-06/table-06-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/tables/table-06/table-06-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-06/table-06-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-06/table-06-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Elegant family dining",

    longDescription: {
      introduction:
        "Eldora combines refined craftsmanship with generous dining space.",

      paragraphs: [
        "Solid wood construction built for everyday use.",
        "Smooth lacquer finish protects against daily wear.",
        "Perfect for large family gatherings.",
      ],
    },

    sizes: ["180 cm", "200 cm"],

    tags: ["Table", "Wood", "Dining", "Premium"],

    reviews: [
      {
        id: "r1",
        author: "Robert G.",
        rating: 5,
        date: "2026-04-09",
        comment: "Excellent quality and very stable.",
      },
    ],

    properties: {
      salesPackage: "1 Table",
      modelNumber: "TBL-ELD-01",
      primaryMaterial: "Solid Beech",
      tableShape: "Rectangle",
      seatingCapacity: "8 People",

      dimensions: {
        width: "200 cm",
        height: "76 cm",
        depth: "95 cm",
        weight: "42 kg",
      },

      warrantySummary: "5 Year Warranty",
      stock: 4,
    },
  },

  {
    id: "p18",
    title: "Solen",
    category: "table",
    categorySlug: "tables",
    price: { original: 315, discountPercent: 0 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/tables/table-07/table-07-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/tables/table-07/table-07-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-07/table-07-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-07/table-07-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Simple everyday table",

    longDescription: {
      introduction:
        "Solen is designed for modern homes where simplicity matters.",

      paragraphs: [
        "Compact dimensions fit most kitchens.",
        "Scratch-resistant tabletop.",
        "Lightweight yet durable construction.",
      ],
    },

    sizes: ["120 cm", "140 cm"],

    tags: ["Table", "Minimal", "Kitchen", "Scandinavian"],

    reviews: [
      {
        id: "r1",
        author: "Jessica M.",
        rating: 4,
        date: "2026-02-17",
        comment: "Easy to assemble and perfect for everyday use.",
      },
    ],

    properties: {
      salesPackage: "1 Table",
      modelNumber: "TBL-SOL-01",
      primaryMaterial: "Engineered Wood",
      tableShape: "Rectangle",
      seatingCapacity: "4 People",

      dimensions: {
        width: "140 cm",
        height: "74 cm",
        depth: "80 cm",
        weight: "23 kg",
      },

      warrantySummary: "2 Year Warranty",
      stock: 10,
    },
  },

  {
    id: "p19",
    title: "Montero",
    category: "table",
    categorySlug: "tables",
    price: { original: 760, discountPercent: 25 },
    badges: { isNew: false },

    images: {
      main: new URL(
        "../../assets/images/products/tables/table-08/table-08-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/tables/table-08/table-08-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-08/table-08-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-08/table-08-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Luxury statement piece",

    longDescription: {
      introduction:
        "Montero is a premium dining table created for spacious interiors.",

      paragraphs: [
        "Natural walnut top with black metal legs.",
        "Designed for both everyday dining and special occasions.",
        "Exceptional stability and premium finish.",
      ],
    },

    sizes: ["200 cm", "220 cm", "240 cm"],

    tags: ["Table", "Luxury", "Walnut", "Metal"],

    reviews: [
      {
        id: "r1",
        author: "Thomas C.",
        rating: 5,
        date: "2026-05-01",
        comment: "A stunning centerpiece for our dining room.",
      },
      {
        id: "r2",
        author: "Laura N.",
        rating: 5,
        date: "2026-05-22",
        comment: "Outstanding finish and premium materials.",
      },
    ],

    properties: {
      salesPackage: "1 Table",
      modelNumber: "TBL-MON-01",
      primaryMaterial: "Walnut Wood",
      tableShape: "Rectangle",
      seatingCapacity: "10 People",

      dimensions: {
        width: "220 cm",
        height: "76 cm",
        depth: "100 cm",
        weight: "48 kg",
      },

      warrantySummary: "7 Year Warranty",
      stock: 2,
    },
  },

  {
    id: "p13",
    title: "Avento",
    category: "table",
    categorySlug: "tables",
    price: { original: 690, discountPercent: 20 },
    badges: { isNew: false },

    images: {
      main: new URL(
        "../../assets/images/products/tables/table-04/table-04-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/tables/table-04/table-04-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-04/table-04-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-04/table-04-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Luxury walnut dining",

    longDescription: {
      introduction: "Avento is designed for elegant contemporary homes.",
      paragraphs: [
        "Premium walnut finish.",
        "Seats up to eight people comfortably.",
        "Built for long-lasting performance.",
      ],
    },

    sizes: ["180 cm", "200 cm", "220 cm"],

    tags: ["Table", "Walnut", "Luxury", "Dining"],

    reviews: [
      {
        id: "r1",
        author: "James P.",
        rating: 5,
        date: "2026-03-20",
        comment: "Absolutely stunning centerpiece.",
      },
      {
        id: "r2",
        author: "Emily S.",
        rating: 5,
        date: "2026-04-11",
        comment: "Excellent craftsmanship.",
      },
    ],

    properties: {
      salesPackage: "1 Table",
      modelNumber: "TBL-AVE-01",
      primaryMaterial: "Walnut Wood",
      tableShape: "Rectangle",
      seatingCapacity: "8 People",

      dimensions: {
        width: "200 cm",
        height: "76 cm",
        depth: "95 cm",
        weight: "44 kg",
      },

      warrantySummary: "5 Year Warranty",
      stock: 3,
    },
  },
  {
    id: "p25",
    title: "Arvon",
    category: "sofa",
    categorySlug: "sofas",
    price: { original: 1090, discountPercent: 0 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/sofas/sofa-04/sofa-04-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/sofas/sofa-04/sofa-04-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-04/sofa-04-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-04/sofa-04-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Elegant corner sofa",

    longDescription: {
      introduction:
        "Arvon corner sofa offers spacious seating with timeless elegance.",

      paragraphs: [
        "High-density foam cushions provide outstanding comfort and support.",
        "Its durable hardwood frame is built for years of everyday use.",
        "Perfect for large living rooms and family gatherings.",
      ],
    },

    sizes: ["3 Seater", "4 Seater", "Corner"],

    tags: ["Sofa", "Corner", "Elegant", "Living Room"],

    reviews: [
      {
        id: "r1",
        author: "Sophia L.",
        rating: 5,
        date: "2026-01-17",
        comment: "Exactly what we wanted. Spacious and very comfortable.",
      },
      {
        id: "r2",
        author: "Michael P.",
        rating: 5,
        date: "2026-04-06",
        comment: "Excellent quality and premium materials.",
      },
      {
        id: "r3",
        author: "Emma C.",
        rating: 4,
        date: "2026-06-11",
        comment: "Looks fantastic and feels sturdy.",
      },
    ],

    properties: {
      salesPackage: "1 Sofa",
      modelNumber: "SFA-ARV-04",

      upholsteryMaterial: "Velvet Fabric",
      frameMaterial: "Solid Oak Wood",
      seatingCapacity: "5 People",
      seatHeight: "46 cm",

      dimensions: {
        width: "275 cm",
        height: "87 cm",
        depth: "98 cm",
        weight: "81 kg",
      },

      warrantySummary: "5 Year Warranty",
      stock: 4,
    },
  },

  {
    id: "p15",
    title: "Creston",
    category: "table",
    categorySlug: "tables",
    price: { original: 280, discountPercent: 5 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/tables/table-05/table-05-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/tables/table-05/table-05-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-05/table-05-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-05/table-05-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Compact everyday table",

    longDescription: {
      introduction: "Creston is ideal for kitchens and breakfast areas.",
      paragraphs: [
        "Compact footprint saves space.",
        "Easy to maintain surface.",
        "Perfect for daily meals.",
      ],
    },

    sizes: ["100 cm", "120 cm"],

    tags: ["Table", "Compact", "Kitchen", "Modern"],

    reviews: [
      {
        id: "r1",
        author: "Anna K.",
        rating: 4,
        date: "2026-02-28",
        comment: "Very practical and looks great.",
      },
    ],

    properties: {
      salesPackage: "1 Table",
      modelNumber: "TBL-CRE-01",
      primaryMaterial: "MDF",
      tableShape: "Round",
      seatingCapacity: "4 People",

      dimensions: {
        width: "120 cm",
        height: "74 cm",
        depth: "120 cm",
        weight: "20 kg",
      },

      warrantySummary: "2 Year Warranty",
      stock: 12,
    },
  },

  {
    id: "p11",
    title: "Valen",
    category: "table",
    categorySlug: "tables",
    price: { original: 420, discountPercent: 15 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/tables/table-09/table-09-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/tables/table-09/table-09-1-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-09/table-09-1-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/tables/table-09/table-09-1-4.png",
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
    featured: true,

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
    featured: true,

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
  {
    id: "p5",
    title: "Arden",
    category: "chair",
    categorySlug: "chairs",
    price: { original: 150, discountPercent: 5 },
    badges: { isNew: false },
    featured: true,

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
      stock: 0,
    },
  },
  {
    id: "p23",
    title: "Velerna",
    category: "sofa",
    categorySlug: "sofas",
    price: { original: 920, discountPercent: 15 },
    badges: { isNew: false },

    images: {
      main: new URL(
        "../../assets/images/products/sofas/sofa-03/sofa-03-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/sofas/sofa-03/sofa-03-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-03/sofa-03-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-03/sofa-03-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Modern sectional sofa",

    longDescription: {
      introduction: "Velora sofa blends elegant styling with everyday comfort.",

      paragraphs: [
        "Soft cushions provide excellent support for long hours of relaxation.",
        "A reinforced hardwood frame offers outstanding durability.",
        "Its minimalist design fits perfectly into contemporary interiors.",
      ],
    },

    sizes: ["2 Seater", "3 Seater", "Corner"],

    tags: ["Sofa", "Modern", "Living Room", "Sectional"],

    reviews: [
      {
        id: "r1",
        author: "Emily R.",
        rating: 5,
        date: "2026-03-12",
        comment: "Beautiful design and incredibly comfortable.",
      },
      {
        id: "r2",
        author: "Daniel K.",
        rating: 4,
        date: "2026-04-18",
        comment: "Very solid build quality and easy to maintain.",
      },
    ],

    properties: {
      salesPackage: "1 Sofa",
      modelNumber: "SFA-VEL-02",

      upholsteryMaterial: "Linen Fabric",
      frameMaterial: "Hardwood",
      seatingCapacity: "4 People",
      seatHeight: "45 cm",

      dimensions: {
        width: "245 cm",
        height: "86 cm",
        depth: "95 cm",
        weight: "72 kg",
      },

      warrantySummary: "5 Year Warranty",
      stock: 0,
    },
  },
  {
    id: "p24",
    title: "Dvornik",
    category: "sofa",
    categorySlug: "sofas",
    price: { original: 780, discountPercent: 10 },
    badges: { isNew: true },

    images: {
      main: new URL(
        "../../assets/images/products/sofas/sofa-05/sofa-05-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL(
          "../../assets/images/products/sofas/sofa-05/sofa-05-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-05/sofa-05-3.png",
          import.meta.url,
        ).href,
        new URL(
          "../../assets/images/products/sofas/sofa-05/sofa-05-4.png",
          import.meta.url,
        ).href,
      ],
    },

    shortDescription: "Scandinavian style sofa",

    longDescription: {
      introduction:
        "Norvik sofa brings Scandinavian simplicity with exceptional comfort.",

      paragraphs: [
        "Clean lines and soft cushions make it ideal for everyday living.",
        "Crafted with a sturdy wooden frame for long-lasting reliability.",
        "Neutral tones complement both modern and classic interiors.",
      ],
    },

    sizes: ["2 Seater", "3 Seater"],

    tags: ["Sofa", "Scandinavian", "Minimalist", "Living Room"],

    reviews: [
      {
        id: "r1",
        author: "Olivia M.",
        rating: 5,
        date: "2026-02-08",
        comment: "Perfect balance of comfort and style.",
      },
      {
        id: "r2",
        author: "James T.",
        rating: 4,
        date: "2026-05-21",
        comment: "Great quality for the price. Assembly was simple.",
      },
    ],

    properties: {
      salesPackage: "1 Sofa",
      modelNumber: "SFA-NOR-03",

      upholsteryMaterial: "Polyester Fabric",
      frameMaterial: "Engineered Wood",
      seatingCapacity: "3 People",
      seatHeight: "43 cm",

      dimensions: {
        width: "210 cm",
        height: "84 cm",
        depth: "88 cm",
        weight: "61 kg",
      },

      warrantySummary: "3 Year Warranty",
      stock: 8,
    },
  },
];
