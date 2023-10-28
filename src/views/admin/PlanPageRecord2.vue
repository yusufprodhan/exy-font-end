<template>
  <div class="w-100 bg-light" v-if="!loading">
    <Breadcrumb pageName="指導案"></Breadcrumb>
    <div class="container">
      <div class="d-flex align-items-center justify-content-end mt-4">
        <span class="font-bolder mt-2 me-2 fs-5">
          <span>◀︎</span> {{ new Date().getFullYear() }}年度<span>▶︎</span>
        </span>

        <select class="form-control" style="width: 200px" disabled>
          <option v-for="(n,i) in 6" :key="i" :value="`${i} 歳児全体`">
            {{ `${i} 歳児全体` }}
          </option>
        </select>
      </div>

      <div class="d-flex align-items-center justify-content-between my-md-5">
        <span class="font-bolder float-start mpr-2">
          <span class="color-cb3a82">◀︎</span> {{ new Date().getFullYear() }}年度
          <span class="color-cb3a82">▶︎</span>
        </span>
        <div>
          <router-link :to="{name: 'Plan.page2'}" class="btn btn-link color-cb3a82">
            <i class="fa fa-pencil"></i> 全体的な計画
          </router-link>
          <router-link :to="{name: 'Plan.page3'}" class="btn btn-link text-decoration-none text-dark">年間指導計画</router-link>
        </div>
      </div>

      <div class="row bg-white p-3 border">
        <div class="col-md-12 p-0 m-0">
          <div class="row">
            <div class="col-md-6">
              <span>全体的な計画 <small>（{{ new Date().getFullYear() }}年度）</small></span>
            </div>
            <div class="col-md-6">
              <button class="exy-default-btn float-end">ダウンロード</button>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6 m-0">
                  <h5>{{ userName }}</h5>
                </div>
                <div class="col-md-6 m-0">
                  <h3 class="mt-5">保育課程</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 p-3">
              <table class="table table-bordered border-333333">
                <tbody>
                  <tr>
                    <td class="text-center bg-light">担当</td>
                    <td class="text-center bg-light">主任</td>
                    <td class="text-center bg-light">園長</td>
                  </tr>
                  <tr>
                    <td class="blank-td cursor-pointer"
                        @click="responsibleModalOpen('記入者', responsiblePersons, selectedResPersons,'responsible')">
                      <span v-for="(item, i) in responsiblePersons" :key="i">
                        <span v-if="getName(item, selectedResPersons)" class="d-inline-block me-3">
                          <i class="fa fa-circle"></i>
                          <span v-html="getName(item, selectedResPersons)" class="ms-1"></span>
                        </span>
                      </span>
                    </td>
                    <td class="blank-td cursor-pointer"
                        @click="responsibleModalOpen('記入者', directors, selectedDirectors,'director')">
                      <span v-for="(item, i) in directors" :key="i">
                        <span v-if="getName(item, selectedDirectors)" class="d-inline-block me-3">
                          <i class="fa fa-circle"></i>
                          <span v-html="getName(item, selectedDirectors)" class="ms-1"></span>
                        </span>
                      </span>
                    </td>

                    <td class="blank-td cursor-pointer text-center"
                        @click="responsibleModalOpen('承認者', principals, selectedPrincipals,'principal')">
                      <span v-for="(item, i) in principals" :key="i">
                        <span v-if="getName(item, selectedPrincipals)" class="d-inline-block me-3">
                          <i class="fa fa-circle"></i>
                          <span v-html="getName(item, selectedPrincipals)" class="ms-1"></span>
                        </span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="row p-3">
            <table class="table table-bordered border-333333 mb-0">
              <tbody>
                <tr>
                  <th class="bg-light col-sm-1 text-center align-middle"> 保育理念</th>
                  <td class="cursor-pointer col-sm-3 align-top " @click="commonOpenModel(childcarePolices.philosophy_description,'保育理念',1,1)">
                    <span v-html="childcarePolices.philosophy_description"></span>
                  </td>
                  <th class="bg-light col-sm-1 text-center align-middle">保育方針</th>
                  <td class="cursor-pointer col-sm-3 align-top" @click="commonOpenModel(childcarePolices.policy_description,'保育方針',1,2)">
                    <span v-html="childcarePolices.policy_description"></span>
                  </td>
                  <th class="bg-light col-sm-1 text-center align-middle">保育目標</th>
                  <td class="cursor-pointer col-sm-3 align-top" @click="commonOpenModel(childcarePolices.goals_description,'保育目標',1,3)">
                    <span v-html="childcarePolices.goals_description"></span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="table table-bordered border-333333 mb-0">
              <tbody>
                <tr class="bg-light">
                  <th class="text-center align-middle cursor-pointer" v-for="(val,index) in activitiesRole.slice(0,5)" :key="index" @click="contentOpenModel(2, val)" v-html="val.title"></th>
                </tr>
                <tr>
                  <td class="blank-td align-top cursor-pointer w-1-5" v-for="(val,index) in activitiesRole.slice(0,5)" :key="index" @click="contentOpenModel(2, val)" v-html="val.description"></td>
                </tr>
                <tr class="bg-light">
                  <th class="text-center align-middle cursor-pointer" v-for="(val,index) in activitiesRole.slice(5,10)" :key="index" @click="contentOpenModel(2, val)" v-html="val.title"></th>
                </tr>
                <tr>
                  <td class="blank-td align-top cursor-pointer w-1-5" v-for="(val,index) in activitiesRole.slice(5,10)" :key="index" @click="contentOpenModel(2, val)" v-html="val.description"></td>
                </tr>
              </tbody>
            </table>

            <div class="text-end my-2 p-0" v-if="activitiesRole.length === 5">
              <button class="btn rounded-circle  border border-3 border-secondary text-secondary" @click="addActivitiesRole">
                <i class="fa fa-plus"></i>
              </button>
            </div>

            <table class="table table-bordered border-333333 mb-0 mt-4">
              <tbody>
                <tr class="col-md-6">
                  <td rowspan="5" class="special-td bg-secondary">
                    年齢別保育目標
                  </td>
                  <td class="bg-light text-center col-md-1">０歳児</td>
                  <td class="col-md-5 cursor-pointer" @click="commonOpenModel(childcareGoalsGyAge.zero_year_old_child,'０歳児',3,1)">
                    <span class="exy--p-0" v-html="childcareGoalsGyAge.zero_year_old_child"></span>
                  </td>
                  <td class="bg-light text-center col-md-1">3歳児</td>
                  <td class="col-md-5 cursor-pointer" @click="commonOpenModel(childcareGoalsGyAge.three_year_old_child,'3歳児',3,4)">
                    <span class="exy--p-0" v-html="childcareGoalsGyAge.three_year_old_child"></span>
                  </td>
                </tr>
                <tr class="col-md-6">
                  <td class="bg-light text-center col-md-1">1歳児</td>
                  <td class="col-md-5 cursor-pointer" @click="commonOpenModel(childcareGoalsGyAge.one_year_old_child,'1歳児',3,2)">
                    <span class="exy--p-0" v-html="childcareGoalsGyAge.one_year_old_child"></span>
                  </td>
                  <td class="bg-light text-center col-md-1">4歳児</td>
                  <td class="col-md-5 cursor-pointer" @click="commonOpenModel(childcareGoalsGyAge.four_year_old_child,'4歳児',3,5)">
                    <span class="exy--p-0" v-html="childcareGoalsGyAge.four_year_old_child"></span>
                  </td>
                </tr>
                <tr class="col-md-6">
                  <td class="bg-light text-center col-md-1">2歳児</td>
                  <td class="col-md-5 cursor-pointer" @click="commonOpenModel(childcareGoalsGyAge.two_year_old_child,'2歳児',3,3)">
                    <span class="exy--p-0" v-html="childcareGoalsGyAge.two_year_old_child"></span>
                  </td>
                  <td class="bg-light text-center col-md-1">5歳児</td>
                  <td class="col-md-5 cursor-pointer" @click="commonOpenModel(childcareGoalsGyAge.five_year_old_child,'5歳児',3,6)">
                    <span class="exy--p-0" v-html="childcareGoalsGyAge.five_year_old_child"></span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table table-bordered border-333333">
              <tbody>
                <tr>
                  <td colspan="8" class="bg-secondary text-center">
                    保育の内容
                  </td>
                </tr>
                <tr class="text-center bg-light">
                  <td colspan="2" class="another-table">年齢</td>
                  <td>０歳児</td>
                  <td>１歳児</td>
                  <td>２歳児</td>
                  <td>３歳児</td>
                  <td>４歳児</td>
                  <td>５歳児</td>
                </tr>
                <tr>
                  <td class="special2-td bg-secondary text-center" rowspan="4">
                    養護
                  </td>
                  <td class="special3-td bg-light text-center">生命の保持</td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenancePreservation!=null)?maintenancePreservation.zero_year_old_child:null,'０歳児',4,1,1)">
                    <span class="exy--p-0" v-if="maintenancePreservation != null" v-html="maintenancePreservation.zero_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenancePreservation!=null)?maintenancePreservation.one_year_old_child:null,'１歳児',4,2,1)">
                    <span class="exy--p-0" v-if="maintenancePreservation != null" v-html="maintenancePreservation.one_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel( (maintenancePreservation!=null)?maintenancePreservation.two_year_old_child:null,'２歳児',4,3,1)">
                    <span class="exy--p-0" v-if="maintenancePreservation != null" v-html="maintenancePreservation.two_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenancePreservation!=null)?maintenancePreservation.three_year_old_child:null,'３歳児',4,4,1)">
                    <span class="exy--p-0" v-if="maintenancePreservation != null" v-html="maintenancePreservation.three_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenancePreservation!=null)?maintenancePreservation.four_year_old_child:null,'４歳児',4,5,1)">
                    <span class="exy--p-0" v-if="maintenancePreservation != null" v-html="maintenancePreservation.four_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenancePreservation!=null)?maintenancePreservation.five_year_old_child:null,'５歳児',4,6,1)">
                    <span class="exy--p-0" v-if="maintenancePreservation != null" v-html="maintenancePreservation.five_year_old_child"></span>
                  </td>
                </tr>
                <tr>
                  <td class="special3-td bg-light text-center">情緒の安定</td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceEmotional!=null)?maintenanceEmotional.zero_year_old_child:null,'０歳児',4,1,2)">
                    <span class="exy--p-0" v-if="maintenanceEmotional != null" v-html="maintenanceEmotional.zero_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceEmotional!=null)?maintenanceEmotional.one_year_old_child:null,'１歳児',4,2,2)">
                    <span class="exy--p-0" v-if="maintenanceEmotional != null" v-html="maintenanceEmotional.one_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel( (maintenanceEmotional!=null)?maintenanceEmotional.two_year_old_child:null,'２歳児',4,3,2)">
                    <span class="exy--p-0" v-if="maintenanceEmotional != null" v-html="maintenanceEmotional.two_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceEmotional!=null)?maintenanceEmotional.three_year_old_child:null,'３歳児',4,4,2)">
                    <span class="exy--p-0" v-if="maintenanceEmotional != null" v-html="maintenanceEmotional.three_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceEmotional!=null)?maintenanceEmotional.four_year_old_child:null,'４歳児',4,5,2)">
                    <span class="exy--p-0" v-if="maintenanceEmotional != null" v-html="maintenanceEmotional.four_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceEmotional!=null)?maintenanceEmotional.five_year_old_child:null,'５歳児',4,6,2)">
                    <span class="exy--p-0" v-if="maintenanceEmotional != null" v-html="maintenanceEmotional.five_year_old_child"></span>
                  </td>
                </tr>
                <tr>
                  <td class="special3-td bg-light text-center">人間関係</td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceRelationship!=null)?maintenanceRelationship.zero_year_old_child:null,'０歳児',4,1,3)">
                    <span class="exy--p-0" v-if="maintenanceRelationship != null" v-html="maintenanceRelationship.zero_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceRelationship!=null)?maintenanceRelationship.one_year_old_child:null,'１歳児',4,2,3)">
                    <span class="exy--p-0" v-if="maintenanceRelationship != null" v-html="maintenanceRelationship.one_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel( (maintenanceRelationship!=null)?maintenanceRelationship.two_year_old_child:null,'２歳児',4,3,3)">
                    <span class="exy--p-0" v-if="maintenanceRelationship != null" v-html="maintenanceRelationship.two_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceRelationship!=null)?maintenanceRelationship.three_year_old_child:null,'３歳児',4,4,3)">
                    <span class="exy--p-0" v-if="maintenanceRelationship != null" v-html="maintenanceRelationship.three_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceRelationship!=null)?maintenanceRelationship.four_year_old_child:null,'４歳児',4,5,3)">
                    <span class="exy--p-0" v-if="maintenanceRelationship != null" v-html="maintenanceRelationship.four_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceRelationship!=null)?maintenanceRelationship.five_year_old_child:null,'５歳児',4,6,3)">
                    <span class="exy--p-0" v-if="maintenanceRelationship != null" v-html="maintenanceRelationship.five_year_old_child"></span>
                  </td>
                </tr>
                <tr>
                  <td class="special3-td bg-light text-center">健康</td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceHealthy!=null)?maintenanceHealthy.zero_year_old_child:null,'０歳児',4,1,4)">
                    <span class="exy--p-0" v-if="maintenanceHealthy != null" v-html="maintenanceHealthy.zero_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceHealthy!=null)?maintenanceHealthy.one_year_old_child:null,'１歳児',4,2,4)">
                    <span class="exy--p-0" v-if="maintenanceHealthy != null" v-html="maintenanceHealthy.one_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel( (maintenanceHealthy!=null)?maintenanceHealthy.two_year_old_child:null,'２歳児',4,3,4)">
                    <span class="exy--p-0" v-if="maintenanceHealthy != null" v-html="maintenanceHealthy.two_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceHealthy!=null)?maintenanceHealthy.three_year_old_child:null,'３歳児',4,4,4)">
                    <span class="exy--p-0" v-if="maintenanceHealthy != null" v-html="maintenanceHealthy.three_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceHealthy!=null)?maintenanceHealthy.four_year_old_child:null,'４歳児',4,5,4)">
                    <span class="exy--p-0" v-if="maintenanceHealthy != null" v-html="maintenanceHealthy.four_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceHealthy!=null)?maintenanceHealthy.five_year_old_child:null,'５歳児',4,6,4)">
                    <span class="exy--p-0" v-if="maintenanceHealthy != null" v-html="maintenanceHealthy.five_year_old_child"></span>
                  </td>
                </tr>
                <tr>
                  <td class="special2-td bg-secondary text-center" rowspan="3">
                    養護
                  </td>
                  <td class="special3-td bg-light text-center">環境</td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceEnvironment!=null)?maintenanceEnvironment.zero_year_old_child:null,'０歳児',4,1,5)">
                    <span class="exy--p-0" v-if="maintenanceEnvironment != null" v-html="maintenanceEnvironment.zero_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceEnvironment!=null)?maintenanceEnvironment.one_year_old_child:null,'１歳児',4,2,5)">
                    <span class="exy--p-0" v-if="maintenanceEnvironment != null" v-html="maintenanceEnvironment.one_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel( (maintenanceEnvironment!=null)?maintenanceEnvironment.two_year_old_child:null,'２歳児',4,3,5)">
                    <span class="exy--p-0" v-if="maintenanceEnvironment != null" v-html="maintenanceEnvironment.two_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceEnvironment!=null)?maintenanceEnvironment.three_year_old_child:null,'３歳児',4,4,5)">
                    <span class="exy--p-0" v-if="maintenanceEnvironment != null" v-html="maintenanceEnvironment.three_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceEnvironment!=null)?maintenanceEnvironment.four_year_old_child:null,'４歳児',4,5,5)">
                    <span class="exy--p-0" v-if="maintenanceEnvironment != null" v-html="maintenanceEnvironment.four_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceEnvironment!=null)?maintenanceEnvironment.five_year_old_child:null,'５歳児',4,6,5)">
                    <span class="exy--p-0" v-if="maintenanceEnvironment != null" v-html="maintenanceEnvironment.five_year_old_child"></span>
                  </td>
                </tr>
                <tr>
                  <td class="special3-td bg-light text-center">言葉</td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceWords!=null)?maintenanceWords.zero_year_old_child:null,'０歳児',4,1,6)">
                    <span class="exy--p-0" v-if="maintenanceWords != null" v-html="maintenanceWords.zero_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceWords!=null)?maintenanceWords.one_year_old_child:null,'１歳児',4,2,6)">
                    <span class="exy--p-0" v-if="maintenanceWords != null" v-html="maintenanceWords.one_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel( (maintenanceWords!=null)?maintenanceWords.two_year_old_child:null,'２歳児',4,3,6)">
                    <span class="exy--p-0" v-if="maintenanceWords != null" v-html="maintenanceWords.two_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceWords!=null)?maintenanceWords.three_year_old_child:null,'３歳児',4,4,6)">
                    <span class="exy--p-0" v-if="maintenanceWords != null" v-html="maintenanceWords.three_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceWords!=null)?maintenanceWords.four_year_old_child:null,'４歳児',4,5,6)">
                    <span class="exy--p-0" v-if="maintenanceWords != null" v-html="maintenanceWords.four_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenanceWords!=null)?maintenanceWords.five_year_old_child:null,'５歳児',4,6,6)">
                    <span class="exy--p-0" v-if="maintenanceWords != null" v-html="maintenanceWords.five_year_old_child"></span>
                  </td>
                </tr>
                <tr>
                  <td class="special3-td bg-light text-center">表現</td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenancePerformance!=null)?maintenancePerformance.zero_year_old_child:null,'０歳児',4,1,7)">
                    <span class="exy--p-0" v-if="maintenancePerformance != null" v-html="maintenancePerformance.zero_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenancePerformance!=null)?maintenancePerformance.one_year_old_child:null,'１歳児',4,2,7)">
                    <span class="exy--p-0" v-if="maintenancePerformance != null" v-html="maintenancePerformance.one_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel( (maintenancePerformance!=null)?maintenancePerformance.two_year_old_child:null,'２歳児',4,3,7)">
                    <span class="exy--p-0" v-if="maintenancePerformance != null" v-html="maintenancePerformance.two_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenancePerformance!=null)?maintenancePerformance.three_year_old_child:null,'３歳児',4,4,7)">
                    <span class="exy--p-0" v-if="maintenancePerformance != null" v-html="maintenancePerformance.three_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenancePerformance!=null)?maintenancePerformance.four_year_old_child:null,'４歳児',4,5,7)">
                    <span class="exy--p-0" v-if="maintenancePerformance != null" v-html="maintenancePerformance.four_year_old_child"></span>
                  </td>
                  <td class="blank-td cursor-pointer" @click="commonOpenModel((maintenancePerformance!=null)?maintenancePerformance.five_year_old_child:null,'５歳児',4,6,7)">
                    <span class="exy--p-0" v-if="maintenancePerformance != null" v-html="maintenancePerformance.five_year_old_child"></span>
                  </td>
                </tr>
                <tr v-for="(content,conIndex) in childcareContents" :key="conIndex" class="text-center cursor-pointer" @click="contentOpenModel(5, content)">
                  <td class="blank-td cursor-pointer bg-light" colspan="2">{{ content.title }}</td>
                  <td colspan="6" class="text-start exy--p-0" v-html="content.description"></td>
                </tr>
              </tbody>
            </table>
            <div class="text-end my-2 p-0">
              <button class="btn rounded-circle border border-3 border-secondary text-secondary" @click="addChildcareContent">
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="space-100"></div>

    <!--  Common Modal -->
    <div class="exy--modal">
      <div class="modal show" aria-hidden="true" v-if="commonModal">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="commonCloseModel()"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-5">
                  <div class="form-group">
                    <label class="border-bottom mb-2 col-sm-12 ">タイトル</label>
                    <label class="col-sm-12 border-bottom "> {{ commonTitle }}</label>
                  </div>
                  <div class="form-group mt-2">
                    <label class="border-bottom mb-2">本文</label>
                    <vue-editor :editorOptions="editorOptions" v-model="commonDescription"></vue-editor>
                  </div>
                </div>
                <div class="col-md-7">
                  <ul class="list-group rounded-0">
                    <li class="list-group-item border-top-0 border-start-0 border-end-0" v-for="(suggestion,index) in suggestionLoop" :key="index">
                      <div class="d-inline-block exy--p-0" v-html="suggestion.description"></div>
                      <button class="btn btn-secodery text-white  rounded-0 border-0 bg-cb3a82 btn-sm float-end" @click="selectArticle(suggestion.description)">挿入</button>
                    </li>
                  </ul>
                  <button class="btn btn-secondary float-end mt-3" @click="suggestionsModal(commonBlockId,commonTitleId,commonLevelId) ">
                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    定型文を追加する
                  </button>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="exy-default-btn border border-333333 text-dark bg-white me-4 px-4 my-0 font-black h-41" @click="commonCloseModel()">キャンセル</button>
              <button type="button" class="exy-default-btn px-5 py-2" @click="commonSubmitFrom()">保存</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Suggestion Modal -->
    <div class="exy--modal">
      <div class="modal show" aria-hidden="true" v-if="suggestionModal">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="suggestionCloseModel()"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="border-bottom mb-2 col-sm-12 ">タイトル</label>
                    <input class="form-control" type="text" v-model="suggestionTitle" placeholder="タイトルを入力してください">
                  </div>
                  <div class="form-group mt-2">
                    <label class="border-bottom mb-2">論文</label>
                    <vue-editor :editorOptions="editorOptions" v-model="suggestionDescription" placeholder="記事を入力してください"></vue-editor>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="exy-default-btn border border-333333 text-dark bg-white me-4 px-4 my-0 font-black h-41" @click="suggestionCloseModel()">キャンセル
              </button>
              <button type="button" class="exy-default-btn px-5 py-2" @click="suggestionSubmitFrom()">保存</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- content Modal -->
    <div class="exy--modal">
      <div class="modal show" aria-hidden="true" v-if="contentModal">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="contentCloseModel()"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-5">
                  <div class="form-group">
                    <label class="border-bottom mb-2 col-sm-12 ">タイトル</label>
                    <input class="form-control" type="text" required v-model="contentTitle" placeholder="タイトルを入力してください">
                  </div>
                  <div class="form-group mt-2">
                    <label class="border-bottom mb-2">論文</label>
                    <vue-editor :editorOptions="editorOptions" v-model="contentDescription" placeholder="記事を入力してください"></vue-editor>
                  </div>
                </div>
                <div class="col-md-7">
                  <ul class="list-group rounded-0">
                    <li class="list-group-item border-top-0 border-start-0 border-end-0" v-for="(suggestion,index) in suggestionLoop" :key="index">
                      <div class="d-inline-block exy--p-0" v-html="suggestion.description"></div>
                      <button class="btn btn-secondary text-white  rounded-0 border-0 bg-cb3a82 btn-sm float-end" @click="selectContentArticle(suggestion.description)">挿入</button>
                    </li>
                  </ul>
                  <button class="btn btn-secondary float-end mt-3" @click="suggestionsModal(commonBlockId,null,null)">
                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    定型文を追加する
                  </button>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="exy-default-btn px-5 py-2" @click="removeARC(contentId, commonBlockId)" v-if="contentId">削除する</button>
              <button type="button" class="exy-default-btn border border-333333 text-dark bg-white me-4 px-4 my-0 font-black h-41" @click="contentCloseModel()">キャンセル</button>
              <button type="button" class="exy-default-btn px-5 py-2" @click="contentSubmitFrom()">保存</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- responsible Per Modal   -->
    <div class="exy--modal">
      <div class="modal show" aria-hidden="true" v-if="responPerModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title w-100 text-2xl">{{ modalTitle }} </h5>
              <div class="close" @click="responsibleModalClose">
                <i class="fa fa-times-circle text-2xl"></i>
              </div>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-2 m-2" v-for="(item, key) in loopValues" :key="key">
                  <label class="container-checkbox">{{ item.name }}
                    <input type="checkbox" :value="item.id" v-model="selected">
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="exy-default-btn border border-333333 text-dark bg-white me-4 px-4 my-0 font-black h-41" @click="responsibleModalClose">キャンセル</button>
              <button type="button" class="exy-default-btn px-5 py-2" @click="submitFrom()">保存</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../components/adminPartials/Breadcrumb.vue";
