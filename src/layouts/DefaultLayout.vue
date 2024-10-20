<template>
  <el-container :class="bodybg">
    <the-aside />
    <el-container>
      <the-head />
      <slot></slot>
    </el-container>
  </el-container>
</template>

<script>
import TheAside from "@/components/layout/Aside";
import TheHead from "@/components/layout/Head";
export default {
  name: "DefaultLayout",
  components: {
    TheAside,
    TheHead
  },
  created() {
    this.bodybg = this.$route.meta.bodybg || "defaultbg";
  },
  watch: {
    $route(to, from) {
      this.bodybg = this.$route.meta.bodybg || "defaultbg";
    }
  }
};
</script>
