<template>
  <div class="curriculum-details" v-if="!loading">
    <div class="container">
      <div class="text-center">
        <h4><span class="color-cb3a82">#</span>年間カリキュラム</h4>
      </div>

      <button class="accordion-button fs-5 mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#overall" aria-expanded="true" aria-controls="overall">保育の内容に関する全体的な計画 を見る</button>

      <div id="overall" class="accordion-collapse collapse show collapse-body-1">

        <div class="row mt-2 row-1" v-for="(activitie,index) in data.activities" :key="index">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <div class="text-center" v-html="activitie.title"></div>
          </div>
          <div class="col-md-10 py-2">
            <div v-html="activitie.description"></div>
          </div>
        </div>

        <ul class="age-tab-menu">
          <li :class="[ isOverall === 0 ? 'active' : '' ]" @click="isOverall=0">０歳児</li>
          <li :class="[ isOverall === 1 ? 'active' : '' ]" @click="isOverall=1">１歳児</li>
          <li :class="[ isOverall === 2 ? 'active' : '' ]" @click="isOverall=2">２歳児</li>
          <li :class="[ isOverall === 3 ? 'active' : '' ]" @click="isOverall=3">３歳児</li>
          <li :class="[ isOverall === 4 ? 'active' : '' ]" @click="isOverall=4">４歳児</li>
          <li :class="[ isOverall === 5 ? 'active' : '' ]" @click="isOverall=5">５歳児</li>
        </ul>

        <div class="row row-2">
          <p class="m-0">子どもの保育目標</p>
        </div>
        <div class="row row-3">
          <div class="exy--p-0" v-if="isOverall===0 && !empty(data.goalsByAge)" v-html="data.goalsByAge.zero_year_old_child"></div>
          <div class="exy--p-0" v-if="isOverall===1 && !empty(data.goalsByAge)" v-html="data.goalsByAge.one_year_old_child"></div>
          <div class="exy--p-0" v-if="isOverall===2 && !empty(data.goalsByAge)" v-html="data.goalsByAge.two_year_old_child"></div>
          <div class="exy--p-0" v-if="isOverall===3 && !empty(data.goalsByAge)" v-html="data.goalsByAge.three_year_old_child"></div>
          <div class="exy--p-0" v-if="isOverall===4 && !empty(data.goalsByAge)" v-html="data.goalsByAge.four_year_old_child"></div>
          <div class="exy--p-0" v-if="isOverall===5 && !empty(data.goalsByAge)" v-html="data.goalsByAge.five_year_old_child"></div>
        </div>
        <div class="row mt-1 row-2">
          <p class="m-0">養護（保育士が行う事項）</p>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left ps-4 pt-2">
            <p class="m-0">生命の保持 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="isOverall===0 && !empty(data.maintenance_1)" v-html="data.maintenance_1.zero_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===1 && !empty(data.maintenance_1)" v-html="data.maintenance_1.one_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===2 && !empty(data.maintenance_1)" v-html="data.maintenance_1.two_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===3 && !empty(data.maintenance_1)" v-html="data.maintenance_1.three_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===4 && !empty(data.maintenance_1)" v-html="data.maintenance_1.four_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===5 && !empty(data.maintenance_1)" v-html="data.maintenance_1.five_year_old_child"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left ps-4 pt-2">
            <p class="m-0">情緒の安定 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="isOverall===0 && !empty(data.maintenance_2)" v-html="data.maintenance_2.zero_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===1 && !empty(data.maintenance_2)" v-html="data.maintenance_2.one_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===2 && !empty(data.maintenance_2)" v-html="data.maintenance_2.two_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===3 && !empty(data.maintenance_2)" v-html="data.maintenance_2.three_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===4 && !empty(data.maintenance_2)" v-html="data.maintenance_2.four_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===5 && !empty(data.maintenance_2)" v-html="data.maintenance_2.five_year_old_child"></div>
          </div>
        </div>
        <div class="row mt-1 row-2">
          <p class="m-0">教育（園児が環境に関わって経験する事項）</p>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">人間関係 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="isOverall===0 && !empty(data.maintenance_3)" v-html="data.maintenance_3.zero_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===1 && !empty(data.maintenance_3)" v-html="data.maintenance_3.one_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===2 && !empty(data.maintenance_3)" v-html="data.maintenance_3.two_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===3 && !empty(data.maintenance_3)" v-html="data.maintenance_3.three_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===4 && !empty(data.maintenance_3)" v-html="data.maintenance_3.four_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===5 && !empty(data.maintenance_3)" v-html="data.maintenance_3.five_year_old_child"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">健康 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="isOverall===0 && !empty(data.maintenance_4)" v-html="data.maintenance_4.zero_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===1 && !empty(data.maintenance_4)" v-html="data.maintenance_4.one_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===2 && !empty(data.maintenance_4)" v-html="data.maintenance_4.two_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===3 && !empty(data.maintenance_4)" v-html="data.maintenance_4.three_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===4 && !empty(data.maintenance_4)" v-html="data.maintenance_4.four_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===5 && !empty(data.maintenance_4)" v-html="data.maintenance_4.five_year_old_child"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">環境 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="isOverall===0 && !empty(data.maintenance_5)" v-html="data.maintenance_5.zero_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===1 && !empty(data.maintenance_5)" v-html="data.maintenance_5.one_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===2 && !empty(data.maintenance_5)" v-html="data.maintenance_5.two_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===3 && !empty(data.maintenance_5)" v-html="data.maintenance_5.three_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===4 && !empty(data.maintenance_5)" v-html="data.maintenance_5.four_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===5 && !empty(data.maintenance_5)" v-html="data.maintenance_5.five_year_old_child"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">言葉 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="isOverall===0 && !empty(data.maintenance_6)" v-html="data.maintenance_6.zero_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===1 && !empty(data.maintenance_6)" v-html="data.maintenance_6.one_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===2 && !empty(data.maintenance_6)" v-html="data.maintenance_6.two_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===3 && !empty(data.maintenance_6)" v-html="data.maintenance_6.three_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===4 && !empty(data.maintenance_6)" v-html="data.maintenance_6.four_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===5 && !empty(data.maintenance_6)" v-html="data.maintenance_6.five_year_old_child"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">表現 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="isOverall===0 && !empty(data.maintenance_7)" v-html="data.maintenance_7.zero_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===1 && !empty(data.maintenance_7)" v-html="data.maintenance_7.one_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===2 && !empty(data.maintenance_7)" v-html="data.maintenance_7.two_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===3 && !empty(data.maintenance_7)" v-html="data.maintenance_7.three_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===4 && !empty(data.maintenance_7)" v-html="data.maintenance_7.four_year_old_child"></div>
            <div class="exy--p-0" v-if="isOverall===5 && !empty(data.maintenance_7)" v-html="data.maintenance_7.five_year_old_child"></div>
          </div>
        </div>

        <div class="mt-5">
          <div class="row mt-2 row-1" v-for="(content,index) in data.contents" :key="index">
            <div class="col-md-2 col-left d-flex flex-column justify-content-center">
              <div class="text-center" v-html="content.title"></div>
            </div>
            <div class="col-md-10 pt-2 pb-2">
              <div v-html="content.description"></div>
            </div>
          </div>
        </div>

      </div>

      <button class="accordion-button fs-5 mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#annual" aria-expanded="true" aria-controls="annual">年齢ごとの年間指導 を見る</button>

      <div id="annual" class="accordion-collapse collapse show collapse-body-1">
        <ul class="age-tab-menu">
          <li :class="[ isAnnual === 0 ? 'active' : '' ]" @click="getRecord(0)">０歳児</li>
          <li :class="[ isAnnual === 1 ? 'active' : '' ]" @click="getRecord(1)">１歳児</li>
          <li :class="[ isAnnual === 2 ? 'active' : '' ]" @click="getRecord(2)">２歳児</li>
          <li :class="[ isAnnual === 3 ? 'active' : '' ]" @click="getRecord(3)">３歳児</li>
          <li :class="[ isAnnual === 4 ? 'active' : '' ]" @click="getRecord(4)">４歳児</li>
          <li :class="[ isAnnual === 5 ? 'active' : '' ]" @click="getRecord(5)">５歳児</li>
        </ul>

        <div class="row-2">
          <p class="m-0">年間目標</p>
        </div>
        <div class="row-3">
          <div class="exy--p-0" v-if="isAnnual===0 && !empty(data.goal_0)" v-html="data.goal_0.annual_goal"></div>
          <div class="exy--p-0" v-if="isAnnual===1 && !empty(data.goal_1)" v-html="data.goal_1.annual_goal"></div>
          <div class="exy--p-0" v-if="isAnnual===2 && !empty(data.goal_2)" v-html="data.goal_2.annual_goal"></div>
          <div class="exy--p-0" v-if="isAnnual===3 && !empty(data.goal_3)" v-html="data.goal_3.annual_goal"></div>
          <div class="exy--p-0" v-if="isAnnual===4 && !empty(data.goal_4)" v-html="data.goal_4.annual_goal"></div>
          <div class="exy--p-0" v-if="isAnnual===5 && !empty(data.goal_5)" v-html="data.goal_5.annual_goal"></div>
        </div>
        <div class="mt-1 row-2">
          <p class="m-0">家族との連携</p>
        </div>
        <div class="row-3">
          <div class="exy--p-0" v-if="isAnnual===0 && !empty(data.goal_0)" v-html="data.goal_0.cooperation_with_family"></div>
          <div class="exy--p-0" v-if="isAnnual===1 && !empty(data.goal_1)" v-html="data.goal_1.cooperation_with_family"></div>
          <div class="exy--p-0" v-if="isAnnual===2 && !empty(data.goal_2)" v-html="data.goal_2.cooperation_with_family"></div>
          <div class="exy--p-0" v-if="isAnnual===3 && !empty(data.goal_3)" v-html="data.goal_3.cooperation_with_family"></div>
          <div class="exy--p-0" v-if="isAnnual===4 && !empty(data.goal_4)" v-html="data.goal_4.cooperation_with_family"></div>
          <div class="exy--p-0" v-if="isAnnual===5 && !empty(data.goal_5)" v-html="data.goal_5.cooperation_with_family"></div>
        </div>

        <div class="row mt-2 row-2">
          <p class="m-0">１期（４〜６月）</p>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">子どもの姿 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_1)" v-html="data.quarter.quarter_1.quarter_phase_one"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">ねらい </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_2)" v-html="data.quarter.quarter_2.quarter_phase_one"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">養護 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_3)" v-html="data.quarter.quarter_3.quarter_phase_one"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">教育 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_4)" v-html="data.quarter.quarter_4.quarter_phase_one"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">環境構成 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_5)" v-html="data.quarter.quarter_5.quarter_phase_one"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">保育者の援助 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_6)" v-html="data.quarter.quarter_6.quarter_phase_one"></div>
          </div>
        </div>

        <div class="row mt-2 row-2">
          <p class="m-0">２期（７〜９月）</p>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">子どもの姿 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_1)" v-html="data.quarter.quarter_1.quarter_phase_two"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">ねらい </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_2)" v-html="data.quarter.quarter_2.quarter_phase_two"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">養護 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_3)" v-html="data.quarter.quarter_3.quarter_phase_two"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">教育 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_4)" v-html="data.quarter.quarter_4.quarter_phase_two"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">環境構成 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_5)" v-html="data.quarter.quarter_5.quarter_phase_two"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">保育者の援助 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_6)" v-html="data.quarter.quarter_6.quarter_phase_two"></div>
          </div>
        </div>

        <div class="row mt-2 row-2">
          <p class="m-0">３期（１０〜１２月）</p>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">子どもの姿 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_1)" v-html="data.quarter.quarter_1.quarter_phase_three"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">ねらい </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_2)" v-html="data.quarter.quarter_2.quarter_phase_three"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">養護 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_3)" v-html="data.quarter.quarter_3.quarter_phase_three"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">教育 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_4)" v-html="data.quarter.quarter_4.quarter_phase_three"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">環境構成 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_5)" v-html="data.quarter.quarter_5.quarter_phase_three"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">保育者の援助 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_6)" v-html="data.quarter.quarter_6.quarter_phase_three"></div>
          </div>
        </div>

        <div class="row mt-2 row-2">
          <p class="m-0">４期（１〜３月）</p>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">子どもの姿 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_1)" v-html="data.quarter.quarter_1.quarter_phase_four"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">ねらい </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_2)" v-html="data.quarter.quarter_2.quarter_phase_four"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">養護 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_3)" v-html="data.quarter.quarter_3.quarter_phase_four"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">教育 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_4)" v-html="data.quarter.quarter_4.quarter_phase_four"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">環境構成 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_5)" v-html="data.quarter.quarter_5.quarter_phase_four"></div>
          </div>
        </div>
        <div class="row row-1">
          <div class="col-md-2 col-left d-flex flex-column justify-content-center">
            <p class="m-0 text-center">保育者の援助 </p>
          </div>
          <div class="col-md-10 pt-2 pb-2">
            <div class="exy--p-0" v-if="!empty(data.quarter.quarter_6)" v-html="data.quarter.quarter_6.quarter_phase_four"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  name: "Curriculum",
  data() {
    return {
      data: {},
      isAnnual: 0,
      isOverall: 0,
      quarter: {},
      loading: true,
    }
  },
  methods: {
    /**
     * Fetch record
     */
    getRecord(age = 0) {
      this.isAnnual = age

      axios.get(`/site/school/${this.$route.params.uuid}/get-curriculum/${age}`).then(response => {
        this.data = response.data;
        this.quarter = response.data.quarter;
        this.loading = false
      }).catch(error => {
        this.checkError(error)
      })
    },
  },
  mounted() {
    this.getRecord()
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: .5rem;
}

.age-tab-menu {
  margin: 35px 0 0 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    background: #FFFFFF 0 0 no-repeat padding-box;
    border: 1px solid #D6D6D6;
    opacity: 1;
    width: 100%;
    padding: 13px 10px;
    text-align: center;
    font-size: 15px;
    letter-spacing: 0;
    cursor: pointer;
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 6px;
      height: 0;
      width: 0;
      border-top: 6px solid #333333;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      transform: translate(0, -50%);
    }
  }

  .active {
    background: #cb3a82;
    border: 1px solid #cb3a82;
    color: #ffffff;
  }
}
</style>
