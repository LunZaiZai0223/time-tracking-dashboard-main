<template>
  <section>
    <div class="profile">
      <div class="profile-body">
        <img
          class="profile-body-avatar"
          src="../assets/images/image-jeremy.png"
          alt="avatar-jeremy"
        />
        <h1 class="profile-body-text">
          <span class="profile-body-text-title">{{ title }}</span>
          <span class="profile-body-text-name"
            >{{ firstname }} <span>{{ lastname }}</span></span
          >
        </h1>
      </div>
      <ul class="button-list">
        <li
          class="button-item"
          v-for="(timeStateItem, index) in timeStateList"
          :key="index"
          @click="selectTimeState(timeStateItem)"
        >
          <span
            :class="{
              'is-active': setIsActiveClass(timeStateItem),
            }"
          >
            {{ timeStateItem }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainCard",
  emits: ["select-time-state"],
  inject: ["timeState"],
  data() {
    return {
      title: "Report for",
      lastname: "Robson",
      firstname: "Jeremy",
      timeStateList: ["Daily", "Weekly", "Monthly"],
      timeStateLocal: this.timeState,
    };
  },
  methods: {
    selectTimeState(time) {
      this.$emit("select-time-state", time.toLowerCase());
    },
    setIsActiveClass(item) {
      return item.toLowerCase() === this.timeStateLocal;
    },
  },
};
</script>

<style scoped lang="scss">
section {
  grid-column: 1 / 2;
}

.profile {
  background-color: $primary;
  border-radius: 1rem;
  min-width: 225px;

  &-body {
    background-color: $primary-light;
    padding: 1.5rem;
    padding-right: 0;
    padding-bottom: 5rem;
    border-radius: 1rem;

    @media screen and (max-width: 886px) {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.5rem !important;
    }

    &-avatar {
      display: block;
      width: 70px;
      height: 70px;
      border: 2px solid White;
      border-radius: 50%;
      margin-bottom: 1.5rem;

      @media screen and (max-width: 886px) {
        margin-bottom: 0;
      }
    }

    &-text {
      font-weight: 300;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      &-title {
        font-size: 1rem;
        color: $secondary-light;
      }

      &-name {
        font-size: 2rem;
        color: White;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        @media screen and (max-width: 886px) {
          flex-direction: row;
        }
      }
    }
  }
}

.button {
  &-list {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding: 1.5rem;

    @media screen and (max-width: 886px) {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }

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

    .is-active {
      color: White;
      opacity: 1;
      font-weight: 400;
    }
  }
}
</style>
