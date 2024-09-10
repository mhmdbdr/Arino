<template>
  <header>
    <div class="container">
      <div class="content">
        <div class="logo">
          <router-link aria-label="homePage" to="/">
            <img
              src="../../../imgs/homeAssets/footer_logo.svg"
              alt="HeaderLogo"
            />
          </router-link>
        </div>
        <div class="links d-none d-xl-flex">
          <ul>
            <li class="liLinks">
              <router-link class="aLinks" to="/">home</router-link>
            </li>
            <li class="liLinks">
              <router-link class="aLinks" to="/about">about</router-link>
            </li>
            <li class="liLinks">
              <router-link class="aLinks" to="/services">services</router-link>
            </li>
            <li class="liLinks">
              <router-link class="aLinks" to="/portfolio"
                >portfolio</router-link
              >
            </li>
            <li class="liLinks">
              <router-link class="aLinks" to="/blog?page=1">blog</router-link>
            </li>
            <li
              @mouseover="activeLi('shopLi')"
              @mouseleave="deactiveLi('shopLi')"
              class="liLinks"
            >
              <span class="aLinks">
                shop
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </span>
              <transition name="baseListAnimation">
                <div v-show="shopLi" class="baseList">
                  <ul>
                    <li>
                      <router-link to="/shop?page=1">our shop</router-link>
                    </li>
                    <li>
                      <router-link to="/cart">cart</router-link>
                    </li>
                    <li>
                      <router-link to="/wishlist">wishlist</router-link>
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
            <li
              @mouseover="activeLi('pagesLi')"
              @mouseleave="deactiveLi('pagesLi')"
              class="liLinks"
            >
              <span class="aLinks">
                pages
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </span>
              <transition name="baseListAnimation">
                <div v-show="pagesLi" class="baseList">
                  <ul>
                    <li>
                      <router-link to="/contact">contact</router-link>
                    </li>
                    <li>
                      <router-link to="/team">team</router-link>
                    </li>
                    <li>
                      <router-link to="/case-study"
                        >case study details</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/faq">FAQ</router-link>
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
          </ul>
        </div>
        <div class="tools">
          <div class="rightSide">
            <router-link to="/cart">
              <span>{{ getCartProducts }}</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1441_534)">
                  <path
                    d="M19.25 5.5H16.5C16.5 4.04131 15.9205 2.64236 14.8891 1.61091C13.8576 0.579463 12.4587 0 11 0C9.54131 0 8.14236 0.579463 7.11091 1.61091C6.07946 2.64236 5.5 4.04131 5.5 5.5H2.75C2.02065 5.5 1.32118 5.78973 0.805456 6.30546C0.289731 6.82118 0 7.52065 0 8.25L0 17.4167C0.00145554 18.6318 0.484808 19.7967 1.34403 20.656C2.20326 21.5152 3.3682 21.9985 4.58333 22H17.4167C18.6318 21.9985 19.7967 21.5152 20.656 20.656C21.5152 19.7967 21.9985 18.6318 22 17.4167V8.25C22 7.52065 21.7103 6.82118 21.1945 6.30546C20.6788 5.78973 19.9793 5.5 19.25 5.5ZM11 1.83333C11.9725 1.83333 12.9051 2.21964 13.5927 2.90728C14.2804 3.59491 14.6667 4.52754 14.6667 5.5H7.33333C7.33333 4.52754 7.71964 3.59491 8.40728 2.90728C9.09491 2.21964 10.0275 1.83333 11 1.83333ZM20.1667 17.4167C20.1667 18.146 19.8769 18.8455 19.3612 19.3612C18.8455 19.8769 18.146 20.1667 17.4167 20.1667H4.58333C3.85399 20.1667 3.15451 19.8769 2.63879 19.3612C2.12306 18.8455 1.83333 18.146 1.83333 17.4167V8.25C1.83333 8.00688 1.92991 7.77373 2.10182 7.60182C2.27373 7.42991 2.50688 7.33333 2.75 7.33333H5.5V9.16667C5.5 9.40978 5.59658 9.64294 5.76849 9.81485C5.94039 9.98676 6.17355 10.0833 6.41667 10.0833C6.65978 10.0833 6.89294 9.98676 7.06485 9.81485C7.23676 9.64294 7.33333 9.40978 7.33333 9.16667V7.33333H14.6667V9.16667C14.6667 9.40978 14.7632 9.64294 14.9352 9.81485C15.1071 9.98676 15.3402 10.0833 15.5833 10.0833C15.8264 10.0833 16.0596 9.98676 16.2315 9.81485C16.4034 9.64294 16.5 9.40978 16.5 9.16667V7.33333H19.25C19.4931 7.33333 19.7263 7.42991 19.8982 7.60182C20.0701 7.77373 20.1667 8.00688 20.1667 8.25V17.4167Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1441_534">
                    <rect width="22" height="22" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </router-link>
          </div>
          <div
            @click="barsclass"
            class="mdbars d-flex d-xl-none"
            data-bs-toggle="collapse"
            href="#mdlinks"
            role="button"
            aria-label="bars"
            aria-expanded="false"
            aria-controls="mdlinks"
          >
            <div class="bar"></div>
          </div>
          <div class="d-none d-xl-flex bars" @click="sidebarChangeVal(true)">
            <div class="barcontainer">
              <div class="bar bar1 inbar"></div>
              <div class="bar bar2"></div>
              <div class="bar bar3"></div>
              <div class="bar bar4 outbar"></div>
            </div>
          </div>
        </div>
        <div class="mdlinks d-xl-none collapse" id="mdlinks">
          <ul class="mainul">
            <li>
              <router-link class="aLinks" to="/">home</router-link>
            </li>
            <li>
              <router-link class="aLinks" to="/about">about</router-link>
            </li>
            <li>
              <router-link class="aLinks" to="/services">services</router-link>
            </li>
            <li>
              <router-link class="aLinks" to="/portfolio"
                >portfolio</router-link
              >
            </li>
            <li>
              <router-link class="aLinks" to="/blog?page=1">blog</router-link>
            </li>
            <li class="shop">
              <div
                class="openlinks"
                data-bs-toggle="collapse"
                href="#shoplinks"
                role="button"
                aria-label="shop"
                aria-expanded="false"
                aria-controls="shoplinks"
              >
                <span class="aLinks">shop</span>
                <span class="plusLinks"></span>
              </div>
              <ul class="collapse" id="shoplinks">
                <li>
                  <router-link to="/shop?page=1">our shop</router-link>
                </li>
                <li>
                  <router-link to="/cart">cart</router-link>
                </li>
                <li>
                  <router-link to="/wishlist">wishlist</router-link>
                </li>
              </ul>
            </li>
            <li class="pages">
              <div
                class="openlinks"
                data-bs-toggle="collapse"
                href="#pageslinks"
                role="button"
                aria-label="pages"
                aria-expanded="false"
                aria-controls="shoplinks"
              >
                <span class="aLinks">pages</span>
                <span class="plusLinks"></span>
              </div>
              <ul class="collapse" id="pageslinks">
                <li>
                  <router-link to="/contact">contact</router-link>
                </li>
                <li>
                  <router-link to="/team">team</router-link>
                </li>
                <li>
                  <router-link to="/case-study">case study details</router-link>
                </li>
                <li>
                  <router-link to="/faq">FAQ</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <sidebar :show="sidebarval"></sidebar>
