<template>
  <div class="shopPage">
    <base-hero :imgUrl="imgUrl">
      <template #head>Shop</template>
      <template #nav>Shop</template>
    </base-hero>
    <div class="shopContent mainPadding">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="controls">
              <div class="searchCont">
                <input type="search" placeholder="Search Products" />
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </div>
              <div class="categories">
                <div class="title">Categories</div>
                <ul class="arrowUl">
                  <li>Design (5)</li>
                  <li>Creative (2)</li>
                  <li>Illustration (3)</li>
                </ul>
              </div>
              <div class="price">
                <div class="title">Price Filter</div>
                <div class="range"></div>
                <span
                  >Price: ${{ tempRangeValues[0] }} - ${{
                    tempRangeValues[1]
                  }}</span
                >
              </div>
              <div class="tags">
                <div class="title">Tags</div>
                <ul>
                  <li>Brand</li>
                  <li>Digital</li>
                  <li>Creative</li>
                  <li>Marketing</li>
                  <li>Graphics</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9 content">
            <div class="countAndSort">
              <span>{{ showing }}</span>
            </div>
            <div class="products">
              <div class="row">
                <div
                  v-for="(product, index) in getShopData"
                  :key="index"
                  class="col-lg-4 col-sm"
                >
                  <div
                    :data-id="product.id"
                    :class="[
                      'product',
                      {
                        inCart: isInCart(product.id),
                        inWishList: isInWishList(product.id),
                      },
                    ]"
                  >
                    <div class="img-container">
                      <img loading="lazy" :src="product.imgUrl" alt="product" />
                      <div class="options">
                        <div
                          @click="addToCart({ ...product })"
                          class="option addtocart"
                        >
                          <font-awesome-icon
                            class="cartoutSvg"
                            icon="fa-solid fa-cart-plus"
                          />
                          <font-awesome-icon
                            class="cartinSvg"
                            icon="fa-solid fa-cart-arrow-down"
                          />
                        </div>
                        <Teleport to="body">
                          <transition-group name="alert">
                            <base-alert
                              v-for="notification in notifications"
                              :key="notification.id"
                              @closeAlert="removeNotification(notification.id)"
                            >
                              <template #head>{{ notification.msg1 }}</template>
                              <template #para>{{ notification.msg2 }}</template>
                            </base-alert>
                          </transition-group>
                        </Teleport>
                        <div
                          @click="addToWishList({ ...product })"
                          class="option addToWishlist"
                        >
                          <font-awesome-icon
                            class="wishlistoutSvg"
                            icon="fa-regular fa-heart"
                          />
                          <font-awesome-icon
                            class="wishlistinSvg"
                            icon="fa-solid fa-heart"
                          />
                        </div>
                        <router-link
                          aria-label="productDetails"
                          :to="'/shopDetails/' + product.id"
                        >
                          <div class="option">
                            <font-awesome-icon icon="fa-solid fa-eye" />
                          </div>
                        </router-link>
                      </div>
                    </div>
                    <div class="info">
                      <div class="name">
                        <span>{{ product.name }}</span>
                      </div>
                      <div class="price">Price: ${{ product.price }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="shopPagination">
              <router-link :to="prevPageLink" v-show="prevActive" class="prev">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
              </router-link>
              <div
                v-for="page in pagesNum"
                :key="page"
                :class="{
                  page: true,
                  active: isActivePage(page - 1),
                }"
              >
                <router-link aria-label="shopPage" :to="'/shop?page=' + page">{{
                  page
                }}</router-link>
              </div>
              <router-link :to="nextPageLink" v-show="nextActive" class="next">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </router-link>
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
      imgUrl: require("../../imgs/shopAssets/shop_hero_bg.webp"),
      rangeValues: [200, 800],
      tempRangeValues: [200, 800],
      pagesNum: 3,
      notifications: [],
      notificationCounter: 0,
    };
  },
  computed: {
    nextActive() {
      return this.currentPage < this.pagesNum;
    },
    prevActive() {
      return this.currentPage > 1;
    },
    nextPageLink() {
      return {
        path: "/shop",
        query: { page: this.currentPage + 1 },
      };
    },
    prevPageLink() {
      return {
        path: "/shop",
        query: { page: this.currentPage - 1 },
      };
    },
    currentPage() {
      return Number(this.$route.query.page) || 1;
    },
    showing() {
      // no backend-productsData-so this is how i handle it rn
      if (this.currentPage === this.pagesNum) {
        return `Showing 18-21 of 21 results`;
      } else if (this.currentPage === 2) {
        return `Showing 10-18 of 21 results`;
      } else {
        return `Showing 1-9 of 21 results`;
      }
    },
    getShopData() {
      const shopData = this.$store.getters["shop/pagenationData"];
      return shopData[this.currentPage] || [];
    },
    getCartProducts() {
      return this.$store.getters["cart/myCart"];
    },
    getWishListProducts() {
      return this.$store.getters["cart/WishList"];
    },
  },
  methods: {
    noUiSliderInit() {
      const range = document.querySelector(".range");
      this.range = this.$noUiSlider.create(range, {
        start: [200, 800],
        connect: true,
        range: {
          min: 0,
          max: 1000,
        },
      });
      // Use the update event to update the temporary values for display
      range.noUiSlider.on("update", (values) => {
        this.tempRangeValues = values.map((value) => parseInt(value));
      });

      // Use the set event to update the final range values only when sliding stops for filtering
      range.noUiSlider.on("set", (values) => {
        this.rangeValues = values.map((value) => parseInt(value));
      });
    },
    isActivePage(pageIndex) {
      return pageIndex + 1 === this.currentPage;
    },
    validatePageNumber() {
      const currPageNum = this.currentPage;
      if (currPageNum < 1 || currPageNum > this.pagesNum) {
        this.$router.replace({ path: "/shop", query: { page: 1 } });
      }
    },
    doneLoading() {
      const content = document.querySelector(".shopPage");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.$store.dispatch("doneLoading", true);
      });
    },
    showNotification(msg1, msg2) {
      this.notifications.push({ id: this.notificationCounter++, msg1, msg2 });
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter(
        (notification) => notification.id !== id
      );
    },
    addToCart(product) {
      const productsData = this.$store.getters["cart/myCart"];
      const loaded = productsData.some((prod) => prod.id === product.id);
      if (loaded) {
        this.showNotification(
          "Product removed from cart",
          "Item successfully removed."
        );
        this.$store.dispatch("cart/toggleProduct", [product, "remove"]);
      } else {
        this.showNotification(
          "Product added to cart",
          "Thank you for shopping with us!"
        );
        this.$store.dispatch("cart/toggleProduct", [product, "add"]);
      }
      window.localStorage.setItem("cartProducts", JSON.stringify(productsData));
    },
    addToWishList(product) {
      this.addToWishListAlert = true;
      const WishListData = this.$store.getters["cart/WishList"];
      const loaded = WishListData.some((prod) => prod.id === product.id);
      if (loaded) {
        this.showNotification(
          "Product removed from wishlist",
          "Item successfully removed."
        );

        this.$store.dispatch("cart/toggleProdWishlist", [product, "remove"]);
      } else {
        this.showNotification(
          "Product added to wishlist",
          "Item saved to your wishlist."
        );
        this.$store.dispatch("cart/toggleProdWishlist", [product, "add"]);
      }
      window.localStorage.setItem(
        "WishListProducts",
        JSON.stringify(WishListData)
      );
    },
    async loadData() {
      const pagenationData = this.$store.getters["shop/pagenationData"];
      const alreadyIn = this.currentPage in pagenationData;
      if (!alreadyIn) {
        const page = this.currentPage;
        const idIndex = (page - 1) * 9;
        const ids = this.$store.getters["shop/productsIds"];
        const startAfterKey = ids[idIndex - 1];
        await this.$store.dispatch("shop/fetchPagenationData", {
          startAfterKey: page === 1 ? false : startAfterKey,
          limitToFirst: "9",
          page: page,
        });
      }
      this.doneLoading();
    },
    isInCart(productId) {
      return this.getCartProducts.some((product) => product.id === productId);
    },
    isInWishList(productId) {
      return this.getWishListProducts.some(
        (product) => product.id === productId
      );
    },
  },
  watch: {
    "$route.query.page"() {
      this.validatePageNumber();
      this.loadData();
    },
  },
  async mounted() {
    this.validatePageNumber();
    this.loadData();
    this.noUiSliderInit();
  },
};
</script>

