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
    <div class="position-relative overflow-hidden container">
      <img src="../assets/images/Mask_Group_70@2x.png" class="w-100 h-56" alt="">
      <div class="position-absolute w-100" style="top:20%;">
        <div class="container text-white">
          <div class="row justify-content-end">
            <div class="col-md-4">
              <div class="text-2xl fw-bold mb-3">キガルニホイクの使い方</div>
              <div>はじめてキガルニホイクを使う方のために、<br/>
                疑問や不安を解決するヒントを集めました。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-5">
      <div class="container py-5">
        <div class="text-center">
          <img src="../assets/images/group-3759.png" alt="EXY">
        </div>
      </div>

      <!-- start setps -->
      <div class="step">
        <div class="container">
          <!-- STEP Start -->
          <div class="d-flex align-items-start">
            <div class="mr-3 text-center position-relative">
              <div class="step-count">
                guide<br/>
                <span>01</span>
              </div>
            </div>
            <div class="step-content">
              <div class="text-base fw-bold mb-2">保育園をさがす</div>
              <p class="text-sm border-bottom border-color-e6006e pb-2">キガルニホイクは豊富な園情報を掲載中！詳細な希望条件から理想の保育園を見つけましょう♪</p>
              <div class="row mb-3">
                <div class="col-6">
                  <img src="../assets/images/Mask_Group_68.png" alt="EXY">
                </div>
                <div class="col-6 text-end">
                  <router-link :to="{name:'FindNurserySchool'}" class="b-exy border rounded-pill --color-e6006e border-color-e6006e d-inline-block"><span>保育園をさがす</span> <i class="fa fa-arrow-right float-end"></i></router-link>
                </div>
              </div>
              <div class="setp-footer d-flex align-items-center justify-content-between mb-3">
                <div><i class="fa fa-search"></i> こんなさがし方も</div>
                <div>
                  <router-link :to="{name:'FindNurserySchool'}" class="text-decoration-underline">
                    ・希望日からさがす
                  </router-link>
                </div>
                <div>
                  <router-link :to="{name:'FindNurserySchool'}" class="text-decoration-underline">・・いろいろ見比べて選ぶ</router-link>
                </div>
                <div></div>
                <div></div>
              </div>
              <div class="setp-footer d-flex align-items-center justify-content-between">
                <div><i class="fa fa-question-circle-o"></i> よくある質問</div>
                <div>
                  <router-link :to="{name:'Faqs.Detail'}" class="text-decoration-underline">
                    ・前日でも予約できますか？
                  </router-link>
                </div>
                <div>
                  <router-link :to="{name:'Faqs.Detail'}" class="text-decoration-underline">・クレジットカードをお持ちでない場合</router-link>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="container">
          <!-- STEP Start -->
          <div class="d-flex align-items-start">
            <div class="mr-3 text-center position-relative">
              <div class="step-count">
                guide<br/>
                <span>02</span>
              </div>
            </div>
            <div class="step-content">
              <div class="text-base fw-bold mb-2">保育園を利用する</div>
              <p class="text-sm border-bottom border-color-e6006e pb-2">WEBで手続きが完了するキガルニホイク。面倒な電話・メールのやり取り一切不要で、お好きな時間にいつでも予約OK！</p>
              <div class="row mb-3">
                <div class="col-6">
                  <img src="../assets/images/Mask_Group_67.png" alt="EXY">
                </div>
                <div class="col-6 text-end d-flex flex-column justify-content-center align-items-end">
                  <router-link :to="{name:'GuardianTour', params: {tab: 1}}" class="b-exy border rounded-pill --color-e6006e border-color-e6006e d-inline-block"><span>一時保育予約の流れ</span> <i class="fa fa-arrow-right float-end"></i></router-link>
                  <router-link :to="{name:'GuardianTour', params: {tab: 2}}" class="b-exy border rounded-pill --color-e6006e border-color-e6006e d-inline-block my-2"><span>月極保育予約の流れ</span> <i class="fa fa-arrow-right float-end"></i></router-link>
                  <router-link :to="{name:'GuardianTour', params: {tab: 3}}" class="b-exy border rounded-pill --color-e6006e border-color-e6006e d-inline-block"><span>園見学予約の流れ</span> <i class="fa fa-arrow-right float-end"></i></router-link>
                </div>
              </div>
              <div class="setp-footer d-flex align-items-center justify-content-between">
                <div><i class="fa fa-question-circle-o"></i> よくある質問</div>
                <div>
                  <router-link :to="{name:'Faqs.Detail'}" class="text-decoration-underline">
                    ・前日でも予約できますか？
                  </router-link>
                </div>
                <div>
                  <router-link :to="{name:'Faqs.Detail'}" class="text-decoration-underline">・クレジットカードをお持ちでない場合</router-link>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="step">
        <div class="container">
          <!-- STEP Start -->
          <div class="d-flex align-items-start">
            <div class="mr-3 text-center position-relative">
              <div class="step-count">
                guide<br/>
                <span>03</span>
              </div>
            </div>
            <div class="step-content">
              <div class="text-base fw-bold mb-2">保育園を利用する</div>
              <p class="text-sm border-bottom border-color-e6006e pb-2">WEBで手続きが完了するキガルニホイク。面倒な電話・メールのやり取り一切不要で、お好きな時間にいつでも予約OK！</p>
              <div class="row mb-3">
                <div class="col-6">
                  <img src="../assets/images/Mask_Group_67.png" alt="EXY">
                </div>
                <div class="col-6 text-end d-flex flex-column justify-content-center align-items-end">
                  <router-link :to="{name:'FindNurserySchool'}" class="b-exy border rounded-pill --color-e6006e border-color-e6006e d-inline-block"><span>一時保育予約の流れ</span> <i class="fa fa-arrow-right float-end"></i></router-link>
                  <router-link :to="{name:'FindNurserySchool'}" class="b-exy border rounded-pill --color-e6006e border-color-e6006e d-inline-block my-2"><span>月極保育予約の流れ</span> <i class="fa fa-arrow-right float-end"></i></router-link>
                  <router-link :to="{name:'FindNurserySchool'}" class="b-exy border rounded-pill --color-e6006e border-color-e6006e d-inline-block"><span>園見学予約の流れ</span> <i class="fa fa-arrow-right float-end"></i></router-link>
                </div>
              </div>
              <div class="setp-footer d-flex align-items-center justify-content-between">
                <div><i class="fa fa-question-circle-o"></i> よくある質問</div>
                <div>
                  <router-link :to="{name:'Faqs.Detail'}" class="text-decoration-underline">
                    ・前日でも予約できますか？
                  </router-link>
                </div>
                <div>
                  <router-link :to="{name:'Faqs.Detail'}" class="text-decoration-underline">・クレジットカードをお持ちでない場合</router-link>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div>
    <!-- end setps -->
    <div class="space-100"></div>
    <div class="container">
      <registration-link/>
    </div>
    <div class="space-100"></div>
  </div>
  <div class="marginBottom"></div>
