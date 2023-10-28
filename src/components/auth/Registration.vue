<template>
  <div class="registration-page">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item active">新規会員登録</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="regisration-area mt-5 m-5">
      <div class="container">
        <div class="registration-header">
          <div class="text-lg fw-bold border-bottom mb-4">
            <img src="../../assets/images/svg/title-left.svg" alt="EXY"/>
            新規会員登録
          </div>
          <p class="m-0 p-0">ご利用になるメールアドレスを入力してください。</p>
          <p class="m-0 p-0">
            入力したメールアドレス宛に仮登録メールが届きます。
          </p>
          <p class="m-0 p-0">
            メール受信制限をされている方は info@kigarunihoiku.co.jp
            からのメール受信を許可してください。
          </p>
        </div>
        <div class="registration-body p-4 mt-4">
          <ValidationObserver v-slot="{  handleSubmit }">
            <form @submit.prevent=" handleSubmit(formSubmit)" autocomplete="off">
              <div class="row pt-4">
                <div class="col-md-3">
                  <label>お名前</label>
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-2 col-form-label">姓：</label>
                        <div class="col-sm-10 m-auto">
                          <ValidationProvider name="Surname" rules="required" v-slot="{ errors }">
                            <input 
                              type="text" 
                              class="form-control" 
                              placeholder="例）保育"
                              name="formData.surname"
                              v-model="formData.surname"
                            />
                            <span class="is-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-2 col-form-label">名:</label>
                        <div class="col-sm-10 m-auto">
                          <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
                            <input 
                              type="text" 
                              class="form-control" 
                              placeholder="例）花子"
                              name="formData.name"
                              v-model="formData.name"
                            />
                            <span class="is-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-3">
                  <label>ふりがな</label>
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-2 col-form-label">姓：</label>
                        <div class="col-sm-10 m-auto">
                          <ValidationProvider name="Furigana Surname" rules="required" v-slot="{ errors }">
                            <input 
                              type="text" 
                              class="form-control" 
                              placeholder="例）ほいく"
                              name="formData.furigana_surname" 
                              v-model="formData.furigana_surname"
                            />
                            <span class="is-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-2 col-form-label">名：</label>
                        <div class="col-sm-10 m-auto">
                          <ValidationProvider name="Furigana Name" rules="required" v-slot="{ errors }">
                            <input 
                              type="text" 
                              class="form-control" 
                              placeholder="例）はなこ"
                              name="formData.furigana_name" 
                              v-model="formData.furigana_name"
                            />
                            <span class="is-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-3">
                  <label>メールアドレス</label>
                </div>
                <div class="col-md-9">
                  <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                    <input 
                      type="text" 
                      class="form-control" 
                      name="formData.email"
                      v-model="formData.email"
                    />
                    <span class="is-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-6 offset-3">
                  <p class="m-0 p-0">
                    メール受信制限をされている方はinfo@kigarunihoiku.co.jp からの
                  </p>
                  <p class="m-0 p-0">メール受信もあわせて許可してください。</p>
                  <p class="m-0 p-0">
                    お名前・ふりがなは登録後、変更はできませんのでご注意ください。
                  </p>
                  <button type="submit" class="btn text-xl exy-default-btn w-100 mt-5">
                    メールアドレスで登録
                  </button>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
        <div class="registration-footer">
          <div class="col-md-7 mx-auto">
            <div class="footer-button-box pt-3 pb-3">
              <p class="text-center">
                下記サイトなどで登録されている方は、同じIDでログインができます。
              </p>
              <div class="login-btn-area text-center">
                <button class="btn btn-dark rounded-pill">THE WOMAN</button>
                <button class="btn btn-dark rounded-pill">
                  キガルニホイクシ
                </button>
              </div>
            </div>
          </div>
          <div class="registration-footer-text">
            <p class="m-0 p-0"><b>◆サポーター園をご希望の方</b></p>
            <p class="m-0 p-0">
              恐れ入りますが、お電話ではお問い合わせを承っておりません。詳細については、【サポーター園になる】よりご確認くださいませ。
            </p>
            <p class="m-0 p-0">
              ご不明点がある場合は、上記メールフォームよりご連絡をお願いいたします。
            </p>
          </div>
        </div>
      </div>
    </div>
    <vue-element-loading :active="isLoadingshow" spinner="bar-fade-scale" color="#FF6700" :is-full-screen="isFullScreen"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Frontend from "../../layouts/Frontend";
import store from '../../store'
import axios from "../../axios";

import VueElementLoading from 'vue-element-loading'

export default {
  name: "Registration",
  components: {
    VueElementLoading
  },
  data(){
    return{
      formData: [],
      isLoadingshow: false,
      isFullScreen: true
    }
  },
  created() {
    this.$emit('update:layout', Frontend)
    if(localStorage.getItem('parentRegParams') === null || localStorage.getItem('parentRegParams') === ''){
      this.formData = store.state.parentRegParams;
    }else{
      this.formData = JSON.parse(localStorage.getItem('parentRegParams'));
    }
    this.formData['isOTPSend'] = false;
    this.formData['isOTPSuccess'] = false;
  },
  methods: {
    formSubmit(){
      this.sendOTPpage();
    },
    sendOTPpage () {
      this.isLoadingshow = true;
      axios.post('/send-parent-otp', {email: this.formData.email}).then((response) => {
        this.isLoadingshow = false;
        if(response.data.success){
          this.isLoadingshow = false;
          Vue.$toast.success(response.data.message);
          this.formData.isOTPSend = true;
          localStorage.setItem('parentRegParams', JSON.stringify(this.formData));
          this.$router.push({ 
            name: 'RegistrationOtp'
          });
        }
      }).catch(error => {
        this.isLoadingshow = false;
        this.checkError(error);
      })
    }
  }
};
</script>

<style scoped>
  .is-danger{
    color: #f22435;
  }
</style>