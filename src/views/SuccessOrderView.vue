<template>
  <div class="successOrderPage">
    <base-hero class="baseHero" :imgUrl="imgUrl">
      <template #head>Checkout</template>
      <template #nav>Checkout</template>
    </base-hero>
    <div class="content">
      <div class="container">
        <div class="thxu">Thank you! Your order has been received.</div>
        <div class="orderInfo">
          <div class="box">
            <div class="name">Order Number:</div>
            <div class="info">{{ getOrderData.ordernum }}</div>
          </div>
          <div class="box">
            <div class="name">Date:</div>
            <div class="info">{{ getOrderData.date }}</div>
          </div>
          <div class="box">
            <div class="name">Total:</div>
            <div class="info">${{ getOrderData.total }}</div>
          </div>
          <div class="box">
            <div class="name">Payment method:</div>
            <div class="info">{{ getOrderData.paymentMethod }}</div>
          </div>
        </div>
        <div class="orderDetails infoBox">
          <div class="title">Order details</div>
          <ul>
            <li>
              <div class="name">Products</div>
              <div class="price">Amount</div>
            </li>
            <li class="prod" v-for="(prod, index) in getCartData" :key="index">
              <div class="name">
                {{ prod.name }}
                <span>{{ " X " + (prod.quant || 1) }}</span>
              </div>
              <div class="price">
                ${{ Math.floor(prod.price * (prod.quant || 1)) }}
              </div>
            </li>
            <li>
              <div class="name">Subtotal</div>
              <div class="price">${{ getTotals }}</div>
            </li>
            <li>
              <div class="name">Total</div>
              <div class="price">${{ getTotals }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: require("../../imgs/successOrderAssets/successOrder_hero_bg.webp"),
    };
  },
  computed: {
    getCartData() {
      return this.$store.getters["cart/successDetails"];
    },
    getTotals() {
      const cart = this.$store.getters["cart/successDetails"];
      let subtotal = 0;
      if (cart) {
        cart.forEach((ele) => {
          subtotal += (ele.quant || 1) * ele.price;
        });
      }
      return Math.floor(subtotal);
    },
    getOrderData() {
      return this.$store.getters["cart/successOrder"];
    },
  },
  methods: {
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
.successOrderPage {
  @media (max-width: 991px) {
    .content {
      margin: 50px 0 80px !important;
      .thxu {
        margin-bottom: 50px !important;
      }
      .orderInfo {
        margin-bottom: 30px !important;
      }
    }
  }
  .content {
    margin: 100px 0 150px;
    .thxu {
      margin-bottom: 90px;
      color: #fefefeb3;
      font-size: 17px;
      text-align: center;
    }
    @media (max-width: 991px) {
      .orderInfo {
        flex-direction: column;
        .box {
          &:not(:last-child) {
            margin: 0 0 15px !important;
            padding: 0 0 15px !important;
            &::after {
              height: 1px !important;
              width: 100% !important;
              top: 100% !important;
            }
          }
          .name {
            margin-bottom: 5px;
          }
        }
      }
    }
    .orderInfo {
      padding: 25px 30px;
      background-color: black;
      display: flex;
      margin-bottom: 50px;
      .box {
        &:not(:last-child) {
          margin-right: 55px;
          padding-right: 55px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 1px;
            background-color: #4d4d4d;
          }
        }
        .name {
          color: #fefefeb3;
        }
        .info {
          color: white;
          font-size: 17px;
          font-weight: 500;
        }
      }
    }
    .orderDetails.infoBox {
      ul {
        margin-bottom: 0;
        li.prod {
          font-size: 16px;
          font-weight: normal;
          .name {
            width: 80%;
          }
          span {
            color: var(--prim-color);
            font-weight: 500;
          }
        }
        li:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>
