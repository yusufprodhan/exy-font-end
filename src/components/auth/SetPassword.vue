<template>
  <div class="conform-email-page">
    <div class="breadcrumb-border">
      <div class="container">
        <nav
            class="py-2"
            style="--bs-breadcrumb-divider: '>'"
            aria-label="breadcrumb"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Login' }"
              >会員登録 ｜ ログイン
              </router-link
              >
            </li>
            <li class="breadcrumb-item active">パスワードの再設定</li>
          </ol>
        </nav>
      </div>
    </div>
    <section class="setPassword-area mt-5 mb-5">
      <div class="container">
        <div class="auth-page-header mb-5">
          <div class="text-lg fw-bold border-bottom mb-2">
            <img src="../../assets/images/svg/title-left.svg" alt="EXY"/>
            以下のメールアドレス宛に認証キーを記載したメールを送信しました
          </div>
          <p class="m-0 p-0 text-center">
            下記の項目を全て入力して、「次へ」でお進みください
          </p>
        </div>
        <div class="setPassword-body">
          <ValidationObserver v-slot="{  handleSubmit }">
            <form @submit.prevent=" handleSubmit(formSubmit)" autocomplete="off">
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-4">
                  <div class="bg-light input-label">
                    <span>メールアドレス</span>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <p class="m-0 p-0">{{user.email}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-4">
                  <div class="bg-light input-label">
                    <span>認証キー</span>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                           <ValidationProvider name="Opt" rules="required|min:6|max:6" v-slot="{ errors }">
                            <input
                                type="text"
                                class="form-control bg-light"
                                name="formData.otp"
                                v-model="formData.otp"
                                style="width:50%"
                                placeholder="6桁の半角数字"
                                @keypress="isNumber($event)"
                            />
                            <span class="is-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                          <p class="m-0 p-0">
                            ※認証キーは取得後30分で無効になります
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group-container mt-4">
              <div class="row">
                <div class="col-md-4">
                  <div class="bg-light input-label">
                    <span>新パスワード</span>
                    <small>半角／英数</small>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-group">
                          <ValidationProvider name="Password" rules="required|min:6|max:36" vid="password" v-slot="{ errors }">
                            <input 
                              type="password" 
                              class="form-control"
                              name="formData.password"
                              v-model="formData.password"
                              ref="password"
                            />
                            <span class="is-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                          <p class="m-0 p-0">
                            ※パスワードに使用可能な文字数は6文字以上36文字以内です。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-4">
                  <div class="bg-light input-label">
                    <span>新パスワード（確認）</span>
                    <small>半角／英数</small>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-group">
                          <ValidationProvider name="Password Confirmation" rules="required|min:6|max:36|confirmed:password" v-slot="{ errors }">
                            <input 
                              type="password" 
                              class="form-control"
                              name="formData.confirmPassword"
                              v-model="formData.confirmPassword"
                            />
                            <span class="is-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-5 mx-auto text-center">
                <div class="set-pass-privacy mt-4">
                  <router-link to="#" class="text-center">
                    <span>利用規約、プライバシーポリシー</span> に同意の上 <br>
                    ご送信ください
                  </router-link>
                </div>
                <label class="mt-5">
                  <input type="checkbox" checked> 利用規約およびプライバシーポリシーに同意する
                </label>
              </div>
            </div>

            <div class="form-group text-center mt-5">
              <router-link :to="{ name: 'PasswordReset' }">
                <button
                    type="button"
                    class="btn text-xl exy-default-btn-outline rounded-0"
                >
                  戻る
                </button>
              </router-link>
              <!-- <router-link :to="{ name: 'PasswordResetSuccess' }"> -->
                <button
                    type="submit"
                    class="btn text-xl exy-default-btn rounded-0"
                >
                  次へ
                </button>
              <!-- </router-link> -->
            </div>
          </form>
          </ValidationObserver>
        </div>
        <div class="setPassword-footer mt-5">
          <p>※メールアドレス送信後、認証コードメールが届かない場合下記の原因が考えられます。</p>
          <table class="table">
            <tr>
              <td style="width: 30px;">(1)</td>
              <td>メールが「迷惑メールフォルダ」に入っている <br> メールフォルダを再度ご連絡ください。</td>
            </tr>
            <tr>
              <td>(2)</td>
              <td>メールが「迷惑メールフォルダ」に入っている <br> お手数ですが、再度「お客様登録」手続きを行ってください。</td>
            </tr>
          </table>
          <p>30分経っても確認メールが届かない場合は、お手数ですが再度「新規会員登録」手続きを行ってください。
          </p>
        </div>
      </div>
    </section>
    <vue-element-loading :active="isLoadingshow" spinner="bar-fade-scale" color="#FF6700" :is-full-screen="isFullScreen"/>
  </div>
</template>

<script>
import Frontend from "../../layouts/Frontend";
import axios from "@/axios";
import VueElementLoading from 'vue-element-loading';

export default {
  name: "SetPassword",
  components: {
    VueElementLoading
  },
  data() {
    return {
      user: [],
      formData: [],
      isLoadingshow: false,
      isFullScreen: true
    }
  },
  created() {
    this.$emit('update:layout', Frontend);
    /* --- user details --- */
    this.getParentLatestData();
  },
  methods:{
    formSubmit(){
      this.verifyOTPCode()
    },
    getParentLatestData(){
      this.isLoadingshow = true;
      axios.get('/parent').then((res) => {
        this.isLoadingshow = false;
        this.user = res.data;
        this.loaded = true;
      }).catch(error => {
        this.isLoadingshow = false;
        this.checkError(error)
      });
    },
     verifyOTPCode(){
      this.formData.isOTPSuccess = false;
      axios.post('/parent-reset-password-otp-verify',
      {
        email:this.user.email,
        otp: this.formData.otp,
        password: this.formData.password
      }).then(response => {
        if(response.data.success){
          // verify OTP code
          this.formData.isOTPSuccess = true;
          this.$toast.success(response.data.message);
          this.$router.push({ 
            name: 'PasswordResetSuccess'
          });
        }
      }).catch(error => {
        this.checkError(error)
      })
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.is-danger{
  color: #f22435;
}
</style>