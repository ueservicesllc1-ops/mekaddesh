import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[70vh] flex items-center justify-center gradient-rose pt-28 md:pt-32"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-mekadesh-gold-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-400 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Sparkles - Distributed across entire banner */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => {
          // Usar porcentajes para distribuir en todo el ancho
          const randomXPercent = Math.random() * 100;
          const randomYPercent = Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              initial={{
                left: `${randomXPercent}%`,
                top: `${randomYPercent}%`,
                opacity: 0,
              }}
              animate={{
                y: [0, -Math.random() * 50 - 20],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                rotate: [0, Math.random() > 0.5 ? 180 : -180, Math.random() > 0.5 ? 360 : -360],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <div className="text-mekadesh-gold-400 text-xl md:text-2xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <img
              src="/images/LOGO 2 PNG.png"
              alt="Mekaddesh Logo"
              className="h-32 md:h-48 mx-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gray-800">
              Tu Belleza,
            </span>
            <br />
            <span className="text-gradient-rose">Nuestra Pasión</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Descubre nuestra exclusiva colección de productos de belleza
            diseñados para realzar tu belleza natural
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center -mt-4"
          >
            <Link to="/productos">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-semibold text-base shadow-rose hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                Explorar Productos
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>

            <Link to="/sobre">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/80 backdrop-blur-sm text-rose-600 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all border-2 border-rose-200 cursor-pointer"
              >
                Conoce Más
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-mekadesh-gold-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-mekadesh-gold-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

