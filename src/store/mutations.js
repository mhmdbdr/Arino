export default {
  activeLi(state, payload) {
    if (payload === "shopLi") {
      state.shopLi = true;
    } else {
      state.pagesLi = true;
    }
  },
  deactiveLi(state, payload) {
    if (payload === "shopLi") {
      state.shopLi = false;
    } else {
      state.pagesLi = false;
    }
  },
  doneLoading(state, payload) {
    state.doneLoading = payload;
  },
  errorHandling(state, payload) {
    state.errorVal = payload;
  },
};
