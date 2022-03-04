<template>
  <TheLayout class="crew-layout">
    <CrewHeroSection
      class="crew-hero-section"
      :name="filteredCrewData[0].name"
      :image="filteredCrewData[0].images.png"
    />
    <div class="info-section">
      <h5 class="crew-headline">
        <span class="list-number">02</span>Meet Your Crew
      </h5>
      <CrewNav :crew-data="allCrewData.crew" class="crew-nav" />
      <CrewInfo
        class="crew-info"
        :name="filteredCrewData[0].name"
        :role="filteredCrewData[0].role"
        :bio="filteredCrewData[0].bio"
      />
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
  console.log(currentRoute.value.params.name);
  return allCrewData.value.crew.filter((crew) => {
    return currentRoute.value.params.name === crew.name;
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
    .crew-headline {
      order: 1;
      padding-bottom: 4rem;
    }
    .crew-info {
      order: 2;
      padding: 0 5rem;
    }
    .crew-nav {
      order: 3;
    }
    .crew-hero-section {
      order: 4;
    }
  }

  @media ($breakpoint-desktop) {
    background: $color-black
      url("../../assets/crew/background-crew-desktop.jpg");
    .crew-headline {
      padding-bottom: 0;
    }
    .crew-info {
      padding: 0;
    }
    .crew-nav {
      align-self: initial;
    }
  }

  .info-section {
    @media ($breakpoint-tablet) {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
    }

    h5 {
      display: none;

      @media ($breakpoint-tablet) {
        display: initial;
      }
    }

    .list-number {
      color: $color-dark-grey;
      font-weight: bolder;
      letter-spacing: 0.2rem;
      padding-right: 1rem;
      text-align: right;
    }
  }
}
</style>
