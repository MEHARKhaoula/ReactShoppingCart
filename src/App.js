

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/NavBar';
import Cancel from './pages/Cancel'
import Success from './pages/Success';
import Store from './pages/Store';
import {Container} from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from './CartContext'
function App() {
  return (
    <CartProvider>
    <Container>
 <NavBarComponent></NavBarComponent>
 <BrowserRouter>
 <Routes>
  <Route index element={<Store/>}/>
  <Route path="success" element={<Success/>}/>
  <Route path="cancel" element={<Cancel/>}/>
 </Routes>
 </BrowserRouter>
 
    </Container>
    </CartProvider>
  );
}

export default App;
