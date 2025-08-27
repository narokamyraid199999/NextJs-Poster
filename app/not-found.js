"use client";
export default function NotFound() {
  return (
    <div className="flex w-full h-full flex-col items-center gap-y-8 justify-center mt-24">
      <p className="text-orange-400 text-7xl uppercase font-bold">not found </p>
      <p className="text-white text-xl capitalize font-medium">
        unfortunately, we could not find the requested page or resource.
      </p>
    </div>
  );
}
