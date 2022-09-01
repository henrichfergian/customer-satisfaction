<template>
  <div class="buttons">
    <button
      v-for="(emoticon, index) in emoticons"
      :key="index"
      :id="emoticon.name"
      :value="emoticon.name"
      class="btn-emoji"
      v-html="emoticon.charCode"
      @click="vote"
    ></button>
  </div>
</template>

<script>
// @ is an alias to /src
import moment from "moment";

export default {
  name: "VoteButtons",
  components: {},
  data: function () {
    return {
      emoticons: [
        {
          name: "very-bad",
          charCode: "&#128546;",
        },
        {
          name: "ok",
          charCode: "&#128528;",
        },
        {
          name: "very-good",
          charCode: "&#128512;",
        },
      ],
    };
  },
  methods: {
    vote(event) {
      let timestamp = moment().format("MMMM Do YYYY, h:mm:ss a");
      let voted = {
        vote_name: event.target.value,
        timestamp,
      };
      localStorage.setItem("vote", JSON.stringify(voted));
    },
  },
};
</script>

<style>
.buttons {
  display: flex;
}
.btn-emoji {
  margin: 0px 10px;
  background: none;
  border: none;
  font-size: 10rem;
  outline: none;
  cursor: pointer;
}
.btn-emoji:hover {
  text-shadow: 10px 10px 15px;
  background-position: 0px 0px;
  position: relative;
  top: 10px;
  left: 10px;
}
.btn-emoji:active {
  background-color: rgb(95, 153, 230);
  position: relative;
  top: 20px;
  left: 20px;
}
#very-bad:hover {
  color: rgb(255, 0, 13);
}
#ok:hover {
  color: rgb(255, 123, 0);
}
#very-good:hover {
  color: rgb(0, 255, 0);
}
</style>
