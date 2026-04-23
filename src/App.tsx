import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import About from "./pages/About"
import MyLayout from "./layouts/MyLayout"

function App() {
  return (
    <MyLayout>
      <Home />
      <About />
      <Projects />
      <Contact />
    </MyLayout>
  )
}

export default App