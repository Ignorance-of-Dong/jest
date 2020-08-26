/*
 * @Author: zhangzheng
 * @Date: 2020-08-24 11:22:23
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-08-24 14:46:23
 * @Descripttion:
 */
import { mount, createLocalVue } from "@vue/test-utils";
import Login from "@/views/Account/Login.vue";
import Element from "element-ui";
import VueRouter from "vue-router";
import routers from "@/router/index";
// import Vue from "vue";
// import axios from "axios";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Element);
localVue.use(VueRouter);
localVue.use(Vuex);
const t = () => {};

describe("test Login", () => {
  const store = new Vuex.Store();
  store.dispatch = jest.fn();
  const router = new VueRouter({ routers });
  it("输入框初始值为空字符串", () => {
    const wrapper = mount(Login, {
      store,
      router,
      localVue,
      mocks: {
        $t: t
      }
    });
    wrapper.setData({
      form: {
        username: "1111",
        password: "2222"
      }
    });
    expect(wrapper.vm.form.username).toBe("1111");
    wrapper.find(".account-button").trigger("click");
    wrapper.vm.$nextTick();
    // expect(wrapper.vm.isLoading).toBe(true);
    expect(store.dispatch).toHaveBeenCalledWith(
      "namespaced/very/deeply/testAction",
      {
        msg: "Test Namespaced Dispatch"
      }
    );
  });
});
