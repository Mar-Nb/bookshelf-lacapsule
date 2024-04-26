"use client";

import Navbar from "@/components/Navbar";
import { Category } from "@/types/Category";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CategoryListPage() {
  const [list, setList] = useState<Category[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch("/database/category/getAll");
      const json = await res.json();

      setList(json);
    })();
  }, []);

  return (
    <>
      <Navbar />

      <main className="container pt-6">
        <section className="section has-background-primary">
          <h1 className="title has-text-black">Catégories</h1>
          <h2 className="subtitle has-text-grey-darker">
            Les catégories de Bookshelf
          </h2>
        </section>

        <section className="section">
          <div className="columns">
            <div className="column">
              {list &&
                list.map((c, i) => (
                  <div key={i} className="card" title={c.description}>
                  <Link href={`/category/${encodeURI(c.title)}`}>
                    <header className="card-header">
                      <p className="card-header-title">{c.title}</p>

                      <button
                        className="card-header-icon"
                        aria-label="go to category page"
                      >
                        <span className="icon">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </button>
                    </header>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
