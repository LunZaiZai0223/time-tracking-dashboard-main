<template>
  <div class="card-wrapper" :style="{ 'background-color': color }">
    <div class="card-header">
      <div class="card-icon">
        <img :src="workIcon" v-if="icon === 0" alt="icon" />
        <img :src="playIcon" v-if="icon === 1" alt="icon" />
        <img :src="studyIcon" v-if="icon === 2" alt="icon" />
        <img :src="exerciseIcon" v-if="icon === 3" alt="icon" />
        <img :src="socialIcon" v-if="icon === 4" alt="icon" />
        <img :src="selfCareIcon" v-if="icon === 5" alt="icon" />
      </div>
    </div>
    <div class="card-body">
      <header class="card-body-header">
        <p>{{ title }}</p>
        <div>
          <img src="../assets/images/icon-ellipsis.svg" alt="ellipsis icon" />
        </div>
      </header>
      <div class="card-body-content">
        <p>{{ getCurrentData }}<span>hrs</span></p>
        <footer class="card-body-footer">
          {{ getPreviousData }}
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import workIcon from "../assets/images/icon-work.svg";
import playIcon from "../assets/images/icon-play.svg";
import studyIcon from "../assets/images/icon-study.svg";
import exerciseIcon from "../assets/images/icon-exercise.svg";
import socialIcon from "../assets/images/icon-social.svg";
import selfCareIcon from "../assets/images/icon-self-care.svg";

export default {
  name: "CardItem",
  inject: ["timeState"],
  props: {
    title: {
      type: String,
      default: "",
    },
    timeframes: {
      type: Object,
      default() {
        return {};
      },
    },
    color: {
      type: String,
      default: "",
    },
    icon: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      workIcon,
      playIcon,
      studyIcon,
      exerciseIcon,
      socialIcon,
      selfCareIcon,
    };
  },
  computed: {
    lowerCaseTimeState() {
      return this.timeState.toLowerCase();
    },
    getPreviousData() {
      const currentProp = this.lowerCaseTimeState;
      if (currentProp === "daily") {
        return `Last Day - ${this.timeframes[currentProp].previous}hrs`;
      }
      if (currentProp === "weekly") {
        return `Last Week - ${this.timeframes[currentProp].previous}hrs`;
      }
      if (currentProp === "monthly") {
        return `Last Month - ${this.timeframes[currentProp].previous}hrs`;
      }
      return null;
    },
    getCurrentData() {
      const currentProp = this.lowerCaseTimeState;
      return this.timeframes[currentProp].current;
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  &-wrapper {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    justify-content: space-between;
    @media screen and (max-width: 886px) {
      gap: 1rem;
    }
  }
  &-header {
    height: 20%;
    @media screen and (max-width: 886px) {
      padding-bottom: 1.5rem;
    }
    @media screen and (max-width: 668px) {
      padding-bottom: 0.75rem;
    }
  }
  &-icon {
    position: absolute;
    right: 5%;
    top: 0;
    img {
      display: block;
      width: 65px;
      height: 65px;
    }
  }
  &-body {
    z-index: 99;
    border-radius: 1rem;
    border-bottom-right-radius: 0.85rem;
    border-bottom-left-radius: 0.85rem;
    background-color: $primary;
    padding: 1.5rem;
    cursor: pointer;
    transition: opacity 0.25s;
    height: 80%;
    @media screen and (max-width: 668px) {
      padding-bottom: 1.5rem;
    }

    &:hover {
      opacity: 0.8;
    }

    &-header {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 1.125rem;
        font-weight: 400;
        color: White;
      }
      div {
        &:hover {
          filter: brightness(2);
        }
      }
    }

    &-content {
      font-size: 2.5rem;
      color: White;
      margin-top: 1.5rem;
      font-weight: 300;
      @media screen and (max-width: 886px) {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        flex-direction: column;
        gap: 0.75rem;
      }
      @media screen and (max-width: 668px) {
        flex-direction: row;
        align-items: center;
      }

      p {
        font-size: 2rem;
      }
    }

    &-footer {
      margin-top: 0.75rem;
      color: $secondary-light;
      font-size: 1.25rem;
      @media screen and (max-width: 668px) {
        font-size: 0.85rem;
        margin-top: 0;
      }
      @media screen and (max-width: 886px) {
        font-size: 1rem;
      }

      div {
        margin-bottom: 1.5rem;
        font-weight: 300;
      }
    }
  }
}
</style>
