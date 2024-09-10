<template>
  <div class="base-alert">
    <div class="info">
      <div class="head">
        <slot name="head">item added successfuly</slot>
      </div>
      <font-awesome-icon icon="fa-solid fa-xmark" @click="closeAlert" />
    </div>
    <p>
      <slot name="para">your item added is donr, check it now!</slot>
    </p>
    <div class="loadingbar"></div>
  </div>
</template>

<script>
export default {
  emits: ["closeAlert"],
  data() {
    return {};
  },
  methods: {
    closeAlert() {
      this.$emit("closeAlert");
    },
  },
  mounted() {
    setTimeout(() => {
      this.$emit("closeAlert");
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
.base-alert {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 10px;
  padding: 15px 20px;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .head {
      font-size: 17px;
      font-weight: 600;
      color: #333;
    }
    svg {
      color: #333;
      font-size: 20px;
      cursor: pointer;
      transition: color 0.3s ease;
      &:hover {
        color: #888;
      }
    }
  }
  p {
    margin: 5px 0 0;
    font-size: 15px;
    color: #666;
  }
  .loadingbar {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 96%;
    height: 3px;
    border-radius: 10px;
    background-color: var(--prim-color);
    animation: loadingbar 3s ease-in-out forwards;
  }
}

@keyframes loadingbar {
  to {
    width: 0;
  }
}
</style>
