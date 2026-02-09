import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MyLayout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  )
}

export default App
