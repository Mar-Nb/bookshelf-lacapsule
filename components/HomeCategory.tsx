"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

interface Category {
  title: string;
  description: string;
}

export default function HomeCategory() {
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch("/database/category/home");
      const json = await res.json();

      setCategories([...json]);
    })();
  }, []);

  return (
    <div className="columns is-centered">
      {categories &&
        categories.map((c, i) => (
          <div key={i} className="column is-4">
            <CategoryCard title={c.title} desc={c.description} />
          </div>
        ))}
    </div>
  );
}
