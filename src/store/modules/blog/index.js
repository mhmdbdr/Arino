import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      pagenationData: [],
      blogData: [],
      recentBlogs: [],
      HomeBlogsData: [],
      blogIds: [
        "2MDh56gPSuMskTkYpp6QyxfppFTM",
        "7Q8UuM5IvLTQ3EKFbs1kkumza4UB",
        "CPcb1WdJK8kMMGN5G8O0wIN5rmdF",
        "HctqPH4uJXaBhD8LHzP7Pp7vuSrO",
        "U6HYfPicyrSx841rocys7XjaUJNf",
        "WDMAF0nhNAQmV6VW8UsjMwAufhzO",
        "qaY48IY8lqZFiItkoqHnEbKdWl0v",
      ],
    };
  },
  getters,
  mutations,
  actions,
};
