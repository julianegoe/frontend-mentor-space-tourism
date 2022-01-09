<template>
  <TheLayout>
    <HeaderMobile v-if="width < '768'" />
    <HeaderDesktop v-if="width >= '768'" />
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
import HeaderMobile from "@/components/HeaderMobile";
import HeaderDesktop from "@/components/HeaderDesktop";
export default {
  name: "Home",
  components: {
    HeaderDesktop,
    HeaderMobile,
    ExploreButton,
    WelcomeMessage,
    TheLayout
  },
  setup() {
    const { width, height} = useWindowSize();
    return {
      width,
      height,
    };
  },
};
</script>
