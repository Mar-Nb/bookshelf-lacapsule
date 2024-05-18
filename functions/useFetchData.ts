"use client";

import { useEffect, useState } from "react";

export default function useFetchData(url: string): any {
  const [data, setData] = useState();
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await response.json();
        setData(json);
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", error);
        }
      }

      return () => {
        controller.abort();
      };
    })();
  }, [url]);

  return data;
}
