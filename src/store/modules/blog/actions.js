import axios from "axios";
export default {
  async fetchPagenationData(context, payload) {
    try {
      let res;
      if (payload.startAfterKey) {
        res = await axios.get(
          `https://arino-clone-default-rtdb.firebaseio.com/blogPosts.json?orderBy="$key"&startAfter="${payload.startAfterKey}"&limitToFirst=${payload.limitToFirst}`
        );
      } else {
        res = await axios.get(
          `https://arino-clone-default-rtdb.firebaseio.com/blogPosts.json?orderBy="$key"&limitToFirst=${payload.limitToFirst}`
        );
      }

      const data = [];

      for (const key in res.data) {
        const product = {
          id: res.data[key].id,
          imgUrl: res.data[key].imgUrl,
          title: res.data[key].title,
          p1: res.data[key].p1,
          p2: res.data[key].p2,
          p3: res.data[key].p3,
          cat: res.data[key].cat,
          date: res.data[key].date,
          minTitle: res.data[key].minTitle,
          quote: res.data[key].quote,
          quoteName: res.data[key].quoteName,
          recentImg: res.data[key].recentImg,
          recentTitle: res.data[key].recentTitle,
          loaded: false,
        };
        data.push(product);
      }
      context.commit("fetchPagenationData", { data: data, page: payload.page });
    } catch (err) {
      context.commit("errorHandling", true, { root: true });
      console.error("Error fetching projects data:");
    }
  },
  async fetchBlogData(context, payload) {
    try {
      const res = await axios.get(
        `https://arino-clone-default-rtdb.firebaseio.com/blogPosts/${payload.id}.json`
      );

      if (!res.data) {
        payload.router.replace({ name: "notFound" });
        console.error("Error fetching projects data:");
      }

      const product = {
        id: res.data.id,
        imgUrl: res.data.imgUrl,
        title: res.data.title,
        p1: res.data.p1,
        p2: res.data.p2,
        p3: res.data.p3,
        cat: res.data.cat,
        date: res.data.date,
        minTitle: res.data.minTitle,
        quote: res.data.quote,
        quoteName: res.data.quoteName,
        recentImg: res.data.recentImg,
        recentTitle: res.data.recentTitle,
        loaded: false,
      };
      context.commit("fetchBlogData", product);
    } catch (err) {
      context.commit("errorHandling", true, { root: true });
      console.error("Error fetching projects data:");
    }
  },
  async fetchHomeBlogsData(context, payload) {
    try {
      const res = await axios.get(
        `https://arino-clone-default-rtdb.firebaseio.com/blogPosts.json?orderBy="$key"&limitToFirst=${payload}`
      );

      if (!res.data) {
        payload.router.replace({ name: "notFound" });
        console.error("Error fetching projects data:");
      }

      const data = [];

      for (const key in res.data) {
        const product = {
          id: res.data[key].id,
          imgUrl: res.data[key].imgUrl,
          title: res.data[key].title,
          p1: res.data[key].p1,
          p2: res.data[key].p2,
          p3: res.data[key].p3,
          cat: res.data[key].cat,
          date: res.data[key].date,
          minTitle: res.data[key].minTitle,
          quote: res.data[key].quote,
          quoteName: res.data[key].quoteName,
          recentImg: res.data[key].recentImg,
          recentTitle: res.data[key].recentTitle,
          loaded: false,
        };
        data.push(product);
      }
      context.commit("fetchHomeBlogsData", data);
    } catch (err) {
      context.commit("errorHandling", true, { root: true });
      console.error("Error fetching projects data:");
    }
  },
  async fetchrecentBlogsData(context, payload) {
    let url = `https://arino-clone-default-rtdb.firebaseio.com/blogPosts.json`;
    if (payload) {
      url += `?orderBy="$key"&limitToFirst=${payload}`;
    }
    try {
      const res = await axios.get(url);

      const data = [];

      for (const key in res.data) {
        const product = {
          id: res.data[key].id,
          date: res.data[key].date,
          recentImg: res.data[key].recentImg,
          recentTitle: res.data[key].recentTitle,
          loaded: false,
        };
        data.push(product);
      }
      context.commit("fetchRecentData", data);
    } catch (err) {
      console.error("Error fetching recent projects data:");
    }
  },
  changeLoadState(context, payload) {
    context.commit("changeLoadState", payload);
  },
  setImgsUrls(context, payload) {
    context.commit("setImgsUrls", payload);
  },
  setRecentImgsUrls(context, payload) {
    context.commit("setRecentImgsUrls", payload);
  },
};
