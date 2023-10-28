<template>
  <div class="my-page-chat">
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <div class="row m-0 pb-3 border-dee2e6 border-bottom fw-bold text-xl ps-5">
      トーク
    </div>
    <div class="row m-0">
      <div class="col-md-3">
        <div class="row border-dee2e6 border border-1 p-2">
          <input type="text" class="form-control mb-2" value="園児検索">
          <select name="" id="" class="form-select">
            <option value="">全体</option>
          </select>
        </div>
        <!-- <div class="accordion p-0" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div> -->
        <div class="row">
          <button class="accordion-button accordion-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            キガルニホイク
          </button>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="row border-dee2e6 border border-top-0 me-1 py-2">
              <div class="col-md-2">
                <img src="../../assets/images/admin/ID1618126_m.png" alt="EXY">
              </div>
              <div class="col-md-8 text-xs my-auto">
                土井 まひる 
              </div>
              <div class="col-md-2 my-auto">
                <span class="text-base fw-bold span-1 px-2 py-1">1</span>
              </div>
            </div>
            <div class="row border-dee2e6 border border-top-0 me-1 py-2">
              <div class="col-md-2">
                <img src="../../assets/images/admin/ID1639265_m.png" alt="EXY">
              </div>
              <div class="col-md-10 text-xs my-auto">
                久保 恵子 
              </div>
            </div>
            <div class="row border-dee2e6 border border-top-0 me-1 py-2">
              <div class="col-md-2">
                <img src="../../assets/images/admin/ID4732823_m.png" alt="EXY">
              </div>
              <div class="col-md-10 text-xs my-auto">
                山田 裕司 
              </div>
            </div>
            <div class="row border-dee2e6 border border-top-0 me-1 py-2">
              <div class="col-md-2">
                <img src="../../assets/images/admin/tanaphong-toochinda-GagC07wVvc.png" alt="EXY">
              </div>
              <div class="col-md-10 text-xs my-auto">
                渡辺 恵梨香
              </div>
            </div>
            <div class="row border-dee2e6 border border-top-0 me-1 py-2">
              <div class="col-md-2">
                <img src="../../assets/images/admin/ID3543293_m.png" alt="EXY">
              </div>
              <div class="col-md-10 text-xs my-auto">
                哀川 七瀬
              </div>
            </div>
            <div class="row border-dee2e6 border border-top-0 me-1 py-2">
              <div class="col-md-2">
                <img src="../../assets/images/admin/ID34877021_m.png" alt="EXY">
              </div>
              <div class="col-md-10 text-xs my-auto">
                安達 司
              </div>
            </div>
            <div class="row border-dee2e6 border border-top-0 me-1 py-2">
              <div class="col-md-2">
                <img src="../../assets/images/admin/ID3265447_m.png" alt="EXY">
              </div>
              <div class="col-md-10 text-xs my-auto">
                上田 美優
              </div>
            </div>
            <div class="row border-dee2e6 border border-top-0 me-1 py-2">
              <div class="col-md-2">
                <img src="../../assets/images/admin/ID3795565_m.png" alt="EXY">
              </div>
              <div class="col-md-10 text-xs my-auto">
                白川 透
              </div>
            </div>
            <div class="row border-dee2e6 border border-top-0 me-1 py-2">
              <div class="col-md-2">
                <img src="../../assets/images/admin/ID4041839_m.png" alt="EXY">
              </div>
              <div class="col-md-10 text-xs my-auto">
                進藤 二郎
              </div>
            </div>
            <div class="row border-dee2e6 border border-top-0 me-1 py-2">
              <div class="col-md-2">
                <img src="../../assets/images/admin/ID2266338_m.png" alt="EXY">
              </div>
              <div class="col-md-10 text-xs my-auto">
                高畑 洋子
              </div>
            </div>
          </div>
          <button class="accordion-button accordion-2 mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            キガルニホイクシ
          </button>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">

          </div>
          <button class="accordion-button accordion-3 mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            キガルニホイクシ
          </button>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">

          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row border-dee2e6 border-bottom py-2">
          <div class="col-md-1 text-center">
            <img src="../../assets/images/admin/ID1618126_m.png" alt="EXY">
          </div>
          <div class="col-md-11 text-xl my-auto fw-bold">土井 まひる</div>
        </div>
        <div class="row border-dee2e6 border border-top-0 py-2">
          <div class="col-md-12">
            <div class="row py-2">
              <p class="text-center"><span class="fw-bold px-5 py-2 span-2">2月10日(水)</span></p>
            </div>
            <div class="row px-3">
              <div class="col-md-1 ">
                <img src="../../assets/images/admin/ID1618126_m_fq.png" alt="EXY">
              </div>
              <div class="col-md-9 ps-4">
                <div class="row border-color-707070 border border-1 py-3 mt-3 ps-3 bg-fafafa">
                  【月極保育】ご予約のリクエストがはいりました。
                </div>
              </div>
              <div class="col-md-2"></div>
            </div>
            <div class="row px-3 pb-5">
              <div class="col-md-1 "></div>
              <div class="col-md-9 ps-4">
                <div class="row border-bebebe border border-1 py-3 mt-4 bg-fafafa">
                  <p>
                    現時点では、ご予約は【まだ確定しておりません】。<br>
                    ３営業日以内にユーザー様へご連絡をお願いいたします。
                  </p>
                  <p class="mt-2">
                    ——————————————————————— <br>
                    予約内容 <br>
                    ——————————————————————— <br>
                    プラン <span class="px-3">｜</span> 通常プラン <span class="px-3">｜</span>  １歳児・２歳児 <br>
                    オプション <span class="px-3">｜</span> 手ぶらプラン <br>
                    入園希望日 <span class="px-3">｜</span> 2021年4月1日 <br>
                    来園希望日 <span class="px-3">｜</span> <br>
                    ・月 <span class="px-3">:</span> 09：00 〜 17：00 <br>
                    ・火 <span class="px-3">:</span> 09：00 〜 17：00 <br>
                    ・水 <span class="px-3">:</span> 09：00 〜 17：00 <br>
                    ・木 <span class="px-3">:</span> 09：00 〜 17：00 <br>
                    ・金 <span class="px-3">:</span> 09：00 〜 17：00 <br>
                    ・土 <span class="px-3">:</span> 09：00 〜 17：00 <br>
                    ・日 <span class="px-3">:</span> 09：00 〜 17：00
                  </p>
                  <p class="mt-2">
                    利用者 <span class="px-3">｜</span> <br>
                    １. 土井 誠也 （令和2年2月25日生（満１歳）、男児、アレルギー疾患：有）<br>
                    送迎者 <span class="px-3">｜</span><br>
                    １．土井 まひる （族柄：母、携帯番号：090-0000-0000）<br>
                    ２．土井 裕司 （族柄：父、携帯電話：080-0000-0000）<br>
                    緊急時連絡先（追加） <span class="px-3">｜</span> <br>
                    １．土井 洋一 （族柄：祖父、携帯番号：090-0000-0000）
                  </p>
                  <p class="mt-2">
                    アンケート <span class="px-3">｜</span> <br>
                    ▶︎アレルギー：あり 備考：卵アレルギーがあります <br>
                    ▶︎おやつ：あり <br>
                    ▶︎ミルク：なし <br>
                    ▶︎給食：なし <br>
                    ▶︎離乳食のすすみ具合：柔らかく煮たブロッコリーをお昼ごはんに食べています。それ以外はまだ食べられません。（好き嫌いかも…？）
                  </p>
                  <p class="mt-2">
                    この保育園に行くのは初めてですか？ <span class="px-3">｜</span> <br>
                    園見学に行ったことがある
                  </p>
                  <p class="mt-2">
                    備考 <span class="px-3">｜</span> <br>
                    【園に伝えておきたいことなどを自由にご記入ください】親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰
                  </p>
                  <p class="mt-2">
                    お支払い方法 <span class="px-3">｜</span> クレジット支払い <br>
                    ※お支払い方法は、保育完了後でも変更することができます。
                  </p>
                  <p class="mt-2">
                    お支払い予定価格 <span class="px-3">｜</span> 69,200円 <br>
                    獲得予定ポイント <span class="px-3">｜</span> 692ポイント <br>
                    ———————————————————————
                  </p>
                </div>
              </div>
              <div class="col-md-2 position-relative">
                <p class="position-absolute bottom-0 m-0">12.30</p>
              </div>
            </div>
            <div class="row px-3 bg-light p-3 mt-5">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <img src="../../assets/images/svg/file.svg" alt="EXY">
                    <a data-bs-toggle="modal" data-bs-target="#thisPageModal1"><img src="../../assets/images/svg/chat.svg" alt="EXY" class="ps-4"></a>
                  </div>
                  <div class="col-md-6 text-right">
                    <img src="../../assets/images/svg/send.svg" alt="EXY">
                  </div>
                </div>
                <div class="row">
                  <textarea name="" id=""  rows="10"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="thisPageModal1" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-center fw-bold text-2xl" id="thisPageModal">定型文</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
              </div>
              <div class="modal-body px-4">
                <div class="row border-dee2e6 border border-1 py-2">
                  <p class="fw-bold text-lg">予約確定</p>
                  <p class="m-0">【月極保育】ご予約が確定いたしました。—————————{Nickname}様 この度は当園にご予約いただきまして誠にありがとうございます。いただきました内容でご予約を賜りましたのでお知らせいたします。下記…</p>
                </div>
                <div class="row border-dee2e6 border border-top-0 py-2">
                  <p class="fw-bold text-lg">予約日変更のお願い</p>
                  <p class="m-0">{Nickname}様 この度は当園にご予約いただきまして誠にありがとうございます。さて、いただきましたご予約でございますが、申し訳ございません、ご希望のお日にちが満員となっております。{Nickname}様がよろしけ…</p>
                </div>
                <div class="row border-dee2e6 border border-top-0 py-2">
                  <p class="fw-bold text-lg">予約不可</p>
                  <p class="m-0">{Nickname}様 この度は当園にご予約いただきまして誠にありがとうございます。さて、いただきましたご予約でございますが、ご希望のお日にちが満員となっております。ご希望に添えない結果となり、誠に申し訳ござ…</p>
                </div>
              </div>
              <div class="modal-footer">
                <router-link
                    type="button"
                    class="w-100 btn-1 fw-bold py-2 text-center"
                    :to="{name:'Admin.FixedPhraseSetting'}"
                    aria-label="Close"
                >
                  定型文を作成
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../components/adminPartials/Breadcrumb"
import Admin from "../../layouts/Admin";
export default {
  name: "MyPageChat",
  created() {
    this.$emit('update:layout', Admin)
  },
  components: {
    Breadcrumb
  },
  data() {
    return {
      dataPageName: "トーク"
    }
  }
}
</script>
<style scoped>

</style>