<template>
  <div class="py-2 overflow-hidden mb-5 mt-4">
    <!-- right column -->
    <div class="child-information mb-5">
      <div class="hr-title fw-bold text-2xl">お子さま情報</div>
      <!-- tabs -->
      <div class="custom-tab-pill-two pt-4">
        <div class="px-0 tabs">
          <!-- * link * -->
          <a class="nav-item border" v-for="(data,index) in childrens" :key="index"
             :class="[ activeTab === index ? 'active' : '' ]" @click="activeTab = index,newChildActiveTab=null"> {{ ordinalTitle[index] }}</a>

          <a class="nav-item border" v-for="i in newChildTab" :key="'new'+i" :class="[ newChildActiveTab === i ? 'active' : '' ]"
             @click="newChildActiveTab = i,activeTab=null"> 新しい子を追加する Tab {{i+1}} <button class="float-end" @click="removeNewChildAddTab(i)">-</button></a>
          <a @click="addNewChildTab" class="add"> ＋</a>
        </div>
      </div>
      <!-- /tabs -->
      <!-- tab content -->
      <!-- New child tab       -->
      <div v-for="(data,index) in childrens" :key="index">
        <div v-if="activeTab=== index" class="first-child border bg-light p-2 mb-5">
          <div class="bg-white p-3">
            <div>名前 (ふりがな)</div>
            <div class="ms-3 mt-3">
              {{ data.furigana_name }}
            </div>
          </div>
          <div class="bg-white p-3 mt-2">
            <div>生年月日（年齢）</div>
            <div class="ms-3 mt-3">
              令和2年({{ new Date(data.birthday).toLocaleString('en-us', {year: 'numeric'}) }}年){{ new Date(data.birthday).toLocaleString('fr-CA', {month: '2-digit'}) }}月{{ new Date(data.birthday).toLocaleString('en-us', {day: 'numeric'}) }}日生
              生まれ (満{{ getAge(data.birthday) }}歳)
            </div>
          </div>
          <div class="bg-white p-3 mt-2">
            <div>性別</div>
            <div class="ms-3 mt-3 row">
              <div class="col-md-6">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="sex" id="boy" value="boy"
                         :checked="data.gender == 'boy'" v-model="data.gender" @change="onChangeGender($event)"/>
                  <label class="form-check-label ms-2" for="boy">
                    男の子
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="sex" id="girl" value="girl"
                         :checked="data.gender == 'girl'" v-model="data.gender" @change="onChangeGender($event)"/>
                  <label class="form-check-label ms-2" for="girl">
                    女の子
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="sex" id="unanswered" value="no"
                         :checked="data.gender == 'no'" v-model="data.gender" @change="onChangeGender($event)"/>
                  <label class="form-check-label ms-2" for="unanswered">
                    未回答
                  </label>
                </div>
              </div>
              <div class="col-md-6 text-end">
                <button class="border border-seconadry px-5 py-2 bg-white shadow-sm" :children-id="data.id"
                        @click="onClickGender($event)">
                  変更する
                </button>
              </div>
            </div>
          </div>
          <div class="bg-white p-3 mt-2">
            <div>アレルギーの有無（備考）</div>
            <div class="ms-3 mt-3 row" v-if="!updateRemark._allergies">
              <div class="col-md-6">
                <div>
                  {{ data.disease.allergies_remark }}
                </div>
              </div>
              <div class="col-md-6 text-end">
                <button class="border border-secondary px-5 py-2 bg-white shadow-sm"
                        @click="doChangeAction($event,'_allergies',null)">
                  変更する
                </button>
              </div>
            </div>
            <div class="ms-3 mt-3 row" v-if="updateRemark._allergies">
              <div class="col-md-6">
                <div>
                  <input
                      type="text"
                      class="form-control bg-light"
                      name="formData.allergies_remark"
                      placeholder="例）保育"
                      v-model="data.disease.allergies_remark"
                  />
                </div>
              </div>
              <div class="col-md-6 text-end">
                <button type="button" class="border border-secondary px-5 py-2 bg-white shadow-sm"
                        :children-id="data.id" :remark="data.disease.allergies_remark"
                        @click="doChangeAction($event,'_allergies','allergies_remark')">
                  アップデート
                </button>
              </div>
            </div>
          </div>
          <div class="bg-white p-3 mt-2">
            <div>基礎疾患の有無（備考）</div>
            <div class="ms-3 mt-3 row" v-if="!updateRemark._disease">
              <div class="col-md-6">
                <div>
                  {{ data.disease.disease_remark }}
                </div>
              </div>
              <div class="col-md-6 text-end">
                <button class="border border-secondary px-5 py-2 bg-white shadow-sm"
                        @click="doChangeAction($event,'_disease',null,)">
                  変更する
                </button>
              </div>
            </div>
            <div class="ms-3 mt-3 row" v-if="updateRemark._disease">
              <div class="col-md-6">
                <div>
                  <input
                      type="text"
                      class="form-control bg-light"
                      name="formData.disease_remark"
                      placeholder="例）保育"
                      v-model="data.disease.disease_remark"
                  />
                </div>
              </div>
              <div class="col-md-6 text-end">
                <button type="button" class="border border-secondary px-5 py-2 bg-white shadow-sm"
                        :children-id="data.id" :remark="data.disease.disease_remark"
                        @click="doChangeAction($event,'_disease','disease_remark')">
                  アップデート
                </button>
              </div>
            </div>
          </div>
          <div class="bg-secondary p-3 mt-5 text-white">
            書類登録
          </div>
          <router-link :to="{name:'Mypage.ChildHealthDocumentUpload',params:{id:data.id}}">
            <div class="bg-white p-3 mt-1">
              <div class="ms-3 row p-2">
                <div class="col-md-6">
                  <div>
                    保険証
                  </div>
                </div>
                <div class="col-md-6 text-end">
                  <span class="color-kigaruni-pink">登録完了</span>
                  <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                </div>
              </div>
            </div>
          </router-link>

          <router-link :to="{name:'Mypage.ChildQuestionnaire'}">
            <div class="bg-white p-3 mt-2">
              <div class="ms-3 row p-2">
                <div class="col-md-6">
                  <div>
                    児童調査票
                  </div>
                </div>
                <div class="col-md-6 text-end">
                  <span class="color-kigaruni-pink">登録完了</span>
                  <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                </div>
              </div>
            </div>
          </router-link>

          <router-link :to="{name:'ChildQuestionnaireSecondary'}">
            <div class="bg-white p-3 mt-2">
              <div class="ms-3 row p-2">
                <div class="col-md-6">
                  <div>
                    離乳食についての調査票
                  </div>
                </div>
                <div class="col-md-6 text-end">
                  <span class="color-kigaruni-pink">登録完了</span>
                  <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                </div>
              </div>
            </div>
          </router-link>

          <div class="bg-white p-3 mt-2">
            <div class="ms-3 row p-2">
              <div class="col-md-6">
                <div>
                  食品調査票
                </div>
              </div>
              <div class="col-md-6 text-end">
                <span class="color-kigaruni-pink">登録完了</span>
                <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
              </div>
            </div>
          </div>
          <router-link :to="{name:'Mypage.MotherChildNotebook',params:{id:data.id}}">
            <div class="bg-white p-3 mt-2">
              <div class="ms-3 row p-2">
                <div class="col-md-6">
                  <div>
                    母子手帳
                  </div>
                </div>
                <div class="col-md-6 text-end">
                  <span class="color-kigaruni-pink">登録完了 (４／４)</span>
                  <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                </div>
              </div>
            </div>
          </router-link>
          <router-link :to="{name:'Mypage.AllergiesDiseaseDocument',params:{id:data.id}}">
            <div class="bg-white p-3 mt-2">
              <div class="ms-3 row p-2">
                <div class="col-md-9">
                      <span>
                        アレルギー管理生活疾患指導表（アレルギーをお持ちの方のみ）
                      </span>
                  <span class="ms-4 border p-2 border-secondary border-2 rounded">
                        <span class="fa fa-file-pdf-o me-2"></span>
                          <span>ダウンロード</span>
                        </span>
                </div>
                <div class="col-md-3 text-end">
                  <span class="color-kigaruni-pink">登録完了</span>
                  <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                </div>
              </div>
            </div>
          </router-link>
          <div class="bg-kigaruni-gainsboro p-3 mt-5">
            各園追加書類
          </div>
          <div class="bg-white p-3 mt-2">
            <div class="ms-3 row p-2">
              <div class="col-md-6">
                <span class="text-lg fw-bold">COCOROHOIKUEN</span>
              </div>
              <div class="col-md-6 text-end">
                <span class="color-kigaruni-pink">登録完了</span>
                <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="i in newChildTab" :key="'new'+i">
        <div v-if="newChildActiveTab === i" class="first-child border bg-light p-2 mb-5">
          <ValidationObserver v-slot="{  handleSubmit }">
              <form @submit.prevent=" handleSubmit(childAddFormSubmit)" autocomplete="off">
                  <!-- child Information -->
                  <div class="card mb-1">
                    <div class="card-header">
                      <h5>子供の情報</h5>
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
                                <!-- Surname Input End -->
                                <!-- Name Input Start -->
                                <div class="col-md-5">
                                  <div class="form-group row mt-3">
                                    <label class="col-sm-3 col-form-label">名：</label>
                                    <div class="col-sm-9 m-auto">
                                      <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="例）太郎"
                                            name="formData.name"
                                            v-model="formData.name"
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
                                <!-- Surname Input End -->
                                <!-- Name Input Start -->
                                <div class="col-md-5">
                                  <div class="form-group row mt-3">
                                    <label class="col-sm-3 col-form-label">名：</label>
                                    <div class="col-sm-9 m-auto">
                                      <ValidationProvider name="Furigana Name" rules="required" v-slot="{ errors }">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="例）たろう"
                                            name="formData.furigana_name"
                                            v-model="formData.furigana_name"
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
                              <ValidationProvider name="Gender" rules="required" v-slot="{ errors }">
                                <label class="profile-info-radio">
                                  <input
                                      type="radio"
                                      name="formData.gender"
                                      v-model="formData.gender"
                                      value="boy"
                                  />
                                  男の子
                                </label>
                                <label class="profile-info-radio">
                                  <input
                                      type="radio"
                                      name="formData.gender"
                                      v-model="formData.gender"
                                      value="girl"
                                  />
                                  女の子
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
                                <div class="col-md-3">
                                  <div class="form-group row mt-3">
                                    <div class="col-sm-10 m-auto">
                                      <ValidationProvider name="" rules="required" v-slot="{ errors }">
                                        <select class="form-control bg-light" name="option" v-model="formData.option">
                                          <option value="生まれ">生まれ</option>
                                          <option value="予定">予定</option>
                                        </select>
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
                      <!-- Birthday Input End -->
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header bg-white">
                      <h6 class="text-center">下記をご登録いただくと、保育ご予約時に入力の手間が省けます。</h6>
                    </div>
                    <!-- Children Allergies Underlying Disease Area Start -->
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
                              <ValidationProvider name="Allergies" rules="required" v-slot="{ errors }">
                                <label>
                                  <input
                                      type="radio"
                                      name="formData.allergies"
                                      v-model="formData.allergies"
                                      value="yes"
                                  />
                                  あり
                                </label>
                                <label class="profile-info-radio">
                                  <input
                                      type="radio"
                                      name="formData.allergies"
                                      v-model="formData.allergies"
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
                            <input type="text" class="form-control" v-model="formData.allergies_remark"
                                   placeholder="ありの場合、簡単に内容をご記載ください"/>
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
                              <ValidationProvider name="Disease" rules="required" v-slot="{ errors }">
                                <label>
                                  <input
                                      type="radio"
                                      name="formData.disease"
                                      v-model="formData.disease"
                                      value="yes"
                                  />
                                  あり
                                </label>
                                <label class="profile-info-radio">
                                  <input
                                      type="radio"
                                      name="formData.disease"
                                      v-model="formData.disease"
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
                            <input type="text" class="form-control" v-model="formData.disease_remark"
                                   placeholder="ありの場合、簡単に内容をご記載ください"/>
                          </div>
                          <div class="col-sm-9 m-auto text-center mt-2">
                            <button type="submit" class="btn text-xl exy-default-btn rounded-0">保存する</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Children Allergies Underlying Disease Area End -->
                  </div>
              </form>
          </ValidationObserver>
        </div>
      </div>
      <!-- /tab content -->
    </div>
    <!-- /right column -->
  </div>
