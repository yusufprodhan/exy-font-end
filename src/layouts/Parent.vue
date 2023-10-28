<template>
  <div>
    <NavbarTop></NavbarTop>
    <div class="container">
      <div class="mypage-home">
        <ParentHeader></ParentHeader>
        <slot/>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ParentHeader from "../components/partials/ParentHeader"
import NavbarTop from "../components/partials/NavbarTop";
import Footer from "../components/partials/Footer";

export default {
  name: "Parent",
  components: {
    NavbarTop,
    ParentHeader,
    Footer
  }
}
</script>

<style scoped></style>
