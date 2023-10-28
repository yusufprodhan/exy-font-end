<template>
  <div class="nursery-school-my-page-settings">
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <div class="container">
      <div class="row row-1 py-2 mt-4">
        <p class="m-0 fw-bold">ユーザー情報</p>
      </div>
      <div class="row row-2">
        <div class="col-md-3 left-col py-3">
          <p class="m-0 fw-bold">会員ID</p>
        </div>
        <div class="col-md-9 py-3" >
          <p class="m-0">{{ schoolInfo.s_uid }}</p>
        </div>
      </div>
      <div class="row row-3">
        <div class="col-md-3 left-col py-3">
          <p class="m-0 fw-bold">アカウント名</p>
        </div>
        <div class="col-md-9 py-3">
          <p class="m-0" >{{ userInfo.name}}</p>
        </div>
      </div>
      <div class="row row-3">
        <div class="col-md-3 left-col py-3">
          <p class="m-0 fw-bold">電話番号</p>
        </div>
        <div class="col-md-9 py-3">
          <p class="m-0" >{{ schoolInfo.phone }}</p>
        </div>
      </div>
      <div class="row row-3">
        <div class="col-md-3 left-col py-3">
          <p class="m-0 fw-bold">メールアドレス</p>
        </div>
        <div class="col-md-9 py-3">
          <div class="row col-md-6">
            <div  class="col-md-5">
              <p class="m-0">  現在のメールアドレス </p>
            </div>
            <div class="col-md-5">
              {{ userInfo.email}}
            </div>
          </div>
          <div class="col-md-6 mt-3">
            <p class="m-0 fw-bold"> 新規 </p>
          </div>
          <div class="col-md-7 mt-3">
            <input type="email" v-model="userInfo.new_email"  class="form-control" >
          </div>
          <p class="text-sm mt-1">新しいメールアドレスを入力してください</p>
        </div>
      </div>
      <div class="row row-3">
        <div class="col-md-3 left-col py-3">
          <p class="m-0 fw-bold">パスワード</p>
        </div>
        <div class="col-md-9 py-3">
          <div class="row col-md-9">
              <div class="col-md-5 mt-3">
                <p>現在のパスワードを入力  </p>
              </div>
              <div class="col-md-5 mt-3">
                <input type="password" v-model="userInfo.current_password" placeholder="●●●●●●●●" class="form-control" >
              </div>
            </div>
          <div class="row col-md-9">
            <div class="col-md-5 mt-3">
              <p>新しいパスワードを入力 </p>
            </div>
            <div class="col-md-5 mt-3">
              <input type="password" v-model="userInfo.new_password" placeholder="●●●●●●●●" class="form-control" >
            </div>
          </div>
        </div>
      </div>
      <div class="row row-3">
        <div class="col-md-3 left-col py-3">
          <p class="m-0 fw-bold">SNS連動</p>
        </div>
        <div class="col-md-9 py-3">
          <div class="row py-2">
            <div class="col-md-4">
              <p class="m-0"><i class="fa fa-instagram pe-3"></i> Instagram</p>
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control"  v-model="schoolInfo.instagram_link" />
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4">
              <p class="m-0"><i class="fa fa-twitter pe-3"></i> Twitter</p>
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control"   v-model="schoolInfo.twitter_link" />
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4">
              <p class="m-0"><i class="fa fa-facebook pe-3"></i> Facebook</p>
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control"  v-model="schoolInfo.facebook_link" />
            </div>
          </div>
        </div>
      </div>
      <div class="text-end mt-4">
        <router-link  class="exy-default-btn border border-333333 text-dark bg-white me-4" :to="{name:'Admin.NurserySchoolMyPageSettings'}" type="button">
          戻る
        </router-link>
        <button class="exy-default-btn" @click="submitUserInfo" type="button">
          更新
        </button>
      </div>
      <div class="row row-1 py-2 mt-5">
        <p class="m-0 fw-bold">保育園スタッフ情報</p>
      </div>
      <div class="row row-2">
        <div class="col-md-3 py-3 left-col">
          <p class="m-0 fw-bold">スタッフ一覧</p>
        </div>
        <div class="col-md-9">
          <div class="row row-4 py-2">
            <div class="col-md-8">
              <p class="m-0 pt-2">
                <input type="checkbox" @click="selectAll" v-model="selectedAll">
                <button @click="deleteItems(selected)" class="color-cb3a82 btn ms-2" type="button">
                  <i class="fa fa-trash"></i>
                </button>
              </p>
            </div>
            <div class="col-md-4 text-right">
              <button class="btn-plus py-1 px-2" @click="modal=true">
                <i class="fa fa-plus-circle"></i> スタッフを追加する
              </button>
            </div>
          </div>
          <div class="row row-5 py-3" v-for="(staff, i) in staffs" :key="i">
            <div class="col-md-4">
              <p class="m-0">
                <input v-if="staff.role_id!==1" type="checkbox" :value="staff.id" v-model="selected"> <span class="p-1"></span> {{ staff.name }}
              </p>
            </div>
            <div class="col-md-4">
              <p class="m-0">{{ staff.employee_role.name }}</p>
            </div>
            <div class="col-md-4 text-right pe-4">
              <button class="btn-edit" @click="getStaff(staff.id)">
                <img src="../../assets/images/svg/tab-edit.svg" alt="EXY">
              </button>
            </div>
          </div>

        </div>
      </div>
      <div class="row row-1 py-2 mt-5">
        <p class="m-0">通知設定</p>
      </div>
      <div class="row row-2 py-3">
        <div class="col-md-8">
          <p class="m-0 fw-bold">お気に入りの通知</p>
          <p class="m-0 pt-3 text-xs">※ユーザーからお気に入りをされたら通知します</p>
        </div>
        <div class="col-md-4 my-auto">
          <div class="form-check form-switch pull-right">
            <input class="form-check-input text-3xl" name="checkbox" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label pt-2 mt-1 text-base" for="flexSwitchCheckDefault">ON</label>
          </div>
          <span class="pull-right pe-5 pt-2 mt-1 text-base">OFF</span>
        </div>
      </div>
      <div class="row row-3 py-3">
        <div class="col-md-8">
          <p class="m-0 fw-bold">運営からのお知らせ</p>
          <p class="m-0 pt-3 text-xs">※キャンペーンやアンケートなどのお知らせを通知します</p>
        </div>
        <div class="col-md-4 my-auto">
          <div class="form-check form-switch pull-right">
            <input class="form-check-input text-3xl" name="checkbox1" type="checkbox" id="flexSwitchCheckDefault1">
            <label class="form-check-label pt-2 mt-1 text-base" for="flexSwitchCheckDefault1">ON</label>
          </div>
          <span class="pull-right pe-5 pt-2 mt-1 text-base">OFF</span>
        </div>
      </div>
    </div>

    <div class="exy--modal">
      <div class="modal show fade" aria-hidden="true" v-if="modal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <form action="" @submit.prevent="submitForm">
              <div class="modal-header">
                <h5 class="modal-title text-center">内容入力</h5>
                <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-3"><label>スタッフ名</label></div>
                  <div class="col-md-9"><input type="text" v-model="form.name" class="form-control" required></div>
                </div>
                <div class="row mt-4">
                  <div class="col-md-3"><label>役職</label></div>
                  <div class="col-md-9">
                    <select name="" id="" v-model="form.role_id" class="form-select" required>
                      <option v-for="(role, i) in roles" :value="role.id" :key="i">
                        {{ role.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" @click="closeModal" class="btn btn-secodery border rounded-0">
                  キャンセル
                </button>
                <button type="submit" class="btn btn btn-secodery text-white rounded-0 border-0 bg-cb3a82">
                  保存
                </button>
              </div>
            </form>
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

export default {
  name: "NurserySchoolMyPageSettings",
  created() {
    this.$emit('update:layout', Admin);
    this.getStaffs();
    this.getUserInfo();
  },
  components: {
    Breadcrumb
  },
  data() {
    return {
      dataPageName: "ユーザー情報",
      roles: [],
      staffs: [],
      modal: false,
      form: this.initialForm(),
      selected: [],
      isSelected: false,
      selectedAll: false,
      userInfo:{},
      schoolInfo:{},
    }
  },
  watch: {
    selected: function (selected) {
      this.isSelected = (selected.length > 0);
      this.selectedAll = (selected.length === this.staffs.length);
    }
  },
  methods: {
    getStaffs() {
      axios.get('/school/employees').then(response => {
        this.staffs = response.data.data.employeeList
        this.roles = response.data.data.employeeRoles;
      })
    },
    getUserInfo()
    {
      axios.get('/school/user-information').then(response =>{
        this.userInfo =response.data.data.userInfo;
        this.schoolInfo =response.data.data.schoolInfo;
      }).catch(error => {
        this.checkError(error)
      })
    },
    submitUserInfo()
    {
      axios.post('/school/user-information',this.userInfo).then(response =>{
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
      axios.post('/school/social-link',this.schoolInfo).then(response =>{
        response.data.message;
        this.$router.push({ name:'Admin.NurserySchoolMyPageSettings'})
      }).catch(error => {
        this.checkError(error)
      })
    },
    submitForm() {
      this.form.id ? this.updateStaff(this.form.id) : this.staffStore()
    },
    staffStore() {
      axios.post('/school/employees', this.form).then(response => {
        this.getStaffs()
        this.closeModal()
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    },
    getStaff(id) {
      this.modal = true

      axios.get(`/school/employees/${id}`).then(response => {
        this.form = response.data.data
      }).catch(error => {
        this.checkError(error);
      })
    },
    updateStaff(id) {
      axios.put(`/school/employees/${id}`, this.form).then(response => {
        this.$toast.success(response.data.message)
        this.closeModal()
        this.getStaffs()
      }).catch(error => {
        this.checkError(error);
      })
    },
    /**
     * Delete single or multiple licenses
     * @param {object} ids
     */
    deleteItems: function (ids) {
      // No IDs provided, break the function
      if (!this.isSelected) return false;
      this.removeConfirm(() => {
        axios.post('/school/employees-delete', { ids: ids }).then(response => {
          this.getStaffs()
          this.closeModal()
          this.$toast.success(response.data.message)
        }).catch(error => {
          this.checkError(error);
        })
      });
    },

    initialForm() {
      return {
        name: null,
        role_id: null
      }
    },

    /**
     * Select all checkbox
     * @param event
     */
    selectAll: function (event) {
      if (event.target.checked === false) {
        this.selected = [];
      } else {
        this.staffs.forEach((staff) => {
          // Check if item is not already selected
          if (this.selected.indexOf(staff.id) === -1) {
            this.selected.push(staff.id);
          }
        });
      }
    },

    closeModal() {
      this.modal = false
      this.selected = []
      this.isSelected = false
      this.selectedAll = false
      this.form = this.initialForm()
    }
  },
}
</script>

<style scoped>

</style>
