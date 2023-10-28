<template>
  <div class="py-2 overflow-hidden mb-5 mt-4">
    <!-- right column -->
    <div class="float-start">
      <div class="hr-title fw-bold text-2xl">書類のアップロード</div>

      <!-- content -->
      <div class="py-4 px-3 mt-2">
        <p>
          本人確認書類及びお子様に関する書類を提出するとできること <br>
          ・月極保育の予約 <br>
          ・体験保育の予約 <br>
          ご提出いただいた書類は、保育園を予約した際、キガルニホイク事務局から予約した保育園にのみ本人確認のために開示し、外部・及び利用しない保育園へ開示されることはありませんのでご安心ください。
          <br>
        </p>
        <div class="mt-4">
          ※以下よりアップロードする書類をお選びください。
        </div>
        <div class="ms-3 mt-2">
          また、種類によっては両面を撮影していただく必要がある場合もあります。
        </div>
      </div>
      <ValidationObserver v-slot="{  handleSubmit }">
        <form @submit.prevent=" handleSubmit(childDocFormSubmit)" autocomplete="off">
          <div class="py-3">
            <div class="fw-bold">書類を選択</div>
            <select class="mt-2 p-2 w-50 border border-2 rounded bg-light form-text md-responsive" v-model="form.docSelect" @change="onChangeDocType($event)">
              <optgroup label="本人確認書類">
                <option :value="doc[0]" v-for="(doc,index) in identityVarification" :key="index">{{doc[1]}}</option>
              </optgroup>
              <optgroup label="各種書類">
                <option :value="doc[0]" v-for="(doc,index) in variousVarification" :key="index">{{doc[1]}}</option>
              </optgroup>
            </select>
          </div>
          <div class="py-4">
            <div class="fw-bold">選択した書類をアップロード</div>
            <div v-if="!activeUploadDiv">
              <!-- Upload surface -->
              <div class="align-items-center mt-3 border border-2 w-100">
                <div :class="condition.docFrontSide.width">
                  <div class="photo-upload border">
                    <div class="file-upload-form">
                      <input type="file" @change="onChangeImg($event,'font')" id="child_doc_front" name="child_doc_front" accept="image/*" class="input-file"/>
                      <label for="child_doc_front">
                        <i class="fa fa-cloud-upload fa-5x color-kigaruni-ash" aria-hidden="true"></i>
                      </label>
                    </div>
                    <div class="image-preview w-100" v-if="condition.docFrontSide.preview">
                      <img :src="condition.docFrontSide.imageUrl" class="w-100 h-100" alt="">
                    </div>
                  </div>
                  <span class="is-danger" v-html="condition.docFrontSide.error"></span>
                </div>
                <div :class="condition.docFrontSide.width" v-if="!condition.docFrontSide.preview">
                  表面をアップロード
                </div>
              </div>

              <!-- Upload the back side -->
              <div class="align-items-center mt-3 border border-2 w-100">
                <div :class="condition.docBackSide.width">
                  <div class="photo-upload border">
                    <div class="file-upload-form">
                      <input type="file" @change="onChangeImg($event,'back')" id="child_doc_back" accept="image/*" class="input-file"/>
                      <label for="child_doc_back">
                        <i class="fa fa-cloud-upload fa-5x color-kigaruni-ash" aria-hidden="true"></i>
                      </label>
                    </div>
                    <div class="image-preview" v-if="condition.docBackSide.preview">
                      <img :src="condition.docBackSide.imageUrl" class="w-100 h-100" alt="">
                    </div>
                  </div>
                  <span class="is-danger" v-html="condition.docBackSide.error"></span>
                </div>
                <div :class="condition.docBackSide.width" v-if="!condition.docBackSide.preview">
                  裏面をアップロード
                </div>
              </div>
            </div>

            <div v-if="activeUploadDiv">
              <!-- Upload single image -->
              <div class="align-items-center mt-3 border border-2 w-100">
              <div :class="condition.docAllergies.width">
                <div class="photo-upload border">
                  <div class="file-upload-form">
                    <input type="file" @change="onChangeImg($event)" id="child_allergies_doc" name="child_allergies_doc" accept="image/*" class="input-file"/>
                    <label for="child_allergies_doc">
                      <i class="fa fa-cloud-upload fa-5x color-kigaruni-ash" aria-hidden="true"></i>
                    </label>
                  </div>
                  <div class="image-preview" v-if="condition.docAllergies.preview">
                    <img :src="condition.docAllergies.imageUrl" class="w-100 h-100" alt="">
                  </div>
                </div>
                <span class="is-danger" v-html="condition.docAllergies.error"></span>
              </div>
              <div :class="condition.docAllergies.width" v-if="!condition.docAllergies.preview">
                表面をアップロード
              </div>
            </div>
            </div>

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
                <button class="border border-secondary bg-white px-5 py-2 me-4" type="button">
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
    </div>
    <!-- /right column -->

  </div>
