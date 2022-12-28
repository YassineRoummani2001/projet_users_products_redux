import React from "react";
import { Route , Routes  } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Users from "./components/Users/index";
import Interface from "./components/Home/Interface";
import AddProducts from "./components/AddProducts/AddProducts"
import EditProducts from "./components/EditProducts/EditProducts"
import Product from "./components/Products/Product";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
      <Route exact path="/" element={ <Interface />} />
      <Route exact path="/Users" element={ <Users />} />
      <Route exact path="/Product" element={ <Product />} />
      <Route exact path="/add" element={ <AddPost />} />
      <Route exact path="/edit/:id" element={<EditContact />} />
      <Route exact path="/AddProduct" element={ <AddProducts />} />
      <Route exact path="/editProduct/:id" element={<EditProducts />} />
      </Routes>
      
    </div>
  );
};
export default App;
