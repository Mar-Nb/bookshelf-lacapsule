"use client";

import { Article } from "@/types/Cart";
import { useEffect, useState } from "react";
import CartArticle from "./CartArticle";

export default function CartList() {
  const [cartItems, setCartItems] = useState<Article[]>();

  useEffect(() => {
    (async () => await fetchArticles())();
  }, []);

  async function fetchArticles() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/database/cart`,
    );
    const json = await res.json();
    setCartItems(json);
  }

  async function deleteArticle(id: string) {
    if (!id.length) {
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/database/cart?id=${id}`,
      { method: "DELETE" },
    );
    const json = await res.json();
    console.log(json);
    setCartItems(cartItems?.filter((item) => item.id !== id));
  }

  return (
    <div>
      {cartItems &&
        cartItems.map((item) => (
          <CartArticle
            key={item.id}
            article={item}
            delete={() => deleteArticle(item.id ?? "")}
          />
        ))}
    </div>
  );
}
