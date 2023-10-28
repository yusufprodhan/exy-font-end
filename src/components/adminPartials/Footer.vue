<template>
  <footer class="footer-area bg-light py-3 border-top">
    <div class="text-center">
      <p class="m-0 color-cb3a82">
        Copyright ©{{ new Date().getFullYear() }}
        <router-link to="/" class="color-cb3a82">株式会社EXY</router-link>
        | All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

};
</script>

