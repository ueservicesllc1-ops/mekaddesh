import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

import { useProducts } from '../context/ProductsContext';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product, index }) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-rose transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          onError={(e) => {
            console.error('Error loading image:', product.image);
            e.target.style.display = 'none';
          }}
          loading="lazy"
        />
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
        />

        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-sm transition-colors ${isLiked
            ? 'bg-rose-500 text-white'
            : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
        >
          <FiHeart className={`${isLiked ? 'fill-current' : ''}`} />
        </motion.button>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
          <FiStar className="text-mekadesh-gold-500 fill-current" />
          <span className="text-sm font-semibold text-gray-700">
            {product.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.name === 'Facial Cleanser' || product.name === 'Facial Cream' || product.name === 'Hyaluronic Acid'
            ? t(`products_data.${product.name}.description`)
            : product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gradient-gold">
              ${product.price}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(product)}
            className="p-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full shadow-rose hover:shadow-xl transition-all"
          >
            <FiShoppingCart className="text-xl" />
          </motion.button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 border-2 border-mekadesh-gold-400 rounded-2xl pointer-events-none"
      />
    </motion.div>
  );
};

const Products = ({ showHeader = true }) => {
  const { t } = useTranslation();
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <section
        id="productos"
        className="py-20 bg-gradient-to-b from-white to-rose-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">{t('products_component.loading')}</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="productos"
        className="py-20 bg-gradient-to-b from-white to-rose-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-red-600 text-lg">{t('products_component.error')} {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="productos"
      className="py-8 md:py-20 bg-gradient-to-b from-white to-rose-50"
    >
      <div className="container mx-auto px-4">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 -mt-4 md:mt-0">
              <span className="text-gradient-gold">{t('products_component.title_our')}</span>{' '}
              <span className="text-gray-800">{t('products_component.title_products')}</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('products_component.subtitle')}
            </p>
          </motion.div>
        )}

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">{t('products_component.empty')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

