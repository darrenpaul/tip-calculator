<template>
  <single-input
    :labelText="'Bill'"
    :inputId="'bill'"
    :inputType="'number'"
    :placeholderText="'0'"
    :initialValue="initialValue"
    :iconSymbol="'icon-dollar.svg'"
    @inputChanged="setBill"
  />
</template>

<script>
// components
import SingleInput from "./SingleInput.vue";
export default {
  name: "Bill Amount Input",

  components: { SingleInput },

  computed: {
    initialValue() {
      return this.$store.getters["bill/AMOUNT"];
    },
  },

  methods: {
    setBill(value) {
      this.$store.dispatch("bill/SET", value);
    },
  },
};
</script>

<style></style>
