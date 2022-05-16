<template>
  <div class="container">
    <main-card></main-card>
    <sub-card></sub-card>
  </div>
</template>

<script>
import MainCard from "./components/MainCard.vue";
import SubCard from "./components/SubCard.vue";

export default {
  name: "App",
  components: {
    MainCard,
    SubCard,
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
}
</style>
