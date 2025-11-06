import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/images/LOGO 2 PNG.png"
              alt="Mekaddesh Logo"
              className="h-16 mb-4 object-contain filter-gold"
            />
            <p className="text-gray-400 mb-4">
              Tu belleza es nuestra pasión. Productos premium para una piel radiante.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-rose-500 transition-colors"
              >
                <FiInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-rose-500 transition-colors"
              >
                <FiFacebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-rose-500 transition-colors"
              >
                <FiTwitter />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <FiMail className="text-rose-400" />
                contacto@mekaddesh.com
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiPhone className="text-rose-400" />
                +1 (929) 253-2497
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Mekaddesh. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Powered and designed by Freedom Labs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

