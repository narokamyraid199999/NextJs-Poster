export default function PostHeader({ openModal }) {
  return (
    <>
      {/* header */}
      <div className="pt-20 flex flex-wrap justify-center gap-y-6 md:gap-y-0 md:justify-between items-center border-b-2 border-white pb-12">
        <div className="flex items-center gap-6">
          <img
            className="w-12 h-12"
            src="https://cdn-icons-png.flaticon.com/512/291/291101.png"
            alt="React Poster"
          />
          <p className="text-4xl font-bold text-[#ddd8e4]">React Poster</p>
        </div>

        <div>
          <button
            className="bg-white text-black px-6 py-2 rounded-md shadow-sm border-none bg-gradient-to-r from-purple-300 to-purple-400 hover:cursor-pointer"
            onClick={openModal}
          >
            <span className="flex items-center gap-2 font-bold ">
              <span className="text-2xl ">+</span>
              <span className="">New Post</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
