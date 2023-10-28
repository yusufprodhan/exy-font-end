<template>
  <div>
    <!-- Slider Start -->
    <div id="homeSlider" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active">
          <img src="../assets/images/slider.png" class="d-block w-100" alt="EXY">
          <div class="carousel-caption">
            <img src="../assets/images/_pc.png" alt="Logo">
            <h3>WEBで予約、WEBで決済 <br/>保育園探しは <br/>キガルニホイク</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider End -->

    <!-- Search Section Start -->
    <div class="search-section">
      <div class="container">
        <div class="row">
          <div class="col-md-5 mb-4 mb-md-0">
            <date-picker
                v-model="date"
                valueType="format"
                :disabled-date="disabledBeforeToday"
                placeholder="日付からさがす"
            ></date-picker>
          </div>
          <div class="col-md-5 mb-4 mb-md-0">
            <v-select :options="options" placeholder="おこさまの年齢"></v-select>
          </div>
          <div class="col-md-2 mb-4 mb-md-0">
            <router-link :to="{name:'Search'}" tag="button" type="button" class="search-btn">検索する</router-link>
          </div>
        </div>

        <!-- Search Nav -->
        <div class="row mt-4 search-nav">
          <div class="col-lg-2 col-4 col-4">
            <div class="position-relative">
              <div class="cursor-pointer" @click="togglePopup1">
                <i class="fa fa-caret-right"></i>
                <span class="ms-3">＃</span> 明日預ける
              </div>
              <wise-search v-if="popup1" @close="popup1 = false"/>
            </div>
          </div>
          <div class="col-lg-2 col-4">
            <div class="position-relative">
              <div class="cursor-pointer" @click="togglePopup2">
                <span>＃</span> 体験保育
              </div>
              <wise-search v-if="popup2" @close="popup2 = false"/>
            </div>
          </div>
          <div class="col-lg-2 col-4">
            <div class="position-relative">
              <div class="cursor-pointer" @click="togglePopup3">
                <span>＃</span> 月極保育
              </div>
              <wise-search v-if="popup3" @close="popup3 = false"/>
            </div>
          </div>
          <div class="col-lg-2 col-4">
            <router-link :to="{name:'FindNurserySchool'}"><span>＃</span> 条件からさがす</router-link>
          </div>
          <div class="col-lg-2 col-4">
            <router-link :to="{name:'SearchFromArea'}"><span>＃</span> エリアからさがす</router-link>
          </div>
          <div class="col-lg-2 col-4">
            <router-link :to="{name:'SearchFromAlongLine'}"><span>＃</span> 沿線からさがす</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Search Section End -->

    <!-- Garden Section Start -->
    <div class="garden-feature">
      <div class="container">

        <!-- Tabs Start -->
        <div class="tabs">
          <a @click="activeTab='1'" :class="[ activeTab === '1' ? 'active' : '' ]"><img src="../assets/images/svg/smile-emoji.svg" alt="EXY"> 明日預けられる園</a>
          <a @click="activeTab='2'" :class="[ activeTab === '2' ? 'active' : '' ]"><img src="../assets/images/svg/leaves.svg" alt="EXY"> 特色がある園</a>
          <a @click="activeTab='3'" :class="[ activeTab === '3' ? 'active' : '' ]"><img src="../assets/images/svg/heart.svg" alt="EXY"> 病児が預けられる園</a>
        </div>
        <!-- Tabs End -->

        <!-- Tabs Content -->
        <div class="content">
          <!-- Tabs Content 1 -->
          <div v-if="activeTab ==='1'" class="tab-content">
            <hooper :settings="hooperSettings">
              <slide v-for="(row, index) in data.depositedTomorrow" :key="index">
                <garden-feature-item :info="row"></garden-feature-item>
              </slide>

              <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
          </div>

          <!-- Tabs Content 2 -->
          <div v-if="activeTab ==='2'" class="tab-content">
            <hooper :settings="hooperSettings">
              <slide v-for="(row, index) in data.uniqueKindergarten" :key="index">
                <garden-feature-item :info="row"></garden-feature-item>
              </slide>

              <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
          </div>

          <!-- Tabs Content 3 -->
          <div v-if="activeTab ==='3'" class="tab-content">
            <hooper :settings="hooperSettings">
              <slide v-for="(row, index) in data.sickKindergarten" :key="index">
                <garden-feature-item :info="row"></garden-feature-item>
              </slide>

              <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
          </div>
        </div>

        <div class="text-center">
          <router-link :to="{name:'Search'}" class="read-more">保育園一覧をみる</router-link>
        </div>

      </div>
    </div>
    <!-- Garden Section End -->

    <!-- About Section Start -->
    <div class="about-area">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="single-item mb-4 mb-lg-0">
              <router-link :to="{name:'KigaruniHoiku'}">
                <img src="../assets/images/group-2761.png" class="img-fluid" alt="EXY">
                <p>キガルニホイクとは</p>
                <span>What is KIGATUNIHOIKU</span>
              </router-link>
              <p>メリットやご利用方法など サービス概要について</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="single-item mb-4 mb-lg-0">
              <router-link :to="{name:'HowToUseKigarniHoik'}">
                <img src="../assets/images/group-2762.png" class="img-fluid" alt="EXY">
                <p>キガルニホイク使い方</p>
                <span>Hoｗ to use</span>
              </router-link>
              <p>保育園の探し方から 子育て相談コーナーなどの 活用方法まで</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="single-item mb-4 mb-lg-0">
              <router-link :to="{name:'AboutPaymentMethod'}">
                <img src="../assets/images/group-2763.png" class="img-fluid" alt="EXY">
                <p>お支払い方法について</p>
                <span>Amount of money</span>
              </router-link>
              <p>お支払いの流れや お支払い方法のご案内</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="single-item">
              <router-link :to="{name:'AllUsersGuidelines'}">
                <img src="../assets/images/group-2764.png" class="img-fluid" alt="EXY">
                <p>ご利用いただく皆さまへ</p>
                <span>To all of you</span>
              </router-link>
              <p>全ての人が安心して ご利用いただくための ガイドライン</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About Section End -->

    <div class="space-100"></div>

    <!-- Garden Reviews Start -->
    <div class="garden-reviews">
      <div class="container">
        <h3 class="mb-4">園口コミ</h3>

        <garden-reviews></garden-reviews>

        <div class="text-center">
          <router-link :to="{name:'GardenReviews'}" class="read-more">保育園一覧をみる</router-link>
        </div>
      </div>
    </div>
    <!-- Garden Reviews End -->

    <!-- Kigarni Hoik Start -->
    <div class="Kigarni-hoik">
      <div class="container">

        <!-- Tabs Start -->
        <div class="tabs">
          <a class="active">＃キガルニホイク</a>
        </div>
        <!-- Tabs End -->

        <!-- Tabs Content -->
        <div class="content">
          <!-- Tabs Content 1 -->
          <div class="tab-content">
            <hooper :settings="hooperSettings">
              <slide v-for="(gallery, i) in galleries" :key="i">
                <div class="single-item">
                  <img :src="file_path('galleries', gallery.name)" alt="Kigarni Hoik" class="d-block w-100">
                </div>
              </slide>

              <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
          </div>
        </div>
      </div>
    </div>
    <!-- Kigarni Hoik End -->

    <!-- ADS Start -->
    <section class="py-5 ads">
      <div class="container">
        <hr style="height: 2px;color: #3D3442" class="mb-4">
        <div class="row justify-content-center">
          <div class="col-md-5 mb-3 mb-md-0">
            <div class="banner">
              <img :src="file_path('ads', ads.image_1)" alt="EXY" class="d-block w-100">
            </div>
          </div>
          <div class="col-md-1 text-center visibility-hidden">
            <span class="horizontal-line"></span>
          </div>
          <div class="col-md-5 mb-3 mb-md-0">
            <div class="banner">
              <img :src="file_path('ads', ads.image_2)" alt="EXY" class="d-block w-100">
            </div>
          </div>
        </div>
        <hr style="height: 2px;color: #3D3442" class="mt-4">
      </div>
    </section>
    <!-- ADS End -->

    <!-- First Kindergarten Hunt Start -->
    <section class="kindergarten-hunt">
      <div class="container">
        <div class="row">
          <div class="col-md-6 pe-md-0">
            <div class="content">
              <h2>初めての保活</h2>
              <p>初めての保育園探し。<br/>そもそも保育園って何するの？ <br/>まずは保育サービスの基本を知り、パパママと<br/>お子さんにあった保育園を選びましょう</p>
              <router-link :to="{name:'AboutKindergartenHunting'}" class="read-more text-decoration-none hover-text-white">保活についてくわしくみる ＞</router-link>
            </div>
          </div>
          <div class="col-md-6 px-md-0">
            <img src="../assets/images/kindergarten-hunt.png" alt="EXY">
          </div>
        </div>
      </div>
    </section>
    <!-- First Kindergarten Hunt End -->

    <!-- ADS Start -->
    <section class="pt-0 pb-5 ads">
      <div class="container">
        <hr style="height: 2px;color: #3D3442" class="mb-4">
        <div class="row justify-content-center">
          <div class="col-md-3 mb-3 mb-md-0">
            <div class="banner">
              <img :src="file_path('ads', ads.image_3)" alt="EXY" class="d-block w-100">
            </div>
          </div>
          <div class="col-md-1 text-center visibility-hidden">
            <span class="horizontal-line"></span>
          </div>
          <div class="col-md-3 mb-3 mb-md-0">
            <div class="banner">
              <img :src="file_path('ads', ads.image_4)" alt="EXY" class="d-block w-100">
            </div>
          </div>
          <div class="col-md-1 text-center visibility-hidden">
            <span class="horizontal-line"></span>
          </div>
          <div class="col-md-3 mb-3 mb-md-0">
            <div class="banner">
              <img :src="file_path('ads', ads.image_5)" alt="EXY" class="d-block w-100">
            </div>
          </div>
        </div>
        <hr style="height: 2px;color: #3D3442" class="mt-4">
      </div>
    </section>
    <!-- ADS End -->

    <!-- Child-rearing information bulletin board Start -->
    <div class="bulletin-board">
      <div class="container">
        <div class="bulletin-board-inner">
          <div class="top-title">
            <div class="col-md-3 p-1">
              <img src="../assets/images/svg/left_search.svg" alt=""/>
            </div>
            <div class="col-md-6">
              <h4>子育て情報掲示板</h4>
            </div>
            <div class="col-md-3 text-right p-1">
              <img src="../assets/images/svg/right_search.svg" alt=""/>
            </div>
          </div>
          <div class="content">
            <div class="row">
              <div class="col-md-7">
                <div class="bulletin-items">
                  <div class="bulletin-item">
                    <div class="date-title">
                      <div>4/10</div>
                      <div>大阪市西区に新しい保育園ができたらしい</div>
                    </div>
                    <p>大阪市西区北堀江の〇〇ビルに新しい保育園がオープン予…</p>
                  </div>
                  <div class="bulletin-item">
                    <div class="date-title">
                      <div>4/10</div>
                      <div>大阪市西区に新しい保育園ができたらしい</div>
                    </div>
                    <p>大阪市西区北堀江の〇〇ビルに新しい保育園がオープン予…</p>
                  </div>
                  <div class="bulletin-item">
                    <div class="date-title">
                      <div>4/10</div>
                      <div>大阪市西区に新しい保育園ができたらしい</div>
                    </div>
                    <p>大阪市西区北堀江の〇〇ビルに新しい保育園がオープン予…</p>
                  </div>
                </div>
                <a href="#" class="read-more">保育園一覧をみる</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Child-rearing information bulletin board End -->

    <!-- Child-rearing consultation corner Start -->
    <div class="child-consultation">
      <div class="container">
        <div class="child-consultation-inner">
          <h4>子育て相談コーナー</h4>

          <router-link :to="{name:'ChildRearingConsultationCornerDetailResolved'}" tag="div" class="consultation-item">
            <img src="../assets/images/group-2770.png" alt="EXY">
            <div class="consultation-content bg-left">
              <h5><a href="#">▶︎現在５歳、春から小学生になる息子がいる母です。体が小さめで心も幼く、小学…</a></h5>
              <div>
                <span>＃お悩み聞いて！</span>
                <span>＃旦那・家族</span>
                <span>＃働くママ</span>
                <span>＃5歳児</span>
                <span>2021/04/01 17:28 ｜ コメント２</span>
              </div>
            </div>
          </router-link>

          <router-link :to="{name:'ChildRearingConsultationCornerDetailResolved'}" tag="div" class="consultation-item">
            <div class="consultation-content bg-right">
              <h5><a href="#">▶︎現在５歳、春から小学生になる息子がいる母です。体が小さめで心も幼く、小学…</a></h5>
              <div>
                <span>＃お悩み聞いて！</span>
                <span>＃旦那・家族</span>
                <span>＃働くママ</span>
                <span>＃5歳児</span>
                <span>2021/04/01 17:28 ｜ コメント２</span>
              </div>
            </div>
            <img src="../assets/images/group-2770.png" alt="EXY">
          </router-link>

          <router-link :to="{name:'ChildRearingConsultationCornerDetailResolved'}" tag="div" class="consultation-item">
            <img src="../assets/images/group-2770.png" alt="EXY">
            <div class="consultation-content bg-left">
              <h5><a href="#">▶︎現在５歳、春から小学生になる息子がいる母です。体が小さめで心も幼く、小学…</a></h5>
              <div>
                <span>＃お悩み聞いて！</span>
                <span>＃旦那・家族</span>
                <span>＃働くママ</span>
                <span>＃5歳児</span>
                <span>2021/04/01 17:28 ｜ コメント２</span>
              </div>
            </div>
          </router-link>

          <div class="text-center">
            <router-link :to="{name:'ConsultationCorner'}" class="read-more">保育園一覧をみる</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Child-rearing consultation corner End -->

    <section class="notice">
      <div class="container">
        <h3>お知らせ</h3>
        <div class="notice-content">
          <div class="notice-item">
            <router-link :to="{name:'AboutKindergartenHunting'}">
              <span>▶︎2021年04月01日</span>
              <span>新型コロナウィルス感染拡大に伴う影響について</span>
            </router-link>
          </div>
          <div class="notice-item">
            <router-link :to="{name:'AboutKindergartenHunting'}">
              <span>▶︎2021年04月01日</span>
              <span>新型コロナウィルス感染拡大に伴う影響について</span>
            </router-link>
          </div>
          <div class="notice-item">
            <router-link :to="{name:'AboutKindergartenHunting'}">
              <span>▶︎2021年04月01日</span>
              <span>新型コロナウィルス感染拡大に伴う影響について</span>
            </router-link>
          </div>
          <div class="notice-item">
            <router-link :to="{name:'AboutKindergartenHunting'}">
              <span>▶︎2021年04月01日</span>
              <span>新型コロナウィルス感染拡大に伴う影響について</span>
            </router-link>
          </div>
          <a class="d-flex justify-content-end text-xs" href="#" style="color:#CB3A82;">もっとみる ＞</a>
        </div>
      </div>
    </section>

    <!-- ADS 02 Start -->
    <section class="pb-5 ads-02">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-4 mb-3 mb-md-0">
            <div class="banner">
              <img :src="file_path('ads', ads.image_6)" alt="EXY" class="d-block w-100">
            </div>
          </div>
          <div class="col-sm-6 col-md-4 mb-3 mb-md-0">
            <div class="banner">
              <img :src="file_path('ads', ads.image_7)" alt="EXY" class="d-block w-100">
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="banner">
              <img :src="file_path('ads', ads.image_8)" alt="EXY" class="d-block w-100">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ADS End -->

    <div class="container">
      <img :src="file_path('ads', ads.image_9)" alt="EXY" class="d-block w-100" style="max-height: 125px">
    </div>

    <div class="space-100"></div>

  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ja';
