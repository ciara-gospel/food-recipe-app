import { createContext, useContext, useState } from "react"
import type { Recipe } from "../types/recipe"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { mapMealToRecipe } from "../utils/mealMapper"
import { searchMeals } from "../utils/mealApi"

interface RecipeContextType {
  recipes: Recipe[]
  favorites: Recipe[]
  search: (query: string) => Promise<void>
  toggleFavorite: (recipe: Recipe) => void
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined)

export function RecipeProvider({ children }: { children: React.ReactNode }) {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [favorites, setFavorites] = useLocalStorage<Recipe[]>("favorites", [])

  const search = async (query: string) => {
    if (!query) {
      setRecipes([])
      return
    }

    const meals = await searchMeals(query)
    const mapped = meals.map((meal: any) =>
      mapMealToRecipe(
        meal,
        favorites.some(f => f.id === meal.idMeal)
      )
    )

    setRecipes(mapped)
  }

  const toggleFavorite = (recipe: Recipe) => {
    setFavorites(prev => {
      const exists = prev.find(r => r.id === recipe.id)
      if (exists) {
        return prev.filter(r => r.id !== recipe.id)
      }
      return [...prev, { ...recipe, isFavorite: true }]
    })

    setRecipes(prev =>
      prev.map(r =>
        r.id === recipe.id
          ? { ...r, isFavorite: !r.isFavorite }
          : r
      )
    )
  }

  return (
    <RecipeContext.Provider
      value={{ recipes, favorites, search, toggleFavorite }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

export function useRecipes() {
  const context = useContext(RecipeContext)
  if (!context) {
    throw new Error("useRecipes must be used within RecipeProvider")
  }
  return context
}
