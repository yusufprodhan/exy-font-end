<template>
  <div class="admin-nav">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{name:'Admin.MyPage'}">
          <img src="../../assets/images/svg/user.svg" alt="EXY">
          <span class="ps-3 text-lg fw-bold">{{ userName }}</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTop">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item" @click="activeClass=0">
              <router-link class="nav-link " :to="{name:'Admin.MyPageNotice'}">
                <div class="position-relative">
                  <img src="../../assets/images/svg/notification.svg" alt="EXY">
                  <span class="position-absolute top-0 start-70 translate-middle badge border border-light rounded-circle bg-danger "><span class="">3</span></span>
                </div>
                <div class="br"></div>
                <span class="text-xs">お知らせ</span>
              </router-link>
            </li>
            <li class="nav-item" @click="activeClass=0">
              <router-link class="nav-link" :to="{name:'Admin.MyPageChat'}">
                <div class="position-relative">
                  <img src="../../assets/images/svg/message.svg" alt="EXY">
                  <span class="position-absolute top-0 start-75 translate-middle badge border border-light rounded-circle bg-danger "><span class="">2</span></span>
                </div>
                <div class="br"></div>
                <span class="text-xs">トーク</span>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" @click="activeClass=0" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../../assets/images/svg/setting.svg" alt="EXY">
                <div class="br"></div>
                <span class="text-xs">園情報設定</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark opacity-1" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item text-center" :to="{name:'Admin.GardenBasicInformation'}">園基本情報設定</router-link>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <router-link class="dropdown-item text-center" :to="{name:'Admin.FixedPhraseSetting'}">定型文設定</router-link>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <router-link class="dropdown-item text-center" :to="{name:'Admin.NurserySchoolMyPageSettings'}">ユーザー情報</router-link>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <router-link class="dropdown-item text-center" :to="{name:'Admin.NurserySchoolMyPageSettings'}">通知設定</router-link>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <button type="button" class="dropdown-item text-center" @click="logout"><i class="fa fa-lock"></i> ログアウト</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    </nav>
    <div class="row p-0 nav-collapse w-100 m-0">
      <div class="col-md-6 p-0">
        <a class="btn btn-collapse w-100 py-2 fw-bold" @click="activeClass==0 ? activeClass=1 : activeClass=0" :class="[ activeClass === 1 ? 'active' : '', activeClass === 2 ? 'btn-collapse-3' : '' ]">
          キガルニホイク
        </a>
      </div>
      <div class="col-md-6 p-0">
        <a class="btn btn-collapse-1 w-100 py-2" @click="activeClass==0 ? activeClass=2 : activeClass=0" :class="[ activeClass === 2 ? 'active1' : '', activeClass === 1 ? 'btn-collapse-2' : '']">
          キガルニホイクシ
        </a>
      </div>
    </div>
    <div @click="activeClass=0" v-if="activeClass==1" class="row position-absolute collapse bg-white w-100 nav-collapse-body nav__collapse pt-5 show" id="collapseExample">
      <div class="col-1 text-center ps-4 position-relative">
        <div class="inner-2 w-100">
          <img src="../../assets/images/svg/clock.svg" alt="EXY" class="image-1">
          <p class="m-3 pt-5"></p>
        </div>
        <router-link :to="{name:'Admin.MyPageChildcareReport'}">
          <div class="pt-2 inner-1  position-absolute">
            <img src="../../assets/images/svg/clock.svg" alt="EXY" class="image-1">
            <p class="text-xs pt-3">保育開始・完了報告</p>
          </div>
        </router-link>
      </div>
      <div class="col-1 text-center position-relative">
        <div class="inner-2 w-100">
          <img src="../../assets/images/svg/note.svg" alt="EXY" class="w-50">
          <p class="m-2 pt-5"></p>
        </div>
        <router-link :to="{name:'Admin.NurserySchoolMyPageReservationList'}">
          <div class="pt-2 inner-1 position-absolute">
            <img src="../../assets/images/svg/note.svg" alt="EXY" class="w-50">
            <p class="text-xs pt-3">予約リスト</p>
          </div>
        </router-link>
      </div>
      <div class="col-1 text-center position-relative">
        <div class="inner-2 w-100">
          <img src="../../assets/images/svg/baby-emoji.svg" alt="EXY" class="w-75">
          <p class="m-2 pt-5"></p>
        </div>
        <router-link :to="{name:'Admin.ChildMeasurementInformation'}">
          <div class="pt-2 inner-1  position-absolute">
            <img src="../../assets/images/svg/baby-emoji.svg" alt="EXY" class="w-75">
            <p class="text-xs pt-3">園児情報</p>
          </div>
        </router-link>
      </div>
      <div class="col-1 text-center position-relative">
        <div class="inner-2 w-100">
          <img src="../../assets/images/svg/calculator.svg" alt="EXY" class="w-75">
          <p class="m-2 pt-5"></p>
        </div>
        <router-link :to="{name:'Admin.MyPageSalesManagement'}">
          <div class="pt-2 inner-1  position-absolute">
            <img src="../../assets/images/svg/calculator.svg" alt="EXY" class="w-75">
            <p class="text-xs pt-3">売上管理</p>
          </div>
        </router-link>
      </div>
      <div class="col-1 text-center position-relative">
        <div class="inner-2 w-100">
          <img src="../../assets/images/svg/note-fill.svg" alt="EXY" class="image-1">
          <p class="m-2 pt-5"></p>
        </div>
        <router-link :to="{name:'Plan.page'}">
          <div class="pt-2 inner-1  position-absolute">
            <img src="../../assets/images/svg/note-fill.svg" alt="EXY" class="image-1">
            <p class="text-xs pt-3">記録と計画</p>
          </div>
        </router-link>
      </div>
      <div class="col-1 text-center position-relative">
        <div class="inner-2 w-100">
          <img src="../../assets/images/svg/calendar.svg" alt="EXY" class="image-1">
          <p class="m-2 pt-5"></p>
        </div>
        <router-link :to="{name:'Admin.MyPageAvailabilitySetting'}">
          <div class="pt-2 inner-1  position-absolute">
            <img src="../../assets/images/svg/calendar.svg" alt="EXY" class="image-1">
            <p class="text-xs pt-3">空き状況設定</p>
          </div>
        </router-link>
      </div>
      <div class="col-1 text-center position-relative">
        <div class="inner-2 w-100">
          <img src="../../assets/images/svg/man-calendar.svg" alt="EXY" class="image-1">
          <p class="m-2 pt-5"></p>
        </div>
        <router-link :to="{name:'Admin.MyPageReviewList'}">
          <div class="pt-2 inner-1  position-absolute">
            <img src="../../assets/images/svg/man-calendar.svg" alt="EXY" class="image-1">
            <p class="text-xs pt-3">口コミ一覧</p>
          </div>
        </router-link>
      </div>
      <div class="col-1 text-center position-relative">
        <div class="inner-2 w-100">
          <img src="../../assets/images/svg/currency.svg" alt="EXY" class="image-1">
          <p class="m-2 pt-5"></p>
        </div>
        <router-link :to="{name:'Admin.MyPagePricePlanList'}">
          <div class="pt-2 inner-1  position-absolute">
            <img src="../../assets/images/svg/currency.svg" alt="EXY" class="image-1">
            <p class="text-xs pt-3">料金プラン</p>
          </div>
        </router-link>
      </div>
    </div>
    <div @click="activeClass=0" v-if="activeClass==2" class="row position-absolute collapse bg-white w-100 nav-collapse-body-1 pt-4 show" id="collapseExample1">
      <div class="col-2"></div>
      <div class="col-2"></div>
      <div class="col-2"></div>
      <div class="col-2">
        <img src="../../assets/images/svg/notification-1.svg" alt="EXY" class="w-50">
        <p class="ps-0 pt-4">お知らせ</p>
      </div>
      <div class="col-2">
        <img src="../../assets/images/svg/contact.svg" alt="EXY" class="w-50">
        <p class="ps-0 pt-4">求人管理</p>
      </div>
      <div class="col-2">
        <img src="../../assets/images/svg/hand-shake.svg" alt="EXY" class="w-75">
        <p class="ps-0 pt-3">人材をさがす</p>
      </div>
      <div class="col-2">
        <img src="../../assets/images/svg/hand-shake.svg" alt="EXY" class="w-75">
        <p class="ps-0 pt-3">人材をさがす</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "NavbarTop",
  data() {
    return {
      activeClass: 0,
    }
  },
  computed: {
    userName() {
      return this.$store.getters.userName
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({ name: 'Login' })
      }).catch(error => {
        this.checkError(error)
      })
    }
  }
}
</script>

<style scoped>
.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
  background: transparent;
}
</style>
