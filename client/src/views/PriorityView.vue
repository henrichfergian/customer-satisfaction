<template>
  <div class="container">
    <section class="priority">
      <h3>Berdasarkan Urutan Apa Layanan Tebaik Kami</h3>
      <div class="dnd-option">
        <p>Keramahan</p>
        <p>Fasilitas</p>
        <p>Kecepatan</p>
        <p>Kesesuaian Dengan Aturan</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PriorityView",
  data: function () {
    return {};
  },
};
</script>

<style>
.container {
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
