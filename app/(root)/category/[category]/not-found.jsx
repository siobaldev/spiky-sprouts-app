import React from "react";

export default function NotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-bold">Category Not Found</h2>
      <p className="mb-6 text-gray-600">
        The category you're looking for doesn't exist.
      </p>
      <div className="flex gap-4">
        <a
          href="/"
          className="rounded-md bg-green-700 px-6 py-2 text-white transition-colors hover:bg-green-800"
        >
          Go Home
        </a>
        <a
          href="/category?category=all"
          className="rounded-md border border-green-700 px-6 py-2 text-green-700 transition-colors hover:bg-green-50"
        >
          View All Plants
        </a>
      </div>
    </div>
  );
}
