<template>
  <div class="my-page-availability-setting">
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-8">
          <div class="availability-calendar">
            <div class="calendar">
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
            <div class="text-right">
              <router-link :to="{name:'Admin.MyPageAvailabilitySetting.Create'}" tag="button">空き状況を変更する</router-link>
            </div>
            <div class="availability">
              <h5 class="title"><span>{{ convertTwoDigit(current.month) }}/{{ convertTwoDigit(current.date) }}(火)</span> の空き状況</h5>
              <div class="p-2">
                <ul>
                  <li>一時保育の空き: {{ availability.vacancy_type }}</li>
                  <li>空き詳細</li>
                </ul>

                <table style="background: #F4F0F2">
                  <tr>
                    <td>総空き数:</td>
                    <td>１名</td>
                    <td>1 /（定員）{{ availability.vacancy_number }}名</td>
                  </tr>
                </table>
                <div class="breakdown">内訳</div>
                <table>
                  <tr>
                    <td>０歳児：</td>
                    <td>{{ availability.age_0 }}</td>
                    <td>名</td>
                    <td>１歳児：</td>
                    <td>{{ availability.age_1 }}</td>
                    <td>名</td>
                  </tr>
                  <tr>
                    <td>２歳児：</td>
                    <td>{{ availability.age_2 }}</td>
                    <td>名</td>
                    <td>３歳児：</td>
                    <td>{{ availability.age_3 }}</td>
                    <td>名</td>
                  </tr>
                  <tr>
                    <td>４歳児：</td>
                    <td>{{ availability.age_4 }}</td>
                    <td>名</td>
                    <td>５歳児：</td>
                    <td>{{ availability.age_5 }}</td>
                    <td>名</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="reservation-list">
              <h5 class="title"><span>{{ convertTwoDigit(current.month) }}/{{ convertTwoDigit(current.date) }}(火)</span> の予約リスト</h5>
              <table>
                <tr>
                  <td>・月極保育</td>
                  <td>...</td>
                  <td>0 件</td>
                </tr>
                <tr>
                  <td>・一時保育</td>
                  <td>...</td>
                  <td>1 件</td>
                </tr>
                <tr>
                  <td>・園見学</td>
                  <td>...</td>
                  <td>1 件</td>
                </tr>
              </table>
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
  name: "MyPageAvailabilitySetting",
  components: {
    MonthlyAvailability,
    Breadcrumb
  },
  data() {
    return {
      availability: {},
      admissionSlots: [],
      dataPageName: "空き状況",
      isShow: false,
      form: {
        "remarks": "",
        "possible_days": [],
        "available_monthly_care": "",
        "remrks_for_monthly_care": false,
      },
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
      this.getAdmissionSlotData(month);
    },
    getDateData(data) {
      if (data.none === true) {
        return false;
      } else {
        if (data.years === this.current.year && data.month === this.current.month && data.date === this.current.date) {
          return false;
        } else {
          this.current.year = data.years;
          this.current.month = data.month;
          this.current.date = data.date;
        }

        this.availability = this.admissionSlots

        let current = `${data.years}-${data.month > 9 ? data.month : "0" + data.month}-${data.date > 9 ? data.date : "0" + data.date}`;

        this.admissionSlots.forEach(slot => {
          if (slot.date === current) {
            this.availability = slot;
          }
        });
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
  }
  ,
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
    }
    ,
    convertTwoDigits() {
      let text = "";
      this.current.month < 10
          ? (text = `0${this.current.month}`)
          : (text = this.current.month);
      return text;
    }
  }
  ,
  created() {
    this.getToday();
    this.getAdmissionSlotData();
    this.backToToday();
    this.$emit('update:layout', Admin)
  }
  ,
}
</script>

<style lang="scss" scoped>

</style>
