import { useState } from "react"
import { useRecipes } from "../context/RecipeContext"
import RecipeList from "../components/RecipeList"
import Header from "../components/Header"
import RecipeDialog from "../components/Dialog/RecipeDialog"
import type { Recipe } from "../types/recipe"

export default function Favorites() {
  const { favorites } = useRecipes()
  
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleOpenDetails = (recipe: Recipe) => {
    setSelectedRecipe(recipe)
    setIsDialogOpen(true)
  }

  const handleCloseDetails = () => {
    setIsDialogOpen(false)
    setTimeout(() => setSelectedRecipe(null), 500)
  }

  return (
    <div className="min-h-screen text-black">
      <Header />

      <main className="pt-24 max-w-7xl mx-auto px-6">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center justify-center gap-3">
              My Favorites
            </h1>
            <p className="text-slate-700 mt-2">
              {favorites.length > 0 
                ? `You have ${favorites.length} saved recipes` 
                : "No favorites yet. Start exploring!"}
            </p>
          </div>
        </header>

        <section className="pb-20">
          {favorites.length > 0 ? (
            <RecipeList recipes={favorites} onSelect={handleOpenDetails} />
          ) : (
            <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-dashed border-slate-800">
              <p className="text-slate-500 text-lg">Your cookbook is empty.</p>
            </div>
          )}
        </section>
      </main>

      <RecipeDialog 
        recipe={selectedRecipe} 
        isOpen={isDialogOpen} 
        onClose={handleCloseDetails} 
      />
    </div>
  )
}