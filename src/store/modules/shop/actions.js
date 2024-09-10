import axios from "axios";
export default {
  async fetchPagenationData(context, payload) {
    try {
      let res;
      if (payload.startAfterKey) {
        res = await axios.get(
          `https://arino-clone-default-rtdb.firebaseio.com/products.json?orderBy="$key"&startAfter="${payload.startAfterKey}"&limitToFirst=${payload.limitToFirst}`
        );
      } else {
        res = await axios.get(
          `https://arino-clone-default-rtdb.firebaseio.com/products.json?orderBy="$key"&limitToFirst=${payload.limitToFirst}`
        );
      }

      const data = [];

      for (const key in res.data) {
        const product = {
          id: res.data[key].id,
          SKU: res.data[key].SKU,
          category: res.data[key].category,
          colors: res.data[key].colors,
          description1: res.data[key].description1,
          description2: res.data[key].description2,
          imgUrl: res.data[key].imgUrl,
          name: res.data[key].name,
          price: res.data[key].price,
          reviews: res.data[key].reviews,
          sizes: res.data[key].sizes,
          stars: res.data[key].stars,
          tags: res.data[key].tags,
        };
        data.push(product);
      }
      context.commit("fetchPagenationData", { data: data, page: payload.page });
    } catch (err) {
      context.commit("errorHandling", true, { root: true });
      console.error("Error fetching products data");
    }
  },
  async fetchProductData(context, payload) {
    try {
      const res = await axios.get(
        `https://arino-clone-default-rtdb.firebaseio.com/products/${payload.id}.json`
      );

      if (!res.data) {
        payload.router.replace({ name: "notFound" });
        console.error("Error fetching product data");
      }

      const product = {
        id: res.data.id,
        SKU: res.data.SKU,
        category: res.data.category,
        colors: res.data.colors,
        description1: res.data.description1,
        description2: res.data.description2,
        imgUrl: res.data.imgUrl,
        name: res.data.name,
        price: res.data.price,
        reviews: res.data.reviews,
        sizes: res.data.sizes,
        stars: res.data.stars,
        tags: res.data.tags,
      };

      context.commit("fetchProductData", product);
    } catch (err) {
      context.commit("errorHandling", true, { root: true });
      console.error("Error fetching product data:");
    }
  },
};
