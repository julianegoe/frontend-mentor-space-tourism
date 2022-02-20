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
  ul {
    list-style: none;
    padding: 1rem 0;
    display: flex;
    justify-content: center;

    @media ($breakpoint-desktop) {
      justify-content: flex-start;
      padding-bottom: 4rem;
    }

    li {
      display: inline;
      cursor: pointer;
      margin-right: 1rem;
      padding: 0.6rem 0.1rem;
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
