"use client";

import CategoryCard from "./CategoryCard";
import { Category } from "@/types/Category";
import useFetchData from "@/functions/useFetchData";

export default function HomeCategory() {
  const categories: Category[] = useFetchData("/database/category/home");

  return (
    <div className="columns is-centered">
      {categories &&
        categories.map((c) => (
          <div key={c.id} className="column is-4">
            <CategoryCard {...c} />
          </div>
        ))}
    </div>
  );
}
