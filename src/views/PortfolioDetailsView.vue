<template>
  <div class="portfolioDetails">
    <base-hero class="heroBg" :imgUrl="imgUrl">
      <template #head>Portfolio Details</template>
      <template #nav>Portfolio Details</template>
    </base-hero>
    <div class="project-details topPaddingO">
      <div class="container">
        <div v-show="doneLoadingVal" class="img-container">
          <img
            loading="lazy"
            :src="getProjectData.imgUrl"
            alt="portfolio img"
          />
        </div>
        <loading-spinner v-show="!doneLoadingVal"></loading-spinner>
        <div v-if="getProjectData" class="content row">
          <div class="col-lg-6 col-12">
            <div class="homeheadsec">Creative</div>
            <div class="mainTitle">{{ getProjectData.title }}</div>
            <p>{{ getProjectData.paragraph1 }}</p>
            <p>{{ getProjectData.paragraph2 }}</p>
          </div>
          <div class="col-lg-5 offset-lg-1 col-12 seccol">
            <div class="projInfo">Project Info -</div>
            <div class="infoContent row">
              <div class="col-6">
                <div class="dataCont">
                  <div class="infoCat">Category:</div>
                  <div class="infoName">{{ getProjectData.category }}</div>
                </div>
                <div class="dataCont">
                  <div class="infoCat">Software:</div>
                  <div class="infoName">{{ getProjectData.Software }}</div>
                </div>
                <div class="dataCont">
                  <div class="infoCat">Client:</div>
                  <div class="infoName">{{ getProjectData.Client }}</div>
                </div>
              </div>
              <div class="col-6">
                <div class="dataCont">
                  <div class="infoCat">Location:</div>
                  <div class="infoName">{{ getProjectData.location }}</div>
                </div>
                <div class="dataCont">
                  <div class="infoCat">Dated:</div>
                  <div class="infoName">{{ getProjectData.Dated }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <base-meeting :btn="false">
      <template #default>agency@arino.com</template>
    </base-meeting>
  </div>
</template>
<script>
export default {
  props: ["projectId"],
  data() {
    return {
      imgUrl: require("../../imgs/portfolioDetailsAssets/portfolio_details_bg.webp"),
      doneLoadingVal: false,
    };
  },
  computed: {
    getProjectData() {
      const data = this.$store.getters["portfolio/singleProjectsData"].find(
        (ele) => {
          return ele.id === this.projectId;
        }
      );
      return data ? { ...data } : false;
    },
  },
  methods: {
    doneLoading() {
      const content = document.querySelector(".portfolioDetails .heroBg");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.$store.dispatch("doneLoading", true);
      });
    },
    doneImgFetching() {
      const content = document.querySelector(".project-details .img-container");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.doneLoadingVal = true;
      });
    },
    async loadData() {
      if (!this.getProjectData) {
        await this.$store.dispatch("portfolio/fetchProjectData", {
          id: this.projectId,
          router: this.$router,
        });
      }
      this.doneLoading();
      this.doneImgFetching();
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.portfolioDetails {
  .project-details {
    .img-container {
      img {
        max-width: 100%;
        max-height: 650px;
        width: 100%;
        border-radius: 15px;
        object-fit: cover;
      }
    }
    @media (max-width: 991px) {
      .content {
        margin-top: 40px !important;
      }
    }
    .content {
      margin-top: 90px;
      @media (max-width: 991px) {
        .seccol {
          margin-top: 40px;
        }
      }
      &:nth-child(2) {
        display: flex;
        align-items: center;
      }
      p {
        display: block;
        margin-bottom: 30px;
        color: #fefefeb3;
        position: relative;
        font-size: 17px;
      }
      @media (max-width: 991px) {
        .projInfo {
          font-size: 26px !important;
          margin-bottom: 30px !important;
        }
      }
      .projInfo {
        font-size: 28px;
        color: #fefefe;
        font-weight: 700;
        margin-bottom: 50px;
      }
      .dataCont {
        margin-bottom: 30px;
        @media (max-width: 991px) {
          .infoCat {
            font-size: 18px !important;
          }
        }
        .infoCat {
          color: var(--prim-color);
          font-size: 22px;
          font-weight: 700;
        }
        .infoName {
          color: #fefefeb3;
        }
      }
    }
  }
}
</style>
