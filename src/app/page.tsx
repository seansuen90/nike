import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import ProductsClient from "@/app/products-client";

export const revalidate = 60;

export default async function HomePage() {
  const items = await db.select().from(products).orderBy(products.name);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-12">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Nike catalog
        </p>
        <h1 className="text-4xl font-semibold text-neutral-900 sm:text-5xl">
          Discover the latest drops
        </h1>
        <p className="max-w-2xl text-base text-neutral-600">
          Powered by Next.js, Drizzle ORM, Neon Postgres, and Better Auth. Select
          a product card to highlight it via Zustand state.
        </p>
      </section>
      <ProductsClient products={items} />
    </main>
  );
}
