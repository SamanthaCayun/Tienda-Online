import React from 'react';
import Producto from './Producto'; 
import Productos from './data/Productos';
import { Link } from 'react-router-dom';

function ListaProductos() {
  return (
    <div className="lista-productos">
    <h2 id= "miLista">Lista de Productos</h2>
    <ul>
      {Productos.map((producto) => (
        <li key={producto.id}>
          <Link to={`/producto/${producto.slug}`}>
            <Producto producto={producto} />
          </Link>
        </li>
      ))}
    </ul>
   
  </div>

  );
}

export default ListaProductos;