</template>

<script>
// imports
import Frontend from "../../layouts/Frontend";
import axios from "@/axios";

export default {
  name: "AllergiesDiseaseDocument",
  created() {
    this.$emit('update:layout', Frontend)

    /* --- child allergies docs --- */
    this.getChildAllergiesDoc();
  },
  mounted(){
    axios.get('/document/get-listing', this.$data).then((res) => {
      if(res.status === 200){
        var docList = Object.entries(res.data);
        this.identityVarification = docList.filter((list,idx) => idx >= 0 && idx < 4);
        this.variousVarification = docList.filter((list,idx) => idx >= 4);
      }
    }).catch(error => {
      this.checkError(error)
    });
  },
  data() {
    return {
      sideNavActive: 1,
      selected: null,
      identityVarification:[],
      variousVarification:[],
      activeUploadDiv:false,
      condition:{
        docAllergies:{
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
        docSelect: 1,
        docAllergiesBackSide: ''
      },
    }
  },
  components: {
  },
  methods: {
    getChildAllergiesDoc(){
      axios.get(`/get_child_allergies_doc_upload/${this.$route.params.id}`).then((res) => {
        if(parseInt(res.status ) === 200){
          this.condition.docAllergies.imageUrl = res.data.data.image_path;
          this.form.docSelect = res.data.data.indentity_id;
          this.condition.docAllergies.preview = true;
          this.condition.docAllergies.width = 'py-2';
        }
      }).catch(error => {
        this.checkError(error)
      });
    },
    onChangeDocType(event){
      console.log(event.target.value);
      if(this.identityVarification.some(data => data[0]  === event.target.value)){
        this.activeUploadDiv = true;
      }else{
        this.activeUploadDiv = false;
      }
    },
    onChangeImg(e) {
      const file = e.target.files[0]
      this.form.docAllergiesBackSide = file;
      this.condition.docAllergies.imageUrl = URL.createObjectURL(file);
      this.condition.docAllergies.error = "";
      this.condition.docAllergies.preview = true;
      this.condition.docAllergies.width = 'py-2';
    },
    childDocFormSubmit(){
      if(this.form.docBackSide === ""){
        this.condition.docAllergies.error = "こちらは記入、必須項目です。";
      }else if(this.condition.accept.process === false){
        this.condition.accept.error = "こちらは記入、必須項目です。";
      }else{
        const formData = new FormData();
        formData.append('docAllergiesBackSide', this.form.docAllergiesBackSide);
        formData.append('child_id', this.$route.params.id);
        formData.append('indentity_id', this.form.docSelect);
        axios.post('child_allergies_doc_upload', formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((res) => {
          if(res.data.success){
            this.$toast.success(res.data.message);
            this.getChildAllergiesDoc();
          }else{
            this.$toast.error(res.data.message);
          }
        }).catch(error => {
          this.checkError(error)
        });
      }
    }
  }
};
</script>
<style scoped>
.photo-upload_inner, .text_inner {
  width: 50%;
  display: inline-block;
  vertical-align: middle;
}
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
.is-danger{
  color: #f22435;
}
</style>
