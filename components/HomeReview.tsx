"use client";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Review } from "@/types/Review";
import useFetchData from "@/functions/useFetchData";

export default function HomeReview() {
  const reviews: Review[] = useFetchData("/database/review/home");

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
