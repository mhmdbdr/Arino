import axios from "axios";
export default {
  toggleProduct(context, payload) {
    context.commit("toggleProduct", payload);
  },
  initCartLocalStorage(context, payload) {
    context.commit("initCartLocalStorage", payload);
  },
  initWishListLocalStorage(context, payload) {
    context.commit("initWishListLocalStorage", payload);
  },
  changeProductQuant(context, payload) {
    context.commit("changeProductQuant", payload);
  },
  async sendOrder(context, payload) {
    try {
      const newOrder = {
        orderNumber: payload.orderNumber,
        date: payload.date,
        total: payload.total,
        order: payload.order,
        clientInfo: payload.clientInfo,
      };
      await axios.post(
        "https://arino-clone-default-rtdb.firebaseio.com/orders.json",
        newOrder
      );
    } catch (error) {
      context.commit("errorHandling", true, { root: true });
      throw error;
    }
  },
  successOrder(context, payload) {
    context.commit("successOrder", payload);
  },
  successDetails(context, payload) {
    context.commit("successDetails", payload);
  },
  clearCart(context) {
    context.commit("clearCart");
  },
  toggleProdWishlist(context, payload) {
    context.commit("toggleProdWishlist", payload);
  },
};
