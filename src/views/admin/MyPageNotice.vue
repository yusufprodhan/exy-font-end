<template>
  <div class="my-page-notice">
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <div class="row m-0 w-100 pb-3 px-3 border-dee2e6 border-bottom">
      <div class="col-md-7 ps-5 text-xl fw-bold my-auto">お知らせ</div>
      <div class="col-md-5">
        <input type="text" class="form-control search" placeholder="メールを検索">
      </div>
    </div>
    <div class="row m-0 border-dee2e6 border-top">
      <div class="col-md-3 pt-2 left-col">
        <div class="row py-2 me-2">
          <p @click="activeTab=1, subTab=1" :class="[ activeTab === 1 ? 'active' : '' ]" class="m-0 py-2 ps-4"> <i class="fa fa-inbox pe-1" aria-hidden="true"></i> お知らせ一覧</p>
        </div>
        <div class="row py-2 me-2">
          <p @click="activeTab=2, subTab=1" :class="[ activeTab === 2 ? 'active' : '' ]" class="m-0 py-2 ps-4"><img v-if="activeTab != 2" src="../../assets/images/svg/tab-peter.svg" alt="EXY"> <img v-if="activeTab === 2" src="../../assets/images/svg/tab-peter-red.svg" alt="EXY"> キガルニホイクから のお知らせ</p>
        </div>
        <div class="row py-2 me-2">
          <p @click="activeTab=3, subTab=1" :class="[ activeTab === 3 ? 'active' : '' ]" class="m-0 py-2 ps-4"> <img v-if="activeTab != 3" src="../../assets/images/svg/tab-user.svg" alt="EXY"> <img v-if="activeTab === 3" src="../../assets/images/svg/tab-user-red.svg" alt="EXY"> キガルニホイクシ からのお知らせ</p>
        </div>
        <div class="row py-2 me-2">
          <p @click="activeTab=4, subTab=1" :class="[ activeTab === 4 ? 'active' : '' ]" class="m-0 py-2 ps-4"> <img v-if="activeTab != 4" src="../../assets/images/svg/tab-notice.svg" alt="EXY"> <img v-if="activeTab === 4" src="../../assets/images/svg/tab-notice-red.svg" alt="EXY"> 運営からのお知らせ</p>
        </div>
      </div>
      <div v-if="activeTab===1" class="col-md-9 right-col text-base">
        <div v-if="subTab===1">
          <div class="row border-dee2e6 border border-top-0 py-3">
            <div class="col-md-6 ps-4 my-auto"><img src="../../assets/images/svg/rotate-right.svg" alt="EXY"></div>
            <div class="col-md-6">
              <p class="m-0 text-right pe-4">1-50 / 200件 <span class="ps-4 pt-3"><i class="fa fa-angle-left text-2xl pe-4 color-707070" aria-hidden="true"></i> <i class="fa fa-angle-right text-2xl color-707070" aria-hidden="true"></i></span></p>
            </div>
          </div>
          <div @click="subTab=2" class="row border-dee2e6 border border-top-0 py-3 me-1">
            <div class="col-md-3">
              <p class="m-0 ps-2 fw-bold">キガルニホ... <span class="pull-right span-1 px-3 pt-2 pb-1 text-xs fw-normal">新着</span></p>
            </div>
            <div class="col-md-8 fw-bold">【一時保育のリクエストがはいりました】 <span class="color-707070">- 現時点では、ご予約は【...</span></div>
            <div class="col-md-1 fw-bold text-xs my-auto text-right">16:47</div>
          </div>
          <div @click="subTab=2" class="row border-dee2e6 border border-top-0 py-3 me-1">
            <div class="col-md-3">
              <p class="m-0 ps-2 fw-bold">運営 <span class="pull-right span-1 px-3 pt-2 pb-1 text-xs fw-normal">新着</span></p>
            </div>
            <div class="col-md-8 fw-bold">【完了報告内容が修正されました】<span class="color-707070">- 平素よりキガルニホイクをご利… </span></div>
            <div class="col-md-1 fw-bold text-xs my-auto text-right">10:00</div>
          </div>
          <div class="row border-dee2e6 border border-top-0 py-3 me-1">
            <div class="col-md-3">
              <p class="m-0 ps-2 fw-bold">キガルニホイクシ</p>
            </div>
            <div class="col-md-8 fw-bold">【保育マッチにお問い合わせがありました】<span class="color-707070">- 保育マッチにて当園に... </span></div>
            <div class="col-md-1 fw-bold text-xs my-auto text-right">7月1日</div>
          </div>
          <div @click="subTab=2" class="row border-dee2e6 border border-top-0 py-3 me-1">
            <div class="col-md-3">
              <p class="m-0 ps-2 fw-bold">キガルニホイク</p>
            </div>
            <div class="col-md-8 fw-bold">【口コミがありました】<span class="color-707070">- ユーザー様から貴園の口コミがありました…</span></div>
            <div class="col-md-1 fw-bold text-xs my-auto text-right">6月21日</div>
          </div>
          <div class="row border-dee2e6 border border-top-0 py-3 me-1">
            <div class="col-md-3">
              <p class="m-0 ps-2 fw-bold">運営</p>
            </div>
            <div class="col-md-8 fw-bold">【システムメンテナンスのお知らせ<span class="color-707070">- 平素よりキガルニホイクをご利用...</span></div>
            <div class="col-md-1 fw-bold text-xs my-auto text-right">5月5日</div>
          </div>
          <div @click="subTab=2" class="row border-dee2e6 border border-top-0 py-3 me-1">
            <div class="col-md-3">
              <p class="m-0 ps-2 fw-bold">キガルニホイク</p>
            </div>
            <div class="col-md-8 fw-bold">【【支払い完了のお知らせ】<span class="color-707070">- 田中花子さんが７月７日保育利用料の支払…</span></div>
            <div class="col-md-1 fw-bold text-xs my-auto text-right">4月14日</div>
          </div>
          <div class="row border-dee2e6 border border-top-0 py-3 me-1 bg-f2f2f2">
            <div class="col-md-3">
              <p class="m-0 ps-2 fw-bold">キガルニホイク</p>
            </div>
            <div class="col-md-8 fw-bold">【一時保育のリクエストがはいりました】<span class="color-707070">- 現時点では、ご予約は【...</span></div>
            <div class="col-md-1 fw-bold text-xs my-auto text-right">4月9日</div>
          </div>
          <div class="row border-dee2e6 border border-top-0 py-3 me-1 bg-f2f2f2">
            <div class="col-md-3">
              <p class="m-0 ps-2 fw-bold">運営</p>
            </div>
            <div class="col-md-8">システムメンテナンスのお知らせ <span class="color-707070"> - 平素よりキガルニホイクをご利用..</span></div>
            <div class="col-md-1 fw-bold text-xs my-auto text-right">2月10日</div>
          </div>
          <div class="row border-dee2e6 border border-top-0 py-3 me-1 bg-f2f2f2">
            <div class="col-md-3">
              <p class="m-0 ps-2 fw-bold">キガルニホイクシ</p>
            </div>
            <div class="col-md-8">【保育マッチにお問い合わせがありました】 <span class="color-707070"> - 保育マッチにて当園に...</span></div>
            <div class="col-md-1 fw-bold text-xs my-auto text-right">2020/12/31</div>
          </div>
          <div class="row border-dee2e6 border border-top-0 py-3 me-1 bg-f2f2f2">
            <div class="col-md-3">
              <p class="m-0 ps-2 fw-bold">キガルニホイク</p>
            </div>
            <div class="col-md-8">【口コミがありました】 <span class="color-707070"> - ユーザー様からと貴園の口コミがありまし…</span></div>
            <div class="col-md-1 fw-bold text-xs my-auto text-right">2020/12/24</div>
          </div>
        </div>
        <div v-if="subTab===2">
          <div class="row py-3">
            <div class="col-md-6 ps-4 my-auto text-xl color-707070"><a @click="subTab=1"><i class="fa fa-arrow-left pe-2" aria-hidden="true"></i></a> <i class="fa fa-trash ps-4"></i></div>
            <div class="col-md-6">
              <p class="m-0 text-right pe-4">1 / 200件 <span class="ps-5 pt-3"><i class="fa fa-angle-left text-2xl pe-4 color-707070" aria-hidden="true"></i> <i class="fa fa-angle-right text-2xl color-707070" aria-hidden="true"></i></span></p>
            </div>
          </div>
          <div class="row border-dee2e6 border border-1 py-3 me-1 ps-4 bg-fafafa">
            <p class="m-0 ps-2 fw-bold">【一時保育のリクエストがはいりました】 <span class="ms-5 span-1 px-3 pt-2 pb-1 text-xs fw-normal">新着</span></p>
          </div>
          <div class="row border-dee2e6 border border-top-0 py-3 me-1 ps-4 color-707070 bg-fafafa">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-1">受信日時</div>
                <div class="col-md-11">2021/06/10（木）<span class="ps-3">16:47</span></div>
              </div>
              <div class="row mt-1">
                <div class="col-md-1">From</div>
                <div class="col-md-11">畑中 ゆい</div>
              </div>
            </div>
          </div>
          <div class="row border-dee2e6 border border-top-0 py-3 me-1 ps-4 bg-fafafa pb-5">
            <p class="">
              現時点では、ご予約は【まだ確定しておりません】。<br>
              ３営業日以内にユーザー様へご連絡をお願いいたします。
            </p>
            <p class="m-0 mt-1">
              ——————————————————————— <br>
              予約内容 <br>
              ———————————————————————
            </p>
            <p class="mt-1">
              プラン <span class="px-3">｜</span>体験保育 <span class="px-3">｜</span> １歳児以上 <br>
              オプション<span class="px-3">｜</span>その他費用 <span class="px-3">｜</span>お給食、その他費用 <span class="px-3">｜</span>  おやつ <br>
              希望日<span class="px-3">｜</span>2021年6月14日（月）<br>
              希望日時間<span class="px-3">｜</span>09：00 〜 17：00（8h）
            </p>
            <p class="mt-2">
              利用者<span class="px-3">｜</span> <br>
              １. 畑中 雄也（令和2年2月25日生（満１歳）、男児、アレルギー疾患：有）<br>
              送迎者<span class="px-3">｜</span><br>
              １．畑中 ゆい（族柄：母、携帯番号：090-0000-0000）<br>
              ２．畑中 翔也（族柄：父、携帯電話：080-0000-0000）<br>
              緊急時連絡先（追加）<span class="px-3">｜</span><br>
              １．土屋 高尾（族柄：祖父、携帯番号：090-0000-0000）
            </p>
            <p class="mt-2">
              アンケート <span class="px-3">｜</span> <br>
              ▶︎アレルギー：あり 備考：卵アレルギーがあります <br>
              ▶︎おやつ：あり <br>
              ▶︎ミルク：なし <br>
              ▶︎給食：あり <br>
              ▶︎離乳食のすすみ具合：柔らかく煮たブロッコリーをお昼ごはんに食べています。それ以外はまだ食べられません。（好き嫌いかも…？）
            </p>
            <p class="mt-2">
              この保育園に行くのは初めてですか？ <span class="px-3">｜</span> <br>
              園見学に行ったことがある
            </p>
            <p class="mt-2">
              備考 <span class="px-3">｜</span> <br>
            【園に伝えておきたいことなどを自由にご記入ください】親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降り 一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級 の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが きな眼をして二階ぐらいから飛び降りて腰
            </p>
            <p class="mt-4">
              お支払い方法<span class="px-3">｜</span>クレジット支払い <br>
              ※お支払い方法は、保育完了後でも変更することができます。
            </p>
            <p class="mt-2">
              お支払い予定価格 <span>｜</span> 69,200円 <br>
              獲得予定ポイント <span>｜</span> 692ポイント <br>
              ———————————————————————
            </p>
            <p class="mt-4">
              ▼トーク画面に移動する <br>
              <a href="" class="text-decoration-underline color-0066c0">Https://www.kigarunihoiku.jp/talk/1234567890123</a>
            </p>
            <p class="mt-2 mb-5">
              ▼空き状況を確認する <br>
              <a href="" class="text-decoration-underline color-0066c0">Https://www.kigarunihoiku.jp/talk/1234567890123</a>
            </p>
          </div>
        </div>
      </div>
      <div v-if="activeTab===2" class="col-md-9 right-col text-base">
        <div class="row border-dee2e6 border border-top-0 py-3">
          <div class="col-md-6 ps-4 my-auto"><img src="../../assets/images/svg/rotate-right.svg" alt="EXY"></div>
          <div class="col-md-6">
            <p class="m-0 text-right pe-4">1-50 / 200件 <span class="ps-4 pt-3"><i class="fa fa-angle-left text-2xl pe-4 color-707070" aria-hidden="true"></i> <i class="fa fa-angle-right text-2xl color-707070" aria-hidden="true"></i></span></p>
          </div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-3 me-1">
          <div class="col-md-3">
            <p class="m-0 ps-2 fw-bold">キガルニホ... <span class="pull-right span-1 px-3 pt-2 pb-1 text-xs fw-normal">新着</span></p>
          </div>
          <div class="col-md-8 fw-bold">【一時保育のリクエストがはいりました】 <span class="color-707070"> - 現時点では、ご予約は【...</span></div>
          <div class="col-md-1 fw-bold text-xs my-auto text-right">16:47</div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-3 me-1">
          <div class="col-md-3">
            <p class="m-0 ps-2 fw-bold">キガルニホ... <span class="pull-right span-1 px-3 pt-2 pb-1 text-xs fw-normal">新着</span></p>
          </div>
          <div class="col-md-8 fw-bold">【システムメンテナンスのお知らせ<span class="color-707070"> - 平素よりキガルニホイクをご利用... </span></div>
          <div class="col-md-1 fw-bold text-xs my-auto text-right">10:00</div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-3 me-1">
          <div class="col-md-3">
            <p class="m-0 ps-2 fw-bold">キガルニホイク</p>
          </div>
          <div class="col-md-8 fw-bold">【【口コミがありました】<span class="color-707070">- ユーザー様からと貴園の口コミがありまし… </span></div>
          <div class="col-md-1 fw-bold text-xs my-auto text-right">6月21日</div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-3 me-1">
          <div class="col-md-3">
            <p class="m-0 ps-2 fw-bold">キガルニホイク</p>
          </div>
          <div class="col-md-8 fw-bold">【支払い完了のお知らせ】-<span class="color-707070">田中花子さんが７月７日保育利用料の支払…</span></div>
          <div class="col-md-1 fw-bold text-xs my-auto text-right">4月14日</div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-3 me-1 bg-f2f2f2">
          <div class="col-md-3">
            <p class="m-0 ps-2 fw-bold">キガルニホイク</p>
          </div>
          <div class="col-md-8">【一時保育のリクエストがはいりました】<span class="color-707070">- 現時点では、ご予約は【...</span></div>
          <div class="col-md-1 fw-bold text-xs my-auto text-right">4月9日</div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-3 me-1 bg-f2f2f2">
          <div class="col-md-3">
            <p class="m-0 ps-2 fw-bold">キガルニホイク</p>
          </div>
          <div class="col-md-8">【口コミがありました】 <span class="color-707070">  - ユーザー様からと貴園の口コミがありまし…</span></div>
          <div class="col-md-1 fw-bold text-xs my-auto text-right">2020/12/24</div>
        </div>
      </div>
      <div v-if="activeTab===3" class="col-md-9 right-col text-base">
        <div class="row border-dee2e6 border border-top-0 py-3">
          <div class="col-md-6 ps-4 my-auto"><img src="../../assets/images/svg/rotate-right.svg" alt="EXY"></div>
          <div class="col-md-6">
            <p class="m-0 text-right pe-4">1-50 / 200件 <span class="ps-4 pt-3"><i class="fa fa-angle-left text-2xl pe-4 color-707070" aria-hidden="true"></i> <i class="fa fa-angle-right text-2xl color-707070" aria-hidden="true"></i></span></p>
          </div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-3 me-1">
          <div class="col-md-3">
            <p class="m-0 ps-2 fw-bold">キガルニホイクシ</p>
          </div>
          <div class="col-md-8 fw-bold">【【保育マッチにお問い合わせがありました】<span class="color-707070"> - 保育マッチにて当園に..</span></div>
          <div class="col-md-1 fw-bold text-xs my-auto text-right">7月1日</div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-3 me-1 bg-f2f2f2">
          <div class="col-md-3">
            <p class="m-0 ps-2 fw-bold">キガルニホイクシ</p>
          </div>
          <div class="col-md-8">【保育マッチにお問い合わせがありました】<span class="color-707070">- 保育マッチにて当園に...</span></div>
          <div class="col-md-1 fw-bold text-xs my-auto text-right">2020/12/31</div>
        </div>
      </div>
      <div v-if="activeTab===4" class="col-md-9 right-col text-base">
        <div class="row border-dee2e6 border border-top-0 py-3">
          <div class="col-md-6 ps-4 my-auto"><img src="../../assets/images/svg/rotate-right.svg" alt="EXY"></div>
          <div class="col-md-6">
            <p class="m-0 text-right pe-4">1-50 / 200件 <span class="ps-4 pt-3"><i class="fa fa-angle-left text-2xl pe-4 color-707070" aria-hidden="true"></i> <i class="fa fa-angle-right text-2xl color-707070" aria-hidden="true"></i></span></p>
          </div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-3 me-1">
          <div class="col-md-3">
            <p class="m-0 ps-2 fw-bold">運営 <span class="pull-right span-1 px-3 pt-2 pb-1 text-xs fw-normal">新着</span></p>
          </div>
          <div class="col-md-8 fw-bold">【完了報告内容が修正されました】<span class="color-707070"> - 平素よりキガルニホイクをご利…</span></div>
          <div class="col-md-1 fw-bold text-xs my-auto text-right">10:00</div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-3 me-1">
          <div class="col-md-3">
            <p class="m-0 ps-2 fw-bold">運営</p>
          </div>
          <div class="col-md-8 fw-bold">システムメンテナンスのお知らせ<span class="color-707070">- 平素よりキガルニホイクをご利用...</span></div>
          <div class="col-md-1 fw-bold text-xs my-auto text-right">5月5日</div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-3 me-1 bg-f2f2f2">
          <div class="col-md-3">
            <p class="m-0 ps-2 fw-bold">運営</p>
          </div>
          <div class="col-md-8">システムメンテナンスのお知らせ<span class="color-707070"> - 平素よりキガルニホイクをご利用..</span></div>
          <div class="col-md-1 fw-bold text-xs my-auto text-right">2月10日</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../components/adminPartials/Breadcrumb"
import Admin from "../../layouts/Admin";
export default {
  name: "MyPageNotice",
  created() {
    this.$emit('update:layout', Admin)
  },
  components: {
    Breadcrumb
  },
  data() {
    return {
      dataPageName: "お知らせ",
      activeTab: 1,
      subTab: 2,
    }
  }
}
</script>
<style scoped>

</style>