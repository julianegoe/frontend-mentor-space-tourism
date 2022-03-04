<template>
  <div>
    <PlanetInfo
      :name="planetData[0].name"
      :description="planetData[0].description"
    />
    <DestinationStats
      :distance="planetData[0].distance"
      :travel="planetData[0].travel"
    />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import PlanetInfo from "@/views/Destination/PlanetInfo";
import DestinationStats from "@/views/Destination/DestinationStats";

defineProps({
  planetData: Object,
});
</script>

<script>
export default {
  name: "DestinationContent",
};
</script>

<style scoped></style>
