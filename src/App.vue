<template>
  <HeaderMobile v-if="width < '768'" />
  <HeaderDesktop v-if="width >= '768'" />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="in-out">
      <component :is="Component" />
    </transition>
  </router-view>
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
body {
  background: #0b0d17;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
