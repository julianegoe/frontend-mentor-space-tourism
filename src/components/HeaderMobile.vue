<template>
  <nav class="header-layout">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <g fill="none" fill-rule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#FFF" />
        <path
          fill="#0B0D17"
          d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
        />
      </g>
    </svg>
    <div @click="toggleMenu" class="hamburger">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
        <g fill="#D0D6F9" fill-rule="evenodd">
          <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
        </g>
      </svg>
    </div>
  </nav>

  <div :class="{ closed: closed }" class="side-nav">
    <div @click="toggleMenu" class="close-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
        <g fill="#D0D6F9" fill-rule="evenodd">
          <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
          <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
        </g>
      </svg>
    </div>
    <ul>
      <li>
        <span class="list-number">00</span><span class="list-text">Home</span>
      </li>
      <li>
        <span class="list-number">01</span
        ><span class="list-text">Destinations</span>
      </li>
      <li>
        <span class="list-number">02</span><span class="list-text">Crew</span>
      </li>
      <li>
        <span class="list-number">03</span
        ><span class="list-text">Technology</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HeaderMobile",
  setup() {
    const closed = ref(true);

    const toggleMenu = () => {
      closed.value = !closed.value;
    };
    return {
      closed,
      toggleMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "../assets/globals.scss" as *;

.side-nav {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  padding: 2rem;
  backdrop-filter: blur(50px) brightness(1.1) contrast(0.9);
  transition: transform 0.15s ease-in;
  z-index: 1;

  &.closed {
    transform: translateX(100%);
  }

  .close-button {
    text-align: right;

    > svg {
      cursor: pointer;
    }
  }

  ul {
    all: unset;
    color: $color-white;
    list-style: none;
    font-family: "Barlow", sans-serif;
    font-size: 1rem;
    padding-top: 2rem;

    li {
      margin-top: 4rem;
      cursor: pointer;
    }

    .list-number {
      font-weight: bolder;
      padding-right: 0.5em;
      text-align: right;
    }

    .list-text {
      text-align: left;
      text-transform: uppercase;
    }
  }
}

.header-layout {
  position: absolute;
  width: 100%;
  display: flex;
  padding: 1.5rem 0;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  @media ($breakpoint-tablet) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .hamburger {
    cursor: pointer;

    @media ($breakpoint-tablet) {
      opacity: 0;
    }
  }
}
</style>
