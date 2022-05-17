<template>
  <ul v-if="hasReceivedData">
    <li v-for="({ title, timeframes, color }, index) in list" :key="index">
      <card-item
        :title="title"
        :timeframes="timeframes"
        :icon="index"
        :color="color"
      ></card-item>
    </li>
  </ul>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
  name: "SubCard",
  components: {
    CardItem,
  },
  data() {
    return {
      list: [],
      colorList: [
        "#ff8c66",
        "#56c2e6",
        "#ff5c7c",
        "#4acf81",
        "#7536d3",
        "#f1c65b",
      ],
    };
  },
  computed: {
    hasReceivedData() {
      return this.list.length > 0;
    },
  },
  methods: {
    async processDataRequest() {
      const [requestError, data] = await this.requestData();
      if (requestError) {
        throw new Error("Something went wrong");
      }
      this.setDataList(data, this.colorList);
    },
    async requestData() {
      const response = await fetch("../../data/data.json");
      const data = await response
        .json()
        .then((data) => [null, data])
        .catch((error) => Promise.resolve([error, null]));
      return data;
    },
    setDataList(data, colorList) {
      this.list = data.map((item, index) =>
        Object.assign(item, {
          color: colorList[index],
        })
      );
    },
  },
  mounted() {
    this.processDataRequest();
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(3, 250px);
  gap: 1rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
  @media screen and (max-width: 668px) {
    grid-template-columns: auto;
  }
}
</style>
