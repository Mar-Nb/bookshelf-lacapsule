import Breadcrumb from "@/components/Breadcrumb";
import CategoryList from "@/components/CategoryList";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catégories",
  description:
    "Retrouvez toutes les catégories de livres du projet Bookshelf !",
};

export default function CategoryListPage() {
  return (
    <>
      <Navbar />

      <main className="container pt-6">
        <Breadcrumb path={["", "category"]} />
        <section className="section has-background-primary">
          <h1 className="title has-text-black">Catégories</h1>
          <h2 className="subtitle has-text-grey-darker">
            Les catégories de Bookshelf
          </h2>
        </section>

        <section className="section">
          <div className="columns">
            <div className="column">
              <CategoryList />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
