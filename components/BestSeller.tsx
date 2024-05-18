"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Book } from "@/types/Book";
import BookCard from "./BookCard";
import useFetchData from "@/functions/useFetchData";

export default function BestSeller() {
  const book: Book = useFetchData("/database/book/bestArticle");

  return (
    <section className="section">
      <div className="columns is-vcentered">
        <div className="column">
          <p className="is-size-3 has-text-weight-semibold">Meilleure vente</p>
          <div className="icon-text">
            <span>Savourez cette histoire incroyable</span>
            <span className="icon">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </div>

        <div className="column">
          {book && <BookCard {...book} />}

          {!book && <progress className="progress is-small is-primary" />}
        </div>
      </div>
    </section>
  );
}
