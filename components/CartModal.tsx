import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartModal({
  isActive,
  close,
}: {
  isActive: boolean;
  close: () => void;
}) {
  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background" onClick={close}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Votre panier</p>
          <button
            className="delete"
            aria-label="close"
            onClick={close}
          ></button>
        </header>

        <section className="modal-card-body">
          <div className="container">
            <p>Le panier est en cours de développement...</p>
          </div>
        </section>

        <section className="modal-card-foot">
          <div className="buttons">
            <button className="button is-success" onClick={close}>
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
