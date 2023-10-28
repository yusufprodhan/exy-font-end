<template>
  <div>
    <div class="monthly-availability">
      <div class="d-flex align-items-center monthly-column">
        <div class="first-column">月極保育の空き状況</div>
        <div class="d-flex w-100 align-items-center px-4">
          <select v-model="form.available_monthly_care">
            <option value="1">空きあり</option>
            <option value="2">空き予定</option>
            <option value="3">空きなし</option>
          </select>
          <button type="button" @click="formSubmit">変更する</button>
        </div>
      </div>
      <div class="d-flex align-items-center remarks-column">
        <div class="first-column">備考欄</div>
        <div class="d-flex w-100 align-items-center justify-content-between px-4 py-3">
          <label class="container-checkbox">
            <input type="checkbox" v-model="form.remarks_for_monthly_care">
            月極保育:
            <span class="checkmark"></span>
          </label>
          <div class="w-100">
            <textarea v-model="form.remarks" maxlength="50"></textarea>
            <p class="m-0 position-absolute">最大50文字（現在 {{ empty(!form.remarks) ? form.remarks.length : 0 }}文字）</p>
          </div>
          <button type="button" @click="formSubmit">変更する</button>
        </div>
      </div>
      <div class="d-flex align-items-center day__name">
        <div class="first-column">国見学可能曜日</div>
        <div class="d-flex w-100 align-items-center justify-content-between px-4">
          <span>可能曜日:</span>
          <label class="container-checkbox" v-for="(day,i) in days" :key="i">{{ day }}
            <input type="checkbox" :value="i" v-model="form.possible_days">
            <span class="checkmark"></span>
          </label>
          <button type="button" @click="formSubmit">変更する</button>
        </div>
      </div>
    </div>

    <div class="message-area">
      <div class="overlay" v-if="isShow" @click="isShow = false"></div>
      <div class="message" v-if="isShow" @click="isShow = false">内容を変更しました。</div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  name: "MonthlyAvailability",
  data() {
    return {
      isShow: false,
      form: {
        "remarks": "",
        "possible_days": [],
        "available_monthly_care": "",
        "remarks_for_monthly_care": false,
      },
      days: ['月', '火', '水', '木', '金', '日', '祝日']
    }
  },
  methods: {
    getRecord() {
      axios.get('/school/admission-slot-meta/get').then(response => {
        this.form = response.data.data;
      })
    },
    formSubmit() {
      axios.post('/school/admission-slot-meta/store', this.form).then(response => {
        this.isShow = true;
        this.form = response.data.data;
      })
    },
  },
  mounted() {
    this.getRecord();
  }
}
</script>

<style scoped>

</style>
