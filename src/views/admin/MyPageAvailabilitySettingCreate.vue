<template>
  <div class="my-page-availability-setting">
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-8">
          <div class="availability-calendar">
            <div class="calendar">
              <div class="into">変更したい日付を選択してください。</div>
              <div class="calendar__header">
                <a href="javascript:" class="arrow-btn btn-prevmonth me-3" @click.prevent="changeMonth(false)">Prev</a>
                <div class="calendar__title" @click.prevent="backToToday()">
                  <span class="caption-year">{{ current.year }} 年</span>
                  <span class="caption-month">{{ convertTwoDigits }} 月</span>
                </div>
                <a href="javascript:" class="arrow-btn btn-nextmonth" @click.prevent="changeMonth(true)">Next</a>
              </div>
              <div class="calendar__body">
                <ul class="calendar__heading">
                  <li v-for="(item, i) in heading" :key="i">
                    <div class="calendar__item">{{ item }}</div>
                  </li>
                </ul>
                <ul class="calendar__content">
                  <li v-for="(item, i) in buildCalendar" :key="i">
                    <a v-if="current.month === item.month" href="javascript:" class="calendar__item" :class="{'is-today': item.today === true, 'current': item.current === true}" @click.prevent="getDateData(item)">
                      {{ item.number }}
                      <br>
                      <span v-if="current.month === item.month" class="cal-circle"></span>
                    </a>
                    <a v-else class="calendar__item text-secondary" style="background: #F4F4F4">{{ item.number }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="availability-status">
            <div class="return-submit-btn">
              <router-link :to="{name:'Admin.MyPageAvailabilitySetting'}">もどる</router-link>
              <button type="button" @click="submitForm">変更する</button>
            </div>
            <div class="availability">
              <h5 class="title"><span>{{ convertTwoDigit(current.month) }}/{{ convertTwoDigit(current.date) }}(火)</span> の空き状況</h5>

              <div class="p-2">
                <ul>
                  <li>
                    一時保育の空き:
                    <select v-model="form2.vacancy_type">
                      <option value="">-</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </li>
                  <li>空き詳細</li>
                </ul>

                <div class="d-flex align-items-center total-free-space">
                  <span>必須</span>
                  <span> 総空き数：</span>
                  <input type="text" v-model="form2.vacancy_number" required>
                  <span>名 ／ (定員)12名</span>
                </div>
                <div class="breakdown">内訳 <span>任意</span></div>

                <div class="--form">
                  <div class="d-flex align-items-center justify-content-between">
                    <span>０歳児：</span>
                    <label><input type="text" v-model="form2.age_0">名</label>
                    <span>１歳児：</span>
                    <label><input type="text" v-model="form2.age_1">名</label>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <span>２歳児：</span>
                    <label><input type="text" v-model="form2.age_2">名</label>
                    <span>３歳児：</span>
                    <label><input type="text" v-model="form2.age_3">名</label>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <span>４歳児：</span>
                    <label><input type="text" v-model="form2.age_4">名</label>
                    <span>５歳児：</span>
                    <label><input type="text" v-model="form2.age_5">名</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <monthly-availability></monthly-availability>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../components/adminPartials/Breadcrumb"
import Admin from "../../layouts/Admin";
import moment from "moment";
import axios from "@/axios";
import MonthlyAvailability from "@/views/admin/MonthlyAvailability";

export default {
  name: "MyPageAvailabilitySettingCreate",
  components: {
    MonthlyAvailability,
    Breadcrumb
  },
  data() {
    return {
      admissionSlots: [],
      dataPageName: "空き状況",
      isShow: false,
      form: {
        remarks: "",
      },
      form2: this.initialForm2(),
      current: {
        year: 0,
        month: 0,
        date: 0
      },
      today: {
        year: 0,
        month: 0,
        date: 0
      },
      heading: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    }
  },
  methods: {
    submitForm: function () {
      this.form2.date = this.current.year + "-" + this.current.month + "-" + this.current.date
      axios.post("/school/admission-slot-management/store", this.form2).then(response => {
        console.log(response)
        this.isShow = true
      }).catch(error => {
        this.checkError(error)
      });
    },
    initialForm2: function () {
      return {
        date: "",
        vacancy_type: "",
        vacancy_number: "",
        age_0: "",
        age_1: "",
        age_2: "",
        age_3: "",
        age_4: "",
        age_5: "",
      }
    },
    changeMonth(isNext) {
      let month = this.current.month;
      isNext === true ? (month = month + 1) : (month = month - 1);
      if (month <= 0) {
        month = 12;
        this.current.year = this.current.year - 1;
      }
      if (month > 12) {
        month = 1;
        this.current.year = this.current.year + 1;
      }
      this.current.month = month;
      this.current.date = 1;
      this.form2 = this.initialForm2();
      this.getAdmissionSlotData(month);
    },
    getDateData(data) {
      if (data.none === true) {
        return false;
      } else {
        if (
            data.years === this.current.year &&
            data.month === this.current.month &&
            data.date === this.current.date
        ) {
          return false;
        } else {
          this.current.year = data.years;
          this.current.month = data.month;
          this.current.date = data.date;

          this.form2 = this.initialForm2();
        }
      }
    },
    backToToday() {
      this.current.year = this.today.year;
      this.current.month = this.today.month;
      this.current.date = this.today.date;
    },
    getToday() {
      this.today.year = moment().year();
      this.today.month = moment().month() + 1;
      this.today.date = moment().date();
    },
    convertTwoDigit(digit) {
      let text = "";
      digit < 10
          ? (text = `0${digit}`)
          : (text = digit);
      return text;
    },
    getAdmissionSlotData(month = null) {
      month === null ? (month = this.today.month) : month;
      axios.get(`site/school/availability/${month}/${1}`).then((response) => {
        this.admissionSlots = response.data.data;
      })
    },
  },
  computed: {
    buildCalendar() {
      let myYears = this.current.year;
      let myMonth = this.current.month;
      let myDate = this.current.date;

      let monthText = "";
      myMonth < 10
          ? (monthText = `0${myMonth}`)
          : (monthText = myMonth.toString());

      let dateArray = [];
      let patchNum = 0;
      let totalDate = moment(`${myYears}-${monthText}`).daysInMonth();
      let week = moment(`${myYears}-${monthText}`).format("d");

      for (let i = 0; i < totalDate; i++) {
        let dateNum = i + 1;
        let isToday = false;
        let isCurrent = false;
        let dateText = "";

        if (
            myYears === this.today.year &&
            myMonth === this.today.month &&
            dateNum === this.today.date
        ) {
          isToday = true;
        }

        if (dateNum === myDate) {
          isCurrent = true;
        }

        dateNum < 10
            ? (dateText = `0${dateNum}`)
            : (dateText = dateNum.toString());

        let obj = {
          years: myYears,
          month: myMonth,
          date: dateNum,
          number: dateText,
          today: isToday,
          current: isCurrent
        };
        dateArray.push(obj);
      }

      // complement the previous
      let days = new Date(this.current.year, this.current.month - 1, 0).getDate()
      let i = 0
      let preDay = (days - week) + 1
      for (preDay + 1; preDay <= days; preDay++) {
        let obj = {
          date: preDay,
          number: preDay,
        };
        dateArray.splice(i, 0, obj);
        i++
      }

      // fill in the back
      dateArray.length % 7 === 0 ? (patchNum = 0) : (patchNum = 7 - (dateArray.length % 7));

      for (let i = 0; i < patchNum; i++) {
        let dateNum = i + 1
        let dateText = "";
        dateNum < 10 ? (dateText = `0${dateNum}`) : (dateText = dateNum.toString());

        let obj = {
          date: dateNum,
          number: dateText,
        };
        dateArray.push(obj);
      }
      return dateArray;
    },
    convertTwoDigits() {
      let text = "";
      this.current.month < 10
          ? (text = `0${this.current.month}`)
          : (text = this.current.month);
      return text;
    }
  },
  created() {
    this.getToday();
    this.getAdmissionSlotData();
    this.backToToday();
    this.$emit('update:layout', Admin)
  },
}
</script>

<style lang="scss" scoped>
.--form {
  span {
  }

  input {
    border: 1px solid #D8D8D8;
    border-radius: 5px;
    opacity: 1;
    outline: none;
    padding: 2px 0 0 0;
    width: 54px;
    height: 20px;
    text-align: center;
    font-size: 14px;
    display: inline-block;
    margin-right: 10px;
  }
}
</style>
