import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      productsData: [],
      pagenationData: [],
      productsIds: [
        "0r6dZpnTLloLboN0r6SMYQxttXxa",
        "7QUKO7MkeJoMCfgLPyJIup1rU95r",
        "9IGO546SnkM341qG6KSmbEwFhHME",
        "9cDE0LG3F2txK4ztgMi9ApaiHk47",
        "BI8hLDgrRYd6BKlWeOxIpIaoqDY5",
        "GRRgIXnm4vA7WJlKeOTvDTHCmFzh",
        "GYR6syQLm56Ti0siBusv5m6ZgssM",
        "GwllNXp0A18KAHCGVHHV2E9wmMMo",
        "INkjuv9XC7QN25ZJ5X9kCsCNEXUr",
        "KBZ6BTeMULM2f7mjWkeM6kafzyEa",
        "NTo9yO4HwwlpcUi3xBeUvLM2xZGV",
        "QDsNxTImFr9iJo1jdhmEBW3edyfX",
        "YbakTiC4Oxa6GgcCt2aQuM21WtVg",
        "Yl1vHiLHoBERGohlj8vWPrQhjaSw",
        "bpZxw45EaIiQCLt3Wl0ivCYukP0p",
        "n7yPoU1k1Y86QizCmX6t7Cm24Wg8",
        "qDK3WlfL9RWoSu2Vqk0sHNLbTTEo",
        "qQA574Z3o203mrP3MP7u0ODspYQt",
        "v0mHZvQU8m1lxmNqVUZdZzLrY265",
        "wtBCo0EMN6mAFQEwAa3ghsD7uHs2",
        "ydm6dO782U0d1cGfkuOgHnAlgMhh",
      ],
    };
  },
  getters,
  mutations,
  actions,
};
