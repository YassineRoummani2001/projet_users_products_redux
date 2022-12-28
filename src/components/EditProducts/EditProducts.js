import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Editproducts = ({ products, updateproduct }) => {
  const { id } = useParams();
  const history = useNavigate();
  const currentproduct = products.find(
    (product) => product.id === parseInt(id)
  );

  useEffect(() => {
    setTitle(currentproduct.title);
    setPrice(currentproduct.price);
  }, [currentproduct]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkproductpriceExists = products.filter((product) =>
      product.price === price && product.id !== currentproduct.id
        ? product
        : null
    );

    if (!price || !title ) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkproductpriceExists.length > 0) {
      return toast.error("This price already exists!!");
    }

    const data = {
      id: currentproduct.id,
      price,
      title,
    };

    updateproduct(data);
    toast.success("product updated successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentproduct ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={title}
                  placeholder={"title"}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                type='number'
                  className="form-control"
                  value={price}
                  placeholder={"price"}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update product
                </button>
                <Link to="/product">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
                  </Link>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No product Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateproduct: (data) => {
    dispatch({ type: "UPDATE_product", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Editproducts);
