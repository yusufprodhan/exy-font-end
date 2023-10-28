<template>
  <div class="flex flex-col h-screen justify-between">
    <navbar-top v-if="currentRouteName === 0"></navbar-top>
    <navbar-top-open v-else></navbar-top-open>
    <slot/>
    <Footer></Footer>
  </div>
</template>

<script>
import NavbarTop from "../components/adminPartials/NavbarTop";
import NavbarTopOpen from "../components/adminPartials/NavbarTopOpen";
import Footer from "../components/adminPartials/Footer";

export default {
  name: "Admin",
  components: { Footer, NavbarTop, NavbarTopOpen },
  computed: {
    currentRouteName() {
      if (this.$route.name === 'Admin.MyPage') {
        return 1;
      }
      return 0;
    }
  }
}
</script>

<style scoped>
.justify-between {
  justify-content: space-between;
}

.flex-col {
  flex-direction: column;
}

.h-screen {
  height: 100vh;
}

.flex {
  display: flex;
}
</style>
