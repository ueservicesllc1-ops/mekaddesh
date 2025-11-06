import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShoppingCart, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cart,
    isOpen,
    setIsOpen,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-rose-200 bg-gradient-rose">
              <div className="flex items-center gap-3">
                <FiShoppingCart className="text-2xl text-rose-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Carrito ({cart.length})
                </h2>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-rose-100 rounded-full transition-colors"
              >
                <FiX className="text-2xl text-gray-700" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <FiShoppingCart className="text-6xl text-gray-300 mb-4" />
                  <p className="text-xl text-gray-500 mb-2">
                    Tu carrito está vacío
                  </p>
                  <p className="text-gray-400">
                    Agrega productos para comenzar
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 p-4 bg-rose-50 rounded-xl border border-rose-100"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-mekadesh-gold-600 font-bold mb-2">
                          ${item.price}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-1 border border-rose-200">
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1 hover:bg-rose-100 rounded"
                            >
                              <FiMinus className="text-sm text-rose-600" />
                            </motion.button>
                            <span className="text-sm font-semibold text-gray-700 w-8 text-center">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1 hover:bg-rose-100 rounded"
                            >
                              <FiPlus className="text-sm text-rose-600" />
                            </motion.button>
                          </div>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 hover:bg-rose-200 rounded-lg transition-colors"
                          >
                            <FiTrash2 className="text-rose-600" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 border-t border-rose-200 bg-gradient-rose"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold text-gray-700">
                    Total:
                  </span>
                  <span className="text-3xl font-bold text-gradient-gold">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl font-semibold text-lg shadow-rose hover:shadow-xl transition-all mb-3"
                >
                  Proceder al Pago
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={clearCart}
                  className="w-full py-2 text-rose-600 hover:bg-rose-100 rounded-xl transition-colors font-medium"
                >
                  Vaciar Carrito
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;

