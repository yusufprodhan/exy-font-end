<template>
  <footer class="footer-area bg-light">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-3">
          <div class="footer-item">
            <h4>SERVICE</h4>
            <ul>
              <li>
                <router-link :to="{name:'Home'}"><strong>TOP</strong></router-link>
              </li>
              <li>
                <router-link :to="{name:'KigaruniHoiku'}">キガルニホイクとは</router-link>
              </li>
              <li>
                <router-link :to="{name:'ThoughtsofKigarniHoik'}">キガルニホイクの思い</router-link>
              </li>
              <li>
                <router-link :to="{name:'WhatIsKigarniHoikuPoint'}">キガルニホイクポイントとは</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="footer-item">
            <h4>CONTENTS</h4>
            <ul>
              <li>
                <router-link :to="{name:'FindNurserySchool'}">保育園をさがす</router-link>
              </li>
              <li><a>エリア・沿線からさがす</a></li>
              <li>
                <router-link :to="{name:'BulletinBoard'}">子育て情報掲示板</router-link>
              </li>
              <li>
                <router-link :to="{name:'ConsultationCorner'}">子育て相談コーナー</router-link>
              </li>
              <li>
                <router-link :to="{name:'lifeProtectionInformation'}">保活情報</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-3 offset-md-2">
          <div class="footer-item">
            <h4 class="text-center">公式SNS</h4>
            <div class="footer-icon">
              <ul>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="footer-item">
            <h4>GUIDE</h4>
            <ul>
              <li>
                <router-link :to="{name:'HowToUseKigarniHoik'}">キガルニホイクの使い方</router-link>
              </li>
              <li>
                <router-link :to="{name:'UsageFlow'}">ご利用の流れ</router-link>
              </li>
              <li>
                <router-link :to="{name:'AboutPaymentMethod'}">お支払い方法について</router-link>
              </li>
              <li>
                <router-link :to="{name:'guide', params:{active:'monthly-childcare'}}">月極保育</router-link>
              </li>
              <li>
                <router-link :to="{name:'guide', params:{active:'experience-childcare-reservation'}}">体験保育予約</router-link>
              </li>
              <li>
                <router-link :to="{name:'guide', params:{active:'garden-tour'}}">園見学</router-link>
              </li>
              <li>
                <router-link :to="{name:'AllUsersGuidelines'}">ご利用いただく皆さまへ (ガイドライン)</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="footer-item">
            <h4>INFORMATION</h4>
            <ul>
              <li>
                <router-link :to="{name:'Faqs'}">よくある質問</router-link>
              </li>
              <li>
                <router-link :to="{name:'ContactUs'}">お問い合わせ</router-link>
              </li>
              <li>
                <router-link :to="{name:'terms'}">サービス利用規約</router-link>
              </li>
              <li>
                <router-link :to="{name:'terms', params:{active:2}}">ポイント利用規約</router-link>
              </li>
              <li>
                <router-link :to="{name:'terms', params:{active:3}}">プライバシーポリシー</router-link>
              </li>
              <li>
                <router-link :to="{name:'terms', params:{active:4}}">特定商取引法に基づく表示</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="footer-item">
            <h4>運営会社</h4>
            <ul>
              <li><a href="#">企業情報</a></li>
              <li><a href="#">採⽤情報</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <p class="m-0">Copyright ©{{ new Date().getFullYear() }}
              <router-link to="/">株式会社EXY</router-link>
              | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
