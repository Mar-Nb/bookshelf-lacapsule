import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function BookCategory({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="w-1/3 max-w-md bg-white rounded-xl text-ellipsis overflow-hidden shadow-md">
      <div className="flex items-center justify-between bg-gray-300 px-4 py-2">
        <div>
          <span className="text-black text-lg font-semibold">{title}</span>
          <p className="text-sm text-gray-600 overflow-hidden">{desc}</p>
        </div>
      </div>

      <div className="flex text-black items-center justify-between px-4 py-2">
        <Link href="#">
          Voir la catégorie{" "}
          <FontAwesomeIcon icon="arrow-right" className="pl-5" />
        </Link>
      </div>
    </div>
  );
}
