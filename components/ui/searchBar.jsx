import React, { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";

const LazySearchDialogContent = dynamic(() => import("./searchDialogContent"), {
  ssr: false,
});

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  const prefetchDialog = () => {
    import("./searchDialogContent");
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen} className="mx-2">
        <DialogTrigger asChild>
          <button
            onMouseEnter={prefetchDialog}
            onFocus={prefetchDialog}
            className="flex h-12 flex-row items-center justify-between rounded-lg border-2 border-white/[0.05] bg-white/[0.02] py-2 font-medium text-white/60 placeholder:opacity-60 sm:w-60 md:w-72 lg:w-72"
          >
            <div className="flex flex-row items-center gap-x-2 px-2 lg:px-4">
              <Search className="size-5 transform text-white/60 max-[380px]:size-4 lg:size-6" />
              <span className="text-sm max-[380px]:text-xs md:text-base lg:pl-1 lg:text-base">
                Looking for something?
              </span>
            </div>
          </button>
        </DialogTrigger>
        <LazySearchDialogContent setOpen={setOpen} />
      </Dialog>
    </>
  );
}
