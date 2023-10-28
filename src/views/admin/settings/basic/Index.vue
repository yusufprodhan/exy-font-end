<template>
  <div class="garden-basic-info">
    <!-- breadcrumb -->
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <!-- /breadcrumb -->
    <div class="row w-100 px-4 ps-5">
      <div class="col-12 mt-3">
        <div class="nav nav-tabs" role="tablist">
          <button @click="activeTab=1" class="nav-link active px-md-5" id="nav-basic-tab" data-bs-toggle="tab" data-bs-target="#nav-basic" type="button" role="tab" aria-controls="nav-basic" aria-selected="true">園の基本情報</button>
          <button @click="getSecondTab" class="nav-link px-md-5" id="nav-content-tab" data-bs-toggle="tab" data-bs-target="#nav-content" type="button" role="tab" aria-controls="nav-content" aria-selected="false">園の保育内容</button>
          <button @click="getThirdTab" class="nav-link px-md-5" id="nav-parent-tab" data-bs-toggle="tab" data-bs-target="#nav-parent" type="button" role="tab" aria-controls="nav-parent" aria-selected="false">保護者様への確認事項</button>
        </div>
      </div>
      <div v-if="activeTab===1" class="tab-1 w-100 pb-5 mt-4">
        <div v-if="schoolSettingFormActive">
          <posted-photos :posted-image="postedImage" :posted-images="postedImages" @getBasicInfo="getBasicInfo"></posted-photos>

          <!-- Basic information start-->
          <basic-information-form :info="info" :data="data" @getBasicInfo="getBasicInfo"/>

          <!-- Tags start-->
          <tags-update-form :tags="data.schoolTags" :allTags="data.settingTags" @getBasicInfo="getBasicInfo"/>

          <!-- Point start-->
          <points :points="points"></points>
        </div>
        <div v-else>
          <posted-photos :posted-image="postedImage" :posted-images="postedImages" @getBasicInfo="getBasicInfo"></posted-photos>

          <!-- Basic information start-->
          <div class="mt-5">
            <div class="py-2 bg-707070 border border-333333">
              <span class="text-white ps-2 fw-bold">基本情報</span>
            </div>
            <div class="row w-100 ms-0 row-3">
              <div class="col-md-12 inner-col border-top-0">
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end">
                    <div class="text-center">コメント</div>
                  </div>
                  <div class="col-md-10 py-2">{{ info.comment }}</div>
                </div>
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end">
                    <div class="text-center">園名</div>
                  </div>
                  <div class="col-md-4 py-2">{{ info.garden_name }}</div>
                  <div class="col-md-2 py-2 right-col border-end">
                    <div class="text-center">ふりがな</div>
                  </div>
                  <div class="col-md-4 py-2">{{ info.furigana_name }}</div>
                </div>
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end">
                    <div class="text-center">住所</div>
                  </div>
                  <div class="col-md-10 py-2">
                    <div class="d-flex align-items-center">
                      <span class="w-100">{{ `${info.zip_code} ${info.prefecture.name} ${info.city} ${info.building_name}` }}</span>
                      <button type="button" class="map-btn">地図位置確認</button>
                    </div>
                  </div>
                </div>
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end">
                    <div class="text-center pt-2">最寄駅</div>
                  </div>
                  <div class="col-md-10 py-2">
                    <ul class="m-0 p-0">
                      <li v-for="(station, index) in info.school_nearest_stations" :key="index">
                        <div class="d-flex align-items-center">
                          <span class="fw-bold">・</span>
                          <span>{{ `${station.stg_city_lane.name} ${station.stg_city_lane_station.name}` }}</span>
                          <span class="ms-4">徒歩{{ station.on_foot }}分</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end">
                    <div class="text-center">開園時間</div>
                  </div>
                  <div class="col-md-4 py-2">
                    <div v-for="(openHour, index) in info.opening_days" :key="index">
                      <span :class="openHour.status ? '':'opacity-50'">{{ `${openHour.start_opening_hour} : ${openHour.start_opening_minute} 〜 ${openHour.end_opening_hour} : ${openHour.end_opening_minute}` }}</span>
                    </div>
                  </div>
                  <div class="col-md-2 py-2 right-col border-end">
                    <div class="text-center">延長保育</div>
                  </div>
                  <div class="col-md-4 py-2">
                    <div v-for="(openHour, index) in info.opening_days" :key="index">
                      <span :class="openHour.status ? '':'opacity-50'">{{ `${openHour.start_extended_childcare_hour} : ${openHour.start_extended_childcare_minute} 〜 ${openHour.end_extended_childcare_hour} : ${openHour.end_extended_childcare_minute}` }}</span>
                    </div>
                  </div>
                </div>
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end">
                    <div class="text-center">開園日</div>
                  </div>
                  <div class="col-md-4 py-2">
                    <span v-for="(oDay, index) in info.opening_days" :key="index">
                     <span :class="oDay.status ? '':'opacity-50'">
                        {{ oDay.stg_open_days.name }}
                        <span v-if="index !== Object.keys(info.opening_days).length - 1">, </span>
                      </span>
                    </span>
                  </div>
                  <div class="col-md-2 py-2 right-col border-end">
                    <div class="text-center">休園日</div>
                  </div>
                  <div class="col-md-4 py-2">
                    <span v-for="(cDay, i) in info.closed_days" :key="i" class="me-3">{{ cDay.name }}</span>
                  </div>
                </div>
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end">
                    <div class="text-center">預かり年齢</div>
                  </div>
                  <div class="col-md-4 py-2">
                    <div class="row gy-1">
                      <div class="col-md-4 col-sm-6" v-for="(custody, index) in info.custody_ages" :key="index">
                        <span>{{ custody.name }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 py-2 right-col border-end">
                    <div class="text-center">園規模</div>
                  </div>
                  <div class="col-md-4 py-2">{{ info.stg_garden_size.name }} 定員 {{ info.capacity }} 名</div>
                </div>
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end">
                    <div class="text-center">広さ</div>
                  </div>
                  <div class="col-md-4 py-2">{{ info.breadth.name }}</div>
                  <div class="col-md-2 py-2 right-col border-end">
                    <div class="text-center">園庭</div>
                  </div>
                  <div class="col-md-4 py-2">{{ info.playground === 'yes' ? 'あり' : 'なし' }}</div>
                </div>
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end">
                    <div class="text-center">電話番号</div>
                  </div>
                  <div class="col-md-4 py-2">{{ info.telephone_number }}</div>
                  <div class="col-md-2 py-2 right-col border-end">
                    <div class="text-center">FAX</div>
                  </div>
                  <div class="col-md-4 py-2">{{ info.fax_number }}</div>
                </div>
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end" style="border-bottom: 1px solid #333333">
                    <div class="text-center">園長</div>
                  </div>
                  <div class="col-md-10 py-2">{{ info.principal_name }}</div>
                </div>
                <div class="row">
                  <div class="col-md-2 left-col border-end">
                    <p class="m-0 text-center pt-4">慣らし保育</p>
                  </div>
                  <div class="col-md-10">
                    <div class="row inner-1">
                      <div class="col-md-2 left-col py-2 border-end">
                        <p class="m-0">目安期間</p>
                      </div>
                      <div class="col-md-10 py-2">{{ info.childcare_time_on_the_first_day }}</div>
                    </div>
                    <div class="row inner-1">
                      <div class="col-md-2 left-col py-2 border-end">
                        <p class="m-0">初日の保育時間</p>
                      </div>
                      <div class="col-md-10 py-2">{{ info.estimated_period }}</div>
                    </div>
                  </div>
                </div>
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end">
                    <div class="text-center">検索条件</div>
                  </div>
                  <div class="col-md-10">
                    <div class="row mt-2 inner-row-1 mx-2">
                      <div>保育サービス</div>
                    </div>
                    <div class="row py-4 mx-2">
                      <div class="col-md-3" v-for="(item, key) in data.childcareServices" :key="key">
                        <label class="container-checkbox" :class="childcareServices.includes(item.id) ? '':'disabled'"> {{ item.name }}
                          <input type="checkbox" :value="item.id" v-model="childcareServices" disabled>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="row mt-1 inner-row-1 mx-2">
                      <div>キャンペーン</div>
                    </div>
                    <div class="row py-4 mx-2">
                      <div class="col-md-4" v-for="(item, key) in data.campaigns" :key="key">
                        <label class="container-checkbox" :class="campaigns.includes(item.id) ? '':'disabled'"> {{ item.name }}
                          <input type="checkbox" :value="item.id" v-model="campaigns" disabled>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="row mt-1 inner-row-1 mx-2">
                      <p class="m-0">延長保育</p>
                    </div>
                    <div class="row py-4 mx-2">
                      <div class="col-md-4" v-for="(item, key) in data.extendedChildcareTimes" :key="key">
                        <label class="container-checkbox" :class="extendedChildcareTimes.includes(item.id) ? '':'disabled'"> {{ item.name }}
                          <input type="checkbox" :value="item.id" v-model="extendedChildcareTimes" disabled>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="row mt-1 inner-row-1 mx-2">
                      <div>サービス</div>
                    </div>
                    <div class="row py-4 mx-2">
                      <div class="col-md-4" v-for="(item, key) in data.services" :key="key">
                        <label class="container-checkbox" :class="services.includes(item.id) ? '':'disabled'"> {{ item.name }}
                          <input type="checkbox" :value="item.id" v-model="services" disabled>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="row mt-1 inner-row-1 mx-2">
                      <div>特色</div>
                    </div>
                    <div class="row py-4 mx-2">
                      <div class="col-md-3" v-for="(item, key) in data.features" :key="key">
                        <label class="container-checkbox" :class="featureItems.includes(item.id) ? '':'disabled'"> {{ item.name }}
                          <input type="checkbox" :value="item.id" v-model="featureItems" disabled>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row inner-1">
                  <div class="col-md-2 left-col py-2 border-end d-flex align-items-center justify-content-center">
                    <span class="text-center">キャンペーン<br>内容</span>
                  </div>
                  <div class="col-md-10 py-2 d-flex align-items-center">{{ info.campaign_content }}</div>
                </div>
              </div>
            </div>
            <div class="text-right mt-4">
              <router-link :to="{name:'Kindergarten', params: {uuid: info.uuid}}" target="_blank" class="preview-btn me-4">プレビュー</router-link>
              <button type="button" class="submit-btn" @click="schoolSettingFormActiveUpdate">修正する</button>
            </div>
          </div>

          <!-- Tags start-->
          <div class="mt-5">
            <div class="py-2 bg-707070 border border-333333">
              <span class="text-white ps-2 fw-bold">タグ</span>
            </div>
            <div class="border border-top-0 border-333333">
              <div class="p-4" style="background: #F8F7F7">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 gy-3 text-center">
                  <div class="col" v-for="(item, index) in data.schoolTags" :key="index">
                    <a class="bg-white rounded-3 d-flex align-items-center justify-content-center py-3 fw-bold text-base text-center cursor-pointer"
                       :class="[tag.id === item.id ? 'text-decoration-underline bg-bcbcbc':'']" @click="tagSwitch(index)">{{ item.stg_tag.name }}</a>
                  </div>
                </div>
              </div>

              <div class="p-4">
                <div class="row">
                  <div class="col-md-5 col-lg-4">
                    <div class="border border-ccc">
                      <img v-if="tag.image_path" :src="tag.image_path" alt="" class="img-fluid w-100 max-h-350">
                      <div v-else style="height: 350px;"></div>
                      <div class="text-center py-2 bg-f2f2f2">
                        登録画像
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7 col-lg-8">
                    <div class="row gy-4">
                      <div class="col-12">
                        <div class="d-flex border border-color-707070">
                          <div class="d-flex justify-content-center align-items-center bg-fbeef5 py-2 text-center w-150 flex-shrink-0">タイトル</div>
                          <div class="p-2">{{ tag.title }}</div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-flex border border-color-707070">
                          <div class="d-flex justify-content-center align-items-center bg-fbeef5 py-2 text-center w-150 flex-shrink-0">文章</div>
                          <div class="p-2 min-h-325">{{ tag.description }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-right mt-4">
              <router-link :to="{name:'Kindergarten', params: {uuid: info.uuid}}" target="_blank" class="preview-btn me-4">プレビュー</router-link>
              <button type="button" class="submit-btn" @click="schoolSettingFormActiveUpdate">修正する</button>
            </div>
          </div>

          <!-- Point start-->
          <points :points="points" :uuid="info.uuid"></points>
        </div>
      </div>
      <div v-if="activeTab===2" class="garden-basic mt-5 pb-5">
        <!-- section 1 -->
        <div class="border border-2 p-3 rounded">
          <span>保育方針</span>
        </div>
        <div class="border border-2 px-3 pt-0 pb-4 mb-4">
          <div class="text-center py-2 mt-3 border border-2 fw-bold">
            <span>保育理念</span>
          </div>
          <div class="border border-2 mb-4">
            <div class="row custom-row">
              <div class="col-md-5 border-end border-2">
                <div class="text-center py-2 background-pinkish">保育理念</div>
                <div class="p-2">
                  <div class="photo-upload__top border">
                    <div class="file-upload-form__top">
                      <input type="file" @change="childPoliceImg($event, 'philosophy_image_path')" id="philosophy" accept="image/*" class="input-file__top" style="height: 370px; line-height: 370px"/>
                      <label for="philosophy" style="height: 370px; line-height: 370px">
                        <i class="fa fa-camera fa-5x camera" aria-hidden="true"></i>
                      </label>
                    </div>
                    <div class="image-preview__top" v-if="childcarePolices.philosophy_image_path !== null && childcarePolices.philosophy_image_path !== ''">
                      <img :src="childcarePolices.philosophy_image_path" class="w-100 h-100" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="text-center py-2 background-pinkish">コメント</div>
                <div class="px-3 py-2">
                  <vue-editor v-if="isEditorActive.one" :editorToolbar="customToolbar" v-model="childcarePolices.philosophy_description"></vue-editor>
                  <div @click="editorActivate('one')" v-if="!isEditorActive.one" v-html="childcarePolices.philosophy_description" class="bg-light p-3 rounded border min-h-300"></div>
                </div>
                <div class="text-end m-3">
                  <button class="exy-default-btn" @click="childcarePolicesUpdate()">修正する</button>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center py-2 mt-3 border border-2 fw-bold">
            <span>保育方針</span>
          </div>
          <div class="border border-2 mb-4">
            <div class="row custom-row">
              <div class="col-md-5 border-end border-2">
                <div class="text-center py-2 background-pinkish">保育理念</div>
                <div class="p-2">
                  <div class="photo-upload__top border">
                    <div class="file-upload-form__top">
                      <input type="file" @change="childPoliceImg($event, 'policy_image_path')" id="policy" accept="image/*" class="input-file__top" style="height: 370px; line-height: 370px"/>
                      <label for="policy" style="height: 370px; line-height: 370px"><i class="fa fa-camera fa-5x camera" aria-hidden="true"></i></label>
                    </div>
                    <div class="image-preview__top" v-if="childcarePolices.policy_image_path !== null && childcarePolices.policy_image_path !== ''">
                      <img :src="childcarePolices.policy_image_path" class="w-100 h-100" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="text-center py-2 background-pinkish">コメント</div>
                <div class="px-3 py-2">
                  <vue-editor v-if="isEditorActive.two" :editorToolbar="customToolbar" v-model="childcarePolices.policy_description"></vue-editor>
                  <div @click="editorActivate('two')" v-if="!isEditorActive.two" v-html="childcarePolices.policy_description" class="bg-light p-3 rounded border min-h-300"></div>
                </div>
                <div class="text-end m-3">
                  <button class="exy-default-btn" @click="childcarePolicesUpdate()">修正する</button>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center py-2 mt-3 border border-2 fw-bold">
            <span>保育目標</span>
          </div>
          <div class="border border-2 mb-4">
            <div class="row custom-row">
              <div class="col-md-5 border-end border-2">
                <div class="text-center py-2 background-pinkish">保育理念</div>
                <div class="p-2">
                  <div class="photo-upload__top border">
                    <div class="file-upload-form__top">
                      <input type="file" @change="childPoliceImg($event, 'goals_image_path')" id="goals" accept="image/*" class="input-file__top" style="height: 370px; line-height: 370px"/>
                      <label for="goals" style="height: 370px; line-height: 370px"><i class="fa fa-camera fa-5x camera" aria-hidden="true"></i></label>
                    </div>
                    <div class="image-preview__top" v-if="childcarePolices.goals_image_path !== null && childcarePolices.goals_image_path !== ''">
                      <img :src="childcarePolices.goals_image_path" class="w-100 h-100" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="text-center py-2 background-pinkish">コメント</div>
                <div class="px-3 py-2">
                  <vue-editor v-if="isEditorActive.three" :editorToolbar="customToolbar" v-model="childcarePolices.goals_description"></vue-editor>
                  <div @click="editorActivate('three')" v-if="!isEditorActive.three" v-html="childcarePolices.goals_description" class="bg-light p-3 rounded border min-h-300"></div>
                </div>
                <div class="text-end m-3">
                  <button class="exy-default-btn" @click="childcarePolicesUpdate()">修正する</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- /section 1 -->

        <!-- section 2 -->
        <div class="mt-5 ">
          <div class="border p-3 rounded">
            <span>保育コラム</span>
          </div>
          <div class="table-responsive">
            <table class="table border border-333333">
              <tbody>
                <tr class="custom-padding-row" v-for="(childcareColumn, index) in childcareColumns" :key="index">
                  <td class="background-pinkish align-middle" style="background: #FBEEF5; width: 10px">{{ ++index }}</td>
                  <td class="ms-4 align-middle" style="width:50%">
                    <span class="fw-bold">{{ childcareColumn.title }}</span>
                  </td>
                  <td class="align-middle">
                    <span>{{ childcareColumn.status === 1 ? '公開済み' : '下書き' }}</span>
                    <br/>
                    <span>{{ childcareColumn.created_at | formatDate }}</span>
                  </td>
                  <td class="align-middle">
                    <img v-if="childcareColumn.thumbnail_image" :src="childcareColumn.thumbnail_image" alt="EXY" class="img-fluid" style="width:90px">
                  </td>
                  <td class="text-end align-middle" style="width: 210px">
                    <button type="button" :class="['exy-default-btn px-5', { 'border-kigaruni-pink bg-white color-kigaruni-pink' : childcareColumn.status === 0 }]" @click="childcareColumnUpdate(childcareColumn)">{{ childcareColumn.status === 1 ? '修正する' : '公開する' }}</button>
                  </td>
                </tr>
                <tr v-if="childcareColumns.length < 4">
                  <td class="text-end align-middle py-4" colspan="5">
                    <router-link :to="{name:'Admin.MyPageChildcareCreateColumn'}">
                      <button type="button" class="exy-default-btn px-5 bg-secondary me-2" style="border-color: #837f7f !important;">作成する</button>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- /section 2 -->

        <!-- section 3 -->
        <div class="mt-5 ">
          <div class="border border-2 p-3 rounded">
            <span>年間カレンダー</span>
          </div>
          <div class="border border-2 px-4">
            <div class="row">
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">4</div>
                    <div class="text-small">Apr</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.apr" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_april"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('apr')" v-if="!isEditorActive.apr" v-html="calendarSetting.month_april"></div>
                  </div>
                  <div class="exy-dashed-border"></div>
                </div>
              </div>
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">7</div>
                    <div class="text-small">Jul</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.jul" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_july"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('jul')" v-if="!isEditorActive.jul" v-html="calendarSetting.month_july"></div>
                  </div>
                  <div class="exy-dashed-border"></div>
                </div>
              </div>
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">10</div>
                    <div class="text-small">Oct</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.oct" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_october"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('oct')" v-if="!isEditorActive.oct" v-html="calendarSetting.month_october"></div>
                  </div>
                  <div class="exy-dashed-border"></div>
                </div>
              </div>
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">1</div>
                    <div class="text-small">Jan</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.jan" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_january"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('jan')" v-if="!isEditorActive.jan" v-html="calendarSetting.month_january"></div>
                  </div>
                  <div class="exy-dashed-border"></div>
                </div>
              </div>
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">5</div>
                    <div class="text-small">May</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.may" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_may"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('may')" v-if="!isEditorActive.may" v-html="calendarSetting.month_may"></div>
                  </div>
                  <div class="exy-dashed-border"></div>
                </div>
              </div>
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">8</div>
                    <div class="text-small">Aug</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.aug" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_august"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('aug')" v-if="!isEditorActive.aug" v-html="calendarSetting.month_august"></div>
                  </div>
                  <div class="exy-dashed-border"></div>
                </div>
              </div>
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">11</div>
                    <div class="text-small">Nov</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.nov" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_november"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('nov')" v-if="!isEditorActive.nov" v-html="calendarSetting.month_november"></div>
                  </div>
                  <div class="exy-dashed-border"></div>
                </div>
              </div>
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">2</div>
                    <div class="text-small">Feb</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.feb" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_february"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('feb')" v-if="!isEditorActive.feb" v-html="calendarSetting.month_february"></div>
                  </div>
                  <div class="exy-dashed-border"></div>
                </div>
              </div>
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">6</div>
                    <div class="text-small">Jun</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.jun" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_june"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('jun')" v-if="!isEditorActive.jun" v-html="calendarSetting.month_june"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">9</div>
                    <div class="text-small">Sep</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.sep" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_september"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('sep')" v-if="!isEditorActive.sep" v-html="calendarSetting.month_september"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">12</div>
                    <div class="text-small">Dec</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.dec" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_december"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('dec')" v-if="!isEditorActive.dec" v-html="calendarSetting.month_december"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 my-4 annual-calendar">
                <div class="row">
                  <div class="col-3 text-center color-707070">
                    <div class="text-5xl fw-bold">3</div>
                    <div class="text-small">Mar</div>
                  </div>
                  <div class="col-9">
                    <vue-editor v-if="isEditorActive.mar" class="calendar-editor" :editorOptions="editorOptions" v-model="calendarSetting.month_march"></vue-editor>
                    <div class="calendar-content" @click="editorActivate('mar')" v-if="!isEditorActive.mar" v-html="calendarSetting.month_march"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /section 3 -->

        <div class="text-end mt-4">
          <router-link :to="{name:'Kindergarten', params: {uuid: info.uuid}}" target="_blank" class="exy-default-btn border-kigaruni-pink bg-light color-kigaruni-pink me-4" type="button">プレビュー</router-link>
          <button class="exy-default-btn py-2" @click="annualCalendarSubmit" type="button">修正する</button>
        </div>
      </div>
      <div v-if="activeTab===3" class="w-100 pb-5">
        <div class="row text-xl fw-bold py-3 mt-5 px-2">
          保護者様への確認事項
        </div>
        <div class="row py-2 pb-5 px-2">
          園ごとに独自でご質問しておきたい事項などを最大10個まで追加していただけます。<br>
          ぜひご活用ください。
        </div>
        <div class="row border-color-707070 border">
          <div class="col-md-12">
            <div class="d-flex justify-content-between py-2">
              <div class="pt-1 text-xl fw-bold">保護者様への確認事項</div>
              <div class="text-right">
                <button type="button" class="btn btn-secodery border-color-707070 border rounded-0 me-2 px-5">修正</button>
                <button type="button" class="btn btn btn-secodery text-white rounded-0 border-0 bg-cb3a82 px-5 ms-2" @click="itemsToCheckUpdate">登録</button>
              </div>
            </div>
            <div class="d-flex align-items-center my-3 p-2 border-color-707070 border" v-for="(item, index) in itemsToCheck" :key="index">
              <span style="width: 25px" class="text-center">{{ index + 1 }}</span>
              <input type="text" class="form-control mx-3" v-model="item.description">
              <span style="width: 65px">
                <button @click="removeItemsToCheck(index, item.id)" v-if="index || ( !index && itemsToCheck.length > 1)" type="button" class="btn-sm border me-2">-</button>
                <button @click="addItemsToCheck" v-show="index === itemsToCheck.length-1" v-if="itemsToCheck.length < 10" type="button" class="btn-sm border">+</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../../../components/adminPartials/Breadcrumb"
import Admin from "../../../../layouts/Admin";
import {VueEditor} from "vue2-editor";
import BasicInformationForm from "./BasicInformationForm";
import PostedPhotos from "./PostedPhotos";
import Points from "./Points";
import TagsUpdateForm from "./TagsUpdateForm";
import axios from "@/axios";

export default {
  name: "Index",
  created() {
    this.$emit('update:layout', Admin)
    this.getBasicInfo()
  },
  computed: {
    schoolSettingFormActive() {
      return this.$store.getters.schoolSettingFormActive
    }
  },
  components: {
    TagsUpdateForm,
    Points,
    PostedPhotos,
    BasicInformationForm,
    Breadcrumb,
    VueEditor
  },
  data() {
    return {
      postedImage: {},
      postedImages: [],
      dataPageName: "園基本情報設定",
      activeTab: 1,
      points: {},
      data: {},
      tag: {},
      info: {
        breadth: { name: null },
        prefecture: { name: null },
        stg_garden_size: { name: null },
      },
      customToolbar: [
        ["bold", "italic", "underline"]
      ],
      editorOptions: {
        modules: {
          toolbar: false,
        },
      },
      services: [],
      campaigns: [],
      featureItems: [],
      childcareServices: [],
      extendedChildcareTimes: [],
      childcarePolices: {},
      childcareColumns: [],
      isEditorActive: {
        one: false,
        two: false,
        three: false,
        jan: false,
        feb: false,
        mar: false,
        apr: false,
        may: false,
        jun: false,
        jul: false,
        aug: false,
        sep: false,
        oct: false,
        nov: false,
        dec: false,
      },
      itemsToCheck: [],
      calendarSetting: this.annualCalendarObj()
    }
  },
  methods: {
    editorActivate: function (e) {
      Object.entries(this.isEditorActive).map(k => (
          this.isEditorActive[k[0]] = false
      ))

      this.isEditorActive[e] = true
    },
    getBasicInfo() {
      axios.get('/school/basic-info').then(response => {
        this.data = response.data.data
        this.info = this.data.info
        this.tag = this.data.tag
        this.postedImage = this.data.postedImage
        this.postedImages = this.data.postedImages
        this.points = this.data.info.school_giving_points
        this.services = this.data.school_srch_services
        this.campaigns = this.data.school_srch_campaigns
        this.featureItems = this.data.featureItems
        this.childcareServices = this.data.school_srch_childcare_services
        this.extendedChildcareTimes = this.data.school_srch_extended_childcare_times

        if (this.postedImages.length === 0) for (let i = 0; i < 2; i++) this.addPostedImage()
        if (this.postedImages.length === 1) this.addPostedImage()
      }).catch(error => {
        this.checkError(error)
      })
    },
    addPostedImage() {
      this.postedImages.push({
        image_path: null
      });
    },
    tagSwitch(index) {
      this.tag = this.data.schoolTags[index]
    },
    annualCalendarObj() {
      return {
        id: null,
        month_january: null,
        month_february: null,
        month_march: null,
        month_april: null,
        month_may: null,
        month_june: null,
        month_july: null,
        month_august: null,
        month_september: null,
        month_october: null,
        month_november: null,
        month_december: null,
      }
    },
    annualCalendarSubmit() {
      axios.post('/school/calendar-setting-store', this.calendarSetting).then(response => {
        this.editorActivate(false)
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    },
    getSecondTab() {
      this.activeTab = 2
      axios.get('/school/childcare-contents-of-the-garden').then(response => {
        this.childcarePolices = response.data.data.childcarePolices
        this.childcareColumns = response.data.data.childcareColumns
        this.calendarSetting = response.data.data.calendarSetting ?? this.calendarSetting
      }).catch(error => {
        this.checkError(error)
      })
    },
    getThirdTab() {
      this.activeTab = 3
      axios.get('/school/items-check-with-parents').then(response => {
        this.itemsToCheck = response.data.data.itemsCheckWithParents.length > 0 ? response.data.data.itemsCheckWithParents : [{ description: null }]
      }).catch(error => {
        this.checkError(error)
      })
    },
    itemsToCheckUpdate() {
      axios.post('/school/items-check-with-parents', { descriptions: this.itemsToCheck }).then(response => {
        this.getThirdTab()
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    },
    childPoliceImg(event, name) {
      const input = event.target;

      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.childcarePolices[name] = e.target.result
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    childcarePolicesUpdate() {
      axios.post('/school/policy-update', this.childcarePolices).then(response => {
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    },
    childcareColumnUpdate(value) {
      if (value.status === 0) {
        value.status = 1
        axios.post(`/school/childcare-column-update/${value.id}`, value).then(response => {
          this.$toast.success(response.data.message)
        }).catch(error => {
          this.checkError(error)
        })
      } else {
        this.$router.push({ name: 'Admin.MyPageChildcareColumnUpdate', params: { id: value.id } })
      }
    },
    addItemsToCheck() {
      this.itemsToCheck.push({
        description: null
      });
    },
    removeItemsToCheck(index, id) {
      if (id) {
        axios.delete(`/school/items-check-with-parents/${id}`).then(response => {
          this.itemsToCheck.splice(index, 1);
          this.$toast.success(response.data.message)
        }).catch(error => {
          this.checkError(error)
        })
      } else {
        this.itemsToCheck.splice(index, 1);
      }
    },
    schoolSettingFormActiveUpdate() {
      this.$store.commit('schoolSettingFormActiveUpdate', true)
    }
  }
}
</script>

<style lang="scss" scoped>

.form-control {
  &:focus {
    border-color: #ced4da;
  }
}

.--input {
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 5px;
  max-width: 160px;
  width: 100%;
}

.photo-upload {
  height: auto;
  position: relative;
  text-align: center;
  width: 100%;
}

.input-file {
  height: 0.1px;
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
  height: 400px;
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

.photo-upload__top {
  height: auto;
  position: relative;
  text-align: center;
  width: 100%;
}

.input-file__top {
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0.1px;
  z-index: -1;
}

.input-file__top + label {
  background: transparent;
  color: #b5b5b5;
  display: flex;
  text-align: center;
  width: 100%;
  height: 300px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.image-preview__top {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  pointer-events: none;
  position: absolute;
}

.min-h-300 {
  min-height: 300px;
}

.nav-link {
  letter-spacing: 0;
  color: #CB3A82;
  opacity: 1;

  &:hover {
    color: #333333;
  }
}

.container-checkbox {
  cursor: text;
}

label.container-checkbox.disabled {
  opacity: .5;
}

.opacity-50 {
  opacity: .5 !important;
}

.camera {
  color: #B2B4B7;
  z-index: 9;
  opacity: .5;
  font-size: 6em;
}

.calendar-editor {
  height: 100px;
}
</style>
