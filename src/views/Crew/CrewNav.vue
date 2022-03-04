<template>
  <div class="crew-nav-wrapper">
    <div class="link-wrapper">
      <template v-for="crewMember in crewData" :key="crewMember.name">
        <router-link
          class="list-circle"
          :to="{ name: 'Crew', params: { name: crewMember.name } }"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  crewData: Array,
});
</script>
<script>
export default {
  name: "CrewNav",
};
</script>
<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.crew-nav-wrapper {
  .link-wrapper {
    list-style: none;
    padding: 1rem 0;
    display: flex;
    justify-content: center;

    @media ($breakpoint-desktop) {
      justify-content: flex-start;
      padding-bottom: 4rem;
    }
    .list-circle {
      aspect-ratio: 1;
      width: 1rem;
      border-radius: 50%;
      background: $color-dark-grey;
      margin-right: 1rem;

      &.router-link-exact-active {
        background-color: $color-white;
      }

      &:hover {
        background-color: $color-white;
        transition: background-color 0.25s ease-in-out;
      }
    }
  }
}
</style>
