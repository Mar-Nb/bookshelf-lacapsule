import { Article } from "@/types/Cart";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CartArticleProps {
  article: Article;
  delete: () => void;
}

export default function CartArticle(props: CartArticleProps) {
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
            <p className="subtitle is-5">{props.article.copy}</p>
          </div>
        </div>

        <div className="column">
          <div className="buttons">
            <button className="button is-info">
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
        </div>
      </div>
    </div>
  );
}
