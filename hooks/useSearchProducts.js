"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useSearchProducts = (searchQuery) => {
  return useQuery({
    queryKey: ["products", "search", searchQuery],
    queryFn: async () => {
      const params = new URLSearchParams({ query: searchQuery });
      const response = await fetch(`/api/products/search?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }

      return response.json();
    },
    enabled: !!searchQuery,
    staleTime: 30000,
  });
};

export function useDebouncedProductSearch(searchQuery, debounceMs = 500) {
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [searchQuery, debounceMs]);

  return useSearchProducts(debouncedQuery);
}
