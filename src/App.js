import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Menu } from './Components/Menu';
import { Contact } from './Components/Contact';
import { About } from './Components/About';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/Menu' exact element={<Menu/>} />
      <Route path='/About' exact element={<About/>} />
      <Route path='/Contact' exact element={<Contact/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
