<template>
  <div class="main--container">
    <div class="app-image--container">
      <img src="~@/assets/images/logo.svg" alt="" />
    </div>

    <tip-calculator />
  </div>
</template>

<script>
import TipCalculator from "../components/TipCalculator.vue";
export default {
  name: "Home",

  components: { TipCalculator },
};
</script>
