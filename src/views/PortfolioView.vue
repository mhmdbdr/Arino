<template>
  <div class="portfolioPage">
    <base-hero class="baseHero" :imgUrl="imgUrl">
      <template #head>Portfolio</template>
      <template #nav>Portfolio</template>
    </base-hero>
    <div class="recentWork topPaddingO">
      <div class="container">
        <div class="content">
          <div class="head-container">
            <div class="info">
              <div class="homeheadsec">Our Portfolio</div>
              <div class="mainTitle">Some recent work</div>
            </div>
            <div class="carousel-controls">
              <ul>
                <li
                  data-sort="*"
                  :class="{ active: activeSort === '*' }"
                  @click="activeField('*')"
                >
                  all
                </li>
                <li
                  data-sort=".web-design"
                  :class="{ active: activeSort === '.web-design' }"
                  @click="activeField('.web-design')"
                >
                  web design
                </li>
                <li
                  data-sort=".UIUX-design"
                  :class="{ active: activeSort === '.UIUX-design' }"
                  @click="activeField('.UIUX-design')"
                >
                  UI/UX design
                </li>
                <li
                  data-sort=".mobile-apps"
                  :class="{ active: activeSort === '.mobile-apps' }"
                  @click="activeField('.mobile-apps')"
                >
                  mobile apps
                </li>
                <li
                  data-sort=".logo-design"
                  :class="{ active: activeSort === '.logo-design' }"
                  @click="activeField('.logo-design')"
                >
                  logo design
                </li>
              </ul>
            </div>
          </div>
          <div ref="isotopeContainer" class="isoContent grid row">
            <div class="grid-sizer"></div>
            <div class="img-container isotope-item UIUX-design col-md-4 col-12">
              <router-link
                aria-label="project"
                to="/portfolioDetails/LrMgxNGX7U3B19PAa7hsBnSwVzRo"
              >
                <div class="content">
                  <img
                    src="../../imgs/portfolioAssets/portfolio_9.webp"
                    alt="portfolio"
                  />
                  <span>Colorful Art Work</span>
                  <span>See Details</span>
                  <div class="artWork"></div>
                </div>
              </router-link>
            </div>
            <div class="img-container isotope-item mobile-apps col-md-4 col-12">
              <router-link
                aria-label="project"
                to="/portfolioDetails/TZ8WAL4m5hd2a7y6vWqJ1SmXzYaI"
              >
                <div class="content">
                  <img
                    src="../../imgs/portfolioAssets/portfolio_2.webp"
                    alt="portfolio"
                  />
                  <span>Colorful Art Work</span>
                  <span>See Details</span>
                  <div class="artWork"></div>
                </div>
              </router-link>
            </div>
            <div class="img-container isotope-item logo-design col-md-4 col-12">
              <router-link
                aria-label="project"
                to="/portfolioDetails/qwnKb7vpLUhvnuhr7Fbc3wE0sFyb"
              >
                <div class="content">
                  <img
                    src="../../imgs/portfolioAssets/portfolio_3.webp"
                    alt="portfolio"
                  />
                  <span>Colorful Art Work</span>
                  <span>See Details</span>
                  <div class="artWork"></div>
                </div>
              </router-link>
            </div>
            <div
              class="img-container grid-item--width2 isotope-item UIUX-design col-md-4 col-12"
            >
              <router-link
                aria-label="project"
                to="/portfolioDetails/qP616QIq533B5vnsHIEkQX6PGSln"
              >
                <div class="content">
                  <img
                    src="../../imgs/portfolioAssets/portfolio_7.webp"
                    alt="portfolio"
                  />
                  <span>Colorful Art Work</span>
                  <span>See Details</span>
                  <div class="artWork"></div>
                </div>
              </router-link>
            </div>
            <div class="img-container isotope-item web-design col-md-4 col-12">
              <router-link
                aria-label="project"
                to="/portfolioDetails/CUqEOZRsExNagFL7OiDnyE5CHIeS"
              >
                <div class="content">
                  <img
                    src="../../imgs/portfolioAssets/portfolio_4.webp"
                    alt="portfolio"
                  />
                  <span>Colorful Art Work</span>
                  <span>See Details</span>
                  <div class="artWork"></div>
                </div>
              </router-link>
            </div>
            <div class="img-container isotope-item logo-design col-md-4 col-12">
              <router-link
                aria-label="project"
                to="/portfolioDetails/krndCGuKxxd9v0ZmpTOMg5CtLjMR"
              >
                <div class="content">
                  <img
                    src="../../imgs/portfolioAssets/portfolio_1.webp"
                    alt="portfolio"
                  />
                  <span>Colorful Art Work</span>
                  <span>See Details</span>
                  <div class="artWork"></div>
                </div>
              </router-link>
            </div>
            <div
              class="img-container grid-item--width2 isotope-item web-design col-md-4 col-12"
            >
              <router-link
                aria-label="project"
                to="/portfolioDetails/jpaStbOIewkcLAgehe0ojhe34oiE"
              >
                <div class="content">
                  <img
                    src="../../imgs/portfolioAssets/portfolio_10.webp"
                    alt="portfolio"
                  />
                  <span>Colorful Art Work</span>
                  <span>See Details</span>
                  <div class="artWork"></div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <base-meeting :btn="false">
      <template #default> agency@arino.com </template>
    </base-meeting>
  </div>
