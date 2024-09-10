<template>
  <div class="contactPage">
    <base-hero class="baseHero" :imgUrl="imgUrl">
      <template #head>contact us</template>
      <template #nav>contact</template>
    </base-hero>
    <div class="content topPaddingO">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="head">
              <div class="homeheadsec">Getting Touch</div>
              <div class="mainTitle">
                Do you have a project <br />
                in your mind?
              </div>
            </div>
            <div class="info">
              <ul>
                <li>
                  <font-awesome-icon icon="fa-solid fa-phone" />
                  +44 454 7800 112
                </li>
                <li>
                  <font-awesome-icon icon="fa-solid fa-envelope" />
                  infotech@arino.com
                </li>
                <li class="add">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  <p>
                    50 Wall Street Suite, 44150 <br />
                    Ohio, United States
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <form action="#">
              <div class="row">
                <div class="col-sm-6">
                  <div class="mainInput">
                    <label for="name">Full Name*</label>
                    <input id="name" type="text" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mainInput">
                    <label for="email">Email*</label>
                    <input id="email" type="email" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mainInput">
                    <label for="ProjectType">Project Type*</label>
                    <input id="ProjectType" type="text" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mainInput">
                    <label for="Mobile">Mobile*</label>
                    <input id="Mobile" type="number" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mainInput">
                    <label for="ProjectDetails">Write Project Details*</label>
                    <textarea cols="30" rows="7" id="ProjectDetails"></textarea>
                  </div>
                </div>
              </div>
            </form>
            <button class="mainBtn">send</button>
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
      imgUrl: require("../../../imgs/pages/contact/contact_hero_bg.webp"),
    };
  },
  mounted() {
    const content = document.querySelector(".baseHero");
    const imgload = this.$imagesLoaded(content);
    imgload.on("done", () => {
      this.$store.dispatch("doneLoading", true);
    });
  },
};
</script>

<style lang="scss" scoped>
.contactPage {
  @media (max-width: 991px) {
    .content {
      .head {
        margin-bottom: 30px !important;
      }
    }
  }
  .content {
    .head {
      margin-bottom: 55px;
    }
    .info {
      ul {
        li {
          &.add {
            display: flex;
            svg {
              margin-right: 20px;
            }
          }
          color: #fafafab3;
          margin-bottom: 22px;
          font-size: 16px;
          &:last-of-type {
            margin-bottom: 0px;
          }
          svg {
            font-size: 20px;
            margin-right: 10px;
            color: var(--prim-color);
          }
        }
      }
    }
    @media (max-width: 991px) {
      form {
        margin-top: 50px;
      }
    }
  }
}
</style>
