import type { Recipe } from "../types/recipe"
import { Heart } from "lucide-react"
import { useRecipes } from "../context/RecipeContext"

interface Props {
  recipe: Recipe
}

export default function FavoriteButton({ recipe }: Props) {
  const { toggleFavorite } = useRecipes()

  return (
    <button
      onClick={e => {
        e.stopPropagation()
        toggleFavorite(recipe)
      }}
    >
      <Heart
        className={`w-5 h-5 ${
          recipe.isFavorite
            ? "fill-red-500 text-red-500"
            : "text-gray-400"
        }`}
      />
    </button>
  )
}
