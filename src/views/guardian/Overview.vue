<template>
  <div class="overview">
    <div class="container pt-5">
      <div class="row row-1">
        <div class="col-md-2 left">
          <p class="text-center">会社概要</p>
        </div>
        <div class="col-md-10 right">
          <p>株式会社EXY <span class="span-padding">代表取締役 野村瑛莉</span></p>
          <p>
            {{ `${data.info.zip_code} ${data.info.prefecture.name} ${data.info.city} ${data.info.building_name}` }}<br>
            TEL：{{ data.info.telephone_number }} <span class="ps-5">FAX：{{ data.info.fax_number }}</span>
          </p>
          <p class="m-0">営業時間：平日 {{ `${data.info.opening_days[0].start_opening_hour} : ${data.info.opening_days[0].start_opening_minute} 〜 ${data.info.opening_days[0].end_opening_hour} : ${data.info.opening_days[0].end_opening_minute}` }}</p>
        </div>
      </div>
      <div class="row row-2">
        <div class="col-md-2 left">
          <p class="text-center">キャンセルについて</p>
        </div>
        <div class="col-md-10 right">
          <p>当園では以下の条件の通りです。詳細は、各リンク先をご確認ください。</p>
          <p class="text-decoration-underline">
            ・お客様都合によるキャンセル<br>
            ・当園都合によるキャンセル
          </p>
          <p>
            ▼対応条件 <br>
            対応期間内に電話もしくはメールにてご連絡いただいたもののみ原則対応いたします。
          </p>
          <p>▼対応可能期間ご予約日より○日前まで</p>
          <p>▼返金額</p>
          <p class="m-0">▼備考</p>
        </div>
      </div>
    </div>
    <router-link :to="{name:'ProceedToReservation'}" class="regeneration-btn">予約へ進む</router-link>
  </div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    data: Object
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
