<template>
  <single-input
    :labelText="'Number of People'"
    :inputId="'peopleNumber'"
    :inputType="'number'"
    :placeholderText="'$'"
    :initialValue="this.$store.getters['people/AMOUNT']"
    @inputChanged="setPeople"
  />
</template>

<script>
// components
import SingleInput from "./SingleInput.vue";
export default {
  name: "People Count Input",

  components: { SingleInput },

  methods: {
    setPeople(value) {
      this.$store.dispatch("people/SET", value);
    },
  },
};
</script>

<style></style>
