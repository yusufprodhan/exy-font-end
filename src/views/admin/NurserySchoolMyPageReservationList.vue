<template>
  <div class="nursery-school-my-page-reservation-list">
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <div class="row w-100 py-2 row-1 ms-0">
      <div class="col-md-6 text-xl fw-bold ps-2 my-auto">予約リスト</div>
      <div class="col-md-6">
        <date-picker
            placeholder="検索"
            valueType="format"
        ></date-picker>
      </div>
    </div>
    <div class="row w-100 ms-0">
      <div class="col-md-3 left-col">
        <div @click="activeTab=1, subTab=1" :class="[ activeTab === 1 ? 'active' : '' ]" class="row my-auto ps-2 row-2 me-2 py-3">
          すべての予約
        </div>
        <div @click="activeTab=2, subTab=1" :class="[ activeTab === 2 ? 'active' : '' ]" class="row my-auto ps-2 row-2 me-2 py-3">
          今日の予約
        </div>
        <div @click="activeTab=3, subTab=1" :class="[ activeTab === 3 ? 'active' : '' ]" class="row my-auto ps-2 row-2 me-2 py-3">
          明日の予約
        </div>
        <div @click="activeTab=4, subTab=1" :class="[ activeTab === 4 ? 'active' : '' ]" class="row my-auto ps-2 row-2 me-2 py-3">
          明後日の予約
        </div>
      </div>
      <div v-if="activeTab === 1" :class="[ subTab === 2 ? 'no-border' : '' ]" class="col-md-9 right-col">
        <div v-if="subTab===1">
          <div class="row py-2">
            <div class="col-md-10 my-auto">
              1-10 / 200件 <span class="ps-3 pt-3 span-5"><i class="fa fa-angle-left text-2xl pe-2" aria-hidden="true"></i> <i class="fa fa-angle-right text-2xl" aria-hidden="true"></i></span>
            </div>
            <div class="col-md-2 pe-4">
              <select name="" id="" class="form-control">
                <option value="">全体</option>
                <option value="">体験保育</option>
                <option value="">月極保育</option>
                <option value="">仮予約中</option>
                <option value="">確定</option>
                <option value="">キャンセル</option>
                <option value="">園見学</option>
              </select>
            </div>
          </div>
          <div class="row row-3 text-xs fw-bold py-1">
            <div class="col-1">
              <p class="m-0">予約内容 <span class="ps-5">希望日</span></p>
            </div>
            <div class="col-1">希望時間</div>
            <div class="col-1">保護者名</div>
            <div class="col-1">お子さま名（年齢）</div>
            <div class="col-1 text-center">対応状況</div>
          </div>
          <a @click="subTab=2">
            <div class="row py-3">
              <div class="col-1 my-auto">
                <p class="m-0">体験保育 <span class="ps-3">2021/06/14(月)</span></p>
              </div>
              <div class="col-1 my-auto">11:00〜15:00 (4h)</div>
              <div class="col-1 my-auto">土井 まひる</div>
              <div class="col-1 my-auto">土井 ありす（２歳児）</div>
              <div class="col-1 my-auto px-4">
                <select name="" id="" class="form-select select-color">
                  <option value="">未対応</option>
                  <option value="">承認待ち</option>
                  <option value="">登園待ち</option>
                  <option value="">対応済み</option>
                </select>
              </div>
            </div>
            <div class="row row-4 py-2 text-xs">
              <div class="col-1 fw-bold">
                <span class="span-1 px-3 py-1">仮予約中</span>
              </div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1 text-right pe-4">
                (受付日)2021/06/01
              </div>
            </div>
            <div class="row py-3">
              <div class="col-1 my-auto">
                <p class="m-0">月極保育 <span class="ps-3">2021/07/01(木)</span></p>
              </div>
              <div class="col-1 my-auto">09:00〜18:30 (9.5h)</div>
              <div class="col-1 my-auto">久保 恵子</div>
              <div class="col-1 my-auto">久保 克樹（１歳児）</div>
              <div class="col-1 my-auto px-4">
                <select name="" id="" class="form-select">
                  <option value="">未対応</option>
                  <option value="" >承認待ち</option>
                  <option value="" selected>登園待ち</option>
                  <option value="">対応済み</option>
                </select>
              </div>
            </div>
            <div class="row row-4 py-2 text-xs">
              <div class="col-1 fw-bold">
                <span class="span-2 px-3 py-1">確定</span>
              </div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1 text-right pe-4">
                (受付日)2021/06/01
              </div>
            </div>
            <div class="row py-3">
              <div class="col-1 my-auto">
                <p class="m-0">体験保育 <span class="ps-3">2021/06/30(水)</span></p>
              </div>
              <div class="col-1 my-auto">10:00〜</div>
              <div class="col-1 my-auto">山田 裕司</div>
              <div class="col-1 my-auto">-</div>
              <div class="col-1 my-auto px-4">
                <select name="" id="" class="form-select">
                  <option value="">未対応</option>
                  <option value="" >承認待ち</option>
                  <option value="" >登園待ち</option>
                  <option value="" selected>対応済み</option>
                </select>
              </div>
            </div>
            <div class="row row-4 py-2 text-xs">
              <div class="col-1 fw-bold">
                <span class="span-3 px-3 py-1">予約不可</span>
              </div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1 text-right pe-4">
                (受付日)2021/06/01
              </div>
            </div>
            <div class="row py-3">
              <div class="col-1 my-auto">
                <p class="m-0">体験保育 <span class="ps-3">2021/06/21(月)</span></p>
              </div>
              <div class="col-1 my-auto">11:00〜15:00 (4h)</div>
              <div class="col-1 my-auto">渡辺 恵梨香</div>
              <div class="col-1 my-auto">渡辺 由依（４歳児）</div>
              <div class="col-1 my-auto px-4">
                <select name="" id="" class="form-select">
                  <option value="">未対応</option>
                  <option value="" >承認待ち</option>
                  <option value="" >登園待ち</option>
                  <option value="" selected>対応済み</option>
                </select>
              </div>
            </div>
            <div class="row row-5 py-2 text-xs">
              <div class="col-1 fw-bold">
                <span class="span-4 px-3 py-1">キャンセル</span>
              </div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1 text-right pe-4">
                (受付日)2021/06/01
              </div>
            </div>
            <div class="row row-6 py-3">
              <div class="col-1 my-auto">
                <p class="m-0">体験保育 <span class="ps-3">2021/06/02(水)</span></p>
              </div>
              <div class="col-1 my-auto">09:00〜18:00</div>
              <div class="col-1 my-auto">高畑 陽子</div>
              <div class="col-1 my-auto">高畑 優衣（４歳児）</div>
              <div class="col-1 my-auto px-4">
                <select name="" id="" class="form-select">
                  <option value="">未対応</option>
                  <option value="" >承認待ち</option>
                  <option value="" >登園待ち</option>
                  <option value="" selected>対応済み</option>
                </select>
              </div>
            </div>
            <div class="row row-7 py-2 text-xs">
              <div class="col-1 fw-bold">
                <span class="span-4 px-3 py-1">保育完了</span>
              </div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1 text-right pe-4">
                (受付日)2021/06/01
              </div>
            </div>
            <div class="row py-3">
              <div class="col-1 my-auto">
                <p class="m-0">体験保育 <span class="ps-3">2021/06/14(月)</span></p>
              </div>
              <div class="col-1 my-auto">11:00〜15:00 (4h)</div>
              <div class="col-1 my-auto">土井 まひる</div>
              <div class="col-1 my-auto">土井 ありす（２歳児）</div>
              <div class="col-1 my-auto px-4">
                <select name="" id="" class="form-select">
                  <option value="">未対応</option>
                  <option value="" >承認待ち</option>
                  <option value="" >登園待ち</option>
                  <option value="" selected>対応済み</option>
                </select>
              </div>
            </div>
            <div class="row row-4 py-2 text-xs">
              <div class="col-1 fw-bold">
                <span class="span-1 px-3 py-1">仮予約中</span>
              </div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1 text-right pe-4">
                (受付日)2021/06/01
              </div>
            </div>
            <div class="row py-3">
              <div class="col-1 my-auto">
                <p class="m-0">月極保育 <span class="ps-3">2021/07/01(木)</span></p>
              </div>
              <div class="col-1 my-auto">09:00〜18:30 (9.5h)</div>
              <div class="col-1 my-auto">久保 恵子</div>
              <div class="col-1 my-auto">久保 克樹（１歳児）</div>
              <div class="col-1 my-auto px-4">
                <select name="" id="" class="form-select">
                  <option value="">未対応</option>
                  <option value="" >承認待ち</option>
                  <option value="" selected>登園待ち</option>
                  <option value="">対応済み</option>
                </select>
              </div>
            </div>
            <div class="row row-4 py-2 text-xs">
              <div class="col-1 fw-bold">
                <span class="span-2 px-3 py-1">確定</span>
              </div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1 text-right pe-4">
                (受付日)2021/06/01
              </div>
            </div>
            <div class="row py-3">
              <div class="col-1 my-auto">
                <p class="m-0">園見学 <span class="ps-3">2021/06/30(水)</span></p>
              </div>
              <div class="col-1 my-auto">10:00〜</div>
              <div class="col-1 my-auto">山田 裕司</div>
              <div class="col-1 my-auto">-</div>
              <div class="col-1 my-auto px-4">
                <select name="" id="" class="form-select">
                  <option value="">未対応</option>
                  <option value="" >承認待ち</option>
                  <option value="" >登園待ち</option>
                  <option value="" selected>対応済み</option>
                </select>
              </div>
            </div>
            <div class="row row-4 py-2 text-xs">
              <div class="col-1 fw-bold">
                <span class="span-3 px-3 py-1">予約不可</span>
              </div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1 text-right pe-4">
                (受付日)2021/06/01
              </div>
            </div>
            <div class="row py-3">
              <div class="col-1 my-auto">
                <p class="m-0">体験保育 <span class="ps-3">2021/06/21(月)</span></p>
              </div>
              <div class="col-1 my-auto">11:00〜15:00 (4h)</div>
              <div class="col-1 my-auto">渡辺 恵梨香</div>
              <div class="col-1 my-auto">渡辺 由依（４歳児）</div>
              <div class="col-1 my-auto px-4">
                <select name="" id="" class="form-select">
                  <option value="">未対応</option>
                  <option value="" >承認待ち</option>
                  <option value="" >登園待ち</option>
                  <option value="" selected>対応済み</option>
                </select>
              </div>
            </div>
            <div class="row row-5 py-2 text-xs">
              <div class="col-1 fw-bold">
                <span class="span-4 px-3 py-1">キャンセル</span>
              </div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1 text-right pe-4">
                (受付日)2021/06/01
              </div>
            </div>
            <div class="row row-6 py-3">
              <div class="col-1 my-auto">
                <p class="m-0">体験保育 <span class="ps-3">2021/06/02(水)</span></p>
              </div>
              <div class="col-1 my-auto">09:00〜18:00</div>
              <div class="col-1 my-auto">高畑 陽子</div>
              <div class="col-1 my-auto">高畑 優衣（４歳児）</div>
              <div class="col-1 my-auto px-4">
                <select name="" id="" class="form-select">
                  <option value="">未対応</option>
                  <option value="" >承認待ち</option>
                  <option value="" >登園待ち</option>
                  <option value="" selected>対応済み</option>
                </select>
              </div>
            </div>
            <div class="row row-7 py-2 text-xs">
              <div class="col-1 fw-bold">
                <span class="span-4 px-3 py-1">保育完了</span>
              </div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1"></div>
              <div class="col-1 text-right pe-4">
                (受付日)2021/06/01
              </div>
            </div>
          </a>
        </div>
        <div v-if="subTab===2">
          <div class="row row-2 py-2 color-707070">
            <div class="col-md-6">
              <span> <i class="fa fa-arrow-left text-xl" aria-hidden="true"></i> </span>
            </div>
            <div class="col-md-6 text-right">
               1-10 / 200件 <span class="ps-3 pt-3 span-5"><i class="fa fa-angle-left text-2xl pe-2" aria-hidden="true"></i> <i class="fa fa-angle-right text-2xl" aria-hidden="true"></i></span>
            </div>
          </div>
          <div class="row row-2 py-2">
            <div class="col-md-6 my-auto">
              <img src="../../assets/images/admin/ID2266338_m.png" alt="EXY" class="">
              <span class="text-2xl fw-bold text-decoration-underline ps-3">高畑 陽子</span>
            </div>
            <div class="col-md-6 text-right my-auto text-decoration-underline color-707070">
              2021/05/28(金)
            </div>
          </div>
          <div class="row py-3">
            <div class="col-md-4">
              <div class="row border border-1 border-333333 mx-2">
                <div class="col-md-6 py-2 bg-fbeef5 text-center">予約状況</div>
                <div class="col-md-6 py-2">仮予約中</div>
              </div>
            </div>
            <div v-if="subPage==1" class="col-md-2 px-4">
              <div class="row row-8 py-2 position-relative">
                <p class="text-center m-0 position-absolute fw-bold">予約の確定</p>
              </div>
            </div>
            <div v-if="subPage==1" class="col-md-2 px-4">
              <div class="row row-9 py-2 position-relative">
                <p class="text-center m-0 position-absolute fw-bold">予約日の変更</p>
              </div>
            </div>
            <div v-if="subPage==1" class="col-md-2 px-4">
              <div class="row row-10 py-2 position-relative">
                <p class="text-center m-0 position-absolute fw-bold">予約不可</p>
              </div>
            </div>
          </div>
          <div class="row row-11 m-2 mt-3 shadow">
            <div class="col-md-12 p-4 pt-2">
              <div class="row fw-bold color-cb3a82 py-2">被保育者詳細</div>
              <div class="row border-333333 border border-1">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">被保育者</div>
                <div class="col-md-4 py-2 text-decoration-underline border-333333 border-end"> <a  @click="subTab=1">高畑 優衣（たかばた ゆい）</a> </div>
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">生年月日(年齢)</div>
                <div class="col-md-4 py-2">平成29年［2017年］5月3日（４才）</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">性別</div>
                <div class="col-md-10 text-sm py-2">女</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">住所</div>
                <div class="col-md-10 py-2">
                  〒550-0014 <br>
                  大阪府大阪市西区北堀江1丁目2−27 AXIS SOUTH 四ツ橋ビル 407
                </div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">アレルギー</div>
                <div class="col-md-10 text-sm py-2">有り（卵アレルギーがあります）</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">基礎疾患</div>
                <div class="col-md-10 text-sm py-2">無し（）</div>
              </div>
            </div>
          </div>
          <div class="row row-11 m-2 mt-3 shadow">
            <div class="col-md-12 p-4 pt-2">
              <div class="row fw-bold color-cb3a82 py-2">予約内容</div>
              <div class="row border-333333 border border-1">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">利用日時</div>
                <div class="col-md-4 py-2 border-333333 border-end">2021/06/02(水) <span class="px-2">09:00〜18:00（9h）</span> </div>
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">利用内容</div>
                <div class="col-md-4 py-2">体験保育</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">料金プラン</div>
                <div class="col-md-10 py-2">体験保育  <span class="px-3">｜</span>  １歳児以上</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">オプション</div>
                <div class="col-md-10 py-2">
                  その他費用  <span class="px-2">｜</span>  給食、その他費用  <span class="px-2">｜</span>  おやつ
                </div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">支払い総額</div>
                <div class="col-md-10 py-2">￥6,500</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">内訳</div>
                <div class="col-md-10 py-2">
                  ・体験保育  <span class="px-2">｜</span> １歳児以上 プラン（9:00h × ¥10）… ￥5,400 <br>
                  ・施設利用料  … ￥500 <br>
                  ・給食（１食）… ￥500 <br>
                  ・おやつ（１食）… ￥100
                </div>
              </div>
            </div>
          </div>
          <div class="row row-11 m-2 mt-3 shadow">
            <div class="col-md-12 p-4 pt-2">
              <div class="row fw-bold color-cb3a82 py-2">保護者詳細</div>
              <div class="row border-333333 border border-1">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">送迎者名</div>
                <div class="col-md-4 py-2 border-333333 border-end">高畑 陽子（たかばた ようこ）</div>
                <div class="col-md-1 bg-fbeef5 border-ddcfd6 border-end py-2">族柄</div>
                <div class="col-md-1 py-2 border-333333 border-end">祖母</div>
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">電話番号</div>
                <div class="col-md-2 py-2">06-0000-0000</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">送迎者名</div>
                <div class="col-md-4 py-2 border-333333 border-end">高畑 保（たかばた たもつ）</div>
                <div class="col-md-1 bg-fbeef5 border-ddcfd6 border-end py-2">族柄</div>
                <div class="col-md-1 py-2 border-333333 border-end">祖父</div>
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">電話番号</div>
                <div class="col-md-2 py-2">06-0000-0000</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">緊急連絡先</div>
                <div class="col-md-4 py-2 border-333333 border-end">高畑 翔也（たかばた しょうや）</div>
                <div class="col-md-1 bg-fbeef5 border-ddcfd6 border-end py-2">族柄</div>
                <div class="col-md-1 py-2 border-333333 border-end">父</div>
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">電話番号</div>
                <div class="col-md-2 py-2">06-0000-00000</div>
              </div>
              <div class="row pt-3 pb-1">
                <p class="text-center m-0"><button data-bs-toggle="modal" data-bs-target="#thisPageModal1" class="bg-white px-5 py-2 border-333333 border">送迎者一覧確認</button></p>
              </div>
            </div>
          </div>
          <div class="row row-11 m-2 mt-3 shadow">
            <div class="col-md-12 p-4 pt-2">
              <div class="row fw-bold color-cb3a82 py-2">アンケート</div>
              <div class="row border-333333 border border-1">
                <div class="col-md-2 text-center text-sm bg-fbeef5 border-ddcfd6 border-end py-2">アンケート</div>
                <div class="col-md-10 py-2">
                  ▶︎アレルギー あり（卵アレルギーがあります）<br>
                  ▶︎ミルク あり <br>
                  ▶︎おやつ あり <br>
                  ▶︎給食 あり <br>
                  ▶︎離乳食のすすみ具合 <br>
                  （柔らかく煮たブロッコリーをお昼ご飯に食べています。それ以外はまだ食べられません（好き嫌いかも…？）。）
                </div>
              </div>
            </div>
          </div>
          <div class="row bg-light m-2 mt-5">
            <div class="col-md-12 py-2">
              <div class="row">
                <p class="m-0 py-2">
                  書類ダウンロード
                </p>
              </div>
              <div class="row mt-2">
                <div class="col-md-3">
                  <p class="span-6 text-center py-1"><img src="../../assets/images/svg/pdf.svg" alt="EXY"> 送迎者一覧</p>
                </div>
                  <div class="col-md-3">
                  <p class="span-6 text-center py-1"><img src="../../assets/images/svg/pdf.svg" alt="EXY"> 児童調査票</p>
                </div>
                  <div class="col-md-3">
                  <p class="span-6 text-center py-1"><img src="../../assets/images/svg/pdf.svg" alt="EXY"> 保険証</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <p class="span-6 text-center py-1"><img src="../../assets/images/svg/pdf.svg" alt="EXY"> 母子手帳</p>
                </div>
                  <div class="col-md-3">
                  <p class="span-6 text-center py-1"><img src="../../assets/images/svg/pdf.svg" alt="EXY"> 離乳食についての調査票</p>
                </div>
                  <div class="col-md-3">
                  <p class="span-6 text-center py-1"><img src="../../assets/images/svg/pdf.svg" alt="EXY"> 食品調査票</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <p class="span-6 text-center py-1"><img src="../../assets/images/svg/pdf.svg" alt="EXY"> アレルギー管理生活疾患指導表</p>
                </div>
                  <div class="col-md-3">
                  <p class="span-6 text-center py-1"><img src="../../assets/images/svg/pdf.svg" alt="EXY"> 勤務証明書</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-2 mt-4">
            <div class="col-md-12 pt-2">
              <div class="row fw-bold py-2">
                <div class="col-md-2 color-cb3a82">保育開始・完了報告</div>
                <div class="col-md-10 position-relative"><hr class="position-absolute horizontal"></div>
              </div>
              <div class="row border-333333 border border-1">
                <div class="col-md-2 bg-fbeef5 border-ddcfd6 border-end py-2 ps-4">保育実施日</div>
                <div class="col-md-10 py-2">2021/06/02(水)</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 bg-fbeef5 border-ddcfd6 border-end py-2 ps-2"> <input type="checkbox">  保育開始時間</div>
                <div class="col-md-10 py-2">09:00</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 bg-fbeef5 border-ddcfd6 border-end py-2"><input type="checkbox" checked> 保育終了時間</div>
                <div class="col-md-10 py-2">18:00</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 bg-fbeef5 border-ddcfd6 border-end py-2"><input type="checkbox"> 利用プラン</div>
                <div class="col-md-10 py-2">体験保育  <span class="px-2">｜</span>  １歳児以上</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 bg-fbeef5 border-ddcfd6 border-end py-2"><input type="checkbox"> オプション</div>
                <div class="col-md-10 py-2">その他費用  <span class="px-2">｜</span>  給食、その他費用  <span class="px-2">｜</span>  おやつ</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 bg-fbeef5 border-ddcfd6 border-end py-2"><input type="checkbox"> 支払い総額</div>
                <div class="col-md-10 py-2">￥6,500</div>
              </div>
              <div class="row border-333333 border border-top-0">
                <div class="col-md-2 bg-fbeef5 border-ddcfd6 border-end py-2"><input type="checkbox"> 内 訳</div>
                <div class="col-md-10 py-2">
                  ・体験保育 <span class="px-2">｜</span> １歳児以上 プラン（9:00h × ¥10）<span class="ps-2">… ￥5,400</span><br>
                  ・施設利用料 <span class="ps-2">… ￥500</span> <br>
                  ・給食（１食）<span class="ps-2">… ￥500</span> <br>
                  ・おやつ（１食）<span class="ps-2">… ￥100</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row text-center py-3">
            <p><button @click="subPage==1 ? subPage=2 : subPage=1" class="btn btn-dark px-5 rounded-0">修正</button></p>
          </div>
          <div class="row m-2 mt-4 mb-5">
            <div class="col-md-12 pt-2">
              <div class="row py-2 fw-bold">修正履歴</div>
              <div class="row bg-edeff0 fw-bold py-2">
                <div class="col-md-4">修正日</div>
                <div class="col-md-3">修正内容</div>
                <div class="col-md-5">修正の事由</div>
              </div>
              <div class="row border-ddcfd6 border border-1 py-2">
                <div class="col-md-4">2021/06/02  <span class="ps-2">12:00</span></div>
                <div class="col-md-3">保育開始時間</div>
                <div class="col-md-5">保育開始時間の打刻ミスのため</div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="thisPageModal1" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-center fw-bold" id="thisPageModal">送迎者一覧</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
              </div>
              <div class="modal-body pb-5">
                <div class="row">
                  <div class="col-md-6 px-5">
                    <div class="card">
                      <div class="p-4">
                        <img src="../../assets/images/admin/ID2736664_m.png" alt="EXY">
                      </div>
                      <div class="card-body border-dee2e6 border-top">
                        <div class="text-center">高畑 陽子（たかばた ようこ）</div>
                      </div>
                      <div class="row border-dee2e6 border-top mx-0">
                        <div class="col-md-4 text-center bg-efefef py-2">祖母</div>
                        <div class="col-md-8 text-center py-2">06-0000-0000</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 px-5">
                    <div class="card">
                      <div class="p-4">
                        <img src="../../assets/images/admin/ID1037644_m.png" alt="EXY">
                      </div>
                      <div class="card-body border-dee2e6 border-top">
                        <div class="text-center">高畑 保（たかばた たもつ）</div>
                      </div>
                      <div class="row border-dee2e6 border-top mx-0">
                        <div class="col-md-4 text-center bg-efefef py-2">祖父</div>
                        <div class="col-md-8 text-center py-2">06-0000-0000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 2" class="col-md-9 right-col">
        <div class="row py-2">
          <div class="col-md-10 my-auto">
            1-10 / 200件 <span class="ps-3 pt-3 span-5"><i class="fa fa-angle-left text-2xl pe-2" aria-hidden="true"></i> <i class="fa fa-angle-right text-2xl" aria-hidden="true"></i></span>
          </div>
          <div class="col-md-2 pe-4">
            <select name="" id="" class="form-control">
              <option value="">全体</option>
              <option value="">体験保育</option>
              <option value="">月極保育</option>
              <option value="">仮予約中</option>
              <option value="">確定</option>
              <option value="">キャンセル</option>
              <option value="">園見学</option>
            </select>
          </div>
        </div>
        <div class="row row-3 text-xs fw-bold py-1">
          <div class="col-1">
            <p class="m-0">予約内容 <span class="ps-5">希望日</span></p>
          </div>
          <div class="col-1">希望時間</div>
          <div class="col-1">保護者名</div>
          <div class="col-1">お子さま名（年齢）</div>
          <div class="col-1 text-center">対応状況</div>
        </div>
        <div class="row py-3">
          <div class="col-1 my-auto">
            <p class="m-0">体験保育 <span class="ps-3">2021/06/14(月)</span></p>
          </div>
          <div class="col-1 my-auto">11:00〜15:00 (4h)</div>
          <div class="col-1 my-auto">土井 まひる</div>
          <div class="col-1 my-auto">土井 ありす（２歳児）</div>
          <div class="col-1 my-auto px-4">
            <select name="" id="" class="form-select">
              <option value="">未対応</option>
              <option value="">承認待ち</option>
              <option value="" selected>確定待ち</option>
              <option value="">対応済み</option>
            </select>
          </div>
        </div>
        <div class="row row-4 py-2 text-xs">
          <div class="col-1 fw-bold">
            <span class="span-1 px-3 py-1">仮予約中</span>
          </div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1 text-right pe-4">
            (受付日)2021/06/01
          </div>
        </div>
        <div class="row py-3">
          <div class="col-1 my-auto">
            <p class="m-0">月極保育 <span class="ps-3">2021/07/01(木)</span></p>
          </div>
          <div class="col-1 my-auto">09:00〜18:30 (9.5h)</div>
          <div class="col-1 my-auto">久保 恵子</div>
          <div class="col-1 my-auto">久保 克樹（１歳児）</div>
          <div class="col-1 my-auto px-4">
            <select name="" id="" class="form-select">
              <option value="">未対応</option>
              <option value="" >承認待ち</option>
              <option value="" selected>確定待ち</option>
              <option value="">対応済み</option>
            </select>
          </div>
        </div>
        <div class="row row-4 py-2 text-xs">
          <div class="col-1 fw-bold">
            <span class="span-2 px-3 py-1">確定</span>
          </div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1 text-right pe-4">
            (受付日)2021/06/01
          </div>
        </div>
        <div class="row py-3">
          <div class="col-1 my-auto">
            <p class="m-0">体験保育 <span class="ps-3">2021/06/30(水)</span></p>
          </div>
          <div class="col-1 my-auto">10:00〜</div>
          <div class="col-1 my-auto">山田 裕司</div>
          <div class="col-1 my-auto">-</div>
          <div class="col-1 my-auto px-4">
            <select name="" id="" class="form-select">
              <option value="">未対応</option>
              <option value="" >承認待ち</option>
              <option value="" selected>確定待ち</option>
              <option value="" >対応済み</option>
            </select>
          </div>
        </div>
        <div class="row row-4 py-2 text-xs">
          <div class="col-1 fw-bold">
            <span class="span-3 px-3 py-1">予約不可</span>
          </div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1 text-right pe-4">
            (受付日)2021/06/01
          </div>
        </div>
      </div>
      <div v-if="activeTab === 3" class="col-md-9 right-col">
        <div class="row py-2">
          <div class="col-md-10 my-auto">
            1-10 / 200件 <span class="ps-3 pt-3 span-5"><i class="fa fa-angle-left text-2xl pe-2" aria-hidden="true"></i> <i class="fa fa-angle-right text-2xl" aria-hidden="true"></i></span>
          </div>
          <div class="col-md-2 pe-4">
            <select name="" id="" class="form-control">
              <option value="">全体</option>
              <option value="">体験保育</option>
              <option value="">月極保育</option>
              <option value="">仮予約中</option>
              <option value="">確定</option>
              <option value="">キャンセル</option>
              <option value="">園見学</option>
            </select>
          </div>
        </div>
        <div class="row row-3 text-xs fw-bold py-1">
          <div class="col-1">
            <p class="m-0">予約内容 <span class="ps-5">希望日</span></p>
          </div>
          <div class="col-1">希望時間</div>
          <div class="col-1">保護者名</div>
          <div class="col-1">お子さま名（年齢）</div>
          <div class="col-1 text-center">対応状況</div>
        </div>
        <div class="row py-3">
          <div class="col-1 my-auto">
            <p class="m-0">体験保育 <span class="ps-3">2021/06/14(月)</span></p>
          </div>
          <div class="col-1 my-auto">11:00〜15:00 (4h)</div>
          <div class="col-1 my-auto">土井 まひる</div>
          <div class="col-1 my-auto">土井 ありす（２歳児）</div>
          <div class="col-1 my-auto px-4">
            <select name="" id="" class="form-select">
              <option value="">未対応</option>
              <option value="">承認待ち</option>
              <option value="" selected>確定待ち</option>
              <option value="">対応済み</option>
            </select>
          </div>
        </div>
        <div class="row row-4 py-2 text-xs">
          <div class="col-1 fw-bold">
            <span class="span-1 px-3 py-1">仮予約中</span>
          </div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1 text-right pe-4">
            (受付日)2021/06/01
          </div>
        </div>
        <div class="row py-3">
          <div class="col-1 my-auto">
            <p class="m-0">月極保育 <span class="ps-3">2021/07/01(木)</span></p>
          </div>
          <div class="col-1 my-auto">09:00〜18:30 (9.5h)</div>
          <div class="col-1 my-auto">久保 恵子</div>
          <div class="col-1 my-auto">久保 克樹（１歳児）</div>
          <div class="col-1 my-auto px-4">
            <select name="" id="" class="form-select">
              <option value="">未対応</option>
              <option value="" >承認待ち</option>
              <option value="" selected>確定待ち</option>
              <option value="">対応済み</option>
            </select>
          </div>
        </div>
        <div class="row row-4 py-2 text-xs">
          <div class="col-1 fw-bold">
            <span class="span-2 px-3 py-1">確定</span>
          </div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1 text-right pe-4">
            (受付日)2021/06/01
          </div>
        </div>
        <div class="row py-3">
          <div class="col-1 my-auto">
            <p class="m-0">体験保育 <span class="ps-3">2021/06/30(水)</span></p>
          </div>
          <div class="col-1 my-auto">10:00〜</div>
          <div class="col-1 my-auto">山田 裕司</div>
          <div class="col-1 my-auto">-</div>
          <div class="col-1 my-auto px-4">
            <select name="" id="" class="form-select">
              <option value="">未対応</option>
              <option value="" >承認待ち</option>
              <option value="" selected>確定待ち</option>
              <option value="" >対応済み</option>
            </select>
          </div>
        </div>
        <div class="row row-4 py-2 text-xs">
          <div class="col-1 fw-bold">
            <span class="span-3 px-3 py-1">予約不可</span>
          </div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1 text-right pe-4">
            (受付日)2021/06/01
          </div>
        </div>
      </div>
      <div v-if="activeTab === 4" class="col-md-9 right-col">
        <div class="row py-2">
          <div class="col-md-10 my-auto">
            1-10 / 200件 <span class="ps-3 pt-3 span-5"><i class="fa fa-angle-left text-2xl pe-2" aria-hidden="true"></i> <i class="fa fa-angle-right text-2xl" aria-hidden="true"></i></span>
          </div>
          <div class="col-md-2 pe-4">
            <select name="" id="" class="form-control">
              <option value="">全体</option>
              <option value="">体験保育</option>
              <option value="">月極保育</option>
              <option value="">仮予約中</option>
              <option value="">確定</option>
              <option value="">キャンセル</option>
              <option value="">園見学</option>
            </select>
          </div>
        </div>
        <div class="row row-3 text-xs fw-bold py-1">
          <div class="col-1">
            <p class="m-0">予約内容 <span class="ps-5">希望日</span></p>
          </div>
          <div class="col-1">希望時間</div>
          <div class="col-1">保護者名</div>
          <div class="col-1">お子さま名（年齢）</div>
          <div class="col-1 text-center">対応状況</div>
        </div>
        <div class="row py-3">
          <div class="col-1 my-auto">
            <p class="m-0">体験保育 <span class="ps-3">2021/06/14(月)</span></p>
          </div>
          <div class="col-1 my-auto">11:00〜15:00 (4h)</div>
          <div class="col-1 my-auto">土井 まひる</div>
          <div class="col-1 my-auto">土井 ありす（２歳児）</div>
          <div class="col-1 my-auto px-4">
            <select name="" id="" class="form-select">
              <option value="">未対応</option>
              <option value="">承認待ち</option>
              <option value="" selected>確定待ち</option>
              <option value="">対応済み</option>
            </select>
          </div>
        </div>
        <div class="row row-4 py-2 text-xs">
          <div class="col-1 fw-bold">
            <span class="span-1 px-3 py-1">仮予約中</span>
          </div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1 text-right pe-4">
            (受付日)2021/06/01
          </div>
        </div>
        <div class="row py-3">
          <div class="col-1 my-auto">
            <p class="m-0">月極保育 <span class="ps-3">2021/07/01(木)</span></p>
          </div>
          <div class="col-1 my-auto">09:00〜18:30 (9.5h)</div>
          <div class="col-1 my-auto">久保 恵子</div>
          <div class="col-1 my-auto">久保 克樹（１歳児）</div>
          <div class="col-1 my-auto px-4">
            <select name="" id="" class="form-select">
              <option value="">未対応</option>
              <option value="" >承認待ち</option>
              <option value="" selected>確定待ち</option>
              <option value="">対応済み</option>
            </select>
          </div>
        </div>
        <div class="row row-4 py-2 text-xs">
          <div class="col-1 fw-bold">
            <span class="span-2 px-3 py-1">確定</span>
          </div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1 text-right pe-4">
            (受付日)2021/06/01
          </div>
        </div>
        <div class="row py-3">
          <div class="col-1 my-auto">
            <p class="m-0">体験保育 <span class="ps-3">2021/06/30(水)</span></p>
          </div>
          <div class="col-1 my-auto">10:00〜</div>
          <div class="col-1 my-auto">山田 裕司</div>
          <div class="col-1 my-auto">-</div>
          <div class="col-1 my-auto px-4">
            <select name="" id="" class="form-select">
              <option value="">未対応</option>
              <option value="" >承認待ち</option>
              <option value="" selected>確定待ち</option>
              <option value="" >対応済み</option>
            </select>
          </div>
        </div>
        <div class="row row-4 py-2 text-xs">
          <div class="col-1 fw-bold">
            <span class="span-3 px-3 py-1">予約不可</span>
          </div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-1 text-right pe-4">
            (受付日)2021/06/01
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ja';
import Breadcrumb from "../../components/adminPartials/Breadcrumb"
import Admin from "../../layouts/Admin";
export default {
  name: "NurserySchoolMyPageReservationList",
  created() {
    this.$emit('update:layout', Admin)
  },
  components: {
    Breadcrumb,
    DatePicker
  },
  data() {
    return {
      dataPageName: "予約リスト",
      activeTab: 1,
      subTab: 1,
      subPage: 1,
    }
  }
}
</script>

<style scoped>

</style>