<template>
  <div class="caseStudyPage">
    <base-hero class="baseHero" :imgUrl="imgUrl">
      <template #head>Case Study Details</template>
      <template #nav>CASE STUDY DETAILS</template>
    </base-hero>
    <div class="marketing topPaddingO">
      <div class="container">
        <div class="head">
          <div class="homeheadsec">Marketing</div>
          <div class="mainTitle">
            Importance of storytelling and influencer marketing in social media
            marketing
          </div>
        </div>
        <div class="img-container">
          <img
            loading="lazy"
            src="../../../imgs/pages/caseStudy/case_study_img_1.webp"
            alt="caseStudy"
          />
        </div>
      </div>
    </div>
    <div class="overview">
      <div class="container">
        <div class="head">
          <div class="mainTitle">Case Study Overview</div>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium voltire doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Ipsum quia dolor sit amet, consectetur
        </p>
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="img-container">
              <img
                loading="lazy"
                src="../../../imgs/pages/caseStudy/case_study_img_2.webp"
                alt="caseStudy"
              />
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="img-container">
              <img
                loading="lazy"
                src="../../../imgs/pages/caseStudy/case_study_img_3.webp"
                alt="caseStudy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="research">
      <div class="arrowShape left d-none d-lg-block"></div>
      <div class="container">
        <div class="head">
          <div class="mainTitle">Case Study Research</div>
        </div>
        <div class="row rev">
          <div class="col-lg-5 col-12">
            <div class="title">Marketing strategy</div>
            <p>
              Our goal perspiciatis unde omnis iste natus error sit voluptatem
              bolaru accusantium voltire doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem.
            </p>
            <p>
              Most cases aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsum
              quia dolor sit amet, consectetur, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore.
            </p>
          </div>
          <div class="col-lg-6 offset-lg-1 col-12">
            <div class="img-container glasseffect">
              <img
                loading="lazy"
                src="../../../imgs/pages/caseStudy/case_study_img_4.webp"
                alt="caseStudy"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="img-container glasseffect">
              <img
                loading="lazy"
                src="../../../imgs/pages/caseStudy/case_study_img_5.webp"
                alt="caseStudy"
              />
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1 col-12">
            <div class="title">Branding guideline</div>
            <p>
              Our goal perspiciatis unde omnis iste natus error sit voluptatem
              bolaru accusantium voltire doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem.
            </p>
            <p>
              Most cases aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsum
              quia dolor sit amet, consectetur, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore.
            </p>
          </div>
        </div>
      </div>
      <div class="arrowShape right d-none d-lg-block"></div>
    </div>
    <div class="ResultCaseStudy">
      <div class="container">
        <div class="head">
          <div class="mainTitle">Result of The Case Study</div>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium voltire doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          asperna aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad nima veniam, quis nostrum exercitationem ullam corporis
          suscipit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Ipsum quia dolor sit amet, consectetur
        </p>
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
      imgUrl: require("../../../imgs/pages/caseStudy/case_study_details_bg.webp"),
    };
  },
  methods: {
    gsap() {
      // marketing
      this.$gsap.from(".marketing .head .mainTitle", {
        y: 50,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: ".marketing .head .mainTitle",
          start: "bottom bottom",
          end: "center center",
          scrub: false,
          markers: false,
          toggleActions: "play none none complete",
        },
      });

      // case-study-Overview
      this.$gsap.from(".overview .head .mainTitle", {
        y: 50,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: ".overview .head .mainTitle",
          start: "bottom bottom",
          end: "center center",
          scrub: false,
          markers: false,
          toggleActions: "play none none complete",
        },
      });

      // researsh
      this.$gsap.from(".research .head .mainTitle", {
        y: 50,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: ".research .head .mainTitle",
          start: "bottom bottom",
          end: "center center",
          scrub: false,
          markers: false,
          toggleActions: "play none none complete",
        },
      });

      // result
      this.$gsap.from(".ResultCaseStudy .head .mainTitle", {
        y: 50,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: ".ResultCaseStudy .head .mainTitle",
          start: "bottom bottom",
          end: "center center",
          scrub: false,
          markers: false,
          toggleActions: "play none none complete",
        },
      });
    },
  },
  mounted() {
    const content = document.querySelector(".baseHero");
    const imgload = this.$imagesLoaded(content);
    imgload.on("done", () => {
      this.gsap();
      this.$store.dispatch("doneLoading", true);
    });
  },
};
</script>

