"use client";

export default function Error() {
  return (
    <div className="flex w-full h-full flex-col items-center gap-y-8 justify-center mt-24">
      <p className="text-orange-400 text-7xl uppercase font-bold">
        an error occurred!{" "}
      </p>
      <p className="text-white text-xl capitalize font-medium">
        failed to fetch the meals data, please try again
      </p>
    </div>
  );
}
