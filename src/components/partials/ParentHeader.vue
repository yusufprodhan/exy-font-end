<template>
  <div class="mypage-nav mt-3 mb-3">
      <div class="d-flex justify-content-between align-items-center gap-10 md-responsive">
        <div class="profile">
          <div>
            <img src="../../assets/images/mypage/daiga-ellaby--0KARP5Jh_8-unspl.png" alt="EXY">
          </div>
          <div class="d-flex flex-column justify-content-center">
            <p class="m-0 text-xl fw-bold mb-2 white-space">{{ user.details.furigana_name }}</p>
            <p class="m-0 text-base fw-bold"><span class="rounded-circle me-3 px-2 pt-2 pb-1 nav-badge text-center">P</span>{{ user.details.point }}</p>
          </div>
        </div>
        <div class="menu">
          <div class="topVerticalMenu">
            <router-link :to="{name:'Mypage.Home'}" active-class="active" @click.native="getParentLatestData">
              <div>
                <p class="m-0 fw-bold">ホーム</p>
                <p class="m-0 text-sm">home</p>
              </div>
            </router-link>
            <router-link :to="{name:'Talk'}" exact-active-class="exact-active" @click.native="getParentLatestData">
              <span class="badge">2</span>
              <div>
                <p class="m-0 fw-bold">トーク</p>
                <p class="m-0 ps-2 text-sm">talk</p>
              </div>
            </router-link>
            <router-link :to="{name:'Reservation'}" exact-active-class="exact-active" @click.native="getParentLatestData">
              <div>
                <p class="m-0 fw-bold">予約一覧</p>
                <p class="m-0 ps-2 text-sm">reserve</p>
              </div>
            </router-link>
            <router-link :to="{name:'Mypage.FavoriteGarden'}" exact-active-class="exact-active" @click.native="getParentLatestData">
              <div>
                <p class="m-0  fw-bold">お気に入り</p>
                <p class="m-0 ps-2 text-sm">favorite</p>
              </div>
            </router-link>
            <router-link :to="{name:'Notice'}" exact-active-class="exact-active" @click.native="getParentLatestData">
              <div>
                <p class="m-0 pe-2 fw-bold">お知らせ</p>
                <p class="m-0 text-sm">information</p>
              </div>
            </router-link>
            <router-link :to="{name:'Mypage.Profile'}" exact-active-class="exact-active" @click.native="getParentLatestData">
              <div>
                <p class="m-0 text-center fw-bold">設定</p>
                <p class="m-0 text-center text-sm">setting</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "../../axios";
export default {
  name: "ParentHeader",
  data(){
    return{
      user: {
        details: {
          furigana_name: '',
          point: ''
        }
      }
    }
  },
  created(){
    this.getParentLatestData();
  },
  methods:{
    getParentLatestData(){
      axios.get('/parent').then((res) => {
        this.user = res.data;
      }).catch(error => {
        this.checkError(error)
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .white-space{
    white-space: nowrap;
  }
  .gap-10{
    gap: 10px;
  }
  .mypage-nav{
    box-sizing: border-box;
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

  .topVerticalMenu
  {
    display: flex;
    justify-content: flex-end;
    a
    {
      position: relative;
      border-left: 2px solid white;
      margin-left: 45px;
      font-weight: 600;
      div
      {
        padding: 0px 8px;
        background: white;
        text-align: center;
        font-size: 14px;
        p:nth-child(1)
        {
          white-space: nowrap;
        }
        p:nth-child(2)
        {
          margin-top: 4px !important;
          color: #606467;
        }
      }
      span
      {
        position: absolute;
        color: #CB3A82;
        background: #FBEEF5 0 0 no-repeat padding-box;
        text-align: center;
        border-radius: 50%;
        right: -10px;
        top: -10px;
      }
    }
    a:hover{
      border-left: 2px solid #CB3A82;
      -webkit-transition : border 500ms ease-out;
      -moz-transition : border 500ms ease-out;
      -o-transition : border 500ms ease-out;
      transition : border 500ms ease-out;
    }
    a.active
    {
      border-left: 2px solid #CB3A82;
    }
  }

  /* responsive design */
  @media only screen and (max-width: 600px) {
    .md-responsive
    {
      flex-direction: column;
      .profile
      {
        flex: 5rem;
        width: 100%;
        margin-bottom: 1.5rem;
      }
      .menu
      {
        flex: 4rem;
        max-width: 100vw;
        .topVerticalMenu
        {
          justify-content: flex-start;
          overflow-x: scroll;
          padding-bottom: 20px;
          a
          {
            margin: 0px 1rem;
          }
        }
      }
    }
  }
</style>
