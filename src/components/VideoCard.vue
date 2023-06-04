<template>
  <div
    class="video-card"
    @mouseenter="isCardActive = true"
    @mouseleave="isCardActive = false"
  >
    <div class="video-card__img">
      <img :src="thumbnail" alt="thumbnail" />
      <div class="video-card__timer">
        <p>{{ duration }}</p>
      </div>
    </div>
    <div class="video-card__desc">
      <a :href="channelLink" target="_blank">
        <img :src="channelLogo" alt="channel-logo" />
      </a>
      <div class="video-card__desc-info">
        <h3>{{ heading }}</h3>
        <svg
          v-if="isCardActive"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="hover-option"
          @click="alert($event)"
        >
          <g>
            <path
              d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
            ></path>
          </g>
        </svg>
        <div>
          <p class="channel-name">{{ channelName }}</p>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path
                d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <p>{{ viewsCount }} views</p>
          <span></span>
          <p>{{ uploadedTime }} ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  props: {
    thumbnail: String,
    channelLink: String,
    channelLogo: String,
    heading: String,
    duration: String,
    channelName: String,
    viewsCount: String,
    uploadedTime: String,
  },
  data() {
    return {
      isCardActive: false,
    };
  },
  methods: {
    alert() {
      alert("hi");
    },
  },
};
</script>

<style scoped lang="scss">
@import "~rfs/scss";
.video-card {
  display: grid;
  grid-template-rows: 70% 30%;
  grid-gap: 12px;
  background: inherit;
  cursor: pointer;
  &__img {
    cursor: pointer;
    position: relative;
    width: fit-content;
    width: 100%;
    height: 100%;
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
    }
  }
  &__timer {
    background: #000000cc;
    @include padding(3px 4px);
    width: fit-content;
    display: flex;
    place-items: center;
    position: absolute;
    right: 8px;
    bottom: 8px;
    border-radius: 4px;
    p {
      color: #ffffff;
      @include font-size(12px);
      font-weight: 500;
    }
  }
  &__desc {
    background: inherit;
    display: flex;
    gap: 12px;
    a > img {
      cursor: pointer;
      border-radius: 50%;
      max-width: 36px;
    }
    &-info {
      @include padding-right(24px);
      display: flex;
      flex-flow: column;
      gap: 4px;
      @include margin-top(2px);
      position: relative;
      h3 {
        color: #f1f1f1;
        @include font-size(16px);
        font-weight: 500;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        @include margin(0);
        @include padding-bottom(2px);
      }
      > div {
        display: flex;
        align-items: center;
        svg {
          width: 14px;
          @include padding-left(4px);
          fill: #aaaaaa;
        }
        p {
          color: #aaaaaa;
          @include font-size(14px);
          &.channel-name:hover {
            color: #ffffff;
          }
        }
        span {
          height: 3px;
          background: #aaaaaa;
          width: 3px;
          border-radius: 50%;
          @include margin(0 4px);
        }
      }
      svg.hover-option {
        fill: #ffffff;
        width: 24px;
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
