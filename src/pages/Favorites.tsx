import { useRecipes } from "../context/RecipeContext"
import RecipeList from "../components/RecipeList"

export default function Favorites() {
  const { favorites } = useRecipes()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Favorites ❤️</h1>
      <RecipeList recipes={favorites} onSelect={() => {}} />
    </div>
  )
}
