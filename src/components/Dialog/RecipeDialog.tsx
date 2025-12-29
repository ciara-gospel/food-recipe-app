import { useState } from "react";
import { X } from "lucide-react";
import type { Recipe } from "../../types/recipe";
import RecipeDialogContent from "./RecipeDialogContent";
import RecipeFormModal from "./RecipeFormModal";
import { useRecipes } from "../../context/RecipeContext";

interface Props {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RecipeDialog({ recipe, isOpen, onClose }: Props) {
  const { updateRecipe } = useRecipes();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (!recipe) return null;

  const handleUpdate = (updatedRecipe: Recipe) => {
    updateRecipe(updatedRecipe);
    setIsEditModalOpen(false);
    onClose();
  };

  return (
    <>
      <div 
        className={`fixed inset-0 z-60 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div 
        className={`fixed right-0 top-0 z-70 h-full w-full max-w-xl bg-[#0f172a] shadow-2xl transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-80 p-2 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 hover:bg-indigo-600 transition-all"
        >
          <X size={24} />
        </button>

        <div className="h-full overflow-y-auto custom-scrollbar">
          <div className="relative h-80 w-full">
            <img src={recipe.image} alt={recipe.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h2 className="text-3xl font-black text-white leading-tight">{recipe.name}</h2>
            </div>
          </div>

          <div className="p-8">
            <RecipeDialogContent 
              recipe={recipe} 
              onEdit={() => setIsEditModalOpen(true)} 
              onClose={onClose} 
            />
          </div>
        </div>
      </div>

      <RecipeFormModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleUpdate}
        initialData={recipe}
      />
    </>
  );
}