"use client";

import useFetchData from "@/functions/useFetchData";
import { Category } from "@/types/Category";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CategoryList() {
  const list: Category[] = useFetchData("/database/category/getAll");

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
