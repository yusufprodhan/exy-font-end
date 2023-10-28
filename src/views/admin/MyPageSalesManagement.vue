<template>
  <div class="my-page-sales-management">
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <div class="row w-100 ms-0 pt-2 pb-3 ps-5 text-xl fw-bold border-dee2e6 border-bottom">
      売上管理
    </div>
    <div class="container">
      <div class="row py-3">
        <div class="col-md-6 text-xl fw-bold">
          <i class="fa fa-caret-left me-3" aria-hidden="true"></i> 2021年8月度 <i class="fa fa-caret-right ms-3" aria-hidden="true"></i>
        </div>
        <div class="col-md-6 text-right my-auto">
          <p class="m-0 "><span class="border border-color-707070 border-1 px-3 py-2">入金管理</span></p>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-md-3">
          <select name="" id="" class="form-select">
            <option value="">全体</option>
          </select>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-md-3">
          <input type="text" class="form-control" value="チェックした請求を一括確定">
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-12 border border-333333 border-1 text-sm">
          <div class="row bg-f2f2f2">
            <div class="col-md-3 border-color-707070 border-end ps-4 pt-3 py-2">名前</div>
            <div class="col-md-2 border-color-707070 border-end text-center py-2 pt-3">状況</div>
            <div class="col-md-1 border-color-707070 border-end text-center py-2">合計</div>
            <div class="col-md-1 border-color-707070 border-end text-center py-2">体験保育料</div>
            <div class="col-md-1 border-color-707070 border-end text-center py-2">体験保育延長料</div>
            <div class="col-md-1 border-color-707070 border-end text-center py-2">月極保育料</div>
            <div class="col-md-1 border-color-707070 border-end text-center py-2">月極保育延長料</div>
            <div class="col-md-1 border-color-707070 border-end text-center py-2">その他費用</div>
            <div class="col-md-1 text-center py-2">割引</div>
          </div>
          <div class="row border-color-707070 border-top">
            <div class="col-md-5 border-color-707070 border-end ps-4 py-2">請求総額（5名）</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥57,700</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥18,000</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥35,700</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥4,000</div>
            <div class="col-md-1 py-2 text-right">¥0</div>
          </div>
          <div class="row border-color-707070 border-top">
            <div class="col-md-3 border-color-707070 border-end ps-4 py-2">
              <p class="m-0"><input type="checkbox"> <span class="px-3 text-xs color-cb3a82">高畑 優衣</span> <span class="color-9b9b9b text-xss">（0歳児）</span></p>
            </div>
            <div class="col-md-2 border-color-707070 border-end py-2">
              <p class="m-0 text-xss"><span class="color-64798f fw-bold">確定済み</span> <span class="pull-right px-2 border border-333333 border-1 rounded">未確定に戻す</span></p>
            </div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥5,000</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥4,500</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥500</div>
            <div class="col-md-1 py-2 text-right">¥0</div>
          </div>
          <div class="row border-color-707070 border-top">
            <div class="col-md-3 border-color-707070 border-end ps-4 py-2">
              <p class="m-0"><input type="checkbox"> <span class="px-3 text-xs color-cb3a82">上田 海音</span> <span class="color-9b9b9b text-xss">（0歳児）</span></p>
            </div>
            <div class="col-md-2 border-color-707070 border-end py-2">
              <p class="m-0 text-xss"><span class="color-ed5565 fw-bold">未確定</span> <span class="pull-right px-3 border border-333333 border-1 rounded">確定する</span></p>
            </div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥5,000</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥4,500</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥500</div>
            <div class="col-md-1 py-2 text-right">¥0</div>
          </div>
          <div class="row border-color-707070 border-top">
            <div class="col-md-3 border-color-707070 border-end ps-4 py-2">
              <p class="m-0"><input type="checkbox"> <span class="px-3 text-xs color-cb3a82">安達 柚</span> <span class="color-9b9b9b text-xss">（1歳児）</span></p>
            </div>
            <div class="col-md-2 border-color-707070 border-end py-2">
              <p class="m-0 text-xss"><span class="color-ed5565 fw-bold">未確定</span> <span class="pull-right px-3 border border-333333 border-1 rounded">確定する</span></p>
            </div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥4,000</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥3,000</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥1,000</div>
            <div class="col-md-1 py-2 text-right">¥0</div>
          </div>
          <div class="row border-color-707070 border-top">
            <div class="col-md-3 border-color-707070 border-end ps-4 py-2">
              <p class="m-0"><input type="checkbox"> <span class="px-3 text-xs color-cb3a82">白川 洋</span> <span class="color-9b9b9b text-xss">（1歳児）</span></p>
            </div>
            <div class="col-md-2 border-color-707070 border-end py-2">
              <p class="m-0 text-xss"><span class="color-ed5565 fw-bold">未確定</span> <span class="pull-right px-3 border border-333333 border-1 rounded">確定する</span></p>
            </div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥4,000</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥3,000</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥1,000</div>
            <div class="col-md-1 py-2 text-right">¥0</div>
          </div>
          <div class="row border-color-707070 border-top">
            <div class="col-md-3 border-color-707070 border-end ps-4 py-2">
              <p class="m-0"><input type="checkbox"> <span class="px-3 text-xs color-cb3a82">田中 空</span> <span class="color-9b9b9b text-xss">（1歳児）</span></p>
            </div>
            <div class="col-md-2 border-color-707070 border-end py-2">
              <p class="m-0 text-xss"><span class="color-ed5565 fw-bold">未確定</span> <span class="pull-right px-3 border border-333333 border-1 rounded">確定する</span></p>
            </div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥4,000</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥3,000</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥1,000</div>
            <div class="col-md-1 py-2 text-right">¥0</div>
          </div>
          <div class="row border-color-707070 border-top">
            <div class="col-md-3 border-color-707070 border-end ps-4 py-2">
              <p class="m-0"><input type="checkbox"> <span class="px-3 text-xs color-cb3a82">鈴木 翔吾</span> <span class="color-9b9b9b text-xss">（2歳児）</span></p>
            </div>
            <div class="col-md-2 border-color-707070 border-end py-2">
              <p class="m-0 text-xss"><span class="color-ed5565 fw-bold">未確定</span> <span class="pull-right px-3 border border-333333 border-1 rounded">確定する</span></p>
            </div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥35,700</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥35,700</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 border-color-707070 border-end text-right py-2">¥0</div>
            <div class="col-md-1 py-2 text-right">¥0</div>
          </div>
        </div>
      </div>
      <div v-if="subTab===1">
        <div class="details-tab">
          <div class="px-0 tabs">
            <a @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]">2021年8月度</a>
            <a @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]">2021年7月度</a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div v-if="activeTab===1" class="py-3 pb-5">
          <div class="row py-2">
            <p class="text-right">
              <button  @click="subTab=2" type="button" class="btn btn btn-secodery text-white rounded-0 border-0 bg-dark px-5 fw-bold py-2 me-3" >
                修正
              </button>
              <button type="button" class="btn btn btn-secodery text-white rounded-0 border-0 bg-cb3a82 px-5 fw-bold py-2" >
                ダウンロード
              </button>
            </p>
          </div>
          <div class="row px-2">
            <div class="col-md-12 border-color-707070 border border-1 py-3 pb-5">
              <div class="row py-3">
                <p class="text-center text-xl fw-bold m-0">2021年8月度 請求明細<span class="pull-right text-sm fw-normal pt-1"> 請求日：2021年8月1日</span></p>
              </div>
              <div class="row ms-2 py-3 pt-4">
                <div class="col-md-3 border-333333 border-bottom text-2xl fw-bold">
                  鈴木 翔吾 <span class="pull-right text-xl">様</span>
                </div>
                <div class="col-md-9 text-right text-lg">COCOROHOIKUEN 弁天町園</div>
              </div>
              <div class="row ms-1 py-2 text-sm">2021年8月度分の保育料につきまして、下記の通りご請求申し上げます。</div>
              <div class="row ms-1 py-2">
                <div class="col-md-6 border-333333 border border-1">
                  <div class="row">
                    <div class="col-md-4 bg-fbeef5 text-center text-sm py-2">ご請求金額</div>
                    <div class="col-md-8 ps-4 text-sm fw-bold py-2">¥35,700</div>
                  </div>
                </div>
              </div>
              <div class="row mx-1 bg-f2f2f2 border-333333 border border-1 mt-4 text-sm">
                <div class="col-md-4 text-center border-333333 border-end py-2">項目</div>
                <div class="col-md-1 text-center border-333333 border-end py-2">単価</div>
                <div class="col-md-2 text-center border-333333 border-end py-2">時間</div>
                <div class="col-md-1 text-center border-333333 border-end py-2">価格</div>
                <div class="col-md-4 text-center py-2">備考</div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm mb-5">
                <div class="col-md-1 border-333333 border-end py-2">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2">通常プラン  <span class="px-2">｜</span>  １歳児・２歳児</div>
                <div class="col-md-1 border-333333 border-end py-2">¥35,700</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">-</div>
                <div class="col-md-1 border-333333 border-end py-2">¥35,700</div>
                <div class="col-md-4 py-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeTab===2" class="py-3 pb-5">
          <div class="row py-2">
            <p class="text-right">
              <button type="button" class="btn btn btn-secodery text-white rounded-0 border-0 bg-cb3a82 px-5 fw-bold py-2" >
                ダウンロード
              </button>
            </p>
          </div>
          <div class="row px-2">
            <div class="col-md-12 border-color-707070 border border-1 py-3 pb-5">
              <div class="row py-3">
                <p class="text-center text-xl fw-bold m-0">2021年7月度 請求明細 <span class="pull-right text-sm fw-normal pt-1"> 請求日：2021年7月1日</span></p>
              </div>
              <div class="row ms-2 py-3 pt-4">
                <div class="col-md-3 border-333333 border-bottom text-2xl fw-bold">
                  鈴木 翔吾 <span class="pull-right text-xl">様</span>
                </div>
                <div class="col-md-9 text-right text-lg">COCOROHOIKUEN 弁天町園</div>
              </div>
              <div class="row ms-1 py-2 text-sm">2021年8月度分の保育料につきまして、下記の通りご請求申し上げます。</div>
              <div class="row ms-1 py-2">
                <div class="col-md-6 border-333333 border border-1">
                  <div class="row">
                    <div class="col-md-4 bg-fbeef5 text-center text-sm py-2">ご請求金額</div>
                    <div class="col-md-8 ps-4 text-sm fw-bold py-2">¥60,700</div>
                  </div>
                </div>
              </div>
              <div class="row mx-1 bg-f2f2f2 border-333333 border border-1 mt-4 text-sm">
                <div class="col-md-4 text-center border-333333 border-end py-2">項目</div>
                <div class="col-md-1 text-center border-333333 border-end py-2">単価</div>
                <div class="col-md-2 text-center border-333333 border-end py-2">時間</div>
                <div class="col-md-1 text-center border-333333 border-end py-2">価格</div>
                <div class="col-md-4 text-center py-2">備考</div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2">通常プラン  <span class="px-2">｜</span>  １歳児・２歳児</div>
                <div class="col-md-1 border-333333 border-end py-2">¥35,700</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">-</div>
                <div class="col-md-1 border-333333 border-end py-2">¥35,700</div>
                <div class="col-md-4 py-2"></div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2">入園必要経費</div>
                <div class="col-md-1 border-333333 border-end py-2">¥25,000</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">-</div>
                <div class="col-md-1 border-333333 border-end py-2">¥25,000</div>
                <div class="col-md-4 py-2"></div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm mb-5">
                <div class="col-md-1 border-333333 border-end py-2">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2">月極保育延長料</div>
                <div class="col-md-1 border-333333 border-end py-2">¥35</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">30min</div>
                <div class="col-md-1 border-333333 border-end py-2">¥1,050</div>
                <div class="col-md-4 py-2">6/2（水）19:01〜19:30(30min)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="subTab===2">
        <div class="details-tab">
          <div class="px-0 tabs">
            <a @click="innerTab=1" :class="[ innerTab === 1 ? 'active' : '' ]">2021年8月度</a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div v-if="innerTab===1" class="py-3 pb-5">
          <div class="row py-2">
            <p class="text-right">
              <button @click="subTab=1,activeTab=2" type="button" class="btn btn btn-secodery text-white rounded-0 border-0 bg-cb3a82 px-5 fw-bold py-2 me-3" >
                ダウンロード
              </button>
              <button @click="subTab=0" type="button" class="btn btn-secodery border-333333 border border-1 px-4 rounded-0">
                  キャンセル
                </button>
            </p>
          </div>
          <div class="row px-2">
            <div class="col-md-12 py-3 pb-5">
              <div class="row py-3">
                <p class="text-center text-xl fw-bold m-0">2021年8月度 請求明細</p>
              </div>
              <div class="row ms-2 py-3 pt-4">
                <div class="col-md-3 border-333333 border-bottom text-2xl fw-bold">
                  鈴木 翔吾 <span class="pull-right text-xl">様</span>
                </div>
              </div>
              <div class="row ms-1 py-2 mt-1">
                <div class="col-md-6 border-333333 border border-1">
                  <div class="row">
                    <div class="col-md-4 bg-fbeef5 text-center text-sm py-2">ご請求金額</div>
                    <div class="col-md-8 ps-4 text-sm fw-bold py-2">¥35,700</div>
                  </div>
                </div>
              </div>
              <div class="row mx-1 bg-f2f2f2 border-333333 border border-1 mt-4 text-sm">
                <div class="col-md-4 text-center border-333333 border-end py-2">項目</div>
                <div class="col-md-1 text-center border-333333 border-end py-2">単価</div>
                <div class="col-md-2 text-center border-333333 border-end py-2">時間</div>
                <div class="col-md-1 text-center border-333333 border-end py-2">価格</div>
                <div class="col-md-4 text-center py-2">備考</div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2 pt-3">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2 pt-3">通常プラン<span class="px-2">｜</span>０歳児</div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3 text-center">￥35,900</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">
                   <select class="p-2 w-100 border border-2 rounded bg-light form-text text-center">
                    <option selected></option>
                    <option :value="index" v-for="(n,index) in 12" :key="index">{{ index }}</option>
                  </select>
                </div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3"></div>
                <div class="col-md-4 py-2">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2 pt-3">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2 pt-3">通常プラン <span class="px-2">｜</span>１歳児・２歳児</div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3 text-center">￥35,900</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">
                   <select class="p-2 w-100 border border-2 rounded bg-light form-text text-center">
                    <option selected>1</option>
                    <option :value="index" v-for="(n,index) in 12" :key="index">{{ index }}</option>
                  </select>
                </div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3 text-center">￥35,900</div>
                <div class="col-md-4 py-2">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2 pt-3">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2 pt-3">通常プラン <span class="px-2">｜</span>３歳児以上</div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3 text-center">¥0</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">
                   <select class="p-2 w-100 border border-2 rounded bg-light form-text text-center">
                    <option selected></option>
                    <option :value="index" v-for="(n,index) in 12" :key="index">{{ index }}</option>
                  </select>
                </div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3"></div>
                <div class="col-md-4 py-2">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2 pt-3">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2 pt-3">時短プラン <span class="px-2">｜</span>０歳児</div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3 text-center">¥20,000</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">
                   <select class="p-2 w-100 border border-2 rounded bg-light form-text text-center">
                    <option selected></option>
                    <option :value="index" v-for="(n,index) in 12" :key="index">{{ index }}</option>
                  </select>
                </div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3"></div>
                <div class="col-md-4 py-2">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2 pt-3">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2 pt-3">時短プラン <span class="px-2">｜</span>１歳児・２歳児</div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3 text-center">¥15,000</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">
                   <select class="p-2 w-100 border border-2 rounded bg-light form-text text-center">
                    <option selected></option>
                    <option :value="index" v-for="(n,index) in 12" :key="index">{{ index }}</option>
                  </select>
                </div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3"></div>
                <div class="col-md-4 py-2">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2 pt-3">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2 pt-3">時短プラン <span class="px-2">｜</span>３歳児以上</div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3 text-center">¥0</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">
                   <select class="p-2 w-100 border border-2 rounded bg-light form-text text-center">
                    <option selected></option>
                    <option :value="index" v-for="(n,index) in 12" :key="index">{{ index }}</option>
                  </select>
                </div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3"></div>
                <div class="col-md-4 py-2">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2 pt-3">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2 pt-3">保育補助費 <span class="px-2">｜</span>全年齢対応</div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3 text-center">¥20,000</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">
                   <select class="p-2 w-100 border border-2 rounded bg-light form-text text-center">
                    <option selected></option>
                    <option :value="index" v-for="(n,index) in 12" :key="index">{{ index }}</option>
                  </select>
                </div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3"></div>
                <div class="col-md-4 py-2">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2 pt-3">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2 pt-3">手ぶらプラン <span class="px-2">｜</span>０・１歳児</div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3 text-center">¥4,000 </div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">
                   <select class="p-2 w-100 border border-2 rounded bg-light form-text text-center">
                    <option selected></option>
                    <option :value="index" v-for="(n,index) in 12" :key="index">{{ index }}</option>
                  </select>
                </div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3"></div>
                <div class="col-md-4 py-2">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2 pt-3">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2 pt-3">手ぶらプラン<span class="px-2">｜</span>２歳児</div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3 text-center">¥3,500</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">
                   <select class="p-2 w-100 border border-2 rounded bg-light form-text text-center">
                    <option selected></option>
                    <option :value="index" v-for="(n,index) in 12" :key="index">{{ index }}</option>
                  </select>
                </div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3"></div>
                <div class="col-md-4 py-2">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm">
                <div class="col-md-1 border-333333 border-end py-2 pt-3">月極保育</div>
                <div class="col-md-3 border-333333 border-end py-2 pt-3">手ぶらプラン<span class="px-2">｜</span>３歳児以上</div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3 text-center">¥3,000</div>
                <div class="col-md-2 border-333333 border-end py-2 text-center">
                   <select class="p-2 w-100 border border-2 rounded bg-light form-text text-center">
                    <option selected></option>
                    <option :value="index" v-for="(n,index) in 12" :key="index">{{ index }}</option>
                  </select>
                </div>
                <div class="col-md-1 border-333333 border-end py-2 pt-3"></div>
                <div class="col-md-4 py-2">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="row mx-1 border-333333 border border-top-0 text-sm pb-5 mb-5 pt-2">
                <p>
                  <button  @click="subTab=2" type="button" class="btn btn btn-secodery text-white rounded-0 border-0 bg-dark px-4 fw-bold py-2 me-3" >
                    <i class="fa fa-plus-circle" aria-hidden="true"></i> 項目を追加する
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
  name: "MyPageSalesManagement",
  created() {
    this.$emit('update:layout', Admin)
  },
  components: {
    Breadcrumb
  },
  data() {
    return {
      dataPageName: "売上管理",
      activeTab: 2,
      subTab: 1,
      innerTab: 1
    }
  }
}
</script>

<style scoped>

</style>