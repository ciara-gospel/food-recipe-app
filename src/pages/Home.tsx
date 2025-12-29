import { useState } from "react"
import { useRecipes } from "../context/RecipeContext"
import SearchBar from "../components/SearchBar"
import RecipeList from "../components/RecipeList"

export default function Home() {
  const { recipes, search } = useRecipes()
  const [query, setQuery] = useState("")

  const handleSearch = (value: string) => {
    setQuery(value)
    search(value)
  }

  return (
    <div className="space-y-6">
      <SearchBar value={query} onChange={handleSearch} />
      <RecipeList recipes={recipes} onSelect={() => {}} />
    </div>
  )
}
