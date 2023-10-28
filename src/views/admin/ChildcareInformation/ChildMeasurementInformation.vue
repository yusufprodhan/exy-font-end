<template>
  <div class="childcare-information-parent children-information admin-parent">

    <!-- breadcrumb -->
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <!-- /breadcrumb -->

    <div class="row w-100 experience-body">


      <!-- left sidebar -->
      <LeftSidebar></LeftSidebar>
      <!-- /left sidebar -->

      <div class="col-md-8 right-col">

        <!-- RightCol Header -->
        <rightcol-header></rightcol-header>
        <!-- /RightCol Header -->

        <!-- content -->
        <div class="row row-2 ps-1">

          <!-- tabs -->
          <div class="details-tab">
            <div class="px-0 tabs">
              <a> </a>
              <!-- * link * -->
              <a @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]"> 基本情報</a>
              <a @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]"> 身体測定</a>
              <a @click="activeTab=3"  :class="[ activeTab === 3 ? 'active' : '' ]"> 利用履歴</a>
              <a> </a>
            </div>
          </div>
          <!-- /tabs -->
          <div v-if="activeTab===1" class="basic-information w-100 pb-5">
            <div class="row w-100 pt-4">
              <div class="col-md-8">
                <div class="row row-1">
                  <div class="col-md-3 left-col py-2">
                    <p class="m-0 text-sm">名前</p>
                  </div>
                  <div class="col-md-9 py-2">
                    <p class="m-0">哀川 里奈（あいかわ りな）</p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-3 left-col py-2">
                    <p class="m-0 text-sm">生年月日(年齢)</p>
                  </div>
                  <div class="col-md-9 py-2">
                    <p class="m-0">令和２年［2020年］6月22日（１才）</p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-3 left-col py-2">
                    <p class="m-0 text-sm">性別</p>
                  </div>
                  <div class="col-md-9 py-2">
                    <p class="m-0">女</p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-3 left-col py-2">
                    <p class="m-0 text-sm">住所</p>
                  </div>
                  <div class="col-md-9 py-2">
                    <p class="m-0">
                      〒550-0014 <br>
                      大阪府大阪市西区北堀江1丁目2−27 <br>
                      AXIS SOUTH 四ツ橋ビル 407
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-right">
                <img src="../../../assets/images/admin/ID3487702_m_et.png" alt="EXY">
              </div>
            </div>
            <div class="row row-1">
              <div class="col-md-2 left-col py-2">
                <p class="m-0 text-sm">アレルギー</p>
              </div>
              <div class="col-md-10 py-2">
                <p class="m-0">有り（卵アレルギーがあります）</p>
              </div>
            </div>
            <div class="row row-2">
              <div class="col-md-2 left-col py-2">
                <p class="m-0 text-sm">基礎疾患</p>
              </div>
              <div class="col-md-10 py-2">
                <p class="m-0">なし（）</p>
              </div>
            </div>
            <div class="row row-2 mt-3">
              <div class="col-md-2 left-col py-2">
                <p class="m-0 text-sm">利用開始日</p>
              </div>
              <div class="col-md-10 py-2">
                <p class="m-0">2021年1月1日</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-2">
                <p class="m-0">保護者情報</p>
              </div>
              <div class="col-md-10 px-0">
                <hr>
              </div>
            </div>
            <div class="row row-1 mt-2">
              <div class="col-md-2 left-col py-2">
                <p class="m-0 text-sm">母親</p>
              </div>
              <div class="col-md-10 py-2">
                <p class="m-0">哀川 奈々（あいかわ なな）</p>
              </div>
            </div>
            <div class="row row-2">
              <div class="col-md-2 left-col py-2">
                <p class="m-0 text-sm">電話番号</p>
              </div>
              <div class="col-md-10 py-2">
                <p class="m-0">06-0000-0000</p>
              </div>
            </div>
            <div class="row row-1 mt-2">
              <div class="col-md-2 left-col py-2">
                <p class="m-0 text-sm">父親</p>
              </div>
              <div class="col-md-10 py-2">
                <p class="m-0">哀川 翔（あいかわ しょう）</p>
              </div>
            </div>
            <div class="row row-2">
              <div class="col-md-2 left-col py-2">
                <p class="m-0 text-sm">電話番号</p>
              </div>
              <div class="col-md-10 py-2">
                <p class="m-0">090-0000-0000</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-2">
                <p class="m-0">アンケート</p>
              </div>
              <div class="col-md-10 px-0">
                <hr>
              </div>
            </div>
            <div class="row row-2 mt-2">
              <div class="col-md-2 left-col py-2">
                <p class="m-0 text-sm">アンケート</p>
              </div>
              <div class="col-md-10 py-2">
                <p class="m-0">
                  ▶︎アレルギー あり（卵アレルギーがあります）<br>
                  ▶︎ミルク あり <br>
                  ▶︎おやつ あり <br>
                  ▶︎給食 あり <br>
                  ▶︎離乳食のすすみ具合 <br>
                  （柔らかく煮たブロッコリーをお昼ご飯に食べています。それ以外はまだ食べられません（好き嫌いかも…？）。）
                </p>
              </div>
            </div>
            <div class="row row-3 mt-5">
              <div class="col-md-12">
                <div class="row">
                  <p class="m-0 py-2">
                    書類ダウンロード
                  </p>
                </div>
                <div class="row mt-1">
                  <div class="col-md-3">
                    <p class="span-1 text-center py-1"><img src="../../../assets/images/svg/pdf.svg" alt="EXY"> 送迎者一覧</p>
                  </div>
                   <div class="col-md-3">
                    <p class="span-1 text-center py-1"><img src="../../../assets/images/svg/pdf.svg" alt="EXY"> 児童調査票</p>
                  </div>
                   <div class="col-md-3">
                    <p class="span-1 text-center py-1"><img src="../../../assets/images/svg/pdf.svg" alt="EXY"> 保険証</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <p class="span-1 text-center py-1"><img src="../../../assets/images/svg/pdf.svg" alt="EXY"> 母子手帳</p>
                  </div>
                   <div class="col-md-3">
                    <p class="span-1 text-center py-1"><img src="../../../assets/images/svg/pdf.svg" alt="EXY"> 離乳食についての調査票</p>
                  </div>
                   <div class="col-md-3">
                    <p class="span-1 text-center py-1"><img src="../../../assets/images/svg/pdf.svg" alt="EXY"> 食品調査票</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <p class="span-1 text-center py-1"><img src="../../../assets/images/svg/pdf.svg" alt="EXY"> アレルギー管理生活疾患指導表</p>
                  </div>
                   <div class="col-md-3">
                    <p class="span-1 text-center py-1"><img src="../../../assets/images/svg/pdf.svg" alt="EXY"> 勤務証明書</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <p class="span-1 text-center py-1"><img src="../../../assets/images/svg/pdf.svg" alt="EXY"> 各園専用アンケート</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- tab content -->
          <div v-if="activeTab===2" class="childcare-information w-100 pb-5">
            <div class="row w-100 pt-4 inner-row-1 mt-4">

              <div class="text-start">
                <span class="fa fa-caret-left color-kigaruni-pink text-xl fw-bold"></span>
                <span class="ms-4 me-4 text-xl fw-bold">2021 年度</span>
                <span class="fa fa-caret-right color-kigaruni-pink text-xl fw-bold"></span>
              </div>

              <!-- table -->
              <div class="table-responsive mt-4">
                <table class="table table-bordered border-dark">
                  <thead>
                    <tr>
                      <th scope="col" width="100"></th>
                      <th scope="col" v-for="i in dataTableCols" :key="i"
                          class="text-center background-pinkish fw-normal">
                        {{ i }} 月
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center">
                      <th class="background-bluish fw-normal">身長(cm)</th>
                      <td v-for="i in dataTableCols" :key="i">
                        <span v-if="i == 4">78.8</span>
                        <span v-if="i == 5">79</span>
                      </td>
                    </tr>
                    <tr class="text-center">
                      <th class="background-bluish fw-normal">体重(kg)</th>
                      <td v-for="i in dataTableCols" :key="i">
                        <span v-if="i == 4">9.7</span>
                        <span v-if="i == 5">10</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /table -->

              <!-- page content -->
              <!-- graph tab -->
              <div class="graph-tab ms-4">
                <div class="px-0 tabs">
                  <a @click="graphActiveTab=1" :class="[ graphActiveTab === 1 ? 'active' : '' ]">
                    基本情報</a>
                  <a @click="graphActiveTab=2" :class="[ graphActiveTab === 2 ? 'active' : '' ]">
                    身体測定</a>
                </div>
              </div>
              <!-- /graph tab -->

              <!-- graph content -->
              <div v-if="activeTab===2" class="graph-content w-100 pb-5">
                <div class="row w-100 pt-4 ">
                  <div class="col-md-12 pe-0">
                    <div class="row inner-3">
                      <div class="col-md-12">
                        <!-- Y Axis -->
                        <div class="row" v-for="i in graphYparams" :key="i">
                          <div class="col-1 py-2 no-border ps-4">
                            <p class="m-0 pt-2 text-xs">
                              {{ i }} cm
                              <span v-if="i == 80" class="ms-4 value-pointer"></span>
                            </p>
                          </div>
                          <div class="col-2">
                          </div>
                          <div class="col-2"></div>
                          <div class="col-2"></div>
                          <div class="col-2"></div>
                          <div class="col-2"></div>
                          <div class="col-1"></div>
                        </div>
                        <!-- /Y Axis -->

                        <!-- X Axis -->
                        <div class="row inner-row-1 mt-2">
                          <div class="col-1"></div>

                          <div class="col-1 mt-2" v-for="j in dataTableCols" :key="j">
                            <p class="text-xs text-center">{{ j }} 月</p>
                          </div>
                        </div>
                        <!-- /X Axis -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /graph content -->
              <!-- /page content -->

            </div>
          </div>
          <!-- /tab content -->

           <div v-if="activeTab===3" class="expericence-childcare w-100 pb-5">
            <div class="row w-100 pt-4 inner-row-1">
              <div class="col-md-12 pe-0">
                <a @click="leftsub==1 ? leftsub=2 : leftsub=1">
                  <div class="row pt-3 inner-1 pb-2">
                    <div class="col-md-2 pt-2">
                      <p class="m-0">◀︎<span class="px-3">2021年度</span>▶︎</p>
                    </div>
                    <div class="col-md-8">
                      <select class="form-select ps-5 w-25" aria-label="Default select example">
                        <option selected>1 月</option>
                        <option v-for="i in 12" :key="i" :value="`${i} 月`">
                          {{ `${i} 月` }}
                        </option>
                      </select>
                    </div>
                    <div v-if="leftsub == 1" class="col-md-2 pe-0">
                      <p class="m-0 py-2 text-center p-button">修正</p>
                    </div>
                    <div v-if="leftsub == 2" class="col-md-2 pe-0">
                      <p class="m-0 py-2 text-center p-button-1">保存</p>
                    </div>
                  </div>
                  <div class="row pt-2 inner-2">
                    <div class="col-md-12 inner-col">
                      <div class="row box-row-1 no-border">
                        <div class="col-md-2 box-left py-2 text-sm">
                          <p class="m-0 text-center fw-bold pt-1">利用開始日時</p>
                        </div>
                        <div class="col-md-10 box-right py-2 ps-4">
                          <p class="m-0">2021年1月1日（金）11：00</p>
                        </div>
                      </div>
                      <div class="row box-row-1">
                        <div class="col-md-2 box-left py-2 text-sm">
                          <p class="m-0 text-center fw-bold pt-1">利用終了日時</p>
                        </div>
                        <div class="col-md-10 box-right py-2 ps-4">
                          <p class="m-0">2021年1月1日（金）14：00</p>
                        </div>
                      </div>
                      <div class="row box-row-1">
                        <div class="col-md-2 box-left py-2 text-sm">
                          <p class="m-0 pt-1"><input type="checkbox"> <span class="ps-3 fw-bold">利用内容</span></p>
                        </div>
                        <div class="col-md-10 box-right py-2 ps-4">
                          <p class="m-0">体験保育</p>
                        </div>
                      </div>
                      <div class="row box-row-1">
                        <div class="col-md-2 box-left py-2 text-sm">
                          <p class="m-0 pt-1"><input type="checkbox"> <span class="ps-3 fw-bold">料金プラン</span></p>
                        </div>
                        <div class="col-md-10 box-right py-2 ps-4">
                          <p class="m-0">通常プラン <span class="px-3">｜</span> １歳児以降</p>
                        </div>
                      </div>
                      <div class="row box-row-1">
                        <div class="col-md-2 box-left py-2 text-sm">
                          <p class="m-0 pt-1"><input type="checkbox"> <span class="ps-3 fw-bold">オプション</span></p>
                        </div>
                        <div class="col-md-10 box-right py-2 ps-4">
                          <p class="m-0">その他費用 <span class="px-3">｜</span> 給食、その他費用 <span class="px-3">｜</span>おやつ</p>
                        </div>
                      </div>
                      <div class="row box-row-1">
                        <div class="col-md-2 box-left py-2 text-sm">
                          <p class="m-0 pt-1"><input type="checkbox"> <span class="ps-3 fw-bold">支払い方法</span></p>
                        </div>
                        <div class="col-md-10 box-right py-2 ps-4">
                          <p class="m-0">クレジット自動引き落とし</p>
                        </div>
                      </div>
                      <div class="row box-row-1">
                        <div class="col-md-2 box-left py-2 text-sm">
                          <p class="m-0 text-center fw-bold pt-1">完了報告</p>
                        </div>
                        <div class="col-md-10 box-right py-2 ps-4 pe-5">
                          <div class="row pb-1">
                            <div class="col-md-1">
                              <p class="m-0">11:00-：</p>
                            </div>
                            <div class="col-md-11">
                              <p class="m-0">初めての場所に少し緊張している様子でした。お母様のお姿が見えなくなると 寂しさが溢れたようで５分程度は泣き止まずでしたが、保育者がおもちゃで遊 びに誘うと気持ちを切り替えて楽しそうに遊んでくれていました。</p>
                            </div>
                          </div>
                          <div class="row pb-1">
                            <div class="col-md-1">
                              <p class="m-0">11:30-：</p>
                            </div>
                            <div class="col-md-11">
                              <p class="m-0">保育園のお友達と給食を食べました。上手に手掴み食べができていました。</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-1">
                              <p class="m-0">12:00-：</p>
                            </div>
                            <div class="col-md-11">
                              <p class="m-0">お昼寝の時間になると、やはり慣れない環境では寝付きにくいようで、少しの 間泣いている様子でしたが、30分ほどトントンを続けると気持ち良さそうに 眠っていました。</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="leftsub == 1" class="row inner-3">
                    <div class="col-md-12">
                      <div class="row box-inner-1 py-2">
                        <p class="m-0 ps-0">修正履歴</p>
                      </div>
                      <div class="row box-inner-2 py-2">
                        <div class="col-md-3">
                          <p class="m-0 fw-bold">修正日</p>
                        </div>
                        <div class="col-md-3">
                          <p class="m-0 fw-bold">修正内容</p>
                        </div>
                        <div class="col-md-6">
                          <p class="m-0 fw-bold">修正の事由</p>
                        </div>
                      </div>
                      <div class="row box-inner-3 py-2">
                        <div class="col-md-3">
                          <p class="m-0">2021/06/02 <span class="ps-5">12:00</span></p>
                        </div>
                        <div class="col-md-3">
                          <p class="m-0">利用プラン</p>
                        </div>
                        <div class="col-md-6">
                          <p class="m-0">利用プラン変更の申し出があったため</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="leftsub == 2" class="row pt-2 inner-2 box-margin">
                    <div class="col-md-12 inner-col">
                      <div class="row box-row-1 no-border">
                        <div class="col-md-2 box-left py-2 text-sm">
                          <p class="m-0 pt-1 text-center fw-bold">料金プラン</p>
                        </div>
                        <div class="col-md-10 box-right py-2 ps-4">
                          <select class="form-select ps-5 w-50" aria-label="Default select example">
                            <option>通常プラン <span class="px-3">｜</span> １歳児以降</option>
                          </select>
                        </div>
                      </div>
                      <div class="row box-row-1">
                        <div class="col-md-2 box-left py-2 text-sm">
                          <p class="m-0 pt-1 text-center fw-bold">完了報告</p>
                        </div>
                        <div class="col-md-10 box-right py-2 ps-4">
                          <p class="p-box m-0"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a @click="subBottom==1 ? subBottom=2 : subBottom=1">
                  <div class="row inner-4 box-margin py-2">
                    <div class="col-md-1">
                      <p class="m-0">備考欄</p>
                    </div>
                    <div class="col-md-11">
                      <hr class="hr-color mt-2">
                    </div>
                  </div>
                  <div class="row py-2">
                    <p class="m-0">当該園児さんに関して職員間で共有すべき事項等ありましたらご記入ください。</p>
                  </div>
                  <div v-if="subBottom == 1" class="row py-3 inner-5">
                    <p class="p-box m-0"></p>
                  </div>
                  <div v-if="subBottom == 2" class="row py-3 inner-5">
                    <p class="py-4 ps-3 m-0 p-box">お迎えの時間に少しルーズな部分があるため配置に注意する</p>
                  </div>
                  <div v-if="subBottom==1" class="row py-2 inner-5">
                    <p class="m-0"><span class="pull-right py-2 px-5 span-1">保存</span></p>
                  </div>
                  <div v-if="subBottom==2" class="row py-2 inner-5">
                    <p class="m-0"><span class="pull-right py-2 px-5 span-2">修正</span></p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
        <!-- /content -->
      </div>
    </div>
  </div>
</template>

<script>
// imports
import router from "../../../router/index"
import Breadcrumb from "../../../components/adminPartials/Breadcrumb"
import LeftSidebar from "./LeftSidebar.vue"
import RightcolHeader from "./RightcolHeader.vue"
import Admin from "../../../layouts/Admin";

export default {
  name: "ChildcareInformation",
  created() {
    this.$emit('update:layout', Admin)
  },
  components: {
    Breadcrumb,
    LeftSidebar,
    RightcolHeader,
  },
  data() {
    return {
      dataPageName: "園児情報",
      activeTab: 1,
      graphActiveTab: 1,
      dataTableCols: [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3
      ],
      graphYparams: [
        96, 94, 92, 90, 88, 86, 84, 82, 80, 78, 76, 74, 72
      ]
    }
  },
  methods: {
    handleRoute(path) {
      if (typeof path === 'number') {
        router.push(
            {
              name: 'todo',
              params: {
                page: path
              }
            }
        )
      } else {
        if (this.$route.name != path) {
          router.push({ name: path })
        }
      }
      return
    }
  }
}
</script>

<style scoped>

</style>