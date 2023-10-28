<template>
  <div class="mt-5">
    <div class="py-2 bg-707070 border border-333333">
      <span class="text-white ps-2 fw-bold">基本情報</span>
    </div>
    <ValidationObserver v-slot="{ invalid, handleSubmit }">
      <form @submit.prevent="handleSubmit(updateBasicInfo)">
        <div class="row w-100 ms-0 row-3">
          <div class="col-md-12 inner-col border-top-0">
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2 border-end d-flex align-items-center justify-content-center">
                <span>コメント</span>
              </div>
              <ValidationProvider tag="div" class="col-md-10 py-2" rules="required" v-slot="{ errors }">
                <textarea v-model="form.comment" class="form-control" maxlength="100" rows="4" :class="{'is-invalid': errors[0]}"></textarea>
                <div class="text-right text-sm mt-1">※最大100文字（現在：{{ empty(!form.comment) ? form.comment.length : 0 }}文字）</div>
              </ValidationProvider>
            </div>
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2 border-end">
                <div class="text-center">園名</div>
              </div>
              <div class="col-md-4 py-2">
                <input type="text" v-model="form.garden_name" class="form-control" readonly>
              </div>
              <div class="col-md-2 py-2 right-col border-end">
                <div class="text-center">ふりがな</div>
              </div>
              <div class="col-md-4 py-2">
                <input type="text" v-model="form.furigana_name" class="form-control" readonly>
              </div>
            </div>
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2 border-end d-flex align-items-center justify-content-center">
                <span>住所</span>
              </div>
              <div class="col-md-10 py-2 address-area">
                <ValidationProvider tag="div" class="d-flex align-items-center mb-3" rules="required" v-slot="{ errors }">
                  <label for="post-code" class="me-2">郵便番号</label>
                  <input type="text" id="post-code" v-model="form.zip_code" placeholder="〒123-456" class="form-control" :class="{'is-invalid': errors[0]}">
                  <span class="border border-color-e6006e px-2 py-1 color-cb3a82 ms-2">住所自動入力</span>
                </ValidationProvider>
                <ValidationProvider tag="div" class="d-flex align-items-center" rules="required" v-slot="{ errors }">
                  <label>所在地（都道府県）</label>
                  <select v-model="form.prefecture_id" @change="getAlongTheLine" :class="{'is-invalid': errors[0]}">
                    <option value="">選択してください</option>
                    <option v-for="(city, index) in data.stgPrefecture" :value="city.id" :key="index">{{ city.name }}</option>
                  </select>
                </ValidationProvider>
                <ValidationProvider tag="div" class="d-flex align-items-center" rules="required" v-slot="{ errors }">
                  <label for="city" class="border-top">所在地（市区町村/番地）</label>
                  <input type="text" id="city" class="border-0 w-50" v-model="form.city" placeholder="例）大阪市西区北堀江1-2-27" :class="{'is-invalid': errors[0]}">
                </ValidationProvider>
                <ValidationProvider tag="div" class="d-flex align-items-center" rules="required" v-slot="{ errors }">
                  <label for="building-name" class="border-top">所在地（建物名）</label>
                  <input type="text" id="building-name" class="border-0 w-50" v-model="form.building_name" placeholder="例）◯◯マンション 100号室" :class="{'is-invalid': errors[0]}">
                </ValidationProvider>
                <div class="d-flex align-items-center my-3">
                  <span class="fw-bold me-4">地図表示：</span>
                  <span class="border border-color-e6006e px-2 py-1 color-cb3a82">地図位置確認</span>
                </div>
              </div>
            </div>
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2 border-end d-flex align-items-center justify-content-center">
                <span>最寄駅</span>
              </div>
              <div class="col-md-10 p-0">
                <div class="d-flex align-items-center area-option" v-for="(station, i) in nearestStations" :key="i">
                  <span class="w-150 p-3 bg-c3c3c3">{{ station.title }}</span>
                  <div class="d-flex align-items-center">
                    <select @change="getStations(i)" v-model="station.line">
                      <option value="">沿線</option>
                      <option v-for="(line, index) in lines" :value="line.id" :key="index">{{ line.name }}</option>
                    </select>
                    <select v-model="station.station" v-if="i===0">
                      <option value="">駅</option>
                      <option v-for="(station, index) in stations0" :value="station.id" :key="index">{{ station.name }}</option>
                    </select>
                    <select v-model="station.station" v-else>
                      <option value="">駅</option>
                      <option v-for="(station, index) in stations1" :value="station.id" :key="index">{{ station.name }}</option>
                    </select>
                    <span class="ms-5">徒歩</span>
                    <input type="number" v-model="station.foot">
                    <span>分</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2 border-end text-center">
                <span>開園日</span>
              </div>
              <div class="col-md-10 p-0">
                <div class="border-bottom p-3" v-for="(openingHour, index) in openingHours" :key="index" :class="openingHour.value ? '':'bg-gray-600'">
                  <div class="d-flex">
                    <div class="w-150">
                      <label class="container-checkbox">
                        <input type="checkbox" :value="openingHour.id" v-model="openingHour.value"> {{ openingHour.name }}
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <div>
                      <div class="d-flex align-items-center opening-day mb-3" v-for="(hour, i) in openingHour.items" :key="i">
                        <span>{{ hour.title }}</span>
                        <input type="number" v-model="hour.start_hour">
                        <span>:</span>
                        <input type="number" v-model="hour.start_minute">
                        <span>〜</span>
                        <input type="number" v-model="hour.end_hour">
                        <span>:</span>
                        <input type="number" v-model="hour.end_minute">
                        <p class="m-0 text-sm d-none d-lg-block" v-if="hourMessageShow(hour)">（平日の開園時間と変更がある場合、入力してください。）</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row inner-1">
              <div class="col-md-2 left-col py-2 border-end d-flex align-items-center justify-content-center">
                <span>休園日</span>
              </div>
              <div class="col-md-10 py-2">
                <label class="container-checkbox me-4" v-for="(closedDay, index) in data.stgClosedDays" :key="index">
                  <input type="checkbox" :value="closedDay.id" v-model="closedDays"> {{ closedDay.name }}
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2 border-end d-flex align-items-center justify-content-center">
                <span>預かり年齢</span>
              </div>
              <div class="col-md-10 py-2">
                <div class="row gy-2">
                  <div class="col-md-3 col-sm-6" v-for="(custody, index) in data.stgCustodyAge" :key="index">
                    <label class="container-checkbox me-4">
                      <input type="checkbox" :value="custody.id" v-model="custodys"> {{ custody.name }}
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2 border-end d-flex align-items-center justify-content-center">
                <span>広さ</span>
              </div>
              <div class="col-md-10 py-2">
                <label class="container-checkbox me-4" v-for="(breadth, index) in data.stgBreadth" :key="index">
                  <input type="radio" :value="breadth.id" name="breadth" v-model="selectBreadth"> {{ breadth.name }}
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2 border-end">
                <div class="text-center">園規模</div>
              </div>
              <div class="col-md-4 py-2 d-flex align-items-center justify-content-center">
                <select class="form-control" v-model="form.garden_size">
                  <option value="">選択してください</option>
                  <option v-for="(prefecture, index) in data.stgGardenSize" :value="prefecture.id" :key="index">{{ prefecture.name }}</option>
                </select>
                <span class="flex-shrink-0 mx-4">定員</span>
                <input type="text" class="form-control text-center" v-model="form.capacity">
                <span class="mx-1">名</span>
              </div>
              <div class="col-md-2 py-2 right-col border-end">
                <div class="text-center">園庭</div>
              </div>
              <div class="col-md-4 py-2">
                <label class="container-checkbox">
                  <input type="radio" value="yes" name="playground" v-model="form.playground"> あり
                  <span class="checkmark"></span>
                </label>
                <label class="container-checkbox ms-4">
                  <input type="radio" value="no" name="playground" v-model="form.playground"> なし
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2 border-end">
                <div class="text-center">電話番号</div>
              </div>
              <ValidationProvider tag="div" class="col-md-4 py-2" rules="required" v-slot="{ errors }">
                <input type="text" v-model="form.telephone_number" class="form-control w-50" :class="{'is-invalid': errors[0]}">
              </ValidationProvider>
              <div class="col-md-2 py-2 right-col border-end">
                <div class="text-center">FAX</div>
              </div>
              <div class="col-md-4 py-2">
                <input type="text" v-model="form.fax_number" class="form-control w-50">
              </div>
            </div>
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2" style="border-bottom: 1px solid #333333">
                <div class="text-center">園長</div>
              </div>
              <div class="col-md-10 py-2">
                <input type="text" v-model="form.principal_name" class="form-control w-25">
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 left-col border-end d-flex align-items-center justify-content-center">
                <span>慣らし保育</span>
              </div>
              <div class="col-md-10">
                <div class="row inner-1">
                  <div class="col-md-2 py-2 d-flex align-items-center">
                    <span>目安期間</span>
                  </div>
                  <ValidationProvider tag="div" class="col-md-10 py-2" rules="required" v-slot="{ errors }">
                    <input type="text" v-model="form.childcare_time_on_the_first_day" class="form-control" :class="{'is-invalid': errors[0]}">
                  </ValidationProvider>
                </div>
                <div class="row">
                  <div class="col-md-2 py-2 d-flex align-items-center">
                    <span>初日の保育時間</span>
                  </div>
                  <ValidationProvider tag="div" class="col-md-10 py-2" rules="required" v-slot="{ errors }">
                    <input type="text" v-model="form.estimated_period" class="form-control" :class="{'is-invalid': errors[0]}">
                  </ValidationProvider>
                </div>
              </div>
            </div>
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2">
                <div class="text-center">検索条件</div>
              </div>
              <div class="col-md-10">
                <div class="row mt-2 inner-row-1 mx-2">
                  <div>保育サービス</div>
                </div>
                <div class="row py-3 mx-2">
                  <div class="col-md-4" v-for="(item, key) in data.childcareServices" :key="key">
                    <label class="container-checkbox"> {{ item.name }}
                      <input type="checkbox" :value="item.id" v-model="childcareServices">
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="row mt-1 inner-row-1 mx-2">
                  <div>キャンペーン</div>
                </div>
                <div class="row py-3 mx-2">
                  <div class="col-md-4" v-for="(item, key) in data.campaigns" :key="key">
                    <label class="container-checkbox"> {{ item.name }}
                      <input type="checkbox" :value="item.id" v-model="campaigns">
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="row mt-1 inner-row-1 mx-2">
                  <p class="m-0">延長保育</p>
                </div>
                <div class="row py-3 mx-2">
                  <div class="col-md-4" v-for="(item, key) in data.extendedChildcareTimes" :key="key">
                    <label class="container-checkbox"> {{ item.name }}
                      <input type="checkbox" :value="item.id" v-model="extendedChildcareTimes">
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="row mt-1 inner-row-1 mx-2">
                  <div>サービス</div>
                </div>
                <div class="row py-3 mx-2">
                  <div class="col-md-4" v-for="(item, key) in data.services" :key="key">
                    <label class="container-checkbox"> {{ item.name }}
                      <input type="checkbox" :value="item.id" v-model="services">
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="row mt-1 inner-row-1 mx-2">
                  <div>特色</div>
                </div>
                <div class="row py-3 mx-2">
                  <div class="col-md-3" v-for="(item, key) in data.features" :key="key">
                    <label class="container-checkbox"> {{ item.name }}
                      <input type="checkbox" :value="item.id" v-model="featureItems">
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row inner-1">
              <div class="col-md-2 left-col py-2 border-end d-flex align-items-center justify-content-center">
                <div>キャンペーン 内容</div>
              </div>
              <ValidationProvider tag="div" class="col-md-10 py-2" rules="required" v-slot="{ errors }">
                <textarea v-model="form.campaign_content" class="form-control" maxlength="100" rows="4" :class="{'is-invalid': errors[0]}"></textarea>
                <div class="text-right text-sm mt-1">※最大100文字（現在：{{ empty(!form.campaign_content) ? form.campaign_content.length : 0 }}文字）</div>
              </ValidationProvider>
            </div>
          </div>
        </div>
        <div class="text-right mt-4 me-4">
          <button type="submit" :disabled="invalid" class="submit-btn">変更内容を保存</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import axios from "../../../../axios";

