<template>
  <single-input
    :labelText="'Number of People'"
    :inputId="'peopleNumber'"
    :inputType="'number'"
    :placeholderText="'0'"
    :initialValue="this.$store.getters['people/AMOUNT']"
    :iconSymbol="'icon-person.svg'"
    :errorText="'Can\'t be zero'"
    :validator="greaterThanZero"
    @inputChanged="setPeople"
  />
</template>

<script>
// COMPONENTS
import SingleInput from "./SingleInput.vue";
// SCRIPTS
import { greaterThanZero } from "@/utils/validator.js";

export default {
  name: "People Count Input",

  components: { SingleInput },

  methods: {
    greaterThanZero,

    setPeople(value) {
      this.$store.dispatch("people/SET", value);
    },
  },
};
</script>

<style></style>
