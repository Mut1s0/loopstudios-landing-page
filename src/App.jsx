import { Nav, Hero, Features, Gallery, Footer } from "./components"

function App() {

  return(

    <main>

      <header className="min-h-[100vh] xs:min-h-[97vh] sm:min-h-[90vh]">

        <Nav />
        <Hero />

      </header>

      <section>

        <Features />
        <Gallery />

      </section>

      <footer>

        <Footer />

      </footer>

    </main>
    
  )
}

export default App
