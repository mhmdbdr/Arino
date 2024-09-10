<template>
  <div class="navContent">
    <div class="profile">
      <div class="img-container">
        <img src="../../../imgs/blogAssets/avatar_1.webp" alt="client avatar" />
      </div>
      <div class="head">
        <div class="name">Kuber Jontra</div>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum.
        </p>
      </div>
    </div>
    <div class="search">
      <div class="title">search</div>
      <form action="#">
        <input type="search" placeholder="Search..." />
        <button aria-label="searchIcon">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </div>
    <div class="categories">
      <div class="title">categories</div>
      <ul class="arrowUl">
        <li>
          <font-awesome-icon icon="fa-solid fa-angles-right" />
          Corporate
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-angles-right" />
          Company
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-angles-right" />
          SearchEngine
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-angles-right" />
          Information
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-angles-right" />
          Painting
        </li>
      </ul>
    </div>
    <div class="recentPosts">
      <div class="title">Recent Posts</div>
      <ul v-show="doneLoadingVal">
        <li v-for="(post, index) in getRecentProjects" :key="index">
          <router-link :to="'/blogDetails/' + post.id">
            <div class="img-container">
              <img :src="post.recentImg" alt="post" />
            </div>
            <div class="info">
              <div class="head">{{ post.recentTitle }}</div>
              <div class="date">{{ post.date }}</div>
            </div>
          </router-link>
        </li>
      </ul>
      <ul v-show="!doneLoadingVal">
        <li v-for="num in 4" :key="num">
          <div class="holder">
            <div class="placeholder-glow">
              <div class="img-container col-12 placeholder"></div>
            </div>
            <div class="info">
              <div class="placeholder-glow">
                <div class="head col-12 placeholder"></div>
              </div>
              <div class="placeholder-glow">
                <div class="date col-12 placeholder"></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="archives">
      <div class="title">Archives</div>
      <ul class="arrowUl">
        <li>
          <font-awesome-icon icon="fa-solid fa-angles-right" />
          Archives
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-angles-right" />
          15 Aug 2022
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-angles-right" />
          20 Sep 2021
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-angles-right" />
          11 Dec 2020
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-angles-right" />
          25 jun 2020
        </li>
      </ul>
    </div>
    <div class="tags">
      <div class="title">tags</div>
      <ul>
        <li>Business</li>
        <li>Agency</li>
        <li>Artwork</li>
        <li>Marketing</li>
        <li>Information</li>
        <li>Design</li>
        <li>Wordpress</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      doneLoadingVal: false,
    };
  },
  methods: {
    doneImgFetching() {
      const content = document.querySelector(".recentPosts");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.doneLoadingVal = true;
      });
    },
    async loadData() {
      const recentblogs = this.$store.getters["blog/recentBlogs"];
      if (recentblogs.length === 0) {
        await this.$store.dispatch("blog/fetchrecentBlogsData", "4");
      }
      this.doneImgFetching();
    },
  },
  computed: {
    getRecentProjects() {
      const blogDataRecent = this.$store.getters["blog/recentBlogs"];
      return blogDataRecent;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 991px) {
  .navContent {
    margin-top: 80px;
  }
}
.navContent {
  @media (max-width: 991px) {
    & > div {
      margin-bottom: 40px !important;
    }
    .title {
      margin-bottom: 20px !important;
    }
  }
  & > div {
    margin-bottom: 70px;
  }
  .title {
    font-size: 30px;
    margin-bottom: 30px;
    font-weight: 700;
    text-transform: capitalize;
  }
  .profile {
    text-align: center;
    .img-container {
      margin-bottom: 22px;
    }
    .head {
      .name {
        font-size: 30px;
        margin-bottom: 15px;
        font-weight: 700;
      }
      p {
        display: block;
        margin-bottom: 30px;
        color: #fefefeb3;
        position: relative;
        font-size: 17px;
      }
    }
  }
  .search {
    form {
      position: relative;
      input {
        width: 100%;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid white;
        padding: 0 40px 6px 10px;
        transition-duration: 0.3s;
        &:focus {
          outline: none;
          border-bottom: 2px solid var(--prim-color);
        }
        &::placeholder {
          color: #757575;
          font-size: 17px;
        }
      }
      button {
        border: none;
        background-color: transparent;
        position: absolute;
        top: 0;
        right: 0;
        svg {
          color: #fefefeb3;
          transition-duration: 0.3s;
          @media (min-width: 992px) {
            &:hover {
              color: var(--prim-color);
            }
          }
        }
      }
    }
  }
  .recentPosts {
    ul {
      li {
        margin-bottom: 20px;
        .holder {
          display: flex;
          align-items: center;
          color: #fefefe;
          .img-container {
            width: 60px;
            height: 60px;
            margin-right: 15px;
            border-radius: 6px;
          }
          .info {
            .head {
              margin-bottom: 5px;
            }
            .head,
            .date {
              min-height: 20px;
              min-width: 150px;
            }
          }
        }
        a {
          display: flex;
          align-items: center;
          color: #fefefe;
          .img-container {
            width: 60px;
            height: 60px;
            margin-right: 15px;
            overflow: hidden;
            border-radius: 6px;
            img {
              width: 100%;
              height: 100%;
              transition-duration: 0.3s;
              @media (min-width: 992px) {
                &:hover {
                  transform: scale(1.08);
                }
              }
            }
          }
          .info {
            .head {
              font-size: 19px;
              font-weight: 700;
              margin-bottom: 5px;
              line-height: 1.3em;
              transition-duration: 0.3s;
              @media (min-width: 992px) {
                &:hover {
                  color: var(--prim-color);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
