export default function Loading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center min-w-full min-h-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
    </div>
  );
}
