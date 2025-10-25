export default function ProductLoading() {
  return (
    <div className="min-h-screen w-full">
      <div className="mb-4 max-w-7xl space-y-8 md:mb-8">
        <div className="mb-8 flex gap-2">
          <div className="h-5 w-12 animate-pulse rounded bg-white/10"></div>
          <span className="text-white/40">/</span>
          <div className="h-5 w-8 animate-pulse rounded bg-white/10"></div>
          <span className="text-white/40">/</span>
          <div className="h-5 w-20 animate-pulse rounded bg-white/10"></div>
        </div>
      </div>
      <div className="flex flex-col gap-y-10 md:gap-y-14 lg:gap-y-16 xl:gap-y-20">
        <div className="max-w-7xl">
          <div className="bg-button/10 flex h-128 w-full flex-col gap-8 rounded-3xl p-6 sm:p-8 md:p-12 lg:flex-row lg:gap-12 lg:p-16" />
        </div>

        <div className="mb-8 flex flex-col gap-y-2">
          <div className="h-8 w-60 animate-pulse rounded bg-white/10"></div>
          <div className="h-6 w-[180px] animate-pulse rounded bg-white/10"></div>
          <div className="h-6 w-[180px] animate-pulse rounded bg-white/10"></div>
          <div className="h-6 w-[180px] animate-pulse rounded bg-white/10"></div>
          <div className="h-6 w-[180px] animate-pulse rounded bg-white/10"></div>
        </div>
      </div>
    </div>
  );
}
