import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BestSeller from "@/components/BestSeller";
import Image from "next/image";
import HomeCategory from "@/components/HomeCategory";
import HomeReview from "@/components/HomeReview";

export default function Home() {
  return (
    <>
      <Hero />

      <main>
        <BestSeller />

        <section className="section has-text-centered">
          <p className="is-size-3 has-text-weight-semibold">
            Des personnages hauts en couleurs
          </p>
          <p>
            Apprenez en plus sur les personnages de l&apos;univers de Lagrith
          </p>

          <div className="columns is-centered mt-4">
            <div className="column is-narrow">
              <Image
                src="https://placehold.co/200x275/png"
                alt="perso 1"
                width={200}
                height={275}
                className="image is-3by5"
              />
            </div>
            <div className="column is-narrow">
              <Image
                src="https://placehold.co/200x275/png"
                alt="perso 2"
                width={200}
                height={275}
                className="image is-3by5"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="has-text-centered mb-4">
            <p className="is-size-3 has-text-weight-semibold">
              Parcourez différentes catégories de livres
            </p>
            <p>
              Glossaire, aventures en tout genre,{" "}
              <span className="is-italic">origin story</span> ...
            </p>
          </div>

          <HomeCategory />
        </section>

        <section className="section has-text-centered">
          <div
            className="is-flex is-align-items-center is-justify-content-center mb-4"
            style={{ gap: 32 }}
          >
            <hr style={{ width: "35%" }} />
            <h2 className="is-size-5">Reviews</h2>
            <hr style={{ width: "35%" }} />
          </div>

          <HomeReview />
        </section>
      </main>

      <Footer />
    </>
  );
}
