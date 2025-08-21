import "./globals.css";
import Header from "../components/header/page";

export const metadata = {
  title: "Foodie Meals",
  description: "Discover delicious Meals and Recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
