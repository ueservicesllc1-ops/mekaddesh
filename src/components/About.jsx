import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiStar, FiShield } from 'react-icons/fi';

const features = [
  {
    icon: FiAward,
    title: 'Calidad Premium',
    description: 'Productos de la más alta calidad con ingredientes naturales',
  },
  {
    icon: FiHeart,
    title: 'Cuidado Personalizado',
    description: 'Cada producto está diseñado pensando en tu bienestar',
  },
  {
    icon: FiStar,
    title: 'Belleza Natural',
    description: 'Realza tu belleza natural sin productos agresivos',
  },
  {
    icon: FiShield,
    title: 'Seguro y Probado',
    description: 'Todos nuestros productos son dermatológicamente probados',
  },
];

const About = () => {
  return (
    <section
      id="sobre"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-800">Sobre</span>{' '}
            <span className="text-gradient-gold">Mekaddesh</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una marca comprometida con tu belleza y bienestar, ofreciendo
            productos cuidadosamente seleccionados para realzar tu belleza
            natural.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-rose p-8 rounded-2xl shadow-lg hover:shadow-rose transition-all text-center"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-block p-4 bg-white rounded-full mb-4 shadow-gold"
              >
                <feature.icon className="text-3xl text-rose-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

