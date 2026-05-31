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
  {
    id: "1",
    barcode: "5901234123457",
    name: "Organic Cotton T-Shirt",
    brandId: "16",
    brandName: "Patagonia",
    score: 91,
    co2: 2.1,
    water: 1200,
    materials: [
      {
        name: "Organic Cotton",
        percentage: 95,
        isGood: true,
        reason:
          "Grown without pesticides or synthetic fertilizers, biodegradable",
        recyclable: true,
      },
      {
        name: "Elastane",
        percentage: 5,
        isGood: false,
        reason:
          "Synthetic fiber, not biodegradable, hard to recycle when blended",
        recyclable: false,
      },
    ],
    certifications: ["GOTS", "Fair Trade"],
    recyclable: true,
    vegan: true,
  },
  {
    id: "2",
    barcode: "5901234123458",
    name: "Recycled Puffer Jacket",
    brandId: "17",
    brandName: "Armedangels",
    score: 84,
    co2: 5.8,
    water: 800,
    materials: [
      {
        name: "Recycled Polyester",
        percentage: 80,
        isGood: true,
        reason:
          "Made from post-consumer plastic bottles, reduces landfill waste",
        recyclable: true,
      },
      {
        name: "Recycled Nylon",
        percentage: 15,
        isGood: true,
        reason: "Repurposed ocean waste and fishing nets",
        recyclable: true,
      },
      {
        name: "Polyurethane coating",
        percentage: 5,
        isGood: false,
        reason: "Synthetic coating, not biodegradable",
        recyclable: false,
      },
    ],
    certifications: ["GOTS", "B Corp", "Bluesign"],
    recyclable: true,
    vegan: true,
  },
  {
    id: "3",
    barcode: "5901234123459",
    name: "Slim Fit Jeans",
    brandId: "51",
    brandName: "Zara",
    score: 28,
    co2: 12.5,
    water: 3800,
    materials: [
      {
        name: "Conventional Cotton",
        percentage: 70,
        isGood: false,
        reason:
          "Heavy pesticide use, extremely water-intensive (2,700L per kg)",
        recyclable: true,
      },
      {
        name: "Polyester",
        percentage: 25,
        isGood: false,
        reason:
          "Petroleum-based, sheds microplastics when washed, takes 200+ years to decompose",
        recyclable: false,
      },
      {
        name: "Elastane",
        percentage: 5,
        isGood: false,
        reason:
          "Makes the garment nearly impossible to recycle due to fiber blending",
        recyclable: false,
      },
    ],
    certifications: [],
    recyclable: false,
    vegan: true,
  },
  {
    id: "4",
    barcode: "5901234123460",
    name: "Linen Summer Dress",
    brandId: "1",
    brandName: "NAGO",
    score: 88,
    co2: 1.4,
    water: 400,
    materials: [
      {
        name: "Organic Linen",
        percentage: 100,
        isGood: true,
        reason:
          "Requires minimal water, no irrigation needed, fully biodegradable",
        recyclable: true,
      },
    ],
    certifications: ["GOTS"],
    recyclable: true,
    vegan: true,
  },
  {
    id: "5",
    barcode: "5901234123461",
    name: "Graphic Print Hoodie",
    brandId: "76",
    brandName: "SHEIN",
    score: 9,
    co2: 15.2,
    water: 4500,
    materials: [
      {
        name: "Polyester",
        percentage: 60,
        isGood: false,
        reason: "Petroleum-based, sheds microplastics, non-biodegradable",
        recyclable: false,
      },
      {
        name: "Acrylic",
        percentage: 30,
        isGood: false,
        reason:
          "Made from fossil fuels, releases toxic chemicals during production",
        recyclable: false,
      },
      {
        name: "Elastane",
        percentage: 10,
        isGood: false,
        reason: "Synthetic, prevents garment from being recyclable",
        recyclable: false,
      },
    ],
    certifications: [],
    recyclable: false,
    vegan: true,
  },
  {
    id: "6",
    barcode: "5901234123462",
    name: "Merino Wool Sweater",
    brandId: "75",
    brandName: "Icebreaker",
    score: 79,
    co2: 3.8,
    water: 1500,
    materials: [
      {
        name: "Merino Wool",
        percentage: 87,
        isGood: true,
        reason: "Renewable, biodegradable, naturally temperature-regulating",
        recyclable: true,
      },
      {
        name: "Nylon",
        percentage: 13,
        isGood: false,
        reason: "Synthetic reinforcement, not biodegradable",
        recyclable: false,
      },
    ],
    certifications: ["B Corp"],
    recyclable: false,
    vegan: false,
  },
  {
    id: "7",
    barcode: "5901234123463",
    name: "Hemp Cargo Pants",
    brandId: "20",
    brandName: "Thought",
    score: 85,
    co2: 1.8,
    water: 500,
    materials: [
      {
        name: "Organic Hemp",
        percentage: 55,
        isGood: true,
        reason:
          "Requires zero pesticides, minimal water, enriches soil as it grows",
        recyclable: true,
      },
      {
        name: "Organic Cotton",
        percentage: 45,
        isGood: true,
        reason:
          "No synthetic chemicals, biodegradable, better for farm workers",
        recyclable: true,
      },
    ],
    certifications: ["GOTS", "OEKO-TEX"],
    recyclable: true,
    vegan: true,
  },
  {
    id: "8",
    barcode: "5901234123464",
    name: "Fast Dry Running Shirt",
    brandId: "46",
    brandName: "Nike",
    score: 41,
    co2: 8.3,
    water: 2200,
    materials: [
      {
        name: "Recycled Polyester",
        percentage: 50,
        isGood: true,
        reason:
          "Diverts plastic from landfills, lower carbon than virgin polyester",
        recyclable: true,
      },
      {
        name: "Virgin Polyester",
        percentage: 40,
        isGood: false,
        reason: "Petroleum-derived, energy-intensive to produce",
        recyclable: false,
      },
      {
        name: "Elastane",
        percentage: 10,
        isGood: false,
        reason: "Prevents full recyclability of the garment",
        recyclable: false,
      },
    ],
    certifications: ["Bluesign"],
    recyclable: false,
    vegan: true,
  },
];
