import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import { RecipeProvider } from "./context/RecipeContext"

export default function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <nav className="p-4 flex gap-4 bg-white shadow">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </BrowserRouter>
    </RecipeProvider>
  )
}
