import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Navbar />

      <div className="flex flex-col items-center justify-center gap-8">
        <span className="text-5xl font-bold text-center w-3/4">
          Découvrez des histoires extraordinaires dans les contrées imaginaires
          d&apos;Arhlène
        </span>
        <p className="text-2xl">
          Plongez dans notre collection exclusive de livres numériques
        </p>

        <div className="max-w-md mx-auto">
          <div className="flex items-center border-2 rounded-full">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full py-2 px-4 rounded-l-full focus:outline-none bg-transparent"
            />
            <button className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white px-4 py-2 rounded-r-full">
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
