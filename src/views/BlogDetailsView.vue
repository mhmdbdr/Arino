<template>
  <div class="blogDetails">
    <base-hero class="heroBg" :imgUrl="imgUrl">
      <template #head>Blog Single</template>
      <template #nav>Blog Single</template>
    </base-hero>
    <div class="blogContent topPaddingO">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12">
            <div class="post">
              <div v-show="doneLoadingVal" class="img-container">
                <img loading="lazy" :src="getBlogData.imgUrl" alt="post img" />
              </div>
              <loading-spinner v-show="!doneLoadingVal"></loading-spinner>
              <div class="info">
                <div class="date">{{ getBlogData.date }}</div>
                <div class="cat">{{ getBlogData.cat }}</div>
              </div>
              <div class="title">{{ getBlogData.title }}</div>
              <p>{{ getBlogData.p1 }}</p>
              <div class="quote-container">
                <div class="quote">{{ getBlogData.quote }}</div>
                <div class="quoteName">{{ getBlogData.quoteName }}</div>
              </div>
              <p>{{ getBlogData.p2 }}</p>
              <div class="row">
                <div class="col-md-6">
                  <div class="img-container min-imgcont">
                    <img
                      loading="lazy"
                      src="../../imgs/blogDetailsAssets/blog_details_img_1.webp"
                      alt="second post img"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-container min-imgcont">
                    <img
                      loading="lazy"
                      src="../../imgs/blogDetailsAssets/blog_details_img_2.webp"
                      alt="second post img"
                    />
                  </div>
                </div>
              </div>
              <div class="min-title">{{ getBlogData.minTitle }}</div>
              <p>{{ getBlogData.p3 }}</p>
              <p>{{ getBlogData.p1 }}</p>
            </div>
            <div class="leaveReply">
              <div class="mainTitle">Leave A Reply</div>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form action="#">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mainInput">
                      <label for="name">Full Name*</label>
                      <input id="name" type="text" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mainInput">
                      <label for="email">Email*</label>
                      <input id="email" type="email" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mainInput">
                      <label for="website">Website*</label>
                      <input id="website" type="text" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mainInput">
                      <label for="comment">Write Your Comment*</label>
                      <textarea cols="30" rows="7" id="comment"></textarea>
                    </div>
                  </div>
                </div>
                <div class="mainBtn">
                  Send Message
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </div>
              </form>
            </div>
          </div>
          <div class="col-xl-3 offset-xl-1 col-lg-4 col-12 blognav">
            <base-blogNav></base-blogNav>
          </div>
        </div>
      </div>
    </div>
    <base-meeting :btn="true">
      <template #default>
        Let’s disscuse make <br />
        something cool together
      </template>
    </base-meeting>
  </div>
</template>

<script>
export default {
  props: ["blogId"],
  data() {
    return {
      imgUrl: require("../../imgs/blogDetailsAssets/blog_details_hero_bg.webp"),
      doneLoadingVal: false,
    };
  },
  computed: {
    getBlogData() {
      const data = this.$store.getters["blog/blogData"].find((ele) => {
        return ele.id === this.blogId;
      });
      return data ? { ...data } : false;
    },
  },
  methods: {
    doneLoading() {
      const content = document.querySelector(".blogDetails .heroBg");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.$store.dispatch("doneLoading", true);
      });
    },
    doneImgFetching() {
      const content = document.querySelector(".post .img-container");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.doneLoadingVal = true;
      });
    },
    async loadData() {
      if (!this.getBlogData) {
        await this.$store.dispatch("blog/fetchBlogData", {
          id: this.blogId,
          router: this.$router,
        });
      }
      this.doneLoading();
      this.doneImgFetching();
    },
  },
  watch: {
    "$route.params.blogId"() {
      this.doneLoadingVal = false;
      this.loadData();
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.blogDetails {
  .blogContent {
    .post {
      .img-container {
        overflow: hidden;
        border-radius: 15px;
        position: relative;
        img {
          max-width: 100%;
        }
      }
      @media (max-width: 991px) {
        .info {
          margin: 25px 0 10px !important;
        }
      }
      .info {
        margin: 45px 0 15px;
        display: flex;
        color: #999696;
        font-size: 19px;
        font-weight: 500;
        .date {
          margin-right: 12px;
          padding-right: 12px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            height: 20px;
            width: 2px;
            border-radius: 2px;
            background-color: #fefefe;
          }
        }
      }
      @media (max-width: 991px) {
        .title {
          margin-bottom: 15px !important;
          font-size: 30px !important;
        }
      }
      .title {
        display: block;
        color: #fefefe;
        margin-bottom: 30px;
        font-size: 39px;
        font-weight: 700;
        line-height: 1.3em;
      }
      p {
        display: block;
        margin-bottom: 45px;
        color: #fefefeb3;
        position: relative;
        font-size: 17px;
        line-height: 1.75em;
      }
      .quote-container {
        background-color: black;
        padding: 40px 35px;
        line-height: 1.9em;
        font-size: 19px;
        font-weight: 500;
        color: white;
        border-left: 5px solid var(--prim-color);
        margin-bottom: 45px;
        font-style: italic;
        .quoteName {
          position: relative;
          color: rgba(254, 254, 254, 0.7);
          font-size: 17px;
          line-height: 1.9em;
          font-style: initial;
          font-weight: 400;
          margin-top: 15px;
          padding-left: 35px;
          &::before {
            content: "";
            position: absolute;
            height: 2px;
            width: 20px;
            border-radius: 2px;
            left: 0;
            top: 50%;
            background-color: white;
          }
        }
      }
      .min-imgcont {
        margin-bottom: 45px;
        img {
          width: 100%;
        }
      }
      .min-title {
        margin-bottom: 25px;
        font-size: 30px;
        font-weight: 700;
      }
    }
    .leaveReply {
      padding-top: 30px;
      .mainTitle {
        margin-bottom: 5px;
      }
      @media (max-width: 991px) {
        p {
          margin-bottom: 30px !important;
        }
      }
      p {
        color: #fefefeb3;
        margin-bottom: 40px;
      }
      .mainBtn {
        width: fit-content;
        cursor: pointer;
      }
    }
  }
}
</style>
