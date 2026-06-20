import Hero from './components/Hero';
import Services from './components/Services';
import Method from './components/Method';
import Curriculum from './components/Curriculum';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import content from './data/content.json';
import { CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero content={content.hero} />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{content.about.title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {content.about.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.results.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-purple-600" size={20} />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-purple-600 p-1 rounded-2xl shadow-2xl">
               <div className="bg-gray-900 p-12 rounded-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-3xl font-bold mb-6 italic leading-tight">"Vende con estrategia, no con suerte."</h3>
                  <p className="text-purple-400 font-semibold tracking-wide uppercase text-sm">— Academia de Ventas Pro</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.target.title}</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.target.items.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Method method={content.method} />
      <Curriculum curriculum={content.curriculum} />
      <Services services={content.services} />
      <FAQ faq={content.faq} />
      <Contact contact={content.contact} />

      <footer className="py-12 bg-gray-900 text-center border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p className="text-gray-400 mb-4">{content.footer.text}</p>
          <div className="flex justify-center gap-6 text-gray-600 text-sm">
            <a href="#" className="hover:text-purple-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
