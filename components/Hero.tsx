import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section className="hero is-primary is-fullheight-with-navbar">
        <div
          className="hero-body is-flex-direction-column is-justify-content-center"
          style={{ gap: 20 }}
        >
          <p className="title has-text-centered">
            Découvrez des histoires extraordinaires dans les contrées
            imaginaires d&apos;Arhlène
          </p>
          <p className="subtitle">
            Plongez dans notre collection exclusive de livres numériques
          </p>
        </div>
      </section>
    </>
  );
}
