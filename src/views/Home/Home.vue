<template>
  <TheLayout>
    <TheHeader />
    <WelcomeMessage />
    <ExploreButton />
  </TheLayout>
</template>

<script>
// @ is an alias to /src
import TheLayout from "@/layouts/TheLayout";
import WelcomeMessage from "@/views/Home/WelcomeMessage";
import ExploreButton from "@/views/Home/ExploreButton";
import TheHeader from "@/components/TheHeader";
export default {
  name: "Home",
  components: {
    TheHeader,
    ExploreButton,
    WelcomeMessage,
    TheLayout
  }
};
</script>
