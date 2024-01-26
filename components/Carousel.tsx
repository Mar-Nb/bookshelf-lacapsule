"use client";

import { useRef, useState } from "react";
import Review from "./Review";

export function Carousel({ reviews }: { reviews: (typeof Review)[] }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  return <div></div>;
}
