<template>
  <div class="button-layout">
    <button class="explore-button">
      <div class="explore-button--text">Explore</div>
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExploreButton",
});
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.button-layout {
  padding-bottom: 2rem;

  @media ($breakpoint-desktop) {
    padding-bottom: 6rem;
  }

  .explore-button {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    width: 6rem;
    border-radius: 999px;
    background-color: $color-white;
    cursor: pointer;
    outline: 0px solid $color-dark-grey;
    transition: outline 0.2s ease-in;

    &:hover {
      outline: 1rem solid $color-dark-grey;
    }

    @media ($breakpoint-desktop) {
      width: 12rem;

      &:hover {
        outline: 4rem solid rgba(255, 255, 255, 0.1);
      }
    }

    .explore-button--text {
      font-size: 1rem;
      font-family: "Bellefair", sans-serif;
      text-transform: uppercase;

      @media ($breakpoint-desktop) {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
