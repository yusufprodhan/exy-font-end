<template>
  <div class="favorite-garden-parent">
    <div class="container mb-5 mt-5">
      <div class="initRating">
        <span class="fa fa-star color-kigaruni-pink star"></span>
        <span class="ms-2 fw-bold label">お気に入り園</span>
      </div>

      <vue-element-loading
        :active="isLoadingshow"
        spinner="bar-fade-scale"
        color="#FF6700"
        :is-full-screen="isFullScreen"
      />

      <div class="favoriteGardenArtical">
        <div class="box" v-for="(favorite,index) in favoriteGarden" :key="index">
          <div class="header">
            <div class="banner" @click="openModal(index)"></div>
            <h4 class="title">
              <a :href="'../kindergarten/'+favorite.school.uuid">{{favorite.school.garden_name}}</a>
            </h4>
            <div class="details">
              <span class="access">アクセス</span>
              <p class="station">
                <span>{{favorite.school.zip_code}}  {{favorite.school.prefecture.name}} {{favorite.school.city}} {{favorite.school.building_name}}</span>
                <span v-for="(station,index) in favorite.school.school_nearest_stations" :key="index">
                  {{station.stg_city_lane.name}} {{station.stg_city_lane_station.name}} 徒歩{{ station.on_foot }}分
                </span>
              </p>
            </div>
          </div>
          <div class="body">
            <img :src="favorite.school.is_exterior.image_path" alt="" class="imgmedia">
            <div class="details">
              <span>{{favorite.school.comment}}</span>
              <div class="spotColor">
                <span>園特色：</span>
                <div class="pill">
                  <span class="item" v-for="(feature,index) in favorite.school.features" :key="index">{{feature.feature.name}}</span>
                </div>
              </div>
              <div class="rating">
                <span>口コミ：</span>
                <span>5.0</span>
                <div class="list">
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                </div>
              </div>
              <a :href="'../kindergarten/'+favorite.school.uuid" class="hrfButton"><strong>空き確認</strong></a>
            </div>
          </div>
        </div>
        <div v-if="favoriteGarden.length == 0" class="d-flex justify-content-center text-danger">
            <h5>リストにお気に入りの庭が見つかりません</h5>
        </div>
      </div>

      <div class="mt-5 mb-10">
        <pagination :meta="records" @page-change="getParentFavoriteGardenList" v-if="favoriteGarden.length != 0"/>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade show" id="favoriteGardenModal" tabindex="-1" aria-labelledby="favoriteGardenModalLabel"
         aria-hidden="true" v-if="showModal">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="text-end p-2">
            <button type="button" class="border rounded-circle bg-dark text-white ps-2 pe-2"
                    data-bs-dismiss="modal" aria-label="Close" @click="showModal=false;">X
            </button>
          </div>
          <div class="modal-body px-5">
            <div class="mt-2 bg-light py-3 px-5 text-center">
              <div class="me-4">
                <img :src="school.is_exterior.image_path" alt="EXY" height="200" width="50%">
              </div>
              <div class="mt-4">
                <a class="fw-bold text-xl mb-2" :href="'../kindergarten/'+school.uuid">
                  <u> {{school.garden_name}}</u>
                </a>
                <div class="mt-2">
                  <span class="border px-2 py-1 me-2 border-secondary">アクセス</span>
                  {{school.zip_code}}  {{school.prefecture.name}} {{school.city}} {{school.building_name}} 
                  <span v-for="(station,index) in school.school_nearest_stations" :key="index">
                    {{station.stg_city_lane.name}} {{station.stg_city_lane_station.name}} 徒歩{{ station.on_foot }}分
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-5 text-center mb-5">
              <div class="mt-2">お気に入りを解除しますか?</div>
              <div class="mt-2">解除すると園からお知らせが届かなくなります。</div>
            </div>

            <div class="mt-5 text-center mb-5">
              <button class="border border-1 px-5 py-2 border-secondary bg-white" @click="showModal=false;">
                <span class="px-4">戻る</span>
              </button>
              <button class="exy-default-btn border border-1 px-5 py-2 ms-4" @click="closeModalWithConfirmUnfavorite">
                <span class="px-4">解除する</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Modal -->
  </div>
</template>

<script>
// imports
import VueElementLoading from "vue-element-loading";
import Pagination from "../../helpers/Paginate"
import Parent from "../../layouts/Parent";
import axios from "../../axios";