</template>

<script>
import sidebar from "../ui/BaseSidebar.vue";

export default {
  data() {
    return {};
  },
  methods: {
    headerBg() {
      const body = document.body;
      let lastScroll = 0;

      window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll <= 115) {
          body.classList.remove("scroll-up");
        }

        if (
          currentScroll > lastScroll &&
          !body.classList.contains("scroll-down") &&
          currentScroll > 115
        ) {
          body.classList.remove("scroll-up");
          body.classList.add("scroll-down");
        }

        if (
          currentScroll < lastScroll &&
          body.classList.contains("scroll-down")
        ) {
          body.classList.remove("scroll-down");
          body.classList.add("scroll-up");
        }

        lastScroll = currentScroll;
      });
    },
    activeLi(val) {
      this.$store.dispatch("activeLi", val);
    },
    deactiveLi(val) {
      this.$store.dispatch("deactiveLi", val);
    },
    sidebarChangeVal(val) {
      document.querySelector(".bars").classList.add("sidebaract");
      this.$store.dispatch("sidebar/sidebarState", val);
    },
    barsclass() {
      document.querySelector(".mdbars").classList.toggle("activebars");
    },
  },
  computed: {
    pagesLi() {
      return this.$store.getters["pagesLi"];
    },
    shopLi() {
      return this.$store.getters["shopLi"];
    },
    sidebarval() {
      return this.$store.getters["sidebar/sidebarState"];
    },
    getCartProducts() {
      const cart = this.$store.getters["cart/myCart"];
      return cart.length;
    },
  },
  components: {
    sidebar,
  },
  created() {
    this.headerBg();
  },
  watch: {
    $route() {
      const routeName = this.$route.name;
      const cartIcon = document.querySelector(".rightSide");
      if (
        routeName !== "shop" &&
        routeName !== "cart" &&
        routeName !== "shopDetails" &&
        routeName !== "checkout" &&
        routeName !== "wishlist"
      ) {
        cartIcon.style.display = "none";
      } else {
        cartIcon.style.display = "flex";
      }
      this.headerBg();
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  transition: all 300ms ease-in-out;
  @media (max-width: 1199px) {
    .content {
      height: 80px !important;
    }
  }
  @media (max-width: 1199px) {
    .content {
      padding-top: 0 !important;
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    .tools {
      display: flex;
      align-items: center;
      .rightSide {
        margin-left: auto;
        margin-right: 30px;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        a {
          display: flex;
          align-items: center;
        }
        svg {
          transition-duration: 0.3s;
          color: white;
          @media (min-width: 992px) {
            &:hover {
              color: var(--prim-color);
            }
          }
        }
        span {
          position: absolute;
          bottom: -10px;
          right: -10px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background-color: var(--prim-color);
          color: white;
          font-size: 12px;
          line-height: 1.6px;
          &:hover {
            @media (min-width: 992px) {
              & ~ svg {
                color: var(--prim-color);
              }
            }
          }
        }
      }
      .mdbars {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 30px;
        height: 27px;
        &.activebars {
          .bar {
            transition-duration: 0.3s;
            background-color: transparent;
            &::before {
              transform: rotate(-45deg);
              top: 0px;
            }
            &::after {
              transform: rotate(45deg);
              bottom: 0px;
            }
          }
        }
        .bar {
          width: 30px;
          height: 3px;
          background-color: #ffffff;
          border-radius: 6px;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            width: 30px;
            height: 3px;
            background-color: #ffffff;
            border-radius: 6px;
            top: 8px;
            transition-duration: 0.3s;
          }
          &::after {
            content: "";
            position: absolute;
            width: 30px;
            height: 3px;
            background-color: #ffffff;
            border-radius: 6px;
            bottom: 8px;
            transition-duration: 0.3s;
          }
        }
      }
      .bars {
        border: 2px solid #ffffff;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        &:hover {
          .inbar {
            transform: translateY(6px) !important;
          }
          .bar2 {
            transform: translateY(6px) !important;
            width: 18px !important;
          }
          .bar3 {
            transform: translateY(6px) !important;
          }
          .bar4 {
            transform: translateY(6px) !important;
            width: 0 !important;
          }
        }
        &.sidebaract {
          .inbar {
            transform: translateY(6px) !important;
          }
          .bar2 {
            transform: translateY(6px) !important;
            width: 18px !important;
          }
          .bar3 {
            transform: translateY(6px) !important;
          }
          .bar4 {
            transform: translateY(6px) !important;
            width: 0 !important;
          }
        }
        .barcontainer {
          overflow: hidden;
          .bar {
            width: 18px;
            height: 2px;
            background-color: #ffffff;
            margin-bottom: 4px;
            border-radius: 6px;
            transition-duration: 0.3s;
            &.bar1,
            &.bar2 {
              width: 14px;
            }
            &.inbar {
              transform: translateY(-5px);
            }
          }
        }
      }
    }
    .links {
      ul {
        display: flex;
        li.liLinks {
          position: relative;
          &:not(:last-of-type) {
            margin-right: 50px;
          }
          @media (min-width: 992px) {
            .aLinks:hover {
              color: var(--prim-color) !important;
            }
          }
          .aLinks {
            cursor: pointer;
            display: flex;
            align-items: center;
            height: 90px;
            transition-duration: 0.3s;
            color: #ffffff;
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 500;
            svg {
              margin-left: 5px;
            }
          }
          .baseList {
            position: absolute;
            width: 260px;
            ul {
              display: flex;
              flex-direction: column;
              background-color: #181818;
              border-bottom-left-radius: 6px;
              border-bottom-right-radius: 6px;
              border-top: var(--prim-color) solid 2px;
              padding: 10px 0;
              li {
                &:hover {
                  a {
                    color: var(--prim-color);
                  }
                }
                a {
                  display: block;
                  padding: 10px 20px;
                  transition: color 0.3s ease-in-out;
                  color: #ffffff;
                  font-size: 15px;
                  text-transform: uppercase;
                  font-weight: 400;
                }
              }
            }
          }
        }
      }
    }
    .mdlinks {
      position: absolute;
      top: 80px;
      left: 0px;
      background-color: #181818;
      width: 100%;
      border-bottom: 1px solid rgba(77, 77, 77, 0.3215686275);
      ul.mainul {
        padding: 10px 0;
        max-height: calc(100vh - 80px);
        overflow-y: auto;
        li {
          position: relative;
          a,
          .openlinks {
            display: block;
            padding: 8px 20px;
            color: #fefefeb3;
            text-transform: uppercase;
            font-size: 17px;
            font-weight: 400;
            transition: color 0.3s ease-in-out;
            @media (min-width: 992px) {
              &:hover {
                color: var(--prim-color);
              }
            }
          }
          ul {
            padding-left: 15px;
          }
          .openlinks {
            span:nth-child(2) {
              width: 30px;
              height: 30px;
              position: absolute;
              right: 20px;
              top: 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              &::after {
                content: "";
                position: absolute;
                height: 10px;
                width: 2px;
                background-color: #fefefeb3;
                transition: transform 0.3s ease-in-out;
              }
              &::before {
                content: "";
                position: absolute;
                width: 10px;
                height: 2px;
                background-color: #fefefeb3;
                transition: transform 0.3s ease-in-out;
              }
            }
            &[aria-expanded="true"] {
              span:nth-child(2) {
                &::after {
                  transform: rotate(90deg);
                }
              }
            }
          }
        }
      }
    }
  }
}

.baseListAnimation-enter-active,
.baseListAnimation-leave-active {
  transition-duration: 0.3s;
}

.baseListAnimation-enter-from,
.baseListAnimation-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
