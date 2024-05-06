"use client";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Review } from "@/types/Review";

export default function HomeReview() {
  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/database/review/home`);
      const json = await res.json();

      setReviews([...json]);
    })();
  }, []);

  return (
    <div className="columns is-centered">
      {reviews &&
        reviews.map((v) => (
          <div key={v.id} className="column is-one-third">
            <ReviewCard {...v} />
          </div>
        ))}
    </div>
  );
}
