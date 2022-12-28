import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const product = ({ products, deleteProduct }) => {
  return (
    <div className="container">
    <div className="row d-flex flex-column">
      <Link to="/addproduct" className="btn btn-outline-dark my-5 ml-auto ">
        Add Product
      </Link>
      <div className="col-md-10 mx-auto my-4">
        <table className="table table-hover">
          <thead className="table-header bg-dark text-white">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <Link
                      to={`/editproduct/${product.id}`}
                      className="btn btn-sm btn-primary mr-1"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteProduct(product.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>No Product found</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
};

const mapStateToProps = (state) => ({
  products: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (id) => {
    dispatch({ type: "DELETE_product", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(product);
