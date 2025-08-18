import Link from "next/link";

const getColor = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("red");
    }, 1000);
  });
};

export default async function Profile() {
  const color = await getColor();
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Profile</h1>
          <Link
            className="py-2 px-4 bg-blue-600 text-center text-white rounded-md mt-6 font-semibold"
            href="/"
          >
            Home
          </Link>
        </div>
      </main>
    </>
  );
}
