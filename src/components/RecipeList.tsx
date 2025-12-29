import type { Recipe } from "../types/recipe"
import RecipeCard from "./RecipeCard"

interface Props {
  recipes: Recipe[]
  onSelect: (recipe: Recipe) => void
}

export default function RecipeList({ recipes, onSelect }: Props) {
  if (recipes.length === 0) {
    return <p className="text-gray-500">No recipes found</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => onSelect(recipe)}
        />
      ))}
    </div>
  )
}
