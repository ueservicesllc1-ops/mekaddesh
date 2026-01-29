import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, NY',
    rating: 5,
    comment: 'Los productos de Mekaddesh han transformado mi rutina de belleza. Mi piel nunca se había sentido tan suave y radiante. ¡Altamente recomendados!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    id: 2,
    name: 'Emily Rodriguez',
    location: 'New Jersey',
    rating: 5,
    comment: 'Increíble calidad. El serum revitalizante es mi producto favorito. Noté resultados desde la primera semana. ¡Vale cada centavo!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
  {
    id: 3,
    name: 'Jessica Martinez',
    location: 'New York, NY',
    rating: 5,
    comment: 'Mekaddesh superó todas mis expectativas. Los productos son naturales, efectivos y el servicio al cliente es excepcional. ¡Gracias!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
  },
  {
    id: 4,
    name: 'Amanda Thompson',
    location: 'New Jersey',
    rating: 5,
    comment: 'Desde que uso la crema hidratante dorada, mi piel se ve más joven y luminosa. Mis amigas ya me preguntan qué estoy usando.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
  },
  {
    id: 5,
    name: 'Olivia Brown',
    location: 'New York, NY',
    rating: 5,
    comment: 'El kit completo es perfecto para comenzar. Todos los productos trabajan en armonía y los resultados son visibles rápidamente.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
  },
  {
    id: 6,
    name: 'Sophia Williams',
    location: 'New Jersey',
    rating: 5,
    comment: 'Productos de lujo a un precio justo. La calidad es excepcional y el empaque es hermoso. Definitivamente volveré a comprar.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-rose transition-all relative"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-rose-200">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-30"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FiStar
            key={i}
            className="text-mekadesh-gold-500 fill-current text-lg"
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
        "{t(`testimonials.reviews.${testimonial.id}.text`)}"
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-rose-200"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 -mt-4 md:mt-0">
            <span className="text-gray-800">{t('testimonials.title_say')}</span>{' '}
            <span className="text-gradient-gold">{t('testimonials.title_customers')}</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-gradient-gold mb-2">4.9</div>
            <div className="text-gray-600">{t('testimonials.stats.rating')}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient-gold mb-2">10K+</div>
            <div className="text-gray-600">{t('testimonials.stats.satisfied')}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient-gold mb-2">98%</div>
            <div className="text-gray-600">{t('testimonials.stats.recommend')}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient-gold mb-2">5★</div>
            <div className="text-gray-600">{t('testimonials.stats.premium')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

