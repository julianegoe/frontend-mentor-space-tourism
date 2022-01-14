<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheLayout",
});
</script>

<style lang="scss" scoped>
@use "../assets/globals.scss" as *;

.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 8rem 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ($breakpoint-tablet) {
    padding: 12rem 9rem 0 9rem;
  }

  @media ($breakpoint-desktop) {
    padding: 0 8rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
}
</style>
