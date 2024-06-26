import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "Bookshelf | %s",
    default: "Bookshelf | La Capsule",
  },
  description: "Projet de La Capsule - Postgres et opérations CRUD",
};

library.add(faPlus);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="has-navbar-fixed-top">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
