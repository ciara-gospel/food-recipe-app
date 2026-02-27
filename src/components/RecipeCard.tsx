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
        overflow-hidden rounded-3xl
        bg-[#0f172a] border border-slate-800
        hover:border-indigo-500/50
        shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]
        transition-all duration-300 hover:-translate-y-1
      "
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />

        <div 
          className="absolute top-3 right-3 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="rounded-full bg-slate-900/80 backdrop-blur-md p-1.5 shadow-lg border border-slate-700">
            <FavoriteButton recipe={recipe} />
          </div>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
          {recipe.name}
        </h3>

        {(recipe.category || recipe.area) && (
          <div className="flex flex-wrap gap-2">
            {recipe.category && (
              <span className="rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 text-xs font-medium text-indigo-400">
                {recipe.category}
              </span>
            )}
            {recipe.area && (
              <span className="rounded-lg bg-slate-800 border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-300">
                {recipe.area}
              </span>
            )}
          </div>
        )}
        
        <div className="pt-2 flex items-center text-sm text-slate-500 font-medium">
          <span>View recipe</span>
          <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  )
}