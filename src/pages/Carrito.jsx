import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiPlus, FiMinus, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Carrito = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 md:mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm md:text-base text-gray-600 hover:text-rose-600 transition-colors mb-3 md:mb-6"
          >
            <FiArrowLeft />
            <span>Volver a la tienda</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
            <div className="flex items-center gap-2 md:gap-3">
              <FiShoppingCart className="text-xl md:text-3xl text-rose-600" />
              <h1 className="text-2xl md:text-5xl font-bold text-gray-800">
                Carrito de Compras
              </h1>
            </div>
            {cart.length > 0 && (
              <span className="text-sm md:text-lg text-gray-500">({cart.length} {cart.length === 1 ? 'producto' : 'productos'})</span>
            )}
          </div>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center py-12 md:py-20 text-center"
          >
            <FiShoppingCart className="text-6xl md:text-8xl text-gray-300 mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3 md:mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-base md:text-xl text-gray-500 mb-6 md:mb-8">
              Agrega productos para comenzar a comprar
            </p>
            <Link
              to="/productos"
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-semibold text-base md:text-lg shadow-rose hover:shadow-xl transition-all"
            >
              Ver Productos
            </Link>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-3 md:space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg border border-rose-100"
                >
                  <div className="flex gap-3 md:gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-lg md:rounded-xl flex-shrink-0"
                      onError={(e) => {
                        console.error('Error loading image:', item.image);
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-xl font-bold text-gray-800 mb-1 md:mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-lg md:text-2xl font-bold text-gradient-gold mb-2 md:mb-4">
                        ${item.price}
                      </p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4">
                        <div className="flex items-center gap-2 md:gap-3 bg-rose-50 rounded-lg px-2 md:px-4 py-1.5 md:py-2 border border-rose-200">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 md:p-2 hover:bg-rose-200 rounded-lg transition-colors"
                          >
                            <FiMinus className="text-sm md:text-base text-rose-600" />
                          </motion.button>
                          <span className="text-sm md:text-lg font-semibold text-gray-700 w-6 md:w-8 text-center">
                            {item.quantity}
                          </span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 md:p-2 hover:bg-rose-200 rounded-lg transition-colors"
                          >
                            <FiPlus className="text-sm md:text-base text-rose-600" />
                          </motion.button>
                        </div>
                        <div className="text-sm md:text-lg font-semibold text-gray-700">
                          Subtotal: <span className="text-gradient-gold">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto sm:ml-0 p-2 md:p-3 hover:bg-rose-100 rounded-lg transition-colors text-rose-600"
                          title="Eliminar del carrito"
                        >
                          <FiTrash2 className="text-lg md:text-xl" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-rose-100 sticky top-20 md:top-24"
              >
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                  Resumen del Pedido
                </h2>
                
                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  <div className="flex justify-between text-sm md:text-base text-gray-600">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base text-gray-600">
                    <span>Envío:</span>
                    <span className="font-semibold">Gratis</span>
                  </div>
                  <div className="border-t border-rose-200 pt-3 md:pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg md:text-xl font-bold text-gray-800">Total:</span>
                      <span className="text-2xl md:text-3xl font-bold text-gradient-gold">
                        ${getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Link to="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 md:py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl font-semibold text-base md:text-lg shadow-rose hover:shadow-xl transition-all mb-2 md:mb-3"
                  >
                    Proceder al Pago
                  </motion.button>
                </Link>
                
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={clearCart}
                  className="w-full py-2.5 md:py-3 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors font-medium text-sm md:text-base border border-rose-200"
                >
                  Vaciar Carrito
                </motion.button>

                <Link
                  to="/productos"
                  className="block text-center mt-3 md:mt-4 text-sm md:text-base text-gray-600 hover:text-rose-600 transition-colors"
                >
                  Continuar comprando
                </Link>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;

