<template>
  <div class="planet-info-wrapper">
    <h2 class="planet-name">
      {{ planetInfo.destinations[currentIndex].name }}
    </h2>
    <p>{{ planetInfo.destinations[0].description }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import data from "@/assets/data.json";
import { useRouter } from "vue-router";

export default {
  setup() {
    const oject = JSON.parse(JSON.stringify(data));
    const planetInfo = ref(oject);
    const router = useRouter();
    const currentRoute = router.currentRoute;
    const currentIndex = ref(0);
    return {
      planetInfo,
      currentRoute,
      currentIndex,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.planet-info-wrapper {
  text-align: center;

  @media ($breakpoint-desktop) {
    text-align: left;
    max-width: 28.135rem;
    padding-bottom: 4rem;
  }

  .planet-name {
    text-transform: uppercase;
  }
}
</style>
