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
      data: [
        {
          title: "Work",
          timeframes: {
            daily: {
              current: 5,
              previous: 7,
            },
            weekly: {
              current: 32,
              previous: 36,
            },
            monthly: {
              current: 103,
              previous: 128,
            },
          },
        },
        {
          title: "Play",
          timeframes: {
            daily: {
              current: 1,
              previous: 2,
            },
            weekly: {
              current: 10,
              previous: 8,
            },
            monthly: {
              current: 23,
              previous: 29,
            },
          },
        },
        {
          title: "Study",
          timeframes: {
            daily: {
              current: 0,
              previous: 1,
            },
            weekly: {
              current: 4,
              previous: 7,
            },
            monthly: {
              current: 13,
              previous: 19,
            },
          },
        },
        {
          title: "Exercise",
          timeframes: {
            daily: {
              current: 1,
              previous: 1,
            },
            weekly: {
              current: 4,
              previous: 5,
            },
            monthly: {
              current: 11,
              previous: 18,
            },
          },
        },
        {
          title: "Social",
          timeframes: {
            daily: {
              current: 1,
              previous: 3,
            },
            weekly: {
              current: 5,
              previous: 10,
            },
            monthly: {
              current: 21,
              previous: 23,
            },
          },
        },
        {
          title: "Self Care",
          timeframes: {
            daily: {
              current: 0,
              previous: 1,
            },
            weekly: {
              current: 2,
              previous: 2,
            },
            monthly: {
              current: 7,
              previous: 11,
            },
          },
        },
      ],
    };
  },
  computed: {
    hasReceivedData() {
      return this.list.length > 0;
    },
  },
  methods: {
    //   async processDataRequest() {
    //     const [requestError, data] = await this.requestData();
    //     if (requestError) {
    //       throw new Error("Something went wrong");
    //     }
    //     console.log(data);
    //     this.setDataList(data, this.colorList);
    //   },
    //   async requestData() {
    //     const response = await fetch("http://localhost:3000/data");
    //     const data = await response
    //       .json()
    //       .then((data) => [null, data])
    //       .catch((error) => Promise.resolve([error, null]));
    //     return data;
    //   },
    setDataList(data, colorList) {
      this.list = data.map((item, index) =>
        Object.assign(item, {
          color: colorList[index],
        })
      );
    },
  },
  mounted() {
    // this.processDataRequest();
    this.setDataList(this.data, this.colorList);
    console.log(this.list);
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
