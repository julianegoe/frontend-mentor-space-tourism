<template>
  <div class="planet-into-wrapper">
    <h5><span class="list-number">00</span>Pick your destination</h5>
    <img
      class="planet-image"
      src="../../assets/destination/image-moon.png"
      alt="planet"
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import data from "@/assets/data.json";
import { useRouter } from "vue-router";

export default {
  setup() {
    const oject = JSON.parse(JSON.stringify(data));
    const planetInfo = ref(oject);
    const router = useRouter();
    const currentRoute = router.currentRoute;
    const currentIndex = ref(0);
    const imagePath = computed(() => {
      return `../../assets/destination/image-${currentRoute.value.params.planet}.png`;
    });
    console.log(imagePath.value);
    return {
      planetInfo,
      currentRoute,
      currentIndex,
      imagePath,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.planet-into-wrapper {
  text-align: center;

  @media ($breakpoint-desktop) {
    text-align: left;
    max-width: 28.135rem;
    padding-bottom: 4rem;
  }

  .list-number {
    color: $color-dark-grey;
    font-weight: bolder;
    letter-spacing: 0.2rem;
    padding-right: 1rem;
    text-align: right;
  }

  .planet-image {
    padding-top: 2rem;
    aspect-ratio: 1;
    max-width: 25rem;
    object-fit: contain;
  }
}
</style>
