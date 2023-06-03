<template>
  <ChipButton :chip="'News'" :isSelected="true" />
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
import ChipButton from "./components/ChipButton.vue";

export default {
  name: "App",
  components: {
    ChipButton,
  },
  data() {
    return {
      chipList: [
        "All",
        "News",
        "Music",
        "England cricket team",
        "Wickets",
        "Live",
      ],
    };
  },
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Roboto", "Arial", sans-serif;
  background: #0f0f0f;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
