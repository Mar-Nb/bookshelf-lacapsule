import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CategoryCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>
      <div className="card-content">
        <div className="content">{desc}</div>
      </div>
      <footer className="card-footer has-background-primary bold-hover">
        <Link href={`/category/${encodeURI(title)}`}>
          <div className="icon-text has-text-black is-align-items-center pl-3 py-2">
            <span>Voir la catégorie</span>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </Link>
      </footer>
    </div>
  );
}
