import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <nav className="navbar p-4 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold">
              <FontAwesomeIcon icon="book" /> BookShelf
            </a>

            <div className="flex space-x-12 items-center">
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  Accueil
                </a>
                <a href="#" className="hover:text-gray-300">
                  Catégories
                </a>
                <a href="#" className="hover:text-gray-300">
                  À propos
                </a>
              </div>

              <div className="relative">
                <FontAwesomeIcon
                  icon="cart-shopping"
                  size="2x"
                  className="hover:text-gray-300 cursor-pointer"
                />
                <span className="bg-red-500 text-white text-sm rounded-full px-2 absolute top-0 right-0 -mt-2 -mr-2">
                  ?
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center gap-8">
        <span className="text-5xl font-bold text-center w-3/4">
          Découvrez des histoires extraordinaires dans les contrées imaginaires
          d&apos;Arhlène
        </span>
        <p className="text-2xl">
          Plongez dans notre collection exclusives de livres numériques
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