</template>

<script>
import Frontend from "../../../layouts/Frontend.vue";
import axios from "@/axios";
import store from "@/store";
export default {
  name: "ChildInformation",
  data() {
    return {
      activeTab: 0,
      childrens: [],
      user: [],
      formData: [],
      isHiddenAllergiesRemark: false,
      isHiddenDiseaseRemark: false,
      isChildAddTab: false,
      years: [],
      months: [],
      days: [],
      ordinalTitle: store.state.parentRegParams.ordinalTitle,
      updateRemark: {
        _allergies: false,
        _disease: false,
      },
      childGender: null,
      children_id: null,
      remark: null,
      newChildTab: [],
      newChildTabCounter: 0,
      newChildActiveTab:null,
    }
  },
  created() {
    this.$emit('update:layout', Frontend)

    /* --- user details --- */
    this.getParentLatestData();
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
    getParentLatestData() {
      this.isLoadingshow = true;
      axios.get('/parent').then((res) => {
        this.isLoadingshow = false;
        this.user = res.data;
        this.childrens = res.data.details.childrens;
      }).catch(error => {
        this.isLoadingshow = false;
        this.checkError(error)
      });
    },
    addNewChildTab() {
      this.newChildTab.push(this.newChildTabCounter++);
    },
    removeNewChildAddTab(){
      this.newChildTab.pop();
      this.newChildTabCounter--;
    },
    childAddFormSubmit() {
      axios.post('/add-new-children',
          {
            parent_id: this.user.details.id,
            surname: this.formData.surname,
            name: this.formData.name,
            furigana_surname: this.formData.furigana_surname,
            furigana_name: this.formData.furigana_name,
            gender: this.formData.gender,
            day: this.formData.day,
            month: this.formData.month,
            year: this.formData.year,
            option: this.formData.option,
            allergies: this.formData.allergies,
            allergies_remark: this.formData.allergies_remark,
            disease: this.formData.disease,
            disease_remark: this.formData.disease_remark,
          })
          .then((response) => {
            if (response.data.success) {
              this.$toast.success(response.data.message);
              this.getParentLatestData();
              this.isChildAddTab = false;
              this.activeTab = this.childrens.length;

              this.newChildActiveTab=null;
              this.newChildTab.splice(1, 1);
            }
          }).catch(error => {
        this.checkError(error);
      })
    },
    getAge(dateString) {
      let today = new Date();
      let birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    onChangeGender(e) {
      this.childGender = e.target.value;
    },
    onClickGender(e) {
      axios.post('/update-child-gen-aller-dis',
          {
            id: e.target.getAttribute('children-id'),
            gender: this.childGender,
          })
          .then((response) => {
            if (response.data.success) {
              this.$toast.success(response.data.message);
              this.getParentLatestData();
            }
          }).catch(error => {
        this.checkError(error);
      })
    },
    doChangeAction(e, _state, _action) {
      this.children_id = e.target.getAttribute('children-id')
      this.remark = e.target.getAttribute('remark')
      if (_action !== null && this.children_id !== null && this.remark !== null) {
        var params = {
          [_action]: this.remark,
          id: this.children_id
        };
        axios.post('/update-child-gen-aller-dis', params)
            .then((response) => {
              if (response.data.success) {
                this.$toast.success(response.data.message);
                this.getParentLatestData();
              }
            }).catch(error => {
          this.checkError(error);
        })
        this.updateRemark[_state] = !this.updateRemark[_state];
      } else {
        this.updateRemark[_state] = !this.updateRemark[_state];
      }
    },

  }
};
</script>
<style scoped>
.child-information .tabs {
  overflow: scroll;
  width: 1046px;
}

.child-information .tabs .nav-item {
  width: 15%;
}

.profile-info-radio {
  margin-left: 25px;
}

.is-danger {
  color: #f22435;
}

</style>
