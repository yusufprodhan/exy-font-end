<template>
  <div class="py-5">
    <div class="container">
      <h3 class="border-bottom text-xl"><span class="--color-e6006e">エリア</span>からさがす</h3>

      <div class="my-5">
        <router-view></router-view>
      </div>

      <h3 class="border-bottom border-2 pb-2 mt-5 text-xl">その他の条件を指定する</h3>
      <search-from-the-area/>
    </div>
  </div>
</template>

<script>
import SearchFromTheArea from "../SearchFromTheArea";
import Frontend from "../../../layouts/Frontend";

export default {
  name: "Main",
  created() {
    this.$emit('update:layout', Frontend)
  },
  components: { SearchFromTheArea }
}
</script>

<style scoped>

</style>