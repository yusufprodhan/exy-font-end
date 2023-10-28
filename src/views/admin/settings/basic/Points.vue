<template>
  <div class="mt-5">
    <div class="py-2 bg-707070 border border-333333">
      <span class="text-white ps-2 fw-bold">５POINT</span>
    </div>
    <form @submit.prevent="updatePoints">
      <div class="row w-100 ms-0 row-5">
        <div class="col-md-12 inner-col-1 py-3 pb-4">
          <div class="row school-step py-5">
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
          <div class="text-right pe-4">
            <button type="submit" class="submit-btn" v-if="schoolSettingFormActive">変更内容を保存</button>
          </div>
        </div>
      </div>
    </form>
    <div class="text-right mt-4" v-if="!schoolSettingFormActive">
      <router-link :to="{name:'Kindergarten', params: {uuid: uuid}}" target="_blank" class="preview-btn me-4">プレビュー</router-link>
      <button type="button" class="submit-btn" @click="schoolSettingFormActiveUpdate">修正する</button>
    </div>
  </div>
</template>

<script>
import RangeSlider from "../../../../components/school/RangeSlider";
import axios from "../../../../axios";

export default {
  name: "Points",
  props: {
    points: Object,
    uuid: String,
  },
  computed: {
    schoolSettingFormActive() {
      return this.$store.getters.schoolSettingFormActive
    }
  },
  components: { RangeSlider },
  methods: {
    schoolSettingFormActiveUpdate() {
      this.$store.commit('schoolSettingFormActiveUpdate', true)
    },
    updatePoints() {
      axios.post('/school/giving-points', this.points).then(response => {
        this.$toast.success(response.data.message)
        this.$store.commit('schoolSettingFormActiveUpdate', false)
      }).catch(error => {
        this.checkError(error)
      })
    },
  }
}
</script>

<style scoped>

</style>
