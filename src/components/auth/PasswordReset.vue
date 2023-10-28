<template>
  <div class="password-reset-page">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">会員登録 ｜ ログイン</li>
            <li class="breadcrumb-item active">パスワードの再設定</li>
          </ol>
        </nav>
      </div>
    </div>
    <section class="password-reset-area mt-5 mb-5">
      <div class="container">
        <div class="auth-page-header mb-5">
          <div class="text-lg fw-bold border-bottom mb-2">
            <img src="../../assets/images/svg/title-left.svg" alt="EXY"/>
            パスワードの再設定
          </div>
          <p class="m-0 p-0">
            下記の項目を全て入力して、「次へ」でお進みください
          </p>
        </div>
        <div class="password-reset-body">
          <ValidationObserver v-slot="{  handleSubmit }">
            <form @submit.prevent=" handleSubmit(formSubmit)" autocomplete="off">
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-3">
                  <div class="bg-light input-label">メールアドレス</div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <ValidationProvider name="Email" rules="required" v-slot="{ errors }">
                      <input
                          type="text"
                          class="form-control bg-light"
                          name="formData.email"
                          v-model="formData.email"
                          placeholder="例）abc@xxx.co.jp"
                      />
                      <span class="is-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-3">
                  <div class="bg-light input-label">
                    <span>お名前</span>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <p class="m-0 p-0">※会員情報に登録している氏名を入力してください。</p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row mt-3">
                          <label class="col-sm-2 col-form-label">姓：</label>
                          <div class="col-sm-10 m-auto">
                            <ValidationProvider name="Surname" rules="required" v-slot="{ errors }">
                            <input
                                type="text"
                                class="form-control bg-light"
                                name="formData.surname"
                                v-model="formData.surname"
                                placeholder="例）保育"
                            />
                              <span class="is-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row mt-3">
                          <label class="col-sm-2 col-form-label">名：</label>
                          <div class="col-sm-10 m-auto">
                            <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
                            <input
                                type="text"
                                class="form-control  bg-light"
                                name="formData.name"
                                v-model="formData.name"
                                placeholder="例）花子"
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
            </div>
            <div class="form-group text-center mt-5">
              <router-link :to="{name: 'Mypage.Security'}">
                <button type="button" class="btn text-xl exy-default-btn-outline rounded-0">戻る</button>
              </router-link>
<!--              <router-link :to="{name: 'SetPassword'}">-->
                <button type="submit" class="btn text-xl exy-default-btn rounded-0">次へ</button>
<!--              </router-link>-->
            </div>
          </form>
          </ValidationObserver>
        </div>
      </div>
    </section>
    <vue-element-loading :active="isLoadingshow" spinner="bar-fade-scale" color="#FF6700" :is-full-screen="isFullScreen"/>
  </div>
</template>

<script>
import Frontend from "../../layouts/Frontend";
import VueElementLoading from 'vue-element-loading';
import axios from "@/axios";
export default {
  name: "PasswordReset",
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
  },
  methods: {
    formSubmit(){
      this.sendOTPpage()
    },
    sendOTPpage () {
      this.isLoadingshow = true;
      axios.post('/parent-reset-password-otp',
        {
          email:this.formData.email,
          surname:this.formData.surname,
          name:this.formData.name
        }
        )
        .then((response) => {
        this.isLoadingshow = false;
        if(response.data.success){
          this.isLoadingshow = false;
          this.$toast.success(response.data.message);
          this.$router.push({
            name: 'SetPassword',
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
