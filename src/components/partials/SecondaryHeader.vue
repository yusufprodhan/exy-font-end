<template>
  <div class="mypage-nav mt-3 mb-3">
      <div class="d-flex justify-content-between align-items-center gap-10">
        <div class="profile">
          <div>
            <img src="../../assets/images/mypage/daiga-ellaby--0KARP5Jh_8-unspl.png" alt="EXY">
          </div>
          <div class="d-flex flex-column justify-content-center">
            <p class="m-0 text-xl fw-bold mb-2">{{ user.parent.furigana_name }}</p>
            <p class="m-0 text-base fw-bold"><span class="rounded-circle me-3 px-2 pt-2 pb-1 nav-badge text-center">P</span>{{ user.parent.point }}</p>
          </div>
        </div>
        <div class="menu">
          <div class="topVerticalMenu">
            <div>
              <router-link :to="{name:'Mypage.Home'}" active-class="active">
                <p class="m-0 fw-bold">ホーム</p>
                <p class="m-0 text-sm">home</p>
              </router-link>
            </div>
            <div>
              <span class="badge">2</span>
              <router-link :to="{name:'Talk'}" exact-active-class="exact-active">
                <p class="m-0 fw-bold">トーク</p>
                <p class="m-0 ps-2 text-sm">talk</p>
              </router-link>
            </div>
            <div>
              <router-link :to="{name:'Reservation'}" exact-active-class="exact-active">
                <p class="m-0 fw-bold">予約一覧</p>
                <p class="m-0 ps-2 text-sm">reserve</p>
              </router-link>
            </div>
            <div>
              <router-link :to="{name:'FavoriteGarden'}" exact-active-class="exact-active">
                <p class="m-0  fw-bold">お気に入り</p>
                <p class="m-0 ps-2 text-sm">favorite</p>
              </router-link>
            </div>
            <div>
              <router-link :to="{name:'Notice'}" exact-active-class="exact-active">
                <p class="m-0 pe-2 fw-bold">お知らせ</p>
                <p class="m-0 text-sm">information</p>
              </router-link>
            </div>
            <div>
              <router-link :to="{name:'Mypage.Profile'}" exact-active-class="exact-active">
                <p class="m-0 text-center fw-bold">設定</p>
                <p class="m-0 text-center text-sm">setting</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "SecondaryHeader",
    data(){
      return{
        user: JSON.parse(localStorage.getItem("user"))
      }
    },
    created() {
      this.checkIfUserDataExists();
    }
  };
</script>

<style lang="scss" scoped>
  .gap-10{
    gap: 10px;
  }

  .mypage-nav{
    box-sizing: border-box;
    margin: 0 110px;
    .profile{
      display: flex;
      flex-direction: row;
      flex: 30rem;
      gap: 10px;
    }
    .menu{
      flex: 70rem;
    }
    .nav-badge {
        background-color: #CCCC3B;
        color: #FFFFFF;
        border-radius: 50% !important;
    }
  }

  .topVerticalMenu{
    display: flex;
    justify-content: flex-end;
    div{
      margin-left: 2rem;
      position: relative;
      span.badge{
        color: #CB3A82;
        background: #FBEEF5 0% 0% no-repeat padding-box;
        text-align: center;
        position: absolute;
        height: 25px;
        line-height: 18px;
        border-radius: 50%;
        top: -16px;
        right: -17px;
      }
    }
    a{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: right;
      padding-left: 10px;
      p{
        white-space: nowrap;
      }
      p:nth-child(1){
        margin-bottom: 5px !important;
      }
    }
    a.active{
      border-left: 2px solid #CB3A82;
    }
  }
</style>