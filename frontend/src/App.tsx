import About from "./components/sections/About"
import Experience from "./components/sections/Experience"
import Footer from "./components/sections/Footer"
import Navbar from "./components/sections/Navbar"
import Skills from "./components/sections/Skills"
import TitledSection from "./components/sections/TitledSection"
import { ThemeProvider } from "./ThemeContext"

function App() {

  return (
    <>
      <ThemeProvider>
        <Navbar />
        <About />

        {/* SKILLS SECTION */}
        <TitledSection
          id="skills"
          title="Skills & Technologies"
          subtitle="02 / skills"
          description="Technologies I use to build, deploy, and maintain applications.">
          <Skills />
        </TitledSection>

        {/* EXPERIENCE SECTION */}
        <TitledSection
          id="experience"
          title="Where I’ve Worked"
          subtitle="03 / experience"
          description="Hands-on experience building and supporting applications across frontend, backend, databases, and infrastructure.">
          <Experience />
        </TitledSection>

        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App