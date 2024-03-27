import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav className="p-4 fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
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
  );
}
