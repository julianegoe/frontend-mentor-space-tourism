<template>
  <div class="destination-nav-wrapper">
    <ul>
      <li
        @click="changeDestination('moon')"
        :class="{ active: activeItem === 'moon' }"
      >
        <span class="list-text">Moon</span>
      </li>
      <li
        @click="changeDestination('mars')"
        :class="{ active: activeItem === 'mars' }"
      >
        <span class="list-text">Mars</span>
        <span></span>
      </li>
      <li
        @click="changeDestination('europa')"
        :class="{ active: activeItem === 'europa' }"
      >
        <span class="list-text">Europa</span>
      </li>
      <li
        @click="changeDestination('titan')"
        :class="{ active: activeItem === 'titan' }"
      >
        <span class="list-text">Titan</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const activeItem = ref(router.currentRoute.value.params.planet);
    const changeDestination = (planet) => {
      activeItem.value = planet;
      router.push({ name: "Destinations", params: { planet: planet } });
    };
    return {
      activeItem,
      changeDestination,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.destination-nav-wrapper {
  ul {
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

    li:last-child {
      margin-right: 0;
    }

    @media ($breakpoint-desktop) {
      padding: 2rem 0;
    }

    li {
      display: inline;
      cursor: pointer;
      margin-right: 0.5rem;
      padding: 0.6rem 0.1rem;

      @media ($breakpoint-tablet) {
        margin-right: 1.6rem;
        padding: 0.6rem 0.3rem;
      }

      @media ($breakpoint-desktop) {
        margin-right: 1.6rem;
        padding: 1rem 0.3rem;
      }

      &.active {
        border-bottom: 0.2rem inset $color-white;
      }

      &:hover {
        border-bottom: 0.2rem inset rgba(255, 255, 255, 0.5);
      }
    }
    .list-text {
      text-align: right;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }
  }
}
</style>
