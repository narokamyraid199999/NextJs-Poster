import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsSpinner from "@/components/meals-spinner";

const MealsLoader = async () => {
  const meals = await getMeals();

  await new Promise((resolve) =>
    setTimeout(function () {
      resolve();
    }, 500)
  );
  return <MealsGrid meals={meals} />;
};

export default function MealsPage() {
  return (
    <>
      <header className={`${classes.header}`}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsSpinner />}>
          <MealsLoader></MealsLoader>
        </Suspense>
      </main>
    </>
  );
}
