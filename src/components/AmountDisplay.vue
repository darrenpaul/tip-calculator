<template>
  <div class="amount_display--container">
    <div class="group">
      <p class="primary--text">{{ primaryText }}</p>

      <p class="secondary--text">{{ secondaryText }}</p>
    </div>

    <p class="amount--text">${{ amount }}</p>
  </div>
</template>

<script>
export default {
  name: "Amount Display",

  props: {
    primaryText: {
      type: String,
    },

    secondaryText: {
      type: String,
    },

    amount: {
      type: [Number, String],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/amount-display.scss";
</style>
