<template>
  <div class="tip-calculator--container">
    <div class="group">
      <bill-amount />

      <tip-select />
      <people-count />
    </div>

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

      <button @click="resetData">RESET</button>
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
    tipAmountPerPerson() {
      const people = this.$store.getters["people/AMOUNT"];
      const value = this.totalTipAmount / people;
      return value.toFixed(2);
    },

    totalTipAmount() {
      const bill = this.$store.getters["bill/AMOUNT"];
      const tip = this.$store.getters["tip/AMOUNT"];
      const value = bill * tip;
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

<style></style>
