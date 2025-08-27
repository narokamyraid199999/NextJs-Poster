import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import MealsDetailsSpinner from "@/components/meals-spinner";

const MealsDetailsLoader = async ({ meal }) => {
  await new Promise((resolve) => setTimeout(() => resolve(), 2000));

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;

  if (!mealSlug) {
    notFound();
  }

  const meal = await getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions?.replace(/\n/g, "<br />");

  return (
    <>
      <Suspense fallback={<MealsDetailsSpinner />}>
        <MealsDetailsLoader meal={meal}></MealsDetailsLoader>
      </Suspense>
    </>
  );
}
