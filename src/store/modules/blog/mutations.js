export default {
  fetchPagenationData(state, payload) {
    state.pagenationData = {
      ...state.pagenationData,
      [payload.page]: payload.data,
    };
  },
  fetchBlogData(state, payload) {
    state.blogData.push(payload);
  },
  fetchHomeBlogsData(state, payload) {
    state.HomeBlogsData.push(...payload);
  },
  fetchRecentData(state, payload) {
    state.recentBlogs = payload;
  },
  changeLoadState(state, payload) {
    const index = state.pagenationData[payload.page].findIndex(
      (blog) => blog.id === payload.id
    );
    state.pagenationData[payload.page][index].loaded = true;
  },
};
