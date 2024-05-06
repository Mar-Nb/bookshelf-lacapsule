"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Category } from "@/types/Category";

export default function HomeCategory() {
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/database/category/home`);
      const json = await res.json();

      setCategories([...json]);
    })();
  }, []);

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
