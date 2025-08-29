import ShareMeals from "@/components/meals/share-meals";

export const generateMetadata = () => {
  return {
    title: "share your meals",
    description: "you can share your favorite meals with the others.",
  };
};

export default function SahreMealsPage() {
  return <ShareMeals></ShareMeals>;
}
