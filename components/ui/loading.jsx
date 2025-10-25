export default function Loading({ count }) {
  return (
    <div className="flex items-center justify-center gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="shadow-itemCard h-64 w-36 animate-pulse rounded-2xl border-2 border-white/5 bg-white/2 duration-500 md:h-80 md:w-52"
        />
      ))}
    </div>
  );
}
