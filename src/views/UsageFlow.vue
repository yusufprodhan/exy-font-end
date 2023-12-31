<template>
  <div class="usage-flow">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{name:'HowToUseKigarniHoik'}">キガルニホイクの使い方</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">ご利用の流れ</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container">
      <div class="header text-center my-5">
        <h4 class="position-relative text-base fw-bold d-inline-block">ご利用の流れ</h4>
      </div>

      <div class="bg-light px-5 p-4">
        <h2 class="text-center mb-3  text-2xl">
          <img src="../assets/images/svg/title-left.svg" alt="EXY" class="mb-2">
          <span class="px-3">はじめての方へ</span>
          <img src="../assets/images/svg/title-right.svg" alt="EXY" class="mb-2">
        </h2>

        <p class="m-0">キガルニホイクは、従来の保育園探しとは違い、自分に合う保育園をWEBサイトで探し、WEBサイトから保育をお願いすることができます。会員登録をすれば、「保育園検索」「保育園予約」「子育て相談」「話題の子育て情報ゲット」ができますよ！</p>
        <p>お子さまには素敵な保育体験、パパ・ママには素敵なリフレッシュタイムを♪登録無料で始めてみましょう！</p>
      </div>
    </div>

    <!-- Steps start -->
    <section class="steps">
      <div class="container">

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center position-relative">
            <span class="d-inline-block py-1">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">1</div>
          </div>
          <div class="step-content border border-color-707070 mt-3">
            <h5 class="mb-3 text-2xl">ご登録</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/usage-flow/3959.png" alt="EXY">
              <div class="content">
                <a href="#">１．アカウントの作成</a>
                <p>メールアドレスで簡単に登録できます。登録後、メールが届きますのでメールの指示に従い、次のステップにお進みください。</p>
              </div>
            </div>
            <div class="d-flex text-secondary font-weight-light my-4">
              <img src="../assets/images/usage-flow/3922.png" alt="EXY">
              <div class="content">
                <a href="#">２．プロフィールの登録</a>
                <p>お子さまと保護者さまのプロフィールをご登録ください。安心安全に保育園をご利用いただくために、情報は正確にご記入いただきますようお願いいたします。</p>
              </div>
            </div>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/usage-flow/3935.png" alt="EXY">
              <div class="content">
                <a href="#">３．本人確認書類などの登録</a>
                <p>月極保育・体験保育ご予約をご予定の方は、本人確認書類(※1)のご登録をお願いいたします。（園見学予約をご予定の方は、本人確認書類等の登録は必要ありません。）
                  書類登録には審査期間があります。</p>
                <p>※本人確認書類は、免許証・パスポート(2020年1月末まで発行のものに限る)・保険証など現住所が確認できるもの、またお子さまの本人確認として母子手帳が必要です。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center position-relative">
            <span class="d-inline-block py-1">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">2</div>
          </div>
          <div class="step-content border border-color-707070">
            <h5 class="mb-3 text-2xl">保育園をさがす</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/usage-flow/4409.png" alt="EXY">
              <div class="content">
                <p>会員登録が完了後はすぐに、園見学のご予約や、子育て相談コーナーのご利用が可能です。
                  なお、体験保育（一時保育）や月極保育のご予約に関しては、本人確認書類の登録完了後にご利用可能となります。</p>
              </div>
            </div>
            <div class="text-secondary font-weight-light">
              <h5 class="bg-gradient-ib">まずは気になる保育園をみつけましょう！</h5>
              <p class="text-base">実際の保育に関するコラム記事や、過去のご利用者様からの口コミを参考に、リアルな保育内容をみてから予約進むことができます。</p>
              <p class="text-base">また、<a href="#">体験保育（一時保育）</a> は園見学とは異なり、実際の保育を体験することができるので、お子さまの感想を聞いてから、月極保育の予約をすることが可能です。</p>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center position-relative">
            <span class="d-inline-block py-1">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">3</div>
          </div>
          <div class="step-content border border-color-707070">
            <h5 class="mb-3 text-2xl">予約する</h5>
            <div class="d-flex text-secondary font-weight-light mb-4">
              <img src="../assets/images/usage-flow/3947.png" alt="EXY">
              <div class="content">
                <a href="#">１．予約リクエスト</a>
                <p class="text-sm">希望条件と合致した保育園に、予約リクエストを送ります。</p>
                <p class="text-sm">保育園の予約には、「体験保育（一時保育）予約」「月極保育予約」「園見学予約」があり、全ての予約で予約リクエストを行います。</p>
                <p class="mt-2 text-sm">※体験保育（一時保育）または月極保育の予約を進めるには、本人確認書類・お支払い情報などの、事前登録が必須の条項がございます。</p>
                <p class="text-sm">詳しくは、予約前の必須登録情報をご確認ください。</p>
              </div>
            </div>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/usage-flow/3953.png" alt="EXY">
              <div class="content">
                <a href="#">２．予約確定</a>
                <p class="text-sm">予約リクエストを送ると、登録メールアドレスに保育園から予約の可否に関するメッセージの通知が届きます。</p>
                <p class="text-sm">「予約確定」の場合、マイページにて承認作業を行ってください。</p>
                <p class="text-sm">保育園の状況によっては、日時変更のお願いや、お断りのメッセージが届く場合がありますので、予約リクエスト後は必ずメールの通知をご確認ください。</p>
                <p class="my-4 text-sm">※一定時間内に予約確定の承認がない場合は、自動キャンセルとなりますのでご注意ください。</p>
              </div>
            </div>
            <h4 class="mb-3">予約は全部で３種類</h4>
            <div class="box-content">
              <div class="left-content">
                <strong>体験保育予約</strong>
                <div>（一時保育予約）</div>
              </div>
              <div class="right-content">
                <p>「月極保育を利用する前に、うちの子がこの園の雰囲気に合うか知りたい」というときや、子どもを連れていけない予定のとき、リフレッシュしたいとき、などなど、どのようなシーンでもスポット的にお子さまをお預けいただけます。</p>
                <div class="text-end">
                  <router-link class="m-0" :to="{name:'guide', params:{active:'experience-childcare-reservation'}}">体験保育予約の流れ ＞</router-link>
                </div>
              </div>
            </div>
            <div class="box-content my-4">
              <div class="left-content">
                <strong>月極保育予約</strong>
              </div>
              <div class="right-content">
                <p>月単位でお子さまをお預けいただけます。</p>
                <p>月単位なので生活スタイルに合わせて柔軟に対応することが可能です。</p>
                <p>※保育園の利用履歴によっては、月極保育予約前に【体験保育（一時保育）や園見学】をお願いする場合がございます。</p>
                <div class="text-end">
                  <router-link class="m-0" :to="{name:'guide', params:{active:'monthly-childcare'}}">月極保育予約の流れ ＞</router-link>
                </div>
              </div>
            </div>
            <div class="box-content">
              <div class="left-content">
                <strong>園見学予約</strong>
              </div>
              <div class="right-content">
                <p>保育園を利用する前に、事前に園内の見学をしていただけます。</p>
                <p>実際の保育を見て、直接ご質問やご相談していただくことが可能です。</p>
                <p>大切なお子さまをより安心してお預けいただくために、ぜひご利用ください。</p>
                <div class="text-end">
                  <router-link class="m-0" :to="{name:'guide', params:{active:'garden-tour'}}">園見学予約の流れ ＞</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center position-relative">
            <span class="d-inline-block py-1">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">4</div>
          </div>
          <div class="step-content border border-color-707070">
            <h5 class="mb-3 text-2xl">電子契約書にサイン</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/usage-flow/3967.png" alt="EXY">
              <div class="content">
                <p>体験保育（一時保育）・月極保育の予約が確定後、ご利用に関する書類等が登録メールアドレス宛に送付されます。（※園見学予約には書類登録はございません。）</p>
                <p>WEB上で表示された書類を確認し、問題なければサインをします。</p>
                <p>※迷惑メールの設定により届かない場合がございます。必ず予約リクエスト前にメールの設定をご確認ください。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center position-relative">
            <span class="d-inline-block py-1">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">5</div>
          </div>
          <div class="step-content border border-color-707070">
            <h5 class="mb-3 text-2xl">登園まで</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/usage-flow/3971.png" alt="EXY">
              <div class="content">
                <p>登園前に気になる点や伝えておきたいことがある場合は、事前にマイページのトーク画面で保育園へ確認しておきます。</p>
                <p>※予約確定後のキャンセルは、来園予定日の前日（キャンセル可能時期は園による）まで、WEB上でキャンセルが可能です。</p>
                <p>当日の無断キャンセルは、キャンセル料が発生する場合がございます。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center position-relative">
            <span class="d-inline-block py-1">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">6</div>
          </div>
          <div class="step-content border border-color-707070">
            <h5 class="mb-3 text-2xl">保育開始</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/usage-flow/3973.png" alt="EXY">
              <div class="content">
                <a href="#"></a>
                <p>当日は安心してお子さまを保育園にお任せしましょう。</p>
                <p>万が一、保育園との間で解決できない問題が発生した場合は、サポートデスクへお問合わせください。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center position-relative">
            <span class="d-inline-block py-1">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">7</div>
          </div>
          <div class="step-content border border-color-707070">
            <h5 class="mb-3 text-2xl">保育完了</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/usage-flow/3980.png" alt="EXY">
              <div class="content">
                <p>保育が完了したら、保育園から保育完了の報告を受けましょう。</p>
                <p>ご利用時間やお子様のお名前等、報告内容に誤りがなければ保育完了とします。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex align-items-start">
          <div class="mr-3 text-center position-relative">
            <span class="d-inline-block py-1">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count"><span></span>8</div>
          </div>
          <div class="step-content border border-color-707070">
            <h5 class="mb-3 text-2xl">園口コミ・お支払い</h5>
            <div class="d-flex text-secondary font-weight-light mb-4">
              <img src="../assets/images/usage-flow/3982.png" alt="EXY">
              <div class="content">
                <a href="#">１．園口コミ</a>
                <p>保育完了後、保育園より完了報告が届きます。<br/>報告内容に問題が無ければ、報告を承認し、口コミを記入します。</p>
              </div>
            </div>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/usage-flow/3984.png" alt="EXY">
              <div class="content">
                <a href="#">２．お支払い</a>
                <p>お支払いをします。<br/>お支払い方法は、クレジットカード払い・ポイント支払い・クーポンコードの３種類です。詳しくはコチラをご確認ください。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

      </div>
    </section>
    <!-- Steps end -->

    <section class="container">
      <div class="bg-light p-5">
        <h2 class="text-center mb-3  text-2xl">ご利用いただく際のルールとマナーについて</h2>
        <p class="text-center px-5">キガルニホイクでは、ご利用者様同士で直接やり取りができるコンテンツもご用意しています。 お互いを思いやり、楽しく気持ちの良いコミュニケーションが取れるようご協力お願い致します。 （※当サイトご利用の前には、ガイドラインをご一読ください。）</p>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <registration-link/>
      </div>
    </section>

  </div>
</template>

<script>
import RegistrationLink from "../components/RegistrationLink";
import Frontend from "../layouts/Frontend";

export default {
  name: "UsageFlow",
  created() {
    this.$emit('update:layout', Frontend)
  },
  components: { RegistrationLink }
}
</script>

<style scoped>

</style>