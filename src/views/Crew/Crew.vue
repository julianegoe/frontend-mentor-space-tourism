<template>
  <TheLayout class="crew-layout">
    <CrewHeroSection
      :name="filteredPlanetData[0].name"
      :image="filteredPlanetData[0].images.png"
    />
  </TheLayout>
</template>
<script>
export default {
  name: "Crew",
};
</script>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import TheLayout from "../../layouts/TheLayout.vue";
import CrewHeroSection from "./CrewHeroSection.vue";
import data from "@/assets/data.json";

const allPlanetData = ref(JSON.parse(JSON.stringify(data)));
const router = useRouter();
const currentRoute = router.currentRoute;

const filteredPlanetData = computed(() => {
  return allPlanetData.value.crew.filter((crew) => {
    return currentRoute.value.params.planet === crew.destination.toLowerCase();
  });
});
</script>

<style lang="scss" scoped>
@use "../../assets/globals" as *;

.crew-layout {
  background: $color-black url("../../assets/crew/background-crew-mobile.jpg");
  background-size: cover;

  @media ($breakpoint-tablet) {
    background: $color-black url("../../assets/crew/background-crew-tablet.jpg");
  }

  @media ($breakpoint-desktop) {
    background: $color-black
      url("../../assets/crew/background-crew-desktop.jpg");
    padding: 0 10.3rem;
  }
}
</style>
