export type Material = {
  name: string;
  percentage: number;
  isGood: boolean;
  reason: string;
  recyclable: boolean;
};

export type Product = {
  id: string;
  barcode: string;
  name: string;
  brandId: string;
  brandName: string;
  score: number;
  co2: number;
  water: number;
  materials: Material[];
  certifications: string[];
  recyclable: boolean;
  vegan: boolean;
};

export const products: Product[] = [
  // --- existing 9 products ---
  {
    id: "1", barcode: "5901234123457", name: "Organic Cotton T-Shirt", brandId: "16", brandName: "Patagonia",
    score: 9.1, co2: 2.1, water: 1200,
    materials: [
      { name: "Organic Cotton", percentage: 95, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic fiber, hard to recycle when blended", recyclable: false },
    ],
    certifications: ["GOTS", "Fair Trade"], recyclable: true, vegan: true,
  },
  {
    id: "2", barcode: "5901234123458", name: "Recycled Puffer Jacket", brandId: "17", brandName: "Armedangels",
    score: 8.4, co2: 5.8, water: 800,
    materials: [
      { name: "Recycled Polyester", percentage: 80, isGood: true, reason: "Made from post-consumer plastic bottles, reduces landfill waste", recyclable: true },
      { name: "Recycled Nylon", percentage: 20, isGood: true, reason: "Repurposed ocean waste, reduces virgin nylon demand", recyclable: true },
    ],
    certifications: ["GOTS", "B Corp", "Bluesign"], recyclable: true, vegan: true,
  },
  {
    id: "3", barcode: "5901234123459", name: "Slim Fit Jeans", brandId: "51", brandName: "Zara",
    score: 2.8, co2: 12.5, water: 3800,
    materials: [
      { name: "Conventional Cotton", percentage: 70, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 25, isGood: false, reason: "Petroleum-based, sheds microplastics, takes 200+ years to decompose", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Makes the garment nearly impossible to recycle", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "4", barcode: "5901234123460", name: "Linen Summer Dress", brandId: "1", brandName: "NAGO",
    score: 8.8, co2: 1.4, water: 400,
    materials: [
      { name: "Organic Linen", percentage: 100, isGood: true, reason: "Requires minimal water, no irrigation needed, fully biodegradable", recyclable: true },
    ],
    certifications: ["GOTS"], recyclable: true, vegan: true,
  },
  {
    id: "5", barcode: "5901234123461", name: "Graphic Print Hoodie", brandId: "76", brandName: "SHEIN",
    score: 0.9, co2: 15.2, water: 4500,
    materials: [
      { name: "Polyester", percentage: 60, isGood: false, reason: "Petroleum-based, sheds microplastics, non-biodegradable", recyclable: false },
      { name: "Acrylic", percentage: 30, isGood: false, reason: "Made from fossil fuels, releases toxic chemicals during production", recyclable: false },
      { name: "Elastane", percentage: 10, isGood: false, reason: "Synthetic, prevents garment from being recyclable", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "6", barcode: "5901234123462", name: "Merino Wool Sweater", brandId: "75", brandName: "Icebreaker",
    score: 7.9, co2: 3.8, water: 1500,
    materials: [
      { name: "Merino Wool", percentage: 87, isGood: true, reason: "Renewable, biodegradable, naturally temperature-regulating", recyclable: true },
      { name: "Nylon", percentage: 13, isGood: false, reason: "Synthetic reinforcement, not biodegradable", recyclable: false },
    ],
    certifications: ["B Corp"], recyclable: false, vegan: false,
  },
  {
    id: "7", barcode: "5901234123463", name: "Hemp Cargo Pants", brandId: "20", brandName: "Thought",
    score: 8.5, co2: 1.8, water: 500,
    materials: [
      { name: "Organic Hemp", percentage: 55, isGood: true, reason: "Zero pesticides, minimal water, enriches soil as it grows", recyclable: true },
      { name: "Organic Cotton", percentage: 45, isGood: true, reason: "No synthetic chemicals, biodegradable, better for farm workers", recyclable: true },
    ],
    certifications: ["GOTS", "OEKO-TEX"], recyclable: true, vegan: true,
  },
  {
    id: "8", barcode: "5901234123464", name: "Fast Dry Running Shirt", brandId: "46", brandName: "Nike",
    score: 4.1, co2: 8.3, water: 2200,
    materials: [
      { name: "Recycled Polyester", percentage: 50, isGood: true, reason: "Diverts plastic from landfills, lower carbon than virgin polyester", recyclable: true },
      { name: "Virgin Polyester", percentage: 45, isGood: false, reason: "Petroleum-derived, energy-intensive to produce", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Prevents full recyclability of the garment", recyclable: false },
    ],
    certifications: ["Bluesign"], recyclable: false, vegan: true,
  },
  {
    id: "9", barcode: "5901234123465", name: "Streetwear Hoodie", brandId: "15", brandName: "Cropp",
    score: 2.8, co2: 11.2, water: 3200,
    materials: [
      { name: "Polyester", percentage: 60, isGood: false, reason: "Petroleum-based, sheds microplastics with every wash", recyclable: false },
      { name: "Conventional Cotton", percentage: 35, isGood: false, reason: "Heavy pesticide and water use, no organic certification", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Prevents recyclability of the blended fabric", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },

  // --- one product per remaining brand ---
  {
    id: "10", barcode: "5901234123466", name: "Organic Cotton Midi Blouse", brandId: "2", brandName: "Elementy Wear",
    score: 8.8, co2: 1.9, water: 900,
    materials: [
      { name: "Organic Cotton", percentage: 95, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic fiber, hard to recycle when blended", recyclable: false },
    ],
    certifications: ["GOTS"], recyclable: false, vegan: true,
  },
  {
    id: "11", barcode: "5901234123467", name: "Upcycled Vintage Denim Jacket", brandId: "3", brandName: "Pan Tu Nie Stał",
    score: 8.2, co2: 1.2, water: 300,
    materials: [
      { name: "Recycled Cotton", percentage: 90, isGood: true, reason: "Diverts textile waste from landfill, saves water vs virgin cotton", recyclable: true },
      { name: "Recycled Polyester", percentage: 10, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "12", barcode: "5901234123468", name: "Zero-Waste Linen Trousers", brandId: "4", brandName: "Risks Made in Warsaw",
    score: 7.9, co2: 1.5, water: 350,
    materials: [
      { name: "Organic Linen", percentage: 100, isGood: true, reason: "Requires minimal water, no pesticides needed, fully biodegradable", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "13", barcode: "5901234123469", name: "Recycled Polyester Windbreaker", brandId: "5", brandName: "Vistula Green Line",
    score: 7.1, co2: 3.2, water: 600,
    materials: [
      { name: "Recycled Polyester", percentage: 80, isGood: true, reason: "Made from post-consumer plastic bottles, reduces landfill waste", recyclable: true },
      { name: "Nylon", percentage: 20, isGood: false, reason: "Synthetic, high carbon footprint, not biodegradable", recyclable: false },
    ],
    certifications: ["OEKO-TEX"], recyclable: false, vegan: true,
  },
  {
    id: "14", barcode: "5901234123470", name: "Organic Linen Summer Shirt", brandId: "6", brandName: "m a g concept",
    score: 8.7, co2: 1.3, water: 380,
    materials: [
      { name: "Organic Linen", percentage: 100, isGood: true, reason: "Requires minimal water, no pesticides needed, fully biodegradable", recyclable: true },
    ],
    certifications: ["GOTS"], recyclable: true, vegan: true,
  },
  {
    id: "15", barcode: "5901234123471", name: "Handmade Linen Wrap Dress", brandId: "7", brandName: "Pavietra",
    score: 8.3, co2: 1.6, water: 420,
    materials: [
      { name: "Organic Linen", percentage: 90, isGood: true, reason: "Requires minimal water, no pesticides needed, fully biodegradable", recyclable: true },
      { name: "Organic Cotton", percentage: 10, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
    ],
    certifications: ["OEKO-TEX"], recyclable: true, vegan: true,
  },
  {
    id: "16", barcode: "5901234123472", name: "Natural Dye Organic Tee", brandId: "8", brandName: "Bunt of Kolor",
    score: 7.6, co2: 2.2, water: 950,
    materials: [
      { name: "Organic Cotton", percentage: 95, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic fiber, hard to recycle when blended", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "17", barcode: "5901234123473", name: "Natural Fabric Wrap Skirt", brandId: "9", brandName: "MODAPOLKA",
    score: 7.4, co2: 2.5, water: 800,
    materials: [
      { name: "TENCEL Lyocell", percentage: 70, isGood: true, reason: "Closed-loop production process, biodegradable, low water footprint", recyclable: true },
      { name: "Organic Cotton", percentage: 30, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "18", barcode: "5901234123474", name: "Organic Linen Button Shirt", brandId: "10", brandName: "Linen Pro",
    score: 7.2, co2: 1.4, water: 350,
    materials: [
      { name: "Organic Linen", percentage: 100, isGood: true, reason: "Requires minimal water, no pesticides needed, fully biodegradable", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "19", barcode: "5901234123475", name: "Handcrafted Wool Cardigan", brandId: "11", brandName: "Skydance",
    score: 7.0, co2: 3.0, water: 1200,
    materials: [
      { name: "Merino Wool", percentage: 80, isGood: true, reason: "Renewable, biodegradable, naturally temperature-regulating", recyclable: true },
      { name: "Organic Cotton", percentage: 20, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
    ],
    certifications: [], recyclable: false, vegan: false,
  },
  {
    id: "20", barcode: "5901234123476", name: "Minimalist TENCEL Blouse", brandId: "12", brandName: "La Dame The Label",
    score: 6.8, co2: 2.8, water: 700,
    materials: [
      { name: "TENCEL Lyocell", percentage: 70, isGood: true, reason: "Closed-loop production process, biodegradable, low water footprint", recyclable: true },
      { name: "Organic Cotton", percentage: 30, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "21", barcode: "5901234123477", name: "GOTS Merino Knit Top", brandId: "13", brandName: "Mila.Vert",
    score: 9.0, co2: 2.0, water: 1000,
    materials: [
      { name: "Organic Merino Wool", percentage: 85, isGood: true, reason: "Renewable, biodegradable, GOTS certified supply chain", recyclable: true },
      { name: "Organic Cotton", percentage: 15, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
    ],
    certifications: ["GOTS"], recyclable: false, vegan: false,
  },
  {
    id: "22", barcode: "5901234123478", name: "Recycled Blend Casual Dress", brandId: "14", brandName: "Reserved (Eco Aware)",
    score: 4.5, co2: 6.5, water: 2200,
    materials: [
      { name: "Recycled Polyester", percentage: 40, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
      { name: "Conventional Cotton", percentage: 55, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability of blended fabric", recyclable: false },
    ],
    certifications: ["OEKO-TEX"], recyclable: false, vegan: true,
  },
  {
    id: "23", barcode: "5901234123479", name: "Vegan Alter Mat Sneaker Tee", brandId: "18", brandName: "Stella McCartney",
    score: 8.5, co2: 2.5, water: 900,
    materials: [
      { name: "Organic Cotton", percentage: 80, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
      { name: "Recycled Polyester", percentage: 20, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
    ],
    certifications: ["B Corp"], recyclable: true, vegan: true,
  },
  {
    id: "24", barcode: "5901234123480", name: "Organic Cotton Canvas Tote", brandId: "19", brandName: "Veja",
    score: 8.8, co2: 1.1, water: 600,
    materials: [
      { name: "Organic Cotton", percentage: 100, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
    ],
    certifications: ["B Corp"], recyclable: true, vegan: true,
  },
  {
    id: "25", barcode: "5901234123481", name: "Fair Trade Organic Tee", brandId: "21", brandName: "Etiko",
    score: 9.3, co2: 1.8, water: 800,
    materials: [
      { name: "Organic Cotton", percentage: 100, isGood: true, reason: "Grown without pesticides, Fair Trade certified, biodegradable", recyclable: true },
    ],
    certifications: ["Fair Trade", "GOTS"], recyclable: true, vegan: true,
  },
  {
    id: "26", barcode: "5901234123482", name: "Lease-A-Jeans Recycled Denim", brandId: "22", brandName: "MUD Jeans",
    score: 9.2, co2: 2.8, water: 900,
    materials: [
      { name: "Recycled Cotton", percentage: 55, isGood: true, reason: "Diverts textile waste from landfill, saves water vs virgin cotton", recyclable: true },
      { name: "Organic Cotton", percentage: 40, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents full recyclability", recyclable: false },
    ],
    certifications: ["B Corp", "GOTS"], recyclable: false, vegan: true,
  },
  {
    id: "27", barcode: "5901234123483", name: "Fair Trade Organic Kurta Top", brandId: "23", brandName: "No Nasties",
    score: 9.1, co2: 1.7, water: 750,
    materials: [
      { name: "Organic Cotton", percentage: 100, isGood: true, reason: "Grown without pesticides, Fair Trade certified, biodegradable", recyclable: true },
    ],
    certifications: ["Fair Trade", "GOTS"], recyclable: true, vegan: true,
  },
  {
    id: "28", barcode: "5901234123484", name: "Made-to-Order Merino Tee", brandId: "24", brandName: "Citizen Wolf",
    score: 8.9, co2: 2.3, water: 1100,
    materials: [
      { name: "Merino Wool", percentage: 100, isGood: true, reason: "Renewable, biodegradable, naturally temperature-regulating", recyclable: true },
    ],
    certifications: ["B Corp"], recyclable: false, vegan: false,
  },
  {
    id: "29", barcode: "5901234123485", name: "Fair Trade Floral Wrap Dress", brandId: "25", brandName: "People Tree",
    score: 9.0, co2: 2.0, water: 880,
    materials: [
      { name: "Organic Cotton", percentage: 95, isGood: true, reason: "Grown without pesticides, Fair Trade certified, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, hard to recycle when blended", recyclable: false },
    ],
    certifications: ["Fair Trade", "GOTS"], recyclable: false, vegan: true,
  },
  {
    id: "30", barcode: "5901234123486", name: "Organic Slim Fit Jeans", brandId: "26", brandName: "Nudie Jeans",
    score: 8.7, co2: 3.5, water: 1400,
    materials: [
      { name: "Organic Cotton", percentage: 98, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 2, isGood: false, reason: "Synthetic, reduces recyclability", recyclable: false },
    ],
    certifications: ["GOTS", "Fair Trade"], recyclable: false, vegan: true,
  },
  {
    id: "31", barcode: "5901234123487", name: "Sustainable Fabric Slip Dress", brandId: "27", brandName: "Reformation",
    score: 7.2, co2: 3.8, water: 1200,
    materials: [
      { name: "TENCEL Lyocell", percentage: 60, isGood: true, reason: "Closed-loop production, biodegradable, low water footprint", recyclable: true },
      { name: "Recycled Polyester", percentage: 35, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents full recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "32", barcode: "5901234123488", name: "Organic Linen Wide-Leg Trousers", brandId: "28", brandName: "Eileen Fisher",
    score: 8.6, co2: 1.7, water: 450,
    materials: [
      { name: "Organic Linen", percentage: 100, isGood: true, reason: "Requires minimal water, no pesticides, fully biodegradable", recyclable: true },
    ],
    certifications: ["B Corp"], recyclable: true, vegan: true,
  },
  {
    id: "33", barcode: "5901234123489", name: "Organic Cotton Classic Hoodie", brandId: "29", brandName: "tentree",
    score: 8.3, co2: 3.1, water: 1300,
    materials: [
      { name: "Organic Cotton", percentage: 80, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Recycled Polyester", percentage: 20, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
    ],
    certifications: ["B Corp"], recyclable: true, vegan: true,
  },
  {
    id: "34", barcode: "5901234123490", name: "Egyptian Cotton Crew Tee", brandId: "30", brandName: "Kotn",
    score: 8.1, co2: 2.2, water: 1000,
    materials: [
      { name: "Egyptian Cotton", percentage: 100, isGood: true, reason: "Long-staple fibers, Fair Trade sourced, durable and biodegradable", recyclable: true },
    ],
    certifications: ["B Corp"], recyclable: true, vegan: true,
  },
  {
    id: "35", barcode: "5901234123491", name: "ZQ Merino Everyday Tee", brandId: "31", brandName: "Allbirds",
    score: 7.8, co2: 2.7, water: 950,
    materials: [
      { name: "ZQ Merino Wool", percentage: 75, isGood: true, reason: "Responsibly sourced, biodegradable, temperature-regulating", recyclable: true },
      { name: "Eucalyptus Fiber", percentage: 25, isGood: true, reason: "FSC-certified trees, closed-loop production, biodegradable", recyclable: true },
    ],
    certifications: ["B Corp"], recyclable: false, vegan: false,
  },
  {
    id: "36", barcode: "5901234123492", name: "Fair Trade Organic Joggers", brandId: "32", brandName: "PACT",
    score: 8.6, co2: 2.1, water: 950,
    materials: [
      { name: "Organic Cotton", percentage: 95, isGood: true, reason: "Grown without pesticides, Fair Trade certified, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, hard to recycle when blended", recyclable: false },
    ],
    certifications: ["Fair Trade", "GOTS"], recyclable: false, vegan: true,
  },
  {
    id: "37", barcode: "5901234123493", name: "GOTS Organic Cotton T-Shirt", brandId: "33", brandName: "Organic Basics",
    score: 8.4, co2: 1.9, water: 850,
    materials: [
      { name: "Organic Cotton", percentage: 95, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
      { name: "Recycled Polyester", percentage: 5, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
    ],
    certifications: ["GOTS", "OEKO-TEX"], recyclable: true, vegan: true,
  },
  {
    id: "38", barcode: "5901234123494", name: "PPRMINT Organic Hoodie", brandId: "34", brandName: "Pangaia",
    score: 7.5, co2: 3.0, water: 1400,
    materials: [
      { name: "Organic Cotton", percentage: 85, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Recycled Cotton", percentage: 10, isGood: true, reason: "Diverts textile waste from landfill", recyclable: true },
      { name: "Recycled Polyester", percentage: 5, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "39", barcode: "5901234123495", name: "Wind-Powered GOTS Tee", brandId: "35", brandName: "Rapanui",
    score: 9.0, co2: 1.5, water: 700,
    materials: [
      { name: "Organic Cotton", percentage: 100, isGood: true, reason: "Grown without pesticides, produced with 100% renewable energy", recyclable: true },
    ],
    certifications: ["GOTS", "B Corp"], recyclable: true, vegan: true,
  },
  {
    id: "40", barcode: "5901234123496", name: "Recycled Ocean Plastic Shell Jacket", brandId: "36", brandName: "Ecoalf",
    score: 8.4, co2: 3.8, water: 500,
    materials: [
      { name: "Recycled Polyester", percentage: 85, isGood: true, reason: "Made from ocean-collected plastic bottles, reduces marine pollution", recyclable: true },
      { name: "Recycled Nylon", percentage: 15, isGood: true, reason: "Repurposed ocean waste fishing nets", recyclable: true },
    ],
    certifications: ["B Corp", "Bluesign"], recyclable: true, vegan: true,
  },
  {
    id: "41", barcode: "5901234123497", name: "Organic Denim Worker Shirt", brandId: "37", brandName: "Kings of Indigo",
    score: 8.3, co2: 3.2, water: 1300,
    materials: [
      { name: "Organic Cotton", percentage: 100, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
    ],
    certifications: ["GOTS", "Fair Trade"], recyclable: true, vegan: true,
  },
  {
    id: "42", barcode: "5901234123498", name: "GOTS Organic Chino Trousers", brandId: "38", brandName: "Knowledge Cotton Apparel",
    score: 8.8, co2: 2.4, water: 1100,
    materials: [
      { name: "Organic Cotton", percentage: 98, isGood: true, reason: "Grown without pesticides, GOTS and B Corp certified", recyclable: true },
      { name: "Elastane", percentage: 2, isGood: false, reason: "Synthetic, reduces recyclability", recyclable: false },
    ],
    certifications: ["GOTS", "OEKO-TEX", "B Corp"], recyclable: false, vegan: true,
  },
  {
    id: "43", barcode: "5901234123499", name: "Fair Trade Organic Print Tee", brandId: "39", brandName: "Dedicated",
    score: 8.5, co2: 1.8, water: 800,
    materials: [
      { name: "Organic Cotton", percentage: 100, isGood: true, reason: "Grown without pesticides, Fair Trade certified, biodegradable", recyclable: true },
    ],
    certifications: ["GOTS", "Fair Trade"], recyclable: true, vegan: true,
  },
  {
    id: "44", barcode: "5901234123500", name: "GOTS Organic Jersey Wrap Dress", brandId: "40", brandName: "Lanius",
    score: 8.2, co2: 2.0, water: 900,
    materials: [
      { name: "Organic Cotton", percentage: 95, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, hard to recycle when blended", recyclable: false },
    ],
    certifications: ["GOTS"], recyclable: false, vegan: true,
  },
  {
    id: "45", barcode: "5901234123501", name: "Organic Cotton Relaxed Jumpsuit", brandId: "41", brandName: "Jan 'n June",
    score: 8.0, co2: 2.1, water: 950,
    materials: [
      { name: "Organic Cotton", percentage: 100, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
    ],
    certifications: ["GOTS"], recyclable: true, vegan: true,
  },
  {
    id: "46", barcode: "5901234123502", name: "Hemp Cotton Graphic Tee", brandId: "42", brandName: "Thinking Mu",
    score: 8.1, co2: 1.6, water: 550,
    materials: [
      { name: "Organic Hemp", percentage: 55, isGood: true, reason: "Zero pesticides, minimal water, enriches soil as it grows", recyclable: true },
      { name: "Organic Cotton", percentage: 45, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
    ],
    certifications: ["GOTS"], recyclable: true, vegan: true,
  },
  {
    id: "47", barcode: "5901234123503", name: "GOTS Organic Cotton Crewneck", brandId: "43", brandName: "Colorful Standard",
    score: 8.3, co2: 2.0, water: 900,
    materials: [
      { name: "Organic Cotton", percentage: 100, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
    ],
    certifications: ["GOTS", "OEKO-TEX"], recyclable: true, vegan: true,
  },
  {
    id: "48", barcode: "5901234123504", name: "Recycled Canvas Tote Bag", brandId: "44", brandName: "Sandqvist",
    score: 7.7, co2: 2.5, water: 700,
    materials: [
      { name: "Organic Cotton Canvas", percentage: 70, isGood: true, reason: "Grown without pesticides, durable and biodegradable", recyclable: true },
      { name: "Recycled Polyester", percentage: 30, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
    ],
    certifications: ["Bluesign"], recyclable: true, vegan: true,
  },
  {
    id: "49", barcode: "5901234123505", name: "Recycled Wool Pullover", brandId: "45", brandName: "Fjällräven",
    score: 7.6, co2: 3.5, water: 1200,
    materials: [
      { name: "Recycled Wool", percentage: 65, isGood: true, reason: "Diverts wool waste, biodegradable, temperature-regulating", recyclable: true },
      { name: "Recycled Polyester", percentage: 35, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
    ],
    certifications: ["Bluesign", "OEKO-TEX"], recyclable: true, vegan: false,
  },
  {
    id: "50", barcode: "5901234123506", name: "Parley Ocean Plastic Running Tee", brandId: "47", brandName: "Adidas",
    score: 4.8, co2: 6.2, water: 1800,
    materials: [
      { name: "Recycled Polyester", percentage: 50, isGood: true, reason: "Made from ocean plastic waste via Parley partnership", recyclable: true },
      { name: "Virgin Polyester", percentage: 45, isGood: false, reason: "Petroleum-derived, energy-intensive to produce", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents full recyclability", recyclable: false },
    ],
    certifications: ["Bluesign"], recyclable: false, vegan: true,
  },
  {
    id: "51", barcode: "5901234123507", name: "Sustainable Cotton Training Tee", brandId: "48", brandName: "Puma",
    score: 4.6, co2: 6.8, water: 2100,
    materials: [
      { name: "Conventional Cotton", percentage: 60, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 35, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability of blended fabric", recyclable: false },
    ],
    certifications: ["Bluesign"], recyclable: false, vegan: true,
  },
  {
    id: "52", barcode: "5901234123508", name: "Water<Less 501 Original Jeans", brandId: "49", brandName: "Levi's",
    score: 5.5, co2: 9.5, water: 2800,
    materials: [
      { name: "Conventional Cotton", percentage: 70, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Organic Cotton", percentage: 25, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Prevents full recyclability of the garment", recyclable: false },
    ],
    certifications: ["B Corp"], recyclable: false, vegan: true,
  },
  {
    id: "53", barcode: "5901234123509", name: "Conscious Collection Cotton Dress", brandId: "50", brandName: "H&M",
    score: 3.5, co2: 8.5, water: 2500,
    materials: [
      { name: "Conventional Cotton", percentage: 60, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 35, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability of blended fabric", recyclable: false },
    ],
    certifications: ["OEKO-TEX"], recyclable: false, vegan: true,
  },
  {
    id: "54", barcode: "5901234123510", name: "RE.UNIQLO Recycled Fleece Jacket", brandId: "52", brandName: "Uniqlo",
    score: 3.8, co2: 7.5, water: 1500,
    materials: [
      { name: "Recycled Polyester", percentage: 50, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
      { name: "Virgin Polyester", percentage: 50, isGood: false, reason: "Petroleum-derived, energy-intensive to produce", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "55", barcode: "5901234123511", name: "Classic Crewneck Sweatshirt", brandId: "53", brandName: "GAP",
    score: 3.2, co2: 9.0, water: 2600,
    materials: [
      { name: "Conventional Cotton", percentage: 60, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 38, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Elastane", percentage: 2, isGood: false, reason: "Synthetic, reduces recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "56", barcode: "5901234123512", name: "Committed Linen-Blend Shirt", brandId: "54", brandName: "Mango",
    score: 3.6, co2: 7.2, water: 2100,
    materials: [
      { name: "Linen", percentage: 55, isGood: true, reason: "Requires less water than cotton, biodegradable", recyclable: true },
      { name: "Conventional Cotton", percentage: 42, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Elastane", percentage: 3, isGood: false, reason: "Synthetic, reduces recyclability", recyclable: false },
    ],
    certifications: ["OEKO-TEX"], recyclable: false, vegan: true,
  },
  {
    id: "57", barcode: "5901234123513", name: "GOTS Organic Cotton T-Shirt", brandId: "55", brandName: "C&A",
    score: 5.2, co2: 5.5, water: 1600,
    materials: [
      { name: "Organic Cotton", percentage: 100, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
    ],
    certifications: ["GOTS", "OEKO-TEX"], recyclable: true, vegan: true,
  },
  {
    id: "58", barcode: "5901234123514", name: "Cotton Blend Midi Skirt", brandId: "56", brandName: "& Other Stories",
    score: 4.0, co2: 7.0, water: 2200,
    materials: [
      { name: "Conventional Cotton", percentage: 55, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 40, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "59", barcode: "5901234123515", name: "Relaxed Organic Cotton Trousers", brandId: "57", brandName: "COS",
    score: 4.4, co2: 6.5, water: 2100,
    materials: [
      { name: "Organic Cotton", percentage: 60, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Conventional Cotton", percentage: 35, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents full recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "60", barcode: "5901234123516", name: "The Organic Cotton Crew Tee", brandId: "58", brandName: "Everlane",
    score: 5.5, co2: 4.5, water: 1400,
    materials: [
      { name: "Organic Cotton", percentage: 90, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Recycled Cotton", percentage: 10, isGood: true, reason: "Diverts textile waste from landfill", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "61", barcode: "5901234123517", name: "Organic Cotton Flannel Check Shirt", brandId: "59", brandName: "Muji",
    score: 5.0, co2: 5.8, water: 1900,
    materials: [
      { name: "Organic Cotton", percentage: 60, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Conventional Cotton", percentage: 40, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
    ],
    certifications: ["OEKO-TEX"], recyclable: true, vegan: true,
  },
  {
    id: "62", barcode: "5901234123518", name: "Renewed Fleece Pullover", brandId: "60", brandName: "The North Face",
    score: 4.8, co2: 7.2, water: 1600,
    materials: [
      { name: "Recycled Polyester", percentage: 50, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
      { name: "Virgin Polyester", percentage: 45, isGood: false, reason: "Petroleum-derived, energy-intensive to produce", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents full recyclability", recyclable: false },
    ],
    certifications: ["Bluesign"], recyclable: false, vegan: true,
  },
  {
    id: "63", barcode: "5901234123519", name: "Off The Grid GG Recycled Tee", brandId: "61", brandName: "Gucci",
    score: 5.0, co2: 8.5, water: 2000,
    materials: [
      { name: "Recycled Nylon", percentage: 45, isGood: true, reason: "Repurposed ocean waste, reduces virgin nylon demand", recyclable: true },
      { name: "Conventional Cotton", percentage: 50, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "64", barcode: "5901234123520", name: "ReBurberry Check Cotton Shirt", brandId: "62", brandName: "Burberry",
    score: 4.6, co2: 9.2, water: 2400,
    materials: [
      { name: "Conventional Cotton", percentage: 70, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 25, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "65", barcode: "5901234123521", name: "Re-Nylon Puffer Jacket", brandId: "63", brandName: "Prada",
    score: 4.2, co2: 10.5, water: 2200,
    materials: [
      { name: "Recycled Nylon", percentage: 55, isGood: true, reason: "Repurposed ocean waste nylon, reduces virgin nylon demand", recyclable: true },
      { name: "Virgin Nylon", percentage: 40, isGood: false, reason: "Synthetic, high carbon footprint, not biodegradable", recyclable: false },
      { name: "Polyester fill", percentage: 5, isGood: false, reason: "Petroleum-derived filling, not biodegradable", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "66", barcode: "5901234123522", name: "Monogram Cotton Tee", brandId: "64", brandName: "Louis Vuitton",
    score: 4.0, co2: 10.2, water: 2500,
    materials: [
      { name: "Conventional Cotton", percentage: 75, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 22, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Elastane", percentage: 3, isGood: false, reason: "Synthetic, reduces recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "67", barcode: "5901234123523", name: "Artisan Pure Wool Scarf", brandId: "65", brandName: "Hermès",
    score: 4.5, co2: 4.8, water: 1800,
    materials: [
      { name: "Merino Wool", percentage: 100, isGood: true, reason: "Renewable, biodegradable — but no certified sourcing standards", recyclable: true },
    ],
    certifications: [], recyclable: false, vegan: false,
  },
  {
    id: "68", barcode: "5901234123524", name: "Oversized Logo Hoodie", brandId: "66", brandName: "Balenciaga",
    score: 3.5, co2: 11.5, water: 2800,
    materials: [
      { name: "Polyester", percentage: 65, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Conventional Cotton", percentage: 30, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "69", barcode: "5901234123525", name: "Baroque Print Cotton Tee", brandId: "67", brandName: "Versace",
    score: 3.3, co2: 10.8, water: 2700,
    materials: [
      { name: "Conventional Cotton", percentage: 90, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 10, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "70", barcode: "5901234123526", name: "Upcycled Archive Print Tee", brandId: "68", brandName: "Vivienne Westwood",
    score: 5.8, co2: 3.5, water: 800,
    materials: [
      { name: "Recycled Cotton", percentage: 70, isGood: true, reason: "Diverts textile waste from landfill, saves water vs virgin cotton", recyclable: true },
      { name: "Organic Cotton", percentage: 25, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Recycled Polyester", percentage: 5, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "71", barcode: "5901234123527", name: "Like New Align Yoga Leggings", brandId: "69", brandName: "Lululemon",
    score: 4.7, co2: 6.5, water: 1800,
    materials: [
      { name: "Nylon", percentage: 81, isGood: false, reason: "Synthetic, high carbon footprint, not biodegradable", recyclable: false },
      { name: "Lycra Elastane", percentage: 19, isGood: false, reason: "Synthetic, prevents recyclability of blended fabric", recyclable: false },
    ],
    certifications: ["Bluesign"], recyclable: false, vegan: true,
  },
  {
    id: "72", barcode: "5901234123528", name: "Cyclon Bio-Based Performance Tee", brandId: "70", brandName: "On Running",
    score: 5.2, co2: 5.8, water: 1500,
    materials: [
      { name: "Recycled Polyester", percentage: 50, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
      { name: "Bio-based Nylon", percentage: 45, isGood: true, reason: "Derived from renewable castor beans, lower carbon than virgin nylon", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents full recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "73", barcode: "5901234123529", name: "Circular Power Houdi Fleece", brandId: "71", brandName: "Houdini",
    score: 8.9, co2: 2.8, water: 500,
    materials: [
      { name: "Recycled Polyester", percentage: 100, isGood: true, reason: "Made from post-consumer plastic bottles, produced with renewable energy", recyclable: true },
    ],
    certifications: ["Bluesign", "B Corp"], recyclable: true, vegan: true,
  },
  {
    id: "74", barcode: "5901234123530", name: "Recycled Base Layer Ski Jacket", brandId: "72", brandName: "Picture Organic",
    score: 8.6, co2: 4.2, water: 600,
    materials: [
      { name: "Recycled Polyester", percentage: 85, isGood: true, reason: "Made from post-consumer plastic bottles, reduces landfill waste", recyclable: true },
      { name: "Recycled Nylon", percentage: 10, isGood: true, reason: "Repurposed ocean waste, reduces virgin nylon demand", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents full recyclability", recyclable: false },
    ],
    certifications: ["B Corp", "Bluesign"], recyclable: false, vegan: true,
  },
  {
    id: "75", barcode: "5901234123531", name: "Remnant Fabric Del Día Hoodie", brandId: "73", brandName: "Cotopaxi",
    score: 8.4, co2: 3.2, water: 700,
    materials: [
      { name: "Recycled Polyester", percentage: 60, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
      { name: "Recycled Nylon", percentage: 25, isGood: true, reason: "Repurposed remnant fabric waste", recyclable: true },
      { name: "Organic Cotton", percentage: 15, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
    ],
    certifications: ["B Corp"], recyclable: true, vegan: true,
  },
  {
    id: "76", barcode: "5901234123532", name: "Hemp Organic Cotton Travel Pants", brandId: "74", brandName: "prAna",
    score: 8.2, co2: 1.7, water: 550,
    materials: [
      { name: "Organic Hemp", percentage: 55, isGood: true, reason: "Zero pesticides, minimal water, enriches soil as it grows", recyclable: true },
      { name: "Organic Cotton", percentage: 42, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 3, isGood: false, reason: "Synthetic, reduces recyclability", recyclable: false },
    ],
    certifications: ["Fair Trade", "Bluesign"], recyclable: false, vegan: true,
  },
  {
    id: "77", barcode: "5901234123533", name: "Cotton Blend Printed Tee", brandId: "77", brandName: "Primark",
    score: 2.5, co2: 10.5, water: 3000,
    materials: [
      { name: "Conventional Cotton", percentage: 60, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 38, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Elastane", percentage: 2, isGood: false, reason: "Synthetic, reduces recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "78", barcode: "5901234123534", name: "Sequin Polyester Party Top", brandId: "78", brandName: "Forever 21",
    score: 1.2, co2: 13.5, water: 3800,
    materials: [
      { name: "Polyester", percentage: 80, isGood: false, reason: "Petroleum-based, sheds microplastics, takes 200+ years to decompose", recyclable: false },
      { name: "Nylon", percentage: 15, isGood: false, reason: "Synthetic, high carbon footprint, not biodegradable", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "79", barcode: "5901234123535", name: "Stretch Bodycon Mini Dress", brandId: "79", brandName: "Fashion Nova",
    score: 1.0, co2: 14.8, water: 4200,
    materials: [
      { name: "Polyester", percentage: 92, isGood: false, reason: "Petroleum-based, sheds microplastics, takes 200+ years to decompose", recyclable: false },
      { name: "Elastane", percentage: 8, isGood: false, reason: "Synthetic, prevents recyclability of blended fabric", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "80", barcode: "5901234123536", name: "Synthetic Blend Mini Dress", brandId: "80", brandName: "Boohoo",
    score: 1.4, co2: 12.8, water: 3500,
    materials: [
      { name: "Polyester", percentage: 70, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Viscose", percentage: 25, isGood: false, reason: "Chemical-intensive processing, often from unsustainable forest sources", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "81", barcode: "5901234123537", name: "Neon Polyester Crop Top", brandId: "81", brandName: "Pretty Little Thing",
    score: 1.2, co2: 13.0, water: 3600,
    materials: [
      { name: "Polyester", percentage: 95, isGood: false, reason: "Petroleum-based, sheds microplastics, takes 200+ years to decompose", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "82", barcode: "5901234123538", name: "Printed Satin-Touch Party Dress", brandId: "82", brandName: "Missguided",
    score: 1.1, co2: 13.8, water: 3900,
    materials: [
      { name: "Polyester", percentage: 96, isGood: false, reason: "Petroleum-based, sheds microplastics, takes 200+ years to decompose", recyclable: false },
      { name: "Elastane", percentage: 4, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "83", barcode: "5901234123539", name: "Ultra-Cheap Floral Print Blouse", brandId: "83", brandName: "Romwe",
    score: 0.7, co2: 15.5, water: 4500,
    materials: [
      { name: "Polyester", percentage: 90, isGood: false, reason: "Petroleum-based, sheds microplastics, takes 200+ years to decompose", recyclable: false },
      { name: "Conventional Cotton", percentage: 8, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Elastane", percentage: 2, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "84", barcode: "5901234123540", name: "Mixed Synthetic T-Shirt", brandId: "84", brandName: "Temu (fashion)",
    score: 0.6, co2: 16.8, water: 4800,
    materials: [
      { name: "Polyester", percentage: 85, isGood: false, reason: "Petroleum-based, sheds microplastics, takes 200+ years to decompose", recyclable: false },
      { name: "Acrylic", percentage: 10, isGood: false, reason: "Made from fossil fuels, releases toxic chemicals during production", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "85", barcode: "5901234123541", name: "Basic Cotton-Poly Crewneck", brandId: "85", brandName: "New Yorker",
    score: 2.0, co2: 11.5, water: 3200,
    materials: [
      { name: "Conventional Cotton", percentage: 55, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 42, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Elastane", percentage: 3, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "86", barcode: "5901234123542", name: "Printed Cotton-Poly Graphic Tee", brandId: "86", brandName: "Bershka",
    score: 2.6, co2: 10.2, water: 2900,
    materials: [
      { name: "Conventional Cotton", percentage: 65, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 32, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Elastane", percentage: 3, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "87", barcode: "5901234123543", name: "Relaxed Washed Denim Jeans", brandId: "87", brandName: "Pull & Bear",
    score: 2.7, co2: 10.8, water: 3200,
    materials: [
      { name: "Conventional Cotton", percentage: 70, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Polyester", percentage: 25, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "88", barcode: "5901234123544", name: "Floral Print Polyester Midi Dress", brandId: "88", brandName: "Stradivarius",
    score: 2.5, co2: 11.0, water: 3100,
    materials: [
      { name: "Polyester", percentage: 75, isGood: false, reason: "Petroleum-based, sheds microplastics when washed", recyclable: false },
      { name: "Viscose", percentage: 20, isGood: false, reason: "Chemical-intensive processing, often from unsustainable forest sources", recyclable: false },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "89", barcode: "5901234123545", name: "GOTS Organic Slim Denim Jeans", brandId: "89", brandName: "Monkee Genes",
    score: 8.0, co2: 3.4, water: 1200,
    materials: [
      { name: "Organic Cotton", percentage: 99, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 1, isGood: false, reason: "Synthetic, slightly reduces recyclability", recyclable: false },
    ],
    certifications: ["GOTS"], recyclable: false, vegan: true,
  },
  {
    id: "90", barcode: "5901234123546", name: "Organic Cotton Dungarees", brandId: "90", brandName: "Lucy & Yak",
    score: 8.2, co2: 2.2, water: 1000,
    materials: [
      { name: "Organic Cotton", percentage: 100, isGood: true, reason: "Grown without pesticides, GOTS certified, Fair Trade supply chain", recyclable: true },
    ],
    certifications: ["GOTS"], recyclable: true, vegan: true,
  },
  {
    id: "91", barcode: "5901234123547", name: "Recycled Wool Ocean Jumper", brandId: "91", brandName: "Finisterre",
    score: 8.1, co2: 3.5, water: 1300,
    materials: [
      { name: "Recycled Wool", percentage: 60, isGood: true, reason: "Diverts wool waste, biodegradable, temperature-regulating", recyclable: true },
      { name: "Organic Cotton", percentage: 35, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Recycled Nylon", percentage: 5, isGood: true, reason: "Repurposed ocean waste", recyclable: true },
    ],
    certifications: ["B Corp"], recyclable: false, vegan: false,
  },
  {
    id: "92", barcode: "5901234123548", name: "Permanent Collection Merino Rollneck", brandId: "92", brandName: "Asket",
    score: 7.7, co2: 3.2, water: 1500,
    materials: [
      { name: "Merino Wool", percentage: 100, isGood: true, reason: "Renewable, biodegradable, naturally temperature-regulating", recyclable: true },
    ],
    certifications: [], recyclable: false, vegan: false,
  },
  {
    id: "93", barcode: "5901234123549", name: "Fair Trade Organic Flannel Shirt", brandId: "93", brandName: "Outerknown",
    score: 8.5, co2: 2.1, water: 950,
    materials: [
      { name: "Organic Cotton", percentage: 100, isGood: true, reason: "Grown without pesticides, Fair Trade certified, biodegradable", recyclable: true },
    ],
    certifications: ["Fair Trade", "GOTS"], recyclable: true, vegan: true,
  },
  {
    id: "94", barcode: "5901234123550", name: "Recycled Bottle Sports Bra", brandId: "94", brandName: "Girlfriend Collective",
    score: 7.4, co2: 3.5, water: 600,
    materials: [
      { name: "Recycled Polyester", percentage: 79, isGood: true, reason: "Made from post-consumer plastic bottles, reduces landfill waste", recyclable: true },
      { name: "Recycled Elastane", percentage: 21, isGood: true, reason: "Recycled stretch fiber, reduces virgin synthetic demand", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "95", barcode: "5901234123551", name: "Vegan Recycled Denim Jacket", brandId: "95", brandName: "Boyish Jeans",
    score: 7.6, co2: 2.8, water: 900,
    materials: [
      { name: "Recycled Cotton", percentage: 60, isGood: true, reason: "Diverts textile waste from landfill", recyclable: true },
      { name: "Organic Cotton", percentage: 35, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Recycled Polyester", percentage: 5, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
    ],
    certifications: ["OEKO-TEX"], recyclable: true, vegan: true,
  },
  {
    id: "96", barcode: "5901234123552", name: "Water-Saving Denim Shorts", brandId: "96", brandName: "Warp + Weft",
    score: 7.3, co2: 4.5, water: 1500,
    materials: [
      { name: "Conventional Cotton", percentage: 75, isGood: false, reason: "Heavy pesticide use — though water use is reduced in production", recyclable: true },
      { name: "Recycled Cotton", percentage: 20, isGood: true, reason: "Diverts textile waste from landfill", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents full recyclability", recyclable: false },
    ],
    certifications: ["OEKO-TEX"], recyclable: false, vegan: true,
  },
  {
    id: "97", barcode: "5901234123553", name: "Responsible Cotton Button Blouse", brandId: "97", brandName: "Sézane",
    score: 6.0, co2: 5.2, water: 1800,
    materials: [
      { name: "Organic Cotton", percentage: 45, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Conventional Cotton", percentage: 50, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "98", barcode: "5901234123554", name: "Make It Possible Organic Polo", brandId: "98", brandName: "Tommy Hilfiger",
    score: 3.8, co2: 8.5, water: 2400,
    materials: [
      { name: "Organic Cotton", percentage: 30, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Conventional Cotton", percentage: 65, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "99", barcode: "5901234123555", name: "Design the Change Recycled Chino", brandId: "99", brandName: "Ralph Lauren",
    score: 4.0, co2: 8.0, water: 2300,
    materials: [
      { name: "Conventional Cotton", percentage: 60, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Recycled Polyester", percentage: 35, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents full recyclability", recyclable: false },
    ],
    certifications: [], recyclable: false, vegan: true,
  },
  {
    id: "100", barcode: "5901234123556", name: "Cottonized Hemp 511 Slim Jeans", brandId: "100", brandName: "Levi's Wellthread",
    score: 7.0, co2: 4.8, water: 1600,
    materials: [
      { name: "Organic Hemp", percentage: 40, isGood: true, reason: "Zero pesticides, minimal water, enriches soil as it grows", recyclable: true },
      { name: "Organic Cotton", percentage: 57, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Elastane", percentage: 3, isGood: false, reason: "Synthetic, reduces recyclability", recyclable: false },
    ],
    certifications: ["GOTS", "B Corp"], recyclable: false, vegan: true,
  },
  {
    id: "101", barcode: "5901234123557", name: "Linen Summer Blouse", brandId: "101", brandName: "Seaside Tones",
    score: 7.8, co2: 1.5, water: 380,
    materials: [
      { name: "Organic Linen", percentage: 100, isGood: true, reason: "Requires minimal water, no pesticides needed, fully biodegradable", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "102", barcode: "5901234123558", name: "GOTS Tencel Blend Dress", brandId: "102", brandName: "Bynamesakke",
    score: 8.4, co2: 1.8, water: 650,
    materials: [
      { name: "TENCEL Lyocell", percentage: 70, isGood: true, reason: "Closed-loop production, biodegradable, low water footprint", recyclable: true },
      { name: "Organic Cotton", percentage: 30, isGood: true, reason: "Grown without pesticides, GOTS certified, biodegradable", recyclable: true },
    ],
    certifications: ["GOTS"], recyclable: true, vegan: true,
  },
  {
    id: "103", barcode: "5901234123559", name: "Biodegradable Linen Shirt", brandId: "103", brandName: "ŁYKO",
    score: 8.0, co2: 1.4, water: 340,
    materials: [
      { name: "Organic Linen", percentage: 100, isGood: true, reason: "Requires minimal water, no pesticides needed, fully biodegradable", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "104", barcode: "5901234123560", name: "OEKO-TEX Certified Modal Top", brandId: "104", brandName: "The Odder Side",
    score: 6.8, co2: 3.5, water: 1200,
    materials: [
      { name: "TENCEL Modal", percentage: 65, isGood: true, reason: "Sourced from sustainably managed beech trees, biodegradable", recyclable: true },
      { name: "Conventional Cotton", percentage: 30, isGood: false, reason: "Heavy pesticide use, extremely water-intensive", recyclable: true },
      { name: "Elastane", percentage: 5, isGood: false, reason: "Synthetic, prevents full recyclability", recyclable: false },
    ],
    certifications: ["OEKO-TEX"], recyclable: false, vegan: true,
  },
  {
    id: "105", barcode: "5901234123561", name: "Zero-Waste Organic Basics Tee", brandId: "105", brandName: "Nudyess",
    score: 7.7, co2: 2.0, water: 900,
    materials: [
      { name: "Organic Cotton", percentage: 95, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Recycled Polyester", percentage: 5, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
    ],
    certifications: ["OEKO-TEX"], recyclable: true, vegan: true,
  },
  {
    id: "106", barcode: "5901234123562", name: "Luxury Slow Fashion Tailored Blazer", brandId: "106", brandName: "Januszkievich",
    score: 7.5, co2: 4.2, water: 1600,
    materials: [
      { name: "Organic Wool", percentage: 80, isGood: true, reason: "Renewable, biodegradable, responsibly sourced", recyclable: true },
      { name: "Organic Cotton", percentage: 20, isGood: true, reason: "Grown without pesticides, biodegradable lining", recyclable: true },
    ],
    certifications: [], recyclable: false, vegan: false,
  },
  {
    id: "107", barcode: "5901234123563", name: "Bamboo Linen Blend Tee", brandId: "107", brandName: "Re-Bello",
    score: 7.3, co2: 1.8, water: 550,
    materials: [
      { name: "Organic Bamboo", percentage: 60, isGood: true, reason: "Grows without pesticides, minimal water, biodegradable", recyclable: true },
      { name: "Organic Linen", percentage: 40, isGood: true, reason: "Requires minimal water, no pesticides needed, fully biodegradable", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "108", barcode: "5901234123564", name: "Organic Cotton Basic Tee", brandId: "108", brandName: "Frootwear",
    score: 8.1, co2: 2.0, water: 850,
    materials: [
      { name: "Organic Cotton", percentage: 85, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "Recycled Polyester", percentage: 15, isGood: true, reason: "Made from post-consumer plastic bottles", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "109", barcode: "5901234123565", name: "Local Production Organic Linen Top", brandId: "109", brandName: "Ansin",
    score: 7.2, co2: 1.5, water: 370,
    materials: [
      { name: "Organic Linen", percentage: 100, isGood: true, reason: "Requires minimal water, no pesticides needed, fully biodegradable", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
  {
    id: "110", barcode: "5901234123566", name: "Natural Materials Basics Tee", brandId: "110", brandName: "Nais",
    score: 7.0, co2: 2.0, water: 800,
    materials: [
      { name: "Organic Cotton", percentage: 90, isGood: true, reason: "Grown without pesticides, biodegradable", recyclable: true },
      { name: "TENCEL Lyocell", percentage: 10, isGood: true, reason: "Closed-loop production, biodegradable, low water footprint", recyclable: true },
    ],
    certifications: [], recyclable: true, vegan: true,
  },
];

export const DEMO_BARCODES = products.map((p) => p.barcode);
