<template>
  <div class="meeting">
    <div class="container">
      <div class="content">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
        <svg
          class="statusSvg"
          width="820"
          height="288"
          viewBox="0 0 820 288"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.00037 285C18.9467 220.939 89.8464 108.976 245.875 173.605C440.911 254.391 462.99 197.69 506.74 137.979C550.49 78.2669 587.289 21.5658 708.727 89.8078C805.877 144.401 820.896 54.6833 816.262 3"
            stroke="#161616"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
        <h1 class="mainTitle">
          <slot></slot>
        </h1>
        <div v-if="btn" class="meetingBtn goToBtn">
          <div class="hoveranim">Apply For Meeting</div>
          <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["btn"],
};
</script>

<style lang="scss" scoped>
@media (max-width: 991px) {
  .meeting {
    margin-top: 70px !important;
  }
}
.meeting {
  margin-top: 130px;
  @media (max-width: 991px) {
    .content {
      padding: 70px 30px !important;
    }
  }
  @media (max-width: 575px) {
    .content {
      padding: 70px 20px !important;
    }
  }
  .content {
    position: relative;
    background: linear-gradient(267.18deg, #161616 0%, #080808 100%);
    padding: 90px 30px;
    border-radius: 15px;
    text-align: center;
    overflow: hidden;
    .shape {
      z-index: 2 !important;
    }
    .mainTitle {
      position: relative;
      z-index: 3;
      margin-bottom: 0;
    }
    .statusSvg {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    @media (max-width: 575px) {
      .mainTitle {
        font-size: 28px !important;
      }
    }
    @media (max-width: 991px) {
      .meetingBtn {
        margin: 30px auto 0 !important;
      }
    }
    .meetingBtn {
      position: relative;
      margin: 70px auto 0;
      z-index: 3;
    }
  }
}
</style>
