export default function Card({
  title,
  desc,
  price,
}: {
  title: string;
  desc: string;
  price: number;
}) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
        <span className="tag is-info is-large">{price.toFixed(2)} €</span>
      </header>
      <div className="card-content">
        <div className="content">{desc}</div>
      </div>
      <footer className="card-footer">
        <button className="button is-primary is-fullwidth">Acheter</button>
      </footer>
    </div>
  );
}
