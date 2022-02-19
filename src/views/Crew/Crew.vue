<template>
  <TheLayout class="crew-layout">
    <CrewHeroSection
      class="crew-hero-section"
      :name="filteredCrewData[0].name"
      :image="filteredCrewData[0].images.png"
    />
    <div class="info-section">
      <CrewNav class="crew-nav" />
      <CrewInfo class="crew-info" :name="filteredCrewData[0].name" :role="filteredCrewData[0].role" :bio="filteredCrewData[0].bio" />
    </div>
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
import CrewNav from "@/views/Crew/CrewNav";
import CrewInfo from "@/views/Crew/CrewInfo";

const allCrewData = ref(JSON.parse(JSON.stringify(data)));
const router = useRouter();
const currentRoute = router.currentRoute;

const filteredCrewData = computed(() => {
  console.log(currentRoute.value.params.planet);
  return allCrewData.value.crew.filter((crew) => {
    return currentRoute.value.params.planet === crew.destination.toLowerCase();
  });
});
</script>

<style lang="scss" scoped>
@use "../../assets/globals" as *;

.crew-layout {
  background: $color-black url("../../assets/crew/background-crew-mobile.jpg");
  background-size: cover;

  .info-section {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media ($breakpoint-desktop) {
      align-items: flex-start;
    }
  }

  @media ($breakpoint-tablet) {
    background: $color-black url("../../assets/crew/background-crew-tablet.jpg");
    .crew-info {
      order: 1;
    }
    .crew-nav {
      order: 2;
    }
    .crew-hero-section {
      order: 3;
    }
  }

  @media ($breakpoint-desktop) {
    background: $color-black
      url("../../assets/crew/background-crew-desktop.jpg");
    padding: 0 10.3rem;
  }
}
</style>
