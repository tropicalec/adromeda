import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import content from './data/content.json'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Hero data={content.hero} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">{content.about.title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {content.about.description}
          </p>
        </div>
      </section>

      <Services services={content.services} />

      <Contact data={content.contact} />

      <footer className="py-12 bg-gray-900 text-center text-gray-400">
        <div className="container mx-auto px-6">
          <p>{content.footer.text}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