</div>
</div>
</template>

<script>
import RegistrationLink from "../components/RegistrationLink";
import Frontend from "../layouts/Frontend";

export default {
  name: "HowToUseKigarniHoik",
  created() {
    this.$emit('update:layout', Frontend)
  },
  components: { RegistrationLink }
}
</script>

<style scoped lang="scss">
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

.step {
  overflow: hidden;
  margin-bottom: 50px;

  .step-count {
    height: 75px;
    width: 75px;
    line-height: 1.8em;
    border-radius: 50%;
    border: 1px solid #707070;
    padding: 7px 0;

    &:after {
      display: block;
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      height: 10000%;
      width: 1px;
      background: #707070;
    }

    span {
      font-weight: bold;
      font-size: 20px;
    }
  }

  .step-content {
    background: #ffffff;
    margin-left: 2rem;
    width: 100%;

    .b-exy {
      padding: 10px 20px;
      width: 250px;
      text-align: left;

      &:hover {
        color: #e6006e;
      }
    }
  }

  .setp-footer {
    background: #FBEEF5 0 0 no-repeat padding-box;
    border-radius: 10px;
    padding: 8px 15px;
    div:nth-child(1) {
      padding-right: 2rem;
      border-right: 1px solid #707070;
    }
  }
}

</style>