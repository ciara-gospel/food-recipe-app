- Food Recipe App

A modern, responsive recipe discovery application built with React, TypeScript, Tailwind CSS, and TheMealDB API.


1- Overview

Food Recipe App is a frontend-focused project designed to provide a clean, fast, and user-friendly way to discover and save recipes.

It demonstrates:

*API integration

*Global state management with Context

*Persistent favorites system

*Scalable project architecture

*Modern responsive UI with Tailwind CSS


 2. Problem Statement

People looking for quick and simple recipe ideas often face cluttered cooking websites filled with ads, slow loading times, and poor mobile experiences.

Why does it matter?

Users want a fast, intuitive, and clean way to browse and save recipes without unnecessary distractions.

Why does this solution exist?

This project provides:

- A modern UI

- Fast recipe search

- Persistent favorites

- Clean mobile-first design

- Structured and maintainable React architecture
  

 3. Project Goals

Build a scalable React + TypeScript application

Integrate a real-world external API

Implement a persistent favorites feature

Apply clean architecture principles

Use Tailwind CSS v4 professionally

Demonstrate debugging and configuration skills


 4. Technical Architecture

# Frontend Structure

src/
 ├── components/
 ├── pages/
 ├── context/
 ├── hooks/
 ├── types/
 ├── utils/
 
Architecture Breakdown

components/ → Reusable UI components (RecipeCard, Header, Dialog, etc.)

pages/ → Route-level components (Home, Favorites)

context/ → Global state management (RecipeContext)

hooks/ → Custom hooks (useLocalStorage)

types/ → TypeScript interfaces

utils/ → Utility helpers

This structure ensures scalability and maintainability.

- API Communication

Data fetched from TheMealDB API

API responses mapped into a strongly typed Recipe model

Error handling for failed requests

Conditional rendering for loading states

Clean separation between API logic and UI components

- State Management Strategy

The application uses:

React Context API for global favorites state

A custom useLocalStorage hook for persistence

Automatic synchronization between UI and localStorage

This ensures favorites remain saved even after page refresh.

- Tech Stack
Frontend

React 18

TypeScript

Vite

Tailwind CSS v4

React Router DOM

State Management

React Context API

Persistence

LocalStorage

External API

TheMealDB
https://www.themealdb.com/api.php


 5. Features

 * Recipe Search

* Search recipes by name

* Dynamic rendering of results

* Modern card-based layout

- Recipe Details

Image preview

Ingredients list

Cooking instructions

Modal dialog interface

- Favorites System

Add / remove recipes

Dynamic badge in header

Dedicated Favorites page

Persistent storage using localStorage

- Responsive Design

Mobile-first layout

Sticky gradient header

Flexible card grid

Smooth hover transitions

- UI Enhancements

Tailwind utility-based styling

Gradient header design

Interactive hover states

Clean spacing and layout system


- Live Demo

[https://your-live-demo-link.com
](https://food-recipe-app-two-lyart.vercel.app/)

- Installation
  
 * Clone the repository
git clone https://github.com/ciara-gospel/food-recipe-app.git
* cd food-recipe-app
* Install dependencies
npm install
  * Start development server
npm run dev
⚙ Tailwind Configuration

This project uses Tailwind CSS v4 with PostCSS.

index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
postcss.config.cjs
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}
 6. Challenges Faced
 Frontend Challenge

Structuring reusable components (RecipeCard, Dialog, Favorites) without tight coupling while keeping state clean and predictable.

 State Management Challenge

Designing a global favorites system using Context while maintaining persistent storage with localStorage.

 Debugging Experience

Tailwind v4 configuration issue:
Using require() inside tailwind.config.ts prevented Tailwind from generating styles silently.

Solution:
Switching to proper ESM imports fixed the issue.

 7. What I Learned
Technical Lessons

Strong typing external APIs with TypeScript

Proper Context API usage

Tailwind v4 configuration in Vite

Debugging PostCSS and build pipeline issues

Workflow Lessons

Structured debugging approach

Dependency verification strategies

Clean restart processes with Vite

Code Organization Lessons

Clear separation of concerns

Scalable folder structure

Custom hooks for reusable logic

 8. Future Improvements

* User authentication

* Backend integration for cloud-stored favorites

* Advanced filtering (category, region)

* Dark mode support

* Unit testing with Vitest

* Lazy loading for performance optimization

* Advanced animations (Framer Motion)

* Project Highlights

✔ Real-world API integration
✔ Global state management
✔ Persistent user data
✔ Responsive UI
✔ Clean architecture
✔ Modern Tailwind CSS usage
✔ Type-safe implementation

- Author

Developed by Arlette Ologuie
