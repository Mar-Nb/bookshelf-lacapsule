import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="h-5/6 flex flex-col gap-2 px-8 pt-20">
        <h1>À propos de Bookshelf</h1>
      </main>

      <Footer />
    </>
  );
}
