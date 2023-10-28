<template>
  <div class="profile-info-page">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">新規会員登録</li>
          </ol>
        </nav>
      </div>
    </div>
    <section class="verfy-registration-info-area mt-5 mb-5">
      <ValidationObserver v-slot="{  handleSubmit }">
        <form @submit.prevent="handleSubmit(formSubmit)" autocomplete="off">
          <div class="container">
            <div class="auth-page-header mb-5">
              <div class="text-lg fw-bold border-bottom mb-2">
                <img src="../../../assets/images/svg/title-left.svg" alt="EXY"/>
                登録内容の確認
              </div>
              <h6 class="m-0 p-0 header-bar-heading">
                <big>|</big>
                <span>会員情報</span>
              </h6>
            </div>
            <div class="verfy-registration-info-body">
              <div class="card">
                <div class="card-body">
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>お名前（ふりがな</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.furigana_surname }}（{{ formData.furigana_name }}）</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>メールアドレス</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.email }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>パスワード</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.password }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>性別</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0" style="text-transform: capitalize;">{{ formData.gender }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>生年月日</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.year }}年（平成2年） {{ formData.month }}月 {{ formData.day }}日</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>ニックネーム</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.nickname }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>電話番号</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.phone_number }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>郵便番号</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.post_code }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>住所</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">
                            {{ formData.address }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-white">
                  <router-link :to="{ name: 'RegistrationProfile' }">
                    <p class="pull-right"><u>会員情報を修正する ＞</u></p>
                  </router-link>
                </div>
              </div>
              <div class="auth-page-header mb-3 mt-3">
                <h6 class="m-0 p-0 header-bar-heading">
                  <big>|</big>
                  <span>お子さまの情報</span>
                </h6>
              </div>

              <div class="card mb-1" v-for="(children,index) in formData.childrens" :key="children.id">
                <div class="card-header">
                  <h5>{{ formData.ordinalTitle[index] }}</h5>
                </div>
                <div class="card-body">
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>ふりがな（お子さま）</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.childrens[index].furigana_surname }}（{{ formData.childrens[index].furigana_name }}）</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>性別</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.childrens[index].gender }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>生年月日</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">
                            {{ formData.childrens[index].year }}年（令和3年） {{ formData.childrens[index].month }}月 {{ formData.childrens[index].day }}日
                            <span>{{ formData.childrens[index].option }}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>アレルギーの有無</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.childrens[index].disease[0].allergies }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>備考（アレルギー）</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.childrens[index].disease[0].allergies_remark }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>基礎疾患の有無</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.childrens[index].disease[0].disease }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>備考（病気）</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p class="m-0 p-0">{{ formData.childrens[index].disease[0].disease_remark }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-white" v-if="formData.childrens.length === (index + 1)">
                  <router-link :to="{ name: 'RegistrationChildren' }">
                    <p class="pull-right"><u>会員情報を修正する ＞ </u></p>
                  </router-link>
                </div>
              </div>


              <div class="verfy-registration-info-footer mt-5 mb-5">
                <div class="row">
                  <div class="col-md-9 mx-auto">
                    <p>
                      下記のサービス利用規約、個人情報の取り扱いについて確認、同意のうえボタンをクリックしてください。
                    </p>
                  </div>
                  <div class="col-md-6 mx-auto">
                    <div class="row">
                      <div class="col-md-6">
                        <p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15">
                            <g id="Group_1332" data-name="Group 1332" transform="translate(-751.817 -1221.328)">
                              <g id="Group_1331" data-name="Group 1331" transform="translate(751.817 1221.328)">
                                <g id="Group_1329" data-name="Group 1329">
                                  <g id="Rectangle_1096" data-name="Rectangle 1096" transform="translate(2 2)" fill="#fff" stroke="#707070" stroke-width="1">
                                    <rect width="20" height="13" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="19" height="12" fill="none"/>
                                  </g>
                                  <g id="Rectangle_1094" data-name="Rectangle 1094" fill="#fff" stroke="#707070" stroke-width="1">
                                    <rect width="20" height="13" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="19" height="12" fill="none"/>
                                  </g>
                                  <g id="Rectangle_1095" data-name="Rectangle 1095" fill="#707070" stroke="#707070" stroke-width="1">
                                    <rect width="20" height="4" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="19" height="3" fill="none"/>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <u class="ms-2">サービス利用規約</u>
                        </p>
                      </div>
                      <div class="col-md-6">
                        <p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15">
                            <g id="Group_1332" data-name="Group 1332" transform="translate(-751.817 -1221.328)">
                              <g id="Group_1331" data-name="Group 1331" transform="translate(751.817 1221.328)">
                                <g id="Group_1329" data-name="Group 1329">
                                  <g id="Rectangle_1096" data-name="Rectangle 1096" transform="translate(2 2)" fill="#fff" stroke="#707070" stroke-width="1">
                                    <rect width="20" height="13" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="19" height="12" fill="none"/>
                                  </g>
                                  <g id="Rectangle_1094" data-name="Rectangle 1094" fill="#fff" stroke="#707070" stroke-width="1">
                                    <rect width="20" height="13" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="19" height="12" fill="none"/>
                                  </g>
                                  <g id="Rectangle_1095" data-name="Rectangle 1095" fill="#707070" stroke="#707070" stroke-width="1">
                                    <rect width="20" height="4" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="19" height="3" fill="none"/>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <u class="ms-2">個人情報の取り扱い</u>
                        </p>
                      </div>
                      <div class="col-md-12 mt-3">
                        <label class="container-checkbox">利用規約およびプライバシーポリシーに同意する
                          <ValidationProvider name="" rules="required" v-slot="{ errors }">
                            <input
                                type="checkbox"
                                value="checked"
                                v-model="checkCondition"
                                :checked="false"
                            >
                            <span class="checkmark"></span>
                            <div>
                              <span class="is-danger">{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group text-center verification-info-action-btn">
                <router-link :to="{ name: 'RegistrationChildren' }">
                  <button type="submit" class="btn exy-default-btn-outline rounded-0">次へ</button>
                </router-link>

                <button type="submit" class="exy-default-btn">次へ</button>
              </div>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </section>

    <div class="space-100"></div>

    <div class="modal show" aria-hidden="true" v-if="openRegistrationSuccessModal">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="close" @click="redirectToLoginPage">
            <i class="fa fa-times-circle text-2xl"></i>
          </div>
          <div class="p-4 mt-4 text-center">
            <h4 class="border-bottom text-base fw-bold">
              会員登録完了しました！
              <br/>
              保育ご予約の方は、引き続き登録をお願いいたします。
            </h4>
          </div>
          <div class="v-step-one-main">
            <h4 class="--color-e6006e text-base fw-bold">
              今すぐ保育予約するなら…
            </h4>
            <div class="form-group text-center">
              <button class="exy-default-btn" type="button">書類登録へ</button>
            </div>
            <h4 class="--color-e6006e text-base fw-bold mt-5">
              今すぐ保育予約するなら…
            </h4>
            <div class="form-group text-center point-get-btn">
              <button class="btn btn-warning" @click.prevent="showPointModal">
                書類登録へ
              </button>
              <div class="point-get-btn-ribbon">10point get!</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal show" aria-hidden="true" v-if="openPointModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="close" @click="openPointModal = false">
            <i class="fa fa-times-circle text-2xl"></i>
          </div>
          <div class="p-4 mt-2">
            <div class="modal-heading-text">
              <p class="fw-bold text-center">
                アンケートにご回答いただいたご利用者さまに10POINTをプレゼント中！
              </p>
            </div>

            <p class="m-0 p-0 text-base text-center">
              この度はキガルニホイクをご登録いただき誠にありがとうございます。
            </p>
            <p class="m-0 p-0 text-base text-center">
              サービス発展のためのユーザーアンケートにご協力をお願いいたします。
            </p>
            <ValidationObserver v-slot="{  handleSubmit }">
              <form @submit.prevent="handleSubmit(submitPointForm)" autocomplete="off">
                <div class="card mt-3">
                  <div class="card-header">
                    <h4 class="text-base">当サイトのご利用目的</h4>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <ValidationProvider name="" rules="required" v-slot="{ errors }">
                        <div class="grid">
                          <label class="container-checkbox" v-for="purpose in purposeArray" :key="purpose">
                            <input
                                type="checkbox"
                                :value="purpose"
                                :checked="false"
                                v-model="pointManager.purpose.chosen"
                            /> {{ purpose }}
                            <span class="checkmark"></span>
                          </label>
                          <span class="is-danger">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <div class="mt-3">
                        <input
                            type="text"
                            name="formData.pointManager.chosen"
                            v-model="pointManager.purpose.description"
                            class="form-control"
                            placeholder="簡単に内容をご記載ください"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mt-2">
                  <div class="card-header">
                    <h4 class="text-base">当サイトをお知りになったきっかけ</h4>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <ValidationProvider name="" rules="required" v-slot="{ errors }">
                        <div class="grid">
                          <label class="container-checkbox" v-for="know in konwArray" :key="know">
                            <input
                                type="checkbox"
                                :value="know"
                                :checked="false"
                                v-model="pointManager.know.chosen"
                            /> {{ know }}
                            <span class="checkmark"></span>
                          </label>
                          <span class="is-danger">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <div class="mt-3">
                        <input
                            type="text"
                            name="formData.pointManager.chosen"
                            v-model="pointManager.know.description"
                            class="form-control"
                            placeholder="簡単に内容をご記載ください"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mt-1">
                  <div class="card-header">
                    <h4 class="text-base">
                      今後もサービス改善のアンケートをお送りしてもよろしいでしょうか？
                    </h4>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <ValidationProvider name="" rules="required" v-slot="{ errors }">
                        <div class="grid">
                          <label class="container-checkbox" v-for="continueProcess in continueArray" :key="continueProcess">
                            <input
                                type="radio"
                                :value="continueProcess"
                                :checked="false"
                                name="pointManager.continue.chosen"
                                v-model="pointManager.continue.chosen"
                            /> {{ continueProcess }}
                            <span class="checkmark"></span>
                          </label>
                          <span class="is-danger">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>

                <div class="text-center py-2">
                  <button
                      type="submit"
                      class="exy-default-btn mt-3"
                  >
                    アンケートに回答する
                  </button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frontend from "../../../layouts/Frontend";
import axios from "../../../axios";

export default {
  name: "VerifyRegistrationDetails",
  created() {
    this.$emit('update:layout', Frontend);
    if (localStorage.getItem('parentRegParams') === null || localStorage.getItem('parentRegParams') === '') {
      this.$router.push({
        name: 'Registration'
      });
    }

    var parentRegParams = JSON.parse(localStorage.getItem('parentRegParams'));
    if (parentRegParams.isOTPSuccess === false) {
      this.$router.push({
        name: 'RegistrationOtp'
      });
    } else if (parentRegParams.isOTPSuccess === true) {
      this.formData = parentRegParams;
    }
  },
  data() {
    return {
      formData: [],
      checkCondition: [],
      openRegistrationSuccessModal: false,
      openPointModal: false,
      parent: [],
      pointManager: {
        purpose: {
          chosen: [],
          description: ''
        },
        know: {
          chosen: [],
          description: ''
        },
        continue: {
          chosen: [],
          description: ''
        }
      },
      purposeArray: [
        '保育園さがし',
        '体験保育(一時保育)予約',
        '月極保育予約',
        '園見学予約',
        '子育て情報掲示板',
        '子育て相談コーナー',
        '園口コミ',
        '保活情報',
        'その他'
      ],
      konwArray: [
        'WEB広告をみて',
        'SNSをみて',
        'お友達からの紹介',
        '保育園からの紹介',
        'その他'
      ],
      continueArray: [
        'はい',
        'いいえ'
      ]
    };
  },
  methods: {
    formSubmit() {
      axios.post('/parents', this.formData).then((response) => {
        if (response.data.success) {
          this.parent = response.data.data;
          this.openPointModal = false;
          this.openRegistrationSuccessModal = true;
          this.$toast.success(response.data.message);
          localStorage.removeItem('parentRegParams')
        }
      }).catch(error => {
        this.checkError(error)
      });
    },
    showPointModal() {
      this.openPointModal = true;
      this.openRegistrationSuccessModal = false;
    },
    submitPointForm() {
      axios.post('/manage-point', { parent_id: this.parent['id'], point: 10, pointManager: this.pointManager }).then((response) => {
        if (response.data.success) {
          this.openPointModal = false;
          this.openRegistrationSuccessModal = false;
          this.$router.push({
            name: 'Login'
          });
        }
      }).catch(error => {
        this.checkError(error)
      });
    },
    redirectToLoginPage() {
      localStorage.setItem('parentRegParams', '');
      this.$router.push({
        name: 'Login'
      });
    }
  }
};
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 13px;
}

.grid > label {
  margin-bottom: 5px;
}

.grid > label > input {
  margin-right: 5px;
}

.profile-info-radio {
  margin-left: 25px;
}

.header-bar-heading span {
  margin-left: 10px;
}

.modal {
  display: block;
  background: rgba(0, 0, 0, 0.7);

  .modal-content {
    background: #f9fafb;

    .close {
      position: absolute;
      top: 0;
      right: 7px;
      cursor: pointer;
      z-index: 9999;
    }

    .card-body {
      .col-md-3 {
        margin-bottom: 10px !important;

        label {
          font-size: 12px;
        }
      }
    }
  }
}

.v-step-one-main {
  padding: 0 20px;

  .exy-default-btn {
    width: 90%;
  }

  .point-get-btn {
    position: relative;

    .btn-warning {
      width: 90%;
      border-radius: 0 !important;
      margin-bottom: 50px;
    }

    .point-get-btn-ribbon {
      width: 60px;
      height: 60px;
      border: 1px solid #ccc;
      text-align: center;
      border-radius: 50%;
      font-size: 11px;
      padding-top: 13px;
      position: absolute;
      top: -8px;
      background: #fff;
    }
  }
}

.modal-heading-text {
  text-align: center;

  p {
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 15px;
    padding: 4px 10px;
  }
}

.verification-info-action-btn {
  .exy-default-btn {
    margin-left: 10px;
  }
}

.is-danger {
  color: #f22435;
}
</style>
