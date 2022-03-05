<template>
  <div class="tech-hero-wrapper">
    <h5><span class="list-number">03</span>Space Launch 101</h5>
    <img v-if="width <= '768'"
      class="tech-image"
      :src="
        require(`../../assets/technology/image-${name.replace(' ', '-').toLowerCase()}-landscape.jpg`)
      "
      alt="crew member"
    />
    <img v-if="width > '768'"
      class="tech-image"
      :src="
        require(`../../assets/technology/image-${name.replace(' ', '-').toLowerCase()}-portrait.jpg`)
      "
      alt="crew member"
    />
  </div>
</template>
<script>
export default {
  name: "TechnologyHeroSection",
};
</script>
<script setup>
import { defineProps } from "vue";
import { useWindowSize } from "vue-window-size";

const { width } = useWindowSize();
defineProps({
  image: String,
  name: String,
});
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.tech-hero-wrapper {
  h5 {
    text-align: center;
    @media ($breakpoint-tablet) {
      text-align: left;
      padding-left: 2rem;
    }

    @media ($breakpoint-tablet) {
      display: none;
    }
  }

  .list-number {
    color: $color-dark-grey;
    font-weight: bolder;
    letter-spacing: 0.2rem;
    padding-right: 1rem;
    text-align: right;
  }

  .tech-image {
    height: auto;
    width: 100%;
    object-fit: cover;
    padding-top: 2rem;
    border-bottom: 1px solid $color-dark-grey;

    @media ($breakpoint-tablet) {
      padding-top: 4rem;
      border-bottom: none;
      height: auto;
      width: 100%;
    }

    @media ($breakpoint-desktop) {
      padding: 1rem 0 0 3rem;
    }
  }
}
</style>
