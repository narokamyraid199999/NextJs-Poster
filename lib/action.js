"use server";
import { notFound, redirect } from "next/navigation";
import { saveMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";

const validateForm = (form) => {
  let isValid = true;
  Object.keys(form).forEach((key) => {
    if (key.includes("image") && form[key].size == 0) {
      isValid = false;
    } else if (key.includes("creator_email") && !form[key].includes("@")) {
      isValid = false;
    } else if (!form[key]) {
      isValid = false;
    }
  });
  return isValid;
};

export async function handleForm(prevState, formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (!validateForm(meal)) notFound();

  try {
    await saveMeal(meal);
  } catch (e) {
    return {
      message: "invalid food title, please use diffrent one!",
    };
  }
  revalidatePath("/meals", "layout");
  redirect("/meals");
}
