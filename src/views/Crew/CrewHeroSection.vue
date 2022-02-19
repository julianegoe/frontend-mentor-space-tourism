<template>
  <div class="crew-into-wrapper">
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

.crew-into-wrapper {
  text-align: center;
  border-bottom: 1px solid $color-dark-grey;

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

  .crew-image {
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
