import { Book } from "@/types/Book";

export default function BookCard(book: Book) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{book.title}</p>
        <span className="tag is-info is-large">{book.price.toFixed(2)} €</span>
      </header>
      <div className="card-content">
        <div className="content">{book.description}</div>
      </div>
      <footer className="card-footer">
        <button className="button is-primary is-fullwidth bold-hover">
          Acheter
        </button>
      </footer>
    </div>
  );
}
