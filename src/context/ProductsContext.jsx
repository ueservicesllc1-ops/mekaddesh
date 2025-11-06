import React, { createContext, useContext, useState, useEffect } from 'react';
import * as productsService from '../services/productsService';

const ProductsContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar productos de Firestore al iniciar
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const productsData = await productsService.getProducts();
      setProducts(productsData);
    } catch (err) {
      console.error('Error loading products:', err);
      setError(err.message);
      // Si hay error, mantener array vacío
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    try {
      setError(null);
      const newProduct = {
        ...product,
        rating: product.rating || 4.5,
      };
      const createdProduct = await productsService.addProduct(newProduct);
      setProducts((prev) => [createdProduct, ...prev]);
      return createdProduct;
    } catch (err) {
      console.error('Error adding product:', err);
      setError(err.message);
      throw err;
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      setError(null);
      const updated = await productsService.updateProduct(id, updatedProduct);
      setProducts((prev) =>
        prev.map((product) => (product.id === id ? updated : product))
      );
      return updated;
    } catch (err) {
      console.error('Error updating product:', err);
      setError(err.message);
      throw err;
    }
  };

  const deleteProduct = async (id) => {
    try {
      setError(null);
      await productsService.deleteProduct(id);
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (err) {
      console.error('Error deleting product:', err);
      setError(err.message);
      throw err;
    }
  };

  const getFeaturedProducts = () => {
    // Retorna los primeros 3 productos o los más valorados
    return products.slice(0, 3);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        addProduct,
        updateProduct,
        deleteProduct,
        getFeaturedProducts,
        refreshProducts: loadProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

