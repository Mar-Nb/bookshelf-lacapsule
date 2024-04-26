"use client";

import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

interface Category {
  title: string;
  description: string;
}

interface Book {
  id: string;
  title: string;
  price: number;
  description: string;
}

export default function CategoryPage({
  params,
}: {
  params: { title: string };
}) {
  const [category, setCategory] = useState<Category>();
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `/database/category/getOne?title=${params.title}`,
      );
      const json = await res.json();

      setCategory(json.category);
      setBooks(json.books);
    })();
  }, []);

  return (
    <>
      <Navbar />

      <main className="container pt-6">
        <section className="section has-background-primary">
          <h1 className="title has-text-black">{category?.title}</h1>
          <h2 className="subtitle has-text-grey-darker">
            {category?.description}
          </h2>
        </section>

        <section className="section">
          <div className="fixed-grid has-3-cols">
            <div className="grid">
              {books &&
                books.map((b, i) => (
                  <div key={i} className="cell">
                    <Card
                      title={b.title}
                      price={b.price}
                      desc={b.description}
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
