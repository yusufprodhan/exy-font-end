<template>
  <div class="my-page-childcare-create-column bg-f2f2f2 min-vh-100">
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <div class="row w-100 mx-0 px-4 pb-5">
      <div class="col-md-9">
        <form action="">
          <div class="form-group">
            <input type="text" v-model="form.title" class="form-control">
          </div>

          <div class="bg-white mt-3">
            <vue-editor v-model="form.description"></vue-editor>
          </div>
        </form>
      </div>
      <div class="col-md-3">
        <div class="row">
          <div class="col-md-12 border-color-707070 border">
            <div class="row py-2 ps-3 bg-707070 text-white fw-bold">公開</div>
            <div class="row py-2 bg-white">
              <div class="col-md-6 text-center">
                <button type="button" @click="submitForm(0)" class="btn px-4 color-cb3a82 border-cb3a82 border rounded-0 bg-fbeef5 text-xs">下書きを保存</button>
              </div>
              <div class="col-md-6 text-center">
                <button type="button" class="btn px-3 color-cb3a82 border-cb3a82 border rounded-0 bg-fbeef5 text-xs">変更をプレビュー</button>
              </div>
            </div>
            <div class="row py-2 ps-2 bg-white">
              <p class="m-0">ステータス： <span class="ps-4 fw-bold"></span></p>
            </div>
            <div class="row py-2 ps-2 bg-white">
              <p class="">投稿日： <span class="ps-4 fw-bold">{{ new Date().toLocaleString() | formatDate }}</span> <span class="ps-2 fw-bold">{{ new Date().toLocaleString() | formatTime }}</span></p>
            </div>
            <div class="row border-top border-color-707070 py-3 bg-white">
              <div class="col-md-6"></div>
              <div class="col-md-6">
                <button type="button" @click="submitForm(1)" class="pull-right px-4 btn btn btn-secodery text-white rounded-0 border-0 bg-cb3a82">更新</button>
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
import {VueEditor} from "vue2-editor";
import axios from "../../axios";

export default {
  name: "MyPageChildcareCreateColumn",
  created() {
    this.$emit('update:layout', Admin)
  },
  components: {
    Breadcrumb,
    VueEditor
  },
  data() {
    return {
      form: this.initialForm(),
      dataPageName: "園基本情報設定",
    }
  },
  methods: {
    submitForm(status) {
      this.form.status = status
      axios.post('/school/childcare-column-store', this.form).then(response => {
        this.resetForm()
        this.$toast.success(response.data.message)
      }).catch(e => {
        this.checkError(e)
      })
    },
    /**
     * Reset the form to the default state
     */
    resetForm: function () {
      this.form = this.initialForm()
    },

    /**
     * Return the initial/default state of the form models
     * @return {object}
     */
    initialForm() {
      return {
        title: null,
        description: null,
        status: 0
      }
    },
  }
}
</script>

<style scoped>

</style>
