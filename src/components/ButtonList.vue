<template>
  <ul class="button-list">
    <li class="button-item" v-for="({ type }, index) in buttons" :key="index">
      <span>
        {{ type }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ButtonList",
  data() {
    return {
      buttons: [{ type: "Daily" }, { type: "Weekly" }, { type: "Monthly" }],
    };
  },
};
</script>

<style scoped lang="scss">
.button {
  &-list {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding: 1.5rem;

    span {
      color: $secondary-light;
      font-weight: 300;
      opacity: 0.5;
      cursor: pointer;
      transition: color 0.25s ease-in, opacity 0.25s ease-in;

      &:hover {
        opacity: 1;
        color: White;
      }
    }

    /* 用來標示現在是哪一個時段 */
    .is-active {
      color: White;
    }
  }
}
</style>
