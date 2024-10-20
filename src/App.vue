<template>
  <div id="hyundai">
    <the-layout>
      <router-view />
    </the-layout>
  </div>
</template>
<script>
import TheLayout from "@/layouts/TheLayout";

export default {
  name: "App",
  components: { TheLayout },
};
</script>