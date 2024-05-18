import Breadcrumb from "@/components/Breadcrumb";
import CartList from "@/components/CartList";
import { faArrowLeft, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Panier",
  description: "Un panier, des livres, à la caisse !",
};

export default function CartPage() {
  return (
    <>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item" style={{ gap: 10 }}>
            <span className="icon">
              <FontAwesomeIcon icon={faBook} />
            </span>

            <span>Bookshelf</span>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <Link href="/">
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>
                  <span>Retour</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container pt-6">
        <Breadcrumb path={["", "cart"]} />
        <section className="section has-background-primary">
          <h1 className="title has-text-black">Panier</h1>
          <h2 className="subtitle has-text-grey-darker">
            Les articles dans votre panier
          </h2>
        </section>

        <section className="section">
          <CartList />
        </section>
      </main>
    </>
  );
}
