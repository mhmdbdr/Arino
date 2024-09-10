export default {
  activeLi(context, payload) {
    context.commit("activeLi", payload);
  },
  deactiveLi(context, payload) {
    context.commit("deactiveLi", payload);
  },
  doneLoading(context, payload) {
    context.commit("doneLoading", payload);
  },
  errorHandling(context, payload) {
    context.commit("errorHandling", payload);
  },
};
