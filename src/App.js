import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./componentes/navbar"
import {Shop} from "./paginas/shopping/shop"
import {Carrinho} from "./paginas/carrinho/carrinho"
import {InfoShopProv} from './info-shop/info-shop'
import {Produtos} from "./produtos"
import {Footer} from "./componentes/footer"
import {BarraDePesquisa} from "./paginas/shopping/barraDePesquisa"



function App() {

  
  
  return (
    <div className="App"> 
    
    <div className='cont-Footer'>
    <InfoShopProv>
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/carrinho' element={<Carrinho />}/>
          </Routes>
        </Router>
      </InfoShopProv>
    </div>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
