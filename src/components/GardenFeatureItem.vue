<template>
  <div class="single-item">
    <router-link :to="{name:'Kindergarten', params: {uuid: info.uuid}}">
      <div class="thumbnail">
        <img :src="info.is_exterior.image_path" class="img-fluid" alt="EXY">
      </div>
      <div class="area">
        <a>エリア</a>
        <span>{{ info.garden_name }}</span>
      </div>
      <div class="address">
        <span>園住所</span>
        <span>{{ `${info.zip_code} ${info.prefecture.name} ${info.city} ${info.building_name}` }}</span>
      </div>
      <div class="features">
        <span v-for="(feature, index) in info.features.slice(0,3)" :key="index">{{ feature.feature.name }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Kindergarten",
  props: {
    info: Object
  }
}
</script>

<style scoped>

</style>
