<template>
  <div class="favorite-garden-parent">
    <div class="py-2 overflow-hidden mb-5 mt-4">
      <!-- left sidebar -->
      <left-sidebar/>
      <!-- /left sidebar -->

      <!-- right column -->
      <div class="float-start right-column mb-5">
        <!-- tabs -->
        <div class="custom-tab-pill-two">
          <div class="px-0 tabs">
            <!-- * link * -->
            <a class="nav-item border" :class="[ activeTab === 1 ? 'active' : '' ]" @click="handleRoute('ChildQuestionnaire')"> 第一子</a>
            <a class="nav-item border" :class="[ activeTab === 2 ? 'active' : '' ]"> 第二子</a>
            <a class="add" :class="[ activeTab === 3 ? 'active' : '' ]"> ＋</a>
            <a> </a>
          </div>
        </div>
        <!-- /tabs -->

        <!-- tab content -->
        <div v-if="activeTab===2" class="first-child mb-5">
          <div class="hr-black">
            <hr>
          </div>

          <div class="text-end">
            <button class="bg-dark text-white px-4 py-1 border border-dark" @click="handleRoute('ChildQuestionnaireSelect')">
              修正
            </button>
          </div>

          <div class="px-3">
                        <span class="text-3xl fw-bold">
                            児童調査票
                        </span>
            <span>
                            ［ 最終更新日：2021/6/24 ］
                        </span>
          </div>

          <!-- table 1 -->
          <div class="table-responsive mt-4">
            <table class="table table-bordered border-dark">
              <tbody>
                <tr>
                  <th scope="row" class="p-3 bg-kigaruni-pinkish">
                    児童氏名
                  </th>
                  <td class="p-3">
                                        <span>
                                            田中 陸
                                        </span>
                    <span class="ms-4">
                                        （たなか りく）
                                        </span>
                  </td>
                  <th scope="row" class="p-3 bg-kigaruni-pinkish">
                    生年月日
                  </th>
                  <td class="p-3">
                    令和3年(2021年) 2月25日（0歳4ヶ月）
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="p-3 bg-kigaruni-pinkish">
                    平熱
                  </th>
                  <td class="p-3">
                                        <span>
                                            度 分
                                        </span>
                  </td>
                  <th scope="row" class="p-3 bg-kigaruni-pinkish">
                    血液型
                  </th>
                  <td class="p-3">

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /table 1 -->

          <!-- table 2 -->
          <div class="table-responsive mt-4">
            <table class="table table-bordered border-dark">
              <tbody>
                <tr class="bg-kigaruni-ash">
                  <td class="text-white p-3 fw-bold text-xl" colspan="3">
                    家族の状況
                  </td>
                </tr>
                <tr>
                  <td class="bg-kigaruni-pinkish p-2 text-center fw-bold" width="40%">
                    氏名
                  </td>
                  <td class="bg-kigaruni-pinkish p-2 text-center fw-bold">
                    族柄
                  </td>
                  <td class="bg-kigaruni-pinkish p-2 text-center fw-bold" width="40%">
                    生年月日 (年齢)
                  </td>
                </tr>
                <tr>
                  <td class="p-3" width="40%">
                    田中 愛 <span class="ms-4">(たなかあい)</span>
                  </td>
                  <td class="p-3 text-center">
                    母親
                  </td>
                  <td class="p-3" width="40%">
                    平成元年(1989年) 5月1日 (満32歳)
                  </td>
                </tr>
                <tr>
                  <td class="p-3" width="40%">
                    田中 仁 <span class="ms-4">(たなかひとし)</span>
                  </td>
                  <td class="p-3 text-center">
                    父親
                  </td>
                  <td class="p-3" width="40%">
                    平成元年(1989年) 9月15日 (満31歳)
                  </td>
                </tr>
                <tr>
                  <td class="p-3" width="40%">
                    田中 空 <span class="ms-4">（たなか そら）</span>
                  </td>
                  <td class="p-3 text-center">
                    兄
                  </td>
                  <td class="p-3" width="40%">
                    令和2年(2020年) 2月25日（満1歳）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /table 2 -->

          <!-- table 3 -->
          <div class="table-responsive mt-4">
            <table class="table table-bordered border-dark border">
              <tr class="bg-kigaruni-ash">
                <td class="text-white p-3 fw-bold text-xl" colspan="4">
                  日常生活の状況
                </td>
              </tr>
              <tr>
                <td rowspan="5" class="bg-kigaruni-pinkish p-3 text-center fw-bold">
                  食事
                </td>
                <td colspan="3" class="p-3">
                  <div></div>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="p-3">
                  <span>ミルクの回数は１日</span>
                  <span class="ms-4">- -</span>
                  <span class="ms-2">程度、１回の量はおおよそ</span>
                  <span class="ms-4">です</span>
                </td>
              </tr>
              <tr>
                <td class="p-3 border-end border-dark" width="40%">
                  <div></div>
                </td>
                <td class="p-3 bg-kigaruni-pinkish text-center fw-bold border-end border-secondary">
                  <span>食事量</span>
                </td>
                <td class="p-3" width="40%">
                  <div></div>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="p-3">
                  <div class="d-flex">
                    <div class="fw-bold">
                      好きな食べ物
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="p-3">
                  <div class="d-flex">
                    <div class="fw-bold">
                      嫌いな食べ物
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="p-3 bg-kigaruni-pinkish">
                  排泄
                </td>
                <td class="p-3" colspan="3">
                  <div></div>
                </td>
              </tr>
              <tr>
                <td class="p-3 bg-kigaruni-pinkish">
                  着脱衣
                </td>
                <td class="p-3" colspan="3">
                  <div></div>
                </td>
              </tr>
              <tr>
                <td class="p-3 bg-kigaruni-pinkish">
                  睡眠
                </td>
                <td class="p-3" colspan="3">
                  <span>就寝<span class="ms-4 me-5">(</span>頃）</span>
                  <span class="ms-5">起床<span class="ms-4 me-5">(</span>頃）</span>
                </td>
              </tr>
              <tr>
                <td class="p-3 bg-kigaruni-pinkish">
                  お昼寝
                </td>
                <td class="p-3" colspan="3">
                  <div></div>
                </td>
              </tr>
              <tr>
                <td class="p-3 bg-kigaruni-pinkish">
                  言葉
                </td>
                <td class="p-3" colspan="3">
                  <div></div>
                </td>
              </tr>
              <tr>
                <td rowspan="4" class="p-3 bg-kigaruni-pinkish">
                  これまでの 状況
                </td>
                <td colspan="3" class="p-3">
                  保育園、幼稚園、託児所、保育ママなどの保育施設に通ったことはありますか？
                  <div class="hr-dotted">
                    <hr>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="p-3">
                  現在は誰とどのように過ごしていますか？
                  <div class="hr-dotted">
                    <hr>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <!-- /table 3 -->

          <!-- table 4 -->
          <div class="table-responsive mt-4">
            <table class="table table-bordered border-dark">
              <tbody>
                <tr class="bg-kigaruni-ash">
                  <td class="text-white p-3 fw-bold text-xl" colspan="2">
                    生育歴
                  </td>
                </tr>
                <tr>
                  <td class="bg-kigaruni-pinkish p-3 fw-bold" width="40%">
                    生まれた時の体重は何グラムですか？
                  </td>
                  <td class="p-3">
                    <div></div>
                  </td>
                </tr>
                <tr>
                  <td class="bg-kigaruni-pinkish p-3 fw-bold" width="40%">
                    首がすわったのはいつ頃ですか？
                  </td>
                  <td class="p-3">
                    <div></div>
                  </td>
                </tr>
                <tr>
                  <td class="bg-kigaruni-pinkish p-3 fw-bold" width="40%">
                    歩き始めたのはいつ頃ですか？
                  </td>
                  <td class="p-3">
                    <div></div>
                  </td>
                </tr>
                <tr>
                  <td class="bg-kigaruni-pinkish p-3 fw-bold" width="40%">
                    音や声がする方を向きますか？
                  </td>
                  <td class="p-3">
                    <div></div>
                  </td>
                </tr>
                <tr>
                  <td class="bg-kigaruni-pinkish p-3 fw-bold" width="40%">
                    目が合いますか？
                  </td>
                  <td class="p-3">
                    <div></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /table 4 -->

          <!-- table 5 -->
          <div class="table-responsive mt-4">
            <table class="table table-bordered border-dark">
              <tbody>
                <tr class="bg-kigaruni-ash">
                  <td class="text-white p-3 fw-bold text-xl">
                    健康面
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <div class="fw-bold">
                      発育・発達に関することで、専門の機関に相談されたことはありますか？
                    </div>
                    <div class="hr-dotted">
                      <hr>
                    </div>
                    <div class="d-flex">
                      <div class="p-2"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <div class="fw-bold">
                      病癖及び体質を教えてください
                    </div>
                    <div class="hr-dotted">
                      <hr>
                    </div>
                    <div class="p-2"></div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <div class="fw-bold">
                      定期的な通院をしていますか？
                    </div>
                    <div class="hr-dotted">
                      <hr>
                    </div>
                    <div class="p-2"></div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <div class="fw-bold">
                      投薬・注射（エピペン、インスリン等）の必要性はありますか？
                    </div>
                    <div class="hr-dotted">
                      <hr>
                    </div>
                    <div class="p-2"></div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <div>
                      <div class="fw-bold">
                        食物アレルギー及びアレルギー疾患（花粉症・喘息など）はありますか？
                      </div>
                      <div class="mt-2">
                        ※「あり」の場合、医師による診断、検査結果及び「アレルギー疾患生活管理指導表」の提出が必要です
                      </div>
                    </div>
                    <div class="hr-dotted">
                      <hr>
                    </div>
                    <div class="p-2"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /table 5 -->

          <div class="px-5 py-2 bg-kigaruni-pinkish fw-bold">
            保育園利用にあたり、日常生活のこと（食事や発達面、行動など）で伝えておきたいことをご記入ください
          </div>

          <div class="border border-2 border-secondary p-1 mt-4">
            <div class="border border-2 border-secondary p-3">
              <div class="p-5"></div>
            </div>
          </div>

          <div class="hr-black mt-5 mb-5">
            <hr>
          </div>

          <div class="text-center">
            <button class="border border-dark bg-dark text-white px-5 py-2" @click="handleRoute('ChildQuestionnaireSelect')">修正</button>
          </div>

        </div>
        <!-- /tab content -->
      </div>
      <!-- /right column -->

    </div>


  </div>
</template>

<script>
// imports
import router from "../router/index"
import LeftSidebar from "../components/LeftSidebar"
import Frontend from "../layouts/Frontend";

export default {
  name: "ChildQuestionnaireSecondary",
  created() {
    this.$emit('update:layout', Frontend)
  },
  data() {
    return {
      sideNavActive: 3,
      activeTab: 2,
    }
  },
  components: {
    LeftSidebar
  },
  methods: {
    handleRoute(path) {
      if (typeof path === 'number') {
        router.push({
          name: 'todo',
          params: {
            page: path
          }
        })
      } else {
        if (this.$route.name != path) {
          router.push({
            name: path
          })
        }
      }
      return
    },
  }
};
</script>
