import { Category } from "@/types/Category";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CategoryCard(category: Category) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{category.title}</p>
      </header>
      <div className="card-content">
        <div className="content">{category.description}</div>
      </div>
      <footer className="card-footer has-background-primary bold-hover">
        <Link href={`/category/${encodeURI(category.title)}`}>
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
