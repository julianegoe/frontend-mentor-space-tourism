<template>
  <div class="crew-nav-wrapper">
    <ul>
      <li
        @click="changeDestination('moon')"
      >
        <div :class="{ active: activeItem === 'moon' }" class="list-circle"></div>
      </li>
      <li
        @click="changeDestination('mars')"
      >
        <div :class="{ active: activeItem === 'mars' }" class="list-circle"></div>
      </li>
      <li
        @click="changeDestination('europa')"
      >
        <div :class="{ active: activeItem === 'europa' }" class="list-circle"></div>
      </li>
      <li
        @click="changeDestination('titan')"
      >
        <div :class="{ active: activeItem === 'titan' }" class="list-circle"></div>
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
      router.push({ name: "Crew", params: { planet: planet } });
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

.crew-nav-wrapper {
  @media ($breakpoint-desktop) {
    padding: 1rem;
  }

  ul {
    list-style: none;
    padding: 1rem 0;
    display: flex;

    @media ($breakpoint-desktop) {
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
      margin-right: 1rem;
      padding: 0.6rem 0.1rem;

      @media ($breakpoint-tablet) {
      }

      @media ($breakpoint-desktop) {
        padding: 1rem 0.3rem;
      }

    }
    .list-circle {
      aspect-ratio: 1;
      width: 0.75rem;
      border-radius: 50%;
      background: $color-dark-grey;

      &.active {
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
