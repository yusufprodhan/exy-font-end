<template>
  <div class="childcare-parent">

    <Header :navActive="navActive"></Header>

    <div class="container">

      <!-- Page Content -->
      <div class="mt-5 mb-5">
        <div class="mt-5 mb-5">
          <span class="text-2xl fw-bold">自分の子育て・保育相談</span>
        </div>

        <!-- Tab Pills -->
        <tab-pills :activeTab="activeTab"></tab-pills>
        <!-- /Tab Pills -->

        <!-- Tab Content -->
        <tab-content :activeTab="activeTab">
        </tab-content>
        <!-- /Tab Content -->
      </div>
      <!-- /Page Content -->

    </div>


  </div>
</template>

<script>
// imports
import Header from "./Header.vue"
import TabPills from "./TabPills.vue"
import TabContent from "./TabContents.vue"
import Frontend from "../../layouts/Frontend";

export default {
  name: "ChildcareConsultation",
  created() {
    this.$emit('update:layout', Frontend)
  },
  data() {
    return {
      activeTab: 1,
      navActive: true
    }
  },
  components: {
    Header,
    TabPills,
    TabContent,
  }
}
</script>

<style scoped>

</style>