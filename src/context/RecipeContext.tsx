import { createContext, useContext, useState, useEffect } from "react"
import type { Recipe } from "../types/recipe"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { mapMealToRecipe } from "../utils/mealMapper"
import { searchMeals } from "../utils/mealApi"

interface RecipeContextType {
  recipes: Recipe[]
  favorites: Recipe[]
  myRecipes: Recipe[]
  search: (query: string) => Promise<void>
  toggleFavorite: (recipe: Recipe) => void
  addRecipe: (recipe: Recipe) => void
  updateRecipe: (recipe: Recipe) => void
  deleteRecipe: (id: string) => void
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined)

export function RecipeProvider({ children }: { children: React.ReactNode }) {
  const [apiRecipes, setApiRecipes] = useState<Recipe[]>([])
  const [favorites, setFavorites] = useLocalStorage<Recipe[]>("favorites", [])
  const [myRecipes, setMyRecipes] = useLocalStorage<Recipe[]>("my-recipes", [])

  const recipes = [...myRecipes, ...apiRecipes]

  useEffect(() => {
    const fetchInitialRecipes = async () => {
      await search("b") 
    }
    fetchInitialRecipes()
  }, [])

  const search = async (query: string) => {
    const searchTerm = query.trim() || "b"

    const meals = await searchMeals(searchTerm)
    
    if (meals) {
      const mapped = meals.map((meal: any) =>
        mapMealToRecipe(
          meal,
          favorites.some(f => f.id === meal.idMeal)
        )
      )
      setApiRecipes(mapped)
    } else {
      setApiRecipes([])
    }
  }

  const addRecipe = (recipe: Recipe) => {
    setMyRecipes(prev => [recipe, ...prev])
  }

  const updateRecipe = (updatedRecipe: Recipe) => {
    setMyRecipes(prev => prev.map(r => r.id === updatedRecipe.id ? updatedRecipe : r))
    setFavorites(prev => prev.map(r => r.id === updatedRecipe.id ? { ...updatedRecipe, isFavorite: true } : r))
  }

  const deleteRecipe = (id: string) => {
    setMyRecipes(prev => prev.filter(r => r.id !== id))
    setFavorites(prev => prev.filter(r => r.id !== id))
  }

  const toggleFavorite = (recipe: Recipe) => {
    setFavorites(prev => {
      const exists = prev.find(r => r.id === recipe.id)
      if (exists) return prev.filter(r => r.id !== recipe.id)
      return [...prev, { ...recipe, isFavorite: true }]
    })

    setApiRecipes(prev => prev.map(r => r.id === recipe.id ? { ...r, isFavorite: !r.isFavorite } : r))
    setMyRecipes(prev => prev.map(r => r.id === recipe.id ? { ...r, isFavorite: !r.isFavorite } : r))
  }

  return (
    <RecipeContext.Provider
      value={{ 
        recipes, 
        favorites, 
        myRecipes, 
        search, 
        toggleFavorite, 
        addRecipe, 
        updateRecipe, 
        deleteRecipe 
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

export function useRecipes() {
  const context = useContext(RecipeContext)
  if (!context) throw new Error("useRecipes must be used within RecipeProvider")
  return context
}