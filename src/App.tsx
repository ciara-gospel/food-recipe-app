import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import { RecipeProvider } from "./context/RecipeContext"
// import Header from "./components/Header"

export default function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        {/* <Header /> */}

        <main className="mx-auto max-w-7xl p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </BrowserRouter>
    </RecipeProvider>
  )
}
