<template>
  <div @click="sidebarChangeVal(false)" v-show="show" class="shadow"></div>
  <transition name="sidebar">
    <div v-show="show" class="sidebar">
      <div @click="sidebarChangeVal(false)" class="xsign">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
      <div class="logo">
        <svg
          width="89"
          height="30"
          viewBox="0 0 89 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9687 22.032H7.58467L6.24067 26H0.512671L8.64067 3.536H14.9767L23.1047 26H17.3127L15.9687 22.032ZM14.5607 17.808L11.7767 9.584L9.02467 17.808H14.5607Z"
            fill="#FF4A17"
          />
          <path
            d="M31.0504 11.12C31.6904 10.1387 32.4904 9.37067 33.4504 8.816C34.4104 8.24 35.4771 7.952 36.6504 7.952V13.744H35.1464C33.7811 13.744 32.7571 14.0427 32.0744 14.64C31.3918 15.216 31.0504 16.24 31.0504 17.712V26H25.5784V8.144H31.0504V11.12ZM42.0179 6.288C41.0579 6.288 40.2686 6.01067 39.6499 5.456C39.0526 4.88 38.7539 4.176 38.7539 3.344C38.7539 2.49067 39.0526 1.78667 39.6499 1.232C40.2686 0.655998 41.0579 0.367998 42.0179 0.367998C42.9566 0.367998 43.7246 0.655998 44.3219 1.232C44.9406 1.78667 45.2499 2.49067 45.2499 3.344C45.2499 4.176 44.9406 4.88 44.3219 5.456C43.7246 6.01067 42.9566 6.288 42.0179 6.288ZM44.7379 8.144V26H39.2659V8.144H44.7379ZM59.5834 7.952C61.6741 7.952 63.3381 8.63467 64.5754 10C65.8341 11.344 66.4634 13.2 66.4634 15.568V26H61.0234V16.304C61.0234 15.1093 60.7141 14.1813 60.0954 13.52C59.4768 12.8587 58.6448 12.528 57.5994 12.528C56.5541 12.528 55.7221 12.8587 55.1034 13.52C54.4848 14.1813 54.1754 15.1093 54.1754 16.304V26H48.7034V8.144H54.1754V10.512C54.7301 9.72267 55.4768 9.104 56.4154 8.656C57.3541 8.18667 58.4101 7.952 59.5834 7.952ZM78.3939 26.256C76.6446 26.256 75.0659 25.8827 73.6579 25.136C72.2713 24.3893 71.1726 23.3227 70.3619 21.936C69.5726 20.5493 69.1779 18.928 69.1779 17.072C69.1779 15.2373 69.5833 13.6267 70.3939 12.24C71.2046 10.832 72.3139 9.75467 73.7219 9.008C75.1299 8.26133 76.7086 7.888 78.4579 7.888C80.2073 7.888 81.7859 8.26133 83.1939 9.008C84.6019 9.75467 85.7113 10.832 86.5219 12.24C87.3326 13.6267 87.7379 15.2373 87.7379 17.072C87.7379 18.9067 87.3219 20.528 86.4899 21.936C85.6793 23.3227 84.5593 24.3893 83.1299 25.136C81.7219 25.8827 80.1433 26.256 78.3939 26.256ZM78.3939 21.52C79.4393 21.52 80.3246 21.136 81.0499 20.368C81.7966 19.6 82.1699 18.5013 82.1699 17.072C82.1699 15.6427 81.8073 14.544 81.0819 13.776C80.3779 13.008 79.5033 12.624 78.4579 12.624C77.3913 12.624 76.5059 13.008 75.8019 13.776C75.0979 14.5227 74.7459 15.6213 74.7459 17.072C74.7459 18.5013 75.0873 19.6 75.7699 20.368C76.4739 21.136 77.3486 21.52 78.3939 21.52Z"
            fill="white"
          />
        </svg>
      </div>
      <p class="head">Do you have a project in your mind? Keep connect us.</p>
      <div class="contact">
        <h5>Contact Us</h5>
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
      <div class="subbb">
        <div class="subhead">Subscribe</div>
        <div class="inputgroup mainSubmit">
          <input id="email" type="email" placeholder="example@gmail.com" />
          <button class="mainBtn" id="submitbtn">Send</button>
        </div>
        <p>
          At vero eos et accusamus et iusto odio as part dignissimos ducimus
          blandit.
        </p>
      </div>
      <div class="socials">
        <div class="social">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        </div>
        <div class="social">
          <font-awesome-icon icon="fa-brands fa-x-twitter" />
        </div>
        <div class="social">
          <font-awesome-icon icon="fa-brands fa-youtube" />
        </div>
        <div class="social">
          <font-awesome-icon icon="fa-brands fa-github" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["show"],
  methods: {
    sidebarChangeVal(val) {
      this.$store.dispatch("sidebar/sidebarState", val);
      document.querySelector(".bars").classList.remove("sidebaract");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  overscroll-behavior: contain;
  width: 500px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: auto;
  z-index: 1001;
  background-color: #181818;
  padding: 90px 50px 50px;
  color: #ffffff;
  &::-webkit-scrollbar {
    display: none;
  }
  .xsign {
    position: fixed;
    top: 30px;
    right: 35px;
    border: 2px solid white;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    transition-duration: 0.3s;
    @media (min-width: 992px) {
      &:hover {
        color: var(--prim-color);
        transform: scale(1.1);
        border-color: var(--prim-color);
      }
    }
  }
  .head {
    padding: 35px 0;
    font-size: 22px;
    line-height: 1.4em;
    color: #fefefe;
    font-weight: 700;
  }
  .contact {
    padding: 35px 0px;
    h5 {
      margin-bottom: 25px;
      font-weight: 600;
    }
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
  .subbb {
    padding: 35px 0px;
    .subhead {
      font-size: 20px;
      margin-bottom: 25px;
      font-weight: 700;
      color: #fefefe;
    }
    p {
      margin-top: 25px;
      color: #fefefeb3;
      font-weight: 500;
    }
    .mainBtn {
      padding: 5px 27px;
    }
  }
  .socials {
    padding: 35px 0;
    display: flex;
    align-items: center;
    justify-content: start;
    .social {
      margin: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid white;
      cursor: pointer;
      transition-duration: 0.4s;
      &:hover {
        border-color: var(--prim-color);
        transform: scale(1.1);
      }
    }
  }
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition-duration: 0.5s;
}

.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
