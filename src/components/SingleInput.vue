<template>
  <div class="input--container">
    <label :for="`${inputId}Input`">{{ labelText }}</label>

    <input
      :name="`${inputId}Input`"
      :type="inputType"
      :placeholder="placeholderText"
      v-model="value"
      @input="onInput"
    />
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
  },

  computed: {
    value: {
      get() {
        return this.initialValue;
      },
      set(value) {
        this.$emit("input-changed", value);
      },
    },
  },
};
</script>

<style></style>
