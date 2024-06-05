import About from './components/About';
import Caliculator from './components/Caliculator';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Animation from './components/Animation';


function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<About></About>}></Route>
          <Route path='/Calculator' element={<Caliculator></Caliculator>}></Route>
          <Route path='/Animation' element={<Animation></Animation>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
