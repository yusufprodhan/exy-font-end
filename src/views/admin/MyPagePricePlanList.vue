<template>
  <div>
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <div class="container" style="min-height: 100vh">
      <h4 class="my-4">料金表</h4>

      <div class="d-flex">
        <div class="me-5">▶︎各項目の入力・更新</div>
        <a href="#plan1" class="color-cb3a82 text-decoration-underline me-4">プランを入力・更新 ＞</a>
        <a href="#plan2" class="color-cb3a82 text-decoration-underline me-4">オプションを入力・更新 ＞</a>
        <a href="#plan3" class="color-cb3a82 text-decoration-underline ">必要経費を入力・更新 ＞</a>
      </div>

      <div class="d-flex align-items-center justify-content-between plan-title" id="plan1">
        <h5 class="m-0 color-cb3a82">プラン</h5>
        <a @click="modalOpen(1)">プランの追加</a>
      </div>
      <table class="table price-plan">
        <tr>
          <td class="text-center">カテゴリ</td>
          <td class="text-center">料金名</td>
          <td class="text-center">対象年齢</td>
          <td class="text-center">料金</td>
          <td class="text-center">コメント</td>
        </tr>
        <tr class="plan-tr" v-for="(plan, index) in data.plans1" :key="index">
          <td>{{ plan.category.name }}</td>
          <td>{{ plan.name }}</td>
          <td>
            <span v-for="(age, i) in plan.plan_target_age" :key="i">
              {{ age.name }}
              <span v-if="i !== Object.keys(plan.plan_target_age).length - 1">, </span>
            </span>
          </td>
          <td>
            <span v-if="plan.plan_month && plan.plan_month.name">
              <span>¥</span> {{ plan.price| numberWithCommas }} /
            {{ plan.plan_month.name }}
          </span>
          </td>
          <td>{{ plan.comment }}</td>
          <div class="tr-hover-link">
            <a @click="editModalOpen(plan)">プランの修正</a>
            <a @click="deleteModalOpen(plan)">プランの削除</a>
          </div>
        </tr>
      </table>

      <div class="d-flex align-items-center justify-content-between plan-title" id="plan2">
        <h5 class="m-0 color-cb3a82">オプション</h5>
        <a @click="modalOpen(2)">オプションの追加</a>
      </div>
      <table class="table price-plan">
        <tr>
          <td class="text-center">カテゴリ</td>
          <td class="text-center">料金名</td>
          <td class="text-center">対象年齢</td>
          <td class="text-center">料金</td>
          <td class="text-center">コメント</td>
        </tr>
        <tr class="plan-tr" v-for="(plan, index) in data.plans2" :key="index">
          <td>{{ plan.category.name }}</td>
          <td>{{ plan.name }}</td>
          <td>
            <span v-for="(age, i) in plan.plan_target_age" :key="i">
              {{ age.name }}
              <span v-if="i !== Object.keys(plan.plan_target_age).length - 1">, </span>
            </span>
          </td>
          <td>
            <span v-if="plan.plan_month && plan.plan_month.name">
              <span>¥</span> {{ plan.price | numberWithCommas }} /
            {{ plan.plan_month.name }}
          </span>
          </td>
          <td>{{ plan.comment }}</td>
          <div class="tr-hover-link">
            <a @click="editModalOpen(plan)">オプションの修正</a>
            <a @click="deleteModalOpen(plan)">オプションの削除</a>
          </div>
        </tr>
      </table>

      <div class="d-flex align-items-center justify-content-between plan-title" id="plan3">
        <h5 class="m-0 color-cb3a82">必要経費</h5>
        <a @click="modalOpen(3)">必要経費の追加</a>
      </div>
      <table class="table price-plan">
        <tr>
          <td class="text-center">カテゴリ</td>
          <td class="text-center">料金名</td>
          <td class="text-center">対象年齢</td>
          <td class="text-center">料金</td>
          <td class="text-center">コメント</td>
        </tr>
        <tr class="plan-tr" v-for="(plan, index) in data.plans3" :key="index">
          <td>{{ plan.category.name }}</td>
          <td>{{ plan.name }}</td>
          <td>
            <span v-for="(age, i) in plan.plan_target_age" :key="i">
              {{ age.name }}
              <span v-if="i !== Object.keys(plan.plan_target_age).length - 1">, </span>
            </span>
          </td>
          <td>
            <span v-if="plan.plan_month && plan.plan_month.name">
              <span>¥</span> {{ plan.price | numberWithCommas }} /
            {{ plan.plan_month.name }}
          </span>
          </td>
          <td>{{ plan.comment }}</td>
          <div class="tr-hover-link">
            <a @click="editModalOpen(plan)">必要経費の修正</a>
            <a @click="deleteModalOpen(plan)">必要経費の削除</a>
          </div>
        </tr>
      </table>
    </div>

    <!-- Model -->
    <div class="exy--modal">
      <div class="modal show" aria-hidden="true" v-if="isModalOpen">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="close" @click="togleModal">
              <i class="fa fa-times-circle text-2xl"></i>
            </div>
            <div class="pt-2">
              <h4 class="text-lg fw-bold border-bottom text-center mb-2 py-2">プランを追加する</h4>

              <p class="text-center text-sm py-2 mb-2">必要な項目を全て入力してください。</p>

              <div class="py-2 px-5">
                <table class="table" v-if="form.planType===1 && form.category_id===3">
                  <tr>
                    <td>カテゴリ</td>
                    <td>
                      <label class="w-50">
                        <select class="form-control" v-model="form.category_id" :class="{'is-invalid': errors.category_id}" @change="errorsEmpty">
                          <option value="" disabled>カテゴリ</option>
                          <option :value="category.id" v-for="(category , index) in data.categories" :key="index">{{ category.name }}</option>
                        </select>
                      </label>
                      <p v-if="errors.category_id" class="error-message">{{ errors.category_id[0] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>コメント</td>
                    <td>
                      <textarea class="form-control" v-model="form.comment"></textarea>
                    </td>
                  </tr>
                </table>
                <table class="table" v-else>
                  <tr>
                    <td>カテゴリ</td>
                    <td>
                      <label class="w-50">
                        <select v-if="form.planType === 1" class="form-control" :class="{'is-invalid': errors.category_id}" v-model="form.category_id" @change="errorsEmpty">
                          <option value="" disabled>カテゴリ</option>
                          <option :value="category.id" v-for="(category , index) in data.categories" :key="index">{{ category.name }}</option>
                        </select>
                        <select v-else class="form-control" :class="{'is-invalid': errors.category_id}" v-model="form.category_id" @change="errorsEmpty">
                          <option value="" disabled>カテゴリ</option>
                          <option :value="category.id" v-for="(category , index) in data.categories.slice(0,2)" :key="index">{{ category.name }}</option>
                        </select>
                      </label>
                      <p v-if="errors.category_id" class="error-message">{{ errors.category_id[0] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>料金名</td>
                    <td>
                      <label class="w-100">
                        <input type="text" class="form-control" :class="{'is-invalid': errors.name && !form.name}" v-model="form.name">
                      </label>
                      <p v-if="errors.name && !form.name" class="error-message">{{ errors.name[0] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>対象年齢</td>
                    <td>
                      <div class="row gy-2">
                        <div class="col-md-4 col-sm-6" v-for="(age, index) in data.targetAges" :key="index">
                          <label class="container-checkbox me-4">
                            <input type="checkbox" :value="age.id" v-model="form.age"> {{ age.name }}
                            <span class="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>料金</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <span>¥</span>
                        <input type="text" class="form-control w-25 mx-2" :class="{'is-invalid': errors.price  && !form.price}" v-model="form.price">
                        <span class="ps-2 pe-3">/</span>
                        <select v-if="form.planType !== 1" class="form-control w-25" :class="{'is-invalid': errors.month_id  && !form.month_id}" v-model="form.month_id">
                          <option value="" disabled>単位</option>
                          <option :value="month.id" v-for="(month , index) in data.months" :key="index">{{ month.name }}</option>
                        </select>
                        <span>{{ firstPlan() }}</span>
                      </div>
                      <p v-if="errors.price && !form.price" class="error-message">{{ errors.price[0] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>コメント</td>
                    <td>
                      <textarea class="form-control" v-model="form.comment"></textarea>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="text-center my-4">
                <button type="button" class="border py-2 d-inline-block text-white border border-color-e6006e bg-cb3a82 rounded-25 w-50" @click="planAdd">プランを追加する</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Plan Delete Model -->
    <div class="exy--modal plan-delete-modal">
      <div class="modal show" aria-hidden="true" v-if="isDeleteModalOpen">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="close" @click="planModalClose">
              <i class="fa fa-times-circle text-2xl"></i>
            </div>
            <div class="pt-2">
              <h4 class="text-lg fw-bold border-bottom text-center mb-2 py-2">プランを削除する</h4>

              <p class="text-center text-sm py-2 mb-2">下記の内容を削除します。現在確定している予約には削除内容は反映しません。</p>

              <div class="py-2 px-5">
                <table class="table" v-if="plan.plan_type===1 && plan.category_id===3">
                  <tr>
                    <td>カテゴリ</td>
                    <td>{{ plan.category.name }}</td>
                  </tr>
                  <tr>
                    <td>コメント</td>
                    <td>{{ plan.comment }}</td>
                  </tr>
                </table>
                <table class="table" v-else>
                  <tr>
                    <td>カテゴリ</td>
                    <td>{{ plan.category.name }}</td>
                  </tr>
                  <tr>
                    <td>料金名</td>
                    <td>{{ plan.name }}</td>
                  </tr>
                  <tr>
                    <td>対象年齢</td>
                    <td>
                      <div class="row gy-2">
                        <div class="col-md-4 col-sm-6" v-for="(age, index) in data.targetAges" :key="index">
                          <label class="container-checkbox me-4">
                            <input type="checkbox" :value="age.id" v-model="selectedAges" disabled> {{ age.name }}
                            <span class="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>料金</td>
                    <td>{{ plan.price }}</td>
                  </tr>
                  <tr>
                    <td>コメント</td>
                    <td>{{ plan.comment }}</td>
                  </tr>
                </table>
              </div>

              <div class="text-center my-4">
                <button type="button" class="border py-2 d-inline-block text-white border rounded-25 w-50" @click="deletePlan(plan.id)">プランを削除する</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Plan Edit Model -->
    <div class="exy--modal plan-edit-modal">
      <div class="modal show" aria-hidden="true" v-if="isEditModalOpen">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="close" @click="planModalClose">
              <i class="fa fa-times-circle text-2xl"></i>
            </div>
            <div class="pt-2">
              <h4 class="text-lg fw-bold border-bottom text-center mb-2 py-2">プランを修正する</h4>

              <p class="text-center text-sm py-2 mb-2">修正したい項目を変更してください。現在確定している予約には修正内容は反映しません。</p>
              {{ plan.plan_type }}
              <div class="py-2 px-5">
                <table class="table" v-if="plan.plan_type===1 && plan.category_id===3">
                  <tr>
                    <td>カテゴリ</td>
                    <td>
                      <label class="w-50">
                        <select class="form-control" v-model="plan.category_id" :class="{'is-invalid': errors.category_id}" @change="errorsEmpty">
                          <option value="" disabled>カテゴリ</option>
                          <option :value="category.id" v-for="(category , index) in data.categories" :key="index">{{ category.name }}</option>
                        </select>
                      </label>
                      <p v-if="errors.category_id" class="error-message">{{ errors.category_id[0] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>コメント</td>
                    <td>
                      <textarea class="form-control" v-model="plan.comment"></textarea>
                    </td>
                  </tr>
                </table>
                <table class="table" v-else>
                  <tr>
                    <td>カテゴリ</td>
                    <td>
                      <label class="w-50">
                        <select v-if="plan.plan_type === 1" class="form-control" :class="{'is-invalid': errors.category_id}" v-model="plan.category_id" @change="errorsEmpty">
                          <option value="" disabled>カテゴリ</option>
                          <option :value="category.id" v-for="(category , index) in data.categories" :key="index">{{ category.name }}</option>
                        </select>
                        <select v-else class="form-control" :class="{'is-invalid': errors.category_id}" v-model="plan.category_id" @change="errorsEmpty">
                          <option value="" disabled>カテゴリ</option>
                          <option :value="category.id" v-for="(category , index) in data.categories.slice(0,2)" :key="index">{{ category.name }}</option>
                        </select>
                      </label>
                      <p v-if="errors.category_id" class="error-message">{{ errors.category_id[0] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>料金名</td>
                    <td>
                      <label class="w-100">
                        <input type="text" class="form-control" :class="{'is-invalid': errors.name && !plan.name}" v-model="plan.name">
                      </label>
                      <p v-if="errors.name && !plan.name" class="error-message">{{ errors.name[0] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>対象年齢</td>
                    <td>
                      <div class="row gy-2">
                        <div class="col-md-4 col-sm-6" v-for="(age, index) in data.targetAges" :key="index">
                          <label class="container-checkbox me-4">
                            <input type="checkbox" :value="age.id" v-model="selectedAges"> {{ age.name }}
                            <span class="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>料金</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <span>¥</span>
                        <input type="text" class="form-control w-25 mx-2" :class="{'is-invalid': errors.price  && !plan.price}" v-model="plan.price">
                        <span class="ps-2 pe-3">/</span>
                        <select v-if="plan.plan_type !== 1" class="form-control w-25" :class="{'is-invalid': errors.month_id  && !plan.month_id}" v-model="plan.month_id">
                          <option value="" disabled>単位</option>
                          <option :value="month.id" v-for="(month , index) in data.months" :key="index">{{ month.name }}</option>
                        </select>
                        <span>{{ firstPlanUpdate() }}</span>
                      </div>
                      <p v-if="errors.price && !plan.price" class="error-message">{{ errors.price[0] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>コメント</td>
                    <td>
                      <textarea class="form-control" v-model="plan.comment"></textarea>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="text-center my-4">
                <button type="button" class="border py-2 d-inline-block text-white border rounded-25 w-50" @click="updatePlan(plan.id)">プランを修正する</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../components/adminPartials/Breadcrumb"
import Admin from "../../layouts/Admin";
import axios from "../../axios";
import Vue from "vue";

export default {
  name: "PricePlanList",
  created() {
    this.$emit('update:layout', Admin);
  },
  watch: {
    'form.price': function (newValue) {
      if (!this.empty(newValue)) {
        const result = newValue.replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        Vue.nextTick(() => this.form.price = result);
      }
    }
  },
  data() {
    return {
      dataPageName: '料金プラン',
      isModalOpen: false,
      isEditModalOpen: false,
      isDeleteModalOpen: false,
      form: this.initForm(),
      data: {},
      plan: {},
      selectedAges: [],
      errors: {}
    }
  },
  components: {
    Breadcrumb
  },
  mounted() {
    this.getRecords()
  },
  methods: {
    /**
     * Fetch records
     */
    getRecords() {
      axios.get('/school/price-plan').then(response => {
        this.data = response.data.data
      }).catch(error => {
        this.checkError(error)
      })
    },
    errorsEmpty() {
      this.errors = {}
    },
    firstPlan() {
      if (this.form.planType === 1 && this.form.category_id === 1) {
        this.form.month_id = 1
        return '1ヶ月'
      } else if (this.form.planType === 1 && this.form.category_id === 2) {
        this.form.month_id = 4
        return '1分'
      } else if (this.form.planType === 1 && this.form.category_id === 3) {
        this.form.month_id = ''
      }
    },
    firstPlanUpdate() {
      if (this.plan.plan_type === 1 && this.plan.category_id === 1) {
        this.plan.month_id = 1
        return '1ヶ月'
      } else if (this.plan.planType === 1 && this.plan.category_id === 2) {
        this.plan.month_id = 4
        return '1分'
      } else if (this.plan.planType === 1 && this.plan.category_id === 3) {
        this.plan.month_id = ''
      }
    },
    planAdd() {
      axios.post('/school/price-plan', this.form).then(response => {
        this.errors = {}
        this.$toast.success(response.data.message)
        this.getRecords()
        this.togleModal()
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors
        } else this.checkError(error)
      })
    },
    togleModal() {
      this.errors = {}
      this.isModalOpen = false
      this.form = this.initForm()
    },
    modalOpen(plan) {
      this.errors = {}
      this.form.planType = plan
      this.isModalOpen = true
    },
    initForm() {
      return {
        age: [],
        name: null,
        price: null,
        comment: null,
        month_id: "",
        planType: null,
        category_id: "",
      }
    },
    planModalClose() {
      this.plan = {}
      this.selectedAges = []
      this.isEditModalOpen = false
      this.isDeleteModalOpen = false
    },
    editModalOpen(plan) {
      this.plan = plan
      this.selectedAges = []
      this.isEditModalOpen = true
      this.plan.plan_target_age.forEach(age => {
        this.selectedAges.push(age.target_age_id)
      })
    },
    updatePlan(id) {
      this.plan.age = this.selectedAges
      axios.put(`/school/price-plan/${id}`, this.plan).then(response => {
        this.getRecords()
        this.planModalClose()
        this.$toast.success(response.data.message)
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors
        } else this.checkError(error)
      })
    },
    deleteModalOpen(plan) {
      this.plan = plan
      this.selectedAges = []
      this.isDeleteModalOpen = true
      this.plan.plan_target_age.forEach(age => {
        this.selectedAges.push(age.target_age_id)
      })
    },
    deletePlan(id) {
      axios.delete(`/school/price-plan/${id}`).then(response => {
        this.getRecords()
        this.planModalClose()
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.plan-title {
  background: #FBEEF5;
  padding: 12px 10px;
  margin: 45px 0 10px 0;

  a {
    background: #cb3a82;
    color: #ffffff;
    display: inline-flex;
    padding: 5px 15px;
    cursor: pointer;

    &:hover {
      color: #FFF2F8;
    }
  }
}

.price-plan {
  .plan-tr {
    min-height: 105px;
  }

  tr {
    border: solid thin #D1D1D1;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-bottom: 10px;
    position: relative;

    .tr-hover-link {
      display: none;
      background: rgba(0, 0, 0, 0.25);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;

      a {
        display: inline-flex;
        padding: 7px 20px;
        border: 1px solid;
        cursor: pointer;

        &:first-child {
          border-color: #cb3a82;
          background: #FBEEF5;
          color: #cb3a82;
        }

        &:last-child {
          border-color: #FFF;
          background: #333333;
          color: #FFF2F8;
        }
      }
    }

    &:hover {
      .tr-hover-link {
        display: flex;
      }
    }

    td {
      border: indianred;
      padding: 10px;

      &:first-child {
        width: 10%;
        text-align: center;
      }

      &:nth-child(2) {
        width: 25%;
        font-weight: 600;
      }

      &:nth-child(3) {
        width: 15%;
        text-align: center;
      }

      &:nth-child(4) {
        width: 20%;
        text-align: right;
        font-weight: 600;
      }

      &:nth-child(5) {
        width: 30%;
      }
    }
  }

  tr:first-child {
    background: #F5F4F4;
    border: indianred;
    margin: 0;
  }
}

.exy--modal {
  table {
    tr {
      td {
        padding: 7px 8px;
        border: 1px solid #333333;

        &:first-child {
          text-align: center;
          background: #FBEEF5;
          width: 130px;
        }
      }

    }
  }

  input, textarea, select {
    border: 1px solid #ced4da;
  }
}

@media (min-width: 992px) {
  .modal-lg, .modal-xl {
    max-width: 920px;
  }
}

.error-message {
  color: #dc3545;
  padding: 2px 0 0 0;
  margin: 0;
  font-style: italic;
  font-size: 14px;
}

.is-invalid {
  border: 1px solid #dc3545 !important;
}

.plan-delete-modal {
  button {
    background: #333333;
    border-color: #484848 !important;
  }
}

.plan-edit-modal {
  button {
    background: #FBEEF5;
    border-color: #cb3a82 !important;
    letter-spacing: 0;
    color: #CB3A82 !important;
    opacity: 1;
  }
}

select {
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
  linear-gradient(135deg, gray 50%, transparent 50%),
  linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - -1em) 0.5em;
  background-size: 5px 5px,
  5px 5px,
  1px 1.5em;
  background-repeat: no-repeat;
}

select:focus {
  background-image: linear-gradient(45deg, gray 50%, transparent 50%),
  linear-gradient(135deg, transparent 50%, gray 50%),
  linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 15px) 1em,
  calc(100% - 20px) 1em,
  calc(100% - -.5em) 0.5em;
  background-size: 5px 5px,
  5px 5px,
  1px 1.5em;
  background-repeat: no-repeat;
  outline: 0;
}


select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}
</style>
