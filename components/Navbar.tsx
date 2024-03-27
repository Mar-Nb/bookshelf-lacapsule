import { faBook, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold">
            <FontAwesomeIcon icon={faBook} /> BookShelf
          </a>

          <div className="flex space-x-12 items-center">
            <div className="flex space-x-4">
              <Link href="/" className="hover:text-gray-300">
                Accueil
              </Link>
              <Link href="/categories" className="hover:text-gray-300">
                Catégories
              </Link>
              <Link href="/about" className="hover:text-gray-300">
                À propos
              </Link>
            </div>

            <div className="relative">
              <Link href="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="hover:text-gray-300 cursor-pointer"
                />
                <span className="bg-red-500 text-white text-sm rounded-full px-2 absolute top-0 right-0 -mt-2 -mr-2">
                  ?
                </span>              
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
