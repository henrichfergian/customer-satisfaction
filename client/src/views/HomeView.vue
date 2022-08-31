<template>
  <div class="container">
    <section class="vote">
      <h3 class="give-your-vote">
        Silahkan berikan penilaian anda terhadap pelayanan kami
      </h3>
      <div class="emoticons">
        <VoteButtons />
      </div>
    </section>
    <section class="finish">
      <h4>Terima kasih telah memberikan penilaian anda</h4>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import VoteButtons from "@/components/VoteButtons.vue";
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: { VoteButtons },
};
</script>

<style>
.container {
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  align-items: center;
}
.emoticons {
  display: flex;
  justify-content: center;
}

section {
  width: 100%;
}
</style>
