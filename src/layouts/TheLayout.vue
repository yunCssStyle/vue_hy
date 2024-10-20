<template>
  <component :is="layout">
    <slot />
  </component>
</template>
<script>
import DefaultLayout from "./DefaultLayout";
import LoginLayout from "./LoginLayout";
import NotLayout from "./NotLayout";
export default {
  name: "TheLayout",
  components: {
    DefaultLayout,
    LoginLayout,
    NotLayout
  },
  created() {
    this.layout = this.$route.meta.layout || "DefaultLayout";
  },
  watch: {
    $route(to, from) {
      this.layout = this.$route.meta.layout || "DefaultLayout";
    }
  }
};
</script>
