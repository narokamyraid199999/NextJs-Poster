"use client";

import { useFormStatus } from "react-dom";

export default function ShareMealButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      {pending ? (
        <span className="w-8 h-8 border-b-2 border-t-2 rounded-full border-white inline-block animate-spin"></span>
      ) : (
        <span>Share Meal</span>
      )}
    </button>
  );
}
