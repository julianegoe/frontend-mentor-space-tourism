<template>
  <div class="nav-wrapper">
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
    </div>
    <nav class="nav">
      <div class="design-line"></div>
      <ul>
        <li @click="goTo('Home')" :class="{ active: activeItem === 'Home' }">
          <span class="list-number">00</span>
          <span class="list-text">Home</span>
        </li>
        <li
          @click="goTo('Destinations')"
          :class="{ active: activeItem === 'Destinations' }"
        >
          <span class="list-number">01</span
          ><span class="list-text">Destinations</span>
          <span></span>
        </li>
        <li @click="goTo('Crew')" :class="{ active: activeItem === 'Crew' }">
          <span class="list-number">02</span>
          <span class="list-text">Crew</span>
        </li>
        <li
          @click="goTo('Technology')"
          :class="{ active: activeItem === 'Technology' }"
        >
          <span class="list-number">03</span
          ><span class="list-text">Technology</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HeaderDesktop",
  setup() {
    const activeItem = ref("");
    const router = useRouter();

    const goTo = (destination) => {
      activeItem.value = destination;
      router.push({ name: destination, params: { planet: "moon" } });
    };
    return {
      activeItem,
      goTo,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "../assets/globals.scss" as *;

.nav-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 3rem 2rem 0 2rem;
    z-index: 1;
  }

  .nav {
    flex-shrink: 2;
    backdrop-filter: blur(50px) brightness(1.1) contrast(0.9);
    color: white;
    z-index: 1;
    margin-top: 2rem;

    @media ($breakpoint-desktop) {
      .design-line {
        position: relative;
        top: 2.5rem;
        right: 60%;
        width: 400px;
        margin-left: 4rem;
        height: 1px;
        background-color: $color-dark-grey;
        z-index: 1;
        overflow: hidden;
      }
    }

    ul {
      color: $color-white;
      list-style: none;
      font-family: "Barlow Condensed", sans-serif;
      font-size: 1rem;
      padding: 2rem 7rem;

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

      .list-number {
        font-weight: bolder;
        letter-spacing: 0.2rem;
        padding-right: 1rem;
        text-align: right;
      }

      .list-text {
        text-align: left;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
      }
    }
  }
}
</style>