export default {
  name: "FavoriteGarden",
  created() {
    this.$emit('update:layout', Parent);
    this.getParentFavoriteGardenList(this.currentPage);
  },
  data() {
    return {
      isLoadingshow: true,
      isFullScreen: false,
      favoriteGarden:[],
      records: {},
      navActive: "information",
      currentPage: 1,
      osCurrentPage: 1,
      showModal: false,
      school: {}
    }
  },
  components: {
    Pagination,
    VueElementLoading
  },
  methods: {
    getParentFavoriteGardenList(page){
      this.currentPage = page;
      this.isLoadingshow = true;
      axios.get('favorite-garden/list?page='+this.currentPage)
      .then((res) => {
        if(res.data.success){
          this.favoriteGarden = res.data.data.records;
          this.records = res.data.data;
          this.isLoadingshow = false;
        }else{
          this.$toast.error(res.data.message);
        }
      }).catch(error => {
        this.checkError(error)
      });
    },
    osChangePage: function (page) {
      this.osCurrentPage = page
      this.getParentFavoriteGardenList()
    },
    openModal: function(id){
      this.school = this.favoriteGarden[id]['school'];
      this.showModal = true;
    },
    closeModalWithConfirmUnfavorite(){
      this.showModal = false;
      const formData = new FormData();
      formData.append('favorite', false);
      formData.append('school_id', this.school.id);
      axios.post('favorite-garden/favorite/',formData)
      .then((res) => {
        if(res.data.success){
          this.$toast.success(res.data.message);
          this.currentPage = 1;
          this.osCurrentPage = 1;
          this.getParentFavoriteGardenList(this.currentPage);
        }else{
          this.$toast.error(res.data.message);
        }
      }).catch(error => {
        this.checkError(error)
      });
    }
  }
};
</script>

<style scoped lang="scss">
.initRating
{
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  .star
  {
    font-size: 1.5rem;
  }
  .label
  {
    color: #333333;
    font-size: 20px;
  }
}
.favoriteGardenArtical
{
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  .box
  {
    border: 1px solid #BABABA;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 5px;
    margin-bottom: 3rem;
    .header
    {
      position: relative;
      border-bottom: 1px dashed #707070;
      display: flex;
      flex-direction: column;
      padding: 15px 40px;
      .banner
      {
        position: absolute;
        top: -8px;
        left: -30px;
        font-size: 28px;
        color: #CCCC3B;
        background: #F8F8F8;
        background: white;
        padding: 25px 5px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 55px;
        height: 115px;
        border: 1px solid #D6D6D6;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &::before
        {
          content: '★';
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
        }
        &::after
        {
          border-bottom: 15px solid #000;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          width: 0;
          height: 0;

          content: "";
          display: block;
        }
      }
      .title
      {
        font-size: 20px;
        font-weight: 600;
        text-decoration: underline;
      }
      .details
      {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        .access
        {
          border: 1px solid #707070;
          padding: 1px 9px;
          font-size: 15px;
        }
        .station
        {
          margin-bottom: 0px;
          display: flex;
          flex-direction: row;
          span
          {
            &:after
            {
              content: ' ｜ ';
              padding: 0px 15px;
            }
            &:last-child:after
            {
              content: '';
            }
          }
        }
      }
    }
    .body
    {
      display: flex;
      flex-direction: row;
      padding: 15px 10px 15px 40px;
      gap: 1rem;
      .imgmedia
      {
        width: 20%;
        height: 200px;
        object-fit: cover;
      }
      .details
      {
        display: flex;
        flex-direction: column;
        flex: 1;
        .spotColor
        {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          background: #F0F0F0;
          padding: 8px 10px;
          border-radius: 4px;
          margin-top: 15px;
          .pill
          {
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            span
            {
              flex: 1;
              text-align: center;
              border-radius: 40px;
              background: white;
              color: #CB3A82;
              padding: 6px 5px;
            }
          }
        }
        .rating
        {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          background: #F0F0F0;
          padding: 8px 10px;
          border-radius: 4px;
          margin-top: 6px;
          .list
          {
            display: flex;
            flex-direction: row;
            gap: 5px;
            .star
            {
              color: #CCCC3B !important;
              font-size: 24px;
              &:first-child
              {
                margin-left: 5px;
              }
              &::before
              {
                content: '★';
              }
            }
          }
        }
      }
      .hrfButton
      {
        margin-top: 6px;
        padding: 10px 15px;
        text-align: center;
        border: 1px solid #CB3A82;
        background: white;
        border-radius: 10px;
        color: #CB3A82;
      }
    }
  }
}
.mb-10
{
  margin-bottom: 10rem;
}
.d-none
{
  display: none;
}
.modal 
{
  display: block;
  background-color: #000000da;
}
</style>