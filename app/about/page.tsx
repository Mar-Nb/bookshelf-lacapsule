import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="container pt-6">
        <section className="section has-background-primary">
          <h1 className="title has-text-black">À propos de Bookshelf</h1>
          <h2 className="subtitle has-text-grey-darker">
            Tout savoir sur le projet Bookshelf
          </h2>
        </section>
      </main>
    </>
  );
}
