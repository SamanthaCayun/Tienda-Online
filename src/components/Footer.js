import React from 'react';
import { TiSocialFacebook ,TiSocialTwitter, TiSocialInstagram , TiSocialYoutube } from "react-icons/ti";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            
            <h4>Contacto</h4>
            <p>Email: <a href="mailto:samanthacayun@gmail.com">samanthacayun@gmail.com</a></p>
            <p>Telefono: +123 34555</p>
            <p>Ubicacion: Trelew, Chubut</p>
          </div>
          <div className="col">

            <h4>Redes Sociales</h4>
            
              <TiSocialFacebook size={32} color="purple" />
              < TiSocialTwitter size={32} color="purple" />
              < TiSocialInstagram size={32} color="purple" />
              < TiSocialYoutube size={32} color="purple" />
            
          </div>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Smart Choice</p>
      </div>
    </footer>
  );
};

export default Footer;