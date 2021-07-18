<template>
  <div class="tip_select--container">
    <label>Select Tip %</label>
    <template v-for="opt in tipOptions" :key="`button${opt}`">
      <button @click="() => setTip(opt)">{{ opt }}%</button>
    </template>
    <button @click="() => {}">Custom</button>
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
    setTip(value) {
      this.$store.dispatch("tip/SET", value);
    },
  },
};
</script>

<style></style>
