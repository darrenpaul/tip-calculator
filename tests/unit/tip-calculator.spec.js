import { shallowMount } from "@vue/test-utils";
import TipCalculator from "@/components/TipCalculator.vue";

describe("Testing TipCalculator Component", () => {
  let wrapper;

  // Inputs
  const people = 4;
  const tip = 0.25;
  const bill = 100.0;

  // Expected outputs
  const totalTipAmountExpected = "25.00";
  const tipAmountPerPerson = "6.25";

  // Store Mock
  const $store = {
    dispatch: jest.fn(),
    getters: {
      "people/AMOUNT": people,
      "tip/AMOUNT": tip,
      "bill/AMOUNT": bill,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = shallowMount(TipCalculator, {
      global: { mocks: { $store } },
    });
  });

  it("Renders TipCalculator component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Check computed property totalTipAmount", () => {
    expect(wrapper.vm.totalTipAmount).toEqual(totalTipAmountExpected);
  });

  it("Check computed property tipAmountPerPerson", () => {
    expect(wrapper.vm.tipAmountPerPerson).toEqual(tipAmountPerPerson);
  });
});
