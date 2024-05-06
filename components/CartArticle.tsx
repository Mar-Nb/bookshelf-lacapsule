"use client";

import { Article } from "@/types/Cart";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

interface CartArticleProps {
  article: Article;
  delete: () => void;
  update: (updatedValue: number) => void;
}

export default function CartArticle(props: CartArticleProps) {
  const [edit, setEdit] = useState(false);
  const qtyRef = useRef(null);

  return (
    <div className="box" title={props.article.description}>
      <div className="columns is-vcentered is-mobile">
        <div className="column">
          <div>
            <p className="heading">Titre</p>
            <p className="subtitle is-5">{props.article.title}</p>
          </div>
        </div>

        <div className="column">
          <div>
            <p className="heading">Prix</p>
            <p className="subtitle is-5">{props.article.price} €</p>
          </div>
        </div>

        <div className="column">
          <div>
            <p className="heading">Qté</p>
            {!edit && <p className="subtitle is-5">{props.article.copy}</p>}
            {edit && (
              <input
                ref={qtyRef}
                className="input"
                type="number"
                placeholder="Nombre d'exemplaire"
                defaultValue={props.article.copy}
              />
            )}
          </div>
        </div>

        <div className="column">
          {!edit && (
            <div className="buttons">
              <button className="button is-info" onClick={() => setEdit(true)}>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </span>
              </button>

              <button className="button is-danger" onClick={props.delete}>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </span>
              </button>
            </div>
          )}

          {edit && (
            <div className="buttons">
              <button
                className="button is-success"
                onClick={() => {
                  props.update(
                    Number(
                      (qtyRef.current as unknown as HTMLInputElement).value,
                    ),
                  );
                  setEdit(false);
                }}
              >
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              </button>

              <button
                className="button is-danger"
                onClick={() => setEdit(false)}
              >
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faXmark} />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
