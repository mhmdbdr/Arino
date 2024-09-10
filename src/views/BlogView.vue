<template>
  <div class="blogView">
    <base-hero class="Hero" :imgUrl="imgUrl">
      <template #head>our blog</template>
      <template #nav>blog</template>
    </base-hero>
    <div class="blogContent topPaddingO">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12">
            <div class="content">
              <div v-for="post in getBlogData" :key="post.id" class="post">
                <div v-show="post.loaded" class="postData">
                  <router-link
                    aria-label="blogPost"
                    :to="'/blogDetails/' + post.id"
                  >
                    <div class="img-container">
                      <img
                        @load="changeLoadState(post.id)"
                        :src="post.imgUrl"
                        alt="blog post"
                      />
                    </div>
                  </router-link>
                  <div class="info">
                    <div class="date">{{ post.date }}</div>
                    <div class="cat">{{ post.cat }}</div>
                  </div>
                  <div class="title">
                    <router-link
                      aria-label="blogPost"
                      :to="'/blogDetails/' + post.id"
                    >
                      {{ post.title }}
                    </router-link>
                  </div>
                  <p>{{ post.p1 }}</p>
                  <div class="goToBtn">
                    <router-link
                      :aria-label="'Read more about ' + post.title"
                      :to="'/blogDetails/' + post.id"
                    >
                      <span class="hoveranim">See More</span>
                      <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                    </router-link>
                  </div>
                </div>
                <div v-show="!post.loaded" class="placeholderblog mb-5">
                  <loading-spinner></loading-spinner>
                  <div class="placeholder-glow">
                    <span class="placeholder col-1 me-2"></span>
                    <span class="placeholder col-1"></span>
                  </div>
                  <div class="placeholder-glow mt-2 mb-4">
                    <span class="placeholder col-8"></span>
                  </div>
                  <div class="placeholder-glow">
                    <span class="placeholder col-10"></span>
                    <span class="placeholder col-8"></span>
                    <span class="placeholder col-12"></span>
                  </div>
                  <div class="placeholder-glow">
                    <span class="placeholder col-2 mt-2"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="blogPagination">
              <router-link :to="prevPageLink" v-if="prevActive" class="prev">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
              </router-link>
              <div
                v-for="page in pagesNum"
                :key="page"
                :class="{
                  page: true,
                  active: isActivePage(page - 1),
                }"
              >
                <router-link aria-label="blogPage" :to="'/blog?page=' + page">{{
                  page
                }}</router-link>
              </div>
              <router-link :to="nextPageLink" v-if="nextActive" class="next">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </router-link>
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
        Let’s discuss making <br />
        something cool together
      </template>
    </base-meeting>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: require("../../imgs/blogAssets/blog_hero_bg.webp"),
      pagesNum: 3,
    };
  },
  computed: {
    getBlogData() {
      const data = this.$store.getters["blog/pagenationData"];
      return data[this.currentPage] || [];
    },
    currentPage() {
      return Number(this.$route.query.page) || 1;
    },
    nextActive() {
      return this.currentPage < this.pagesNum;
    },
    prevActive() {
      return this.currentPage > 1;
    },
    nextPageLink() {
      return {
        path: "/blog",
        query: { page: this.currentPage + 1 },
      };
    },
    prevPageLink() {
      return {
        path: "/blog",
        query: { page: this.currentPage - 1 },
      };
    },
  },
  methods: {
    async loadData() {
      const pagenationData = this.$store.getters["blog/pagenationData"];
      const alreadyIn = this.currentPage in pagenationData;
      if (!alreadyIn) {
        const page = this.currentPage;
        const idIndex = (page - 1) * 3;
        const ids = this.$store.getters["blog/blogIds"];
        const startAfterKey = ids[idIndex - 1];
        await this.$store.dispatch("blog/fetchPagenationData", {
          startAfterKey: page === 1 ? false : startAfterKey,
          limitToFirst: "3",
          page: page,
        });
      }
      this.doneLoading();
    },
    isActivePage(pageIndex) {
      return pageIndex + 1 === this.currentPage;
    },
    doneLoading() {
      const content = document.querySelector(".Hero");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.$store.dispatch("doneLoading", true);
      });
    },
    validatePageNumber() {
      const currPageNum = this.currentPage;
      if (currPageNum < 1 || currPageNum > this.pagesNum) {
        this.$router.replace({ path: "/blog", query: { page: 1 } });
      }
    },
    changeLoadState(id) {
      this.$store.dispatch("blog/changeLoadState", {
        id: id,
        page: this.currentPage,
      });
    },
  },
  watch: {
    "$route.query.page"() {
      this.validatePageNumber();
      this.loadData();
    },
  },
  mounted() {
    this.validatePageNumber();
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.blogView {
  .blogContent {
    .row {
      .content {
        min-height: 500px;
        .post {
          margin-bottom: 95px;
          .img-container {
            overflow: hidden;
            border-radius: 15px;
            position: relative;
            cursor: pointer;
            &::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: inherit;
              background-color: rgba(22, 22, 22, 0.5);
              opacity: 0;
              transition-duration: 0.4s;
            }
            img {
              width: 100%;
              max-height: 100%;
              max-width: 100%;
              transition-duration: 0.4s;
            }
            @media (min-width: 992px) {
              &:hover {
                img {
                  transform: scale(1.08);
                }
                &::after {
                  opacity: 1;
                }
              }
            }
            a {
              display: block;
            }
          }
          .info {
            margin: 45px 0 15px;
            display: flex;
            color: #999696;
            font-size: 19px;
            font-weight: 500;
            .cat {
              cursor: pointer;
              transition-duration: 0.3s;
              &:hover {
                color: var(--prim-color);
              }
            }
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
          .title {
            a {
              display: block;
              color: #fefefe;
              margin-bottom: 30px;
              font-size: 39px;
              font-weight: 700;
              line-height: 1.3em;
              transition-duration: 0.3s;
              @media (min-width: 992px) {
                &:hover {
                  color: var(--prim-color);
                }
              }
            }
          }
          p {
            display: block;
            margin-bottom: 30px;
            color: #fefefeb3;
            position: relative;
            font-size: 17px;
            line-height: 1.75em;
          }
          .goToBtn {
            a {
              color: #fefefe;
              &:hover {
                color: var(--prim-color);
                cursor: pointer;
                .hoveranim {
                  &::before {
                    width: 100%;
                  }
                }
              }
            }
          }
        }
      }
      .blogPagination {
        display: flex;
        align-items: center;
        justify-content: center;
        & > div,
        & > a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin: 7px;
          border-radius: 5px;
          background-color: black;
          font-weight: 500;
          color: white;
          cursor: pointer;
          &.page {
            &.active {
              background-color: var(--prim-color);
            }
            a {
              display: block;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fefefe;
            }
          }
        }
      }
    }
  }
}
</style>
