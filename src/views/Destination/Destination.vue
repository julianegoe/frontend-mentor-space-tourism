<template>
  <TheLayout class="destination-layout">
    <DestinationHeroSection :name="filteredPlanetData[0].name" />
    <div class="info-section">
      <DestinationNav :destination-data="allPlanetData.destinations" />
      <DestinationContent :planet-data="filteredPlanetData" />
    </div>
  </TheLayout>
</template>
<script>
export default {
  name: "Destination",
};
</script>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import TheLayout from "../../layouts/TheLayout.vue";
import DestinationNav from "./DestinationNav.vue";
import DestinationHeroSection from "./DestinationHeroSection.vue";
import data from "@/assets/data.json";
import DestinationContent from "@/views/Destination/DestinationContent";

const allPlanetData = ref(JSON.parse(JSON.stringify(data)));
const router = useRouter();
const currentRoute = router.currentRoute;

const filteredPlanetData = computed(() => {
  return allPlanetData.value.destinations.filter((planet) => {
    return currentRoute.value.params.name === planet.name;
  });
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
