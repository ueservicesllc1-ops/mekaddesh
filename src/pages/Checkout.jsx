import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiMapPin, FiPhone, FiCreditCard } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    telefono: '',
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.direccion.trim()) {
      newErrors.direccion = 'La dirección es requerida';
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);
    
    // Aquí iría la lógica de procesamiento del pago con PayPal
    // Por ahora simulamos el proceso
    setTimeout(() => {
      alert('Pago procesado exitosamente (simulación)');
      clearCart();
      navigate('/');
      setIsProcessing(false);
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-rose-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Tu carrito está vacío
          </h2>
          <p className="text-gray-600 mb-8">
            Agrega productos antes de proceder al pago
          </p>
          <Link
            to="/productos"
            className="px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-semibold text-lg shadow-rose hover:shadow-xl transition-all inline-block"
          >
            Ver Productos
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Link
            to="/carrito"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors mb-6"
          >
            <FiArrowLeft />
            <span>Volver al carrito</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Finalizar Compra
          </h1>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Formulario - Izquierda */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100 mb-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FiUser className="text-rose-600" />
                  Información de Contacto
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.nombre ? 'border-red-500' : 'border-rose-200'
                      } focus:outline-none focus:ring-2 focus:ring-rose-500`}
                      placeholder="Juan"
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                    )}
                  </div>

                  {/* Apellido */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Apellido *
                    </label>
                    <input
                      type="text"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.apellido ? 'border-red-500' : 'border-rose-200'
                      } focus:outline-none focus:ring-2 focus:ring-rose-500`}
                      placeholder="Pérez"
                    />
                    {errors.apellido && (
                      <p className="text-red-500 text-sm mt-1">{errors.apellido}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                    <FiMail className="text-rose-600" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-rose-200'
                    } focus:outline-none focus:ring-2 focus:ring-rose-500`}
                    placeholder="juan.perez@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Teléfono */}
                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                    <FiPhone className="text-rose-600" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.telefono ? 'border-red-500' : 'border-rose-200'
                    } focus:outline-none focus:ring-2 focus:ring-rose-500`}
                    placeholder="+1 (929) 253-2497"
                  />
                  {errors.telefono && (
                    <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
                  )}
                </div>

                {/* Dirección */}
                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                    <FiMapPin className="text-rose-600" />
                    Dirección *
                  </label>
                  <textarea
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.direccion ? 'border-red-500' : 'border-rose-200'
                    } focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none`}
                    placeholder="Calle, número, ciudad, código postal"
                  />
                  {errors.direccion && (
                    <p className="text-red-500 text-sm mt-1">{errors.direccion}</p>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Resumen del Pedido - Derecha */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 sticky top-24"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Resumen del Pedido
                </h2>

                {/* Productos */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-4 border-b border-rose-100 last:border-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 mb-1">
                          Cantidad: {item.quantity}
                        </p>
                        <p className="text-sm font-bold text-gradient-gold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totales */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Envío:</span>
                    <span className="font-semibold text-green-600">Gratis</span>
                  </div>
                  <div className="border-t border-rose-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800">Total:</span>
                      <span className="text-3xl font-bold text-gradient-gold">
                        ${getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Métodos de Pago */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-rose-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FiCreditCard className="text-rose-600" />
              Métodos de Pago
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              {/* PayPal Button */}
              <motion.button
                type="submit"
                disabled={isProcessing}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#0070ba] hover:bg-[#005ea6] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.174 1.351 1.05 3.3.93 4.855v.005l-.147 2.714c-.01.18-.01.37 0 .55-.024 1.612.11 3.263-1.001 4.44-1.07 1.12-2.857 1.53-5.19 1.53H9.576a.641.641 0 0 0-.633.74l1.464 8.707a.641.641 0 0 1-.633.74zm-4.5-1.28h4.5l1.464-8.707H8.79c1.56 0 2.9-.2 3.85-.5 1.01-.33 1.71-.9 2.05-1.68.33-.76.25-1.7-.24-2.78-.48-1.06-1.3-2.17-2.45-3.3-.58-.57-1.3-1.08-2.16-1.52H6.5l-1.92 14.487z" />
                </svg>
                {isProcessing ? 'Procesando...' : 'Pagar con PayPal'}
              </motion.button>

              {/* PayPal Credit Button */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#1ba0f2] hover:bg-[#0a8cd8] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.174 1.351 1.05 3.3.93 4.855v.005l-.147 2.714c-.01.18-.01.37 0 .55-.024 1.612.11 3.263-1.001 4.44-1.07 1.12-2.857 1.53-5.19 1.53H9.576a.641.641 0 0 0-.633.74l1.464 8.707a.641.641 0 0 1-.633.74zm-4.5-1.28h4.5l1.464-8.707H8.79c1.56 0 2.9-.2 3.85-.5 1.01-.33 1.71-.9 2.05-1.68.33-.76.25-1.7-.24-2.78-.48-1.06-1.3-2.17-2.45-3.3-.58-.57-1.3-1.08-2.16-1.52H6.5l-1.92 14.487z" />
                </svg>
                PayPal Credit
              </motion.button>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

