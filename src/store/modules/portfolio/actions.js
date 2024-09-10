import axios from "axios";
export default {
  async homePortfoliosData(context, payload) {
    let url = `https://arino-clone-default-rtdb.firebaseio.com/projects.json`;
    if (payload) {
      url += `?orderBy="$key"&limitToFirst=${payload}`;
    }
    try {
      const res = await axios.get(url);
      const data = [];

      for (const key in res.data) {
        const product = {
          id: res.data[key].id,
          imgUrl: res.data[key].imgUrl,
          title: res.data[key].title,
          paragraph1: res.data[key].paragraph1,
          paragraph2: res.data[key].paragraph2,
          category: res.data[key].category,
          location: res.data[key].location,
          Software: res.data[key].Software,
          Dated: res.data[key].Dated,
          Client: res.data[key].Client,
        };
        data.push(product);
      }
      context.commit("homePortfoliosData", data);
    } catch (error) {
      context.commit("errorHandling", true, { root: true });
    }
  },
  async fetchProjectData(context, payload) {
    try {
      const res = await axios.get(
        `https://arino-clone-default-rtdb.firebaseio.com/projects/${payload.id}.json`
      );

      if (!res.data) {
        payload.router.replace({ name: "notFound" });
        console.error("Error fetching projects data:");
      }

      const product = {
        id: res.data.id,
        imgUrl: res.data.imgUrl,
        title: res.data.title,
        paragraph1: res.data.paragraph1,
        paragraph2: res.data.paragraph2,
        category: res.data.category,
        location: res.data.location,
        Software: res.data.Software,
        Dated: res.data.Dated,
        Client: res.data.Client,
      };

      context.commit("fetchProjectData", product);
    } catch (error) {
      context.commit("errorHandling", true, { root: true });
      console.error("Error fetching projects data:");
    }
  },
  setImgsUrls(context, payload) {
    context.commit("setImgsUrls", payload);
  },
};
