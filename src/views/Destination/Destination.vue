<template>
  <TheLayout class="destination-layout">
    <HeroSection
      :imagePath="filteredPlanetData[0].images.png"
      :name="filteredPlanetData[0].name"
    />
    <div class="info-section">
      <DestinationNav />
      <PlanetInfo
        :name="filteredPlanetData[0].name"
        :description="filteredPlanetData[0].description"
      />
      <DestinationStats
        :distance="filteredPlanetData[0].distance"
        :travel="filteredPlanetData[0].travel"
      />
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
import DestinationStats from "./DestinationStats";
import PlanetInfo from "./PlanetInfo.vue";
import HeroSection from "./HeroSection.vue";
import data from "@/assets/data.json";

const allPlanetData = ref(JSON.parse(JSON.stringify(data)));
const router = useRouter();
const currentRoute = router.currentRoute;

const filteredPlanetData = computed(() => {
  return allPlanetData.value.destinations.filter((planet) => {
    return currentRoute.value.params.planet === planet.name.toLowerCase();
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
