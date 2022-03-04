<template>
  <div class="destination-nav-wrapper">
    <ul class="link-wrapper">
      <template v-for="destination of destinationData" :key="destination.name">
        <li>
          <router-link
            class="router-link-active"
            :to="{ name: 'Destinations', params: { name: destination.name } }"
            active-link="active"
          >
            <span class="list-text">{{ destination.name.toUpperCase() }}</span>
          </router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  destinationData: Array,
});
</script>
<script>
export default {
  name: "DestinationNav",
};
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.destination-nav-wrapper {
  .link-wrapper {
    color: $color-white;
    list-style: none;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 0.875rem;
    padding: 1rem 0;
    text-align: center;

    @media ($breakpoint-desktop) {
      font-size: 1rem;
      text-align: left;
      padding: 2rem 0;
    }

    @media ($breakpoint-desktop) {
      padding: 2rem 0;
    }

    li {
      display: inline;
    }

    li > a {
      color: inherit;
      text-decoration: none;
      padding: 0.6rem 0.1rem;
      &.router-link-exact-active {
        border-bottom: 0.2rem inset $color-white;
      }
      &:hover {
        border-bottom: 0.2rem inset rgba(255, 255, 255, 0.5);
      }

      @media ($breakpoint-tablet) {
        margin-right: 1.6rem;
        padding: 0.6rem 0.3rem;
      }

      @media ($breakpoint-desktop) {
        margin-right: 1.6rem;
        padding: 1rem 0.3rem;
      }
    }
    .router-link-active {
      text-decoration: none;
      color: inherit;
      margin-right: 0.5rem;
      padding: 0.6rem 0.1rem;

      .list-text {
        text-align: right;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
      }
    }
  }
}
</style>
