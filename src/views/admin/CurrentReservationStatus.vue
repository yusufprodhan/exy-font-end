<template>
  <div class="exy-shadow-dashboard col-md-6 ps-4">
    <p class="text-center text-lg fw-bold pt-3 ls-4">現在の予約状況</p>

    <div class="px-4">
      <vue-cal style="min-height: 500px"
               :time="false"
               active-view="month"
               :events="events"
               locale="ja"
               :disable-views="['years', 'year', 'week','day']"/>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/i18n/ja'
import 'vue-cal/dist/vuecal.css'

export default {
  name: "CurrentReservationStatus",
  components: { VueCal },
  data() {
    return {
      events: [
        {
          start: '2022-02-20',
          end: '2022-02-25'
        },
        {
          start: '2022-02-23',
          end: '2022-02-25'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.ls-4 {
  letter-spacing: 4px;
}

.vuecal__title-bar {
  background: transparent;

  button.vuecal__arrow.vuecal__arrow--prev,
  button.vuecal__arrow.vuecal__arrow--next {
    background: #333;
    color: #FFF;
    margin: 0;
    font-size: 18px;
    border-radius: 3px;
    height: 28px;
    width: 30px;
  }
}

.vuecal {
  box-shadow: inherit;
}

.vuecal__menu {
  display: none;
}

.vuecal__flex {
  flex-direction: row;
  overflow: hidden;
  padding-bottom: 5px;
}

.vuecal__cell--out-of-scope {
  background: #F4F4F4;
  color: black;
}

.vuecal__cell {
  padding: 5px 0 0 0;

  .vuecal__flex[column] {
    flex-direction: inherit;
  }
}

.vuecal__cell:before {
  border: 1px solid hsl(0deg 1% 38% / 25%);
}

.vuecal__cell--selected {
  background: transparent;
}

.vuecal__cell-events-count {
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  min-width: 19px;
  line-height: 18px;
  color: #CB3A82;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 2px solid;
  padding-bottom: 15px;
  height: 0;
  background: transparent;
  border-radius: inherit;
}

</style>
