export default function Loading() {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full z-50 bg-white">
      <div className="w-20 h-20 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
}