import vSelect from 'vue-select'
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';
import GardenFeatureItem from "../components/GardenFeatureItem";
import GardenReviews from "../components/GardenReviews";
import WiseSearch from "../components/search/WiseSearch";
import Frontend from "../layouts/Frontend";
import axios from "../axios";

export default {
  name: 'Home',
  created() {
    this.$emit('update:layout', Frontend)
  },
  data() {
    return {
      ads: {},
      galleries: [],
      popup1: false,
      popup2: false,
      popup3: false,
      data: [],
      date: '',
      activeTab: '1',
      options: [
        'お子様の年齢',
        '０歳 ０ヶ月',
        '０歳 １ヶ月〜２ヶ月',
        '０歳 ３ヶ月〜５ヶ月',
        '０歳 ６ヶ月〜１１ヶ月',
        '１歳',
        '２歳',
        '３歳',
        '４歳',
        '５歳',
      ],
      hooperSettings: {
        itemsToShow: 1,
        autoPlay: true,
        playSpeed: 3000,
        centerMode: false,
        wheelControl: false,
        infiniteScroll: true,
        breakpoints: {
          800: {
            itemsToShow: 2
          },
          1000: {
            itemsToShow: 4,
            pagination: 'fraction'
          }
        }
      }
    }
  },
  components: { WiseSearch, GardenReviews, GardenFeatureItem, DatePicker, vSelect, Slide, Hooper, HooperNavigation },
  methods: {
    /**
     * Fetch records
     */
    getRecords() {
      axios.get('/site/school').then(response => {
        this.data = response.data.data
        this.ads = this.data.ads
        this.galleries = this.data.galleries
      }).catch(error => {
        this.checkError(error)
      })
    },

    disabledBeforeToday(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return date < today;
    },

    togglePopup1() {
      this.popup1 = !this.popup1
    },

    togglePopup2() {
      this.popup2 = !this.popup2
    },

    togglePopup3() {
      this.popup3 = !this.popup3
    }
  },
  mounted() {
    this.getRecords()
  }
}
</script>

<style scoped>

</style>
