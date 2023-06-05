<template>
  <div>
    <div class="sticky-header">
      <HeaderComponent />
      <div class="dashboard__choices">
        <div class="dashboard__chip-list">
          <div v-for="(chip, index) in chipList" :key="index">
            <ChipButton :chip="chip.value" :isSelected="chip.isActive" />
          </div>
        </div>
        <div class="dashboard__choices-next">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path
                d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="dashboard">
      <div class="side-bar"></div>
      <div class="main-content">
        <div class="dashboard__videos">
          <div v-for="(video, index) in cards" :key="index">
            <VideoCard v-bind="video" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
//components
import ChipButton from "./components/ChipButton.vue";
import VideoCard from "./components/VideoCard.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

//helper
import { getChipData, getVideoData } from "./utils/helper";

export default {
  name: "App",
  components: {
    ChipButton,
    VideoCard,
    HeaderComponent,
  },
  data() {
    return {
      chipList: getChipData(),
      cards: getVideoData(),
    };
  },
};
</script>

<style lang="scss">
@import "~rfs/scss";

html,
body {
  height: 100vh;
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
  height: 100vh;
  width: 100%;
  overflow-y: auto;
}
.sticky-header {
  position: sticky;
}
.dashboard {
  height: 100vh;
  display: grid;
  grid-template-columns: max-content auto;
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
  overflow-x: hidden;
  .main-content {
    overflow-x: hidden;
  }
  .side-bar {
    height: 100%;
    width: 94px;
    @media (max-width: 500px) {
      display: none;
    }
  }
  &__chip-list {
    display: flex;
    gap: 12px;
    @include margin(12px 0);
    white-space: nowrap;
    overflow: hidden;
  }
  &__choices {
    @include margin-left(94px);
    &-next {
      display: flex;
      position: absolute;
      right: 0;
      top: 50px;
      svg {
        width: 24px;
        fill: #ffffff;
        @include padding(24px);
        background: #0f0f0f;
        cursor: pointer;
      }
      &::before {
        content: "";
        background: linear-gradient(
          to left,
          #0f0f0f 20%,
          rgba(33, 33, 33, 0) 80%
        );
        width: 20px;
      }
    }
  }
  &__videos {
    display: grid;
    grid-gap: 16px;
    grid-row-gap: 32px;
    @include margin(32px 28px 24px 0);
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      @include margin(16px 14px 12px 14px);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      @include margin(16px 14px 12px 14px);
    }
  }
}
</style>
