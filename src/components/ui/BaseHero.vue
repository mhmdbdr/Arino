<template>
  <div class="heroSec">
    <div class="content" :style="{ backgroundImage: `url(${imgUrl})` }">
      <div class="container">
        <div class="head">
          <slot name="head"></slot>
        </div>
        <div class="nav">
          <router-link to="/">HOME</router-link>
          <span>
            <slot name="nav"></slot>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imgUrl"],
};
</script>

<style lang="scss" scoped>
.heroSec {
  @media (max-width: 1380px) {
    .content {
      height: 550px !important;
    }
  }
  @media (max-width: 1199px) {
    .content {
      height: 450px !important;
    }
  }
  @media (max-width: 991px) {
    .content {
      height: 400px !important;
      padding: 100px 0 50px !important;
    }
  }
  .content {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 650px;
    padding: 120px 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      width: 151px;
      height: 151px;
      opacity: 0.7;
      background-color: var(--prim-color);
      filter: blur(125px);
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 18px;
      text-transform: capitalize;
    }
    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      a,
      span {
        text-decoration: none;
        font-size: 17px;
        font-weight: 500;
      }
      a {
        color: #999696;
        padding-right: 14px;
        position: relative;
        transition-duration: 0.3s;
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          height: 70%;
          width: 2px;
          background-color: white;
        }
        @media (min-width: 992px) {
          &:hover {
            color: var(--prim-color);
          }
        }
      }
      span {
        display: block;
        padding-left: 14px;
        color: white;
      }
    }
  }
}
</style>
