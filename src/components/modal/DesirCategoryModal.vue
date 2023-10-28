<template>
    <div class="modal show" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="close" @click="$emit('close')">
            <i class="fa fa-times-circle text-2xl"></i>
          </div>
          <div class="p-4 mt-4">
            <h4 class="m-0 p-0 color-cb3a82">希望カテゴリ登録</h4>
            <p class="m-0 p-0">
              保育園をさがす上で希望しているカテゴリを５つお選びください
            </p>
          </div>
          <div class="v-step-one-main p-4 pt-2">
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <!-- Child Care -->
                <h6>保育サービス</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-4" v-for="childCare in childCares" :key="childCare.id">
                        <label class="container-checkbox">{{ childCare.name }}
                          <input 
                            type="radio"
                            :value="childCare.value"
                            v-model="desireCategory.child_care"
                          >
                          <span class="checkmark" :class="desireCategory.child_care ? 'rounded-circle':''">
                            <small>{{ desireCategory.child_care ? '1' : ''}}</small>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <!-- Child Age -->
                <h6 class="bg-707070">子どもの年齢</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3" v-for="(item, index) in childAge" :key="index">
                        <label class="container-checkbox"> {{ item.name }}
                          <input 
                            type="radio" 
                            :value="item.id" 
                            v-model="desireCategory.child_age"
                          >
                          <span class="checkmark" :class="desireCategory.child_age ? 'rounded-circle':''">
                            <small>{{ desireCategory.child_age ? '1' : '' }}</small>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
              <!-- campaign -->
                <h6>キャンペーン</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3" v-for="(item, index) in campaign" :key="index">
                        <label class="container-checkbox"> {{ item.name }}
                          <input 
                            type="checkbox" 
                            :value="item.id" 
                            v-model="desireCategory.campaign"
                          >
                          <span class="checkmark" :class="desireCategory.campaign ? 'rounded-circle':''">
                            <small>{{ desireCategory.campaign ? '1' : ''}}</small>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <!-- Extended childcare -->
                <h6 class="bg-707070">延長保育</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3" v-for="(item, index) in extendedChildCare" :key="index">
                        <label class="container-checkbox"> {{ item.name }}
                          <input 
                            type="radio" 
                            :value="item.id" 
                            v-model="desireCategory.extend_childcare"
                          >
                          <span class="checkmark" :class="desireCategory.extend_childcare ? 'rounded-circle':''">
                            <small>{{ desireCategory.extend_childcare ? '1' : '' }}</small>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <!-- Holiday childcare -->
                <h6>休日保育</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3" v-for="(item, index) in holidayChildCare" :key="index">
                        <label class="container-checkbox"> {{ item.name }}
                          <input 
                            type="radio" 
                            :value="item.id" 
                            v-model="desireCategory.holiday_childcare"
                          >
                          <span class="checkmark" :class="desireCategory.holiday_childcare ? 'rounded-circle':''">
                            <small>{{ desireCategory.holiday_childcare ? '1' : '' }}</small>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <!-- Service -->
                <h6 class="bg-707070">サービス</h6> 
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-4" v-for="(item, index) in service" :key="index">
                        <label class="container-checkbox"> {{ item.name }}
                          <input 
                            type="radio" 
                            :value="item.id" 
                            v-model="desireCategory.service"
                          >
                          <span class="checkmark" :class="desireCategory.service ? 'rounded-circle':''">
                            <small>{{ desireCategory.service ? '1' : '' }}</small>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <!-- Garden scale -->
                <h6>園規模</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-4" v-for="(item, index) in gardenScale" :key="index">
                        <label class="container-checkbox"> {{ item.name }}
                          <input 
                            type="radio" 
                            :value="item.id" 
                            v-model="desireCategory.garden_scale"
                          >
                          <span class="checkmark" :class="desireCategory.garden_scale ? 'rounded-circle':''">
                            <small>{{ desireCategory.garden_scale ? '1' : '' }}</small>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <!-- Breadth -->
                <h6 class="bg-707070">広さ</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-4" v-for="(item, index) in breadthData" :key="index">
                        <label class="container-checkbox"> {{ item.name }}
                          <input 
                            type="radio" 
                            :value="item.id" 
                            v-model="desireCategory.breadth"
                          >
                          <span class="checkmark" :class="desireCategory.breadth ? 'rounded-circle':''">
                            <small>{{ desireCategory.breadth ? '1' : '' }}</small>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <!-- Playground -->
                <h6>園庭</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                  <div class="row">
                    <div class="col-md-4" v-for="(item, index) in playGround" :key="index">
                      <label class="container-checkbox"> {{ item.name }}
                        <input type="checkbox" :value="item.id" v-model="desireCategory.playground">
                        <span class="checkmark" :class="desireCategory.playground ? 'rounded-circle':''">
                          <small>{{ desireCategory.playground ? '1' : '' }}</small>
                        </span>
                      </label>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <!-- Break-in childcare -->
                <h6 class="bg-707070">慣らし保育</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                  <div class="row">
                    <div class="col-md-4" v-for="(item, index) in bChildCare" :key="index">
                      <label class="container-checkbox"> {{ item.name }}
                        <input type="checkbox" :value="item.id" v-model="desireCategory.break_in">
                        <span class="checkmark" :class="desireCategory.break_in ? 'rounded-circle':''">
                          <small>{{ desireCategory.break_in ? '1' : '' }}</small>
                        </span>
                      </label>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <!-- Playground 2 -->
                <h6>園庭</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                  <div class="row">
                    <div class="col-md-4" v-for="(item, index) in playGroundTwo" :key="index">
                      <label class="container-checkbox"> {{ item.name }}
                        <input type="radio" :value="item.id" v-model="desireCategory.playground_2">
                        <span class="checkmark" :class="desireCategory.playground_2 ? 'rounded-circle':''">
                          <small>{{ desireCategory.playground_2 ? '1' : '' }}</small>
                        </span>
                      </label>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group text-center mt-5">
              <button 
                class="exy-default-btn"
                @click="submitDesirCategory"
              >
                希望カテゴリ登録
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import axios from "../../axios";
export default {
  name: "DesirCategoryModal",
  data(){
    return {
      desireCategory: this.initForm(),
      isModalVisible: false,
      data:{},
      parent_id:'',
      childCares:[
        {
          id: 1,
          name: "体験保育（一時保育）",
          value: "1",
        },
        {
          id: 2,
          name: "月極保育",
          value: "2",
        },
        {
          id: 3,
          name: "病児・病後児保育",
          value: "3",
        },
      ],
      childAge:[
        {
          id: 1,
          name: "０歳児（6ヶ月未満）",
          value: "1",
        },
        {
          id: 2,
          name: "０歳児（6ヶ月以上）",
          value: "2",
        },
        {
          id: 3,
          name: "１歳児",
          value: "3",
        },
        {
          id: 4,
          name: "２歳児",
          value: "4",
        },
        {
          id: 5,
          name: "３歳児",
          value: "5",
        },
        {
          id: 6,
          name: "４歳児",
          value: "6",
        },
        {
          id: 7,
          name: "５歳児",
          value: "7",
        }
      ],
      campaign: [
        {
          id: 1,
          name: "あり",
          value: "1",
        }
      ],
      extendedChildCare:[
        {
          id: 1,
          name: "延長保育（早朝）",
          value: "1",
        },
        {
          id: 2,
          name: "延長保育（夕方）",
          value: "2",
        },
        {
          id: 3,
          name: "夜間保育",
          value: "3",
        },
        {
          id: 4,
          name: "お泊まり保育",
          value: "4",
        }
      ],
      holidayChildCare: [
        {
          id: 1,
          name: "土曜日",
          value: "1",
        },
        {
          id: 2,
          name: "日曜日",
          value: "2",
        },
        {
          id: 3,
          name: "祝日",
          value: "3",
        }
      ],
      service: [
        {
          id: 1,
          name: "連絡アプリ導入済み",
          value: "1",
        },
        {
          id: 2,
          name: "保護者会等あり",
          value: "2",
        },
        {
          id: 3,
          name: "保護者参加行事あり",
          value: "3",
        },
        {
          id: 4,
          name: "制服・指定服あり",
          value: "4",
        },
        {
          id: 5,
          name: "アレルギー対応あり",
          value: "5",
        },
        {
          id: 6,
          name: "ベビーカー置き場あり",
          value: "6",
        },
        {
          id: 7,
          name: "駐車場・駐輪場あり",
          value: "7",
        },
        {
          id: 8,
          name: "リフレッシュ利用可能",
          value: "8",
        },
        {
          id: 9,
          name: "リフレッシュ利用可能",
          value: "9",
        }
      ],
      gardenScale:[
        {
          id: 1,
          name: "小規模（19名以下）",
          value: "1",
        },
        {
          id: 2,
          name: "中規模（59名以下）",
          value: "2",
        },
        {
          id: 3,
          name: "大規模（60名以上）",
          value: "3",
        }
      ],
      breadthData:[
        {
          id: 1,
          name: "80平米以下",
          value: "1",
        },
        {
          id: 2,
          name: "81〜200平米以下",
          value: "2",
        },
        {
          id: 3,
          name: "200平米以上",
          value: "3",
        }
      ],
      playGround:[
        {
          id: 1,
          name: "あり",
          value: "1",
        }
      ],
      bChildCare:[
        {
          id: 1,
          name: "なし",
          value: "1",
        }
      ],
      playGroundTwo:[
        {
          id: 1,
          name: "習い事",
          value: "2",
        },
        {
          id: 2,
          name: "手ぶら登園",
          value: "2",
        },
        {
          id: 3,
          name: "こだわり給食",
          value: "3",
        },
        {
          id: 4,
          name: "送迎サービス",
          value: "4",
        },
        {
          id: 5,
          name: "夕食・補食",
          value: "5",
        },
        {
          id: 6,
          name: "運動教育",
          value: "6"
        },
        {
          id: 7,
          name: "英語教育",
          value: "7",
        },
        {
          id: 8,
          name: "幼児教育",
          value: "8",
        },
        {
          id: 9,
          name: "就学前教育",
          value: "9",
        }
      ]
    };
  },
  created(){
    this.getCategory();
  },
  methods: {
    getCategory(){
      axios.get('/condition-setting').then((res) => {
        this.parent_id = res.data.data.id;
        this.desireCategory = res.data.data.condition_setting;

        if(this.desireCategory == null){
          this.desireCategory = this.initForm();
        }
      }).catch(error => {
        this.checkError(error)
      });
    },
    submitDesirCategory(){
      this.desireCategory.id ? this.updateDesireCategory(this.desireCategory.id) : this.storeDesireCategory();
    },
    storeDesireCategory(){
      axios.post('/condition-setting',this.desireCategory).then((res) => {
        console.log(res.data);
        this.$emit('close');
      }).catch(error => {
        this.checkError(error)
      });
    },
    updateDesireCategory(id){
      axios.post(`/condition-setting/${id}`,this.desireCategory).then((res) => {
        console.log(res.data);
        this.$emit('close');
      }).catch(error => {
        this.checkError(error)
      });
    },
    initForm(){
      return{
        parent_id: this.parent_id,
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
  }
};
</script>

<style lang="scss">
.exy-default-btn {
  margin-left: 10px;
}

.modal {
  display: block;
  background: rgba(0, 0, 0, 0.7);

  .modal-content {
    background: #fff;
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
.text-base {
  font-size: 0.8rem !important;
}
.category-select-single-area-header {
  position: relative;
  h6 {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 3px 5px 0 0;
    border-radius: 6px;
    width: 109px;
    text-align: center;
    margin: 15px 0;
    font-size: 13px;
    height: 27px;
    line-height: 21px;
    &::after {
      content: "";
      display: block;
      clear: both;
      height: 1px;
      width: 86%;
      background: #ccc;
      position: absolute;
      top: 27px;
      left: 112px;
    }
  }
}
.bg-707070 {
  background: #707070;
  color: #fff;
}

.container-checkbox {
  .checkmark:after {
    height: 20px;
    width: 20px;
    background: #84C942;
    top: 0;
    left: -2px;
    border: none;
    transform: inherit;
    border-radius: 50%;
  }

  small {
    position: absolute;
    top: 55%;
    left: 50%;
    color: #ffffff;
    font-size: 12px;
    z-index: 9;
    transform: translate(-50%, -40%);
    font-weight: 900;
  }
}

</style>