import { Article } from "@/types/Cart";

export default function CartArticle(article: Article) {
  return (
    <div className="level is-mobile">
      <div className="level-left">
        <div className="level-item" title={article.description}>
          <div>
            <p className="heading">Titre</p>
            <p className="subtitle is-5">{article.title}</p>
          </div>
        </div>

        <div className="level-item">
          <div>
            <p className="heading">Prix</p>
            <p className="subtitle is-5">{article.price} €</p>
          </div>
        </div>
      </div>
    </div>
  );
}
