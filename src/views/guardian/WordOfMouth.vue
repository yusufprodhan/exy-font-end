<template>
  <div class="word-of-mouth">
    <div class="container pt-4">
      <div class="row mt-2 top-bar pb-2">
        <div class="col-md-6">
          <p class="m-0">
            <span class="fs-4 fw-bold">総合</span>
            <span class="fs-4 fw-bold rv-point">4.0</span>
            <span class="fs-2 fa fa-star checked"></span>
            <span class="fs-2 fa fa-star checked"></span>
            <span class="fs-2 fa fa-star checked"></span>
            <span class="fs-2 fa fa-star checked"></span>
            <span class="fs-2 fa fa-star"></span>
          </p>
        </div>
        <div class="col-md-6 pt-2">
          <div class="row bar-left">
            <div class="col-md-4">
              <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
            </div>
            <div class="col-md-4 left-border">
              <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
            </div>
            <div class="col-md-4 left-border">
              <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4 row-1" v-for="n in 5" :key="n">
        <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_26.png" alt="EXY"></div>
        <div class="col-md-10">
          <div class="row me-1 row-11">
            <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <p class="m-0">
                <span class="">総合</span>
                <span class="fw-bold rv-point">4</span>
                <span class=" fa fa-star checked"></span>
                <span class=" fa fa-star checked"></span>
                <span class=" fa fa-star checked"></span>
                <span class=" fa fa-star checked"></span>
                <span class=" fa fa-star"></span>
              </p>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-4">
                  <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                </div>
                <div class="col-md-4 left-border">
                  <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                </div>
                <div class="col-md-4 left-border">
                  <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-2">
        <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れていますこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
      </div>
    </div>

    <router-link :to="{name:'ProceedToReservation'}" class="regeneration-btn">予約へ進む</router-link>
  </div>
</template>

<script>
export default {
  name: "WordOfMouth",
  props: {
    data: Object
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
