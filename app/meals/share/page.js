import classes from "./page.module.css";
import ImagePicker from "@/components/meals/image-picker";
import ShareMealButton from "@/components/meals/share-meal-button";
import { handleForm } from "@/lib/action";

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={handleForm}>
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
          <ImagePicker label="Your Image" name="image" />
          <div className={classes.actions}>
            <div className="flex justify-end">
              <ShareMealButton></ShareMealButton>
              {/* <button className="flex gap-x-4 items-center" type="submit">
                <div>
                  <span>Share Meal</span>
                  <span className="w-8 h-8 border-b-2 border-t-2 rounded-full border-white animate-spin"></span>
                </div>
              </button> */}
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
