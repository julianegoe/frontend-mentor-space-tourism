<template>
  <div class="welcome-wrapper">
    <h5>So, you want to travel to</h5>
    <h1>Space</h1>
    <p>
      Let’s face it; if you want to go to space, you might as well genuinely go
      to outer space and not hover kind of on the edge of it. Well sit back, and
      relax because we’ll give you a truly out of this world experience!
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomeMessage",
});
</script>

<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.welcome-wrapper {
  text-align: center;

  @media ($breakpoint-desktop) {
    text-align: left;
    max-width: 28.135rem;
    padding-bottom: 4rem;
  }
}
</style>
