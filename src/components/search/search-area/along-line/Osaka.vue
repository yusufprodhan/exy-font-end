<template>
  <div class="row">
    <div class="col-md-6">
      <div class="desiire-station-select-btn-area">
        <div class="row">
          <div class="col-3">
            <router-link :to="{name:'SearchFromAlongLine.Hyogo'}">
              <img src="../../../../assets/images/desire-station-icon/hyogo.png" alt="EXY" class="img-fluid"/>
            </router-link>
          </div>
          <div class="col-6">
            <router-link :to="{name:'SearchFromAlongLine.Kyoto'}">
              <img src="../../../../assets/images/desire-station-icon/kyoto.png" alt="EXY" class="img-fluid"/>
            </router-link>
            <div class="row mt-2">
              <div class="col-6">
                <router-link :to="{name:'SearchFromAlongLine.Osaka'}">
                  <img src="../../../../assets/images/desire-station-icon/osaka_selected.png" alt="EXY" class="img-fluid"/>
                </router-link>
              </div>
              <div class="col-6">
                <router-link :to="{name:'SearchFromAlongLine.Nara'}">
                  <img src="../../../../assets/images/desire-station-icon/nara.png" alt="EXY" class="img-fluid"/>
                </router-link>
              </div>
              <div class="col-12">
                <router-link :to="{name:'SearchFromAlongLine.Wakayama'}">
                  <img src="../../../../assets/images/desire-station-icon/wakayama.png" alt="EXY" class="img-fluid"/>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-3">
            <router-link :to="{name:'SearchFromAlongLine.Shiga'}">
              <img src="../../../../assets/images/desire-station-icon/shiga.png" alt="EXY" class="img-fluid"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="accordion" id="accordionExy">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              JR
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExy">
            <div class="accordion-body row">
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">JR大阪環状線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">JR桜島線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">JR関西空港線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">JRおおさか東線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">JR東海道本線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">JR関西本線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">JR福知山線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">JR片町線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">JR阪和線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">JR東西線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Osaka Metro
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExy">
            <div class="accordion-body row">
              <div class="col-md-6">
                <ul>
                  <li>
                    <label class="container-checkbox">地下鉄御堂筋線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">地下鉄四ツ橋線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">地下鉄中央線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">地下鉄堺筋線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">地下鉄今里筋線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>
                    <label class="container-checkbox">地下鉄谷町線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">南港ポートタウン線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">地下鉄千日前線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">地下鉄長堀鶴見緑地線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              私鉄
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExy">
            <div class="accordion-body row">
              <div class="col-md-6">
                <ul>
                  <li>
                    <label class="container-checkbox">近鉄けいはんな線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">近鉄難波線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">近鉄信貴線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">近鉄長野線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">北大阪急行
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">南海空港線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">南海多奈川線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">南海汐見橋線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">阪急神戸線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">阪急箕面線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">阪急京都戦
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">大阪モノレール彩都線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">京阪交野線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">阪堺電気軌道上町線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">阪神本線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">能勢電鉄妙見線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>
                    <label class="container-checkbox">近鉄奈良線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">近鉄大阪線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">近鉄南大阪線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">近鉄道明寺線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">南海本線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">南海高師浜線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">南海高野線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">泉北高速鉄道
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">阪急宝塚線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">阪急千里線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">大阪モノレール本線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">京阪本線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">京阪中之島線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">阪堺電気軌道阪堺線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">阪神電鉄阪神なんば線
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">水間鉄道
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 mt-5">

      <railway-line/>

      <router-link :to="{name:'Search'}" class="d-block bg-cb3a82 text-center py-3 text-white text-xl mt-5">この条件で検索する</router-link>
    </div>
  </div>
</template>

<script>
import RailwayLine from "./RailwayLine";

export default {
  name: "Osaka",
  components: { RailwayLine }
}
</script>

<style scoped>

</style>