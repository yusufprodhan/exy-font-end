<template>
  <div class="column-detail">
    <router-link :to="{name:'ProceedToReservation'}" class="regeneration-btn">予約へ進む</router-link>
    <div class="container">
      <div class="row">
        <div class="col-md-11">
          <div class="d-flex align-items-center justify-content-between border-bottom border-333333 pb-1">
            <h5 class="color-cb3a82 fw-bold m-0">{{ column.title }}</h5>
            <span>更新日： {{ column.updated_at | formatDate }}</span>
          </div>
          <div class="pt-5 pb-4">
            <div class="text-center mb-3">
              <img :src="column.thumbnail_image" alt="" class="img-fluid">
            </div>
            <div class="exy--p-0" v-html="column.description"></div>
          </div>
          <div class="border-bottom border-333333"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frontend from "@/layouts/Frontend";
import axios from "@/axios";

export default {
  name: "ChildcareColumnDetails",
  created() {
    this.$emit('update:layout', Frontend)
  },
  data() {
    return {
      column: {},
    };
  },
  methods: {
    /**
     * Fetch record
     */
    getRecord() {
      axios.get(`/site/school/${this.$route.params.uuid}/childcare-column-details/${this.$route.params.id}`).then(response => {
        this.column = response.data;
      }).catch(() => {
        window.location.href = '/'
      })
    },
  },
  mounted() {
    this.getRecord()
  }
}
</script>

<style lang="scss" scoped>
.column-detail {
  position: relative;
  padding: 50px 0;

  .regeneration-btn {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #AAAAAA;
    padding: 80px 50px 80px 18px;
    font-size: 25px;
    width: 0;
    word-wrap: break-word;
    color: #FFFFFF;
    white-space: pre-wrap;
    border-radius: 0;
    text-align: center;
    font: normal normal bold 30px/39px YuGothic;
    letter-spacing: 0;
    opacity: 1;

    &:hover {
      background: #CC3A83;
    }
  }
}
</style>
