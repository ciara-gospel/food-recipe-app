import type { Recipe } from "../types/recipe"
import FavoriteButton from "./FavoriteButton"

interface Props {
  recipe: Recipe
  onClick: () => void
}

export default function RecipeCard({ recipe, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer
        overflow-hidden rounded-2xl
        bg-white
        shadow-sm hover:shadow-xl
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* Favorite button overlay */}
        <div className="absolute top-3 right-3 z-10">
          <div className="rounded-full bg-white/90 backdrop-blur p-2 shadow">
            <FavoriteButton recipe={recipe} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {recipe.name}
        </h3>

        {/* Optional meta */}
        {(recipe.category || recipe.area) && (
          <div className="flex gap-2 text-sm text-gray-500">
            {recipe.category && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5">
                {recipe.category}
              </span>
            )}
            {recipe.area && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5">
                {recipe.area}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
