<template>
  <div class="security-parent">
    <div class="overflow-hidden mb-5">
      <!-- right column -->
      <div class="float-start mb-5 w-100">
        <div class="hr-title fw-bold text-2xl">セキュリティ</div>
        <!-- content -->
        <div class="bg-light px-3 py-4 mt-4">
          <div class="bg-white p-3">
            <div>お支払い情報</div>
            <div class="ms-3 mt-3 row">
              <div class="col-md-6">
                クレジット支払い
              </div>
              <div class="col-md-6 text-end">
                <button class="border px-5 py-2 border-secondary border-2 rounded bg-white">
                  変更す-を
                </button>
              </div>
            </div>
          </div>
          <div class="bg-white p-3 mt-3">
            <div class="row py-2">
              <div class="col-md-6">
                <div>
                  パスワード
                </div>
              </div>
              <div class="col-md-6 text-end">
                <router-link :to="{name:'PasswordReset'}">
                  <span class="color-kigaruni-pink">登録完了</span>
                  <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- /content -->
      </div>
      <!-- /right column -->
    </div>
  </div>
</template>

<script>
import Frontend from "../../../layouts/Frontend.vue";

export default {
  name: "Security",
  created() {
    this.$emit('update:layout', Frontend)
  },
  data() {
    return {
      navActive: "setting",
      sideNavActive: 5
    }
  },
};
</script>
