<template>
  <div class="checkoutPage">
    <base-hero class="baseHero" :imgUrl="imgUrl">
      <template #head>Checkout</template>
      <template #nav>Checkout</template>
    </base-hero>
    <div class="checkoutContent mainPadding">
      <div class="container">
        <div class="row">
          <div class="col-xl-7">
            <div class="billingDetails">
              <div class="title">Billing Details</div>
              <div v-if="errorinput" class="alert alert-danger" role="alert">
                Your information is incorrect, please check your input fields
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="mainInput">
                    <label for="fName">First Name *</label>
                    <input
                      id="fName"
                      type="text"
                      v-model="fname.val"
                      @blur="clearValidate('fname')"
                      @keyup="clearValidate('fname')"
                    />
                    <p v-if="!fname.isvalid">First name must no be empty</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mainInput">
                    <label for="lName">Last Name *</label>
                    <input
                      id="lName"
                      type="text"
                      v-model="lname.val"
                      @blur="clearValidate('lname')"
                      @keyup="clearValidate('lname')"
                    />
                    <p v-if="!lname.isvalid">Last name must no be empty</p>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mainInput">
                    <label for="Company">Company name (optional)</label>
                    <input
                      id="Company"
                      type="text"
                      v-model="companyName.val"
                      @blur="clearValidate('companyName')"
                      @keyup="clearValidate('companyName')"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mainInput">
                    <label for="Country">Country / Region *</label>
                    <select id="Country" v-model="country.val">
                      <option value="US">United States (US)</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mainInput">
                    <label for="Street">Street address *</label>
                    <input
                      id="Street"
                      type="text"
                      placeholder="House number and street name"
                      v-model="street.val"
                      @blur="clearValidate('street')"
                      @keyup="clearValidate('street')"
                    />
                    <p v-if="!street.isvalid">
                      Street address must no be empty
                    </p>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mainInput">
                    <input
                      type="text"
                      placeholder="Apartment, suite, unit, etc (optional) "
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mainInput">
                    <label for="Town">Town / City *</label>
                    <input
                      id="Town"
                      type="text"
                      v-model="town.val"
                      @blur="clearValidate('town')"
                      @keyup="clearValidate('town')"
                    />
                    <p v-if="!town.isvalid">Town / City must no be empty</p>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mainInput">
                    <label for="State">State *</label>
                    <select id="State" v-model="state.val">
                      <option value="California">California</option>
                      <option value="Gercy">New Gercy</option>
                      <option value="Daiking">Daiking</option>
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mainInput">
                    <label for="ZIP">ZIP Code *</label>
                    <input
                      id="ZIP"
                      type="text"
                      v-model="zip.val"
                      @blur="clearValidate('zip')"
                      @keyup="clearValidate('zip')"
                    />
                    <p v-if="!zip.isvalid">ZIP Code must no be empty</p>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mainInput">
                    <label for="Phone">Phone *</label>
                    <input
                      id="Phone"
                      type="number"
                      v-model="phone.val"
                      @blur="clearValidate('phone')"
                      @keyup="clearValidate('phone')"
                    />
                    <p v-if="!phone.isvalid">phone must no be empty</p>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mainInput">
                    <label for="Email">Email address *</label>
                    <input
                      id="Email"
                      type="email"
                      v-model="email.val"
                      @blur="clearValidate('email')"
                      @keyup="clearValidate('email')"
                    />
                    <p
                      v-if="
                        !email.isvalid.emailvalid && email.isvalid.emptyvalid
                      "
                    >
                      Email field must be correct
                    </p>
                    <p
                      v-if="
                        !email.isvalid.emptyvalid && email.isvalid.emailvalid
                      "
                    >
                      Email field must not be empty
                    </p>
                    <p
                      v-if="
                        !email.isvalid.emptyvalid && !email.isvalid.emailvalid
                      "
                    >
                      Email field must not be empty or wrong
                    </p>
                  </div>
                </div>
              </div>
              <div class="additionalInfo">
                <div class="title">Additional information</div>
                <div class="mainInput">
                  <label for="addinfo">Order notes (optional)</label>
                  <textarea
                    id="addinfo"
                    cols="30"
                    rows="6"
                    placeholder="Order notes"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-5">
            <div class="order infoBox">
              <div class="title">Your order</div>
              <ul>
                <li>
                  <div class="name">Products</div>
                  <div class="price">Amount</div>
                </li>
                <li
                  class="prod"
                  v-for="(prod, index) in getCartData"
                  :key="index"
                >
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
            <div class="payment infoBox">
              <div class="title">Payment</div>
              <ul>
                <li>
                  <div class="inputCont">
                    <input id="cash" type="checkbox" />
                    <label for="cash">Cash on delivery</label>
                  </div>
                  <span>Pay with cash upon delivery.</span>
                </li>
              </ul>
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our <span>privacy policy</span>.
              </p>
              <div @click="sendorder" class="secondBtn basic">Place Order</div>
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
      imgUrl: require("../../imgs/checkoutAssets/checkout_hero_bg.webp"),
      fname: {
        val: "",
        isvalid: true,
      },
      lname: {
        val: "",
        isvalid: true,
      },
      companyName: {
        val: "",
      },
      country: {
        val: "UK",
        isvalid: true,
      },
      street: {
        val: "",
        isvalid: true,
      },
      town: {
        val: "",
        isvalid: true,
      },
      state: {
        val: "California",
        isvalid: true,
      },
      zip: {
        val: "",
        isvalid: true,
      },
      phone: {
        val: "",
        isvalid: true,
      },
      email: {
        val: "",
        isvalid: {
          emptyvalid: true,
          emailvalid: true,
        },
      },
      formvalidation: true,
      errorinput: false,
    };
  },
  methods: {
    checkFormvalidation() {
      this.formvalidation = true;
      if (this.email.val.match(/\w+@gmail.com/) && this.email.val !== "") {
        this.email.isvalid.emailvalid = true;
        this.email.isvalid.emptyvalid = true;
      } else if (
        !this.email.val.match(/\w+@gmail.com/) &&
        this.email.val !== ""
      ) {
        this.email.isvalid.emailvalid = false;
        this.email.isvalid.emptyvalid = true;
        this.formvalidation = false;
      } else if (
        this.email.val.match(/\w+@gmail.com/) &&
        this.email.val === ""
      ) {
        this.email.isvalid.emailvalid = true;
        this.email.isvalid.emptyvalid = false;
        this.formvalidation = false;
      } else {
        this.email.isvalid.emailvalid = false;
        this.email.isvalid.emptyvalid = false;
        this.formvalidation = false;
      }
      if (this.fname.val === "") {
        this.fname.isvalid = false;
        this.formvalidation = false;
      }
      if (this.lname.val === "") {
        this.lname.isvalid = false;
        this.formvalidation = false;
      }
      if (this.street.val === "") {
        this.street.isvalid = false;
        this.formvalidation = false;
      }
      if (this.town.val === "") {
        this.town.isvalid = false;
        this.formvalidation = false;
      }
      if (this.state.val === "") {
        this.state.isvalid = false;
        this.formvalidation = false;
      }
      if (this.zip.val === "") {
        this.zip.isvalid = false;
        this.formvalidation = false;
      }
      if (this.phone.val === "") {
        this.phone.isvalid = false;
        this.formvalidation = false;
      }
    },
    sendorder() {
      this.checkFormvalidation();
      if (this.formvalidation === true) {
        this.errorinput = false;
        const date = new Date();
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const ordernum = Math.trunc(Math.random() * 10000);
        const productsInfo = [];
        const productsOrder = this.$store.getters["cart/myCart"];
        productsOrder.forEach((prod) => {
          const product = {
            id: prod.id,
            name: prod.name,
            quant: prod.quant,
            SKU: prod.SKU,
            price: prod.price,
          };
          productsInfo.push(product);
        });
        const clientInfo = {
          fname: this.fname.val,
          lname: this.lname.val,
          companyName: this.companyName.val || "",
          country: this.country.val,
          streetAddress: this.street.val,
          town: this.town.val,
          zipCode: this.zip.val,
          phone: this.phone.val,
          email: this.email.val,
        };
        this.$store.dispatch("cart/sendOrder", {
          orderNumber: ordernum,
          date: `${
            months[date.getMonth()]
          } ${date.getDate()} ${date.getFullYear()}`,
          total: this.getTotals,
          order: { ...productsInfo },
          clientInfo: clientInfo,
        });
        const successOrderData = {
          ordernum: ordernum,
          date: `${
            months[date.getMonth()]
          } ${date.getDate()} ${date.getFullYear()}`,
          total: this.getTotals,
          paymentMethod: "COD",
        };
        this.$store.dispatch("cart/successOrder", successOrderData);
        this.$store.dispatch(
          "cart/successDetails",
          this.$store.getters["cart/myCart"]
        );
        this.$router.push("/successOrder");
        this.$store.dispatch("cart/clearCart");
        window.localStorage.removeItem("cartProducts");
      } else {
        this.errorinput = true;
        const billingEle = document.querySelector(".checkoutContent");
        billingEle.scrollIntoView({ behavior: "smooth" });
      }
    },
    clearValidate(input) {
      if (input === "email") {
        if (this.email.val.match(/\w+@gmail.com/) && this.email.val !== "") {
          this.email.isvalid.emailvalid = true;
          this.email.isvalid.emptyvalid = true;
        } else if (
          !this.email.val.match(/\w+@gmail.com/) &&
          this.email.val !== ""
        ) {
          this.email.isvalid.emailvalid = false;
          this.email.isvalid.emptyvalid = true;
        } else if (
          this.email.val.match(/\w+@gmail.com/) &&
          this.email.val === ""
        ) {
          this.email.isvalid.emailvalid = true;
          this.email.isvalid.emptyvalid = false;
        } else {
          this.email.isvalid.emailvalid = false;
          this.email.isvalid.emptyvalid = false;
        }
      } else {
        if (this[input].val === "") {
          this[input].isvalid = false;
          this.formvalidation = false;
        } else {
          this[input].isvalid = true;
        }
      }
    },
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
.checkoutPage {
  .checkoutContent {
    .billingDetails {
      label {
        width: fit-content;
      }
      @media (max-width: 991px) {
        .title {
          margin-bottom: 40px !important;
        }
      }
      .title {
        margin-bottom: 45px;
        font-size: 32px;
        font-weight: 500;
      }
      .mainInput {
        input,
        select,
        textarea {
          border-radius: 6px;
          border: 1px solid #4d4d4d;
          color: white;
          &:focus {
            border-color: var(--prim-color);
          }
        }
        label {
          color: #ffffff;
          font-size: 17px;
          font-weight: 500;
        }
        p {
          color: red;
          font-size: 14px;
          margin: 0 0 20px 0;
        }
      }
      .additionalInfo {
        margin-top: 45px;
        .title {
          margin-bottom: 30px;
        }
      }
    }
    @media (max-width: 991px) {
      .payment {
        margin-top: 30px !important;
      }
    }
    .order.infoBox {
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
    .payment {
      margin-top: 50px;
      color: #fefefeb3;
      .title {
        color: white;
      }
      ul {
        li {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          .inputCont {
            color: white;
            label {
              margin-left: 5px;
              font-size: 17px;
              width: fit-content;
            }
          }
          span {
            font-size: 15px;
          }
        }
      }
      p {
        span {
          color: var(--prim-color);
        }
      }
    }
  }
  .secondBtn {
    width: 100%;
  }
}
</style>
