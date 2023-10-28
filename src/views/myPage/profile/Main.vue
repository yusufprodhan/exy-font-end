<template>
<div class="mypage-notice d-flex flex-row gap-20 mt-5 md-responsive">
  <div>
    <left-sidebar />
  </div>
  <div class="flex-lg-grow-1">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import LeftSidebar from "./LeftSidebar";
import Parent from "../../../layouts/Parent";
export default {
  name: "Setting",
  components: {
    LeftSidebar,
  },
  created() {
    this.$emit('update:layout', Parent)
  }
};
</script>

<style scoped lang='scss'>
.gap-20{
  gap: 20px;
}

/* responsive design */
  @media only screen and (max-width: 600px) {
    .md-responsive
    {
      margin-top: 2rem !important;
      flex-direction: column !important;
      gap: 35px;
      .left-column
      {
        width: 100%;
      }
    }
  }
</style>