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
  name: "GardenTour",
  created() {
    this.$emit('update:layout', Frontend)
  },
  data() {
    return {
      date: '',
      showRegType: false,
      gardenChecked: false,
      reservationPre: false,
      activeTab: 3
    }
  },
  components: {
    Main
  }
};
</script>

<style scoped>

</style>