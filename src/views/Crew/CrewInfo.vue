<template>
  <div class="crew-info-wrapper">
    <div class="crew-role">
      {{ role }}
    </div>
    <div class="crew-name">{{ name }}</div>
    <p>{{ bio }}</p>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  name: String,
  role: String,
  bio: String,
});
</script>
<script>
export default {
  name: 'CrewInfo'
};
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.crew-info-wrapper {
  text-align: center;
  padding: 1rem;

  @media ($breakpoint-desktop) {
    text-align: left;
    max-width: 28.135rem;
  }
  .crew-name {
    @include subheading-1;
    padding-bottom: 1rem;
  }
  .crew-role {
    @include kicker;
    padding-bottom: 0.5rem;
  }
}
</style>
