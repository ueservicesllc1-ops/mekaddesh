import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      content: 'contacto@mekaddesh.com',
      link: 'mailto:contacto@mekaddesh.com',
    },
    {
      icon: FiPhone,
      title: 'Teléfono',
      content: '+1 (929) 253-2497',
      link: 'tel:+19292532497',
    },
    {
      icon: FiMapPin,
      title: 'Ubicación',
      content: 'Ciudad, País',
      link: '#',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Contacto</span>
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos
              lo antes posible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Información de <span className="text-gradient-rose">Contacto</span>
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gradient-rose rounded-xl hover:shadow-lg transition-all"
                  >
                    <div className="p-3 bg-white rounded-lg">
                      <info.icon className="text-2xl text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Síguenos en Redes Sociales
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="#"
                    className="p-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full shadow-rose hover:shadow-xl transition-all"
                  >
                    <FiInstagram className="text-xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="#"
                    className="p-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full shadow-rose hover:shadow-xl transition-all"
                  >
                    <FiFacebook className="text-xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="#"
                    className="p-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full shadow-rose hover:shadow-xl transition-all"
                  >
                    <FiTwitter className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-rose p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Envíanos un <span className="text-gradient-gold">Mensaje</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                    placeholder="+1 (929) 253-2497"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white resize-none"
                    placeholder="Tu mensaje..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-semibold text-lg shadow-rose hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Enviar Mensaje
                  <FiSend />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;

