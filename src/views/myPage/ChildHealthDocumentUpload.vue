<template>
    <div class="py-2 overflow-hidden mb-5 mt-4">
      <!-- right column -->
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

        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent=" handleSubmit(childDocFormSubmit)" autocomplete="off">
            <div class="py-3">
              <div class="fw-bold">書類を選択</div>
                <select class="mt-2 p-2 w-50 border border-2 rounded bg-light form-text md-responsive" v-model="form.docSelect"  @change="onChangeDocType($event)">
                  <optgroup label="本人確認書類">
                    <option :value="doc[0]" v-for="(doc,index) in identityVarification" :key="index">{{doc[1]}}</option>
                  </optgroup>
                  <optgroup label="各種書類">
                    <option :value="doc[0]" v-for="(doc,index) in variousVarification" :key="index">{{doc[1]}}</option>
                  </optgroup>
                </select>
            </div>
            <div class="py-3">
              <div class="fw-bold">選択した書類をアップロード</div>

              <div v-if="activeUploadDiv">
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

              <div v-if="!activeUploadDiv">
                <!-- Upload single image -->
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
                    画像をアップロード
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-center align-items-center mt-5">
                <router-link :to="{name:'terms'}">
                  <span class="text-muted text-decoration-underline">利用規約、プライバシーポリシー</span>
                </router-link>
                <span> に同意の上ご送信ください</span>
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
                  <button  class="border border-secondary bg-white">
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
  name: "ChildHealthDocumentUpload",
  created() {
    this.$emit('update:layout', Frontend)

    /* --- child Health Insurance docs --- */
    this.getChildHealthInsuranceDoc();

    /* --- document identity list --- */
    this.getDocumentIdentityList();
  },
  data() {
    return {
      identityVarification:[],
      variousVarification:[],
      sideNavActive: 5,
      activeUploadDiv:false,
      condition:{
        docFrontSide:{
          preview: false,
          imageUrl: null,
          error: '',
          width:'p-2 fw-bold d-inline-block w-50 text-center',
        },
        docBackSide:{
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
        docFrontSide: '',
        docBackSide: ''
      },
    }
  },
  components: {

  },
  methods: {
    getDocumentIdentityList(){
      axios.get('/document/get-listing', this.$data).then((res) => {
        if(parseInt(res.status) === 200){
          var docList = Object.entries(res.data);
          this.identityVarification = docList.filter((list,idx) => idx >= 0 && idx < 4);
          this.variousVarification = docList.filter((list,idx) => idx >= 4);
        }
      }).catch(error => {
        this.checkError(error)
      });
    },
    onChangeDocType(event){
      if(this.identityVarification.some(data => data[0]  === event.target.value)){
        this.activeUploadDiv = false;
      }else{
        this.activeUploadDiv = true;
      }
    },
    getChildHealthInsuranceDoc(){
      axios
          .get('/get_child_health_insurance_doc_upload/'+ this.$route.params.id)
          .then((res) => {
          console.log(res);
          this.condition.docFrontSide.imageUrl = res.data.data.surface.image_path;
          this.condition.docFrontSide.preview = true;
          this.condition.docFrontSide.width = 'p-2';

          this.condition.docBackSide.imageUrl = res.data.data.backside.image_path;
          this.condition.docBackSide.preview = true;
          this.condition.docBackSide.width = 'p-2';
  

          this.form.docSelect = parseInt(res.data.data.surface.indentity_id);

          if(this.identityVarification.some(data => data[0]  === res.data.data.backside.indentity_id)){
            this.activeUploadDiv = false;
          }else{
            this.activeUploadDiv = true;
          }
      }).catch(error => {
        this.checkError(error)
        console.log(error);
      });
    },
    onChangeImg(e,name) {
      if(name =='font'){
        const file = e.target.files[0]
        this.form.docFrontSide = file;
        this.condition.docFrontSide.imageUrl = URL.createObjectURL(file);
        this.condition.docFrontSide.error = "";
        this.condition.docFrontSide.preview = true;
        this.condition.docFrontSide.width = 'p-2';
      }else{
        const file = e.target.files[0]
        this.form.docBackSide = file;
        this.condition.docBackSide.imageUrl = URL.createObjectURL(file);
        this.condition.docBackSide.error = "";
        this.condition.docBackSide.preview = true;
        this.condition.docBackSide.width = 'p-2';
      }
    },
    childDocFormSubmit(){
      if(this.form.docFrontSide === ""){
        this.condition.docFrontSide.error = "こちらは記入、必須項目です。";
      }else if(this.form.docBackSide === ""){
        this.condition.docBackSide.error = "こちらは記入、必須項目です。";
      }else if(this.condition.accept.process === false){
        this.condition.accept.error = "こちらは記入、必須項目です。";
      }else{
        const formData = new FormData();
        formData.append('docFrontSide', this.form.docFrontSide);
        formData.append('docBackSide', this.form.docBackSide);
        formData.append('child_id', this.$route.params.id);
        formData.append('indentity_id', this.form.docSelect);
        axios.post('child_health_insurance_doc_upload', formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((res) => {
          if(res.data.success){
            this.$toast.success(res.data.message);
            this.getChildHealthInsuranceDoc();
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
  .is-danger{
    color: #f22435;
  }
</style>
