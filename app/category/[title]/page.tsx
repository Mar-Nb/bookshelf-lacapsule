"use client";

import BookCard from "@/components/BookCard";
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import useFetchData from "@/functions/useFetchData";
import { Book } from "@/types/Book";
import { Category } from "@/types/Category";

export default function CategoryPage({
  params,
}: {
  params: { title: string };
}) {
  const data: { category: Category; books: Book[] } = useFetchData(
    `/database/category/getOne?title=${params.title}`,
  );

  return (
    <>
      <Navbar />

      <main className="container pt-6">
        {data?.category && (
          <Breadcrumb path={["Accueil", "Catégories", data?.category.title]} />
        )}
        <section className="section has-background-primary">
          <h1 className="title has-text-black">{data?.category.title}</h1>
          <h2 className="subtitle has-text-grey-darker">
            {data?.category.description}
          </h2>
        </section>

        <section className="section">
          <div className="fixed-grid has-3-cols">
            <div className="grid">
              {data?.books &&
                data?.books.map((b) => (
                  <div key={b.id} className="cell">
                    <BookCard {...b} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
