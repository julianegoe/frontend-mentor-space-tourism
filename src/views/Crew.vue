<template>
  <TheLayout class="crew-layout">Crew</TheLayout>
</template>

<script>
import { defineComponent } from "vue";
import TheLayout from "../layouts/TheLayout.vue";

export default defineComponent({
  name: "Crew",
  components: {
    TheLayout,
  },
});
</script>

<style lang="scss" scoped>
@use "../assets/globals.scss" as *;

.crew-layout {
  background-image: url("../assets/crew/background-crew-mobile.jpg");
  background-size: cover;

  @media ($breakpoint-tablet) {
    background-image: url("../assets/crew/background-crew-tablet.jpg");
  }

  @media ($breakpoint-desktop) {
    background-image: url("../assets/crew/background-crew-desktop.jpg");
    padding: 0 10.3rem;
  }
}
</style>
