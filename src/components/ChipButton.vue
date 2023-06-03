<template>
  <div class="chip">
    <div :class="{ 'chip-selected': isSelected }">
      {{ chip }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ChipButton",
  props: {
    chip: String,
    isSelected: Boolean,
  },
};
</script>

<style scoped lang="scss">
@import "~rfs/scss";
.chip {
  display: flex;
  gap: 12px;
  div {
    @include padding(12px);
    background: #ffffff1a;
    color: #f1f1f1;
    height: 32px;
    min-width: 12px;
    padding: 0 12px;
    border-radius: 8px;
    box-sizing: border-box;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    @include font-size(14px);
    font-weight: 400;
    display: flex;
    align-items: center;
    &.chip-selected {
      color: #0f0f0f;
      background: #f1f1f1;
    }
  }
}
</style>
