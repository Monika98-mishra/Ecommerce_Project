import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
       {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="login" element={<Login />}> </Route>
          <Route path="register" element={<Register />}> </Route>
          <Route path="update" element={<UpdateProduct />}> </Route>
          <Route path="add" element={<AddProduct />}> </Route>
        </Routes>
      </BrowserRouter>
       */}
       helo
    </div>
  );
}

export default App;