import Admin from "../../layouts/Admin";
import {VueEditor} from "vue2-editor";
import axios from "@/axios";

export default {
  created() {
    this.$emit('update:layout', Admin);
    this.getOverallPlan();
  },
  components: {
    Breadcrumb, VueEditor
  },
  data() {
    return {
      loading: true,
      responPerModal: false,
      commonModal: false,
      contentModal: false,
      modalTitle: '',
      data: {},
      directors: [],
      principals: [],
      responsiblePersons: [],
      selectedPrincipals: [],
      selectedDirectors: [],
      selectedResPersons: [],
      loopValues: [],
      selected: [],
      selectedValue: null,
      blockName: '',
      childcarePolices: '',
      commonTitle: '',
      philosophySuggestions: [],
      commonBlockId: null,
      commonTitleId: null,
      commonLevelId: null,
      commonDescription: null,
      childcareGoalsGyAgeSuggestions: [],
      childcareGoalsGyAge: null,
      maintenancePreservation: null,
      maintenanceEmotional: null,
      maintenanceRelationship: null,
      maintenanceHealthy: null,
      maintenanceEnvironment: null,
      maintenanceWords: null,
      maintenancePerformance: null,
      suggestionModal: false,
      suggestionBlockId: null,
      suggestionTitleId: null,
      suggestionLevelId: null,
      suggestionTitle: null,
      suggestionDescription: null,
      suggestionLoop: [],
      contentDescription: null,
      contentTitle: null,
      contentId: null,
      childcareContents: [],
      activitiesRole: [],
      editorOptions: {
        modules: {
          toolbar: false,
        },
      },
    };
  },
  watch: {
    activitiesRole() {
      this.activitiesControle()
    }
  },
  computed: {
    userName() {
      return this.$store.getters.userName
    }
  },
  methods: {
    activitiesControle() {
      if (this.activitiesRole.length < 5) {
        for (let i = this.activitiesRole.length; i < 5; i++) this.activitiesRole.push({ title: null, description: null })
      }

      if (this.activitiesRole.length > 5) {
        for (let i = this.activitiesRole.length; i < 10; i++) this.activitiesRole.push({ title: null, description: null })
      }
    },
    getOverallPlan() {
      axios.get('/school/overall-plan').then(response => {
        this.data = response.data.data
        this.directors = this.data.directors
        this.principals = this.data.principals;
        this.responsiblePersons = this.data.responsiblePersons;
        this.selectedPrincipals = this.data.selectedPrincipals ?? [];
        this.selectedDirectors = this.data.selectedDirectors ?? [];
        this.selectedResPersons = this.data.selectedResPersons ?? [];
        this.childcarePolices = this.data.childcarePolices ?? '';
        this.philosophySuggestions = this.data.philosophySuggestions ?? [];
        this.childcareGoalsGyAgeSuggestions = this.data.childcareGoalsGyAgeSuggestions ?? [];
        this.childcareGoalsGyAge = this.data.childcareGoalsGyAge ?? null;
        this.maintenancePreservation = this.data.maintenancePreservation ?? null;
        this.maintenanceEmotional = this.data.maintenanceEmotional ?? null;
        this.maintenanceRelationship = this.data.maintenanceRelationship ?? null;
        this.maintenanceHealthy = this.data.maintenanceHealthy ?? null;
        this.maintenanceEnvironment = this.data.maintenanceEnvironment ?? null;
        this.maintenanceWords = this.data.maintenanceWords ?? null;
        this.maintenancePerformance = this.data.maintenancePerformance ?? null;
        this.childcareContents = this.data.childcareContents.length > 0 ? this.data.childcareContents : [{ title: null, description: null }];
        this.activitiesRole = this.data.activitiesRole ?? [];
        this.loading = false;
      }).catch(error => {
        this.checkError(error)
      })
    },
    submitFrom() {
      axios.post('/school/responsible-person', {
        selectedData: this.selected,
        blockName: this.blockName
      }).then(response => {
        this.responsibleModalClose()
        this.getOverallPlan()
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    },
    responsibleModalOpen(title, loopValue, selected, blockName) {
      this.responPerModal = true;
      this.modalTitle = title;
      this.loopValues = loopValue;
      this.selected = selected
      this.blockName = blockName

    },
    responsibleModalClose() {
      this.selected = []
      this.loopValues = []
      this.responPerModal = false
      this.modalTitle = ''
      this.blockName = ''
    },
    commonSubmitFrom() {
      axios.post('/school/overall-plan', {
        block_id: this.commonBlockId,
        title_id: this.commonTitleId,
        level_id: this.commonLevelId,
        description: this.commonDescription,
      }).then(response => {
        this.getOverallPlan();
        this.commonCloseModel();
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    },
    commonOpenModel(value, title, blockId, titleId, levelId = null) {
      this.commonModal = true;
      this.commonDescription = value;
      this.commonTitle = title;
      this.commonBlockId = blockId;
      this.commonTitleId = titleId;
      this.commonLevelId = levelId;
      this.blockWiseSuggestion(blockId, titleId, levelId);
    },
    commonCloseModel() {
      this.commonModal = false;
      this.suggestionLoop = [];
      this.commonDescription = null;
      this.commonTitle = '';
      this.commonBlockId = null;
      this.commonTitleId = null;
    },
    contentOpenModel(blockId, content = {}) {
      this.contentModal = true;
      this.commonBlockId = blockId;
      this.contentId = content.id;
      this.contentTitle = content.title;
      this.contentDescription = content.description;
      this.blockWiseSuggestion(this.commonBlockId, null, null);
    },
    contentCloseModel() {
      this.contentTitle = null
      this.contentDescription = null
      this.contentModal = false;
      this.commonBlockId = null;
    },
    contentSubmitFrom() {
      axios.post('/school/childcare-content-store', {
        block_id: this.commonBlockId,
        id: this.contentId,
        title: this.contentTitle,
        description: this.contentDescription,
      }).then(response => {
        this.contentCloseModel()
        this.$toast.success(response.data.message)
        this.getOverallPlan()
      }).catch(error => {
        this.checkError(error)
      })

    },
    blockWiseSuggestion(blockId, titleId, levelId) {
      axios.get('/school/block-wise-suggestions', {
        params: {
          block_id: blockId,
          title_id: titleId,
          level_id: levelId
        }
      }).then(response => {
        this.suggestionLoop = response.data.data;
      }).catch(error => {
        this.checkError(error)
      })
    },
    suggestionsModal(suggestionBlockId, suggestionTitleId, suggestionLevelId = null) {
      this.suggestionBlockId = suggestionBlockId
      this.suggestionTitleId = suggestionTitleId
      this.suggestionLevelId = suggestionLevelId
      this.commonModal = false;
      this.contentModal = false;
      this.suggestionModal = true;
    },
    suggestionCloseModel() {
      if (this.suggestionBlockId == 5 || this.suggestionBlockId == 2) {
        this.contentModal = true;
      } else {
        this.commonModal = true;
      }
      this.suggestionBlockId = null
      this.suggestionTitleId = null
      this.suggestionLevelId = null
      this.suggestionTitle = null
      this.suggestionDescription = null;
      this.suggestionModal = false;
    },
    suggestionSubmitFrom() {
      axios.post('/school/quick-suggestions-store', {
        block_id: this.suggestionBlockId,
        title_id: this.suggestionTitleId,
        level_id: this.suggestionLevelId,
        suggestion_title: this.suggestionTitle,
        suggestion_description: this.suggestionDescription,
      }).then(response => {
        this.$toast.success(response.data.message)
        this.blockWiseSuggestion(this.suggestionBlockId, this.suggestionTitleId, this.suggestionLevelId);
        this.suggestionCloseModel();
      }).catch(error => {
        this.checkError(error)
      })
    },
    selectArticle(selectDes) {
      this.commonDescription = selectDes
    },
    selectContentArticle(selectDes) {
      this.contentDescription = selectDes
    },
    getName(item, selected) {
      if (selected) {
        let exists = selected.some(function (id) {
          return item.id == id
        });

        return exists ? item.name : false
      }
      return false
    },
    addChildcareContent() {
      this.childcareContents.push({ title: null, description: null })
    },
    addActivitiesRole() {
      for (let i = 0; i < 5; i++) this.activitiesRole.push({ title: null, description: null })
    },
    removeARC(id, type) {
      let url = ''
      if (type === 5) url = `/school/content-delete/${id}`
      if (type === 2) url = `/school/activities-role-delete/${id}`
      if (this.empty(url)) return false

      axios.delete(url).then(response => {
        this.getOverallPlan()
        this.contentModal = false
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-link {
  outline: none;
  box-shadow: inherit;

  &:hover {
    color: #cb3a82;
  }
}

.main-nav {
  display: none !important;
}

.blank-td {
  height: 5rem;
}

.w-1-5 {
  width: calc(100% / 5);
}

.prefill-td {
  width: 40px;
  background: #F8F7F7;
  vertical-align: middle;
}

.special-td {
  width: 40px;
}

.special2-td {
  width: 30px;
}

.special3-td {
  width: 140px;
}

.another-table {
  width: 100px;
}
</style>
