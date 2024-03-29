import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

export default function BestSeller() {
  return (
    <section className="section">
      <div className="columns is-vcentered">
        <div className="column">
          <p className="is-size-3">Meilleure vente</p>
          <div className="icon-text">
            <span>Savourez cette histoire incroyable</span>
            <span className="icon">
              <FontAwesomeIcon icon="arrow-right" />
            </span>
          </div>
        </div>

        <div className="column">
          <Card
            title="Les aventures de Sezan"
            desc="Tout commença par une nuit de pleine lune..."
            price={16}
          />
        </div>
      </div>
    </section>
  );
}
