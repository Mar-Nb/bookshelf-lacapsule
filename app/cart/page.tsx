import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CartPage() {
  return (
    <>
      <Navbar />

      <main className="h-5/6 flex flex-col gap-2 px-8 pt-20">
        <h1>Le panier</h1>
      </main>

      <Footer />
    </>
  );
}
