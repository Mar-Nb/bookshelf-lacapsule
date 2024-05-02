"use client";

import { Cart } from "@/types/Cart";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface CartModalProps {
  isActive: boolean;
  close: () => void;
}

export default function CartModal(props: CartModalProps) {
  const [cartItems, setCartItems] = useState<Cart[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/database/cart`,
      );
      const json = await res.json();

      console.log("cart", json);
    })();
  }, []);

  return (
    <div className={`modal ${props.isActive ? "is-active" : ""}`}>
      <div className="modal-background" onClick={props.close}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Votre panier</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.close}
          ></button>
        </header>

        <section className="modal-card-body">
          <div className="container">
            <p>Le panier est en cours de développement...</p>
          </div>
        </section>

        <section className="modal-card-foot">
          <div className="buttons">
            <button className="button is-success" onClick={props.close}>
              <span className="icon">
                <FontAwesomeIcon icon={faHandHoldingDollar} />
              </span>

              <span>Payer le panier</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
