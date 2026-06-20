import { motion } from 'framer-motion';

const FAQ = ({ faq }) => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">{faq.title}</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                {item.question}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
