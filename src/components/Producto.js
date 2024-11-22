import React from 'react';
import { Link } from 'react-router-dom';

function Producto({ producto }) {
  return (
    <div className="producto">
      <Link to={`/producto/${producto.slug}`}>
        <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
        <h3>{producto.nombre}</h3>
      </Link>
      <p>Precio: ${producto.precio}</p>
      <p>SKU: {producto.sku}</p>
      <p>Descripción: {producto.descripcion}</p>
      <button>Ver más</button> </div>
  );
}
export default Producto;