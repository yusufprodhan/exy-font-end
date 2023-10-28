<template>
<div class="d-page">
  <ul class="breadcrumb">
    <div class="container">
      <li>TOP</li>
      <li>マイページ</li>
      <li>プロフィール</li>
      <li>キガルニホイク退会完了</li>
    </div>
  </ul>
  <div class="container mt-5 mb-5">
    <div class="header">
      <div class="info">
        <h4>キガルニホイク退会完了</h4>
        <div></div>
      </div>
      <p>キガルニホイクの退会手続きが完了しました。ご登録いただき誠にありがとうございました。</p>
      <p>機会がございましたら、またキガルニホイクをご利用いただけますと幸いです。</p>
      <p>引き続きキガルニホイクをよろしくお願いいたします。</p>
    </div>

    <div class="btnGroup mt-5">
      <button @click="submitReasonLetter">トップへ</button>
    </div>

    <div class="marginBottom"></div>
  </div>
</div>
</template>

<script>
import Frontend from "../../../layouts/Frontend";
import axios from "../../../axios";

export default {
  name: "WithdrawComplete",
  components: {
  },
  created() {
    this.$emit('update:layout', Frontend);
  },
  methods:{
    submitReasonLetter(){
      var withdrawReason = JSON.parse(localStorage.getItem('withdrawReason'));
      if(withdrawReason !== undefined && withdrawReason !== null){
        axios
        .post("/account-withdraw", withdrawReason)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            localStorage.setItem('withdrawReason', null);
            this.$toast.error(res.data.message);
            this.$store.dispatch('logout').then(() => {
              this.$router.push({ name: 'Login' })
            }).catch(error => {
              this.checkError(error)
            })
          } else {
            this.$toast.error(res.data.message);
          }
        })
        .catch((error) => {
          this.checkError(error);
        });
      }else{
        this.$router.push({ 
          name: 'Mypage.WithdrowFromKigarniHoik'
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
    background: #F8F7F7;
    padding: 15px;
    a {
      button {
        background: white;
        color: #CB3A82;
        border: 1px solid #CB3A82;
        padding: 8px 1rem;
        width: 200px;
      }
    }
    button {
      background: white;
      color: #CB3A82;
      border: 1px solid #CB3A82;
      padding: 8px 1rem;
      width: 200px;
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