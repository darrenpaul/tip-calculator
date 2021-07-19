<template>
  <div class="tip-select--container">
    <label>Select Tip %</label>
    <div class="grid--container">
      <button
        v-for="opt in tipOptions"
        :key="`button${opt}`"
        @click="() => setTip(opt)"
      >
        {{ opt }}%
      </button>
      <input
        class="custom-tip--input"
        type="number"
        placeholder="Custom"
        @input="customTip"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Tip Select",

  data() {
    return {
      tipOptions: [5, 10, 15, 25, 50],
    };
  },

  methods: {
    customTip(event) {
      const value = event.target.value;
      this.setTip(value);
    },

    setTip(value) {
      this.$store.dispatch("tip/SET", value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/tip-select.scss";
</style>
