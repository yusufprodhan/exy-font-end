<template>
  <div class="my-page-childcare-report">
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <div class="p-5 bg-f2f2f2 m-3">
      <div class="row bg-white row-1 w-100 pt-4 pb-4 shadow">
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
              <span class="px-3 py-2 position-absolute span-1 bg-white"
              >今日の予約</span
              >
            </p>
          </div>
          <div class="row row-2 w-100 p-1">
            <div class="col-md-12 inner-border py-3">
              <div class="row row-21 py-3 ps-2">
                <div class="col-md-4">
                  <router-link :to="{name:'Admin.NurserySchoolMyPageReservationList'}">
                    <p class="m-0 text-decoration-underline">
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
                    <p class="m-0 text-decoration-underline">
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
                    <p class="m-0 text-decoration-underline">
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
                    <p class="m-0 text-decoration-underline">
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
                    <p class="m-0 text-decoration-underline">
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
                    <span class="pull-right span-6 text-decoration-underline"
                    >今日の予約を全てみる ＞</span
                    >
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-5 mx-3 pt-3 pb-5">
      <div class="row border-dee2e6 border-top py-3 fw-bold ps-3">
        予約詳細
      </div>
      <div class="row bg-edeff0 py-3 ps-1">
        <div class="col-md-3 fw-bold">名前（なまえ）</div>
        <div class="col-md-1 text-center fw-bold">性別</div>
        <div class="col-md-1 text-center fw-bold">年齢</div>
        <div class="col-md-3 text-center fw-bold">緊急連絡先1</div>
        <div class="col-md-3 text-center fw-bold">緊急連絡先2</div>
        <div class="col-md-1 text-center fw-bold">送迎者</div>
      </div>
      <div class="row py-3 ps-1 border-dee2e6 border-bottom">
        <div class="col-md-3 fw-bold text-decoration-underline">哀川 里奈（あいかわ りな）</div>
        <div class="col-md-1 text-center">女</div>
        <div class="col-md-1 text-center">１歳</div>
        <div class="col-md-3 text-center">哀川七瀬［母］（090-0000-0000）</div>
        <div class="col-md-3 text-center">哀川美智子［祖母］（06-0000-0000）</div>
        <div class="col-md-1 text-center">
          <a href="" class="text-decoration-underline color-0066c0">確認する</a>
        </div>
      </div>
      <div class="row py-3 ps-1 border-dee2e6 border-bottom">
        <div class="col-md-3 fw-bold text-decoration-underline">安達 柚（あだち ゆず）</div>
        <div class="col-md-1 text-center">女</div>
        <div class="col-md-1 text-center">１歳</div>
        <div class="col-md-3 text-center">安達司［父］（090-0000-0000）</div>
        <div class="col-md-3 text-center">佐藤佳子［祖母］（06-0000-0000）</div>
        <div class="col-md-1 text-center">
          <a href="" class="text-decoration-underline color-0066c0">確認する</a>
        </div>
      </div>
      <div class="row py-3 ps-1 border-dee2e6 border-bottom">
        <div class="col-md-3 fw-bold text-decoration-underline">上田 海音（うえだ かのん）</div>
        <div class="col-md-1 text-center">女</div>
        <div class="col-md-1 text-center">２歳</div>
        <div class="col-md-3 text-center">上田美優［母］（090-0000-0000）</div>
        <div class="col-md-3 text-center">上田隆［父］（090-0000-0000）</div>
        <div class="col-md-1 text-center">
          <a href="" class="text-decoration-underline color-0066c0">確認する</a>
        </div>
      </div>
      <div class="row py-3 ps-1 border-dee2e6 border-bottom">
        <div class="col-md-3 fw-bold text-decoration-underline">白川 洋（しらかわ ひろし）</div>
        <div class="col-md-1 text-center">男</div>
        <div class="col-md-1 text-center">５歳</div>
        <div class="col-md-3 text-center">白川透［父］（090-0000-0000）</div>
        <div class="col-md-3 text-center">白川まりこ［母］（090-0000-0000）</div>
        <div class="col-md-1 text-center">
          <a href="" class="text-decoration-underline color-0066c0">確認する</a>
        </div>
      </div>
      <div class="row py-3 ps-1 border-dee2e6 border-bottom">
        <div class="col-md-3 fw-bold text-decoration-underline">進藤 一（しんどう はじめ）</div>
        <div class="col-md-1 text-center">男</div>
        <div class="col-md-1 text-center">２歳</div>
        <div class="col-md-3 text-center">進藤二郎［父］（090-0000-0000）</div>
        <div class="col-md-3 text-center">石川さよこ［母］（090-0000-0000）</div>
        <div class="col-md-1 text-center">
          <a href="" class="text-decoration-underline color-0066c0">確認する</a>
        </div>
      </div>
      <div class="row py-3 ps-1 border-dee2e6 border-bottom">
        <div class="col-md-3 fw-bold text-decoration-underline">高畑 優衣（たかばた ゆい）</div>
        <div class="col-md-1 text-center">女</div>
        <div class="col-md-1 text-center">４歳</div>
        <div class="col-md-3 text-center">高畑洋子［祖母］（06-0000-0000）</div>
        <div class="col-md-3 text-center">高畑保［祖父］（06-0000-0000）</div>
        <div class="col-md-1 text-center">
          <a href="" class="text-decoration-underline color-0066c0">確認する</a>
        </div>
      </div>
      <div class="row py-3 ps-1 border-dee2e6 border-bottom">
        <div class="col-md-3 fw-bold text-decoration-underline">田中 空（たなか そら）</div>
        <div class="col-md-1 text-center">男</div>
        <div class="col-md-1 text-center">２歳</div>
        <div class="col-md-3 text-center">田中愛［母］（090-0000-0000）</div>
        <div class="col-md-3 text-center">田中誠［父］（090-0000-0000）</div>
        <div class="col-md-1 text-center">
          <a href="" class="text-decoration-underline color-0066c0">確認する</a>
        </div>
      </div>
      <div class="row py-3 mt-4">
        <div class="col-md-5 px-0"><hr></div>
        <div class="col-md-2 text-2xl fw-bold text-center color-cb3a82">コメント入力</div>
        <div class="col-md-5 px-0"><hr></div>
      </div>
      <div class="bg-light py-4 row mb-5">
        <div class="col-md-12">
          <div class="row px-3">
            <div class="col-1 bg-white pull-left shadow rounded">
              <div class="row p-2">
                <div class="col-md-6 text-decoration-underline pt-2">安達 柚</div>
                <div class="col-md-6">
                  <p class="m-0 text-right">
                    <button type="button" class="btn btn-secodery border-cb3a82 border color-cb3a82 fw-bold rounded-0 me-2 px-4">
                      保存
                    </button>
                    <button type="button" class="btn btn btn-secodery text-white rounded-0 border-cb3a82 border fw-bold bg-cb3a82">
                      完了報告
                    </button>
                  </p>
                </div>
              </div>
              <div class="row pb-3 px-3 ">
                <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
              </div>
            </div>
            <div class="col-2"></div>
            <div class="col-1 bg-white pull-right shadow rounded">
              <div class="row p-2">
                <div class="col-md-6 text-decoration-underline pt-2">白川 洋</div>
                <div class="col-md-6">
                  <p class="m-0 text-right">
                    <button type="button" class="btn btn-secodery border-cb3a82 border color-cb3a82 fw-bold rounded-0 me-2 px-4">
                      保存
                    </button>
                    <button type="button" class="btn btn btn-secodery text-white rounded-0 border-cb3a82 border fw-bold bg-cb3a82">
                      完了報告
                    </button>
                  </p>
                </div>
              </div>
              <div class="row pb-3 px-3">
                <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
              </div>
            </div>
          </div>
          <div class="row px-3 mt-4">
            <div class="col-1 bg-white pull-left shadow rounded">
              <div class="row p-2">
                <div class="col-md-6 text-decoration-underline pt-2">高畑 優衣</div>
                <div class="col-md-6">
                  <p class="m-0 text-right">
                    <button type="button" class="btn btn-secodery border-cb3a82 border color-cb3a82 fw-bold rounded-0 me-2 px-4">
                      保存
                    </button>
                    <button type="button" class="btn btn btn-secodery text-white rounded-0 border-cb3a82 border fw-bold bg-cb3a82">
                      完了報告
                    </button>
                  </p>
                </div>
              </div>
              <div class="row pb-3 px-3 ">
                <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
              </div>
            </div>
            <div class="col-2"></div>
            <div class="col-1 bg-white pull-right shadow rounded">
              <div class="row p-2">
                <div class="col-md-6 text-decoration-underline pt-2">哀川 里奈</div>
                <div class="col-md-6">
                  <p class="m-0 text-right">
                    <button type="button" class="btn btn-secodery border-cb3a82 border color-cb3a82 fw-bold rounded-0 me-2 px-4">
                      保存
                    </button>
                    <button type="button" class="btn btn btn-secodery text-white rounded-0 border-cb3a82 border fw-bold bg-cb3a82">
                      完了報告
                    </button>
                  </p>
                </div>
              </div>
              <div class="row pb-3 px-3">
                <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
              </div>
            </div>
          </div>
          <div class="row px-3 mt-4">
            <div class="col-1 bg-white pull-left shadow rounded">
              <div class="row p-2">
                <div class="col-md-6 text-decoration-underline pt-2">進藤 一</div>
                <div class="col-md-6">
                  <p class="m-0 text-right">
                    <button type="button" class="btn btn-secodery border-cb3a82 border color-cb3a82 fw-bold rounded-0 me-2 px-4">
                      保存
                    </button>
                    <button type="button" class="btn btn btn-secodery text-white rounded-0 border-cb3a82 border fw-bold bg-cb3a82">
                      完了報告
                    </button>
                  </p>
                </div>
              </div>
              <div class="row pb-3 px-3 ">
                <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
              </div>
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
                  <p><input type="radio" class="me-2">園児または保護者の病気、怪我のため</p>
                  <p><input type="radio" class="me-2">三親等以内の不幸ごとのため</p>
                  <p><input type="radio" class="me-2">連絡の無いキャンセル</p>
                  <p><input type="radio" class="me-2">その他</p>
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
  </div>
</template>

<script>
import Breadcrumb from "../../components/adminPartials/Breadcrumb"
import Admin from "../../layouts/Admin";
export default {
  name: "MyPageChildcareReport",
  components: {
    Breadcrumb
  },
  data() {
    return {
      dataPageName: "保育開始・完了報告",
      interval: null,
      time: null,
      date: null
    }
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
}
</script>

<style scoped>

</style>