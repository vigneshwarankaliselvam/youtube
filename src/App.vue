<template>
  <SearchInput />
  <ChipButton :chip="'News'" :isSelected="true" />
  <div v-for="(video, index) in cards" :key="index">
    <VideoCard v-bind="video" />
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
import ChipButton from "./components/ChipButton.vue";
import VideoCard from "./components/VideoCard.vue";
import SearchInput from "./components/SearchComponent.vue";

export default {
  name: "App",
  components: {
    ChipButton,
    VideoCard,
    SearchInput,
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
      cards: [
        {
          heading:
            "ஆதரவு தெரிவித்த முதல்வருக்கு சீமான் அதிரடி பதில் | Seeman | Mk Stalin | PTS",
          duration: "4:04",
          channelName: "PuthiyathalaimuraiTV",
          viewsCount: "149K",
          uploadedTime: "15 hours",
          channelLogo:
            "https://yt3.ggpht.com/5ZtoCHyWV95KdgDkYjVfhC1TCdZjHHE8_ar96Uvd8ulPp9rPbKhyds_ULHZUTdR27_XMdGbcLPE=s68-c-k-c0x00ffffff-no-rj",
          channelLink: "https://www.youtube.com/@PuthiyaThalaimuraiTV",
          thumbnail:
            "https://i.ytimg.com/vi/ALWjVHIExeI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDL7Zm14xWoOPoSjNTGYTgAf9oCPA",
        },
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
p {
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
