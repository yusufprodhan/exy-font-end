<template>
<div class="d-page">
  <ul class="breadcrumb">
    <div class="container">
      <li>TOP</li>
      <li>マイページ</li>
      <li>プロフィール</li>
      <li>キガルニホイクを退会する</li>
    </div>
  </ul>
  <div class="container mt-5 mb-5">
    <div class="header">
      <div class="info">
        <h4>キガルニホイクの退会</h4>
        <div></div>
      </div>
      <p>退会処理が完了するとキガルニホイクからのメールは配信されなくなり、会員情報もご利用いただけなくなります。</p>
      <p>また、キガルニホイクで確定した予約、または未確定の予約(予約リクエスト中で園からの返信待ち)がある場合は退会できません。</p>
      <p>マイページにてご予約中の施設がないかをご確認ください。</p>
    </div>

    <div class="header mt-5">
      <div class="info">
        <h4>アンケートのお願い</h4>
        <div></div>
      </div>
      <p>キガルニホイクでは、お客様にご満足いただけるようサービス向上に努めてまいりたいと思っております。</p>
      <p>よろしければ、退会の主な理由をお聞かせください。（回答は必須ではございません。単一回答）</p>
    </div>

    <div class="content mt-4">
      <ul>
        <li>
          <label>
            <input type="checkbox" v-model="withdrawReason.option1.status" :value="withdrawReason.option1.value">
            発生したトラブルでキガルニホイクが迅速な対応をとってくれなかったから
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" v-model="withdrawReason.option2.status" :value="withdrawReason.option2.value">
            希望する日程で保育園の予約ができなかったから
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" v-model="withdrawReason.option3.status" :value="withdrawReason.option2.value">
            直接保育園に電話し、予約するようになったから
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" v-model="withdrawReason.option4.status" :value="withdrawReason.option4.value">
            固定で預ける保育園が決まったから
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" v-model="withdrawReason.option5.status" :value="withdrawReason.option5.value" @change="dynamicChildShowOrHide">
            サイトの使い方がわからないから
          </label>
          <div>
            サイトの使い方がのっているヘルプページは
            <router-link :to="{ name: 'HowToUseKigarniHoik' }">
              <span>こちら</span>
            </router-link>
          </div>
        </li>
        <li>
          <label>
            <input type="checkbox" v-model="withdrawReason.option6.status" :value="withdrawReason.option6.value" @change="dynamicChildShowOrHide">
            予約の仕方がわかりづらいから
          </label>
          <div>
            予約の仕方がのっているヘルプページはこちら
            <router-link :to="{ name: 'GuardianTour' }">
              <span>こちら</span>
            </router-link>
          </div>
        </li>
        <li>
          <label>
            <input type="checkbox" v-model="withdrawReason.option7.status" :value="withdrawReason.option7.value" @change="dynamicChildShowOrHide">
            他の予約サイトを利用するから
          </label>
          <div>
            よろしければサイト名を教えてください（全角100文字）
            <input type="number" v-model="withdrawReason.option7.point" ref="option7Point">
          </div>
        </li>
        <li>
          <label>
            <input type="checkbox" v-model="withdrawReason.option8.status" :value="withdrawReason.option8.value" @change="dynamicChildShowOrHide">
            利用したい保育園が掲載されていなかったから
          </label>
          <div>
            よろしければご希望の保育園名を教えてください（全角100文字）
            <input type="number" v-model="withdrawReason.option8.point" ref="option8Point">
          </div>
        </li>
      </ul>
    </div>

    <div class="header mt-4">
      <p>ご利用いただきまして、ありがとうございました。</p>
      <p>今後も皆様に愛されるサービスをめざして、日々努力してまいります。 </p>
      <p>ぜひ、またのご利用をお待ちしております。</p>
    </div>

    <div class="btnGroup mt-5">
      <router-link :to="{ name: 'Mypage.Profile' }">
        <button>この画面を閉じる</button>
      </router-link>
      <button v-on:click="submitForm">退会確認へ</button>
    </div>

    <div class="marginBottom"></div>
  </div>
</div>
</template>

