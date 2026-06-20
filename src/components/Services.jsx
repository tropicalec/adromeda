import { motion } from 'framer-motion';
import { Target, Search, ChartBarIncreasing } from 'lucide-react';

const icons = {
  Instagram: Target,
  Search: Search,
  TrendingUp: ChartBarIncreasing
};

const Services = ({ services }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Especialidades</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