<style lang="scss" scoped>
.caseStudyPage {
  @media (max-width: 991px) {
    .marketing {
      .head {
        margin-bottom: 45px !important;
        .homeheadsec {
          margin-bottom: 15px !important;
        }
      }
    }
  }
  .marketing {
    .head {
      text-align: center;
      margin-bottom: 90px;
      .homeheadsec {
        margin: 0 auto 20px;
      }
    }
    .img-container {
      img {
        max-width: 100%;
        width: 100%;
        border-radius: 15px;
      }
    }
  }
  .overview {
    @media (max-width: 991px) {
      .head {
        margin: 80px 0 45px !important;
      }
    }
    .head {
      margin: 140px 0 60px;
      text-align: center;
    }
    @media (max-width: 991px) {
      p {
        margin-bottom: 45px !important;
      }
    }
    p {
      display: block;
      margin-bottom: 65px;
      color: #fefefeb3;
      position: relative;
      font-size: 17px;
    }
    @media (max-width: 575px) {
      .img-container {
        margin-bottom: 25px;
      }
    }
    .img-container {
      img {
        max-width: 100%;
        width: 100%;
        border-radius: 15px;
      }
    }
    @media (max-width: 991px) {
      .row {
        margin-bottom: 80px !important;
      }
    }
    .row {
      margin-bottom: 150px;
    }
  }
  @media (max-width: 991px) {
    .research {
      padding: 80px 0 !important;
      .mainTitle {
        margin-bottom: 45px !important;
      }
    }
  }
  .research {
    position: relative;
    overflow: hidden;
    background: linear-gradient(267.18deg, #161616 0%, #080808 100%);
    padding: 150px 0;
    .head {
      .mainTitle {
        text-align: center;
        margin-bottom: 90px;
      }
    }
    @media (max-width: 991px) {
      .rev {
        flex-direction: column-reverse;
        margin-bottom: 80px;
      }
    }
    .row {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 2;
      &.rev {
        margin-bottom: 100px;
      }
      .img-container {
        border-radius: 50%;
        img {
          max-width: 100%;
          width: 100%;
        }
      }
      @media (max-width: 991px) {
        .title {
          margin-top: 40px;
          margin-bottom: 30px !important;
        }
      }
      .title {
        color: #fefefe;
        font-size: 34px;
        font-weight: 700;
        margin-bottom: 45px;
      }
      p {
        display: block;
        margin-bottom: 25px;
        color: #fefefeb3;
        position: relative;
        font-size: 17px;
      }
    }
    .arrowShape {
      width: 320px;
      height: 320px;
      position: absolute;
      transform: translateY(-50%) rotate(45deg);
      background-color: #181818;
      z-index: 1;
      &.right {
        bottom: -120px;
        right: -210px;
        animation: arrowShapeAnimationright 10s infinite ease-in-out;
      }
      &.left {
        top: 180px;
        left: -210px;
        animation: arrowShapeAnimationleft 10s infinite ease-in-out;
      }
    }
  }
  @media (max-width: 991px) {
    .ResultCaseStudy {
      padding-top: 80px !important;
    }
  }
  .ResultCaseStudy {
    padding-top: 145px;
    .head {
      text-align: center;
      @media (max-width: 991px) {
        .mainTitle {
          margin-bottom: 45px !important;
        }
      }
      .mainTitle {
        margin-bottom: 60px;
      }
    }
    p {
      display: block;
      margin-bottom: 0px;
      color: #fefefeb3;
      position: relative;
      font-size: 17px;
      text-align: center;
    }
  }
}
@keyframes arrowShapeAnimationleft {
  0% {
    transform: translate(0, -50%) rotate(45deg);
  }
  50% {
    transform: translate(-60px, -50%) rotate(45deg);
  }
  100% {
    transform: translate(0, -50%) rotate(45deg);
  }
}
@keyframes arrowShapeAnimationright {
  0% {
    transform: translate(0, -50%) rotate(45deg);
  }
  50% {
    transform: translate(60px, -50%) rotate(45deg);
  }
  100% {
    transform: translate(0, -50%) rotate(45deg);
  }
}
</style>
