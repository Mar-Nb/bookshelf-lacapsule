import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "En savoir un peu plus sur le projet Bookshelf",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="container pt-6">
        <Breadcrumb path={["", "about"]} />
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
