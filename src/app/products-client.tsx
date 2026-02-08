"use client";

import { useProductSelection } from "@/store/products";
import type { Product } from "@/lib/schema";

const formatPrice = (price: string) => {
  const value = Number(price);
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
};

export default function ProductsClient({ products }: { products: Product[] }) {
  const { selectedProductId, setSelectedProductId } = useProductSelection();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <button
          key={product.id}
          type="button"
          onClick={() =>
            setSelectedProductId(
              selectedProductId === product.id ? null : product.id
            )
          }
          className={`rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
            selectedProductId === product.id
              ? "border-black"
              : "border-neutral-200"
          }`}
        >
          <div className="flex items-center justify-between text-sm text-neutral-500">
            <span className="font-medium uppercase tracking-wide">
              {product.category}
            </span>
            <span>{formatPrice(product.price)}</span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-neutral-900">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-neutral-600">
            {product.description}
          </p>
          <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
            <span>{product.stock} in stock</span>
            <span>
              {selectedProductId === product.id
                ? "Selected"
                : "Tap to select"}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
