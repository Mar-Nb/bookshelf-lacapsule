import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faBook,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookshelf - La Capsule",
  description: "Projet de La Capsule - Postgre et opérations CRUD",
};

library.add(faBook, faCartShopping, faSearch);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
