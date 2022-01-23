<template>
  <div class="planet-into-wrapper">
    <h5><span class="list-number">00</span>Pick your destination</h5>
    <img
      class="planet-image"
      :src="require(`../../assets/destination/image-${name.toLowerCase()}.png`)"
      alt="planet"
    />
  </div>
</template>
<script>
export default {
  name: "HeroSection",
};
</script>

<script setup>
import { defineProps } from "vue";
defineProps({
  imagePath: String,
  name: String,
});
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
    width: 15rem;
    object-fit: contain;

    @media ($breakpoint-tablet) {
      width: 18.75rem;
    }

    @media ($breakpoint-desktop) {
      width: 25rem;
    }
  }
}
</style>
