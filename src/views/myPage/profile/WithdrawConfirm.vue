<template>
<div class="d-page">
  <ul class="breadcrumb">
    <div class="container">
      <li>TOP</li>
      <li>マイページ</li>
      <li>プロフィール</li>
      <li>キガルニホイク退会確認</li>
    </div>
  </ul>
  <div class="container mt-5 mb-5">
    <div class="header">
      <div class="info">
        <h4>キガルニホイク退会確認</h4>
        <div></div>
      </div>
      <p>下記の会員情報が利用できなくなります。</p>
      <ul>
          <li>登録したお子さまの情報や書類など、全てのマイページ情報</li>
          <li>会員限定のメールマガジン</li>
      </ul>
      <p>退会処理が完了するとキガルニホイクからのメールは配信されなくなります。</p>
    </div>

    <div class="header mt-4">
      <div class="info">
        <h4>退会前に<span>必ずご確認</span>ください</h4>
        <div></div>
      </div>
    </div>

    <div class="listing">
        <div>
            <span>予約について</span>
            <p>決済完了前の予約がある場合は退会できません。事前にキャンセルや決済手続き等を行ってください。</p>
        </div>
        <div>
            <span>ポイントについて</span>
            <p>キガルニホイクポイントの払い戻しや換金等はいたしかねます。</p>
        </div>
    </div>

    <div class="btnGroup mt-5">
      <router-link :to="{ name: 'Mypage.WithdrowFromKigarniHoik' }">
        <button>もどる</button>
      </router-link>
      <router-link :to="{ name: 'Mypage.WithdrawComplete' }">
        <button>退会する</button>
      </router-link>
    </div>

    <div class="marginBottom"></div>
  </div>
</div>
</template>

<script>
import Frontend from "../../../layouts/Frontend";
export default {
  name: "WithdrowFromKigarniHoik",
  components: {
  },
  created() {
    this.$emit('update:layout', Frontend)
  },
  methods:{
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
    ul {
        margin: 2rem 0px;
        list-style: none;
        li {
            list-style-type: disc;
        }
    }
  }
  .header:nth-child(2) {
    .info {
        h4 {
            border-left: 0px solid #CB3A82;
            font-size: 16px;
            span {
                color: #CB3A82;
            }
        }
        div {
            border-bottom: 1px dashed #D6D6D6;
        }
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
  }
    .marginBottom {
        margin-bottom: 10rem;
    }
    .listing {
        display: flex;
        flex-direction: column;
        margin: 0px 10px;
        div {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            span::before {
                content: "▶︎";
                color: #CB3A82;
            }
            & + div {
                margin-top: 1.5rem;
            }
        }
    }
}
</style>  