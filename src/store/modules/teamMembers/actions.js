import axios from "axios";
export default {
  async fetchTeammembersData(context) {
    try {
      const res = await axios.get(
        `https://arino-clone-default-rtdb.firebaseio.com/teamMembers/.json`
      );
      const data = [];

      for (const key in res.data) {
        const product = {
          id: res.data[key].id,
          imgUrl: res.data[key].imgUrl,
          job: res.data[key].job,
          p1: res.data[key].p1,
          p2: res.data[key].p2,
          name: res.data[key].name,
        };
        data.push(product);
      }
      context.commit("fetchTeammembersData", data);
    } catch (error) {
      context.commit("errorHandling", true, { root: true });
    }
  },
  async fetchTeammemberData(context, payload) {
    try {
      const res = await axios.get(
        `https://arino-clone-default-rtdb.firebaseio.com/teamMembers/${payload.id}.json`
      );

      if (!res.data) {
        payload.router.replace({ name: "notFound" });
        console.error("Error fetching team member data:");
      }

      const product = {
        id: res.data.id,
        imgUrl: res.data.imgUrl,
        job: res.data.job,
        p1: res.data.p1,
        p2: res.data.p2,
        name: res.data.name,
      };

      context.commit("fetchTeammemberData", product);
    } catch (error) {
      context.commit("errorHandling", true, { root: true });
      console.error("Error fetching team member data:");
    }
  },
  setImgsUrls(context, payload) {
    context.commit("setImgsUrls", payload);
  },
};
