"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";
import { useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Book } from "@/types/Book";

export default function BestSeller() {
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    (async () => {
      const res = await fetch("/database/book/bestArticle/");
      const json = await res.json();

      setBook({
        title: json.title,
        description: json.description,
        price: json.price,
      });
    })();
  }, []);

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
          {book && (
            <Card
              title={book.title}
              desc={book.description}
              price={book.price}
            />
          )}

          {!book && <progress className="progress is-small is-primary" />}
        </div>
      </div>
    </section>
  );
}
