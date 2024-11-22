import React from 'react';

const Login = () => {
  return (
    <div className='contenedor'>
      <h2>Acceso</h2>
      <form id="login">
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
        
        <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default Login;