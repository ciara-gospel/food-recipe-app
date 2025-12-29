import { useState } from "react"
import { useRecipes } from "../context/RecipeContext"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import RecipeList from "../components/RecipeList"
import RecipeDialog from "../components/Dialog/RecipeDialog"
import RecipeFormModal from "../components/Dialog/RecipeFormModal"
import { Plus } from "lucide-react"
import type { Recipe } from "../types/recipe"

export default function Home() {
  const { recipes, search, addRecipe } = useRecipes()
  const [query, setQuery] = useState("")
  
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleSearch = (value: string) => {
    setQuery(value)
    search(value)
  }

  const handleOpenDetails = (recipe: Recipe) => {
    setSelectedRecipe(recipe)
    setIsDialogOpen(true)
  }

  const handleCloseDetails = () => {
    setIsDialogOpen(false)
    setTimeout(() => setSelectedRecipe(null), 500)
  }

  const handleCreateRecipe = (newRecipe: Recipe) => {
    addRecipe(newRecipe)
    setIsFormOpen(false)
  }

  return (
    <div className="min-h-screen text-black transition-colors duration-300">
      <Header />
      
      <main className="pt-24 max-w-7xl mx-auto px-6 space-y-12">
        
        <section className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Find your next <span className="text-indigo-500">favorite meal</span>
          </h2>
          <p className="text-slate-700 text-lg">
            Search through hundreds of recipes or create your own masterpiece.
          </p>
          <div className="pt-4 max-w-2xl mx-auto">
            <SearchBar value={query} onChange={handleSearch} />
          </div>
        </section>

        <section className="pb-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Recipes</h3>
            <p className="text-sm text-slate-700">{recipes.length} recipes found</p>
          </div>
          
          <RecipeList recipes={recipes} onSelect={handleOpenDetails} />
        </section>

      </main>

      <button 
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(79,70,229,0.4)] transition-all hover:scale-105 active:scale-95 group"
      >
        <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        <span className="font-bold">Add Recipe</span>
      </button>

      <RecipeFormModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleCreateRecipe}
      />

      <RecipeDialog 
        recipe={selectedRecipe} 
        isOpen={isDialogOpen} 
        onClose={handleCloseDetails} 
      />
    </div>
  )
}