import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiStar, FiShield, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const getFeatures = (t) => [
  {
    icon: FiAward,
    title: t('about.features.premium.title'),
    description: t('about.features.premium.desc'),
  },
  {
    icon: FiHeart,
    title: t('about.features.care.title'),
    description: t('about.features.care.desc'),
  },
  {
    icon: FiStar,
    title: t('about.features.natural.title'),
    description: t('about.features.natural.desc'),
  },
  {
    icon: FiShield,
    title: t('about.features.safe.title'),
    description: t('about.features.safe.desc'),
  },
];

const getStats = (t) => [
  { number: '10K+', label: t('about.stats.satisfied') },
  { number: '50+', label: t('about.stats.products') },
  { number: '15+', label: t('about.stats.years') },
  { number: '98%', label: t('about.stats.satisfaction') },
];

const Sobre = () => {
  const { t } = useTranslation();
  const features = getFeatures(t);
  const stats = getStats(t);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-800">{t('about.title')}</span>{' '}
              <span className="text-gradient-gold">Mekaddesh</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('about.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <FiTrendingUp className="text-rose-600 text-2xl" />
              <span className="text-rose-600 font-semibold">{t('about.badge_leader')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-16 bg-gradient-rose -mt-8 md:mt-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 md:py-20 bg-white -mt-8 md:mt-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-rose p-8 rounded-2xl shadow-lg hover:shadow-rose transition-all text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-4 bg-white rounded-full mb-4 shadow-gold"
                >
                  <feature.icon className="text-3xl text-rose-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 md:py-20 bg-white -mt-8 md:mt-0">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 -mt-4 md:mt-0">
                {t('about.mission.title')} <span className="text-gradient-gold">{t('about.mission.highlight')}</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4">
                {t('about.mission.p1')}
              </p>
              <p className="text-base md:text-lg text-gray-600">
                {t('about.mission.p2')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-rose p-6 md:p-8 rounded-2xl shadow-lg text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="p-4 bg-white rounded-full">
                  <FiUsers className="text-3xl text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{t('about.team.title')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('about.team.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;

