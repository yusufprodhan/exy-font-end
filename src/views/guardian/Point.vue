<template>
  <div class="row w-100 ms-0 row-5">
    <div class="col-md-12 inner-col-1 py-3 pb-4">
      <div class="row school-step pb-5">
        <div class="col-md-2 step-item">
          <p>リフレッシュ利用</p>
        </div>
        <div class="col-md-10 d-flex align-items-center">
          <div class="fw-bold mx-4">OK</div>
          <range-slider class="flex-fill" v-model="points.use_refresh" :step="20"></range-slider>
          <div class="fw-bold mx-4">NG</div>
        </div>
      </div>
      <div class="row school-step py-5">
        <div class="col-md-2 step-item">
          <p>保護者参加行事</p>
        </div>
        <div class="col-md-10 d-flex align-items-center">
          <div class="fw-bold mx-4">あり</div>
          <range-slider class="flex-fill" v-model="points.parent_participation_event" :step="20"></range-slider>
          <div class="fw-bold mx-4">なし</div>
        </div>
      </div>
      <div class="row school-step py-5">
        <div class="col-md-2 step-item">
          <p>園外遊び</p>
        </div>
        <div class="col-md-10 d-flex align-items-center">
          <div class="fw-bold mx-4">あり</div>
          <range-slider class="flex-fill" v-model="points.playing_outside_park" :step="20"></range-slider>
          <div class="fw-bold mx-4">なし</div>
        </div>
      </div>
      <div class="row school-step py-5">
        <div class="col-md-2 step-item">
          <p>日々の持ち物</p>
        </div>
        <div class="col-md-10 d-flex align-items-center">
          <div class="fw-bold mx-4">あり</div>
          <range-slider class="flex-fill" v-model="points.daily_belongings" :step="20"></range-slider>
          <div class="fw-bold mx-4">なし</div>
        </div>
      </div>
      <div class="row school-step py-5">
        <div class="col-md-2 step-item">
          <p>保護者会</p>
        </div>
        <div class="col-md-10 d-flex align-items-center">
          <div class="fw-bold mx-4">あり</div>
          <range-slider class="flex-fill" v-model="points.parents_association" :step="20"></range-slider>
          <div class="fw-bold mx-4">なし</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import RangeSlider from "@/components/school/RangeSlider";

export default {
  name: "Point",
  props: {
    points: Object,
  },
  components: { RangeSlider },
}
</script>

<style lang="scss" scoped>
.step-item {
  p {
    font-weight: 700;
    position: relative;

    &:after {
      content: "";
      display: block;
      top: 100%;
      left: 0;
      width: 30px;
      height: 2px;
      background: #cb3a82;
      position: absolute;
    }
  }
}
</style>
