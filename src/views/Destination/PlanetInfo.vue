<template>
  <div class="planet-info-wrapper">
    <h2 class="planet-name">
      {{ name }}
    </h2>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  name: String,
  description: String,
});
</script>
<script>
export default {
  name: "PlanetInfo",
};
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.planet-info-wrapper {
  text-align: center;
  padding: 1rem;

  @media ($breakpoint-desktop) {
    text-align: left;
    max-width: 28.135rem;
    padding: 0 0 4rem 0;
  }

  .planet-name {
    text-transform: uppercase;
  }
}
</style>
