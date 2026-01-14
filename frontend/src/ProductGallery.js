import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function ProductGallery({ token }) {
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/productos/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setProducts(response.data); // guarda las películas en el estado
    })
    .catch(error => {
      console.error('Error al cargar productos:', error);
    });
  }, [token]);

  return (
    <div className="gallery">
      {productos.map(product => (
        <div className="card" key={product.id}>
          <h3>{product.nombre}</h3>
          <p><strong>Tipo:</strong> {product.tip}</p>
          <p><strong>Precio:</strong> {product.prec} min</p>
          <p><strong>Valoracion:</strong> {product.valora}/10</p>
          <p>{product.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGallery;
