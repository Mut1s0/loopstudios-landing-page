import { Nav, Hero, Features, Gallery, Footer } from "./components"

function App() {

  return(

    <main>

      <header>

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
