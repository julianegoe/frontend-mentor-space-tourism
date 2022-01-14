<template>
  <TheLayout class="destination-layout">Destination</TheLayout>
</template>

<script>
import { defineComponent } from "vue";
import TheLayout from "../layouts/TheLayout.vue";

export default defineComponent({
  name: "Destination",
  components: {
    TheLayout,
  },
});
</script>

<style lang="scss" scoped>
@use "../assets/globals.scss" as *;

.destination-layout {
  background: $color-black
    url("../assets/destination/background-destination-mobile.jpg");
  background-size: cover;
  padding-top: 4rem;

  @media ($breakpoint-tablet) {
    background: $color-black
      url("../assets/destination/background-destination-tablet.jpg");
  }

  @media ($breakpoint-desktop) {
    background: $color-black
      url("../assets/destination/background-destination-desktop.jpg");
  }
}
</style>
