import React from 'react';
import { useParams } from 'react-router-dom';
import Productos from './data/Productos';


function ProductoDetalle() {
  const { slug } = useParams();

  const producto = Productos.find(p => p.slug === slug);

  return (
    <div className='camara'>
      <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
      <h1>{producto.nombre}</h1>
      <p>Precio: ${producto.precio}</p>
      <p>SKU: {producto.sku}</p>
      <p>Descripción: {producto.descripcion}</p>
      
    </div>
  );
}

export default ProductoDetalle;
