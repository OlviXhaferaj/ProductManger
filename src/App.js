import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
// import ProductForm from './Components/ProductForm';
import Main from './views/Main';
import Detail from './Components/Detail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route element={<Main/>} path="/product" default/>
        <Route element={<Detail/>} path="/product/:id"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
