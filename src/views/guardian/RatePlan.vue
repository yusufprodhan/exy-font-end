<template>
  <div class="rate-plan">
    <router-link :to="{name:'ProceedToReservation'}" class="regeneration-btn">予約へ進む</router-link>

    <h5>体験保育（一時保育）</h5>

    <div class="container">
      <div class="plan-item" v-for="(plan,i) in data.plans1" :key="i">
        <div class="d-flex align-items-center justify-content-between">
          <h4>{{ plan.name }}</h4>
          <h6 v-if="plan.plan_month && plan.plan_month.name">
            ¥ {{ plan.price| numberWithCommas }} /
            {{ plan.plan_month.name }}
          </h6>
        </div>
        <div></div>
        <div class="d-flex align-items-center justify-content-between">
          <p>{{ plan.comment }}</p>
          <div></div>
        </div>
      </div>
    </div>

    <h5 class="mt-5">月極保育</h5>
    <div class="container">
      <div class="plan-item" v-for="(plan,i) in data.plans2" :key="i">
        <div class="d-flex align-items-center justify-content-between">
          <h4>{{ plan.name }}</h4>
          <h6 v-if="plan.plan_month && plan.plan_month.name">
            ¥ {{ plan.price| numberWithCommas }} /
            {{ plan.plan_month.name }}
          </h6>
        </div>
        <div></div>
        <div class="d-flex align-items-center justify-content-between">
          <p>{{ plan.comment }}</p>
          <div></div>
        </div>
      </div>
    </div>

    <h5>園見学</h5>
    <div class="container">
      <div class="plan-item" v-for="(plan,i) in data.plans3" :key="i">
        <div class="d-flex align-items-center justify-content-between">
          <h4>{{ plan.name }}</h4>
          <h6 v-if="plan.plan_month && plan.plan_month.name">
            ¥ {{ plan.price| numberWithCommas }} /
            {{ plan.plan_month.name }}
          </h6>
        </div>
        <div></div>
        <div class="d-flex align-items-center justify-content-between">
          <p>{{ plan.comment }}</p>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatePlan",
  props: {
    data: Object
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.plan-item {
  border: 1px solid #BABABA;
  margin: 0 0 25px;
  padding: 15px 20px;

  h4, h6 {
    font: normal normal bold 20px/34px YuGothic;
    letter-spacing: 0;
    color: #000000;
    opacity: 1;
    margin: 0;
  }

  h6 {
    font: normal normal bold 20px/34px YuGothic;
  }

  p {
    font: normal normal medium 14px/24px YuGothic;
    letter-spacing: 0;
    color: #333333;
    opacity: 1;
    margin: 0;
  }
}
</style>
