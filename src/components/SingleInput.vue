<template>
  <div class="input--container">
    <div class="space--between">
      <label :for="`${inputId}Input`">{{ labelText }}</label>
      <small v-if="isValid === false" class="error-text--input">{{
        errorText
      }}</small>
    </div>

    <div class="input-icons">
      <div class="input-icon--container">
        <i class="input--icon" :style="iconStyle"></i>
      </div>

      <input
        :name="`${inputId}Input`"
        :type="inputType"
        :placeholder="placeholderText"
        v-model="value"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Single Input",

  props: {
    inputId: {
      type: String,
      required: true,
    },

    labelText: {
      type: String,
    },

    inputText: {
      type: String,
    },

    placeholderText: {
      type: String,
    },

    inputType: {
      type: String,
    },

    initialValue: {
      type: [Number, String],
    },

    iconSymbol: {
      type: String,
      default: "",
    },

    errorText: {
      type: String,
      default: "",
    },

    validator: {
      type: Function,
      default: () => true,
    },
  },

  data() {
    return {
      isValid: true,
    };
  },

  computed: {
    value: {
      get() {
        return this.initialValue;
      },
      set(value) {
        if (this.validator(value)) {
          this.isValid = true;
        } else {
          this.isValid = false;
        }
        this.$emit("input-changed", value);
      },
    },

    iconStyle() {
      return {
        backgroundImage: `url(${require(`@/assets/images/${this.iconSymbol}`)})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/single-input.scss";
</style>
