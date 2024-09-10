<template>
  <div class="teamDetails">
    <base-hero class="heroBg" :imgUrl="imgUrl">
      <template #head>Team Details</template>
      <template #nav>TEAM DETAILS</template>
    </base-hero>
    <div v-show="doneLoadingVal" class="content topPaddingO">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-6 col-12">
            <div class="img-container">
              <img
                loading="lazy"
                :src="getTeamMembersData.imgUrl"
                alt="team member"
              />
            </div>
          </div>
          <div class="col-xl-6 offset-xl-1 col-lg-6 col-12">
            <div class="head">
              <div class="mainTitle">{{ getTeamMembersData.name }}</div>
              <div class="homeheadsec">{{ getTeamMembersData.job }}</div>
            </div>
            <p>{{ getTeamMembersData.p1 }}</p>
            <p>{{ getTeamMembersData.p2 }}</p>
            <div class="socials">
              <div class="social">
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
              </div>
              <div class="social">
                <font-awesome-icon icon="fa-brands fa-x-twitter" />
              </div>
              <div class="social">
                <font-awesome-icon icon="fa-brands fa-youtube" />
              </div>
              <div class="social">
                <font-awesome-icon icon="fa-brands fa-github" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <loading-spinner v-show="!doneLoadingVal"></loading-spinner>
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
  props: ["memberId"],
  data() {
    return {
      imgUrl: require("../../../imgs/pages/ourTeam/team_hero_bg.webp"),
      doneLoadingVal: false,
    };
  },
  methods: {
    async loadData() {
      const teamMembersData = this.$store.getters["teamMembers/teamData"];
      const alreadyIn = teamMembersData.some((ele) => {
        return ele.id === this.memberId;
      });
      if (!alreadyIn) {
        await this.$store.dispatch("teamMembers/fetchTeammemberData", {
          id: this.memberId,
          router: this.$router,
        });
      }
      this.doneImgFetching();
    },
    doneImgFetching() {
      const content = document.querySelector(".content .img-container");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.doneLoadingVal = true;
      });
    },
    doneLoading() {
      const content = document.querySelector(".heroBg");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.$store.dispatch("doneLoading", true);
      });
    },
  },
  computed: {
    getTeamMembersData() {
      const teamMembersData = this.$store.getters["teamMembers/teamData"];
      const member = teamMembersData.find((ele) => {
        return ele.id === this.memberId;
      });
      return { ...member };
    },
    getTeamMembers() {
      const teamMembersData = this.$store.getters["teamMembers/teamData"];
      return teamMembersData;
    },
  },
  mounted() {
    this.doneLoading();
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.teamDetails {
  .content {
    .row {
      display: flex;
      align-items: center;
    }
    @media (max-width: 991px) {
      .img-container {
        margin-bottom: 45px;
      }
    }
    .img-container {
      img {
        max-width: 100%;
        width: 100%;
        border-radius: 15px;
      }
    }
    .head {
      .mainTitle {
        margin-bottom: 10px;
      }
      @media (max-width: 991px) {
        .homeheadsec {
          padding-bottom: 15px !important;
          margin-bottom: 25px !important;
        }
      }
      .homeheadsec {
        font-size: 17px;
        padding-bottom: 20px;
        position: relative;
        margin-bottom: 45px;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 50px;
          border-radius: 3px;
          background-color: var(--prim-color);
        }
      }
    }
    @media (max-width: 991px) {
      p {
        &:first-of-type {
          margin-bottom: 20px !important;
        }
        &:last-of-type {
          margin-bottom: 30px !important;
        }
      }
    }
    p {
      display: block;
      color: #fefefeb3;
      position: relative;
      font-size: 17px;
      &:first-of-type {
        margin-bottom: 25px;
      }
      &:last-of-type {
        margin-bottom: 45px;
      }
    }
    .socials {
      display: flex;
      align-items: center;
      justify-content: start;
      .social {
        margin: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid white;
        cursor: pointer;
        transition-duration: 0.4s;
        &:first-of-type {
          margin-left: 0;
        }
        &:hover {
          border-color: var(--prim-color);
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
