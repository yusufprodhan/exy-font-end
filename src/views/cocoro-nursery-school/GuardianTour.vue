<template>
  <div class="frame">
    <ul class="breadcrumb">
      <div class="container">
        <li>TOP</li>
        <li>マイページ</li>
        <li>プロフィール</li>
        <li>キガルニホイクを退会する</li>
      </div>
    </ul>
    <div class="content container">

      <div class="header">
        <span>保育園を予約する</span>
        <div>
          <p>キガルニホイクは、保育園をさがすだけでなく、保育の予約から決済までを行うことができます。 </p>
          <p>家事の合間や、お子さまのお昼寝中に、携帯ひとつで空いた時間に予約をしましょう。</p>
        </div>
      </div>

      <div class="tabbed">
        <button :class="[ activeTab === 1 ? 'active' : '' ]" @click="activeTab=1">体験(一時)保育を予約する</button>
        <button :class="[ activeTab === 2 ? 'active' : '' ]" @click="activeTab=2">月極保育を予約する</button>
        <button :class="[ activeTab === 3 ? 'active' : '' ]" @click="activeTab=3">園見学を予約する</button>
      </div>

      <div class="display-tabbed">
        <section v-if="activeTab == 1">
          <div class="details">
            <span>point</span>
            <div>
              <p>園詳細ページの「月極保育予約」または「予約へすすむ」ページで予約をすることができます。</p>
              <p>月極保育の予約をするには、本人確認書等の登録が必須条件となります。</p>
            </div>
          </div>
          <div></div>
        </section>
        <section v-if="activeTab == 2">
          hello 2
        </section>
        <section v-if="activeTab == 3">
          hello 3
        </section>
      </div>


    </div>
  </div>
</template>


<script>
import Frontend from "../../layouts/Frontend";

export default {
  name: "GardenTour",
  components: {
    
  },
  created() {
    this.$emit('update:layout', Frontend);
    if(this.$route.params.tab !== undefined){
      this.activeTab = this.$route.params.tab;
    }
  },
  data() {
    return {
      activeTab: 1
    }
  }
};
</script>

<style scoped lang="scss">
.frame {
  padding-bottom: 150px;
}
.breadcrumb {
  list-style: none;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #E5E5E5 !important;
  border-bottom: 1px solid #E5E5E5 !important;
  background-color: white !important;
  margin: 0px;
  gap: 1rem;
  li
  {
    color: white;
    text-decoration: none; 
    padding: 5px 2rem;
    color: #3D3442;
    position: relative; 
    display: block;
    text-align: left;
    float: left;
    font-size: 1rem;
    &:first-child {
      border-left: 1px solid #E5E5E5;
    }
    &:before { 
      content: " "; 
      display: block; 
      width: 0; 
      height: 0;
      border-top: 18px solid transparent;       
      border-bottom: 18px solid transparent;
      border-left: 18px solid white;
      position: absolute;
      top: 50%;
      margin-top: -18px; 
      margin-left: -1px;
      left: 100%;
      z-index: 2; 
    }
    &:after {
      content: " "; 
      display: block; 
      width: 0; 
      height: 0;
      border-top: 18px solid transparent;
      border-bottom: 18px solid transparent;
      border-left: 18px solid #E5E5E5;
      position: absolute;
      top: 50%;
      margin-top: -18px; 
      left: 100%;
      z-index: 1; 
    }
  }
}

.content {
  .header {
    width: 100%;
    height: 15rem;
    background: #3D3442;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    span {
      color: #FFFFFF;
      text-shadow: 3px 3px 6px #000000C1;
      font-size: 2rem;
    }
    div {
      width: calc(100% - 20%);
      background: white;
      padding: 30px;
      border-top: 1px solid #00000038;
      border-bottom: 1px solid #00000038;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: -3rem;
      p {
        margin: 0px;
      }
    }
  }
} 

.tabbed {
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  button {
    border: 1px solid #D6D6D6;
    border-radius: 10px;
    background: white;
    padding: 10px 3rem;
    color: #333333;
    &.active {
      background: #CB3A82;
      color: white;
    }
  }
}
.display-tabbed {
  border: 5px solid #EBEBEB;
  background: #FFFFFA;
  padding: 50px 5rem;
  section {
    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      border: 1px solid #808080;
      padding: 15px;
      &:before {
        content: " ";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border: 1px solid #808080;
      }
      span {
        position: absolute;
        top: -30px;
        left: -30px;
        color: #D9CA23;
        transform: matrix(0.63, -0.78, 0.78, 0.63, 0, 0);
        padding: 15px;
        background: white;
        border-radius: 25%;
      }
      div {
        p {
          margin: 0px;
          margin-bottom: 10px;
          text-align: center;
        }
      }
    }
  }
}
</style>