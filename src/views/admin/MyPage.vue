<template>
  <div class="admin-mypage pb-4 pt-5 ps-5 pe-4 m-3">
    <div class="row row-1 w-100 py-4 exy-shadow-dashboard">
      <div class="col-md-4 col-left ps-4">
        <p class="text-xl p-left-1 fw-bold">保育開始・完了報告</p>
        <p class="m-0 p-left-2 text-3xl text-center fw-bold pb-4">
          {{ date }}(水)
        </p>
        <p class="m-0 text-7xl text-center fw-bold">{{ time }}</p>
      </div>
      <div class="col-md-8 right-col">
        <div class="row row-1 ps-0">
          <p class="ps-0">
            <span class="px-3 py-2 position-absolute span-1 bg-white fw-bold">今日の予約</span>
          </p>
        </div>
        <div class="row row-2 w-100 p-1">
          <div class="col-md-12 inner-border py-3">
            <div class="row row-21 py-3 ps-2">
              <div class="col-md-4">
                <router-link :to="{name:'Admin.NurserySchoolMyPageReservationList'}">
                  <p class="m-0 text-decoration-underline fw-bold">
                    田中 空（たなか そら）
                  </p>
                </router-link>
              </div>
              <div class="col-md-5">
                <p class="m-0 text-decoration-underline">(13:00~18:00)</p>
              </div>
              <div class="col-md-3">
                <p class="m-0 text-xs text-center pt-1">
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                    <span class="py-2 px-3 span-1">キャンセル</span>
                  </a>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                    <span class="py-2 px-3 span-2 ms-3">保育開始</span>
                  </a>
                </p>
              </div>
            </div>
            <div class="row py-3 ps-2">
              <div class="col-md-4">
                <router-link :to="{name:'Admin.NurserySchoolMyPageReservationList'}">
                  <p class="m-0 text-decoration-underline fw-bold">
                    上田 海音（うえだ おとね）
                  </p>
                </router-link>
              </div>
              <div class="col-md-5">
                <p class="m-0 text-decoration-underline">(11:30~16:00)</p>
              </div>
              <div class="col-md-3">
                <p class="m-0 text-xs text-center pt-1">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <span class="py-2 px-3 span-1">キャンセル</span>
                  </a>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                    <span class="py-2 px-3 span-2 ms-3">保育開始</span>
                  </a>
                </p>
              </div>
            </div>
            <div class="row row-21 py-3 ps-2">
              <div class="col-md-4">
                <router-link :to="{name:'Admin.NurserySchoolMyPageReservationList'}">
                  <p class="m-0 text-decoration-underline fw-bold">
                    安達 柚（あだち ゆず）
                  </p>
                </router-link>
              </div>
              <div class="col-md-5">
                <p class="m-0 text-decoration-underline">(10:00~16:00)</p>
              </div>
              <div class="col-md-3">
                <p class="m-0 text-xs text-center pt-1">
                  <a href="#">
                    <span class="py-2 span-3">コメント</span>
                  </a>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <span class="py-2 span-4 ms-3">保育終了</span>
                  </a>
                </p>
              </div>
            </div>
            <div class="row py-3 ps-2">
              <div class="col-md-4">
                <router-link :to="{name:'Admin.NurserySchoolMyPageReservationList'}">
                  <p class="m-0 text-decoration-underline fw-bold">
                    白川 洋（しらかわ ひろし）
                  </p>
                </router-link>
              </div>
              <div class="col-md-5">
                <p class="m-0 text-decoration-underline">(10:00~18:00)</p>
              </div>
              <div class="col-md-3">
                <p class="m-0 text-xs text-center pt-1">
                  <a href="#">
                    <span class="py-2 span-3">コメント</span>
                  </a>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <span class="py-2 span-4 ms-3">保育終了</span>
                  </a>
                </p>
              </div>
            </div>
            <div class="row row-21 py-3 ps-2">
              <div class="col-md-4">
                <router-link :to="{name:'Admin.NurserySchoolMyPageReservationList'}">
                  <p class="m-0 text-decoration-underline fw-bold">
                    高畑 優衣（たかばた ゆい）
                  </p>
                </router-link>
              </div>
              <div class="col-md-5">
                <p class="m-0 text-decoration-underline">(09:00~18:00)</p>
              </div>
              <div class="col-md-3">
                <p class="m-0 text-xs text-center pt-1">
                  <a href="#">
                    <span class="py-2 span-3">コメント</span>
                  </a>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <span class="py-2 span-4 ms-3">保育終了</span>
                  </a>
                </p>
              </div>
            </div>
            <div class="row pt-3">
              <p class="m-0 px-4">
                <span class="p-2 pb-1 text-xs span-5">1</span>
                <span class="px-4 pb-1 text-xs">2</span>
                <span class="px-2 pb-1 text-xs">3</span>
                <a href="#">
                  <span class="pull-right span-6 text-decoration-underline">今日の予約を全てみる ＞</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-2 exy-shadow-dashboard w-100 mt-4 text-base">
      <div class="col-md-12 pb-2 ps-4 pe-5">
        <div class="row inner-1 py-3">
          <p class="m-0 top-p fw-bold">お知らせ</p>
        </div>
        <a href="#">
          <div class="row inner-1 py-3">
            <div class="col-md-1">
              <p class="m-0 text-xs fw-bold pt-1">16:47</p>
            </div>
            <div class="col-md-4">
              <p class="m-0 fw-bold">
                畑中 ゆい
                <span class="px-3 py-2 span-1 ms-5 fw-normal">新着</span>
              </p>
            </div>
            <div class="col-md-7">
              <p class="m-0">
                【一時保育のリクエストがはいりました】 -
                現時点では、ご予約は【...
              </p>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="row inner-1 py-3">
            <div class="col-md-1">
              <p class="m-0 text-xs fw-bold pt-1">16:47</p>
            </div>
            <div class="col-md-4">
              <p class="m-0 fw-bold">
                畑中 ゆい
                <span class="px-3 py-2 span-1 ms-5 fw-normal">新着</span>
              </p>
            </div>
            <div class="col-md-7">
              <p class="m-0">
                【一時保育のリクエストがはいりました】 -
                現時点では、ご予約は【...
              </p>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="row inner-1 py-3">
            <div class="col-md-1">
              <p class="m-0 text-xs fw-bold pt-1">16:47</p>
            </div>
            <div class="col-md-4">
              <p class="m-0 fw-bold">畑中 ゆい</p>
            </div>
            <div class="col-md-7">
              <p class="m-0">
                【一時保育のリクエストがはいりました】 -
                現時点では、ご予約は【...
              </p>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="row inner-1 py-3">
            <div class="col-md-1">
              <p class="m-0 text-xs fw-bold pt-1">16:47</p>
            </div>
            <div class="col-md-4">
              <p class="m-0 fw-bold">畑中 ゆい</p>
            </div>
            <div class="col-md-7">
              <p class="m-0">
                【一時保育のリクエストがはいりました】 -
                現時点では、ご予約は【...
              </p>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="row inner-1 py-3">
            <div class="col-md-1">
              <p class="m-0 text-xs fw-bold pt-1">16:47</p>
            </div>
            <div class="col-md-4">
              <p class="m-0 fw-bold">畑中 ゆい</p>
            </div>
            <div class="col-md-7">
              <p class="m-0">
                【一時保育のリクエストがはいりました】 -
                現時点では、ご予約は【...
              </p>
            </div>
          </div>
        </a>
        <div class="row pt-3">
          <p class="m-0">
            <span class="pull-right span-2 text-decoration-underline"
            >お知らせを全てみる ＞</span
            >
          </p>
        </div>
      </div>
    </div>

    <div class="row row-3 w-100 mt-4 text-base">
      <current-reservation-status></current-reservation-status>

      <div class="col-md-6 ps-4 right-col">
        <div class="row exy-shadow-dashboard">
          <div class="col-md-12 px-4">
            <div class="row py-5 px-3">
              <p class="m-0 text-center text-lg fw-bold">
                企業主導型運営サポート
              </p>
              <p class="m-0 pb-2 pt-5">
                運営に関する質問やご相談をサポートいたします。
              </p>
              <p class="m-0">【受付時間：平日 10:00-18:00】</p>
            </div>
            <div class="row inner-1 px-3 py-4">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-2">
                    <img src="../../assets/images/admin/WEB06.png" alt="EXY"/>
                  </div>
                  <div class="col-md-10 inner-msg bg-white msg">
                    <p class="h-100"></p>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-md-10 inner-msg-right bg-white msg">
                    <p class="h-100"></p>
                  </div>
                  <div class="col-md-2">
                    <img
                        src="../../assets/images/admin/EXY_RGB_ku.png"
                        class="pull-right rounded-circle"
                        alt="EXY"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="row inner-2">
              <router-link :to="{ name: 'todo', params: { page: 16 } }">
                <p class="m-0 text-center bottom-p py-2">
                  運営サポートを受ける
                </p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container px-5">
              <div class="row py-2">
                <p class="text-xl fw-bold text-center">保育をキャンセルしますか？</p>
              </div>
              <div class="row border-333333 border">
                <div class="col-md-3 text-center fw-bold bg-fbeef5 py-3 border-ddcfd6 border-end">対象者</div>
                <div class="col-md-9 py-3">高畑 優衣（たかばた ゆい）</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-3 text-center fw-bold bg-fbeef5 py-3 border-ddcfd6 border-end">予定時間</div>
                <div class="col-md-9 py-3">09:00 ~ 18:00</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-3 text-center fw-bold bg-fbeef5 py-3 border-ddcfd6 border-end">キャンセル理由</div>
                <div class="col-md-9 py-3">
                  <p><label><input type="radio" name="demo" class="me-2">園児または保護者の病気、怪我のため</label></p>
                  <p><label><input type="radio" name="demo" class="me-2">三親等以内の不幸ごとのため</label></p>
                  <p><label><input type="radio" name="demo" class="me-2">連絡の無いキャンセル</label></p>
                  <p><label><input type="radio" name="demo" class="me-2">その他</label></p>
                  <p><input type="text" class="form-control"></p>
                </div>
              </div>
              <div class="row pt-5 mb-5">
                <p class="text-center">
                  <button type="button" class="btn btn-secodery border-333333 border rounded-0 px-4 me-3">
                    もどる
                  </button>
                  <button type="submit" class="btn btn btn-secodery text-white rounded-0 border-333333 border bg-dark px-4">
                    キャンセルへすすむ
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container px-5">
              <div class="row py-2">
                <p class="text-xl fw-bold text-center">保育を開始しました</p>
              </div>
              <div class="row border-333333 border">
                <div class="col-md-3 text-center fw-bold bg-fbeef5 py-3 border-ddcfd6 border-end">対象者</div>
                <div class="col-md-9 py-3">高畑 優衣（たかばた ゆい）</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-3 text-center fw-bold bg-fbeef5 py-3 border-ddcfd6 border-end">予定時間</div>
                <div class="col-md-9 py-3">09:00 ~ 18:00</div>
              </div>
              <div class="row border-333333 border mt-4 p-1">
                <div class="col-md-12 border-333333 border">
                  <div class="row py-3 ">
                    <p class="m-0 text-center fw-bold text-xl">開始時間</p>
                  </div>
                  <div class="row py-4">
                    <p class="text-7xl fw-bold text-center">9:00</p>
                  </div>
                </div>
              </div>
              <div class="row py-3 mb-3">
                <p class="text-right text-decoration-underline color-0066c0">時間を修正する ＞</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container px-5">
              <div class="row py-2">
                <p class="text-xl fw-bold text-center">保育を終了しました</p>
              </div>
              <div class="row border-333333 border">
                <div class="col-md-3 text-center fw-bold bg-fbeef5 py-3 border-ddcfd6 border-end">対象者</div>
                <div class="col-md-9 py-3">高畑 優衣（たかばた ゆい）</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-3 text-center fw-bold bg-fbeef5 py-3 border-ddcfd6 border-end">予定時間</div>
                <div class="col-md-9 py-3">09:00 ~ 18:00</div>
              </div>
              <div class="row border-333333 border mt-4 p-1">
                <div class="col-md-12 border-333333 border">
                  <div class="row py-3 ">
                    <p class="m-0 text-center fw-bold text-xl">終了時間</p>
                  </div>
                  <div class="row py-4">
                    <p class="text-7xl fw-bold text-center">18:00</p>
                  </div>
                </div>
              </div>
              <div class="row pt-3">
                <p class="text-right text-decoration-underline color-0066c0">時間を修正する ＞</p>
              </div>
              <div class="row py-4">
                <p class="text-center">
                  <button type="submit" class="btn btn btn-secodery text-white rounded-0 border-0 bg-cb3a82 px-5 text-lg fw-bold">
                    完了報告へ
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'todo', params: { page: 13 } }">
      <div class="row py-3 bg-white mt-4 row-4">
        <p class="m-0 text-center">サポート窓口</p>
      </div>
    </router-link>
  </div>
</template>

<script>

import Admin from "../../layouts/Admin";
import CurrentReservationStatus from "./CurrentReservationStatus";

export default {
  name: "MyPage",
  components: { CurrentReservationStatus },
  data() {
    return {
      interval: null,
      time: null,
      date: null
    }
  },
  methods: {
    getUser() {
      this.$store.dispatch('setUserName')
    }
  },
  mounted() {
    this.getUser()
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {
    this.$emit('update:layout', Admin)

    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hourCycle: 'h24',
        hour: '2-digit',
        minute: '2-digit',
        second: "2-digit"
      }).format()

      this.date = Intl.DateTimeFormat(navigator.language, {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      }).format()

    }, 1000)
  }
};
</script>

<style scoped>
</style>
