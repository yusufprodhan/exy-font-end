<template>
  <div class="my-page-childcare-create-column bg-f2f2f2">
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
              <p class="m-0">ステータス： <span class="ps-4 fw-bold">{{ form.status === 1 ? '公開済み' : '下書き' }}</span></p>
            </div>
            <div class="row py-2 ps-2 bg-white">
              <p class="">投稿日： <span class="ps-4 fw-bold">{{ form.updated_at | formatDate }}</span> <span class="ps-2 fw-bold">{{ form.updated_at | formatTime }}</span></p>
            </div>
            <div class="row border-top border-color-707070 py-3 bg-white">
              <div class="col-md-6">
                <span class="text-decoration-underline my-auto cursor-pointer" @click="deleteItem">削除する</span>
              </div>
              <div class="col-md-6">
                <button type="button" @click="submitForm(1)" class="pull-right px-4 btn btn btn-secodery text-white rounded-0 border-0 bg-cb3a82">更新</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-2 mt-3">
          <div class="col-md-12 border-f28c8c border">
            <div class="row py-2 ps-3 bg-707070 text-white fw-bold">アイキャッチ画像</div>
            <div class="row py-2 p-2 bg-white">
              <div class="position-relative">
                <div class="image-preview__top border">
                  <img v-if="form.thumbnail_image !== null && form.thumbnail_image !== ''" :src="form.thumbnail_image" class="w-100 h-100" alt="">
                </div>

                <input type="file" @change="previewThumbnail" id="thumbnail" accept="image/*" class="input-file__top"/>
                <label for="thumbnail">更新する画像をクリック</label>
              </div>
              <a class="text-decoration-underline color-0066c0 cursor-pointer" @click="deleteThumbnail">アイキャッチ画像を削除</a>
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
  name: "MyPageChildcareColumnUpdate",
  created() {
    this.$emit('update:layout', Admin)
    this.getRecord()
  },
  components: {
    Breadcrumb,
    VueEditor
  },
  data() {
    return {
      form: {},
      dataPageName: "園基本情報設定",
    }
  },
  methods: {
    getRecord() {
      let id = this.$route.params.id

      axios.get(`/school/childcare-column-show/${id}`).then(response => {
        this.form = response.data.data
      }).catch(e => {
        if (e.response.status === 404) this.$router.push({ name: 'Admin.MyPageChildcareCreateColumn' })
        this.checkError(e)
      })
    },
    submitForm(status) {
      this.form.status = status
      axios.post(`/school/childcare-column-update/${this.form.id}`, this.form).then(response => {
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    },
    deleteItem() {
      axios.delete(`/school/childcare-column-destroy/${this.form.id}`).then(response => {
        this.$router.push({ name: 'Admin.GardenBasicInformation' })
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    },
    previewThumbnail(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.form.thumbnail_image = e.target.result;

          axios.post(`/school/thumbnail-image/${this.form.id}`, this.form).then(response => {
            this.$toast.success(response.data.message)
          }).catch(error => {
            this.checkError(error)
          })
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    deleteThumbnail() {
      axios.delete(`/school/thumbnail-image-destroy/${this.form.id}`).then(response => {
        this.form = response.data.data
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.image-preview__top {
  height: 300px;
  padding: 0;
}

.input-file__top {
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0.1px;
  z-index: -1;
}

.input-file__top + label {
  color: #707070;
  display: inline-block;
  cursor: pointer;
  margin: 8px 0;
}
</style>
