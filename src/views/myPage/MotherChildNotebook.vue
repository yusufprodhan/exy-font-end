<template>
  <div class="py-2 overflow-hidden mb-5 mt-4">
    <!-- right column -->
      <div class="hr-title fw-bold text-2xl">母子手帳の登録</div>
      <!-- content -->
      <div class="py-4 px-3 mt-2">
        <p>
          母子手帳を提出するとできること <br>
          ・月極保育の予約 <br>
          ・体験保育の予約 <br>
        </p>

        <div class="mt-1">
          ご提出いただいた書類は、保育園を予約した際、キガルニホイク事務局から予約した保育園にのみ開示し、
        </div>
        <div class="mt-2">
          外部・及び利用しない保育園へ開示されることはありませんのでご安心ください。
        </div>
        <div class="mt-2">
          母子手帳は「表紙」「出生届」「最終健診記録」「予防接種」の４カ所、すべてご登録ください。
        </div>
      </div>
    <ValidationObserver v-slot="{  handleSubmit }">
      <form @submit.prevent=" handleSubmit(childHandBookFormSubmit)" autocomplete="off">
        <div class="fw-bold">母子手帳をアップロード</div>
        <div class="py-1">
          <div class="align-items-center border border-2 w-50 d-inline-block">
            <div :class="condition.coverImageUrl.width">
              <div class="photo-upload border">
                <div class="file-upload-form">
                  <input type="file" @change="onChangeImg($event,'cover')" id="cover_page" name="cover_page"
                         accept="image/*" class="input-file"/>
                  <label for="cover_page">
                    <i class="fa fa-cloud-upload fa-5x color-kigaruni-ash" aria-hidden="true"></i>
                  </label>
                </div>
                <div class="image-preview w-100" v-if="condition.coverImageUrl.preview">
                  <img :src="condition.coverImageUrl.imageUrl" class="w-100 h-100" alt="">
                </div>
              </div>
              <span class="is-danger" v-html="condition.coverImageUrl.error"></span>
            </div>
            <div :class="condition.coverImageUrl.width" v-if="!condition.coverImageUrl.preview">
              表紙をアップロード
            </div>
          </div>
          <div class="align-items-center border border-2 ms-3 d-inline-block" style="width: 48%">
            <div :class="condition.birthImageUrl.width">
              <div class="photo-upload border">
                <div class="file-upload-form">
                  <input type="file" @change="onChangeImg($event,'birth')" id="birth_page" name="birth_page"
                         accept="image/*" class="input-file"/>
                  <label for="birth_page">
                    <i class="fa fa-cloud-upload fa-5x color-kigaruni-ash" aria-hidden="true"></i>
                  </label>
                </div>
                <div class="image-preview w-100" v-if="condition.birthImageUrl.preview">
                  <img :src="condition.birthImageUrl.imageUrl" class="w-100 h-100" alt="">
                </div>
              </div>
              <span class="is-danger" v-html="condition.birthImageUrl.error"></span>
            </div>
            <div :class="condition.birthImageUrl.width" v-if="!condition.birthImageUrl.preview">
              出生届をアップロード
            </div>
          </div>
        </div>
        <div class="py-1">
          <div class="align-items-center border border-2 w-50 d-inline-block">
            <div :class="condition.medicalImageUrl.width">
              <div class="photo-upload border">
                <div class="file-upload-form">
                  <input type="file" @change="onChangeImg($event,'medical')" id="medical_page" name="medical_page"
                         accept="image/*" class="input-file"/>
                  <label for="medical_page">
                    <i class="fa fa-cloud-upload fa-5x color-kigaruni-ash" aria-hidden="true"></i>
                  </label>
                </div>
                <div class="image-preview w-100" v-if="condition.medicalImageUrl.preview">
                  <img :src="condition.medicalImageUrl.imageUrl" class="w-100 h-100" alt="">
                </div>
              </div>
              <span class="is-danger" v-html="condition.medicalImageUrl.error"></span>
            </div>
            <div :class="condition.medicalImageUrl.width" v-if="!condition.medicalImageUrl.preview">
              最終健診記録を <br>
              アップロード
            </div>
          </div>
          <div class="align-items-center border border-2 ms-3 d-inline-block" style="width: 48%">
            <div :class="condition.vaccinationImageUrl.width">
              <div class="photo-upload border">
                <div class="file-upload-form">
                  <input type="file" @change="onChangeImg($event,'vaccination')" id="vaccination_page"
                         name="vaccination_page" accept="image/*" class="input-file"/>
                  <label for="vaccination_page">
                    <i class="fa fa-cloud-upload fa-5x color-kigaruni-ash" aria-hidden="true"></i>
                  </label>
                </div>
                <div class="image-preview" v-if="condition.vaccinationImageUrl.preview">
                  <img :src="condition.vaccinationImageUrl.imageUrl" class="w-100 h-100" alt="">
                </div>
              </div>
              <span class="is-danger" v-html="condition.vaccinationImageUrl.error"></span>
            </div>
            <div :class="condition.vaccinationImageUrl.width" v-if="!condition.vaccinationImageUrl.preview">
              予防接種をアップロード
            </div>
          </div>
        </div>

        <div class="ms-5 ps-5">
          <div class="d-flex justify-content-center align-items-center mt-5">
            <router-link :to="{name:'terms'}">
              <span class="text-muted text-decoration-underline">利用規約、プライバシーポリシー</span>
            </router-link>
            <span>に同意の上ご送信ください</span>
          </div>

          <div class="d-flex justify-content-center align-items-center mt-4">
            <label class="container-checkbox text-muted">
              <span class="ms-2">利用規約およびプライバシーポリシーに同意する</span>
              <input type="checkbox" v-model="condition.accept.process" @change="condition.accept.error=''">
              <span class="checkmark"></span>
              <div class="mt-2">
                <span class="is-danger" v-html="condition.accept.error"></span>
              </div>
            </label>
          </div>

          <div class="d-flex justify-content-center align-items-center mt-5">
            <router-link :to="{name: 'Mypage.ChildInformation'}">
              <button class="border border-secondary bg-white" type="button">
                <span class="px-5">戻る</span>
              </button>
            </router-link>
            <button class="exy-default-btn ms-4" type="submit">
              送信する
            </button>
          </div>
        </div>
      </form>
    </ValidationObserver>
    <!-- /content -->
    <!-- /right column -->
  </div>
