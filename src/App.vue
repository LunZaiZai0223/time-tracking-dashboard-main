<template>
  <div class="container">
    <main-card @select-time-state="selectTimeState"></main-card>
    <sub-card></sub-card>
    <footer class="footer">
      <p>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by
        <a href="https://github.com/LunZaiZai0223" target="_blank"
          >LunZaiZai0223</a
        >.
      </p>
    </footer>
  </div>
</template>

<script>
import { computed } from "vue";

import MainCard from "./components/MainCard.vue";
import SubCard from "./components/SubCard.vue";

export default {
  name: "App",
  components: {
    MainCard,
    SubCard,
  },
  data() {
    return {
      timeState: "daily",
    };
  },
  provide() {
    return {
      timeState: computed(() => this.timeState),
    };
  },
  methods: {
    selectTimeState(time) {
      this.timeState = time;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Rubik", sans-serif;
  min-height: 100vh;
  background-color: $bg-blue;
}

ul li {
  list-style-type: none;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.container {
  display: grid;
  max-width: 1024px;
  margin: 0 auto;
  grid-template-columns: max-content max-content;
  gap: 1rem;
  @media screen and (max-width: 886px) {
    grid-template-columns: auto;
  }
  @media screen and (max-width: 668px) {
    padding: 2.5rem 0;
  }
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: White;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
    position: relative;
  }
}
</style>
