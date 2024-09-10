<template>
  <div class="servicesPage">
    <base-hero class="baseHero" :imgUrl="imgUrl">
      <template #head>services</template>
      <template #nav>services</template>
    </base-hero>
    <div class="coreServices topPaddingO">
      <div class="container">
        <div class="content">
          <div class="head">
            <div class="homeheadsec">Services</div>
            <div class="mainTitle">Our core services</div>
          </div>
          <div class="row">
            <div class="col-xl-5 col-lg-6 col-12">
              <div class="slider-container">
                <div class="imgs-container">
                  <img
                    loading="lazy"
                    data-imgNum="2"
                    class=""
                    src="../../imgs/servicesAssets/service_8.webp"
                    alt="service"
                  />
                  <img
                    loading="lazy"
                    data-imgNum="3"
                    class=""
                    src="../../imgs/servicesAssets/service_9.webp"
                    alt="service"
                  />
                  <img
                    loading="lazy"
                    data-imgNum="4"
                    class="activeClip"
                    src="../../imgs/servicesAssets/service_10.webp"
                    alt="service"
                  />
                  <img
                    loading="lazy"
                    data-imgNum="1"
                    class=""
                    src="../../imgs/servicesAssets/service_7.webp"
                    alt="service"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-7 col-lg-6 col-12">
              <ul>
                <li>
                  <div
                    data-imgNum="1"
                    @mouseenter="hoverCoreServ($event, '1')"
                    :class="['linkcont', { active: activeService === '1' }]"
                  >
                    <div class="info">
                      <div class="servname">WP Development</div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium lorema doloremque laudantium,
                        rem.
                      </p>
                    </div>
                    <div class="arrowIcon">
                      <font-awesome-icon
                        icon="fa-solid fa-arrow-up-right-from-square"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    data-imgNum="2"
                    @mouseenter="hoverCoreServ($event, '2')"
                    :class="['linkcont', { active: activeService === '2' }]"
                  >
                    <div class="info">
                      <div class="servname">UI/UX Design</div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium lorema doloremque laudantium,
                        rem.
                      </p>
                    </div>
                    <div class="arrowIcon">
                      <font-awesome-icon
                        icon="fa-solid fa-arrow-up-right-from-square"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    data-imgNum="3"
                    @mouseenter="hoverCoreServ($event, '3')"
                    :class="['linkcont', { active: activeService === '3' }]"
                  >
                    <div class="info">
                      <div class="servname">Branding</div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium lorema doloremque laudantium,
                        rem.
                      </p>
                    </div>
                    <div class="arrowIcon">
                      <font-awesome-icon
                        icon="fa-solid fa-arrow-up-right-from-square"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    data-imgNum="4"
                    @mouseenter="hoverCoreServ($event, '4')"
                    :class="['linkcont', { active: activeService === '4' }]"
                  >
                    <div class="info">
                      <div class="servname">Social Ad Campaign</div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium lorema doloremque laudantium,
                        rem.
                      </p>
                    </div>
                    <div class="arrowIcon">
                      <font-awesome-icon
                        icon="fa-solid fa-arrow-up-right-from-square"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relatedServices">
      <div class="container">
        <div class="content row">
          <div class="col-xl-5 col-lg-6 col-12">
            <div class="img-container glasseffect">
              <img
                loading="lazy"
                src="../../imgs/servicesAssets/service_img_1.webp"
                alt="service"
              />
            </div>
          </div>
          <div class="col-lg-6 col-12 offset-xl-1">
            <div class="info-container">
              <div class="mainTitle">
                Below our most design related services
              </div>
              <div class="row">
                <div class="col-md-6 col-12">
                  <ul>
                    <li>
                      <div class="goToBtn">
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-right-long"
                        />
                        <div class="hoveranim">Web page design</div>
                      </div>
                    </li>
                    <li>
                      <div class="goToBtn">
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-right-long"
                        />
                        <div class="hoveranim">eCommerce design</div>
                      </div>
                    </li>
                    <li>
                      <div class="goToBtn">
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-right-long"
                        />
                        <div class="hoveranim">Landing page</div>
                      </div>
                    </li>
                    <li>
                      <div class="goToBtn">
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-right-long"
                        />
                        <div class="hoveranim">Email template</div>
                      </div>
                    </li>
                    <li>
                      <div class="goToBtn">
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-right-long"
                        />
                        <div class="hoveranim">Application design</div>
                      </div>
                    </li>
                    <li>
                      <div class="goToBtn">
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-right-long"
                        />
                        <div class="hoveranim">Illustration</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 col-12">
                  <ul>
                    <li>
                      <div class="goToBtn">
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-right-long"
                        />
                        <div class="hoveranim">Infographic design</div>
                      </div>
                    </li>
                    <li>
                      <div class="goToBtn">
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-right-long"
                        />
                        <div class="hoveranim">Mobile apps design</div>
                      </div>
                    </li>
                    <li>
                      <div class="goToBtn">
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-right-long"
                        />
                        <div class="hoveranim">Banner, brochure, card</div>
                      </div>
                    </li>
                    <li>
                      <div class="goToBtn">
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-right-long"
                        />
                        <div class="hoveranim">Other design</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricing">
      <div class="container">
        <div class="content">
          <div class="head">
            <div class="head-info">
              <div class="homeheadsec">Pricing & Packaging</div>
              <div class="mainTitle">
                Providing best <br />
                pricing for client
              </div>
            </div>
            <div class="Packaging-switch">
              <span
                @click="switchPackagingActive($event, 'monthly')"
                class="active"
                >Monthly</span
              >
              <span @click="switchPackagingActive($event, 'yearly')"
                >Yearly</span
              >
            </div>
          </div>
          <div class="Packaging row">
            <div class="col-lg-4 col-12">
              <div class="pricing-card">
                <div class="cardHead">Standard</div>
                <div class="price">
                  <div class="numPer">
                    <div class="num">
                      ${{
                        activePackage === "monthly"
                          ? monthly.standard
                          : yearly.standard
                      }}/
                    </div>
                    <div class="package">
                      {{
                        activePackage === "monthly"
                          ? monthly.packageName
                          : yearly.packageName
                      }}
                    </div>
                  </div>
                  <div class="packageP">
                    Per subscriber per
                    {{
                      activePackage === "monthly"
                        ? monthly.subPer
                        : yearly.subPer
                    }}
                  </div>
                </div>
                <div class="props">
                  <ul>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Static responsive website
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Video marketing
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Keywords research
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Facebook campaign
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      eCommerce solution
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Google adword
                    </li>
                  </ul>
                </div>
                <div class="ourBolgbtn goToBtn">
                  <div class="hoveranim">Purchase Now</div>
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="pricing-card">
                <div class="cardHead">Professional</div>
                <div class="price">
                  <div class="numPer">
                    <div class="num">
                      ${{
                        activePackage === "monthly" ? monthly.pro : yearly.pro
                      }}/
                    </div>
                    <div class="package">
                      {{
                        activePackage === "monthly"
                          ? monthly.packageName
                          : yearly.packageName
                      }}
                    </div>
                  </div>
                  <div class="packageP">
                    Per subscriber per
                    {{
                      activePackage === "monthly"
                        ? monthly.subPer
                        : yearly.subPer
                    }}
                  </div>
                </div>
                <div class="props">
                  <ul>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Static responsive website
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Video marketing
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Keywords research
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Facebook campaign
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      eCommerce solution
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Google adword
                    </li>
                  </ul>
                </div>
                <div class="ourBolgbtn goToBtn">
                  <div class="hoveranim">Purchase Now</div>
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="pricing-card">
                <div class="cardHead">Ultimate</div>
                <div class="price">
                  <div class="numPer">
                    <div class="num">
                      ${{
                        activePackage === "monthly"
                          ? monthly.ultimate
                          : yearly.ultimate
                      }}/
                    </div>
                    <div class="package">
                      {{
                        activePackage === "monthly"
                          ? monthly.packageName
                          : yearly.packageName
                      }}
                    </div>
                  </div>
                  <div class="packageP">
                    Per subscriber per
                    {{
                      activePackage === "monthly"
                        ? monthly.subPer
                        : yearly.subPer
                    }}
                  </div>
                </div>
                <div class="props">
                  <ul>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Dynamic responsive website
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Video marketing
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Keywords research
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Facebook campaign
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      eCommerce solution
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-regular fa-circle-right" />
                      Google adword
                    </li>
                  </ul>
                </div>
                <div class="ourBolgbtn goToBtn">
                  <div class="hoveranim">Purchase Now</div>
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </div>
              </div>
            </div>
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
      imgUrl: require("../../imgs/servicesAssets/service_hero_bg.webp"),
      monthly: {
        standard: 59,
        pro: 299,
        ultimate: 599,
        packageName: "Monthly",
        subPer: "month",
      },
      yearly: {
        standard: 99,
        pro: 499,
        ultimate: 799,
        packageName: "Yearly",
        subPer: "year",
      },
      activePackage: "monthly",
      activeService: 1,
    };
  },
  methods: {
    hoverCoreServ(e, imgNum) {
      console.log(imgNum);
      this.activeService = imgNum;
      const imgs = document.querySelectorAll(
        ".slider-container .imgs-container img"
      );
      const container = document.querySelector(
        ".slider-container .imgs-container"
      );
      imgs.forEach((img) => {
        if (img.dataset.imgnum === e.target.dataset.imgnum) {
          if (container.lastChild === img) {
            return;
          }
          img.classList.add("activeClip");
          container.appendChild(img);
          setTimeout(() => {
            img.classList.remove("activeClip");
          }, 1000);
        }
      });
    },
    switchPackagingActive(e, packag) {
      const packages = document.querySelectorAll(".Packaging-switch span");
      packages.forEach((ele) => {
        ele.classList.remove("active");
      });
      e.target.classList.add("active");
      this.$gsap.from(".Packaging", {
        opacity: 0,
        duration: 0.5,
      });
      this.activePackage = packag;
    },
    doneLoading() {
      const content = document.querySelector(".baseHero");
      const imgload = this.$imagesLoaded(content);

      imgload.on("done", () => {
        this.$store.dispatch("doneLoading", true);
      });
    },
  },
  mounted() {
    this.doneLoading();
  },
};
</script>

