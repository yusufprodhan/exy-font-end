<template>
  <div class="notification-setting-parent">
    <div class="overflow-hidden mb-5">
      <!-- right column -->
      <div class="float-start mb-5 w-100">
        <div class="hr-title fw-bold text-2xl">通知設定</div>
        <!-- content -->
        <div class="mt-4">
          <div class="border border-3 p-4" v-for="(notification,index) in notifications" :key="index">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <div>{{ notification.title }}</div>
                <div class="mt-2">{{ notification.description }}</div>
              </div>
              <div class="d-flex flex-row align-items-center" style="margin-left: 10px;gap: 5px;">
                <div>OFF</div>
                <label class="switch" :for="'checkbox_'+notification.title">
                  <input type="checkbox" :id="'checkbox_'+notification.title" :name="notification.title" :checked="notification.actived"/>
                  <span class="slider round"></span>
                </label>
                <div>ON</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frontend from "../../../layouts/Frontend.vue";

export default {
  name: "NotificationSetting",
  data() {
    return {
      notifications:[
        {
          title: '保育園だより',
          description: '※あなたのご近所の保育園が登録したり、お気に入り園に空きが出た場合、メールでお知らせします。',
          actived: true
        },
        {
          title: 'ニュースレター',
          description: '※キャンペーンやアンケートなどの最新情報を定期的にメールでお届けします。',
          actived: false
        }
      ]
    }
  },
  created() {
    this.$emit('update:layout', Frontend)
  }
};
</script>

<style lang="scss">
.switch {
  display: inline-block;
  height: 24px;
  position: relative;
  width: 40px;
}

.switch input {
  display:none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 18px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 18px;
}

input:checked + .slider {
  background-color: #84C942;
}

input:checked + .slider:before {
  transform: translateX(14px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
