import { Clock, Globe, Tag, CheckCircle2, ChefHat, Pencil, Trash2 } from "lucide-react"
import type { Recipe } from "../../types/recipe"
import { useRecipes } from "../../context/RecipeContext"

interface Props {
  recipe: Recipe
  onEdit: () => void
  onClose: () => void
}

export default function RecipeDialogContent({ recipe, onEdit, onClose }: Props) {
  const { deleteRecipe } = useRecipes()

  const isPersonalRecipe = isNaN(Number(recipe.id)) || recipe.category === "Personal"

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipe.id)
      onClose()
    }
  }

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-wrap gap-3">
        {recipe.category && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Tag size={14} />
            {recipe.category}
          </div>
        )}
        {recipe.area && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider">
            <Globe size={14} />
            {recipe.area}
          </div>
        )}
      </div>

      <section>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <ChefHat className="text-indigo-500" />
          Ingredients
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((ing, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-300 group hover:bg-slate-800 transition-colors"
              >
                <CheckCircle2 size={16} className="text-indigo-500 shrink-0" />
                <span className="text-sm">{ing}</span>
              </div>
            ))
          ) : (
            <p className="text-slate-500 italic">No ingredients listed.</p>
          )}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Clock className="text-indigo-500" />
          Preparation
        </h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-800" />
          <div className="space-y-6 pl-10 relative">
            {recipe.instructions?.split('\n').filter(step => step.trim() !== '').map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-7.25 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-4 border-[#0f172a]" />
                <p className="text-slate-300 leading-relaxed text-sm bg-slate-800/20 p-4 rounded-2xl border border-slate-800/50">
                  {step.trim()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isPersonalRecipe && (
        <div className="flex gap-4 pt-6 border-t border-slate-800">
          <button 
            onClick={onEdit}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white font-medium transition-all"
          >
            <Pencil size={18} /> Edit
          </button>
          <button 
            onClick={handleDelete}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-rose-500/10 hover:bg-rose-600 text-rose-500 hover:text-white border border-rose-500/20 transition-all font-medium"
          >
            <Trash2 size={18} /> Delete
          </button>
        </div>
      )}

      {recipe.youtube && (
        <section className="pt-4">
          <a 
            href={recipe.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-green-600/10 border border-green-600/20 text-green-500 font-bold hover:bg-green-600 hover:text-white transition-all"
          >
            Watch Video Tutorial on YouTube
          </a>
        </section>
      )}
    </div>
  )
}