import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h5>Dejanos tu email para recibir novedades</h5>
      <form id="newsletter-form">
        <div className="form-group">
         
          <input type="email" id="email" placeholder="Email" />
          <button type="submit">Registrar</button>
        </div>
        
      </form>
    </div>
  );
};

export default Newsletter;
