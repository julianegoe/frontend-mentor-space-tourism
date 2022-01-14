<template>
  <TheLayout class="destination-layout">
    <HeroSection />
    <div class="info-section">
      <DestinationNav />
      <PlanetInfo />
    </div>
  </TheLayout>
</template>

<script>
import { defineComponent } from "vue";
import TheLayout from "../../layouts/TheLayout.vue";
import DestinationNav from "./DestinationNav.vue";
import PlanetInfo from "./PlanetInfo.vue";
import HeroSection from "./HeroSection.vue";

export default defineComponent({
  name: "Destination",
  components: {
    TheLayout,
    DestinationNav,
    PlanetInfo,
    HeroSection,
  },
});
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.destination-layout {
  background: $color-black
    url("../../assets/destination/background-destination-mobile.jpg");
  background-size: cover;

  @media ($breakpoint-tablet) {
    background: $color-black
      url("../../assets/destination/background-destination-tablet.jpg");
    background-size: cover;
  }

  @media ($breakpoint-desktop) {
    background: $color-black
      url("../../assets/destination/background-destination-desktop.jpg");
    background-size: cover;

    .info-section {
      padding-left: 4rem;
    }
  }
}
</style>
