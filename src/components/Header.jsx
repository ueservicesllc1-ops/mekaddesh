import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiMenu, FiX, FiShield } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { t } = useTranslation();
  const { getTotalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const totalItems = getTotalItems();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-[9999] glass-effect border-b border-rose-200 bg-white/95 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <img
                  src="/images/LOGO 2 PNG.png"
                  alt="Mekaddesh Logo"
                  className="h-12 md:h-16 object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`transition-colors font-medium ${isActive('/')
                    ? 'text-rose-600 border-b-2 border-rose-600 pb-1'
                    : 'text-gray-700 hover:text-rose-600'
                  }`}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/productos"
                className={`transition-colors font-medium ${isActive('/productos')
                    ? 'text-rose-600 border-b-2 border-rose-600 pb-1'
                    : 'text-gray-700 hover:text-rose-600'
                  }`}
              >
                {t('nav.products')}
              </Link>
              <Link
                to="/sobre"
                className={`transition-colors font-medium ${isActive('/sobre')
                    ? 'text-rose-600 border-b-2 border-rose-600 pb-1'
                    : 'text-gray-700 hover:text-rose-600'
                  }`}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/contacto"
                className={`transition-colors font-medium ${isActive('/contacto')
                    ? 'text-rose-600 border-b-2 border-rose-600 pb-1'
                    : 'text-gray-700 hover:text-rose-600'
                  }`}
              >
                {t('nav.contact')}
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <LanguageSelector />
              {/* Admin Button */}
              <Link to="/admin">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-gradient-to-r from-mekadesh-gold-500 to-mekadesh-gold-600 text-white shadow-gold hover:shadow-lg transition-shadow"
                  title="Panel de Administración"
                >
                  <FiShield className="text-xl" />
                </motion.div>
              </Link>

              {/* Cart Button */}
              <Link to="/carrito">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-rose hover:shadow-lg transition-shadow"
                >
                  <FiShoppingBag className="text-xl" />
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-mekadesh-gold-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMobileMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4 pb-4"
            >
              <Link
                to="/"
                className={`block transition-colors ${isActive('/')
                    ? 'text-rose-600 font-semibold'
                    : 'text-gray-700 hover:text-rose-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/productos"
                className={`block transition-colors ${isActive('/productos')
                    ? 'text-rose-600 font-semibold'
                    : 'text-gray-700 hover:text-rose-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.products')}
              </Link>
              <Link
                to="/sobre"
                className={`block transition-colors ${isActive('/sobre')
                    ? 'text-rose-600 font-semibold'
                    : 'text-gray-700 hover:text-rose-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/contacto"
                className={`block transition-colors ${isActive('/contacto')
                    ? 'text-rose-600 font-semibold'
                    : 'text-gray-700 hover:text-rose-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <Link
                to="/carrito"
                className={`block transition-colors relative ${isActive('/carrito')
                    ? 'text-rose-600 font-semibold'
                    : 'text-gray-700 hover:text-rose-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.cart')}
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-mekadesh-gold-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </motion.nav>
          )}
        </div>
      </motion.header>
    </>
  );
};

export default Header;

