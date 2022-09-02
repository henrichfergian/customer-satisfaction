<template>
  <div class="container">
    <section class="vote">
      <h3 class="give-your-vote">
        Silahkan berikan penilaian anda terhadap pelayanan kami
      </h3>
      <div class="emoticons">
        <VoteButtons :voteProp="vote" :processDoneProp="isProcessDone" />
      </div>
    </section>
    <section class="finish">
      <transition name="fade" v-on:after-enter="resetVote">
        <h4 v-if="show">Terima kasih telah memberikan penilaian anda</h4>
      </transition>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import VoteButtons from "@/components/VoteButtons.vue";

export default {
  name: "HomeView",
  components: { VoteButtons },
  data: function () {
    return {
      show: false,
      isProcessDone: true,
    };
  },
  methods: {
    vote() {
      this.show = true;
      this.isProcessDone = false;
    },
    resetVote() {
      this.show = false;
      this.isProcessDone = true;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  align-items: center;
}

.give-your-vote {
  font-size: 2.5rem;
}

.emoticons {
  display: flex;
  justify-content: center;
}

.finish {
  position: absolute;
  bottom: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

section {
  width: 100%;
}
</style>
