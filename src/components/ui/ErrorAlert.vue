<template>
  <transition name="alert">
    <div class="rounded-error-alert" v-if="visible">
      <div class="alert-wrapper">
        <div class="icon-container">
          <font-awesome-icon icon="fa-solid fa-bomb" />
        </div>
        <div class="text-container">
          <h4>
            <slot name="head">Oops! Something Went Wrong</slot>
          </h4>
          <p>
            <slot name="message"
              >An error occurred while processing your request. Please try again
              later.</slot
            >
          </p>
        </div>
        <button @click="closeAlert" class="close-button">Got it</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["visible"],
  data() {
    return {};
  },
  methods: {
    closeAlert() {
      this.$emit("dismiss");
    },
  },
};
</script>

<style lang="scss" scoped>
.rounded-error-alert {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #ff7657, #ff4a17);
  padding: 15px 25px;
  border-radius: 30px;
  color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 90%;
  max-width: 500px;

  .alert-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon-container {
    font-size: 28px;
    margin-right: 20px;
    color: #ffe1d7;
  }

  .text-container {
    flex: 1;

    h4 {
      font-size: 20px;
      margin: 0 0 5px;
      font-weight: bold;
    }

    p {
      font-size: 15px;
      margin: 0;
      color: #ffe1d7;
    }
  }

  .close-button {
    background-color: #ffe1d7;
    color: #ff4a17;
    padding: 8px 20px;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: white;
      color: #ff4a17;
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
  transform: translate(-50%, 50px);
}
.alert-enter-to {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
