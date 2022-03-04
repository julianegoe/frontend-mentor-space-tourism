<template>
  <div class="tech-info-wrapper">
    <div class="tech-subheading">The Terminology...</div>
    <div class="tech-name">{{ name }}</div>
    <p class="tech-description">{{ description }}</p>
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
  name: "TechnologyInfo",
};
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.tech-info-wrapper {
  text-align: center;
  padding: 1rem;

  @media ($breakpoint-desktop) {
    padding: 0;
    text-align: left;
  }

  .tech-subheading {
    padding: 0.5rem 0;
    @include subheading-2;
  }
  .tech-name {
    @include subheading-1;
    padding-bottom: 1rem;

    @media ($breakpoint-desktop) {
      font-size: 3.5rem;
    }
  }
  .tech-description {
    max-width: 30rem;
  }
}
</style>
