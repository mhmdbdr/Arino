import { createStore } from "vuex";
//modules
import sidebar from "./modules/global/TheHeader/index";
import portfolio from "./modules/portfolio/index";
import blog from "./modules/blog/index";
import teamMembers from "./modules/teamMembers/index";
import shop from "./modules/shop/index";
import cart from "./modules/cart/index";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const store = createStore({
  modules: {
    sidebar,
    portfolio,
    blog,
    teamMembers,
    shop,
    cart,
  },
  state() {
    return {
      shopLi: false,
      pagesLi: false,
      doneLoading: false,
      errorVal: false,
    };
  },
  getters,
  mutations,
  actions,
});

export default store;
