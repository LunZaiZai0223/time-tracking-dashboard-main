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
      <button-list></button-list>
    </div>
  </section>
</template>

<script>
import ButtonList from "./ButtonList.vue";

export default {
  name: "MainCard",
  components: {
    ButtonList,
  },
  data() {
    return {
      title: "Report for",
      lastname: "Robson",
      firstname: "Jeremy",
    };
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

    &-avatar {
      display: block;
      width: 70px;
      height: 70px;
      border: 2px solid White;
      border-radius: 50%;
      margin-bottom: 1.5rem;
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
      }
    }
  }
}
</style>
