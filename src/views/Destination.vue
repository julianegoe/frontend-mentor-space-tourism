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
  background-image: url("../assets/destination/background-destination-mobile.jpg");
  background-size: cover;

  @media ($breakpoint-tablet) {
    background-image: url("../assets/destination/background-destination-tablet.jpg");
  }

  @media ($breakpoint-desktop) {
    background-image: url("../assets/destination/background-destination-desktop.jpg");
    padding: 0 10.3rem;
  }
}
</style>
