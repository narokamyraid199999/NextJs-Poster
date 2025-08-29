"use client";

import classes from "./share-meals.module.css";
import ImagePicker from "@/components/meals/image-picker";
import ShareMealButton from "@/components/meals/share-meal-button";
import { handleForm } from "@/lib/action";
import { useActionState } from "react";

export default function ShareMeals() {
  const [state, formAction] = useActionState(handleForm, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          {state.message && (
            <p className="bg-red-500 text-white rounded-sm p-2 mb-3">
              {state.message}
            </p>
          )}
          <ImagePicker label="Your Image" name="image" />
          <div className={classes.actions}>
            <div className="flex justify-end">
              <ShareMealButton></ShareMealButton>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
