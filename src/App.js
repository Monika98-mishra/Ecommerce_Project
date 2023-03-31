import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path="login" element={<Login />}> </Route>
          <Route path="register" element={<Register />}> </Route>
          <Route path="update" element={<Protected Cmp={ UpdateProduct}/>}> </Route>
          <Route path="add" element={<Protected Cmp={AddProduct}/>}> </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
