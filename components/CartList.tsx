"use client";

import { Article } from "@/types/Cart";
import { useEffect, useState } from "react";
import CartArticle from "./CartArticle";

export default function CartList() {
  const [cartItems, setCartItems] = useState<Article[]>([]);
  
  useEffect(() => {
    (async () => await fetchArticles())();
  }, []);

  async function fetchArticles() {
    const res = await fetch("/database/cart");
    const json = await res.json();
    setCartItems(json);
  }

  async function deleteArticle(id: string) {
    if (!id.length) {
      return;
    }

    await fetch(`/database/cart?id=${id}`, { method: "DELETE" });
    setCartItems(cartItems?.filter((item) => item.id !== id));
  }

  async function updateArticle(id: string, copy: number) {
    await fetch("/database/cart", {
      method: "PUT",
      body: JSON.stringify({ id, copy }),
      headers: { "Content-Type": "application/json" },
    });
    setCartItems(prevItems => {
      const index = prevItems.findIndex(item => item.id === id);
      const updatedItem = {...prevItems[index], copy };
      const newItems = [...prevItems];
      newItems[index] = updatedItem;
      return newItems;
    });
  }

  return (
    <div>
      {cartItems &&
        cartItems.map((item) => (
          <CartArticle
            key={item.id}
            article={item}
            delete={() => deleteArticle(item.id)}
            update={(updatedValue) => updateArticle(item.id, updatedValue)}
          />
        ))}
    </div>
  );
}
