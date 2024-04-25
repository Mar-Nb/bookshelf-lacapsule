import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReviewCard({
  name,
  stars,
  content,
  book,
}: {
  name: string;
  stars: number;
  content: string;
  book: any;
}) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{name}</p>
        <span className="card-header-icon">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`icon ${i < stars ? "has-text-warning" : ""}`}
            >
              <FontAwesomeIcon icon={faStar} />
            </span>
          ))}
        </span>
      </header>

      <div className="card-content has-text-left">
        <div className="content">
          <h5>{book.title}</h5>
          {content}
        </div>
      </div>
    </div>
  );
}
