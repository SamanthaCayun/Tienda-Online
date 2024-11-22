import React from 'react';

const Registro = () => {
  return (
    <div className='contenedor'>
         <h2>Registro</h2>
        <form id="registro">
          <div class='campo'>
          <label>Nombre:</label>
          <input type="text" />
          <br />
          </div>
          <div class='campo'>
          <label>Apellido:</label>
          <input type="text" />
          <br />
          </div>
          
          <div class='campo'>
          <label>Email:</label>
          <input type="email" />
          <br />
          </div>
          <div class='campo'>
          <label>Contraseña:</label>
          <input type="password" />
          <br />
          </div>
        
          <button type="submit">Registrar</button>
        </form>
      
      
    </div>
  )
}

export default Registro;