<script>
import Frontend from "../../../layouts/Frontend";
export default {
  name: "WithdrowFromKigarniHoik",
  data(){
    return{
      withdrawReason: {
        'option1' : {
          status: false,
          value: '発生したトラブルでキガルニホイクが迅速な対応をとってくれなかったから',
          point: 0
        },
        'option2' : {
          status: false,
          value: '希望する日程で保育園の予約ができなかったから',
          point: 0
        },
        'option3' : {
          status: false,
          value: '直接保育園に電話し、予約するようになったから',
          point: 0
        },
        'option4' : {
          status: false,
          value: '固定で預ける保育園が決まったから',
          point: 0
        },
        'option5' : {
          status: false,
          value: 'サイトの使い方がわからないから',
          point: 0
        },
        'option6' : {
          status: false,
          value: '予約の仕方がわかりづらいから',
          point: 0
        },
        'option7' : {
          status: false,
          value: '他の予約サイトを利用するから',
          point: ''
        },
        'option8' : {
          status: false,
          value: '利用したい保育園が掲載されていなかったから',
          point: ''
        }
      }
    }
  },
  components: {
  },
  created() {
    this.$emit('update:layout', Frontend)
  },
  methods:{
    dynamicChildShowOrHide(e){
      var childDiv = e.target.parentElement.parentElement.querySelector('div');
      if(window.getComputedStyle(childDiv).display == "none"){
        childDiv.style.display = "block";
      }else{
        childDiv.style.display = "none";
      }
    },
    submitForm(){
      if(this.withdrawReason.option1.status == false &&
        this.withdrawReason.option2.status == false &&
        this.withdrawReason.option3.status == false &&
        this.withdrawReason.option4.status == false &&
        this.withdrawReason.option5.status == false &&
        this.withdrawReason.option6.status == false &&
        this.withdrawReason.option7.status == false &&
        this.withdrawReason.option8.status == false){
          this.$toast.error('あなたが去る理由を選んでください');
      }
      else if(this.withdrawReason.option7.status == true && this.withdrawReason.option7.point == ''){
        this.$refs.option7Point.focus();
        this.$toast.error('この点に印を付けてください');
      }else if(this.withdrawReason.option8.status == true && this.withdrawReason.option8.point == ''){
        this.$refs.option8Point.focus();
        this.$toast.error('この点に印を付けてください');
      }else{
        localStorage.setItem('withdrawReason', JSON.stringify(this.withdrawReason));
        this.$router.push({ 
          name: 'Mypage.WithdrawConfirm'
        });
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.d-page {
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
  .header {
    display: flex;
    flex-direction: column;
    .info {
      display: flex;
      flex-direction: row;
      margin-bottom: 1.3rem;
      gap: 1rem;
      h4 {
        border-left: 5px solid #CB3A82;
        padding-left: 0.5rem;
        margin: 0px;
        font-weight: bold;
      }
      div {
        flex: 1;
        border-bottom: 1px solid #D6D6D6;
      }
    }
    p {
      padding: 0px 15px;
      margin: 0px;
      margin-bottom: 5px;
      font-size: 1rem;
      letter-spacing: 1.5px;
    }
  }
  .content {
    background: #F8F7F7;
    border-radius: 8px;
    margin: 0px 15px;
    ul {
      margin: 0px;
      list-style: none;
      padding: 10px 45px 10px 10px;
      li {
        padding: 10px 15px;
        list-style-type: none;
        label {
          input[type="checkbox"] {
            width: 1em;
            height: 1em;
            background-color: white;
            border-radius: 50%;
            vertical-align: middle;
            border: 2px solid #ddd;
            appearance: none;
            -webkit-appearance: none;
            outline: none;
            cursor: pointer;
            &:checked {
              background-color: gray;
            }
          }
          input {
            margin-right: 0.5rem;
            -ms-transform: scale(1.4);
            -webkit-transform: scale(1.4);
            transform: scale(1.4);
          }
        }
        &:last-child {
          margin-bottom: 3rem;
        }
        div {
          margin-top: 1rem;
          margin-left: 1.5rem;
          font-weight: bold;
          display: none;
          a {
            color: #3B86FF;
          }
          input {
            margin-top: 0.8rem;
            border: 1px solid #C9C9C9;
            width: 70%;
            height: 40px;
            padding-left: 1rem;
          }
        }
      }
    }
  }
  .btnGroup {
    display: flex;
    justify-content: center;
    gap: 1rem;
    a {
      button {
        background: #333333;
        color: #FFFFFF;
        border: 1px solid #4B4B4B;
        padding: 8px 1rem;
        width: 200px;
      }
      &:first-child {
        button {
          color: #333333;
          background: white;
        }
      }
    }
    button {
      background: #333333;
      color: #FFFFFF;
      border: 1px solid #4B4B4B;
      padding: 8px 1rem;
      width: 200px;
    }
    &:first-child {
      button {
        color: #333333;
        background: white;
      }
    }
  }
  .marginBottom {
    margin-bottom: 10rem;
  }
}
</style>  