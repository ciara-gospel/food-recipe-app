import { useState, useEffect } from "react";
import { X, Upload, Link as LinkIcon, Plus, Trash2 } from "lucide-react";
import type { Recipe } from "../../types/recipe";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (recipe: Recipe) => void;
  initialData?: Recipe | null;
}

export default function RecipeFormModal({ isOpen, onClose, onSubmit, initialData }: Props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setImage(initialData.image || "");
      setIngredients(
        initialData.ingredients && initialData.ingredients.length > 0 
          ? initialData.ingredients 
          : [""]
      );
      setInstructions(initialData.instructions || "");
    } else {
      resetForm();
    }
  }, [initialData, isOpen]);

  const resetForm = () => {
    setName("");
    setImage("");
    setIngredients([""]);
    setInstructions("");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipe: Recipe = {
      id: initialData?.id || crypto.randomUUID(),
      name,
      image,
      ingredients: ingredients.filter(i => i.trim() !== ""),
      instructions,
      category: initialData?.category || "Personal",
      area: initialData?.area || "Homemade",
      isFavorite: initialData?.isFavorite || false
    };
    onSubmit(recipe);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0f172a] border border-slate-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl custom-scrollbar">
        
        <div className="sticky top-0 bg-[#0f172a]/95 backdrop-blur-md p-6 border-b border-slate-800 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-white">
            {initialData ? 'Edit Recipe' : 'Create New Recipe'}
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-800 rounded-full text-slate-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Recipe Name</label>
            <input 
              required 
              value={name} 
              onChange={e => setName(e.target.value)} 
              placeholder="Ex: Grandma's Special Pasta"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Image URL</label>
              <div className="flex">
                <div className="bg-slate-800 flex items-center justify-center px-3 rounded-l-xl border-y border-l border-slate-700">
                  <LinkIcon size={18} className="text-slate-400" />
                </div>
                <input 
                  value={image} 
                  onChange={e => setImage(e.target.value)} 
                  placeholder="https://images.unsplash..." 
                  className="w-full bg-slate-900 border border-slate-700 rounded-r-xl p-3 text-white outline-none focus:border-indigo-500 transition-all" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Or Upload File</label>
              <label className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl cursor-pointer text-white transition-all">
                <Upload size={18} /> 
                <span className="text-sm font-medium">Choose Local Image</span>
                <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>
          </div>

          {image && (
            <div className="relative h-40 w-full rounded-2xl overflow-hidden border border-slate-700">
              <img src={image} alt="Preview" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-3">
                <span className="text-xs text-white/80">Image Preview</span>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Ingredients</label>
            <div className="space-y-3">
              {ingredients.map((ing, idx) => (
                <div key={idx} className="flex gap-2 group">
                  <input 
                    required
                    value={ing} 
                    placeholder={`Ingredient ${idx + 1}`}
                    onChange={e => {
                      const newIngs = [...ingredients];
                      newIngs[idx] = e.target.value;
                      setIngredients(newIngs);
                    }} 
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-indigo-500 transition-all" 
                  />
                  {ingredients.length > 1 && (
                    <button 
                      type="button" 
                      onClick={() => setIngredients(ingredients.filter((_, i) => i !== idx))} 
                      className="text-slate-500 hover:text-rose-500 p-2 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button 
              type="button" 
              onClick={() => setIngredients([...ingredients, ""])} 
              className="mt-3 flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-bold px-1 transition-colors"
            >
              <Plus size={18} /> Add another ingredient
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Instructions</label>
            <textarea 
              required 
              rows={5} 
              value={instructions} 
              onChange={e => setInstructions(e.target.value)} 
              placeholder="Step 1: Boil water...&#10;Step 2: Add salt..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-indigo-500 transition-all custom-scrollbar" 
            />
          </div>

          <div className="pt-4 sticky bottom-0 bg-[#0f172a] pb-2">
            <button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
            >
              {initialData ? 'Save Changes' : 'Create Recipe'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}