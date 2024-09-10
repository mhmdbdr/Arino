export default {
  toggleProduct(state, payload) {
    if (payload[1] === "add") {
      state.myCart.push(payload[0]);
    } else {
      for (let i = 0; i < state.myCart.length; i++) {
        if (state.myCart[i].id === payload[0].id) {
          state.myCart.splice(i, 1);
        }
      }
    }
  },
  initCartLocalStorage(state, payload) {
    state.myCart = payload;
  },
  initWishListLocalStorage(state, payload) {
    state.WishList = payload;
  },
  changeProductQuant(state, payload) {
    const changedProduct = state.myCart.find((prod) => {
      return prod.id === payload[1];
    });
    const index = state.myCart.indexOf(changedProduct);
    state.myCart[index].quant = payload[0];
  },
  successOrder(state, payload) {
    state.orderData = payload;
  },
  successDetails(state, payload) {
    state.successDetails = payload;
  },
  clearCart(state) {
    state.myCart = [];
  },
  toggleProdWishlist(state, payload) {
    if (payload[1] === "add") {
      state.WishList.push(payload[0]);
    } else {
      for (let i = 0; i < state.WishList.length; i++) {
        if (state.WishList[i].id === payload[0].id) {
          state.WishList.splice(i, 1);
        }
      }
    }
  },
};
