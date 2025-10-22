"use client";

import { useQuery } from "@tanstack/react-query";

export const UseProducts = (tag = "All") => {
  return useQuery({
    queryKey: ["products", tag],
    queryFn: async () => {
      const response = await fetch(`/api/products?tag=${tag}`);
      return response.json();
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
