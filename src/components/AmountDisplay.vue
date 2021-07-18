<template>
  <div class="amount_display--container">
    <div class="group">
      <p>{{ primaryText }}</p>

      <p>{{ secondaryText }}</p>
    </div>

    <p>{{ amount }}</p>
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

<style></style>
