# 🍳 Food Recipe App

A modern, responsive recipe discovery application built with React, TypeScript, Tailwind CSS, and TheMealDB API.

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://food-recipe-app-two-lyart.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-v4-cyan?style=for-the-badge)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Problem Statement](#problem-statement)
- [Project Goals](#project-goals)
- [Technical Architecture](#technical-architecture)
- [Features](#features)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Challenges Faced](#challenges-faced)
- [What I Learned](#what-i-learned)
- [Future Improvements](#future-improvements)

---

## ❓ Problem Statement

### Who has the problem?

People looking for quick and simple recipe ideas often face cluttered cooking websites filled with ads, slow loading times, and poor mobile experiences.

### Why it matters?

Users want a fast, intuitive, and clean way to browse and save recipes without unnecessary distractions.

### Why this solution exists?

This project provides:

- A modern UI with clean aesthetics
- Fast recipe search functionality
- Persistent favorites system
- Clean mobile-first design
- Structured and maintainable React architecture

---

## 🎯 Project Goals

- [x] Build a scalable React + TypeScript application
- [x] Integrate a real-world external API
- [x] Implement a persistent favorites feature
- [x] Apply clean architecture principles
- [x] Use Tailwind CSS v4 professionally
- [x] Demonstrate debugging and configuration skills

---

## 🏗 Technical Architecture

### Frontend Structure

```
src/
├── components/          # Reusable UI components (RecipeCard, Header, Dialog, etc.)
├── pages/              # Route-level components (Home, Favorites)
├── context/            # Global state management (RecipeContext)
├── hooks/             # Custom hooks (useLocalStorage)
├── types/             # TypeScript interfaces
├── utils/             # Utility helpers (API calls, data mappers)
```

### Architecture Breakdown

| Directory | Purpose |
|-----------|---------|
| `components/` | Reusable UI components (RecipeCard, Header, Dialog, etc.) |
| `pages/` | Route-level components (Home, Favorites) |
| `context/` | Global state management using React Context API |
| `hooks/` | Custom hooks for reusable logic (useLocalStorage) |
| `types/` | TypeScript interfaces for type safety |
| `utils/` | Utility helpers for API calls and data mapping |

### API Communication

- Data fetched from **TheMealDB API**
- API responses mapped into a strongly typed Recipe model
- Error handling for failed requests
- Conditional rendering for loading states
- Clean separation between API logic and UI components

### State Management Strategy

The application uses:

1. **React Context API** - for global favorites state
2. **Custom useLocalStorage hook** - for persistence
3. **Automatic synchronization** - between UI and localStorage

This ensures favorites remain saved even after page refresh.

---

## ✨ Features

### 🔍 Recipe Search

- Search recipes by name
- Dynamic rendering of results
- Modern card-based layout

### 📖 Recipe Details

- Image preview with high-quality visuals
- Complete ingredients list
- Step-by-step cooking instructions
- Modal dialog interface for smooth UX

### ❤️ Favorites System

- Add/remove recipes from favorites
- Dynamic badge counter in header
- Dedicated Favorites page
- Persistent storage using localStorage

### 📱 Responsive Design

- Mobile-first layout approach
- Sticky gradient header
- Flexible card grid system
- Smooth hover transitions

### 🎨 UI Enhancements

- Tailwind utility-based styling
- Gradient header design
- Interactive hover states
- Clean spacing and layout system
- Loading states and error handling

---

## 🚀 Live Demo

🔗 **Live Demo URL**: [https://food-recipe-app-two-lyart.vercel.app/](https://food-recipe-app-two-lyart.vercel.app/)

---

## 💻 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ciara-gospel/food-recipe-app.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd food-recipe-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### ⚙ Tailwind Configuration

This project uses Tailwind CSS v4 with PostCSS.

**index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**postcss.config.cjs**
```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}
```

---

## 🔧 Challenges Faced

### Frontend Challenge

Structuring reusable components (RecipeCard, Dialog, Favorites) without tight coupling while keeping state clean and predictable.

### State Management Challenge

Designing a global favorites system using Context while maintaining persistent storage with localStorage.

### Debugging Experience

**Tailwind v4 configuration issue:**

Using `require()` inside `tailwind.config.ts` prevented Tailwind from generating styles silently.

**Solution:**

Switching to proper ESM imports fixed the issue.

---

## 📚 What I Learned

### Technical Lessons

- Strong typing external APIs with TypeScript
- Proper Context API usage for global state
- Tailwind v4 configuration in Vite
- Debugging PostCSS and build pipeline issues

### Workflow Lessons

- Structured debugging approach
- Dependency verification strategies
- Clean restart processes with Vite

### Code Organization Lessons

- Clear separation of concerns
- Scalable folder structure
- Custom hooks for reusable logic

---

## 🚧 Future Improvements

- [ ] User authentication system
- [ ] Backend integration for cloud-stored favorites
- [ ] Advanced filtering (category, region, ingredients)
- [ ] Dark mode support
- [ ] Unit testing with Vitest
- [ ] Lazy loading for performance optimization
- [ ] Advanced animations with Framer Motion
- [ ] Recipe categories and collections
- [ ] Shopping list feature
- [ ] Social sharing capabilities

---

## 🏅 Project Highlights

✅ Real-world API integration  
✅ Global state management with React Context  
✅ Persistent user data with localStorage  
✅ Responsive mobile-first UI  
✅ Clean architecture and separation of concerns  
✅ Modern Tailwind CSS v4 usage  
✅ Type-safe implementation with TypeScript  

---

## 👩‍💻 Author

**Developed by Arlette Ologuie**

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the free recipe API
- React, Vite, and Tailwind CSS communities for excellent documentation
