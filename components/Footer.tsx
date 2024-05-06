import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container has-text-centered">
        <p>
          <strong>Bookshelf</strong> by{" "}
          <Link href="https://github.com/Mar-Nb">Mar-Nb</Link>.
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
