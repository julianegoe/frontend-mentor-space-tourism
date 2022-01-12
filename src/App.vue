<template>
  <HeaderMobile v-if="width < '768'" />
  <HeaderDesktop v-if="width >= '768'" />
  <router-view />
</template>
<script>
import { useWindowSize } from "vue-window-size";
import HeaderMobile from "@/components/HeaderMobile";
import HeaderDesktop from "@/components/HeaderDesktop";

export default {
  name: "App",
  components: {
    HeaderDesktop,
    HeaderMobile,
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

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
