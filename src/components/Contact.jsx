import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = ({ data }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-indigo-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">{data.title}</h2>
            <p className="text-indigo-200 mb-10 text-lg">
              No dejes tu crecimiento al azar. Agenda una consulta y descubre cómo escalar tus ventas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-800 rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-indigo-300">WhatsApp / Celular</p>
                  <p className="text-xl font-semibold">{data.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-800 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-indigo-300">Email</p>
                  <p className="text-xl font-semibold">{data.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-800 rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-indigo-300">Ubicación</p>
                  <p className="text-xl font-semibold">{data.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-gray-50 p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition" placeholder="Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email de Negocio</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition" placeholder="juan@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition" placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
