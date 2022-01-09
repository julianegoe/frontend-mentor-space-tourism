<template>
  <div>Header</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderDesktop",
});
</script>

<style lang="scss" scoped>
@use "../assets/globals.scss" as *;

div {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  padding: 2rem;
  color: white;
}
</style>
