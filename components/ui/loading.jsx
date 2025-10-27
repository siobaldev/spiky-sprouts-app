export default function Loading({ count }) {
  return (
    <div className="flex items-center justify-center gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="h-[16rem] w-[9rem] animate-pulse rounded-2xl border-2 border-white/[0.05] bg-white/[0.02] shadow-itemCard duration-500 md:h-[20rem] md:w-[13rem]"
        />
      ))}
    </div>
  );
}
