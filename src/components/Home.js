import React from 'react';
import Registro from './Registro';
import Login from './Login';
import ListaProductos from './ListaProductos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faHouse , faMagnifyingGlass, faBagShopping, faBars} from '@fortawesome/free-solid-svg-icons';
import Newsleterr from './Newletters';
import Footer from './Footer';






function Home() {
  return (
    <div className="App">
      <header className="App-header">

        <h1 id="miTitulo">
          Tienda Online</h1>
      
      <div>
        <FontAwesomeIcon icon={faHouse} size='2x'color='purple'style={{ marginRight: '950px', marginLeft:'40px' }} />

        <input type="buscador" id="buscador" placeholder="Buscar" />
          <FontAwesomeIcon icon={faMagnifyingGlass } size='2x'color='purple' style={{ marginLeft: '10px' }} />
  
          <FontAwesomeIcon icon={faBagShopping} size='2x'color='purple' style={{ marginLeft: '20px' }} />
          <FontAwesomeIcon icon={faBars} size='2x'color='purple' style={{ marginLeft: '20px' }} />
     </div>

      </header>
      <body>
        <div className='espacio'></div>
        <Registro />
        <br /> 
        <Login />
        <br /> 
        <ListaProductos />
        <br /> 

        <Newsleterr/>
        
        
        <Footer/>

     
      </body>
    </div>
  );
}

export default Home;
