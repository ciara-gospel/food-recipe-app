import { Search } from "lucide-react"

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Search className="w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for delicious recipes (ex: Pasta, Pizza...)"
        className="w-full bg-[#0f172a] text-slate-200 text-sm rounded-2xl border border-slate-800 
                   py-4 pl-12 pr-4 outline-none transition-all duration-300
                   placeholder:text-slate-500
                   hover:border-slate-900
                   focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:bg-[#1e293b]/80
                   shadow-inner"
      />
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold text-slate-500 bg-slate-800 border border-slate-700 rounded-md">
          ENTER
        </kbd>
      </div>
    </div>
  )
}