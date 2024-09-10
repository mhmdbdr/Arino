<template>
  <div class="notFoundPage">
    <base-hero class="baseHero" :imgUrl="imgUrl">
      <template #head>404</template>
      <template #nav>404</template>
    </base-hero>
    <div class="content">
      <div class="container">
        <div class="error404">
          <span>Oops! We can’t find that page.</span>
          <div class="img-container">
            <img
              loading="lazy"
              src="../../imgs/notFound/notFound.webp"
              alt="notfound"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: require("../../imgs/notFound/notFound_hero_bg.webp"),
    };
  },
  mounted() {
    this.$store.dispatch("errorHandling", false);
    const content = document.querySelector(".baseHero");
    const imgload = this.$imagesLoaded(content);
    imgload.on("done", () => {
      this.$store.dispatch("doneLoading", true);
    });
  },
};
</script>

<style lang="scss" scoped>
.notFoundPage {
  .content {
    margin: 80px 0 0px;
    .error404 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        display: block;
        text-align: center;
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      .img-container {
        img {
          max-width: 100%;
          width: 400px;
        }
      }
    }
  }
}
</style>