</template>

<script>
// imports
import Frontend from "../../layouts/Frontend";
import axios from "@/axios";

export default {
  name: "MotherChildNotebook",
  created() {
    this.$emit('update:layout', Frontend)

    /* --- child hand book docs --- */
    this.getChildHandBookDoc();
  },
  data() {
    return {
      navActive: "setting",
      sideNavActive: 3,
      condition:{
        coverImageUrl:{
          preview: false,
          imageUrl: null,
          error: '',
          width:'p-2 fw-bold d-inline-block w-50 text-center',
        },
        birthImageUrl:{
          preview: false,
          imageUrl: null,
          error: '',
          width:'p-2 fw-bold d-inline-block w-50 text-center',
        },
        medicalImageUrl:{
          preview: false,
          imageUrl: null,
          error: '',
          width:'p-2 fw-bold d-inline-block w-50 text-center',
        },
        vaccinationImageUrl:{
          preview: false,
          imageUrl: null,
          error: '',
          width:'p-2 fw-bold d-inline-block w-50 text-center',
        },
        accept:{
          process: false,
          error: ''
        }
      },
      form:{
        docCover: '',
        docBirth: '',
        docMedical: '',
        docVaccination: '',
      }
    }
  },
  components: {

  },
  methods: {
    getChildHandBookDoc(){
      axios.get(`/get_child_handbook_doc_upload/${this.$route.params.id}`).then((res) => {
        if(parseInt(res.status) === 200){
          this.condition.coverImageUrl.imageUrl = res.data.data.cover_page.image_path;
          this.condition.coverImageUrl.preview = true;
          this.condition.coverImageUrl.width = 'py-2';

          this.condition.birthImageUrl.imageUrl = res.data.data.birth_certificate.image_path;
          this.condition.birthImageUrl.preview = true;
          this.condition.birthImageUrl.width = 'py-2';

          this.condition.medicalImageUrl.imageUrl = res.data.data.medical_record.image_path;
          this.condition.medicalImageUrl.preview = true;
          this.condition.medicalImageUrl.width = 'py-2';

          this.condition.vaccinationImageUrl.imageUrl = res.data.data.vaccination.image_path;
          this.condition.vaccinationImageUrl.preview = true;
          this.condition.vaccinationImageUrl.width = 'py-2';
        }
      }).catch(error => {
        this.checkError(error)
      });
    },
    onChangeImg(e, name) {
      if (name == 'cover') {
        const file = e.target.files[0]
        this.form.docCover = file;
        this.condition.coverImageUrl.imageUrl = URL.createObjectURL(file);
        this.condition.coverImageUrl.error = "";
        this.condition.coverImageUrl.preview = true;
        this.condition.coverImageUrl.width = 'py-2';
      } else if (name == 'birth') {
        const file = e.target.files[0]
        this.form.docBirth = file;
        this.condition.birthImageUrl.imageUrl = URL.createObjectURL(file);
        this.condition.birthImageUrl.error = "";
        this.condition.birthImageUrl.preview = true;
        this.condition.birthImageUrl.width = 'py-2';
      } else if (name == 'medical') {
        const file = e.target.files[0]
        this.form.docMedical = file;
        this.condition.medicalImageUrl.imageUrl = URL.createObjectURL(file);
        this.condition.medicalImageUrl.error = "";
        this.condition.medicalImageUrl.preview = true;
        this.condition.medicalImageUrl.width = 'py-2';
      } else if (name == 'vaccination') {
        const file = e.target.files[0]
        this.form.docVaccination = file;
        this.condition.vaccinationImageUrl.imageUrl = URL.createObjectURL(file);
        this.condition.vaccinationImageUrl.error = "";
        this.condition.vaccinationImageUrl.preview = true;
        this.condition.vaccinationImageUrl.width = 'py-2';
      }
    },
    childHandBookFormSubmit(){
      if(this.form.docCover === ""){
        this.condition.coverImageUrl.error = "こちらは記入、必須項目です。";
      }else if(this.form.docBirth === ""){
        this.condition.birthImageUrl.error = "こちらは記入、必須項目です。";
      }else if(this.form.docMedical === ""){
        this.condition.medicalImageUrl.error = "こちらは記入、必須項目です。";
      }else if(this.form.docVaccination === ""){
        this.condition.vaccinationImageUrl.error = "こちらは記入、必須項目です。";
      }else if(this.condition.accept.process === false){
        this.condition.accept.error = "こちらは記入、必須項目です。";
      }else{
        const formData = new FormData();
        formData.append('docCover', this.form.docCover);
        formData.append('docBirth', this.form.docBirth);
        formData.append('docMedical', this.form.docMedical);
        formData.append('docVaccination', this.form.docVaccination);
        formData.append('child_id', this.$route.params.id);
        axios.post('child_handbook_doc_upload', formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((res) => {
          if(res.data.success){
            this.$toast.success(res.data.message);
            this.getChildHandBookDoc();
          }else{
            this.$toast.error(res.data.message);
          }
        }).catch(error => {
          this.checkError(error)
        });
      }
    },
  }
};
</script>
<style scoped>
.photo-upload {
  height: auto;
  position: relative;
  text-align: center;
  width: 100%;
  border: none !important;
}

.input-file {
  height: 370px;
  line-height: 370px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0.1px;
  z-index: -1;
}

.input-file + label {
  background: transparent;
  color: #b5b5b5;
  display: flex;
  text-align: center;
  width: 100%;
  height: 200px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.image-preview {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  pointer-events: none;
  position: absolute;
}

.is-danger {
  color: #f22435;
}
</style>

