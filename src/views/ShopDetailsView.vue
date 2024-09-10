<template>
  <div class="shopDetails">
    <base-hero :imgUrl="imgUrl">
      <template #head>product details</template>
      <template #nav>product details</template>
    </base-hero>
    <div class="productDetails">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="galleryCarousel">
              <div class="swiper-container" ref="productSwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          loading="lazy"
                          src="../../imgs/shopDetailsAssets/product_thumb_lg_1.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          loading="lazy"
                          src="../../imgs/shopDetailsAssets/product_thumb_lg_2.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          src="../../imgs/shopDetailsAssets/product_thumb_lg_3.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          src="../../imgs/shopDetailsAssets/product_thumb_lg_4.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          loading="lazy"
                          src="../../imgs/shopDetailsAssets/product_thumb_lg_2.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          loading="lazy"
                          src="../../imgs/shopDetailsAssets/product_thumb_lg_3.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-container smSwiper" ref="smProductSwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          loading="lazy"
                          src="../../imgs/shopDetailsAssets/product_thumb_sm_1.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          loading="lazy"
                          src="../../imgs/shopDetailsAssets/product_thumb_sm_2.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          loading="lazy"
                          src="../../imgs/shopDetailsAssets/product_thumb_sm_3.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          loading="lazy"
                          src="../../imgs/shopDetailsAssets/product_thumb_sm_4.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          loading="lazy"
                          src="../../imgs/shopDetailsAssets/product_thumb_sm_2.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="carousel__item">
                      <div class="img-container">
                        <img
                          loading="lazy"
                          src="../../imgs/shopDetailsAssets/product_thumb_sm_3.webp"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="info">
              <div class="title">{{ getproductData.name }}</div>
              <div class="starsPrice">
                <div class="price">${{ getproductData.price }}</div>
                <div class="stars">
                  <font-awesome-icon
                    v-for="n in productstars"
                    :key="n"
                    icon="fa-solid fa-star"
                  />
                  <font-awesome-icon
                    v-for="n in productnonstars"
                    :key="n"
                    class="shadowStar"
                    icon="fa-solid fa-star"
                  />
                </div>
              </div>
              <p>{{ getproductData.description1 }}</p>
              <p>{{ getproductData.description2 }}</p>
              <div class="controls">
                <input type="number" min="1" v-model="quantVal" />
                <button class="secondBtn lefted basic" @click="addToCart">
                  Add to cart
                </button>
                <Teleport to="body">
                  <transition-group name="alert">
                    <base-alert
                      v-for="notification in notifications"
                      :key="notification.id"
                      @closeAlert="removeNotification(notification.id)"
                    >
                      <template #head>Product added to cart</template>
                      <template #para>Thank you for shopping with us!</template>
                    </base-alert>
                  </transition-group>
                </Teleport>
              </div>
              <div class="moreInfo">
                <span><b>SKU: </b> {{ getproductData.SKU }}</span>
                <span><b>Categories: </b> {{ getproductData.category }}</span>
                <span><b>Tags: </b> {{ theTags }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="productReviews">
      <div class="container">
        <div class="content">
          <div class="tabs">
            <div @click="changeActiveTab($event, '.tab1')" class="tab">
              Description
            </div>
            <div @click="changeActiveTab($event, '.tab2')" class="tab">
              Additional information
            </div>
            <div @click="changeActiveTab($event, '.tab3')" class="tab active">
              Review ({{
                getproductData.reviews ? getproductData.reviews.length : 0
              }})
            </div>
          </div>
          <div class="tabBody tab1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus
              leo. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis
              sodales, nulla nibh sagittis augue, vel porttitor diam enim non
              metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio
              eget ullamcorper efficitur. Cras placerat ut turpis pellentesque
              vulputate. Nam sed consequat tortor. Curabitur finibus sapien
              dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non
              arcu purus. Vivamus et massa massa.
            </p>
          </div>
          <div class="tabBody tab2">
            <table>
              <tbody>
                <tr>
                  <td>Color</td>
                  <td>{{ theColors }}</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>{{ theSizes }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="tabBody tab3 active">
            <div class="reviews">
              <div
                v-for="(rev, index) in getproductData.reviews"
                :key="index"
                class="review"
              >
                <div class="userInfo">
                  <div class="d-flex">
                    <div class="profile">
                      <font-awesome-icon icon="fa-solid fa-user" />
                    </div>
                    <div class="detInfo">
                      <div class="stars">
                        <font-awesome-icon
                          v-for="n in productstars"
                          :key="n"
                          icon="fa-solid fa-star"
                        />
                        <font-awesome-icon
                          v-for="n in productnonstars"
                          :key="n"
                          class="shadowStar"
                          icon="fa-solid fa-star"
                        />
                      </div>
                      <div class="name">{{ rev.name }}</div>
                    </div>
                  </div>
                  <div class="date">{{ rev.date }}</div>
                </div>
                <div class="userComment">{{ rev.comment }}</div>
              </div>
            </div>
            <div class="setComment">
              <span
                >Your email address will not be published. Required fields are
                marked *
              </span>
              <div class="rating">
                <span>Your rating *</span>
                <div class="stars">
                  <font-awesome-icon
                    @click="changeRating(1)"
                    icon="fa-solid fa-star"
                  />
                  <font-awesome-icon
                    @click="changeRating(2)"
                    icon="fa-solid fa-star"
                  />
                  <font-awesome-icon
                    @click="changeRating(3)"
                    icon="fa-solid fa-star"
                  />
                  <font-awesome-icon
                    @click="changeRating(4)"
                    icon="fa-solid fa-star"
                  />
                  <font-awesome-icon
                    @click="changeRating(5)"
                    icon="fa-solid fa-star"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="mainInput">
                    <textarea
                      cols="30"
                      rows="10"
                      id="userComment"
                      placeholder="Write your review*"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mainInput">
                    <input id="name" type="text" placeholder="Your name *" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mainInput">
                    <input id="email" type="email" placeholder="Your email *" />
                  </div>
                </div>
              </div>
              <button class="secondBtn basic">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productId"],
  data() {
    return {
      imgUrl: require("../../imgs/shopDetailsAssets/shopDetails_hero_bg.webp"),
      quantVal: 1,
      notifications: [],
      notificationCounter: 0,
    };
  },
  computed: {
    getproductData() {
      const data = this.$store.getters["shop/productsData"].find((ele) => {
        return ele.id === this.productId;
      });
      return data ? { ...data } : false;
    },
    theTags() {
      const productData = this.getproductData;
      const tags = productData ? productData.tags : [];
      return Array.isArray(tags) ? tags.join(", ") : "";
    },
    theColors() {
      const productData = this.getproductData;
      const colors = productData ? productData.colors : [];
      return Array.isArray(colors) ? colors.join(", ") : "";
    },
    theSizes() {
      const productData = this.getproductData;
      const sizes = productData ? productData.sizes : [];
      return Array.isArray(sizes) ? sizes.join(", ") : "";
    },
    productstars() {
      return Array.from(
        { length: Math.floor(this.getproductData.stars) },
        (_, index) => index
      );
    },
    productnonstars() {
      return Array.from(
        { length: 5 - +Math.floor(this.getproductData.stars) },
        (_, index) => index
      );
    },
  },
  methods: {
    doneLoading() {
      this.initSwipers();
      const content = document.querySelector(".shopDetails");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.$store.dispatch("doneLoading", true);
      });
    },
    initSwipers() {
      this.$nextTick(() => {
        var smProductSwiper = new this.$Swiper(this.$refs.smProductSwiper, {
          loop: true,
          slidesPerView: 4,
          spaceBetween: 15,
        });
        // eslint-disable-next-line no-unused-vars
        var productSwiper = new this.$Swiper(this.$refs.productSwiper, {
          modules: [this.$Thumbs],
          loop: true,
          spaceBetween: 15,
          grabCursor: true,
          thumbs: {
            swiper: smProductSwiper,
          },
        });
      });
    },
    showNotification() {
      this.notifications.push({ id: this.notificationCounter++ });
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter(
        (notification) => notification.id !== id
      );
    },
    async addToCart() {
      this.showNotification();
      try {
        const product = this.getproductData;
        const productsData = this.$store.getters["cart/myCart"];
        const checkProduct = productsData.find((prod) => {
          return prod.id === product.id;
        });
        if (checkProduct) {
          this.$store.dispatch("cart/toggleProduct", [checkProduct, "remove"]);
          const cartProdQuant = checkProduct.quant || 1;
          product.quant = this.quantVal + cartProdQuant;
          this.$store.dispatch("cart/toggleProduct", [product, "add"]);
        } else {
          product.quant = this.quantVal;
          this.$store.dispatch("cart/toggleProduct", [product, "add"]);
        }
        window.localStorage.setItem(
          "cartProducts",
          JSON.stringify(productsData)
        );
      } catch (error) {
        console.log(error);
      }
    },
    async loadData() {
      if (!this.getproductData) {
        await this.$store.dispatch("shop/fetchProductData", {
          id: this.productId,
          router: this.$router,
        });
      }
      this.doneLoading();
    },
    changeActiveTab(e, tabName) {
      const tabs = document.querySelectorAll(".tab");
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      e.target.classList.add("active");
      const tabBodys = document.querySelectorAll(".tabBody");
      tabBodys.forEach((tab) => {
        tab.classList.remove("active");
      });
      const activetab = document.querySelector(tabName);
      activetab.classList.add("active");
    },
    changeRating(val) {
      const stars = document.querySelectorAll(".rating .stars svg");
      stars.forEach((star, index) => {
        star.classList.add("shadowStar");
        if (index < val) {
          star.classList.remove("shadowStar");
        }
      });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.shopDetails {
  @media (max-width: 991px) {
    .productDetails {
      margin: 80px 0 60px !important;
    }
  }
  .productDetails {
    margin: 150px 0 100px;
    @media (max-width: 991px) {
      .info {
        padding-left: 0 !important;
        padding-top: 40px;
      }
    }
    .swiper-container {
      &.smSwiper {
        margin-top: 20px;
        .swiper-slide {
          cursor: pointer;
          &.swiper-slide-thumb-active {
            .carousel__item {
              border: 1px solid var(--prim-color);
              border-radius: 10px;
            }
          }
        }
      }
    }
    .info {
      padding-left: 50px;
      .title {
        font-size: 30px;
        margin-bottom: 8px;
        font-weight: 700;
      }
      .starsPrice {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--prim-color);
        margin-bottom: 25px;
        .price {
          font-size: 22px;
          font-weight: 700;
        }
        .stars {
          svg {
            font-size: 14px;
          }
        }
      }
      p {
        display: block;
        color: #fefefeb3;
        position: relative;
        font-size: 17px;
        margin: 0;
        &:first-of-type {
          margin-bottom: 18px;
        }
      }
      .controls {
        margin: 35px 0;
        input {
          height: 50px;
          width: 112px;
          background-color: transparent;
          border: 1px solid #999696;
          border-radius: 6px;
          color: #999696;
          padding-left: 20px;
          &:focus {
            outline: none;
          }
        }
        @media (max-width: 380px) {
          button {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      }
      .moreInfo {
        span {
          display: block;
          color: #999696;
          font-size: 17px;
        }
        b {
          font-weight: 500;
          color: #fefefe;
        }
      }
    }
    .img-container {
      img {
        width: 100%;
        max-width: 100%;
        border-radius: 10px;
      }
    }
  }
  .productReviews {
    .content {
      padding-top: 40px;
      border-top: 1px solid #4d4d4d;
      @media (max-width: 991px) {
        .tabs {
          margin-bottom: 40px !important;
        }
      }
      .tabs {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px 52px;
        margin-bottom: 50px;
        .tab {
          position: relative;
          font-size: 18px;
          font-weight: 700;
          padding-bottom: 5px;
          transition-duration: 0.3s;
          cursor: pointer;
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            height: 1px;
            width: 0;
            background-color: #fefefe;
            transition-duration: 0.3s;
          }
          @media (min-width: 992px) {
            &:hover {
              color: var(--prim-color);
            }
          }
          &.active {
            &::after {
              width: 100%;
            }
          }
        }
      }
      .tabBody {
        display: none;
        opacity: 0;
        transition: opacity 0.3s;
        &.active {
          display: block;
          opacity: 1;
        }
        &.tab1 {
          p {
            display: block;
            color: #fefefeb3;
            position: relative;
            font-size: 17px;
          }
        }
        &.tab2 {
          table {
            width: 100%;
            color: #999696;
            font-size: 17px;
            font-weight: 500;
            tr {
              border-top: 1px solid #4d4d4d;
              border-bottom: 1px solid #4d4d4d;
              td {
                padding: 11px 10px;
              }
            }
          }
        }
        @media (max-width: 991px) {
          .reviews {
            margin-bottom: 50px !important;
          }
        }
        &.tab3 {
          .reviews {
            margin-bottom: 85px;
            .review {
              &:not(:first-of-type) {
                padding-top: 30px;
              }
              &:not(:last-of-type) {
                border-bottom: 1px solid #999696;
                padding-bottom: 30px;
              }
              @media (max-width: 374px) {
                .userInfo {
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  .date {
                    margin-left: 0 !important;
                  }
                }
                .userComment {
                  text-align: center;
                }
              }
              .userInfo {
                display: flex;
                .profile {
                  width: 50px;
                  height: 50px;
                  padding: 10px;
                  border-radius: 50%;
                  background-color: var(--prim-color);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-right: 15px;
                  svg {
                    color: #fefefe;
                    font-size: 30px;
                  }
                }
                .detInfo {
                  .stars {
                    font-size: 14px;
                    color: var(--prim-color);
                  }
                  .name {
                    color: #fefefe;
                    font-size: 17px;
                    font-weight: 500;
                  }
                }
                .date {
                  margin-left: 65px;
                  padding-top: 22px;
                  color: #fefefeb3;
                  font-size: 17px;
                }
              }
              .userComment {
                margin-top: 30px;
                color: #fefefeb3;
                font-size: 17px;
              }
            }
          }
          .setComment {
            color: #999696;
            & > span {
              display: block;
              font-size: 17px;
              font-weight: 500;
              margin-bottom: 20px;
            }
            .rating {
              display: flex;
              align-items: center;
              margin-bottom: 20px;
              cursor: pointer;
              span {
                margin-right: 14px;
                font-size: 17px;
                font-weight: 500;
              }
              svg {
                font-size: 14px;
                color: var(--prim-color);
              }
            }
            .mainInput {
              input,
              textarea {
                border-radius: 6px;
              }
            }
          }
        }
      }
    }
  }
  .shadowStar {
    color: #4d4d4d !important;
  }
}

.alert-enter-active,
.alert-leave-active {
  transition-duration: 0.5s;
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform: translate(-50%, -50px);
}
.alert-enter-to {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
