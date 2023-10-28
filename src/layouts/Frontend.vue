<template>
  <div>
    <navbar-top/>

    <slot/>
    
    <Footer/>
  </div>
</template>

<script>
import NavbarTop from "../components/partials/NavbarTop";
import Footer from "../components/partials/Footer";

export default {
  name: "Frontend",
  components: { NavbarTop, Footer }
}
</script>

<style scoped>

</style>