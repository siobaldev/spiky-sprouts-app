"use client";

import { useQuery } from "@tanstack/react-query";

export const UseProduct = (slug) => {
  return useQuery({
    queryKey: ["product", slug],

    queryFn: async () => {
      const response = await fetch(`/api/products/${slug}`);

      if (!response.ok) {
        throw new Error("Product not found");
      }

      return response.json();
    },

    staleTime: 10 * 60 * 1000,
    enabled: !!slug,
  });
};
