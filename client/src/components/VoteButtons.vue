<template>
  <div class="buttons">
    <!-- <button
      v-for="(emoticon, index) in emoticons"
      :key="index"
      :id="emoticon"
      class="btn-emoticon"
    ></button> -->
    <button
      v-for="(emoticon, index) in emoticons"
      :key="index"
      :id="emoticon.name"
      class="btn-emoji"
      v-html="emoticon.charCode"
    ></button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "VoteButtons",
  components: {},
  data: function () {
    return {
      emoticons: [
        {
          name: "very-bad",
          charCode: "&#128545;",
          // charCode: "&#129324;",
        },
        {
          name: "Ok",
          charCode: "&#128528;",
        },
        {
          name: "very-good",
          charCode: "&#128512;",
        },
      ],
    };
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
#very-bad:hover {
  text-shadow: 5px 5px;
  background-position: 0px 0px;
  color: cyan;
}
#very-bad:active {
  background-color: rgb(95, 153, 230);
}
</style>
