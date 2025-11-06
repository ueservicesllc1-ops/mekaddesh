import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiStar, FiShield, FiUsers, FiTrendingUp } from 'react-icons/fi';

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

const stats = [
  { number: '10K+', label: 'Clientes Satisfechos' },
  { number: '50+', label: 'Productos Premium' },
  { number: '15+', label: 'Años de Experiencia' },
  { number: '98%', label: 'Satisfacción' },
];

const Sobre = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-800">Sobre</span>{' '}
              <span className="text-gradient-gold">Mekaddesh</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Somos una marca comprometida con tu belleza y bienestar, ofreciendo
              productos cuidadosamente seleccionados para realzar tu belleza natural.
              Nuestra misión es proporcionar productos de la más alta calidad que
              celebren y realcen tu belleza única.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <FiTrendingUp className="text-rose-600 text-2xl" />
              <span className="text-rose-600 font-semibold">Marca Líder en Belleza</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-rose">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Nuestra <span className="text-gradient-gold">Misión</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                En Mekaddesh, creemos que cada persona merece sentirse hermosa y
                confiada. Por eso, nos dedicamos a crear productos que no solo
                realzan tu belleza exterior, sino que también nutren tu bienestar
                interior.
              </p>
              <p className="text-lg text-gray-600">
                Trabajamos con ingredientes naturales y sostenibles, asegurándonos
                de que cada producto sea seguro, efectivo y respetuoso con el medio
                ambiente.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-rose p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white rounded-full">
                  <FiUsers className="text-3xl text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Nuestro Equipo</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Nuestro equipo está formado por expertos en belleza, dermatólogos
                y científicos que trabajan juntos para crear productos innovadores
                que realmente funcionan. Cada producto pasa por rigurosas pruebas
                para garantizar la máxima calidad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;

