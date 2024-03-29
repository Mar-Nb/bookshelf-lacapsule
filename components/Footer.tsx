import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container has-text-centered">
        <p>
          <strong>Bookshelf</strong> by{" "}
          <a href="https://github.com/Mar-Nb">Mar-Nb</a>.
        </p>
        <span className="icon-text">
          <span>Projet La Capsule - </span>
          <span className="icon">
            <FontAwesomeIcon icon={faRocket} className="has-text-danger" />
          </span>
        </span>
      </div>
    </footer>
  );
}
