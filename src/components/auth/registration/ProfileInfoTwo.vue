<template>
  <div class="profile-info-page">
    <!-- Top Section Start -->
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Top</router-link></li>
            <li class="breadcrumb-item">新規会員登録</li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- Top Section End -->
    <!-- Information Registration for Children Area Start -->
    <section class="profile-info-one-area mt-5 mb-5">
      <div class="container">
        <!-- Children Registration Header Start -->
        <div class="auth-page-header mb-5">
          <div class="text-lg fw-bold border-bottom mb-2">
            <img src="../../../assets/images/svg/title-left.svg" alt="EXY"/>
            お子さまの情報登録
          </div>
          <p class="m-0 p-0">保育園を利用するお子さまの情報をご登録ください。</p>
        </div>
        <!-- Children Registration Header End -->
        <div class="profile-info-two-body">
          <ValidationObserver v-slot="{  handleSubmit }">
            <form @submit.prevent=" handleSubmit(formSubmit)" autocomplete="off">

              <!-- child Information -->
              <div class="card mb-1" v-for="(children,index) in formData.childrens" :key="children.id">
                <div class="card-header">
                  <h5>{{ formData.ordinalTitle[index] }}</h5>
                </div>
                <div class="card-body">
                  <!-- Child Name input Area Start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>お名前（お子さま）
                            <span class="badge badge-exy">必 須</span>
                          </span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <div class="row">
                            <!-- Surname Input Start -->
                            <div class="col-md-5">
                              <div class="form-group row mt-3">
                                <label class="col-sm-3 col-form-label">姓：</label>
                                <div class="col-sm-9 m-auto">
                                  <ValidationProvider name="" rules="required" v-slot="{ errors }">
                                    <input 
                                      type="text" 
                                      class="form-control" 
                                      placeholder="例）保育"
                                      v-model="formData.childrens[index].surname"
                                    />
                                    <span class="is-danger">{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>
                              </div>
                            </div>
                            <!-- Surname Input End -->
                            <!-- Name Input Start -->
                            <div class="col-md-5">
                              <div class="form-group row mt-3">
                                <label class="col-sm-3 col-form-label">名：</label>
                                <div class="col-sm-9 m-auto">
                                  <ValidationProvider name="" rules="required" v-slot="{ errors }">
                                    <input 
                                      type="text" 
                                      class="form-control" 
                                      placeholder="例）太郎" 
                                      v-model="formData.childrens[index].name"
                                    />
                                    <span class="is-danger">{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>
                              </div>
                            </div>
                            <!-- Name Input End -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Child Name input Area End -->
                  <!-- Furigana Children Input Area Start -->
                  <div class="form-group-container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="bg-light input-label">
                          <span>ふりがな（お子さま）
                            <span class="badge badge-exy">必 須</span>
                          </span>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group-container-right">
                          <div class="row">
                            <!-- Surname Input Start -->
                            <div class="col-md-5">
                              <div class="form-group row mt-3">
                                <label class="col-sm-3 col-form-label">姓：</label>
                                <div class="col-sm-9 m-auto">
                                   <ValidationProvider name="" rules="required" v-slot="{ errors }">
                                    <input 
                                      type="text" 
                                      class="form-control" 
                                      placeholder="例）ほいく"
                                      v-model="formData.childrens[index].furigana_surname"
                                    />
                                    <span class="is-danger">{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>
                              </div>
                            </div>
                            <!-- Surname Input End -->
                            <!-- Name Input Start -->
                            <div class="col-md-5">
                              <div class="form-group row mt-3">
                                <label class="col-sm-3 col-form-label">名：</label>
                                <div class="col-sm-9 m-auto">
                                  <ValidationProvider name="" rules="required" v-slot="{ errors }">
                                    <input 
                                      type="text" 
                                      class="form-control" 
                                      placeholder="例）たろう"
                                      v-model="formData.childrens[index].furigana_name"
                                    />
                                    <span class="is-danger">{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>
                              </div>
                            </div>
                            <!-- Name Input End -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Furigana Children Input Area End -->
                  <!-- Gender Input Start -->
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
                          <ValidationProvider :name="formData.ordinalTitle[index]" rules="required" v-slot="{ errors }">
                            <label class="profile-info-radio">
                              <input
                              type="radio"
                              :name="formData.ordinalTitle[index]"
                              v-model="formData.childrens[index].gender"
                              value="boy"
                              />
                              男の子
                            </label>
                            <label class="profile-info-radio">
                              <input 
                                type="radio"
                                :name="formData.ordinalTitle[index]"
                                v-model="formData.childrens[index].gender"
                                value="girl"
                                />
                              女の子
                            </label>
                            <label class="profile-info-radio">
                              <input 
                                type="radio"
                                :name="formData.ordinalTitle[index]"
                                v-model="formData.childrens[index].gender"
                                value="no"
                              />
                              未回答
                            </label>
                            <div>
                              <span class="is-danger">{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Gender Input End -->
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
                                    <select class="form-control bg-light" name="year" v-model="formData.childrens[index].year">
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
                                    <select class="form-control bg-light" name="month" v-model="formData.childrens[index].month">
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
                                    <select class="form-control bg-light" name="day" v-model="formData.childrens[index].day">
                                      <option value="" disabled>--</option>
                                      <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                                    </select>
                                    <span class="is-danger">{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>
                                <label class="col-sm-2 col-form-label">日</label>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="form-group row mt-3">
                                <div class="col-sm-10 m-auto">
                                  <ValidationProvider name="" rules="required" v-slot="{ errors }">
                                    <select class="form-control bg-light" name="option" v-model="formData.childrens[index].option">
                                      <option value="生まれ">生まれ</option>
                                      <option value="予定">予定</option>
                                    </select>
                                    <span class="is-danger">{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="m-0 p-0">※登録後は変更することはできません。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Birthday Input End -->
                  <div class="pull-right" v-if="formData.childrens.length !== 1">
                    <a href="#" @click.prevent="removeChildren(index)">消去 {{ ordinalTitle[index] }} 情報 ＞</a>
                  </div>
                </div>
                <div class="card-footer bg-white" v-if="(index + 1) === formData.childrens.length">
                  <div class="text-right mt-2 pr-2">
                    <a href="#" @click.prevent="newChildren" class="--color-e6006e cursor-pointer">＋ {{ ordinalTitle[index + 1] }}の情報を登録する ＞</a>
                  </div>
                </div>
              </div>

              <!-- child Disease Information -->
              <div class="card">
                <div class="card-header bg-white">
                  <h6 class="text-center">下記をご登録いただくと、保育ご予約時に入力の手間が省けます。</h6>
                </div>
                <!-- Children Allergies Underlying Disease Area Start -->
                <div class="card-body">
                  <div class="card" v-for="(children,index) in formData.childrens" :key="children.id">
                    <div class="card-header bg-white">
                      <h6>{{ formData.ordinalTitle[index] }}</h6>
                    </div>
                    <div class="card-body">
                      <div class="form-group-container">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="bg-light input-label">
                              <span>アレルギーの有無 </span>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <div class="input-group-container-right">
                              <ValidationProvider :name="formData.ordinalTitle[index]+'_1'" rules="required" v-slot="{ errors }">
                                <label>
                                  <input
                                    type="radio"
                                    :name="formData.ordinalTitle[index]+'_1'"
                                    v-model="formData.childrens[index].disease[0].allergies"
                                    value="yes"
                                    />
                                   あり
                                </label>
                                <label class="profile-info-radio">
                                  <input
                                    type="radio"
                                    :name="formData.ordinalTitle[index]+'_1'"
                                    v-model="formData.childrens[index].disease[0].allergies"
                                    value="no"
                                    />
                                   なし
                                </label>
                                <span class="is-danger">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>
                          </div>
                        </div>
                        <div class="form-group row mt-3p p-2">
                          <label class="col-sm-3 col-form-label">備考（アレルギー）：</label>
                          <div class="col-sm-9 m-auto">
                            <input type="text" class="form-control" v-model="formData.childrens[index].disease[0].allergies_remark" placeholder="ありの場合、簡単に内容をご記載ください" />
                          </div>
                        </div>
                      </div>
                      <div class="form-group-container">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="bg-light input-label">
                              <span>基礎疾患の有無 </span>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <div class="input-group-container-right">
                              <ValidationProvider :name="formData.ordinalTitle[index]+'_2'" rules="required" v-slot="{ errors }">
                                <label>
                                  <input
                                    type="radio"
                                    :name="formData.ordinalTitle[index]+'_2'"
                                    v-model="formData.childrens[index].disease[0].disease"
                                    value="yes"
                                    />
                                   あり
                                </label>
                                <label class="profile-info-radio">
                                  <input
                                    type="radio"
                                    :name="formData.ordinalTitle[index]+'_2'"
                                    v-model="formData.childrens[index].disease[0].disease"
                                    value="no"
                                    />
                                   なし
                                </label>
                                <span class="is-danger">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>
                          </div>
                        </div>
                        <div class="form-group row mt-3p p-2">
                          <label class="col-sm-3 col-form-label">備考（基礎疾患）：</label>
                          <div class="col-sm-9 m-auto">
                            <input type="text" class="form-control" v-model="formData.childrens[index].disease[0].disease_remark" placeholder="ありの場合、簡単に内容をご記載ください" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Children Allergies Underlying Disease Area End -->
              </div>
              <!-- Next and Previous Button Area Start -->
              <div class="form-group text-center">
                <router-link :to="{ name: 'RegistrationProfile' }">
                  <button type="button" class="btn text-xl exy-default-btn-outline rounded-0 mt-4">
                    次へ
                  </button>
                </router-link>
                <button type="submit" class="btn text-xl exy-default-btn rounded-0 mt-4">
                  次へ
                </button>
              </div>
              <!-- Next and Previous Button Area End -->
            </form>
          </ValidationObserver>
        </div>
      </div>
    </section>
    <!-- Information Registration for Child Area End -->
  </div>
</template>

<script>
import Frontend from "../../../layouts/Frontend";
import store from '../../../store'

export default {
  name: "ProfileInfoTwo",
  created() {
    this.$emit('update:layout', Frontend);
    if(localStorage.getItem('parentRegParams') === null || localStorage.getItem('parentRegParams') === ''){
      this.$router.push({ 
        name: 'Registration'
      });
    }

    var parentRegParams = JSON.parse(localStorage.getItem('parentRegParams'));
    if(parentRegParams.isOTPSuccess == false){
      this.$router.push({ 
        name: 'RegistrationOtp'
      });
    }else if(parentRegParams.isOTPSuccess == true){
      this.formData = parentRegParams;
      // intialize children
      if(this.formData.childrens.length === 0){
        this.newChildren();
        this.newChildren();
      }
    }
  },
  data() {
    return {
      formData: [],
      ordinalTitle: store.state.parentRegParams.ordinalTitle,
      years: [],
      months: [],
      days: [],
    }
  },
  mounted() {
    this.initYear();
    this.initMonth();
    this.initDay();
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
    newChildren(){
      this.formData.childrens.push({
        surname: '',
        name: '',
        furigana_surname: '',
        furigana_name: '',
        gender: '',
        year: '',
        month: '',
        day: '',
        option: '生まれ',
        disease:[
          {
            allergies: '',
            allergies_remark: '',
            disease: '',
            disease_remark: '',
          }
        ]
      });
    },
    removeChildren(index){
      this.formData.childrens.splice(index,1);
    },
    formSubmit(){
      localStorage.setItem('parentRegParams', JSON.stringify(this.formData));
      this.$router.push({ 
        name: 'RegistrationVerification'
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
</style>