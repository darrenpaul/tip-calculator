<template>
  <div class="tip-calculator--container">
    <div class="user-input--container">
      <bill-amount />

      <tip-select />

      <people-count />
    </div>

    <div class="results--container">
      <div class="group">
        <amount-display
          :primaryText="'Tip Amount'"
          :secondaryText="'/ person'"
          :amount="tipAmountPerPerson"
        />

        <amount-display
          :primaryText="'Total'"
          :secondaryText="'/ person'"
          :amount="totalTipAmount"
        />
      </div>

      <button class="reset--button" @click="resetData">RESET</button>
    </div>
  </div>
</template>

<script>
import AmountDisplay from "./AmountDisplay.vue";
import BillAmount from "./BillAmount.vue";
import PeopleCount from "./PeopleCount.vue";
import TipSelect from "./TipSelect.vue";
export default {
  name: "Tip Calculator",

  components: { BillAmount, TipSelect, PeopleCount, AmountDisplay },

  computed: {
    totalTipAmount() {
      const people = parseInt(this.$store.getters["people/AMOUNT"]);
      if (!people) return "0.00";

      const bill = parseFloat(this.$store.getters["bill/AMOUNT"]);
      const tip = parseFloat(this.$store.getters["tip/AMOUNT"]);
      const value = bill * tip;

      if (isNaN(value)) return "0.00";

      return value.toFixed(2);
    },

    tipAmountPerPerson() {
      const people = parseInt(this.$store.getters["people/AMOUNT"]);

      if (!people) return "0.00";

      const value = this.totalTipAmount / people;

      if (isNaN(value)) return "0.00";

      return value.toFixed(2);
    },
  },

  methods: {
    resetData() {
      this.$store.dispatch("bill/RESET");
      this.$store.dispatch("people/RESET");
      this.$store.dispatch("tip/RESET");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/tip-calculator.scss";
</style>
