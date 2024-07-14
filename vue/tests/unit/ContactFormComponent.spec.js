import { mount } from "@vue/test-utils";
import ContactFormComponent from "@/components/ContactFormComponent.vue";

describe("ContactFormComponent", () => {
  it("submits the form successfully", async () => {
    const wrapper = mount(ContactFormComponent);
    const form = wrapper.find("form");
    await form.trigger("submit");
    expect(wrapper.vm.formSubmitted).toBe(true);
    expect(wrapper.find("p").text()).toBe("Formulário enviado com sucesso!");
  });

  it("validates form fields", async () => {
    const wrapper = mount(ContactFormComponent);
    const form = wrapper.find("form");
    await form.trigger("submit");
    expect(wrapper.find(".error").exists()).toBe(true);
    expect(wrapper.vm.formErrors.name).toBeTruthy();
  });
});
