<template>
    <div class="float-start left-column left-sidebar">
        <ul class="list-unstyled m-0">
          <router-link :to="{name:'Mypage.Profile'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer" exact-active-class="exact-active">
            <i class="fa fa-angle-right me-1"></i>
            プロフィール
          </router-link>
          <router-link :to="{name:'Mypage.Condition'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer" exact-active-class="exact-active">
            <i class="fa fa-angle-right me-1"></i>
            条件設定
          </router-link>
          <router-link :to="{name:'Mypage.ChildInformation'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer" exact-active-class="exact-active">
            <i class="fa fa-angle-right me-1"></i>
            お子さま情報
          </router-link>
          <router-link :to="{name:'Mypage.PickupPersonRegistration'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer" exact-active-class="exact-active">
            <i class="fa fa-angle-right me-1"></i>
            送迎者登録
          </router-link>
          <router-link :to="{name:'Mypage.Security'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer active" active-class="active">
            <i class="fa fa-angle-right me-1"></i>
            セキュリティ
          </router-link>
          <router-link :to="{name:'Mypage.NotificationSetting'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer" exact-active-class="exact-active">
            <i class="fa fa-angle-right me-1"></i>
            通知
          </router-link>
          <li class="bg-light text-base px-3 py-2 mb-1 cursor-pointer" @click="logout"><i class="fa fa-angle-right me-1"></i>ログアウト</li>
        </ul>
    </div>
</template>

<script>
    // import router from "../router/index"

    export default {
        name: "LeftSidebar",
        props: {
            sideNavActive: Number
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
