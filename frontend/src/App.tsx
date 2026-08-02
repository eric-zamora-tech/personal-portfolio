import About from "./components/About"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./ThemeContext"

function App() {

  return (
    <>
      <ThemeProvider>
        <Navbar />
        <About />
      </ThemeProvider>
    </>
  )
}

export default App