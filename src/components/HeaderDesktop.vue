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
        <li>
          <router-link :to="{ name: 'Home' }" active-link="active">
            <span class="list-number">00</span>
            <span class="list-text">Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Destinations', params: { name: 'Moon' } }"
            active-link="active"
          >
            <span class="list-number">01</span
            ><span class="list-text">Destinations</span>
            <span></span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Crew', params: { name: 'Douglas Hurley' } }"
            active-link="active"
          >
            <span class="list-number">02</span>
            <span class="list-text">Crew</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Technology', params: { name: 'Launch vehicle' } }"
            active-link="active"
          >
            <span class="list-number">03</span
            ><span class="list-text">Technology</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderDesktop",
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

    li > a {
      color: inherit;
      text-decoration: none;
      padding: 2rem 0.4rem 1.8rem 0.4rem;
      &.router-link-active {
        border-bottom: 0.2rem inset $color-white;
      }
      &:hover {
        border-bottom: 0.2rem inset rgba(255, 255, 255, 0.5);
      }
    }

    @media ($breakpoint-desktop) {
      .design-line {
        position: relative;
        top: 2.5rem;
        right: 45%;
        width: 350px;
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
      padding: 2rem 3rem;

      li:last-child {
        margin-right: 0;
      }

      @media ($breakpoint-desktop) {
        padding: 2rem 7rem;
      }

      li {
        display: inline;
        cursor: pointer;
        margin-right: 1.6rem;
      }
      @media ($breakpoint-tablet) {
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
}
</style>
