export const addProductToCart = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
});


export const removeFromCart = (product) => {
    return {
      type: 'REMOVE_PRODUCT',
      payload: product,
    };
  };
  export const resetCart = () => {
    return {
      type: 'RESET_STATE',
    };
  };
  