import React from 'react';
import { motion } from 'framer-motion';
import Products from '../components/Products';

const Productos = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient-gold">Nuestros</span>{' '}
              <span className="text-gray-800">Productos</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra exclusiva colección de productos de belleza
              cuidadosamente formulados para realzar tu belleza natural
            </p>
          </motion.div>
        </div>
      </section>
      <Products showHeader={false} />
    </div>
  );
};

export default Productos;

