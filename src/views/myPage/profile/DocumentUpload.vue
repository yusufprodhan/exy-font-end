<template>
  <div class="document-upload-parent">
    <ValidationObserver v-slot="{  handleSubmit }">
      <form @submit.prevent=" handleSubmit(formSubmit)" autocomplete="off">
        <div class="overflow-hidden mb-5">
          <div class="float-start mb-5">
            <div class="hr-title fw-bold text-2xl">書類のアップロード</div>
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
            <div class="py-4 px-3">
              <div class="fw-bold">書類を選択</div>
              <select class="mt-2 p-2 w-25 border border-2 rounded bg-light form-text md-responsive" v-model="form.docSelect">
                <optgroup label="本人確認書類">
                  <option :value="doc[0]" v-for="(doc,index) in identityVarification" :key="index">{{doc[1]}}</option>
                </optgroup>
                <optgroup label="各種書類">
                  <option :value="doc[0]" v-for="(doc,index) in variousVarification" :key="index">{{doc[1]}}</option>
                </optgroup>
              </select>
            </div>
            <div class="py-4 px-3">
              <div class="fw-bold">選択した書類をアップロード</div>
                <div>
                  <div class="d-flex justify-content-center align-items-center mt-3 border border-2 media">
                    <span class="fa fa-cloud-upload text-8xl color-kigaruni-ash icon"></span>
                    <div class="fw-bold txt">
                      表面をアップロード
                    </div>
                    <div v-if="condition.docFrontSide.preview">
                      <img :src="condition.docFrontSide.imageUrl" class="overlay"/>
                    </div>
                    <input type="file" class="file" @change="docFrontSideURL">
                  </div>
                  <span class="is-danger" v-html="condition.docFrontSide.error"></span>
                </div>

                <div>
                  <div class="d-flex justify-content-center align-items-center mt-3 border border-2 media">
                    <span class="fa fa-cloud-upload text-8xl color-kigaruni-ash"></span>
                    <div class="fw-bold">
                      裏面をアップロード
                    </div>
                    <div v-if="condition.docBackSide.preview">
                      <img :src="condition.docBackSide.imageUrl" class="overlay"/>
                    </div>
                    <input type="file" class="file" @change="docBackSideURL">
                  </div>
                  <span class="is-danger" v-html="condition.docBackSide.error"></span>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center mt-5">
                  <p>
                    <span class="text-muted text-decoration-underline">利用規約、プライバシーポリシー</span>
                    <span>に同意の上ご送信ください</span>
                  </p>
                  <p class="mt-2">
                    <label class="container-checkbox text-muted">
                      <div>
                        <span class="ms-2">利用規約およびプライバシーポリシーに同意する</span>
                        <input type="checkbox" v-model="condition.accept.process" @change="condition.accept.error=''">
                        <span class="checkmark"></span>
                        <div class="mt-2">
                          <span class="is-danger" v-html="condition.accept.error"></span>
                        </div>
                      </div>
                    </label>
                  </p>
                  <p class="mt-4">
                    <router-link :to="{name:'Mypage.Profile'}">
                      <button class="border border-secondary bg-white px-5 py-2 me-4">
                        <span class="px-5">戻る</span>
                      </button>
                    </router-link>
                    <button type="submit" class="border border-secondary px-5 py-2 me-4 exy-default-btn">
                      <span class="px-5">送信する</span>
                    </button>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Parent from "../../../layouts/Parent";
import axios from "../../../axios";

export default {
  name: "DocumentUpload",
  created() {
    this.$emit('update:layout', Parent);
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
      navActive: "setting",
      sideNavActive: 5,
      selected: null,
      documentList: [],
      identityVarification:[],
      variousVarification:[],
      condition:{
        docFrontSide:{
          preview: false,
          imageUrl: null,
          error: ''
        },
        docBackSide:{
          preview: false,
          imageUrl: null,
          error: ''
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
      }
    }
  },
  methods: {
    docFrontSideURL(e){
      const file = e.target.files[0];
      this.form.docFrontSide = file;
      this.condition.docFrontSide.imageUrl = URL.createObjectURL(file);
      this.condition.docFrontSide.error = "";
      this.condition.docFrontSide.preview = true;
    },
    docBackSideURL(e){
      const file = e.target.files[0];
      this.form.docBackSide = file;
      this.condition.docBackSide.imageUrl = URL.createObjectURL(file);
      this.condition.docBackSide.error = "";
      this.condition.docBackSide.preview = true;
    },
    formSubmit(){
      if(this.form.docFrontSide === ""){
        this.condition.docFrontSide.error = "こちらは記入、必須項目です。";
      }else if(this.form.docBackSide === ""){
        this.condition.docBackSide.error = "こちらは記入、必須項目です。";
      }else if(this.condition.accept.process === false){
        this.condition.accept.error = "こちらは記入、必須項目です。";
      }else{
        let formData = new FormData();
        formData.append('docSelect', this.form.docSelect);
        formData.append('docFrontSide', this.form.docFrontSide);
        formData.append('docBackSide', this.form.docBackSide);

        axios.post('document/upload', formData,{
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }).then((res) => {
          if(res.data.success){
            this.$toast.success(res.data.message);
             this.condition.docFrontSide.preview = false;
             this.condition.docBackSide.preview = false;
             this.condition.accept.process = false;
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

<style lang="scss" scope>
  .media
  {
    position: relative;
    padding: 3rem;
    gap: 5rem;
    min-height: 200px;
    margin-bottom: 1rem;
    .overlay
    {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .file
    {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .is-danger{
    color: #f22435;
  }
  .document-upload-parent
  {
    .md-responsive
    {
      width: 50% !important;
    }
  }
  /* responsive design */
  @media only screen and (max-width: 600px) {
    .document-upload-parent
  {
    .md-responsive
    {
      width: 100% !important;
    }
  }
  }
</style>