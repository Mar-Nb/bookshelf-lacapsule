"use client";

import { Category } from "@/types/Category";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CategoryList() {
  const [list, setList] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/database/category/getAll");
      const json = await res.json();

      setList(json);
    })();
  }, []);

  return (
    <>
      {list &&
        list.map((c) => (
          <div key={c.id} className="card" title={c.description}>
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
    </>
  );
}
