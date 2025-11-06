import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  query,
  orderBy 
} from "firebase/firestore";
import { db } from "../firebase/config";

const PRODUCTS_COLLECTION = "products";

export const getProducts = async () => {
  try {
    // Try to get products ordered by createdAt, fallback to simple query if no createdAt field
    let querySnapshot;
    try {
      const q = query(collection(db, PRODUCTS_COLLECTION), orderBy("createdAt", "desc"));
      querySnapshot = await getDocs(q);
    } catch (orderError) {
      // If orderBy fails (e.g., no createdAt field), just get all products
      console.warn("Could not order by createdAt, fetching all products:", orderError);
      querySnapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
    }
    
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};

export const addProduct = async (productData) => {
  try {
    const productWithTimestamp = {
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), productWithTimestamp);
    return { id: docRef.id, ...productWithTimestamp };
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const productRef = doc(db, PRODUCTS_COLLECTION, id);
    const updatedData = {
      ...productData,
      updatedAt: new Date(),
    };
    await updateDoc(productRef, updatedData);
    return { id, ...updatedData };
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(db, PRODUCTS_COLLECTION, id));
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

