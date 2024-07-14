import { shallowMount } from "@vue/test-utils";
import AboutComponent from "@/components/AboutComponent.vue";

describe("AboutComponent", () => {
  it("renders the about section correctly", () => {
    const wrapper = shallowMount(AboutComponent);
    expect(wrapper.find(".about").exists()).toBe(true);
    expect(wrapper.find("h2").text()).toBe("Sobre Nós");
    expect(wrapper.find("button").text()).toContain("Leia mais");
  });

  it("toggles between read more and read less", async () => {
    const wrapper = shallowMount(AboutComponent);
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(wrapper.vm.isExpanded).toBe(true);
    expect(button.text()).toContain("Leia menos");
  });
});
