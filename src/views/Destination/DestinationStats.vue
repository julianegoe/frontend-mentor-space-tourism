<template>
  <div class="stats-container">
    <div class="stats-group">
      <div class="stat-heading">Avg. Distance</div>
      <div class="stat-value">{{ distance }}</div>
    </div>
    <div class="stats-group">
      <div class="stat-heading">Est. Travel Time</div>
      <div class="stat-value">{{ travel }}</div>
    </div>

  </div>
</template>
<script>
export default {
  name: "DestinationStats",
};
</script>
<script setup>
import { defineProps } from 'vue';

defineProps({
  distance: String,
  travel: String,
});
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.stats-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid $color-dark-grey;
  padding: 1rem 0;

  @media ($breakpoint-tablet) {
    flex-direction: row;
    justify-content: space-around;
  }

  .stats-group {
    display: flex;
    flex-direction: column;
    align-items: center;

    .stat-heading {
      padding: 0.5rem 0;
      @include subheading-2;
    }

    .stat-value {
      padding: 0.5rem 0;
      @include subheading-1;
    }

  }
}
</style>
