import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="max-w-60 bg-white rounded-xl text-ellipsis overflow-hidden shadow-md">
      <div className="flex items-center justify-between bg-gray-300 px-4 py-2">
        <div>
          <span className="text-black text-lg font-semibold">{title}</span>
          <p className="text-sm text-gray-600 overflow-hidden">{desc}</p>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2">
        <p className="text-xl font-bold text-black">{price.toFixed(2)} €</p>
        <button className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white px-4 py-2 rounded-full">
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
    </div>
  );
}
