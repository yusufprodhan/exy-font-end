<template>
  <div class="usage-flow" v-if="!loading">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">検索</li>
            <li class="breadcrumb-item active" aria-current="page">検索結果 ＞</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="position-relative characteristics">
      <!-- Slide Start -->
      <hooper :settings="mainSlider">
        <slide v-for="(image, i) in data.info.posted_images" :key="i">
          <img class="img-fluid w-100" :src="image.image_path" alt="Slider">
        </slide>
      </hooper>
      <!-- Slide End -->

      <div class="row w-100 m-0">
        <div class="col-md-6 box-border">
          <div class="footer-icon">
            <ul class="d-flex align-items-center justify-content-center mb-0 mt-0">
              <li><a :href="data.info.instagram_link" target="_blank"><i class="fa fa-instagram"></i></a></li>
              <li><a :href="data.info.twitter_link" target="_blank"><i class="fa fa-twitter"></i></a></li>
              <li><a :href="data.info.facebook_link" target="_blank"><i class="fa fa-facebook"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 text-center box-border pt-1">
          <a href="#" class="text-sm">この園へ問い合わせる</a>
        </div>
      </div>
    </div>

    <!-- Details section start -->
    <div class="characteristics-details">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <h3>
              <i v-if="!isFavorite" @click="favoriteGarden(true)" class="fa fa-heart-o color-cb3a82 cursor-pointer"></i>
              <span v-else class="position-relative">
                <span class="is-favorite">お気に入りしました</span>
                <i class="fa fa-heart color-cb3a82 cursor-pointer" @click="favoriteGarden(false)"></i>
              </span>

              <span class="ms-2">{{ data.info.garden_name }}</span>
            </h3>
            <p class="small">{{ data.info.furigana_name }}</p>
            <div>{{ data.info.comment }}</div>
          </div>
          <div class="col-md-2">
            <img src="../../assets/images/guardian/Image_53.png" alt="EXY" class="img-fluid  pull-right w-50">
          </div>
        </div>
      </div>

      <div class="details-tab">
        <div class="container tabs">
          <a :class="[ activeTab === index ? 'active' : '' ]" @click="activeTab=index" v-for="(title, index) in tabTitles" :key="index">{{ title }}</a>
        </div>
      </div>

      <!-- Features Tab Start -->
      <features v-if="activeTab===0" :data="data"></features>
      <!-- Features Tab end -->

      <!-- Child Care Tab Start -->
      <child-care v-if="activeTab===1" :data="data"></child-care>
      <!-- Child Care Tab End -->

      <!-- Rate Plan Tab Start -->
      <rate-plan v-if="activeTab===2" :data="data"></rate-plan>
      <!-- Rate Plan Tab End -->

      <!-- Word Of Mouth Tab Start -->
      <word-of-mouth v-if="activeTab===3" :data="data"></word-of-mouth>
      <!-- Word Of Mouth Tab End -->

      <!-- Overview Tab Start -->
      <overview v-if="activeTab===4" :data="data"></overview>
      <!-- Overview Tab End -->
    </div>
    <!-- details-section end -->
  </div>
</template>

<script>
import {Hooper, Slide} from 'hooper';
import 'hooper/dist/hooper.css';
import Frontend from "../../layouts/Frontend";
import axios from "../../axios";
import Features from "@/views/guardian/Features";
import ChildCare from "@/views/guardian/ChildCare";
import RatePlan from "@/views/guardian/RatePlan";
import WordOfMouth from "@/views/guardian/WordOfMouth";
import Overview from "@/views/guardian/Overview";

export default {
  name: "CharacteristicsDetail",
  created() {
    this.$emit('update:layout', Frontend)
  },
  components: { Overview, WordOfMouth, RatePlan, ChildCare, Features, Hooper, Slide },
  data() {
    return {
      loading: true,
      isFavorite: false,
      mainSlider: {
        itemsToShow: 1,
        autoPlay: true,
        mouseDrag: false,
        playSpeed: 4000,
        infiniteScroll: true,
        hoverPause: false,
        wheelControl: false
      },
      data: {},
      activeTab: 0,
      tabTitles: [
        '園の特色', '保育内容', '料金プラン', '口コミ', '概要'
      ]
    }
  },
  methods: {
    /**
     * Fetch records
     */
    getRecord() {
      axios.get(`/site/school/${this.$route.params.uuid}`).then(response => {
        this.data = response.data
        this.loading = false
      }).catch(error => {
        if (error.response.status === 404) {
          window.location.href = '/'
        } else {
          this.checkError(error)
        }
      })
    },
    /**
     * Toggle favorite status of the school
     */
    favoriteGarden(favorite) {
      if (!this.$store.getters.loggedIn) {
        this.$toast.error('ログインしてください')
        return false
      }

      axios.post('/favorite-garden/favorite', { school_id: this.data.info.id, favorite: favorite }).then(() => {
        this.isFavorite = !this.isFavorite
      }).catch(error => {
        this.checkError(error)
      })
    },
    /**
     * Check favorite status of the school
     */
    checkFavorite() {
      if (!this.$store.getters.loggedIn) return false

      axios.get(`/favorite-garden/check/${this.$route.params.uuid}`).then(response => {
        this.isFavorite = response.data.favorite
      })
    }
  },
  mounted() {
    this.getRecord()
    this.checkFavorite()
  },
}
</script>

<style lang="scss" scoped>
.is-favorite {
  display: inline-block;
  background: #FFFFFF 0 0 no-repeat padding-box;
  box-shadow: 1px 1px 1px #00000029;
  border: 0.5px solid #E6E6E6;
  opacity: 1;
  font-size: 10px;
  padding: 3px 0;
  border-radius: 4px;
  width: 110px;
  text-align: center;
  position: absolute;
  bottom: 35px;
  left: 0;
  transform: translate(-35%, 0);
}
</style>
