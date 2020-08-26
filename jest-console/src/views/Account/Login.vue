<!--
 * @Author: xiaowei
 * @Date: 2019-11-06 14:37:53
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-08-21 15:51:36
 * @Description: 平台登录
 -->
<template>
  <div class="account-wrapper">
    <div class="account-box">
      <div class="account-container">
        <div class="account-header">
          <div class="account-help flex">
            <a href="/"> {{ $t("common.button.back") }} </a>
          </div>
          <h4>{{ $t("account.company.login.title") }}</h4>
          <p>{{ $t("account.login.subtitle") }}</p>
        </div>
        <div class="account-content">
          <el-form
            :model="form"
            ref="form"
            :rules="rules"
            @submit.native.prevent
            @keyup.enter.native="submitLogin"
          >
            <el-form-item prop="username">
              <el-input
                v-model="form.username"
                :placeholder="$t('account.form.inputUserName')"
                autocomplete="off"
              >
                <template slot="append">
                  {{ companyAccountSuffix }}
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="form.password"
                :placeholder="$t('account.form.inputPwd')"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="account-footer">
          <p v-if="APPID != 'fzzx'">
            {{ $t("account.platform.login.registerTips") }}
            <router-link to="/register">
              {{ $t("account.links.toRegister") }}
            </router-link>
          </p>
          <p>
            <router-link to="/forgotpwd">{{
              $t("account.links.toForgotPassword")
            }}</router-link>
          </p>
        </div>
      </div>
      <el-button
        class="account-button"
        @click="submitLogin"
        :loading="isLoading"
      >
        {{ $t("account.form.loginBtn") }}
      </el-button>
    </div>
  </div>
</template>
<script>
import { COMPANY_ACCOUNT_SUFFIX } from "~/config";
export default {
  data() {
    return {
      APPID: window.APPID,
      companyAccountSuffix: COMPANY_ACCOUNT_SUFFIX,
      form: {
        username: "",
        password: ""
      },
      isLoading: false
    };
  },
  methods: {
    submitLogin() {
      this.isLoading = true;
      this.$store.dispatch("namespaced/very/deeply/testAction", {
        msg: "Test Namespaced Dispatch"
      });
      // this.$store.dispatch("account/companyManageLogin");
      // let data = {
      //   username: this.form.username + this.companyAccountSuffix,
      //   password: this.form.password
      // };
      // this.$refs["form"].validate(async valid => {
      //   if (valid) {
      //     this.isLoading = true;
      //     this.$store.dispatch("account/companyManageLogin");
      //     // .then(() => {
      //     //   this.isLoading = false;
      //     //   this.$router.push({
      //     //     path: "/user/list"
      //     //   });
      //     // })
      //     // .catch(() => {
      //     //   this.isLoading = false;
      //     // });
      //   } else {
      //     return false;
      //   }
      // });
    }
  },
  computed: {
    rules() {
      return {
        username: [
          {
            required: true,
            message: this.$t("account.form.error.usernamerequired"),
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            message: this.$t("account.form.error.pwdrequired"),
            trigger: ["blur", "change"]
          }
        ]
      };
    }
  }
};
</script>
<style lang="scss" src="~/style/account.scss"></style>
