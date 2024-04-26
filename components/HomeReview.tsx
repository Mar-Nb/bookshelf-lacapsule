"use client";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Review } from "@/types/Review";

export default function HomeReview() {
  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch("/database/review/home");
      const json = await res.json();

      setReviews([...json]);
    })();
  }, []);

  return (
    <div className="columns is-centered">
      {reviews &&
        reviews.map((v, i) => (
          <div key={i} className="column is-one-third">
            <ReviewCard key={v.id} {...v} />
          </div>
        ))}
    </div>
  );
}
