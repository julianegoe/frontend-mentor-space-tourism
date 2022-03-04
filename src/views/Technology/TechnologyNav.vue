<template>
  <div class="tech-nav-wrapper">
    <div class="link-wrapper">
      <template v-for="(tech, index) in techData" :key="tech.name">
        <router-link
          class="list-circle"
          :to="{ name: 'Technology', params: { name: tech.name } }"
        >
          <div class="link-number">{{ index }}</div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  techData: Array,
});
</script>
<script>
export default {
  name: "CrewNav",
};
</script>
<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.tech-nav-wrapper {
  @media ($breakpoint-desktop) {
    padding-right: 2rem;
  }
  .link-wrapper {
    list-style: none;
    padding: 2rem 0 0 0;
    display: flex;
    justify-content: center;

    @media ($breakpoint-desktop) {
      justify-content: flex-start;
      padding-bottom: 4rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .list-circle {
      color: white;
      text-decoration: none;
      aspect-ratio: 1;
      width: 3rem;
      border-radius: 50%;
      border: 1px solid $color-dark-grey;
      margin-right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      @media ($breakpoint-desktop) {
        width: 4.5rem;
        margin-right: 0;
      }

      > .link-number {
        font-size: 1rem;
        font-family: "Bellefair", serif;

        @media ($breakpoint-desktop) {
          font-size: 1.5rem;
        }
      }
      &.router-link-exact-active {
        color: $color-black;
        background-color: $color-white;
        border: 1px solid $color-white;
      }

      &:hover {
        border: 1px solid $color-white;
        transition: border 0.25s ease-in-out;
      }
    }
  }
}
</style>
