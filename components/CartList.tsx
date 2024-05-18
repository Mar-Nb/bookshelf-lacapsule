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
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      const updatedItem = { ...prevItems[index], copy };
      const newItems = [...prevItems];
      newItems[index] = updatedItem;
      return newItems;
    });
  }

  function sumCart() {
    return cartItems
      .map((item) => item.price * item.copy)
      .reduce((acc, val) => acc + val, 0);
  }

  return (
    <>
      <div className="block">
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

      <div className="block">
        <p className="is-size-5">
          Total du panier :{" "}
          <span className="has-text-weight-semibold">{sumCart()} €</span>
        </p>
      </div>
    </>
  );
}
