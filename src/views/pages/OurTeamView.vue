<template>
  <div class="ourTeamPage">
    <base-hero class="baseHero" :imgUrl="imgUrl">
      <template #head>Our Team</template>
      <template #nav>TEAM</template>
    </base-hero>
    <div class="content topPaddingO">
      <div class="container">
        <div class="head">
          <div class="homeheadsec">Our Team</div>
          <div class="mainTitle">
            Awesome team <br />
            members
          </div>
        </div>
        <div v-show="doneLoadingVal" class="teamMembers row">
          <div
            v-for="(member, index) in getTeamMembersData"
            :key="index"
            class="col-lg-3 col-sm-6 col-12"
          >
            <div class="memberCard">
              <router-link
                aria-label="teamMember"
                :to="'/teamDetails/' + member.id"
              >
                <div class="img-container">
                  <img loading="lazy" :src="member.imgUrl" alt="team member" />
                </div>
                <div class="title">
                  <div class="name">{{ member.name }}</div>
                  <div class="rule">{{ member.job }}</div>
                </div>
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
              </router-link>
            </div>
          </div>
        </div>
        <loading-spinner v-show="!doneLoadingVal"></loading-spinner>
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
  data() {
    return {
      imgUrl: require("../../../imgs/pages/ourTeam/team_hero_bg.webp"),
      doneLoadingVal: false,
    };
  },
  methods: {
    doneLoading() {
      const content = document.querySelector(".ourTeamPage");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.$store.dispatch("doneLoading", true);
      });
    },
    doneImgFetching() {
      const content = document.querySelector(".baseHero");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.doneLoadingVal = true;
      });
    },
    async loadData() {
      const data = this.$store.getters["teamMembers/teamData"];
      if (data.length !== 4) {
        await this.$store.dispatch("teamMembers/fetchTeammembersData");
      }
      if (this.getTeamMembersData.length === 0) {
        this.doneLoadingVal = false;
      } else {
        this.doneImgFetching();
      }
    },
  },
  computed: {
    getTeamMembersData() {
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
.ourTeamPage {
  .content {
    @media (max-width: 991px) {
      .head {
        margin-bottom: 45px !important;
      }
    }
    .head {
      text-align: center;
      margin-bottom: 90px;
      .homeheadsec {
        margin: 0px auto 20px;
      }
    }
    .teamMembers {
      a {
        color: #fefefe;
      }
      @media (max-width: 991px) {
        .memberCard {
          margin: 0 0 30px 0 !important;
        }
      }
      .memberCard {
        margin: 0 12px;
        width: 100%;
        position: relative;
        cursor: pointer;
        @media (min-width: 992px) {
          &:hover {
            .img-container {
              img {
                transform: scale(1.1);
              }
            }
            .social {
              transform: rotate(0deg) scale(1) !important;
            }
          }
        }
        .img-container {
          border-radius: 15px;
          overflow: hidden;
          z-index: 1;
          img {
            width: 100%;
            max-width: 100%;
            transition-duration: 1s;
          }
        }
        .title {
          position: absolute;
          bottom: 30px;
          left: 25px;
          z-index: 2;
          text-align: start;
          @media (max-width: 1380px) {
            .name {
              font-size: 20px !important;
            }
          }
          .name {
            font-size: 23px;
            font-weight: 700;
            text-transform: capitalize;
          }
          .rule {
            color: #fefefeb3;
          }
        }
        .socials {
          position: absolute;
          left: 25px;
          top: 15px;
          z-index: 2;
          .social {
            margin: 20px 20px 20px 0;
            font-size: 18px;
            transition-duration: 0.5s;
            transform: rotate(45deg) scale(0);
            &:hover {
              color: var(--prim-color);
            }
          }
        }
      }
    }
  }
}
</style>
