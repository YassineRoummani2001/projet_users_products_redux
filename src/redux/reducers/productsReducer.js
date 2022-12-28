const initialStateproduct = [
  
    { id: 0, title: "tv", price: 5000 },
    { id: 1, title: "phone", price: 4000 },
    
  ];
  
  export const productsReducer = (state = initialStateproduct, action) => {
    switch (action.type) {
      case "ADD_product":
        state = [...state, action.payload];
        return state;
      case "DELETE_product":
        const deleteProduct = state.filter((product) =>
          product.id === action.payload ? null : product
        );
        state = deleteProduct;
        return state;
      case "UPDATE_product":
        const updateProduct = state.filter((product) =>
          product.id === action.payload.id
            ? Object.assign(product, action.payload)
            : product
        );
        state = updateProduct;
        return state;
      case "RESET_product":
        state = [{ title: null, price: null }];
        return state;
      default:
        return state;
    }
  };