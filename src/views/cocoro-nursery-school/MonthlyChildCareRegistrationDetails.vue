<template>
  <div>
    <!-- Main -->
    <Main
        :showRegType="showRegType"
        :gardenChecked="gardenChecked"
        :reservationPre="reservationPre"
        :activeTab="activeTab"
    >
    </Main>
    <!-- /Main -->
  </div>
</template>


<script>
// imports
import Main from "./Main.vue"
import Frontend from "../../layouts/Frontend";

export default {
  name: "MonthlyChildCareregistrationDetails",
  created() {
    this.$emit('update:layout', Frontend)
  },
  data() {
    return {
      showRegType: true,
      gardenChecked: false,
      reservationPre: true,
      activeTab: 2
    }
  },
  components: {
    Main
  }
};
</script>

<style scoped>

</style>