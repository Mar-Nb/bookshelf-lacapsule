import BookCategory from "@/components/BookCategory";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col text-white items-center gap-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <Hero />

      <div className="flex flex-col gap-14 px-16 w-full">
        <div className="flex gap-5 items-center">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-semibold">Meilleure vente</span>
            <span className="font-semibold">
              Savourez cette histoire incroyable
              <FontAwesomeIcon icon="arrow-right" className="pl-4" size="xl" />
            </span>
          </div>

          <Card
            title="Sezan: Les contes d'un voleur"
            desc="Tout commença sous une nuit de pleine lune"
            price={16}
          />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold">
            Des personnages hauts en couleurs
          </h2>
          <p>
            Apprenez en plus sur les personnages de l&apos;univers
            d&apos;Arhlène
          </p>
        </div>

        <div className="flex items-center justify-center gap-8">
          <Image
            src="https://placehold.co/200x275/png"
            width={200}
            height={275}
            alt="image de personnage"
            className="rounded-xl"
          />
          <Image
            src="https://placehold.co/200x275/png"
            width={200}
            height={275}
            alt="image de personnage"
            className="rounded-xl"
          />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold">
            Parcourez différentes catégories de livres
          </h2>
          <p>
            Glossaire, aventures en tout genre,{" "}
            <span className="italic">origin story</span> ...
          </p>
        </div>

        <div className="flex items-center justify-center gap-8">
          <BookCategory title="Category 1" desc="Description" />
          <BookCategory title="Category 2" desc="Description" />
        </div>

        <div className="flex justify-center">
          <div className="border border-white w-2/3" />
        </div>
      </div>
    </main>
  );
}
