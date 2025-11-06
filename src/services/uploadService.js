const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const uploadImage = async (file) => {
  try {
    console.log('Uploading image to:', `${API_URL}/api/upload`);
    console.log('File:', file.name, 'Size:', file.size);
    
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${API_URL}/api/upload`, {
      method: 'POST',
      body: formData,
    });

    console.log('Upload response status:', response.status);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Error desconocido' }));
      console.error('Upload error:', error);
      throw new Error(error.message || error.error || 'Error al subir la imagen');
    }

    const data = await response.json();
    console.log('Upload success! Response data:', data);
    console.log('Image URL from B2:', data.url);
    
    // El servidor devuelve la URL de la imagen subida a B2
    const imageUrl = data.url || data.imageUrl;
    
    if (!imageUrl) {
      throw new Error('No se recibió URL de la imagen desde el servidor');
    }
    
    return imageUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

