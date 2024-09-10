<template>
  <div class="wishlistPage">
    <base-hero class="baseHero" :imgUrl="imgUrl">
      <template #head>wishlist</template>
      <template #nav>wishlist</template>
    </base-hero>
    <div v-if="checkAvailWishList" class="content mainPadding">
      <div class="container">
        <div class="table-container">
          <table class="fixed">
            <thead>
              <tr>
                <th>product</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th>Subtotal</th>
                <th class="remove">Remove</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in getWishListData" :key="index">
                <td class="product-cell">
                  <div class="product">
                    <img
                      loading="lazy"
                      src="../../imgs/cartAssets/product_thumb_lg_1.webp"
                      alt="product"
                    />
                    <div class="name">{{ product.name }}</div>
                  </div>
                </td>
                <td>${{ product.price }}</td>
                <td>In stock</td>
                <td>${{ product.price }}</td>
                <td class="remove">
                  <font-awesome-icon
                    @click="removeFromWishList(product)"
                    icon="fa-solid fa-xmark"
                  />
                </td>
                <td>
                  <div
                    @click="addToCart({ ...product })"
                    class="secondBtn basic"
                  >
                    Add To Cart
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="controls">
          <div @click="addAllToCart" class="secondBtn basic">
            Add All to Cart
          </div>
        </div>
      </div>
    </div>
    <div v-else class="noCartContent">
      <div class="container">
        <div class="contentnocart">
          <div class="info">
            <span>Your WishList is currently empty..</span>
            <span
              >Continue browsing
              <router-link aria-label="Continue browsing" to="/shop?page=1"
                >here.</router-link
              ></span
            >
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
      imgUrl: require("../../imgs/wishlistAssets/wishlist_hero_bg.webp"),
    };
  },
  methods: {
    removeFromWishList(checkProduct) {
      this.$store.dispatch("cart/toggleProdWishlist", [checkProduct, "remove"]);
      const WishList = this.$store.getters["cart/WishList"];
      window.localStorage.setItem("WishListProducts", JSON.stringify(WishList));
    },
    addToCart(product) {
      const productsData = this.$store.getters["cart/myCart"];
      const checkProduct = productsData.find((prod) => {
        return prod.id === product.id;
      });
      if (checkProduct) {
        this.$store.dispatch("cart/toggleProduct", [checkProduct, "remove"]);
        const cartProdQuant = checkProduct.quant || 1;
        product.quant = 1 + +cartProdQuant;
        this.$store.dispatch("cart/toggleProduct", [product, "add"]);
      } else {
        product.quant = 1;
        this.$store.dispatch("cart/toggleProduct", [product, "add"]);
      }
      window.localStorage.setItem("cartProducts", JSON.stringify(productsData));
      this.$store.dispatch("cart/toggleProdWishlist", [product, "remove"]);
      const WishList = this.$store.getters["cart/WishList"];
      window.localStorage.setItem("WishListProducts", JSON.stringify(WishList));
    },
    addAllToCart() {
      const WishList = [...this.$store.getters["cart/WishList"]];
      const productsData = this.$store.getters["cart/myCart"];
      WishList.forEach((ele) => {
        const productsData = this.$store.getters["cart/myCart"];
        const checkProduct = productsData.find((prod) => {
          return prod.id === ele.id;
        });
        if (checkProduct) {
          this.$store.dispatch("cart/toggleProduct", [checkProduct, "remove"]);
          const cartProdQuant = checkProduct.quant || 1;
          ele.quant = 1 + +cartProdQuant;
          this.$store.dispatch("cart/toggleProduct", [ele, "add"]);
        } else {
          ele.quant = 1;
          this.$store.dispatch("cart/toggleProduct", [ele, "add"]);
        }
        this.$store.dispatch("cart/toggleProdWishlist", [ele, "remove"]);
      });
      window.localStorage.setItem("cartProducts", JSON.stringify(productsData));
      window.localStorage.setItem("WishListProducts", JSON.stringify(WishList));
    },
    doneLoading() {
      const content = document.querySelector(".baseHero");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.$store.dispatch("doneLoading", true);
      });
    },
  },
  computed: {
    getWishListData() {
      return this.$store.getters["cart/WishList"];
    },
    checkAvailWishList() {
      const WishList = this.$store.getters["cart/WishList"];
      if (WishList.length === 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {
    this.doneLoading();
  },
};
</script>

<style lang="scss" scoped>
.wishlistPage {
  .content {
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-bottom: 25px;
      table {
        width: 100%;
        th,
        td {
          &.remove {
            text-align: center;
          }
          white-space: nowrap;
          padding: 20px;
          font-size: 18px;
        }
        thead {
          tr {
            background-color: black;
            th {
              text-transform: capitalize;
            }
          }
        }
        tbody {
          color: #fefefeb3;
          tr {
            border-bottom: 1px solid #4d4d4d;
            td {
              &.product-cell {
                .product {
                  display: flex;
                  align-items: center;
                  gap: 20px;
                }
                @media (max-width: 991px) {
                  img {
                    width: 50px !important;
                  }
                }
                img {
                  width: 85px;
                  max-width: 100%;
                  border-radius: 6px;
                }
                .name {
                  color: white;
                  font-size: 17px;
                  font-weight: 500;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
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
            }
          }
        }
        svg {
          cursor: pointer;
          transition-duration: 0.3s;
          &:hover {
            color: red;
          }
        }
      }
    }
    @media (max-width: 575px) {
      .controls {
        .cartBtn {
          width: 100%;
        }
      }
    }
  }
  .noCartContent {
    margin: 100px 0;
    .contentnocart {
      display: flex;
      .info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        span:first-of-type {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          font-size: 16px;
          letter-spacing: 1.2px;
          background-color: #fff3cd;
          color: #856404;
          padding: 15px 0;
          margin-bottom: 30px;
        }
        span:nth-child(2) {
          a {
            color: var(--prim-color);
          }
        }
      }
    }
  }
}
.cartBtn {
  white-space: nowrap;
  background-color: var(--prim-color);
  border-radius: 6px;
  border: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  transition-duration: 0.3s;
  width: fit-content;
  text-align: center;
  cursor: pointer;
  padding: 12px 45px;
  &:hover {
    opacity: 0.8;
  }
}
</style>
