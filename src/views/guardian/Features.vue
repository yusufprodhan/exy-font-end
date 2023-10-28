<template>
  <div class="features">
    <div class="bg-light py-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 gy-3 text-center">
          <div class="col" v-for="(tag, index) in data.schoolTags" :key="index">
            <a class="bg-white rounded-3 d-flex align-items-center justify-content-center py-3 fw-bold text-sm text-center cursor-pointer color-cb3a82" :class="[data.tag.id === tag.id ? 'text-dark' : '']" @click="tagSwitch(index)">{{ tag.stg_tag.name }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="tag-detail position-relative">
      <div class="container py-6-rem">
        <div class="row">
          <div class="col-md-5 pe-md-4 pb-5 pb-md-0">
            <img :src="data.tag.image_path" alt="EXY" class="img-fluid w-100"/>
          </div>
          <div class="col-md-7 pe-md-4">
            <button type="button">{{ data.tag.stg_tag.name }}</button>
            <h3>{{ data.tag.title }}</h3>
            <div v-html="data.tag.description"></div>
          </div>
        </div>
      </div>

      <router-link :to="{ name: 'ProceedToReservation' }" class="regeneration-btn">予約へ進む</router-link>
    </div>

    <div class="child-care">
      <div class="container">
        <div class="row">
          <div class="col-md-6 pe-5">
            <h4>保育理念</h4>
            <div class="mb-4" v-html="data.info.child_care_policy.philosophy_description"></div>
            <h4>保育方針</h4>
            <div class="mb-4" v-html="data.info.child_care_policy.policy_description"></div>
            <h4>保育目標</h4>
            <div v-html="data.info.child_care_policy.goals_description"></div>
          </div>
          <div class="col-md-6 ps-md-5">
            <div class="bg-white">
              <table>
                <tr>
                  <td>住所</td>
                  <td>
                    <p>
                      {{ `${data.info.prefecture.name} ${data.info.city}` }}
                    </p>
                    <p>
                      {{ data.info.building_name }}
                      <a class="border p-1 ms-2 text-xss">map</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>開園時間</td>
                  <td>
                    <span v-for="(openHour, index) in data.info.opening_days" :key="index">
                      {{ `${openHour.start_opening_hour} : ${openHour.start_opening_minute} 〜 ${openHour.end_opening_hour} : ${openHour.end_opening_minute}` }}
                      （
                      {{
                        `${openHour.start_extended_childcare_hour} : ${openHour.start_extended_childcare_minute} 〜 ${openHour.end_extended_childcare_hour} : ${openHour.end_extended_childcare_minute}`
                      }}
                      延長保育）
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>開園日</td>
                  <td>
                    <span
                        v-for="(oDay, index) in data.info.opening_days"
                        :key="index"
                    >
                      {{ oDay.stg_open_days.name }}
                      <span
                          v-if="
                          index !==
                          Object.keys(data.info.opening_days).length - 1
                        "
                      >-
                      </span>
                    </span>
                    （日曜日・祝日 休み）
                  </td>
                </tr>
                <tr>
                  <td>定員</td>
                  <td>{{ data.info.capacity }}名</td>
                </tr>
                <tr>
                  <td>預かり年齢</td>
                  <td>0歳児（2ヶ月）〜5歳児</td>
                </tr>
                <tr>
                  <td>
                    <p>慣らし保育</p>
                    <router-link
                        :to="{ name: 'Faqs' }"
                        class="text-xss color-707070"
                    >
                      慣らし保育 とは？＞
                    </router-link
                    >
                  </td>
                  <td>
                    <p>
                      目安期間 ：{{ data.info.childcare_time_on_the_first_day }}
                    </p>
                    <p>初日の保育時間：{{ data.info.estimated_period }}</p>
                    <p class="small ps-0">
                      ※あくまで目安ですので、お子さまの体調や保護者さまのご都合を考慮し
                      調整いたします。
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Point start-->
    <div class="container">
      <div class="row text-center pt-5">
        <p class="fw-bolder">
          <img src="../../assets/images/svg/title-left-black.svg" alt="EXY" style="padding-right: 10px; vertical-align: unset"/>保育園のココが知りたい
          <img src="../../assets/images/svg/title-right-black.svg" alt="EXY" style="padding-left: 10px; vertical-align: unset"/>
          <br/><span class="color-cb3a82">#</span> 5 POINT
        </p>
      </div>

      <point :points="data.info.school_giving_points"></point>
    </div>

    <div class="availability-calendar-outer">
      <div class="container">
        <div class="text-center fw-bold fs-4">
          <span class="color-cb3a82">#</span> 保育園の空き状況
        </div>

        <div class="calendar__header">
          <a href="javascript:" class="arrow-btn btn-prevmonth" @click.prevent="changeMonth(false)">Prev</a>
          <div class="calendar__title">
            <span class="caption-year">{{ current.year }} 年</span>
            <span class="caption-month">{{ convertTwoDigits }} 月</span>
            <span>{{ monthNames[this.current.month - 1] }}</span>
          </div>
          <a href="javascript:" class="arrow-btn btn-nextmonth" @click.prevent="changeMonth(true)">Next</a>
        </div>

        <div class="availability-calendar">
          <div class="calendar">
            <div class="calendar__body">
              <ul class="calendar__heading">
                <li v-for="(item, i) in heading" :key="i">
                  <div class="calendar__item">{{ item }}</div>
                </li>
              </ul>
              <ul class="calendar__content" v-if="!loading">
                <li v-for="(item, i) in buildCalendar" :key="i">
                  <a class="calendar__item" :class="{'text-secondary':current.month !== item.month}">
                    {{ item.number }}
                    <br/>
                    <span v-if="current.month === item.month">
                      <span v-if="admissionSlots[item.date - 1].vacancy_number" class="cal-dashed"></span>
                      <span v-else class="cal-circle"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <p class="mb-0">◯ 月極保育 ： ー</p>
          <p class="mb-0">◯ 園見学 ： 月曜日・水曜日・金曜日にてご見学可能。</p>
        </div>
      </div>
    </div>

    <div class="review">
      <div class="container">
        <div class="row">
          <p class="text-center">
            <img src="../../assets/images/svg/title-left-black.svg" alt="EXY" style="padding-right: 10px; vertical-align: unset"/>
            ほんとのとこどうなの？
            <img src="../../assets/images/svg/title-right-black.svg" alt="EXY" style="padding-left: 10px; vertical-align: unset"/>
            <br/><span class="fs-4" style="color: #cb3a82">#</span>
            <span class="fs-4 fw-bold"> みんなの口コミ </span>
          </p>
        </div>
        <div class="row mt-2 top-bar">
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
                <p class="text-center m-0">
                  雰囲気 <span class="rv-point fw-bold">4.0</span>
                </p>
              </div>
              <div class="col-md-4 left-border">
                <p class="text-center m-0">
                  雰囲気 <span class="rv-point fw-bold">4.0</span>
                </p>
              </div>
              <div class="col-md-4 left-border">
                <p class="text-center m-0">
                  雰囲気 <span class="rv-point fw-bold">4.0</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="#">
          <div class="row mt-3 row-1">
            <div class="col-md-2 mt-2 text-center">
              <img
                  src="../../assets/images/guardian/Mask_Group_26.png"
                  alt="EXY"
              />
            </div>
            <div class="col-md-10">
              <div class="row me-1 row-11">
                <p class="fw-bold pt-2 m-0">
                  2021年2月利用者<span style="padding-left: 40px"
                >一時保育ー1歳児プラン
                  </span>
                </p>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <p class="m-0">
                    <span class="">総合</span>
                    <span class="fw-bold rv-point">4</span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-4">
                      <p class="text-center m-0">
                        雰囲気 <span class="rv-point fw-bold">4</span>
                      </p>
                    </div>
                    <div class="col-md-4 left-border">
                      <p class="text-center m-0">
                        雰囲気 <span class="rv-point fw-bold">4</span>
                      </p>
                    </div>
                    <div class="col-md-4 left-border">
                      <p class="text-center m-0">
                        雰囲気 <span class="rv-point fw-bold">4</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-2">
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れていますこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            </p>
          </div>
          <div class="row mt-3 row-1">
            <div class="col-md-2 mt-2 text-center">
              <img src="../../assets/images/guardian/Mask_Group_33.png" alt="EXY"/>
            </div>
            <div class="col-md-10">
              <div class="row me-1 row-11">
                <p class="fw-bold pt-2 m-0">
                  2021年2月利用者<span style="padding-left: 40px"
                >一時保育ー1歳児プラン
                  </span>
                </p>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <p>
                    <span class="">総合</span>
                    <span class="fw-bold rv-point">4</span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-4">
                      <p class="text-center m-0">
                        雰囲気 <span class="rv-point fw-bold">4</span>
                      </p>
                    </div>
                    <div class="col-md-4 left-border">
                      <p class="text-center m-0">
                        雰囲気 <span class="rv-point fw-bold">4</span>
                      </p>
                    </div>
                    <div class="col-md-4 left-border">
                      <p class="text-center m-0">
                        雰囲気 <span class="rv-point fw-bold">4</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-2">
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れていますこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            </p>
          </div>
          <div class="row mt-3 row-1">
            <div class="col-md-2 mt-2 text-center">
              <img
                  src="../../assets/images/guardian/Mask_Group_34.png"
                  alt="EXY"
              />
            </div>
            <div class="col-md-10">
              <div class="row me-1 row-11">
                <p class="fw-bold pt-2 m-0">
                  2021年2月利用者<span style="padding-left: 40px"
                >一時保育ー1歳児プラン
                  </span>
                </p>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <p>
                    <span class="">総合</span>
                    <span class="fw-bold rv-point">4</span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-4">
                      <p class="text-center m-0">
                        雰囲気 <span class="rv-point fw-bold">4</span>
                      </p>
                    </div>
                    <div class="col-md-4 left-border">
                      <p class="text-center m-0">
                        雰囲気 <span class="rv-point fw-bold">4</span>
                      </p>
                    </div>
                    <div class="col-md-4 left-border">
                      <p class="text-center m-0">
                        雰囲気 <span class="rv-point fw-bold">4</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div class="row mt-4 row-3">
          <div class="col-md-2">
            <p class="fw-bold">検索条件</p>
          </div>
          <div class="col-md-10">
            <p>アレルギー対応<span class="divider">/</span>習い事<span class="divider">/</span>手ぶら登園<span class="divider">/</span>こだわり給食<span class="divider">/</span>送迎サービス<span class="divider">/</span>英語教育<span class="divider">/</span>幼児教<span class="divider">/</span>就学前教育<span class="divider">/</span>運動教育</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Point from "@/views/guardian/Point";
import moment from "moment";
import Admin from "@/layouts/Admin";
import axios from "../../axios";

export default {
  name: "Features",
  components: { Point },
  props: {
    data: Object,
  },
  data() {
    return {
      admissionSlots: [],
      dataPageName: "空き状況",
      loading: true,
      current: {
        year: 0,
        month: 0,
        date: 0,
      },
      today: {
        year: 0,
        month: 0,
        date: 0,
      },
      heading: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  methods: {
    tagSwitch(index) {
      this.data.tag = this.data.schoolTags[index];
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
      this.getAdmissionSlotData(month);
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
      digit < 10 ? (text = `0${digit}`) : (text = digit);
      return text;
    },

    getAdmissionSlotData(month = null) {
      month === null ? (month = this.today.month) : month;
      axios.get(`site/school/availability/${month}/${this.data.info.id}`).then((response) => {
        this.admissionSlots = response.data.data;
        this.loading = false
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

        dateNum < 10 ? (dateText = `0${dateNum}`) : (dateText = dateNum.toString());

        let obj = {
          years: myYears,
          month: myMonth,
          date: dateNum,
          number: dateText,
          today: isToday,
          current: isCurrent,
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
    },
  },
  created() {
    this.getToday();
    this.getAdmissionSlotData();
    this.backToToday();
    this.$emit("update:layout", Admin);
  },
};
</script>

<style lang="scss" scoped>
.calendar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  margin: 30px 0 0;
  font-size: 26px;

  .caption-year,
  .caption-month {
    margin-right: 35px;
  }

  .arrow-btn {
    display: flex;
    font-size: 0rem;
    border: 1px solid #f2f2f2;
    padding: 8px 15px;
    background: #fff;

    &::before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
    }

    .btn-nextmonth {
      margin-left: 10px;
    }

    &.btn-prevmonth::before {
      border-width: 10px 13px 10px 0;
      border-color: transparent #dddddd transparent transparent;
    }

    &.btn-nextmonth::before {
      border-width: 10px 0 10px 13px;
      border-color: transparent transparent transparent #dddddd;
    }
  }
}
</style>
