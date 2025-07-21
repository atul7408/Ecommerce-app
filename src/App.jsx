import React from 'react'
import { Navbar } from './component/Navbar';
import { Shop } from './Pages/Shop';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Offer } from './component/offer';
import { Women } from './component/Women';
import { ShopCategory } from './Pages/ShopCategory';

import { Kid } from './component/Kid';
import { Footer } from './component/Footer';



import { Contact } from './Pages/Contact';
import LoginSignup from './Pages/LoginSignup';


const   App = () => {
  return (
 <>
 

<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Shop/>}/>
<Route path="/Men" element={<ShopCategory category="men" />}/>
<Route path="/Women" element={<ShopCategory category="women" />}/>
<Route path="/Kid" element={<ShopCategory category="kid" />}/>
<Route path="/login" element={<LoginSignup/>}/>
<Route path="/Contact" element={<Contact/>}/>
</Routes>
</BrowserRouter>


 </>
  )
}
export default App;
