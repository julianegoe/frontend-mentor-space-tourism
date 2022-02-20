<template>
  <div class="crew-info-wrapper">
    <div class="crew-role">
      {{ role }}
    </div>
    <div class="crew-name">{{ name }}</div>
    <p class="crew-bio">{{ bio }}</p>
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
    padding: 0;
    text-align: left;
  }
  .crew-name {
    @include subheading-1;
    padding-bottom: 1rem;

    @media ($breakpoint-desktop) {
      font-size: 3.5rem;
    }
  }
  .crew-role {
    @include kicker;
    padding-bottom: 0.5rem;

    @media ($breakpoint-desktop) {
      font-size: 1.75rem;
    }
  }

  .crew-bio {
    max-width: 30rem;
  }
}
</style>
