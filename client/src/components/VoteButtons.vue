<template>
  <div class="buttons">
    <button
      v-for="(emoticon, index) in emoticons"
      :key="index"
      :id="emoticon.name"
      :value="emoticon.name"
      :disabled="isDisable"
      :class="{ active: emoticonClicked === emoticon.name }"
      class="btn-emoji"
      @click="vote"
    >
      <span v-html="emoticon.charCode"></span>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import moment from "moment";

export default {
  name: "VoteButtons",
  props: {
    voteProp: {
      type: Function,
    },
    processDoneProp: {
      type: Boolean,
    },
  },
  data: function () {
    return {
      emoticons: [
        {
          name: "very-good",
          charCode: "&#128512;",
        },
        {
          name: "ok",
          charCode: "&#128528;",
        },
        {
          name: "very-bad",
          charCode: "&#128546;",
        },
      ],
      emoticonClicked: "",
    };
  },
  methods: {
    vote(event) {
      let voted = event.target.value;
      console.log(event);

      // untuk menentukan btn dengan class active & disable semua btn
      this.emoticonClicked = voted;

      // melakukan penyimpanan data ke localStorage
      this.store(voted);

      // memberikan indikator ke home u/ menampilkan terimakasih
      this.voteProp();
    },
    store(voted) {
      let keyStorage = moment().format("YYYYMMDD hhmmss");
      let created_at = moment().format("YYYY-MM-DD hh:mm:ss");
      let data = {
        vote: voted,
        created_at,
      };
      localStorage.setItem(keyStorage, JSON.stringify(data));
    },
  },
  computed: {
    isDisable: function () {
      return this.emoticonClicked.length !== 0;
    },
  },
  watch: {
    processDoneProp: function () {
      if (this.processDoneProp) {
        this.emoticonClicked = "";
      }
    },
  },
};
</script>

<style>
.buttons {
  display: flex;
}

.btn-emoji {
  margin: 0px 50px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.btn-emoji span {
  font-size: 10rem;
  pointer-events: none;
}

.btn-emoji {
  transition: all 3s ease-in-out;
}

.btn-emoji:hover:enabled span {
  text-shadow: 10px 10px 15px;
  background-position: 0px 0px;
  position: relative;
  top: 10px;
  left: 10px;
}

.btn-emoji:active:enabled {
  background-color: rgb(95, 153, 230);
  position: relative;
  top: 20px;
  left: 20px;
}

#very-bad:hover:enabled span {
  color: rgb(255, 0, 13);
}

#ok:hover:enabled span {
  color: rgb(255, 123, 0);
}

#very-good:hover:enabled span {
  color: rgb(0, 255, 0);
}
</style>
