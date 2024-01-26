import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col text-white items-center justify-center gap-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <Hero />
    </main>
  );
}
