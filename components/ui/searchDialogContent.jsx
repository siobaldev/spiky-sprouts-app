import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { useDebouncedProductSearch } from "@/hooks/useSearchProducts";

export default function SearchDialogContent({ setOpen, setMobileNavOpen }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    data: products,
    isLoading,
    isFetching,
    error,
  } = useDebouncedProductSearch(searchQuery);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    setDisplayProducts(products || []); // Add fallback to empty array
  }, [products]);

  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.matchMedia("(max-width: 1024px)").matches;
  }

  const handleSelect = (product) => {
    router.push(`/category/All/product/${product.slug}`);
    setOpen(false);
    setSearchQuery("");
    {
      isMobile ? setMobileNavOpen(false) : "";
    }
  };

  useEffect(() => {
    if (searchQuery === "") {
      setDisplayProducts([]);
    }
    setActiveIndex(0);
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && products && products.length > 0) {
      handleSelect(products[0]);
    }
  };

  const handleKeyDown = (e) => {
    if (!products?.length > 0) return;

    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();

      if (e.key === "ArrowDown") {
        setActiveIndex((index) =>
          index < products?.length - 1 ? index + 1 : index,
        );
      } else {
        setActiveIndex((index) => (index > 0 ? index - 1 : index));
      }
    } else if (e.key === "Enter") {
      handleSelect(products[activeIndex]);
    }
  };

  return (
    <DialogContent
      onKeyDown={handleKeyDown}
      className="border-0 bg-primary shadow-lg"
    >
      <DialogHeader>
        <DialogTitle className="text-left">Search Plant</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <div className="flex w-full items-center border-b border-accent/20 md:px-3">
          <Search className="text-white/60" />
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            name="search"
            autoComplete="off"
            placeholder="Search plants..."
            className="w-full bg-transparent px-3 py-3 outline-none placeholder:text-white/60"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-sm hover:text-white/100"
            >
              Clear
            </button>
          )}
        </div>
      </form>
      <div className="mt-2">
        {isLoading && (
          <p className="py-6 text-center text-sm text-white/60">Searching...</p>
        )}

        {error && (
          <p className="py-6 text-center text-sm text-red-400">
            Error loading results. Please try again.
          </p>
        )}

        {searchQuery && products?.length > 0 ? (
          <div className="space-y-1">
            {(displayProducts || []).map((product, index) => (
              <button
                key={product.id}
                onClick={() => handleSelect(product)}
                className={`flex w-full items-center rounded-lg px-3 py-2 text-sm transition-colors ${index === activeIndex ? "bg-accent/10" : "hover:bg-accent/10"}`}
              >
                <div>
                  <p className="font-medium">{product.name}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          !isFetching &&
          searchQuery &&
          products?.length === 0 && (
            <p className="py-6 text-center text-sm text-white/38 lg:text-base">
              No plants found
            </p>
          )
        )}
      </div>
    </DialogContent>
  );
}