export default {
  name: "BasicInformationForm",
  props: {
    info: Object,
    data: Object,
  },
  data() {
    return {
      form: this.info,
      selectBreadth: null,
      custodys: [],
      lines: [],
      stations0: [],
      stations1: [],
      closedDays: [],
      services: this.data.school_srch_services,
      campaigns: this.data.school_srch_campaigns,
      featureItems: this.data.featureItems,
      childcareServices: this.data.school_srch_childcare_services,
      extendedChildcareTimes: this.data.school_srch_extended_childcare_times,
      nearestStations: this.stationsObj(),
      openingHours: [
        {
          id: 1,
          name: null,
          value: null,
          items: [
            {
              title: '開園時間',
              start_hour: null,
              start_minute: null,
              end_hour: null,
              end_minute: null,
            },
            {
              title: '延長保育',
              start_hour: null,
              start_minute: null,
              end_hour: null,
              end_minute: null,
            }
          ]
        },
        {
          id: 2,
          name: null,
          value: null,
          items: [
            {
              title: '開園時間',
              start_hour: null,
              start_minute: null,
              end_hour: null,
              end_minute: null,
            },
            {
              title: '延長保育',
              start_hour: null,
              start_minute: null,
              end_hour: null,
              end_minute: null,
            }
          ]
        },
        {
          id: 3,
          name: null,
          value: null,
          items: [
            {
              title: '開園時間',
              start_hour: null,
              start_minute: null,
              end_hour: null,
              end_minute: null,
            },
            {
              title: '延長保育',
              start_hour: null,
              start_minute: null,
              end_hour: null,
              end_minute: null,
            }
          ]
        },
        {
          id: 4,
          name: null,
          value: null,
          items: [
            {
              title: '開園時間',
              start_hour: null,
              start_minute: null,
              end_hour: null,
              end_minute: null,
            },
            {
              title: '延長保育',
              start_hour: null,
              start_minute: null,
              end_hour: null,
              end_minute: null,
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.getActiveItems()
  },
  methods: {
    stationsObj() {
      return [
        {
          title: '最寄駅１',
          line: '',
          station: '',
          foot: null
        },
        {
          title: '最寄駅２',
          line: '',
          station: '',
          foot: null
        }
      ]
    },
    getActiveItems() {
      this.form.custody_ages.forEach(c => {
        this.custodys.push(c.id)
      })
      this.form.closed_days.forEach(c => {
        this.closedDays.push(c.id)
      })
      this.selectBreadth = this.info.breadth.id

      axios.get(`/school/city-wise-line/${this.form.prefecture_id}`).then(response => {
        this.lines = response.data.data
      })

      for (const [key, value] of Object.entries(this.form.school_nearest_stations)) {
        this.nearestStations[key].foot = value.on_foot
        this.nearestStations[key].line = value.lane_id
        this.nearestStations[key].station = value.station_id

        axios.get(`/school/line-wise-station/${value.lane_id}`).then(response => {
          if (key === '0') {
            this.stations0 = response.data.data
          } else {
            this.stations1 = response.data.data
          }
        })
      }

      for (const [key, value] of Object.entries(this.data.stgOpenDays)) {
        this.openingHours[key].id = value.id
        this.openingHours[key].name = value.name
      }

      for (const [key, value] of Object.entries(this.info.opening_days)) {
        this.openingHours[key].value = value.status
        for (const [k, v] of Object.entries(this.openingHours[key].items)) {
          if (k === '0') {
            v.start_hour = value.start_opening_hour
            v.start_minute = value.start_opening_minute
            v.end_hour = value.end_opening_hour
            v.end_minute = value.end_opening_minute
          } else {
            v.start_hour = value.start_extended_childcare_hour
            v.start_minute = value.start_extended_childcare_minute
            v.end_hour = value.end_extended_childcare_hour
            v.end_minute = value.end_extended_childcare_minute
          }
        }

      }
    },
    hourMessageShow(hour) {
      return !(hour.start_hour && hour.start_minute && hour.end_hour && hour.end_minute);
    },
    updateBasicInfo() {
      this.showLoader()
      delete this.form.school_nearest_stations

      this.form.breadth_id = this.selectBreadth
      this.form.stg_custody_age_id = this.custodys
      this.form.stg_closed_day_id = this.closedDays
      this.form.school_srch_services = this.services
      this.form.school_srch_campaigns = this.campaigns
      this.form.featureItems = this.featureItems
      this.form.school_srch_childcare_services = this.childcareServices
      this.form.school_srch_extended_childcare_times = this.extendedChildcareTimes
      this.form.nearestStations = this.nearestStations
      this.form.openingHours = this.openingHours

      axios.post('/school/basic-info', this.form).then(response => {
        this.$toast.success(response.data.message)
        this.hideLoader()
        window.scrollTo(0, 0);
        this.$emit('getBasicInfo')
        this.$store.commit('schoolSettingFormActiveUpdate', false)

        this.$store.dispatch('setUserName')
      }).catch(error => {
        this.hideLoader()
        this.checkError(error)
      })
    },
    getAlongTheLine() {
      if (this.empty(this.form.prefecture_id)) {
        this.lines = []
        this.stations0 = []
        this.stations1 = []
        return false
      }

      axios.get(`/school/city-wise-line/${this.form.prefecture_id}`).then(response => {
        this.lines = response.data.data
        this.stations0 = []
        this.stations1 = []
        this.nearestStations = this.stationsObj()
      }).catch(error => {
        this.checkError(error)
      })
    },
    getStations(index) {
      axios.get(`/school/line-wise-station/${this.nearestStations[index].line}`).then(response => {
        if (index === 0) {
          this.stations0 = response.data.data
        } else {
          this.stations1 = response.data.data
        }
      }).catch(error => {
        this.checkError(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
textarea, input, select {
  background: #F2F2F2;
  border: 1px solid #C7C7C7;
  border-radius: inherit;
}

input:focus,
select:focus,
textarea:focus {
  border: 1px solid #C7C7C7;
}

.opening-day {
  input {
    width: 50px;
    margin: 0 20px;
    padding: 5px;
    text-align: center;
  }

  p {
    opacity: .5;
  }
}

.bg-gray-600 {
  background-color: #f5f5f5;
}

.address-area {
  label {
    width: 200px;
    padding: 7px;
    background: #C3C3C3;
  }

  input {
    width: 200px;
    padding: 6px;
  }

  select {
    width: 200px;
    padding: 10px;
    border: none;
  }
}

.area-option {
  input {
    width: 55px;
    margin: 0 20px;
    padding: 7px;
    text-align: center;
  }

  select {
    width: 200px;
    margin: 0 8px;
    padding: 10px;
  }

}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield; /* Firefox */
}
</style>
