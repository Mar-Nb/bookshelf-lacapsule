import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faArrowRight,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookshelf - La Capsule",
  description: "Projet de La Capsule - Postgre et opérations CRUD",
};

library.add(faSearch, faArrowRight, faPlus);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.className} text-white items-center gap-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black`}>{children}</body>
    </html>
  );
}
