<template>
  <div class="destination-nav-wrapper">
    <ul>
      <li
        @click="changeDestination('moon')"
        :class="{ active: activeItem === 'Moon' }"
      >
        <span class="list-text">Moon</span>
      </li>
      <li
        @click="changeDestination('mars')"
        :class="{ active: activeItem === 'Mars' }"
      >
        <span class="list-text">Mars</span>
        <span></span>
      </li>
      <li
        @click="changeDestination('europa')"
        :class="{ active: activeItem === 'Europa' }"
      >
        <span class="list-text">Europa</span>
      </li>
      <li
        @click="changeDestination('titan')"
        :class="{ active: activeItem === 'Titan' }"
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
    const activeItem = ref("");
    const changeDestination = (planet) => {
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
    font-size: 1rem;
    padding: 2rem 0;

    li:last-child {
      margin-right: 0;
    }

    @media ($breakpoint-desktop) {
      padding: 2rem 0;
    }

    li {
      display: inline;
      cursor: pointer;
      padding: 2rem 0.4rem 1.8rem 0.4rem;
      margin-right: 1.6rem;

      &.active {
        border-bottom: 0.2rem inset $color-white;
      }

      &:hover {
        border-bottom: 0.2rem inset rgba(255, 255, 255, 0.5);
      }
    }
    @media ($breakpoint-desktop) {
      .list-number {
        font-weight: bolder;
        letter-spacing: 0.2rem;
        padding-right: 1rem;
        text-align: right;
      }
    }

    .list-text {
      text-align: left;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }
  }
}
</style>
