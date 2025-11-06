import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiSettings, FiUsers, FiPackage, FiBarChart2, FiPlus, FiEdit2, FiTrash2, FiLock } from 'react-icons/fi';
import ProductModal from '../components/ProductModal';
import { useProducts } from '../context/ProductsContext';

const ADMIN_PIN = '1619';
const SESSION_KEY = 'admin_authenticated';

const Admin = () => {
  const { products, deleteProduct } = useProducts();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Verificar si ya está autenticado al cargar
  useEffect(() => {
    const authenticated = sessionStorage.getItem(SESSION_KEY) === 'true';
    setIsAuthenticated(authenticated);
  }, []);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem(SESSION_KEY, 'true');
      setError('');
      setPin('');
    } else {
      setError('PIN incorrecto. Inténtalo de nuevo.');
      setPin('');
    }
  };

  // Si no está autenticado, mostrar el formulario de PIN
  if (!isAuthenticated) {
    return (
      <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full mx-4"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full mb-6 shadow-rose">
                <FiLock className="text-4xl text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-gradient-gold">Acceso</span>{' '}
                <span className="text-gray-800">Restringido</span>
              </h1>
              <p className="text-gray-600">
                Ingresa el PIN para acceder al panel de administración
              </p>
            </div>

            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  PIN de Acceso
                </label>
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setError('');
                  }}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    error ? 'border-red-500' : 'border-rose-200'
                  } focus:outline-none focus:ring-2 focus:ring-rose-500 text-center text-2xl tracking-widest`}
                  placeholder="••••"
                  maxLength="4"
                  autoFocus
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-semibold text-lg shadow-rose hover:shadow-xl transition-all"
              >
                Ingresar
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  const handleOpenProductModal = () => {
    setSelectedProduct(null);
    setIsProductModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      deleteProduct(id);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-4 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full mb-6 shadow-rose">
            <FiShield className="text-4xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Panel de</span>{' '}
            <span className="text-gray-800">Administración</span>
          </h1>
          <p className="text-xl text-gray-600">
            Área de administración de Mekaddesh
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
            <div className="text-center py-12">
              <div className="mb-6">
                <FiSettings className="text-6xl text-gray-300 mx-auto mb-4" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Panel en Construcción
              </h2>
              <p className="text-gray-600 mb-8">
                El panel de administración estará disponible pronto.
              </p>
              
              {/* Placeholder for future admin sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                <div className="p-4 bg-gradient-rose rounded-lg border border-rose-200">
                  <FiUsers className="text-2xl text-rose-600 mb-2" />
                  <h3 className="font-semibold text-gray-800 mb-1">Usuarios</h3>
                  <p className="text-sm text-gray-600">Próximamente</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenProductModal}
                  className="p-4 bg-gradient-rose rounded-lg border border-rose-200 hover:shadow-lg transition-all text-left cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <FiPackage className="text-2xl text-rose-600" />
                    <FiPlus className="text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Productos</h3>
                  <p className="text-sm text-gray-600">Gestionar productos</p>
                </motion.button>
                <div className="p-4 bg-gradient-rose rounded-lg border border-rose-200">
                  <FiBarChart2 className="text-2xl text-rose-600 mb-2" />
                  <h3 className="font-semibold text-gray-800 mb-1">Estadísticas</h3>
                  <p className="text-sm text-gray-600">Próximamente</p>
                </div>
                <div className="p-4 bg-gradient-rose rounded-lg border border-rose-200">
                  <FiSettings className="text-2xl text-rose-600 mb-2" />
                  <h3 className="font-semibold text-gray-800 mb-1">Configuración</h3>
                  <p className="text-sm text-gray-600">Próximamente</p>
                </div>
              </div>
              
              <ProductModal
                isOpen={isProductModalOpen}
                onClose={() => {
                  setIsProductModalOpen(false);
                  setSelectedProduct(null);
                }}
                productToEdit={selectedProduct}
              />
            </div>
          </div>
        </motion.div>

        {/* Products List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-6xl mx-auto mt-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Productos ({products.length})
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenProductModal}
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-semibold flex items-center gap-2 shadow-rose hover:shadow-xl transition-all"
              >
                <FiPlus />
                Nuevo Producto
              </motion.button>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-12">
                <FiPackage className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">No hay productos. Crea uno nuevo para comenzar.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-rose rounded-xl p-4 border border-rose-200"
                  >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-lg mb-4 bg-gray-100"
                            onError={(e) => {
                              console.error('Error loading image:', product.image);
                              e.target.style.display = 'none';
                              e.target.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          <div className="hidden w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-gray-500 text-sm">Imagen no disponible</span>
                          </div>
                    <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-gradient-gold">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-600">⭐ {product.rating}</span>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleEditProduct(product)}
                        className="flex-1 px-4 py-2 bg-rose-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-rose-600 transition-colors"
                      >
                        <FiEdit2 />
                        Editar
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDeleteProduct(product.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold flex items-center justify-center hover:bg-red-600 transition-colors"
                      >
                        <FiTrash2 />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;

