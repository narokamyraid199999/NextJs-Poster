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
      <header>
        <h1>Profile</h1>
      </header>

      <main>
        <p>main</p>
      </main>
    </>
  );
}
