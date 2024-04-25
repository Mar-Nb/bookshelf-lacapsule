import Navbar from "@/components/Navbar";

export default function CategoryListPage() {
  return (
    <>
      <Navbar />

      <main className="container pt-6">
        <section className="section has-background-primary">
          <h1 className="title has-text-black">Catégories</h1>
          <h2 className="subtitle has-text-grey-darker">
            Les catégories de Bookshelf
          </h2>
        </section>
      </main>
    </>
  );
}
