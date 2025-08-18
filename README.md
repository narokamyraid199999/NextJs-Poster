# NextJs Posts App

A simple post management application built with [Next.js](https://nextjs.org/). Users can create, edit, and delete their own posts in a clean, modern interface.

## Features

- **Create Posts:** Add new posts with a title and subject.
- **Edit Posts:** Update existing posts easily.
- **Delete Posts:** Remove posts you no longer want.
- **Responsive UI:** Modern design with Tailwind CSS, works on all devices.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**

   Visit [http://localhost:3000](http://localhost:3000) to use the app.

## Usage

- Click the **New Post** button to add a post.
- Use the edit (✏️) and delete (❌) buttons on each post card to manage your posts.
- All data is stored in memory (no backend/database), so posts will reset on page reload.

## Project Structure

- `app/` - Next.js app directory (pages, layout, profile)
- `components/` - Reusable UI components (Modal, PostCard, PostHeader, etc.)
- `public/` - Static assets
- `app/globals.css` - Global styles (Tailwind CSS)

## Customization

You can easily extend this project by adding authentication, connecting to a backend, or enhancing the post model.

## License

This project is open source and free to use.