</template>

<script>
import Isotope from "isotope-layout";

export default {
  data() {
    return {
      activeSort: "*",
      imgUrl: require("../../imgs/portfolioAssets/portfolio_hero_bg.webp"),
    };
  },
  methods: {
    activeField(sort) {
      this.activeSort = sort;
      if (this.isotope) {
        this.isotope.arrange({ filter: sort });
      }
      this.$ScrollTrigger.refresh();
    },
    initIsotope() {
      const container = this.$refs.isotopeContainer;

      this.isotope = new Isotope(container, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
      });
    },
    doneLoading() {
      const content = document.querySelector(".baseHero");
      const imgload = this.$imagesLoaded(content);

      imgload.on("done", () => {
        this.$store.dispatch("doneLoading", true);
        this.$nextTick(() => {
          this.initIsotope();
        });
      });
    },
  },
  mounted() {
    this.doneLoading();
  },
};
</script>

<style lang="scss" scoped>
.portfolioPage {
  .recentWork {
    @media (max-width: 991px) {
      .head-container {
        flex-direction: column;
      }
    }
    .head-container {
      display: flex;
      justify-content: space-between;
      .info {
        .mainTitle {
          margin-bottom: 0 !important;
        }
      }
      .carousel-controls {
        display: flex;
        align-items: flex-end;
        @media (max-width: 991px) {
          ul {
            margin: 20px 0 15px;
          }
        }
        @media (max-width: 575px) {
          ul {
            border-bottom: none !important;
          }
        }
        ul {
          display: flex;
          border-bottom: 1px solid #999696;
          flex-wrap: wrap;
          li {
            margin: 10px 28px 10px 0;
            text-transform: capitalize;
            font-size: 17px;
            color: #fefefeb3;
            cursor: pointer;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              left: 50%;
              bottom: -15px;
              transform: translateX(-50%) scale(0);
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: var(--prim-color);
              transition-duration: 0.5s;
            }
            &:last-of-type {
              margin-right: 0;
            }
            &.active {
              color: var(--prim-color);
              &::after {
                transform: translateX(-50%) scale(1);
              }
            }
          }
        }
      }
    }
    @media (max-width: 991px) {
      .isoContent {
        min-height: 900px;
        margin-top: 15px !important;
      }
    }
    .isoContent {
      margin-top: 90px;
      .img-container {
        margin-bottom: 25px;
        &.grid-item--width2 {
          .content {
            span {
              left: 5% !important;
            }
          }
        }
        .content {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          width: 100%;
          height: 100%;
          color: #fefefe;
          cursor: pointer;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            transition-duration: 0.3s;
            z-index: 3;
          }
          @media (min-width: 992px) {
            &:hover {
              &::after {
                background-color: rgba(22, 22, 22, 0.4);
              }
              .artWork {
                bottom: -60px;
                left: -40px;
                opacity: 1;
              }
              span:nth-of-type(1),
              span:nth-of-type(2) {
                bottom: 22%;
                opacity: 1;
              }
            }
          }
          img {
            max-width: 100%;
            width: 100%;
            border-radius: 15px;
          }
          span {
            position: absolute;
            display: block;
            text-align: start;
            transition-duration: 0.5s;
            z-index: 5;
            left: 10%;
            opacity: 0;
            color: #fefefe;
            &:nth-of-type(1) {
              // transition-delay: 0.2s;
              bottom: 15%;
              font-size: 22px;
              margin-bottom: 5px;
              font-weight: 700;
            }
            &:nth-of-type(2) {
              transition-delay: 0.1s;
              bottom: 17%;
              color: #fefefeb3;
              font-weight: 500;
              position: relative;
              width: fit-content;
              &::after {
                content: "";
                position: absolute;
                bottom: 8px;
                right: -30px;
                width: 20px;
                height: 1px;
                background-color: #fefefeb3;
              }
            }
          }
          .artWork {
            position: absolute;
            bottom: -100px;
            left: -80px;
            width: 300px;
            height: 300px;
            padding: 105px 20px 80px 65px;
            border-radius: 50%;
            background-color: var(--prim-color);
            z-index: 4;
            opacity: 0;
            transition-duration: 0.5s;
            display: flex;
            flex-direction: column;
            @media (max-width: 1380px) {
              span:nth-child(1) {
                font-size: 20px !important;
              }
            }
          }
        }
      }
    }
  }
}
// isotope-styling-start
@media (max-width: 991px) {
  .isotope-item,
  .grid-item--width2 {
    width: calc(100% / 2) !important;
  }
}
@media (max-width: 767px) {
  .isotope-item,
  .grid-item--width2 {
    width: 100% !important;
  }
}
.isotope-item {
  width: calc(100% / 3);
  height: 465px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.grid-item--width2 {
  width: calc((100% / 3) * 2);
}
// isotope-styling-end
</style>
