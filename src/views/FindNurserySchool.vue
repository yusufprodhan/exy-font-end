<template>
  <div class="find-nursery-school">

    <div class="breadcrumb-border">
      <div class="container">
        <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item py-0">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item active py-0" aria-current="page">保育園をさがす</li>
          </ol>
        </nav>
      </div>
    </div>

    <section class="position-relative">
      <img src="../assets/images/ID2266338_m@2x.png" class="img-fluid h-100" alt="EXY">
      <div class="position-absolute top-0 w-100 h-100">
        <div class="container h-100">
          <div class="d-flex justify-content-between align-items-center h-100">
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <h4 class="shadow p-3 mb-5 bg-body rounded">エリア・沿線からさがす</h4>

        <div class="row justify-content-center first-banner">
          <div class="col-md-5">
            <router-link :to="{name:'SearchFromArea'}">
              <div class="d-flex align-items-center">
                <img src="../assets/images/ID3192071_m@2x.png" alt="EXY">
                <h3>エリアからさがす</h3>
              </div>
            </router-link>
          </div>
          <div class="col-md-5">
            <router-link :to="{name:'SearchFromArea'}">
              <div class="d-flex align-items-center">
                <img src="../assets/images/ID3808135_m@2x.png" alt="EXY">
                <h3>沿線からさがす</h3>
              </div>
            </router-link>
          </div>
        </div>

        <h4 class="shadow p-3 my-5 bg-body rounded">条件からさがす</h4>

        <div class="row">
          <div class="col-lg-3 col-md-6 mb-3">
            <label class="fw-bold text-xl">保育サービス</label>
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <input type="text" class="p-10 w-100 text-xl text-center border border-cb3a82" placeholder="一時保育">
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <input type="text" class="p-10 w-100 text-xl text-center border border-cb3a82" placeholder="月極保育">
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <input type="text" class="p-10 w-100 text-xl text-center border border-cb3a82" placeholder="病児・病後児保育">
          </div>
        </div>
        <hr class="mb-4">
        <div class="row" v-if="firstPage">
          <div class="col-lg-3 col-md-6 mb-3">
            <label class="fw-bold text-xl">日 時</label>
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <input type="text" class="p-10 w-100 text-xl border border-333333" placeholder="日付">
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <input type="text" class="p-10 w-100 text-xl border border-333333" placeholder="開始時間">
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <div class="d-flex align-items-center">
              <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              <input type="text" class="p-10 w-100 text-xl border border-333333" placeholder="終了時間">
            </div>
          </div>
        </div>

        <div class="row" v-if="!firstPage">
          <div class="col-lg-3 mb-3">
            <label class="fw-bold text-xl">日 時</label>
          </div>
          <div class="col-lg-9">
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">月
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">火
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">水
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">木
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">金
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">土
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">日
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333" placeholder="終了時間">
              </div>
            </div>
          </div>
        </div>

        <div class="text-end mt-4">
          <label class="mx-3">または</label>
          <label @click="firstPage = !firstPage" class="--color-e6006e cursor-pointer">一週間の希望日を指定する ＞</label>
        </div>
        <hr>

        <router-link :to="{name:'Search'}" class="exy-default-btn text-xl mt-5 w-100 py-3 text-center" type="button">この条件で検索する</router-link>

        <h4 class="shadow p-3 my-5 bg-body rounded">その他の条件を追加する</h4>

        <search-from-the-area/>

      </div>
    </section>

  </div>
</template>

<script>
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ja';
import SearchFromTheArea from "../components/search/SearchFromTheArea";
import Frontend from "../layouts/Frontend";

export default {
  name: "FindNurserySchool",
  created() {
    this.$emit('update:layout', Frontend)
  },
  data() {
    return {
      date: null,
      firstPage: true
    }
  },
  components: { SearchFromTheArea },
  methods: {
  },
}
</script>

<style scoped>
  .shadow.rounded {
    border: 1px solid #CBCBCB;
    box-shadow: 0px 5px 3px #00000029;
    background: #FFFFFF;
  }
</style>