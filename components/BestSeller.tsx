"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";
import { useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Article {
  title: string;
  desc: string;
  price: number;
}

export default function BestSeller() {
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    (async () => {
      const res = await fetch("/database/book/bestArticle/");
      const json = await res.json();

      setArticle({
        title: json.title,
        desc: json.description,
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
          {article && (
            <Card
              title={article.title}
              desc={article.desc}
              price={article.price}
            />
          )}

          {!article && <progress className="progress is-small is-primary" />}
        </div>
      </div>
    </section>
  );
}
