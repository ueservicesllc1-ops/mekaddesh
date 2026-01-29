import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center space-x-2">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => changeLanguage('es')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${i18n.language === 'es' || i18n.language.startsWith('es')
                        ? 'bg-rose-100 text-rose-700'
                        : 'text-gray-600 hover:text-rose-600'
                    }`}
            >
                ES
            </motion.button>
            <div className="h-4 w-px bg-gray-300"></div>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${i18n.language === 'en' || i18n.language.startsWith('en')
                        ? 'bg-rose-100 text-rose-700'
                        : 'text-gray-600 hover:text-rose-600'
                    }`}
            >
                EN
            </motion.button>
        </div>
    );
};

export default LanguageSelector;
