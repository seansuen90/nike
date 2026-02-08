import "dotenv/config";
import { db } from "../src/lib/db";
import { products } from "../src/lib/schema";

const sampleProducts = [
  {
    id: "air-max-pulse",
    name: "Nike Air Max Pulse",
    category: "Running",
    description:
      "A breathable mesh upper with a cushioned midsole built for all-day comfort.",
    price: "149.99",
    stock: 22,
    imageUrl:
      "https://images.nike.com/is/image/DotCom/DV3337_001_A"
  },
  {
    id: "pegasus-trail-5",
    name: "Nike Pegasus Trail 5",
    category: "Trail",
    description:
      "Tuned traction with React foam to keep every trail run smooth and responsive.",
    price: "159.99",
    stock: 16,
    imageUrl:
      "https://images.nike.com/is/image/DotCom/DV3864_001_A"
  },
  {
    id: "dunk-low-retro",
    name: "Nike Dunk Low Retro",
    category: "Lifestyle",
    description:
      "Classic color blocking, premium leather, and a nod to the hardwood.",
    price: "109.99",
    stock: 30,
    imageUrl:
      "https://images.nike.com/is/image/DotCom/DD1391_100_A"
  },
  {
    id: "metcon-9",
    name: "Nike Metcon 9",
    category: "Training",
    description:
      "Stable, durable, and supportive for high-intensity training sessions.",
    price: "139.99",
    stock: 12,
    imageUrl:
      "https://images.nike.com/is/image/DotCom/DO9328_010_A"
  },
  {
    id: "alate-ellipsoid-bra",
    name: "Nike Alate Ellipsoid",
    category: "Women",
    description:
      "Soft, adaptive support designed for everyday comfort and movement.",
    price: "54.99",
    stock: 18,
    imageUrl:
      "https://images.nike.com/is/image/DotCom/FB4082_010_A"
  },
  {
    id: "sportswear-tech-fleece",
    name: "Nike Sportswear Tech Fleece",
    category: "Apparel",
    description:
      "Lightweight warmth with a sleek, modern silhouette for layering.",
    price: "129.99",
    stock: 25,
    imageUrl:
      "https://images.nike.com/is/image/DotCom/CU4489_010_A"
  }
];

async function seed() {
  await db.delete(products);
  await db.insert(products).values(sampleProducts);
  // eslint-disable-next-line no-console
  console.log("Seeded products:", sampleProducts.length);
}

seed().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
