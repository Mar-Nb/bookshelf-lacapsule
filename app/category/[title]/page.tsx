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
  // const [category, setCategory] = useState<Category>();
  // const [books, setBooks] = useState<Book[]>();

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(`/database/category/getOne?title=${params.title}`);
  //     const json = await res.json();

  //     setCategory(json.category);
  //     setBooks(json.books);
  //   })();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const { category, books }: {category: Category, books: Book[]} = useFetchData(`/database/category/getOne?title=${params.title}`);

  return (
    <>
      <Navbar />

      <main className="container pt-6">
        {category && (
          <Breadcrumb path={["Accueil", "Catégories", category.title]} />
        )}
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
                books.map((b) => (
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
