import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { plants } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/page";
import { Search } from "lucide-react";

export default function SearchBar({ setMovileNavOpen }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.matchMedia("(max-width: 1024px)").matches;
  }

  const searchPlants = query
    ? plants
        .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5)
    : [];

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleSelect = (plant) => {
    router.push(`/category/All/product/${plant.slug}`);
    setQuery("");
    setOpen(false);
    {
      isMobile ? setMovileNavOpen(false) : "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && searchPlants.length > 0) {
      handleSelect(searchPlants[0]);
    }
  };

  const handleKeyDown = (e) => {
    if (!searchPlants.length) return;

    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();

      if (e.key === "ArrowDown") {
        setActiveIndex((index) =>
          index < searchPlants.length - 1 ? index + 1 : index,
        );
      } else {
        setActiveIndex((index) => (index > 0 ? index - 1 : index));
      }
    } else if (e.key === "Enter") {
      handleSelect(searchPlants[activeIndex]);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen} className="mx-2">
        <DialogTrigger asChild>
          <button className="flex h-12 flex-row items-center justify-between rounded-lg border-2 border-white/[0.05] bg-white/[0.02] py-2 font-medium text-white/60 placeholder:opacity-60 sm:w-60 md:w-72 lg:w-72">
            <div className="flex flex-row items-center gap-x-2 px-2 lg:px-4">
              <Search className="size-5 transform text-white/60 max-[380px]:size-4 lg:size-6" />
              <span className="text-sm max-[380px]:text-xs md:text-base lg:pl-1 lg:text-base">
                Looking for something?
              </span>
            </div>
          </button>
        </DialogTrigger>
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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                name="search"
                autoComplete="off"
                placeholder="Search plants..."
                className="w-full bg-transparent px-3 py-3 outline-none placeholder:text-white/60"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-sm hover:text-white/100"
                >
                  Clear
                </button>
              )}
            </div>
          </form>
          <div className="mt-2">
            {query && searchPlants.length > 0 ? (
              <div className="space-y-1">
                {searchPlants.map((plant, index) => (
                  <button
                    key={plant.id}
                    onClick={() => handleSelect(plant)}
                    className={`flex w-full items-center rounded-lg px-3 py-2 text-sm transition-colors ${index === activeIndex ? "bg-accent/10" : "hover:bg-accent/10"}`}
                  >
                    <div>
                      <p className="font-medium">{plant.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              query && (
                <p className="py-6 text-center text-sm text-white/38 lg:text-base">
                  No plants found
                </p>
              )
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
