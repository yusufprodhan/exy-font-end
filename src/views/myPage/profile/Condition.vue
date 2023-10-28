<template>
  <div class="mypage-profile">
    <div class="mypage-profile-header">
      <h4>条件設定</h4>
      <p class="m-0 p-0">
        条件設定では、保育園を検索する時の条件を事前に設定することによって、より便利に・より希望にあった保育園を見つけることが可能となります。
      </p>
    </div>
    <div class="mypage-condicion-main mt-3">
      <form>
        <div class="mypage-condition-first-step" v-if="conditionFirstStep === true">
          <div class="card">
            <div class="card-body">
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-2">
                    <div class="input-label">
                      <span>住所から近い</span>
                    </div>
                  </div>
                  <div class="col-md-10">
                    <div class="input-group-container-right">
                      <div class="form-group mb-2">
                        <span class="mypage-condition">1</span>
                        <label> 住所から近い</label>
                      </div>
                      <div class="form-group mb-2">
                        <span class="mypage-condition">2</span>
                        <label> 希望駅から近い</label>
                      </div>
                      <div class="form-group mb-2">
                        <span class="mypage-condition">3</span>
                        <label> 希望カテゴリの合致数が多い</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-2">
                    <div class="input-label">
                      <span>住所</span>
                    </div>
                  </div>
                  <div class="col-md-10">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">住所</p>
                      <p class="m-0 p-0">{{ parentAddress.city+' ,'+ parentAddress.address+' ,'+ parentAddress.building_name }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-2">
                    <div class="input-label">
                      <span>希望駅登録</span>
                    </div>
                  </div>
                  <div class="col-md-10">
                    <div class="input-group-container-right">
                      <div class="form-group mb-2">
                        <span class="mypage-condition">1</span>
                        <label class="bg-light"> Osaka Metro 地下鉄四ツ橋線 四ツ橋駅</label>
                      </div>
                      <div class="form-group mb-2">
                        <span class="mypage-condition">2</span>
                        <label class="bg-light"> Osaka Metro 地下鉄御堂筋線線 心斎橋駅</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-2">
                    <div class="input-label">
                      <span>希望カテゴリ</span>
                    </div>
                  </div>
                  <div class="col-md-10">
                    <div class="input-group-container-right">
                      <div class="form-group mb-2">
                        <span class="mypage-condition">1</span>
                        <label class="bg-light"> 体験保育（一時保育）</label>
                      </div>
                      <div class="form-group mb-2">
                        <span class="mypage-condition">2</span>
                        <label class="bg-light"> リフレッシュ利用可能</label>
                      </div>
                      <div class="form-group mb-2">
                        <span class="mypage-condition">3</span>
                        <label class="bg-light"> ０歳児（６ヶ月未満）</label>
                      </div>
                      <div class="form-group mb-2">
                        <span class="mypage-condition">4</span>
                        <label class="bg-light"> 延長保育（夕方）</label>
                      </div>
                      <div class="form-group mb-2">
                        <span class="mypage-condition">5</span>
                        <label class="bg-light"> 慣らし保育なし</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group text-center mt-4">
                <button type="button" class="exy-default-btn-outline" @click="changeCondtionStep">
                  変更する
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mypage-condition-second-step mt-3" v-if="conditionFirstStep === false">
          <div class="card">
            <div class="card-body">
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-2">
                    <div class="input-label">
                      <span>優先度</span>
                    </div>
                  </div>
                  <div class="col-md-10">
                    <div class="input-group-container-right">
                      <div class="form-group mb-2">
                        <select
                          v-model="conditionSetting.address"
                          class="mr-3 mypage-condition-select" 
                          @change="changePriority($event,'address')"
                        >
                        <option 
                          v-for="priority in prioritise" 
                          :key="priority.id" 
                          :value="priority.value"
                          :selected="conditionSetting.address === priority.value"
                        >
                          {{ priority.name }}
                        </option>
                        </select>
                        <label> 住所から近い</label>
                      </div>
                      <div class="form-group mb-2">
                        <select
                          v-model="conditionSetting.station"
                          class="mr-3 mypage-condition-select" 
                          @change="changePriority($event,'station')"
                        >
                        <option
                          v-for="priority in prioritise" 
                          :key="priority.id" 
                          :value="priority.value"
                          :selected="conditionSetting.station === priority.value"
                        >
                          {{ priority.name }}
                        </option>
                        </select>
                        <label> 希望駅から近い</label>
                      </div>
                      <div class="form-group mb-2">
                        <select
                          v-model="conditionSetting.category"
                          class="mr-3 mypage-condition-select" 
                          @change="changePriority($event,'category')"
                        >
                        <option
                          v-for="priority in prioritise" 
                          :key="priority.id" 
                          :value="priority.value"
                          :selected="conditionSetting.station === priority.value"
                        >
                          {{ priority.name }}
                        </option>
                        </select>
                        <label> 希望カテゴリの合致数が多い</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-2">
                    <div class="input-label">
                      <span>職場登録</span>
                    </div>
                  </div>
                  <div class="col-md-10">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">住所</p>
                      <p class="m-0 p-0">{{ parentAddress.city+' ,'+ parentAddress.address+' ,'+ parentAddress.building_name }}</p>
                      <p class="m-0 p-0">※住所の変更はプロフィールで変更が可能です。</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-2">
                    <div class="input-label">
                      <span>希望駅登録</span>
                    </div>
                  </div>
                  <div class="col-md-10">
                    <div class="input-group-container-right">
                      <div class="form-group mb-2 cursor-pointer" @click="designAreaModal = true">
                        <span class="mypage-condition">1</span>
                        <label class="bg-light"> Osaka Metro 地下鉄四ツ橋線 四ツ橋駅 </label>
                      </div>
                      <div class="form-group mb-2 cursor-pointer" @click="designAreaModal = true">
                        <span class="mypage-condition">2</span>
                        <label class="bg-light"> Osaka Metro 地下鉄御堂筋線線 心斎橋駅</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-2">
                    <div class="input-label">
                      <span>希望カテゴリ</span>
                    </div>
                  </div>
                  <div class="col-md-10">
                    <div class="input-group-container-right">
                      <div class="form-group mb-2 cursor-pointer" @click="designCategoryModal = true">
                        <span class="mypage-condition">1</span>
                        <label class="bg-light"> 体験保育（一時保育）</label>
                      </div>
                      <div class="form-group mb-2 cursor-pointer" @click="designCategoryModal = true">
                        <span class="mypage-condition">2</span>
                        <label class="bg-light">リフレッシュ利用可能</label>
                      </div>
                      <div class="form-group mb-2 cursor-pointer" @click="designCategoryModal = true">
                        <span class="mypage-condition">3</span>
                        <label class="bg-light">０歳児（６ヶ月未満）</label>
                      </div>
                      <div class="form-group mb-2 cursor-pointer" @click="designCategoryModal = true">
                        <span class="mypage-condition">4</span>
                        <label class="bg-light">延長保育（夕方）</label>
                      </div>
                      <div class="form-group mb-2 cursor-pointer" @click="designCategoryModal = true">
                        <span class="mypage-condition">5</span>
                        <label class="bg-light">慣らし保育なし</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group text-center mt-4">
                <button type="button" class="exy-default-btn" @click="changeCondtionStep">
                  登録する
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <!-- Category modal start  -->

    <!-- End of Category modal start  -->
    <DesirAreaModal v-if="designAreaModal" @close="designAreaModal = false"/>
    <DesirCategoryModal v-if="designCategoryModal" @close="designCategoryModal = false"/>

  </div>
</template>

<script>
import DesirAreaModal from '../../../components/modal/DesirAreaModal.vue';
import DesirCategoryModal from '../../../components/modal/DesirCategoryModal.vue';
import axios from "../../../axios";

export default {
  name: "Condition",
  data() {
    return {
      conditionFirstStep: true,
      designAreaModal: false,
      designCategoryModal: false,
      priorityArray: [],
      conditionSetting:this.initialForm(),
      parentAddress:{
        address: '',
        city: '',
        building_name: '',
      },
      parent_id: null,
      data: {},
      prioritise: [
        {
          id: 1,
          name: "1",
          value: "one"
        },
        {
          id: 2,
          name: "2",
          value: "two"
        },
        {
          id: 3,
          name: "3",
          value: "three"
        }
      ]
    };
  },
  components: {
    DesirAreaModal,
    DesirCategoryModal
  },
  created(){
    this.getConditionSetting();
  },
  methods: {
    changeCondtionStep() {
      this.conditionFirstStep = !this.conditionFirstStep;
    },
    getConditionSetting(){
      axios.get('/condition-setting').then((res) => {
        this.parent_id = res.data.data.id;
        this.parentAddress = res.data.data;
        this.conditionSetting = res.data.data.condition_setting;
        if(this.conditionSetting == null){
          this.conditionSetting = this.initialForm();
        }
      }).catch(error => {
        this.checkError(error)
      });
    },
    changePriority(event,name) {
      const target = event.target;
      const value = target.value;
      this.conditionSetting[name] = value;
      this.conditionSetting.id ? this.updateConditionSetting(this.conditionSetting.id) : this.storeConditionSetting();
    },
    storeConditionSetting(){
      axios.post('/condition-setting',this.conditionSetting).then((res) => {
        console.log(res);
      }).catch(error => {
        this.checkError(error)
      });
    },
    updateConditionSetting(id){
      axios.post(`/condition-setting/${id}`,this.conditionSetting).then((res) => {
        console.log(res);
      }).catch(error => {
        this.checkError(error)
      });
    },
    initialForm(){
      return{
        parent_id:this.parent_id,
        address: "",
        station: "",
        category: "",
        breadth: null,
        break_in: null,
        campaign: null,
        child_age: null,
        child_care: null,
        extend_childcare: null,
        garden_scale: null,
        holiday_childcare: null,
        playground: null,
        playground_2: null,
        service: null
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.mypage-profile-header h4 {
  color: #333333;
  position: relative;
  margin-bottom: 25px;

  &::after {
    content: "";
    display: block;
    clear: both;
    background: #333333;
    width: 78%;
    height: 1px;
    position: absolute;
    right: 7px;
    top: 14px;
  }
}

.mypage-profile-prfileimage {
  p {
    font-size: 13px;
  }
}

.mypage-profile-singlebox {
  display: flex;
  align-items: center;

  .mypage-profile-singlebox-label {
    margin-right: 10px;
    width: 15%;
  }

  .mypage-profile-singlebox-border {
    margin-right: 10px;
    width: 2%;

    &::after {
      content: "";
      display: block;
      clear: both;
      height: 20px;
      width: 1px;
      background: #666;
    }
  }

  .mypage-profile-singlebox-main {
    width: 80%;
  }
}

.btn-link {
  color: #333333 !important;
}

.form-group-container {
  .input-label {
    background: #aaaaaa;
    color: #fff;
  }
}

.input-group-container-right label {
  padding-left: 18px;
  min-width: 50%;
  cursor: pointer;
}

.mypage-condition {
  border: 1px solid #ccc;
  padding: 4px 21px;
  border-radius: 5px;
  font-weight: bold;
}

.mypage-condition-select {
  border: 1px solid #ccc;
  padding: 4px;
  border-radius: 5px;
}
</style>
