<template>
  <div class="children_questionnaires_edit">
    <div class="py-2 overflow-hidden mb-5 mt-4">

      <!-- right column -->
      <div class="float-start">
        <!-- tabs -->
        <div class="custom-tab-pill-two">
          <div class="px-0 tabs">
            <!-- * link * -->
            <a class="nav-item border" v-for="(data,index) in childrens" :key="index"
               :class="[ activeTab === index ? 'active' : '' ]" @click="activeTab= index"> {{ ordinalTitle[index] }}</a>
            <a> </a>
          </div>
        </div>
        <!-- /tabs -->

        <!-- tab content -->
        <ValidationObserver v-slot="{  handleSubmit }">
          <form @submit.prevent=" handleSubmit(childAddFormSubmit)" autocomplete="off">
            <div v-for="(data,index) in childrens" :key="index">
              <div v-if="activeTab===index" class="first-child mb-5">
                <div class="hr-black">
                  <hr>
                </div>
                <div class="text-end">
                  <router-link :to="{name:'Mypage.ChildQuestionnaire'}">
                    <button class="border border-dark bg-white text-dark px-4 py-1">
                      戻る
                    </button>
                  </router-link>
                  <button class="ms-4 exy-default-btn px-4 py-1">
                    保存
                  </button>
                </div>

                <div class="px-3">
                  <span class="text-3xl fw-bold">児童調査票</span>
                  <span> 最終更新日：[2021/6/24</span>
                </div>

                <!-- table 1 -->
                <div class="table-responsive mt-4">
                  <table class="table table-bordered border-dark">
                    <tbody>
                    <tr>
                      <th scope="row" class="p-3 bg-kigaruni-pinkish">
                        児童氏名
                      </th>
                      <td class="p-3 bg-kigaruni-smooth-ash">
                        <span> 田中 そら</span>
                        <span class="ms-4">たなか そら</span>
                      </td>
                      <th scope="row" class="p-3 bg-kigaruni-pinkish">
                        生年月日
                      </th>
                      <td class="p-3 bg-kigaruni-smooth-ash">
                        令和2年(2020年) 5月1日（1歳1ヶ月）
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="p-3 bg-kigaruni-pinkish">
                        平熱
                      </th>
                      <td class="p-3">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <input type="text" name="every_time" v-model="formData.every_time" class="p-1 rounded border border-secondary w-25">
                          <span class="is-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <label class="ms-3">度</label>

                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <input type="text" name="minute" v-model="formData.minute" class="ms-4 p-1 rounded border border-secondary w-25">
                          <span class="is-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <label class="ms-3">分</label>
                        <div class="mt-2">
                          半角／英数
                        </div>
                      </td>
                      <th scope="row" class="p-3 bg-kigaruni-pinkish">
                        血液型
                      </th>
                      <td class="p-3">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <input type="radio" name="rh" class="" v-model="formData.rh" value="rh+">
                          <label class="ms-2">(Rh)+</label>
                          <input type="radio" name="rh" class="ms-4" v-model="formData.rh" value="rh-">
                          <label class="ms-2">(Rh)-</label>
                          <span class="is-danger">{{ errors[0] }}</span>
                        </ValidationProvider>

                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <select class="ms-5 p-1 border border-1 rounded bg-light form-text" name="blood_group" v-model="formData.blood_group">
                            <option selected>選択</option>
                            <option>A</option>
                            <option>B</option>
                          </select>
                          <span class="is-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
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
                      <td class="p-3 bg-kigaruni-smooth-ash" width="40%">
                        <span>田中 愛 (たなか あい）</span>
                      </td>
                      <td class="p-3 text-center bg-kigaruni-smooth-ash">
                        母親
                      </td>
                      <td class="p-3 bg-kigaruni-smooth-ash" width="40%">
                        平成元年(1989年) 5月1日（満32歳）
                      </td>
                    </tr>
                    <tr>
                      <td class="p-3 bg-kigaruni-smooth-ash" width="40%">
                        <span>田中 仁 （たなか ひとし）</span>
                      </td>
                      <td class="p-3 text-center bg-kigaruni-smooth-ash">
                        父親
                      </td>
                      <td class="p-3 bg-kigaruni-smooth-ash" width="40%">
                        平成元年(1989年) 9月15日（満31歳）
                      </td>
                    </tr>
                    <tr>
                      <td class="bg-kigaruni-pinkish text-center fw-bold" width="40%">
                        氏名
                      </td>
                      <td class="bg-kigaruni-pinkish text-center fw-bold">
                        族柄
                      </td>
                      <td class="bg-kigaruni-pinkish text-center fw-bold" width="40%">
                        生年月日 (年齢)
                      </td>
                    </tr>
                    <tr>
                      <td class="p-3" width="40%">
                        <input type="text" placeholder="例）保育 花子" class="rounded border border-2 ps-3 py-1 w-100">
                        <div class="mt-2">
                          ※苗字と名前の間は一文字空けて下さい
                        </div>
                        <hr>
                        <div>
                          <div class="text-center bg-kigaruni-pinkish p-1 fw-bold">
                            ふりがな
                          </div>
                          <div class="mt-2">
                            <input type="text" placeholder="例）ほいく はなこ"
                                   class="border border-2 p-1 w-100 rounded">
                            <div class="mt-2">
                              ※苗字と名前の間は一文字空けて下さい
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="p-3 text-center" rowspan="2">
                        <select class="p-2 border border-1 rounded bg-light form-text w-50">
                          <option selected>選択</option>
                          <option>Option A</option>
                          <option>Option B</option>
                          <option>Option C</option>
                          <option>Option D</option>
                          <option>Option E</option>
                        </select>
                      </td>
                      <td class="p-3" width="40%">
                        <select class="p-2 border border-1 rounded bg-light form-text w-50">
                          <option selected>1990(平成元年)</option>
                          <option>Option A</option>
                          <option>Option B</option>
                          <option>Option C</option>
                          <option>Option D</option>
                          <option>Option E</option>
                        </select>
                        <label class="ms-4">年</label>

                        <div class="mt-2 d-flex align-items-center py-3">
                          <select class="p-2 border border-1 rounded bg-light form-text w-50">
                            <option selected>- -</option>
                            <option>Option A</option>
                            <option>Option B</option>
                            <option>Option C</option>
                            <option>Option D</option>
                            <option>Option E</option>
                          </select>

                          <label class="ms-4 me-4">月</label>

                          <select class="p-2 border border-1 rounded bg-light form-text w-50">
                            <option selected>- -</option>
                            <option>Option A</option>
                            <option>Option B</option>
                            <option>Option C</option>
                            <option>Option D</option>
                            <option>Option E</option>
                          </select>

                          <label class="ms-4">日</label>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>

                <div class="text-end">
                  <button class="bg-dark border text-white px-3 py-1">
                    <span class="fa fa-plus-circle"></span>
                    <span class="ms-2">追加する</span>
                  </button>
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
                        <select class="p-2 border border-1 rounded bg-light form-text w-50">
                          <option selected>選択</option>
                          <option>母乳を飲んでいる</option>
                          <option>粉ミルクを飲んでいる</option>
                          <option>混合（母乳と粉ミルク）</option>
                          <option>離乳食と母乳（又は粉ミルク）</option>
                          <option>離乳食を食べさせてもらう</option>
                          <option>食事を手づかみで食べることができる</option>
                          <option>スプーン又はフォークを使って食べようとするが、手助けが必要である</option>
                          <option>箸を使って食べようとするが、手助けが必要である</option>
                          <option>スプーン又はフォークを使ってひとりで食べることができる</option>
                          <option>箸を使ってひとりで食べることができる</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3" class="p-3">
                        <span>ミルクの回数は１日</span>
                        <select class="ms-4 p-2 border border-1 rounded bg-light form-text">
                          <option selected>- -</option>
                          <option>１回</option>
                          <option>２回</option>
                          <option>３回</option>
                          <option>４回</option>
                          <option>５回</option>
                          <option>6回</option>
                          <option>7回</option>
                          <option>8回</option>
                          <option>9回</option>
                          <option>10回</option>
                        </select>
                        <label class="ms-2">程度</label>

                        <span class="ms-5">１回の量はおおよそ</span>
                        <input type="text" class="ms-5 border border-2 rounded p-1">
                        <span class="ms-2">cc です</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-3 border-end border-dark" width="40%">
                        <select class="p-2 border border-1 rounded bg-light form-text w-50">
                          <option selected>選択</option>
                          <option>果汁のみ</option>
                          <option>スープ状</option>
                          <option>ペースト状</option>
                          <option>ペースト状</option>
                          <option>小さくほぐしたもの（やわらかく）</option>
                          <option>小さくほぐしたもの（歯ごたえあり）</option>
                          <option>大人とほぼ同じ</option>
                        </select>
                      </td>
                      <td class="p-3 bg-kigaruni-pinkish text-center fw-bold border-end border-secondary">
                        <span>食事量</span>
                      </td>
                      <td class="p-3" width="40%">
                        <select class="p-2 border border-1 rounded bg-light form-text w-50">
                          <option selected>普通</option>
                          <option>よく食べる（多い）</option>
                          <option>あまり食べない（少ない）</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3" class="p-3">
                        <div class="d-flex align-items-center">
                          <div class="fw-bold pe-5 border-end">
                            好きな食べ物
                          </div>
                          <div>
                            <input type="text" class="ms-5 border border-2 rounded p-1 w-100">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3" class="p-3">
                        <div class="d-flex align-items-center">
                          <div class="fw-bold pe-5 border-end">
                            嫌いな食べ物
                          </div>
                          <div>
                            <input type="text" class="ms-5 border border-2 rounded p-1 w-100">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-3 bg-kigaruni-pinkish">
                        排泄
                      </td>
                      <td class="p-3" colspan="3">
                        <select class="p-2 border border-1 rounded bg-light form-text w-50">
                          <option selected>選択</option>
                          <option>常時おむつを使用している</option>
                          <option>時々おむつを使用している</option>
                          <option>就寝時のみ、おむつを使用している</option>
                          <option>ひとりではできないが、尿意・便意を知らせることができる</option>
                          <option>ひとりでトイレに行くが、後始末は大人の手助けが必要である</option>
                          <option>ひとりでトイレに行くが、後始末は大人の手助けが必要である</option>
                          <option>うんちもおしっこもひとりでできる</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-3 bg-kigaruni-pinkish">
                        着脱衣
                      </td>
                      <td class="p-3" colspan="3">
                        <select class="p-2 border border-1 rounded bg-light form-text w-50">
                          <option selected>選択</option>
                          <option>大人にしてもらう</option>
                          <option>簡単なものはひとりでできる（着る）</option>
                          <option>簡単なものはひとりでできる（脱ぐ）</option>
                          <option>簡単なものはひとりでできる（着脱）</option>
                          <option>ひとりで着脱できる</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-3 bg-kigaruni-pinkish">
                        睡眠
                      </td>
                      <td class="p-3" colspan="3">
                        <span>就寝</span>
                        <select class="ms-2 p-2 border border-1 rounded bg-light form-text">
                          <option selected>20</option>
                          <option>Option A</option>
                          <option>Option B</option>
                          <option>Option C</option>
                          <option>Option D</option>
                          <option>Option E</option>
                        </select>
                        <span class="ms-2 me-2">:</span>
                        <select class="p-2 border border-1 rounded bg-light form-text">
                          <option selected>30</option>
                          <option>Option A</option>
                          <option>Option B</option>
                          <option>Option C</option>
                          <option>Option D</option>
                          <option>Option E</option>
                        </select>
                        <span class="ms-2">頃</span>

                        <span class="ms-5">起床</span>
                        <select class="ms-2 p-2 border border-1 rounded bg-light form-text">
                          <option selected>06</option>
                          <option>Option A</option>
                          <option>Option B</option>
                          <option>Option C</option>
                          <option>Option D</option>
                          <option>Option E</option>
                        </select>
                        <span class="ms-2 me-2">:</span>
                        <select class="p-2 border border-1 rounded bg-light form-text">
                          <option selected>30</option>
                          <option>Option A</option>
                          <option>Option B</option>
                          <option>Option C</option>
                          <option>Option D</option>
                          <option>Option E</option>
                        </select>
                        <span class="ms-2">頃</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-3 bg-kigaruni-pinkish">
                        お昼寝
                      </td>
                      <td class="p-3" colspan="3">
                        <select class="p-2 border border-1 rounded bg-light form-text">
                          <option selected>選択</option>
                          <option>しない</option>
                          <option>一定ではないがする</option>
                          <option>する</option>
                        </select>
                        <span class="ms-5 me-2">(</span>
                        <input type="text" class="p-1 border border-2 rounded">
                        <span class="ms-2">時間程度 ）</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-3 bg-kigaruni-pinkish">
                        言葉
                      </td>
                      <td class="p-3" colspan="3">
                        <select class="p-2 border border-1 rounded bg-light form-text">
                          <option selected>「あー」「うー」などの喃語（なんご）で話しかけるような声を出す</option>
                          <option>ママ、ブーブーなどの意味のある言葉をいくつか話すことができる</option>
                          <option>２語文（わんわんきた、まんまちょうだい）を話すことができる</option>
                          <option>３語文（パパと公園に行った）を話すことができる</option>
                          <option>大人と日常会話ができる</option>
                        </select>
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
                        <div>
                          <input type="radio" name="rad" checked>
                          <label class="ms-3 me-5">ない</label>
                          <input type="radio" name="rad" class="ms-5">
                          <label class="ms-3">ある</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3" class="p-3">
                        現在は誰とどのように過ごしていますか？
                        <div class="hr-dotted">
                          <hr>
                        </div>
                        <div class="p-5 border rounded">
                          <textarea id="textarea-large" placeholder="Large textarea" rows="2" wrap="soft"
                                    class="form-control form-control-lg" spellcheck="false"></textarea>
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
                        <input type="text" class="border border-2 rounded">
                        <span class="ms-3">g</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="bg-kigaruni-pinkish p-3 fw-bold" width="40%">
                        首がすわったのはいつ頃ですか？
                      </td>
                      <td class="p-3">
                        <input type="radio" name="rad1" checked>
                        <label class="ms-2">まだ座っていない</label>
                        <input type="radio" name="rad1" class="ms-5">
                        <label class="ms-2">座っている</label>
                      </td>
                    </tr>
                    <tr>
                      <td class="bg-kigaruni-pinkish p-3 fw-bold" width="40%">
                        歩き始めたのはいつ頃ですか？
                      </td>
                      <td class="p-3">
                        <input type="radio" name="rad2" checked>
                        <label class="ms-2">まだ歩いていない</label>
                        <input type="radio" name="rad2" class="ms-5">
                        <label class="ms-2">歩いている</label>
                      </td>
                    </tr>
                    <tr>
                      <td class="bg-kigaruni-pinkish p-3 fw-bold" width="40%">
                        音や声がする方を向きますか？
                      </td>
                      <td class="p-3">
                        <input type="radio" name="rad3" checked>
                        <label class="ms-2">いいえ</label>
                        <input type="radio" name="rad3" class="ms-5">
                        <label class="ms-2">はい</label>
                      </td>
                    </tr>
                    <tr>
                      <td class="bg-kigaruni-pinkish p-3 fw-bold" width="40%">
                        目が合いますか？
                      </td>
                      <td class="p-3">
                        <input type="radio" name="rad4" checked>
                        <label class="ms-2">いいえ</label>
                        <input type="radio" name="rad4" class="ms-5">
                        <label class="ms-2">はい</label>
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
                          <div class="">
                            <input type="radio" name="rad4">
                            <span class="ms-2">ない</span>
                          </div>
                          <div class="ms-5">
                            <input type="radio" name="rad4" checked>
                            <span class="ms-2">あり</span>
                          </div>
                          <div class="ms-5">
                            <span class="color-kigaruni-pink">■</span>相談した機関名：
                          </div>
                          <div class="ms-3">
                            <input type="text" class="text-start border border-2 w-100 rounded">
                          </div>
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
                        <div class="p-2">
                          <div>
                            <label class="container-checkbox">
                              ない
                              <input type="checkbox">
                              <span class="checkmark"></span>
                            </label>
                            <label class="container-checkbox ms-5">
                              熱性けいれん
                              <input type="checkbox">
                              <span class="checkmark"></span>
                            </label>
                            <label class="container-checkbox ms-5">
                              脱臼
                              <input type="checkbox">
                              <span class="checkmark"></span>
                            </label>
                            <label class="container-checkbox ms-5">
                              喘息
                              <input type="checkbox">
                              <span class="checkmark"></span>
                            </label>
                          </div>
                          <div class="mt-4">
                            <label class="container-checkbox">
                              心臓疾患
                              <input type="checkbox">
                              <span class="checkmark"></span>
                            </label>
                            <label class="container-checkbox ms-5">
                              ヘルニア
                              <input type="checkbox">
                              <span class="checkmark"></span>
                            </label>
                            <label class="container-checkbox ms-5">
                              花粉症
                              <input type="checkbox">
                              <span class="checkmark"></span>
                            </label>
                            <label class="container-checkbox ms-5">
                              その他
                              <input type="checkbox">
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
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
                        <div class="p-2">
                          <input type="radio" name="rad5" checked>
                          <label class="ms-2">ない</label>
                          <input type="radio" name="rad5" class="ms-5">
                          <label class="ms-2">あり</label>
                        </div>
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
                        <div class="p-2">
                          <input type="radio" name="rad6" checked>
                          <label class="ms-2">ない</label>
                          <input type="radio" name="rad6" class="ms-5">
                          <label class="ms-2">あり</label>
                        </div>
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
                        <div class="p-2">
                          <input type="radio" name="rad7">
                          <label class="ms-2">ない</label>
                          <input type="radio" name="rad7" class="ms-5" checked>
                          <label class="ms-2">あり</label>
                          <span class="ms-5"><span class="color-kigaruni-pink">■</span>反応の出る食品名・アレルゲン物質・病状：</span>
                          <div class="text-end d-flex justify-content-end">
                            <div class="border border-2 py-5 mt-2 w-50">

                            </div>
                          </div>
                        </div>
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
                  <router-link :to="{name:'Mypage.ChildQuestionnaire'}">
                    <button class="border border-dark bg-white text-dark px-5 py-2">戻る</button>
                  </router-link>
                  <button class="ms-5 exy-default-btn px-5 py-2"
                  >保存
                  </button>
                </div>
              </div>
            </div>
          </form>
        </ValidationObserver>
        <!-- /tab content -->
      </div>
      <!-- /right column -->
    </div>
  </div>
</template>

<script>
// imports
import router from "../../router";
import Frontend from "../../layouts/Frontend";
import store from "@/store";
import axios from "@/axios";

export default {
  name: "ChildQuestionnaireEdit",
  created() {
    this.$emit('update:layout', Frontend);
    /* --- user details --- */
    this.getParentLatestData();
  },
  data() {
    return {
      sideNavActive: 3,
      activeTab: 0,
      formData: [],
      user: [],
      childrens: [],
      ordinalTitle: store.state.parentRegParams.ordinalTitle,
    }
  },
  components: {

  },
  methods: {
    getParentLatestData() {
      this.isLoadingshow = true;
      axios.get('/parent').then((res) => {
        this.isLoadingshow = false;
        this.user = res.data;
        this.childrens = res.data.details.childrens;
        console.log(this.user);
      }).catch(error => {
        this.isLoadingshow = false;
        this.checkError(error)
      });
    },
    childAddFormSubmit() {
      console.log(this.formData);
    },
    getAge(dateString) {
      let today = new Date();
      let birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
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

<style scoped>
.children_questionnaires_edit .tabs {
  overflow: scroll;
  width: 1046px;
}

.children_questionnaires_edit .tabs .nav-item {
  width: 15%;
}

.is-danger {
  color: #f22435;
}
</style>
