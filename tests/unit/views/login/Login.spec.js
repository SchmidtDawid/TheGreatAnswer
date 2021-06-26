import { mount } from "@vue/test-utils";

import Login from "@/views/login/Login.vue";

const handleSubmit = jest.spyOn(Login.methods, 'handleSubmit');
const forgotPassword = jest.spyOn(Login.methods, 'forgotPassword');

describe("Login view", () => {
  it("should render correctly", () => {
    const wrapper = mount(Login);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should run log in method", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    const wrapper = mount(Login, { attachTo: div });

    wrapper.find("button").trigger("click");

    expect(handleSubmit).toBeCalled();
  });

  it("should run forgot password method", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    const wrapper = mount(Login, { attachTo: div });

    wrapper.find(".forgot").trigger("click");

    expect(forgotPassword).toBeCalled();
  });
});
