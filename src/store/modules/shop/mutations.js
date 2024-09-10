export default {
  fetchPagenationData(state, payload) {
    state.pagenationData = {
      ...state.pagenationData,
      [payload.page]: payload.data,
    };
  },
  fetchProductData(state, payload) {
    state.productsData.push(payload);
  },
};
