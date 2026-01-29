import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

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
    alert(t('contact.success'));
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getContactInfo = (t) => [
    {
      icon: FiMail,
      title: 'Email',
      content: 'contacto@mekaddesh.com',
      link: 'mailto:contacto@mekaddesh.com',
    },
    {
      icon: FiPhone,
      title: t('contact.labels.phone'),
      content: '+1 (929) 253-2497',
      link: 'tel:+19292532497',
    },
    {
      icon: FiMapPin,
      title: t('contact.labels.location'),
      content: 'Ciudad, País',
      link: '#',
    },
  ];

  const { t } = useTranslation();
  const contactInfo = getContactInfo(t);

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
              <span className="text-gradient-gold">{t('contact.title')}</span>
            </h1>
            <p className="text-xl text-gray-600">
              {t('contact.subtitle')}
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
                {t('contact.info_title')} <span className="text-gradient-rose">{t('contact.info_highlight')}</span>
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
                  {t('contact.social_title')}
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
                {t('contact.form_title')} <span className="text-gradient-gold">{t('contact.form_highlight')}</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t('contact.labels.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                    placeholder={t('contact.placeholders.name')}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t('contact.labels.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                    placeholder={t('contact.placeholders.email')}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t('contact.labels.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                    placeholder={t('contact.placeholders.phone')}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t('contact.labels.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white resize-none"
                    placeholder={t('contact.placeholders.message')}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-semibold text-lg shadow-rose hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  {t('contact.submit')}
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

