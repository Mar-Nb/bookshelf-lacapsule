import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <footer className="card-footer has-background-primary has-text-black bold-hover">
        <div className="icon-text is-align-items-center pl-3 py-2">
          <span>Voir la catégorie</span>
          <span className="icon is-small">
            <FontAwesomeIcon icon="arrow-right" />
          </span>
        </div>
      </footer>
    </div>
  );
}
