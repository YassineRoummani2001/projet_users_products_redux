import React, { useState } from "react";
import { connect } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";


const Addproduct = ({ products, addproduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkproductEmailExists = products.filter((product) =>
      product.price === price ? product : null
    );
  
    if (!title || !price ) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkproductEmailExists.length > 0) {
      return toast.error("This title already exists!!");
    }
   

    const data = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 0,
      price,
      title,
      
    };

    addproduct(data);
    toast.success("Product added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Product</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label for="colFormLabel" className="form-label">Title :</label>
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
            <label for="colFormLabel" className="form-label">Price :</label>
              <input
                className="form-control"
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
              id="btn"
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state,
});
const mapDispatchToProps = (dispatch) => ({
  addproduct: (data) => {
    dispatch({ type: "ADD_product", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Addproduct);