<style lang="scss" scoped>
.servicesPage {
  .coreServices {
    @media (max-width: 991px) {
      .head {
        margin-bottom: 45px !important;
      }
    }
    .head {
      text-align: center;
      margin-bottom: 90px;
      .homeheadsec {
        width: 100%;
      }
    }
    ul {
      li {
        @media (max-width: 575px) {
          .linkcont {
            flex-direction: column-reverse;
            .arrowIcon {
              margin-right: auto;
              margin-bottom: 20px;
              width: 60px !important;
              height: 60px !important;
            }
          }
        }
        &:nth-child(1) {
          .linkcont {
            padding: 0 0 25px 0;
          }
        }
        .linkcont {
          color: #fefefe;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 25px 0;
          border-bottom: 1px solid #4d4d4d;
          &.active {
            .arrowIcon {
              background-color: var(--prim-color);
              border: 2px solid var(--prim-color);
              color: white;
            }
          }
          @media (max-width: 1199px) and (min-width: 991px) {
            .info {
              max-width: 345px !important;
            }
          }
          @media (max-width: 767px) and (min-width: 575px) {
            .info {
              max-width: 400px !important;
            }
          }
          .info {
            max-width: 480px;
            margin-right: 30px;
            .servname {
              font-size: 30px;
              margin-bottom: 15px;
              font-weight: 700;
            }
            p {
              font-size: 17px;
              color: #fefefeb3;
              margin-bottom: 0;
            }
          }
          .arrowIcon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            color: #999696;
            background-color: transparent;
            border: 2px solid #999696;
            transition-duration: 0.3s;
            svg {
              font-size: 25px;
            }
          }
        }
      }
    }
    @media (max-width: 991px) {
      .slider-container {
        margin-bottom: 50px;
      }
    }
    .slider-container {
      padding: 0px 20px 20px 0;
      @media (max-width: 991px) {
        .imgs-container {
          max-width: 100% !important;
          width: 100%;
        }
      }
      .imgs-container {
        position: relative;
        height: 600px;
        max-width: 416px;
        &::after {
          content: "";
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 100%;
          height: 100%;
          background-color: var(--prim-color);
          border-radius: 15px;
          z-index: 1;
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          max-width: 100%;
          width: 100%;
          z-index: 2;
          border-radius: 15px;
          object-fit: cover;
          transition: clip-path 1s;
          &.activeClip {
            animation: imgTransAnimation 0.7s;
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    .relatedServices {
      margin-top: 80px !important;
    }
  }
  .relatedServices {
    margin-top: 140px;
    .content {
      display: flex;
      align-items: center;
      .img-container {
        border-radius: 15px;
        &.glasseffect:hover {
          &::after {
            animation: glassEf 1.3s;
          }
        }
        &.glasseffect::after {
          content: "";
          position: absolute;
          top: 0;
          left: -80%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.15) 100%
          );
          z-index: 2;
          transform: skewX(-25deg);
          transition-duration: 0.7s;
        }
        img {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 100%;
        }
      }
      @media (max-width: 991px) {
        .info-container {
          margin-top: 40px;
        }
      }
      .info-container {
        .mainTitle {
          margin-bottom: 50px !important;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          @media (max-width: 991px) {
            li {
              margin-bottom: 10px !important;
            }
          }
          li {
            margin-bottom: 20px;
            width: fit-content;
            svg {
              margin: 0 15px 0 0;
              color: var(--prim-color);
              font-size: 25px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    .pricing {
      margin-top: 50px !important;
    }
  }
  .pricing {
    margin-top: 150px;
    @media (max-width: 991px) {
      .head {
        margin-bottom: 40px !important;
      }
    }
    @media (max-width: 767px) {
      .head {
        flex-direction: column;
        align-items: flex-start !important;
        .Packaging-switch {
          margin-top: 50px;
        }
      }
    }
    .head {
      margin-bottom: 85px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .head-info {
        .mainTitle {
          margin-bottom: 0 !important;
        }
      }
      .Packaging-switch {
        display: flex;
        padding: 7px;
        border-radius: 10px;
        background-color: black;
        span {
          padding: 7px 20px;
          font-size: 17px;
          font-weight: 700;
          border-radius: 10px;
          &:first-of-type {
            margin-right: 5px;
          }
          cursor: pointer;
          transition-duration: 0.3s;
          &.active {
            background-color: var(--prim-color);
          }
        }
      }
    }
    .Packaging {
      @media (max-width: 991px) {
        .pricing-card {
          padding: 30px !important;
          margin-bottom: 25px !important;
        }
      }
      .pricing-card {
        padding: 30px 45px;
        background: linear-gradient(267.18deg, #161616 0%, #080808 100%);
        border-radius: 15px;
        position: relative;
        overflow: hidden;
        &::after {
          content: "";
          position: absolute;
          top: -60px;
          right: -60px;
          width: 140px;
          height: 140px;
          background-color: var(--prim-color);
          filter: blur(125px);
          opacity: 0;
          transition-duration: 0.5s;
        }
        @media (min-width: 992px) {
          &:hover {
            &::after {
              opacity: 1;
            }
          }
        }
        @media (max-width: 992px) {
          &::after {
            opacity: 1;
          }
        }
        .cardHead {
          font-size: 30px;
          border-bottom: 1px solid #302e2e;
          padding-bottom: 30px;
          font-weight: 700;
        }
        .price {
          padding-bottom: 25px;
          border-bottom: 1px solid #302e2e;
          .numPer {
            display: flex;
            align-items: center;
            margin: 20px 0 5px;
            .num {
              font-size: 40px;
              font-weight: 700;
              margin-right: 5px;
            }
            .package {
              font-size: 17px;
              color: var(--prim-color);
            }
          }
          .packageP {
            color: #fefefeb3;
            font-size: 17px;
          }
        }
        .props {
          padding: 35px 0 25px;
          border-bottom: 1px solid #302e2e;
          margin-bottom: 30px;
          ul {
            li {
              display: flex;
              align-items: center;
              color: #fefefeb3;
              margin-bottom: 15px;
              font-size: 17px;
              svg {
                font-size: 20px;
                color: var(--prim-color);
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
}
@keyframes imgTransAnimation {
  0% {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
  100% {
    clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
  }
}
</style>
