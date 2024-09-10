<template>
  <div class="cartPage">
    <base-hero class="baseHero" :imgUrl="imgUrl">
      <template #head>cart</template>
      <template #nav>cart</template>
    </base-hero>
    <div v-if="checkAvailCart" class="content mainPadding">
      <div class="container">
        <div class="row">
          <div class="col-xl-8">
            <div class="table-container">
              <table class="fixed">
                <thead>
                  <tr>
                    <th>product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product, index) in getCartData" :key="index">
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
                    <td>
                      <input
                        @change="checkProductQuant($event, product.id)"
                        min="1"
                        type="number"
                        :value="product.quant || 1"
                      />
                    </td>
                    <td>
                      ${{ Math.trunc((product.quant || 1) * product.price) }}
                    </td>
                    <td>
                      <font-awesome-icon
                        @click="removeFromCart(product)"
                        icon="fa-solid fa-xmark"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="coupon">
              <input type="text" placeholder="Coupone Code" />
              <button class="secondBtn basic">Update Cart</button>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="infoBox">
              <div class="title">Cart Totals</div>
              <ul>
                <li>
                  <div class="name">Subtotal</div>
                  <div class="price">${{ getTotals }}</div>
                </li>
                <li>
                  <div class="name">Total</div>
                  <div class="price">${{ getTotals }}</div>
                </li>
              </ul>
              <div class="secondBtn withLink">
                <router-link aria-label="Procced To Checkout" to="/checkout"
                  >Procced To Checkout</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="noCartContent">
      <div class="container">
        <div class="contentnocart">
          <div class="info">
            <span>Your cart is currently empty..</span>
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
      imgUrl: require("../../imgs/cartAssets/cart_hero_bg.webp"),
    };
  },
  computed: {
    getCartData() {
      return this.$store.getters["cart/myCart"];
    },
    getTotals() {
      const cart = this.$store.getters["cart/myCart"];
      let subtotal = 0;
      if (cart) {
        cart.forEach((ele) => {
          subtotal += (ele.quant || 1) * ele.price;
        });
      }
      return Math.floor(subtotal);
    },
    checkAvailCart() {
      const cart = this.$store.getters["cart/myCart"];
      if (cart.length === 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    checkProductQuant(e, id) {
      this.$store.dispatch("cart/changeProductQuant", [e.target.value, id]);
      const productsData = this.$store.getters["cart/myCart"];
      window.localStorage.setItem("cartProducts", JSON.stringify(productsData));
    },
    removeFromCart(checkProduct) {
      this.$store.dispatch("cart/toggleProduct", [checkProduct, "remove"]);
      const productsData = this.$store.getters["cart/myCart"];
      window.localStorage.setItem("cartProducts", JSON.stringify(productsData));
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
.cartPage {
  @media (max-width: 991px) {
    .noCartContent {
      margin: 40px 0;
    }
  }
  .content {
    @media (max-width: 1199px) {
      .infoBox {
        margin-top: 80px;
      }
    }
    .infoBox {
      border: 5px solid #4d4d4d;
      border-radius: 2px;
      padding: 25px 30px 30px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .title {
        width: 100%;
        font-size: 30px;
        margin-bottom: 20px;
        font-weight: 700;
      }
      ul {
        width: 100%;
        margin-bottom: 30px;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-top: 2px solid #4d4d4d;
          font-size: 17px;
          font-weight: 500;
          &:not(:first-of-type) {
            border-bottom: 2px solid #4d4d4d;
          }
        }
      }
    }
    .table-container {
      width: 100%;
      overflow-x: auto;
      table {
        width: 100%;
        th,
        td {
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
          @media (min-width: 992px) {
            &:hover {
              color: red;
            }
          }
        }
      }
    }
    @media (max-width: 450px) {
      .coupon {
        flex-direction: column;
        input {
          margin-bottom: 20px;
          margin-right: 0 !important;
        }
      }
    }
    .coupon {
      display: flex;
      margin-top: 25px;
      input {
        background-color: transparent;
        border: 1px solid var(--prim-color);
        padding: 10px;
        border-radius: 6px;
        transition-duration: 0.3s;
        color: white;
        margin-right: 20px;
        &:focus {
          outline: none;
          border-color: white;
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
</style>
