import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSave, FiTrash2, FiUpload, FiLoader } from 'react-icons/fi';
import { useProducts } from '../context/ProductsContext';
import { uploadImage } from '../services/uploadService';

const ProductModal = ({ isOpen, onClose, productToEdit = null }) => {
  const { addProduct, updateProduct, deleteProduct } = useProducts();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    rating: 4.5,
  });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        name: productToEdit.name || '',
        price: productToEdit.price || '',
        image: productToEdit.image || '',
        description: productToEdit.description || '',
        rating: productToEdit.rating || 4.5,
      });
    } else {
      setFormData({
        name: '',
        price: '',
        image: '',
        description: '',
        rating: 4.5,
      });
    }
  }, [productToEdit, isOpen]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      // Preview local
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = formData.image;

      // PASO 1: Si hay un archivo nuevo, primero subirlo a B2 y obtener la URL
      if (imageFile) {
        console.log('Subiendo imagen a B2...');
        imageUrl = await uploadImage(imageFile);
        console.log('Imagen subida exitosamente. URL:', imageUrl);
        
        // Verificar que obtuvimos una URL válida
        if (!imageUrl || !imageUrl.startsWith('http')) {
          throw new Error('No se pudo obtener la URL de la imagen subida');
        }
      } else if (!productToEdit && !imageFile) {
        // Si es un producto nuevo y no hay archivo, requerir imagen
        alert('Por favor, selecciona una imagen para el producto');
        setUploading(false);
        return;
      }

      // PASO 2: Una vez que tenemos la URL de la imagen, guardar los metadatos en Firestore
      console.log('Guardando metadatos en Firestore...');
      const productData = {
        name: formData.name,
        price: parseFloat(formData.price),
        image: imageUrl, // URL obtenida de B2
        description: formData.description,
        rating: parseFloat(formData.rating),
      };

      if (productToEdit) {
        await updateProduct(productToEdit.id, productData);
        console.log('Producto actualizado en Firestore');
      } else {
        await addProduct(productData);
        console.log('Producto creado en Firestore');
      }
      
      setImageFile(null);
      onClose();
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Error al guardar el producto: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = () => {
    if (productToEdit && window.confirm('¿Estás seguro de eliminar este producto?')) {
      deleteProduct(productToEdit.id);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-rose-200 bg-gradient-rose">
                <h2 className="text-2xl font-bold text-gray-800">
                  {productToEdit ? 'Editar Producto' : 'Crear Nuevo Producto'}
                </h2>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-rose-100 rounded-full transition-colors"
                >
                  <FiX className="text-2xl text-gray-700" />
                </motion.button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nombre del Producto *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="Ej: Serum Revitalizante"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Precio *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      min="0"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="Ej: 89.99"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Imagen del Producto *
                    </label>
                    <div className="space-y-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        required={!productToEdit}
                        className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                        disabled={uploading}
                      />
                      {formData.image && (
                        <div className="mt-2">
                          <img
                            src={formData.image}
                            alt="Preview"
                            className="w-32 h-32 object-cover rounded-lg border border-rose-200"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Descripción *
                    </label>
                    <textarea
                      required
                      rows="3"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                      placeholder="Descripción del producto..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Calificación (1-5)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="1"
                      max="5"
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="4.5"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-rose-200">
                  {productToEdit && (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDelete}
                      className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-red-600 transition-colors"
                    >
                      <FiTrash2 />
                      Eliminar
                    </motion.button>
                  )}
                  <div className="flex gap-3 ml-auto">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onClose}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Cancelar
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={uploading}
                      className="px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-semibold flex items-center gap-2 shadow-rose hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {uploading ? (
                        <>
                          <FiLoader className="animate-spin" />
                          Guardando...
                        </>
                      ) : (
                        <>
                          <FiSave />
                          {productToEdit ? 'Guardar Cambios' : 'Crear Producto'}
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;

