<template>
  <div class="container">
    <section class="vote">
      <h3 class="give-your-vote">
        Silahkan berikan penilaian anda terhadapa pelayanan kami
      </h3>
      <div class="emoticon">
        <button>
          <span>btn_vote</span>
        </button>
      </div>
    </section>
    <section class="finish">
      <h4>Terima kasih telah memberikan penilaian anda</h4>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  // components: {
  // HelloWorld,
  // },
};
</script>

<style>
.container {
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  align-items: center;
}

section {
  width: 100%;
}
</style>
