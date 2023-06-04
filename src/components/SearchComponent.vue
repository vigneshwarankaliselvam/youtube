<template>
  <div class="search-input">
    <div
      :class="['search-input__left', { 'search-input__focused': inputFocused }]"
    >
      <svg
        v-if="inputFocused"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        class="search-icon-active"
      >
        <g>
          <path
            d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
          ></path>
        </g>
      </svg>
      <input
        type="text"
        placeholder="Search"
        @focusin="inputFocused = true"
        @focusout="inputFocused = false"
      />
    </div>
    <div class="search-input__right">
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        class="search-icon-active"
      >
        <g>
          <path
            d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
          ></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    chip: String,
    isSelected: Boolean,
  },
  data() {
    return {
      inputFocused: false,
    };
  },
};
</script>

<style scoped lang="scss">
@import "~rfs/scss";
.search-input {
  display: flex;
  &__left {
    display: flex;
    gap: 4px;
    width: 100%;
    border: 1px solid hsl(0, 0%, 18.82%);
    border-radius: 40px 0 0 40px;
    padding: 8px 8px 8px 16px;
    svg.search-icon-active {
      fill: #ffffff;
      width: 20px;
    }
    input {
      background: inherit;
      border: none;
      color: #ffffff;
      @include font-size(16px);
      width: 100%;
      &:focus {
        outline: none;
      }
      //   ::placeholder {
      //     font-weight: 400;
      //     color: hsla(0, 100%, 100%, 0.88);
      //   }
    }
  }
  &__focused {
    border: 1px solid #065fd4;
    outline-width: thin;
  }
  &__right {
    // border: 1px solid hsl(0, 0%, 18.82%);
    border-radius: 0 40px 40px 0;
    background: hsl(0, 0%, 18.82%);
    display: flex;
    place-items: center;
    padding: 8px 20px;
    cursor: pointer;
    svg {
      width: 24px;
      fill: #ffffff;
    }
  }
}
</style>
