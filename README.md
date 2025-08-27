# NextLevel Food - Next.js Recipe App

A delicious recipe sharing application built with [Next.js](https://nextjs.org/). Food lovers can discover, share, and explore recipes from around the world in a beautiful, modern interface.

## Features

- **Discover Meals:** Browse a curated collection of delicious recipes
- **Recipe Details:** View detailed recipe information including ingredients, instructions, and creator details
- **Community:** Join a community of food enthusiasts and share your passion for cooking
- **Share Recipes:** Contribute your favorite recipes to the community
- **Responsive Design:** Modern UI that works perfectly on all devices
- **Image Slideshow:** Beautiful food photography showcase on the homepage

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [SQLite](https://www.sqlite.org/) (better-sqlite3) for data storage
- [Framer Motion](https://www.framer.com/motion/) for animations

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

   Visit [http://localhost:3000](http://localhost:3000) to explore delicious recipes.

## Usage

- **Homepage:** View featured recipes in an image slideshow and learn about the platform
- **Meals:** Browse all available recipes with beautiful imagery and descriptions
- **Recipe Details:** Click on any meal to see full recipe instructions, ingredients, and creator information
- **Community:** Join the food community and discover cooking events
- **Share:** Contribute your own recipes to the community (feature coming soon)

## Project Structure

- `app/` - Next.js app directory with pages and routing
  - `meals/` - Recipe browsing and individual recipe pages
  - `community/` - Community features and events
  - `globals.css` - Global styles (Tailwind CSS)
- `components/` - Reusable UI components
  - `images/` - Image slideshow components
  - `meals/` - Recipe-related components
  - `main-header/` - Navigation and header components
- `lib/` - Database utilities and data fetching
- `assets/` - Food images and icons
- `public/` - Static assets and food photography

## Database

The app uses SQLite with better-sqlite3 for storing recipe data, including:

- Recipe titles and descriptions
- Cooking instructions
- Creator information
- Recipe images and slugs

## Customization

You can easily extend this project by:

- Adding user authentication
- Implementing recipe search and filtering
- Adding recipe categories and tags
- Enhancing the sharing functionality
- Adding recipe ratings and reviews

## License

This project is open source and free to use.
