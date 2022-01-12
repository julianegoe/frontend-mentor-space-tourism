<template>
  <TheLayout class="technology-layout">Technology</TheLayout>
</template>

<script>
import { defineComponent } from "vue";
import TheLayout from "../layouts/TheLayout.vue";

export default defineComponent({
  name: "Technology",
  components: {
    TheLayout,
  },
});
</script>

<style lang="scss" scoped>
@use "../assets/globals.scss" as *;

.technology-layout {
  background-image: url("../assets/technology/background-technology-mobile.jpg");
  background-size: cover;

  @media ($breakpoint-tablet) {
    background-image: url("../assets/technology/background-technology-tablet.jpg");
  }

  @media ($breakpoint-desktop) {
    background-image: url("../assets/technology/background-technology-desktop.jpg");
    padding: 0 10.3rem;
  }
}
</style>
