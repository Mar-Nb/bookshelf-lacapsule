import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <p>Home page</p>
      <Footer />
    </main>
  );
}
