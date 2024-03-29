import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Bookshelf</strong> by{" "}
          <a href="https://github.com/Mar-Nb">Mar-Nb</a>.
        </p>
        <div
          className="is-flex is-flex-direction-row is-align-content-center is-justify-content-center"
          style={{ gap: 10 }}
        >
          <p>Projet La Capsule</p>
          <span className="icon">
            <FontAwesomeIcon icon={faRocket} className="has-text-danger" />
          </span>
        </div>
      </div>
    </footer>
  );
}
