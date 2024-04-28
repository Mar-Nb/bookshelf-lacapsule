import { Review } from "@/types/Review";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReviewCard(review: Review) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{review.name}</p>
        <span className="card-header-icon">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i + "stars"}
              className={`icon ${i < review.stars ? "has-text-warning" : ""}`}
            >
              <FontAwesomeIcon icon={faStar} />
            </span>
          ))}
        </span>
      </header>

      <div className="card-content has-text-left">
        <div className="content">
          <h5>{review.book.title}</h5>
          {review.content}
        </div>
      </div>
    </div>
  );
}
