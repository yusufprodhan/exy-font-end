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
    <section class="profile-info-one-area mt-5 mb-5">
      <div class="container">
        <div class="auth-page-header mb-5">
          <div class="text-lg fw-bold border-bottom mb-2">
            <img src="../../../assets/images/svg/title-left.svg" alt="EXY"/>
            会員情報の登録
          </div>
          <p class="m-0 p-0">
            会員情報の登録を行うにあたって、必要事項を入力してください。
          </p>
        </div>
        <div class="profile-info-one-body">
          <ValidationObserver v-slot="{  handleSubmit }">
            <form @submit.prevent="handleSubmit(formSubmit)" autocomplete="off">
              <div class="card">
                <div class="card-header">
                  <h5>会員情報入力</h5>
                </div>
                <div class="card-body">
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">お名前（ふりがな）</div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <!-- <p>保育 花子（ほいく はなこ）</p> -->
                          <p>{{ formData.furigana_surname }}（{{ formData.furigana_name }}）</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">メールアドレス</div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <p>{{ formData.email }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Password Input Start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>パスワード
                            <span class="badge badge-exy">必 須</span>
                          </span>
                          <small>半角／英数</small>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
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
                          <p class="m-0 p-0">※パスワードに使用可能な文字数は6文字以上36文字以内です。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Password Input End -->
                  <!-- Re-enter password Start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>パスワード再入力
                            <span class="badge badge-exy">必 須</span>
                          </span>
                          <small>半角／英数</small>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
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
                  <!-- Re-enter password End -->
                  <!-- Sex Input Start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>性別 
                            <span class="badge badge-exy">必 須</span>
                          </span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <ValidationProvider name="Gender" rules="required" v-slot="{ errors }">
                            <label class="profile-info-radio">
                              <input
                              type="radio"
                              name="formData.gender"
                              v-model="formData.gender"
                              value="male"
                              checked
                              />
                              男性
                            </label>
                            <label class="profile-info-radio">
                              <input 
                                type="radio"
                                name="formData.gender"
                                v-model="formData.gender"
                                value="woman"
                                />
                              女性
                            </label>
                            <label class="profile-info-radio">
                              <input 
                                type="radio"
                                name="formData.gender"
                                v-model="formData.gender"
                                value="no"
                              />
                              未回答
                            </label>
                            <div>
                              <span class="is-danger">{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Sex Input End -->
                  <!-- Birthday Input Start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>生年月日 
                            <span class="badge badge-exy">必 須</span>
                          </span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <div class="row">
                            <div class="col-md-3">
                              <div class="form-group row mt-3">
                                <div class="col-sm-10 m-auto">
                                  <ValidationProvider name="" rules="required" v-slot="{ errors }">
                                    <select class="form-control bg-light" name="year" v-model="formData.year">
                                      <option value="" disabled>--</option>
                                      <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                                    </select>
                                    <span class="is-danger">{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>
                                <label class="col-sm-2 col-form-label">年</label>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="form-group row mt-3">
                                <div class="col-sm-10 m-auto">
                                  <ValidationProvider name="" rules="required" v-slot="{ errors }">
                                    <select class="form-control bg-light" name="month" v-model="formData.month">
                                      <option value="" disabled>--</option>
                                      <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                                    </select>
                                    <span class="is-danger">{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>
                                <label class="col-sm-2 col-form-label">月</label>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="form-group row mt-3">
                                <div class="col-sm-10 m-auto">
                                  <ValidationProvider name="" rules="required" v-slot="{ errors }">
                                    <select class="form-control bg-light" name="day" v-model="formData.day">
                                      <option value="" disabled>--</option>
                                      <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                                    </select>
                                    <span class="is-danger">{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>
                                <label class="col-sm-2 col-form-label">日</label>
                              </div>
                            </div>
                          </div>
                          <p class="m-0 p-0">※登録後は変更することはできません。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Birthday Input End -->
                  <!-- NickName Input Start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>ニックネーム 
                            <span class="badge badge-exy">必 須</span>
                          </span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <ValidationProvider name="Nickname" rules="required" v-slot="{ errors }">
                            <input 
                              type="text" 
                              class="form-control" 
                              placeholder="例）花子まま"
                              v-model="formData.nickname"
                            >
                            <span class="is-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- NickName Input End -->
                  <!-- Phone Number Input Start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>電話番号 
                            <span class="badge badge-exy">必 須</span>
                          </span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <ValidationProvider name="Phone Number" rules="required" v-slot="{ errors }">
                            <input 
                              type="text" 
                              class="form-control w-50" 
                              placeholder="例）09012345678"
                              v-model="formData.phone_number"
                            >
                            <span class="is-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                          <p class="m-0 p-0">※ハイフンは付けずに入力してください</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Phone Number Input End -->
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="text-center">下記をご登録いただくと、保育ご予約時に入力の手間が省けます。</h5>
                </div>
                <div class="card-body">
                  <!-- post code input start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span> 郵便番号</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <div class="row">
                            <div class="col-md-3">
                              <input 
                                type="text" 
                                class="form-control"
                                name="formData.post_code"
                                v-model="formData.post_code"
                              >
                            </div>
                            <div class="col-md-2">
                              <input 
                                type="text" 
                                class="form-control" 
                                placeholder="住所自動入力"
                                name="formData.address"
                                v-model="formData.address"
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- post code input End -->
                  <!-- Location (prefecture) input Start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span> 所在地（都道府県）</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <div class="row">
                            <div class="col-md-5">
                              <select class="form-control" name="formData.prefecture_id" v-model="formData.prefecture_id">
                                <option value="" disabled selected>選択してください</option>
                                <option v-for="prefecture in prefectures" :key="prefecture.id" :value="prefecture.id">{{ prefecture.name }}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Location (prefecture) input End -->
                  <!-- Location (city / address) input Start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>所在地（市区町村/番地）</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <input 
                            type="text" 
                            class="form-control" 
                            placeholder="例）大阪市西区北堀江1-2-27"
                            name="formData.city"
                            v-model="formData.city"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Location (city / address) input End -->
                  <!-- Location (building name) input Start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>所在地（建物名）</span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <input 
                            type="text" 
                            class="form-control" 
                            placeholder="例）◯◯マンション 100号室"
                            name="formData.building_name"
                            v-model="formData.building_name"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Location (building name) input End -->
                </div>
              </div>
              <div class="form-group text-center">
                <button type="submit" class="custom btn text-xl exy-default-btn rounded-0 mt-4">次へ</button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Frontend from "../../../layouts/Frontend";
import axios from "../../../axios";

export default {
  name: "ProfileInfo",
  data(){
    return{
      prefectures: [],
      years: [],
      months: [],
      days: [],
      formData: []
    }
  },
  created() {
    this.$emit('update:layout', Frontend)
    if(localStorage.getItem('parentRegParams') === null || localStorage.getItem('parentRegParams') === ''){
      this.$router.push({ 
        name: 'Registration'
      });
    }
    
    var parentRegParams = JSON.parse(localStorage.getItem('parentRegParams'));
    if(parentRegParams.isOTPSuccess == false){
      this.$router.push({ 
        name: 'Registration'
      });
    }else if(parentRegParams.isOTPSuccess == true){
      this.formData = parentRegParams;
    }

    if(parentRegParams.year === undefined){
      this.formData.year = '';
      this.formData.month = '';
      this.formData.day = '';
    }
  },
  mounted() {
    this.initYear();
    this.initMonth();
    this.initDay();

    // prefecture api call
    axios.get('/prefecture', this.$data).then((res) => {
      this.prefectures = res.data.data;
    }).catch(error => {
      this.checkError(error)
    });
  },
  methods: {
    initYear() {
      const years = []
      for (let i = new Date().getFullYear(); i >= 1980; i--) {
        years.push(i);
      }
      this.years = years
    },
    initMonth() {
      for (let i = 1; i <= 12; i++) {
        this.months.push(i);
      }
    },
    initDay() {
      for (let i = 1; i <= 31; i++) {
        this.days.push(i);
      }
    },
    formSubmit(){
      localStorage.setItem('parentRegParams', JSON.stringify(this.formData));
      this.$router.push({ 
        name: 'RegistrationChildren'
      });
    }
  }
}
</script>

<style scoped>
.profile-info-radio {
  margin-left: 25px;
}
.is-danger{
  color: #f22435;
}
.custom{
  padding: 6px 150px;
}
</style>