<template>
  <div class="crew-hero-wrapper">
    <h5><span class="list-number">02</span>Meet Your Crew</h5>
    <img
      class="crew-image"
      :src="require(`../../../public/crew/image-mark-shuttleworth.png`)"
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

.crew-hero-wrapper {
  h5 {
    text-align: center;
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

  .crew-image {
    padding: 1rem 3rem 0 3rem;
    height: 15rem;
    width: auto;
    object-fit: cover;
    border-bottom: 1px solid $color-dark-grey;

    @media ($breakpoint-tablet) {
      border-bottom: none;
      height: 35rem;
      width: auto;
    }

    @media ($breakpoint-desktop) {
      padding: 1rem 0 0 3rem;
    }
  }
}
</style>
