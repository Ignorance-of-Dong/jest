<!--
 * @Author: zhangzheng
 * @Date: 2020-08-24 11:19:56
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-08-24 11:44:32
 * @Descripttion: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Todo.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
