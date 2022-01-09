<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent} from "vue";

export default defineComponent({
  name: "TheLayout",
});
</script>

<style lang="scss" scoped>
@use '../assets/globals.scss' as *;

.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0 1.5rem;
  background-image: url("../assets/home/background-home-mobile.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ($breakpoint-tablet) {
    background-image: url("../assets/home/background-home-tablet.jpg");
    padding: 0 9rem;
  }

  @media ($breakpoint-desktop) {
    background-image: url("../assets/home/background-home-desktop.jpg");
    padding: 0 10.3rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

}

</style>