<style lang="scss" scoped>
.shopContent {
  .row {
    @media (max-width: 991px) {
      .controls {
        margin-bottom: 60px;
      }
    }
    .controls {
      padding: 40px 25px;
      background-color: black;
      & > div:not(:last-of-type) {
        margin-bottom: 40px;
      }
      .title {
        font-size: 18px;
        margin-bottom: 16px;
        font-weight: 700;
        text-transform: capitalize;
      }
      .searchCont {
        position: relative;
        svg {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 14px;
          transition-duration: 0.3s;
        }
        input {
          border: 1px solid #999696;
          color: #fefefe;
          padding: 5px 10px 5px 40px;
          border-radius: 3px;
          height: 46px;
          width: 100%;
          background-color: transparent;
          transition-duration: 0.3s;
          &:focus {
            outline: none;
            border-color: white;
            & ~ svg {
              color: var(--prim-color);
            }
          }
          &::placeholder {
            color: #999696;
            font-size: 17px;
            font-weight: 500;
          }
        }
      }
      .arrowUl {
        li {
          margin-bottom: 12px;
        }
      }
      .price {
        .range {
          margin: 5px 0 15px;
        }
        span {
          display: block;
          color: rgba(254, 254, 254, 0.7);
          font-weight: 500;
        }
      }
      .secondBtn {
        margin: 20px auto 0;
      }
    }
    .content {
      @media (max-width: 991px) {
        .countAndSort {
          flex-direction: column;
          span {
            margin-bottom: 10px;
          }
        }
      }
      .countAndSort {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        color: #fefefeb3;
        font-size: 17px;
        select {
          background-color: transparent;
          border: none;
          color: #fefefeb3;
          &:focus {
            outline: none;
          }
          option {
            padding: 10px;
            background-color: #fff;
            color: #fefefeb3;
          }
        }
      }
      .products {
        @media (max-width: 991px) {
          .product {
            margin-bottom: 25px;
          }
        }
        .product {
          margin-bottom: 55px;
          &.inCart {
            .options {
              .addtocart {
                background-color: white !important;
                svg {
                  &.cartinSvg {
                    display: block;
                  }
                  &.cartoutSvg {
                    display: none;
                  }
                  color: var(--prim-color);
                }
              }
            }
          }
          svg {
            &.cartinSvg {
              display: none;
            }
            &.cartoutSvg {
              display: block;
            }
          }
          &.inWishList {
            .options {
              .addToWishlist {
                background-color: white !important;
                svg {
                  &.wishlistinSvg {
                    display: block;
                  }
                  &.wishlistoutSvg {
                    display: none;
                  }
                  color: var(--prim-color);
                }
              }
            }
          }
          svg {
            &.wishlistinSvg {
              display: none;
            }
            &.wishlistoutSvg {
              display: block;
            }
          }
          @media (max-width: 991px) {
            .img-container {
              &::after {
                display: none !important;
              }
              .options {
                display: block !important;
                a {
                  width: fit-content;
                }
                .option {
                  transform: scale(1) !important;
                }
              }
            }
          }
          .img-container {
            margin-bottom: 25px;
            max-width: 468px;
            max-height: 468px;
            &::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: transparent;
              transition-duration: 0.3s;
              z-index: 2;
            }
            &:hover {
              &::after {
                background-color: rgba(22, 22, 22, 0.4);
              }
            }
            img {
              max-width: 100%;
              border-radius: 6px;
              object-fit: cover;
            }
            .options {
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 5;
              &:hover {
                .option {
                  transform: scale(1);
                }
              }
              a {
                display: block;
                color: white;
              }
              .option {
                margin: 6px;
                width: 50px;
                height: 50px;
                background-color: var(--prim-color);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition-duration: 0.5s;
                transform: scale(0);
                @media (min-width: 992px) {
                  &:hover {
                    background-color: white;
                    svg {
                      color: var(--prim-color);
                    }
                  }
                }
                svg {
                  transition-duration: 0.5s;
                  font-size: 18px;
                }
              }
            }
          }
          .name {
            display: block;
            color: #fefefe;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 7px;
          }
          .price {
            color: #999696;
            font-weight: 700;
          }
        }
      }
      .shopPagination {
        display: flex;
        align-items: center;
        justify-content: center;
        & > div,
        & > a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin: 7px;
          border-radius: 5px;
          background-color: black;
          font-weight: 500;
          color: white;
          cursor: pointer;
          &.page {
            &.active {
              background-color: var(--prim-color);
            }
            a {
              display: block;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fefefe;
            }
          }
        }
      }
    }
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
