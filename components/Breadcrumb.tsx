import Link from "next/link";

export default function Breadcrumb({ path }: { path: string[] }) {
  const steps = path.map((step, i) => (
    <li
      key={step.toLowerCase()}
      className={i === path.length - 1 ? "is-active" : ""}
    >
      {i === 0 && <Link href="/">{LINK[step]}</Link>}
      {i !== 0 && (
        <Link href={path.slice(0, i + 1).join("/")}>{LINK[step] ?? step}</Link>
      )}
    </li>
  ));

  return (
    <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>{steps}</ul>
    </nav>
  );
}

const LINK: Record<string, string> = {
  "": "Accueil",
  category: "Catégories",
  cart: "Panier",
  about: "À propos",
};
