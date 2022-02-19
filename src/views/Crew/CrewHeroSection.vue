<template>
  <div class="crew-info-wrapper">
    <h5><span class="list-number">02</span>Meet Your Crew</h5>
    <img
      class="crew-image"
      :src="require(`../../assets/crew/image-${calcImageName}.png`)"
      alt="crew member"
    />
  </div>
</template>
<script>
export default {
  name: "CrewHeroSection",
};
</script>
<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  image: String,
  name: String,
});
const calcImageName = computed(() => {
  return props.name.replace(" ", "-").toLowerCase();
});
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.crew-info-wrapper {
  text-align: center;

  @media ($breakpoint-desktop) {
    text-align: left;
    max-width: 28.135rem;
  }

  .list-number {
    color: $color-dark-grey;
    font-weight: bolder;
    letter-spacing: 0.2rem;
    padding-right: 1rem;
    text-align: right;
  }

  .crew-image {
    padding-top: 2rem;
    aspect-ratio: 1;
    width: 20rem;
    object-fit: contain;
    border-bottom: 1px solid $color-dark-grey;

    @media ($breakpoint-tablet) {
      aspect-ratio: initial;
      width: 100%;
      object-fit: cover;
      border-bottom: none;
    }

    @media ($breakpoint-desktop) {
      width: 25rem;
    }
  }
}
</style>
