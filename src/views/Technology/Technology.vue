<template>
  <TheLayout class="technology-layout">
    <TechnologyHeroSection
      class="hero-section"
      :name="filteredTechData.name"
      :image="filteredTechData.images.png"
    />
    <TechnologyNav class="navs-section" :tech-data="allTechData.technology" />
    <TechnologyInfo
      class="info-section"
      :name="filteredTechData.name"
      :description="filteredTechData.description"
    />
  </TheLayout>
</template>
<script>
export default {
  name: "Technology",
};
</script>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import data from "@/assets/data.json";
import TheLayout from "../../layouts/TheLayout.vue";
import TechnologyHeroSection from "./TechnologyHeroSection.vue";
import TechnologyNav from "./TechnologyNav.vue";
import TechnologyInfo from "./TechnologyInfo.vue";

const allTechData = ref(JSON.parse(JSON.stringify(data)));
const router = useRouter();
const currentRoute = router.currentRoute;

const filteredTechData = computed(() => {
  return allTechData.value.technology.find((tech) => {
    return currentRoute.value.params.name === tech.name;
  });
});
</script>
<style lang="scss" scoped>
@use "../../assets/globals" as *;

.technology-layout {
  background: $color-black
    url("../../assets/technology/background-technology-mobile.jpg");
  background-size: cover;
  padding-left: 0;
  padding-right: 0;
  justify-content: space-between;
  align-items: center;

  @media ($breakpoint-tablet) {
    background: $color-black
      url("../../assets/technology/background-technology-tablet.jpg");
  }

  @media ($breakpoint-desktop) {
    background: $color-black
      url("../../assets/technology/background-technology-desktop.jpg");
    padding: 5rem 0 2rem 10.3rem;
    padding-right: 0;

    .hero-section {
      order: 3;
    }
    .nav-section {
      order: 1;
    }
    .info-section {
      order: 2;
    }
  }
}
</style>
