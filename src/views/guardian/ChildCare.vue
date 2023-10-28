<template>
  <div class="childcare">
    <router-link :to="{name:'ProceedToReservation'}" class="regeneration-btn">予約へ進む</router-link>

    <div class="container">
      <div class="philosophy">
        <div class="row justify-content-center align-items-center mt-4 mt-md-5">
          <div class="col-md-4 ps-md-5 text-center">
            <img :src="data.info.child_care_policy.philosophy_image_path" alt="EXY" class="img-fluid">
          </div>
          <div class="col-md-8 ps-md-4 mt-3 mt-md-0">
            <h4 class="color-cb3a82">保育理念</h4>
            <div v-html="data.info.child_care_policy.philosophy_description"></div>
          </div>
        </div>
        <div class="row justify-content-center align-items-center mt-4 mt-md-5">
          <div class="col-md-4 ps-md-5 text-center">
            <img :src="data.info.child_care_policy.policy_image_path" alt="EXY" class="img-fluid">
          </div>
          <div class="col-md-8 ps-md-4 mt-3 mt-md-0">
            <h4 class="color-cb3a82">保育方針</h4>
            <div v-html="data.info.child_care_policy.policy_description"></div>
          </div>
        </div>
        <div class="row justify-content-center align-items-center mt-4 mt-md-5">
          <div class="col-md-4 ps-md-5 text-center">
            <img :src="data.info.child_care_policy.goals_image_path" alt="EXY" class="img-fluid">
          </div>
          <div class="col-md-8 ps-md-4 mt-3 mt-md-0">
            <h4 class="color-cb3a82">保育目標</h4>
            <div v-html="data.info.child_care_policy.goals_description"></div>
          </div>
        </div>
      </div>

      <div class="lesson">
        <div class="row">
          <div class="col-6 col-md-3 text-center" v-for="(column, index) in data.info.childcare_columns" :key="index">
            <router-link :to="{name:'ChildcareColumnDetails',params: {uuid: data.info.uuid, id: column.id}}">
              <img :src="column.thumbnail_image" v-if="column.thumbnail_image" alt="EXY" class="img-fluid w-100">
            </router-link>
            <router-link :to="{name:'ChildcareColumnDetails',params: {uuid: data.info.uuid}}" class="mt-2 d-inline-block"><span class="color-cb3a82">#</span> {{ column.title }}</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="annual-events">
      <div class="container">
        <div class="row">
          <h4 class="text-center"><span class="color-cb3a82">#</span> 年間行事</h4>
        </div>
        <div class="row mt-3">
          <div class="col-md-3 text-center">
            <img src="../../assets/images/svg/annual_event1.svg" alt="EXY" class="v-align-unset">
            <img src="../../assets/images/svg/annual_event2.svg" alt="EXY" class="v-align-unset">
          </div>
          <div class="col-md-3 text-center">
            <img src="../../assets/images/svg/annual_event3.svg" alt="EXY" class="v-align-unset">
          </div>
          <div class="col-md-3 text-center">
            <img src="../../assets/images/svg/annual_event4.svg" alt="EXY" class="v-align-unset">
            <img src="../../assets/images/svg/annual_event5.svg" alt="EXY" class="v-align-unset">
          </div>
          <div class="col-md-3 text-center">
            <img src="../../assets/images/svg/annual_event6.svg" alt="EXY" class="v-align-unset">
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="row event-col divider">
              <div class="col-md-2 text-center">
                <p class="fs-1 mb-0 fw-bold col-color-1">4</p>
                <span>Apr</span>
              </div>
              <div class="col-md-10">
                <div v-html="data.info.annual_calendar.month_april"></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row event-col divider">
              <div class="col-md-2 text-center">
                <p class="fs-1 mb-0 fw-bold col-color-2">7</p>
                <span>Jul</span>
              </div>
              <div class="col-md-10">
                <div v-html="data.info.annual_calendar.month_july"></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row event-col divider">
              <div class="col-md-4 text-center">
                <p class="fs-1 mb-0 fw-bold col-color-3">10</p>
                <span>Oct</span>
              </div>
              <div class="col-md-8">
                <div v-html="data.info.annual_calendar.month_october"></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row event-col divider">
              <div class="col-md-2 text-center">
                <p class="fs-1 mb-0 fw-bold col-color-4">1</p>
                <span>Jan</span>
              </div>
              <div class="col-md-10">
                <div v-html="data.info.annual_calendar.month_january"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="row event-col divider">
              <div class="col-md-2 text-center">
                <p class="fs-1 mb-0 fw-bold col-color-1">5</p>
                <span>May</span>
              </div>
              <div class="col-md-10">
                <div v-html="data.info.annual_calendar.month_may"></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row event-col divider">
              <div class="col-md-2 text-center">
                <p class="fs-1 mb-0 fw-bold col-color-2">8</p>
                <span>Aug</span>
              </div>
              <div class="col-md-10">
                <div v-html="data.info.annual_calendar.month_august"></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row event-col divider">
              <div class="col-md-4 text-center">
                <p class="fs-1 mb-0 fw-bold col-color-3">11</p>
                <span>Nov</span>
              </div>
              <div class="col-md-8">
                <div v-html="data.info.annual_calendar.month_november"></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row event-col divider">
              <div class="col-md-2 text-center">
                <p class="fs-1 fw-bold col-color-4 mb-0">2</p>
                <span>Feb</span>
              </div>
              <div class="col-md-10">
                <div v-html="data.info.annual_calendar.month_february"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="row event-col">
              <div class="col-md-2 text-center">
                <p class="fs-1 mb-0 fw-bold col-color-1">6</p>
                <span>Jun</span>
              </div>
              <div class="col-md-10">
                <div v-html="data.info.annual_calendar.month_june"></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row event-col">
              <div class="col-md-2 text-center">
                <p class="fs-1 mb-0 fw-bold col-color-2">9</p>
                <span>Sep</span>
              </div>
              <div class="col-md-10">
                <div v-html="data.info.annual_calendar.month_september"></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row event-col">
              <div class="col-md-4 text-center">
                <p class="fs-1 mb-0 fw-bold col-color-3">12</p>
                <span>Dec</span>
              </div>
              <div class="col-md-8">
                <div v-html="data.info.annual_calendar.month_december"></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row event-col">
              <div class="col-md-2 text-center">
                <p class="fs-1 fw-bold col-color-4 mb-0">3</p>
                <span>Mar</span>
              </div>
              <div class="col-md-10">
                <div v-html="data.info.annual_calendar.month_march"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <curriculum></curriculum>
  </div>
</template>

<script>
import Curriculum from "@/views/guardian/Curriculum";

export default {
  name: "ChildCare",
  components: { Curriculum },
  props: {
    data: Object
  }
}
</script>

<style scoped>
.v-align-unset {
  vertical-align: unset
}
</style>
