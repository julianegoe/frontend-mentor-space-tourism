<template>
  <TheLayout class="home-layout">
    <WelcomeMessage />
    <ExploreButton />
  </TheLayout>
</template>

<script>
// @ is an alias to /src
import { useWindowSize } from "vue-window-size";
import TheLayout from "@/layouts/TheLayout";
import WelcomeMessage from "@/views/Home/WelcomeMessage";
import ExploreButton from "@/views/Home/ExploreButton";

export default {
  name: "Home",
  components: {
    ExploreButton,
    WelcomeMessage,
    TheLayout,
  },
  setup() {
    const { width, height } = useWindowSize();
    return {
      width,
      height,
    };
  },
};
</script>
<style lang="scss" scoped>
@use "../../assets/globals.scss" as *;

.home-layout {
  background-image: url("../../assets/home/background-home-mobile.jpg");
  background-size: cover;

  @media ($breakpoint-tablet) {
    background-image: url("../../assets/home/background-home-tablet.jpg");
  }

  @media ($breakpoint-desktop) {
    background-image: url("../../assets/home/background-home-desktop.jpg");
    padding: 0 10.3rem;
  }
}
</style>
