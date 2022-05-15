<template>
  <div class="container">
    <main-card></main-card>
  </div>
</template>

<script>
import MainCard from "./components/MainCard.vue";

export default {
  name: "App",
  components: {
    MainCard,
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
  grid-auto-columns: minmax(250px, auto);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
}
</style>
