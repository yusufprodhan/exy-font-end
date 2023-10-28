<template>
  <div class="w-100 bg-light">
    <Breadcrumb pageName="指導案"></Breadcrumb>
    <div class="container">
      <div class="d-flex align-items-center justify-content-end mt-4">
        <span class="font-bolder me-2 fs-5">
          <span class="cursor-pointer" @click="changeYear(1)">◀︎</span> {{ year }}年度
          <span class="cursor-pointer" @click="changeYear(0)">▶︎</span>
        </span>

        <select class="form-control" @change="setAge($event)" v-model="age" style="width: 200px">
          <option v-for="(n,i) in 6" :key="i" :value="i">
            {{ `${i} 歳児全体` }}
          </option>
        </select>
      </div>

      <div class="d-flex align-items-center justify-content-between my-md-5">
        <span class="font-bolder float-start mr-2 pr-2">
          <span class="color-cb3a82 cursor-pointer" @click="changeYear(1)">◀︎</span> {{ year }}年度
          <span class="color-cb3a82 cursor-pointer" @click="changeYear(0)">▶︎</span>
        </span>

        <div>
          <router-link :to="{name: 'Plan.page2'}" class="btn btn-link text-decoration-none text-dark">全体的な計画</router-link>
          <router-link :to="{name: 'Plan.page3'}" class="btn btn-link color-cb3a82">
            <i class="fa fa-pencil"></i> 年間指導計画
          </router-link>
        </div>
      </div>

      <div class="row bg-white mt-5 p-3 border">
        <div class="col-md-12 p-0 m-0">
          <div class="row">
            <div class="col-md-6">
              <span>年間指導計画 <small>（{{ year }}年度）</small></span>
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
                  <h6>{{ age }}歳児全体</h6>
                  <h3 class="mt-5">年間指導計画</h3>
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
                    <td class="blank-td cursor-pointer align-middle" @click="responsibleModalOpen('記入者', allStaff.responsiblePersons, selected.selectedResPersons,'responsible')">
                      <span v-for="(item, i) in allStaff.responsiblePersons" :key="i">
                        <span v-if="getName(item, selected.selectedResPersons)" class="d-inline-block me-3">
                          <i class="fa fa-circle"></i>
                          <span v-html="getName(item, selected.selectedResPersons)" class="ms-1"></span>
                        </span>
                      </span>
                    </td>
                    <td class="blank-td  cursor-pointer align-middle" @click="responsibleModalOpen('記入者', allStaff.directors, selected.selectedDirectors,'director')">
                      <span v-for="(item, i) in allStaff.directors" :key="i">
                        <span v-if="getName(item, selected.selectedDirectors)" class="d-inline-block me-3">
                          <i class="fa fa-circle"></i>
                          <span v-html="getName(item, selected.selectedDirectors)" class="ms-1"></span>
                        </span>
                      </span>
                    </td>
                    <td class="blank-td  cursor-pointer align-middle" @click="responsibleModalOpen('記入者', allStaff.principals, selected.selectedPrincipals,'principal')">
                      <span v-for="(item, i) in allStaff.principals" :key="i">
                        <span v-if="getName(item, selected.selectedPrincipals)" class="d-inline-block me-3">
                          <i class="fa fa-circle"></i>
                          <span v-html="getName(item, selected.selectedPrincipals)" class="ms-1"></span>
                        </span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="row p-3">
            <table class="table table-bordered border-333333">
              <tbody>
                <tr class="bg-light">
                  <td class="text-center w-50">年間目標</td>
                  <td class="text-center">家族との連携</td>
                </tr>
                <tr>
                  <td class="blank-td cursor-pointer align-middle exy--p-0" @click="commonOpenModel(goalCooperation.annualGoal,'年間目標',1,1)" v-html="goalCooperation.annualGoal"></td>
                  <td class="blank-td cursor-pointer align-middle exy--p-0" @click="commonOpenModel(goalCooperation.annualCooperation,'家族との連携',1,2)" v-html="goalCooperation.annualCooperation"></td>
                </tr>
              </tbody>
            </table>

            <table class="table table-bordered border-333333">
              <tbody>
                <tr class="bg-light">
                  <td class="bg-white"></td>
                  <td class="w-25 text-center">１期（４〜６月）</td>
                  <td class="w-25 text-center">２期（７〜９月）</td>
                  <td class="w-25 text-center">３期（10〜12月）</td>
                  <td class="w-25 text-center">４期（１〜３月）</td>
                </tr>
                <tr>
                  <td class="prefill-td">子どもの姿</td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel( quarterPhaseAppearance.quarter_phase_one,'子どもの姿',2,1,1)" v-html="quarterPhaseAppearance.quarter_phase_one"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseAppearance.quarter_phase_two,'子どもの姿',2,2,1)" v-html="quarterPhaseAppearance.quarter_phase_two"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseAppearance.quarter_phase_three,'子どもの姿',2,3,1)" v-html="quarterPhaseAppearance.quarter_phase_three"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseAppearance.quarter_phase_four,'子どもの姿',2,4,1)" v-html="quarterPhaseAppearance.quarter_phase_four"></td>
                </tr>
                <tr>
                  <td class="prefill-td">ねらい</td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseAim.quarter_phase_one,'ねらい',2,1,2)" v-html="quarterPhaseAim.quarter_phase_one"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseAim.quarter_phase_two,'ねらい',2,2,2)" v-html="quarterPhaseAim.quarter_phase_two"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseAim.quarter_phase_three,'ねらい',2,3,2)" v-html="quarterPhaseAim.quarter_phase_three"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseAim.quarter_phase_four,'ねらい',2,4,2)" v-html="quarterPhaseAim.quarter_phase_four"></td>
                </tr>
                <tr>
                  <td class="prefill-td">養護</td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseMaintenance.quarter_phase_one,'養護',2,1,3)" v-html="quarterPhaseMaintenance.quarter_phase_one"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseMaintenance.quarter_phase_two,'養護',2,2,3)" v-html="quarterPhaseMaintenance.quarter_phase_two"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseMaintenance.quarter_phase_three,'養護',2,3,3)" v-html="quarterPhaseMaintenance.quarter_phase_three"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseMaintenance.quarter_phase_four,'養護',2,4,3)" v-html="quarterPhaseMaintenance.quarter_phase_four"></td>
                </tr>
                <tr>
                  <td class="prefill-td">教育</td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseEducate.quarter_phase_one,'教育',2,1,4)" v-html="quarterPhaseEducate.quarter_phase_one"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseEducate.quarter_phase_two,'教育',2,2,4)" v-html="quarterPhaseEducate.quarter_phase_two"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseEducate.quarter_phase_three,'教育',2,3,4)" v-html="quarterPhaseEducate.quarter_phase_three"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterPhaseEducate.quarter_phase_four,'教育',2,4,4)" v-html="quarterPhaseEducate.quarter_phase_four"></td>
                </tr>
                <tr>
                  <td class="prefill-td">環境構成</td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterEnvironmental.quarter_phase_one,'環境構成',2,1,5)" v-html="quarterEnvironmental.quarter_phase_one"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterEnvironmental.quarter_phase_two,'環境構成',2,2,5)" v-html="quarterEnvironmental.quarter_phase_two"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterEnvironmental.quarter_phase_three,'環境構成',2,3,5)" v-html="quarterEnvironmental.quarter_phase_three"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterEnvironmental.quarter_phase_four,'環境構成',2,4,5)" v-html="quarterEnvironmental.quarter_phase_four"></td>
                </tr>
                <tr>
                  <td class="prefill-td">保育者の援助</td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterAssistance.quarter_phase_one,'保育者の援助',2,1,6)" v-html="quarterAssistance.quarter_phase_one"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterAssistance.quarter_phase_two,'保育者の援助',2,2,6)" v-html="quarterAssistance.quarter_phase_two"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterAssistance.quarter_phase_three,'保育者の援助',2,3,6)" v-html="quarterAssistance.quarter_phase_three"></td>
                  <td class="cursor-pointer align-middle exy--p-0" @click="commonOpenModel(quarterAssistance.quarter_phase_four,'保育者の援助',2,4,6)" v-html="quarterAssistance.quarter_phase_four"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="space-100"></div>

    <!--Responsible person modal-->
    <div class="exy--modal">
      <div class="modal show" aria-hidden="true" v-if="responPerModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title w-100 text-2xl">{{ modalDatas.modalTitle }} </h5>
              <div class="close" @click="responsibleModalClose">
                <i class="fa fa-times-circle text-2xl"></i>
              </div>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-2 m-2" v-for="(item, key) in modalDatas.loopValues" :key="key">
                  <label class="container-checkbox">{{ item.name }}
                    <input type="checkbox" :value="item.id" v-model="modalDatas.selected">
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
                    <label class="col-sm-12 border-bottom "> {{ commonkyes.commonTitle }}</label>
                  </div>
                  <div class="form-group mt-2">
                    <label class="border-bottom mb-2">本文</label>
                    <vue-editor :editorOptions="editorOptions" v-model="commonkyes.commonDescription"></vue-editor>
                  </div>
                </div>
                <div class="col-md-7">
                  <ul class="list-group rounded-0">
                    <li class="list-group-item border-top-0 border-start-0 border-end-0" v-for="(suggestion,index) in suggestionLoop" :key="index">
                      <div class="d-inline-block exy--p-0" v-html="suggestion.description"></div>
                      <button class="btn btn-secodery text-white  rounded-0 border-0 bg-cb3a82 btn-sm float-end" @click="selectArticle(suggestion.description)">挿入</button>
                    </li>
                  </ul>
                  <button class="btn btn-secondary float-end mt-3" @click="suggestionsOpenModal(commonkyes.commonBlockId,commonkyes.commonTitleId,commonkyes.commonLevelId) ">
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
                    <input class="form-control" type="text" v-model="suggestionFrom.suggestionTitle" placeholder="タイトルを入力してください">
                  </div>
                  <div class="form-group mt-2">
                    <label class="border-bottom mb-2">論文</label>
                    <vue-editor :editorOptions="editorOptions" v-model="suggestionFrom.suggestionDescription" placeholder="記事を入力してください"></vue-editor>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="exy-default-btn border border-333333 text-dark bg-white me-4 px-4 my-0 font-black h-41" @click="suggestionCloseModel()">キャンセル</button>
              <button type="button" class="exy-default-btn px-5 py-2" @click="suggestionSubmitFrom()">保存</button>
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
    this.$emit('update:layout', Admin)
  },
  components: {
    Breadcrumb, VueEditor
  },
  data() {
    return {
      data: [],
      age: 1,
      year: new Date().getFullYear(),
      selected: this.selectedResponsible(),
      allStaff: this.allStaffRole(),
      modalDatas: this.modalValueskey(),
      responPerModal: false,
      goalCooperation: this.goalAndCooperation(),
      commonModal: false,
      commonkyes: this.commonData(),
      quarterPhaseAppearance: this.nullObject(),
      quarterPhaseAim: this.nullObject(),
      quarterPhaseMaintenance: this.nullObject(),
      quarterPhaseEducate: this.nullObject(),
      quarterEnvironmental: this.nullObject(),
      quarterAssistance: this.nullObject(),
      suggestionLoop: [],
      suggestionModal: false,
      suggestionBlockId: null,
      suggestionTitleId: null,
      suggestionLevelId: null,
      suggestionFrom: this.nullSuggestion(),
      editorOptions: {
        modules: {
          toolbar: false,
        },
      },
    }
  },
  computed: {
    userName() {
      return this.$store.getters.userName
    }
  },
  methods: {
    getAnnualData() {
      axios.get(`/school/annual-plan/${this.age}/${this.year}`).then(response => {
        this.data = response.data.data;
        this.allStaff.responsiblePersons = this.data.responsiblePersons;
        this.allStaff.directors = this.data.directors;
        this.allStaff.principals = this.data.principals;
        this.selected.selectedResPersons = this.data.selectedResPersons;
        this.selected.selectedDirectors = this.data.selectedDirectors;
        this.selected.selectedPrincipals = this.data.selectedPrincipals;
        this.goalCooperation.annualGoal = this.data.annualGoal;
        this.goalCooperation.annualCooperation = this.data.annualCooperation;
        this.quarterPhaseAppearance = (this.data.quarterPhaseAppearance != null) ? this.data.quarterPhaseAppearance : this.nullObject();
        this.quarterPhaseAim = (this.data.quarterPhaseAim != null) ? this.data.quarterPhaseAim : this.nullObject();
        this.quarterPhaseMaintenance = (this.data.quarterPhaseMaintenance != null) ? this.data.quarterPhaseMaintenance : this.nullObject();
        this.quarterPhaseEducate = (this.data.quarterPhaseEducate != null) ? this.data.quarterPhaseEducate : this.nullObject();
        this.quarterEnvironmental = (this.data.quarterEnvironmental != null) ? this.data.quarterEnvironmental : this.nullObject();
        this.quarterAssistance = (this.data.quarterAssistance != null) ? this.data.quarterAssistance : this.nullObject();
      }).catch(error => {
        this.checkError(error)
      })
    },
    submitFrom() {
      const form = {
        age: this.age,
        year: this.year,
        selectedData: this.modalDatas.selected,
        blockName: this.modalDatas.blockName,
      }
      if (this.empty(form.selectedData)) {
        this.$toast.error('責任者を選択してください')
      } else {
        axios.post('/school/annual-responsible-person', form).then(response => {
          this.responsibleModalClose()
          this.getAnnualData()
          this.$toast.success(response.data.message)
        }).catch(error => {
          this.checkError(error)
        })
      }
    },
    selectedResponsible() {
      return {
        selectedResPersons: [],
        selectedDirectors: [],
        selectedPrincipals: [],
      }
    },
    allStaffRole() {
      return {
        responsiblePersons: [],
        directors: [],
        principals: [],
      }
    },
    modalValueskey() {
      return {
        modalTitle: '',
        loopValues: [],
        selected: [],
        blockName: null
      }
    },
    getName(item, selected) {
      if (selected) {
        let exists = selected.some(function (id) {
          return item.id === id
        });

        return exists ? item.name : false
      }
      return false
    },
    responsibleModalOpen(title, loopValue, selected, blockName) {
      this.responPerModal = true;
      this.modalDatas.modalTitle = title,
          this.modalDatas.loopValues = loopValue ?? [],
          this.modalDatas.selected = selected ?? [],
          this.modalDatas.blockName = blockName
    },
    responsibleModalClose() {
      this.responPerModal = false;
      this.modalDatas = this.modalValueskey();

    },
    changeYear(value) {
      this.year = value === 1 ? this.year - 1 : this.year + 1;
      this.getAnnualData();
    },
    goalAndCooperation() {
      return {
        annualGoal: {},
        annualCooperation: {}
      }
    },
    commonData() {
      return {
        commonDescription: null,
        commonTitle: null,
        commonBlockId: null,
        commonTitleId: null,
        commonLevelId: null,
        suggestionLoop: [],
      }
    },
    commonOpenModel(value = null, title = null, blockId = null, titleId = null, levelId = null) {
      this.commonModal = true;
      this.commonkyes.commonDescription = value;
      this.commonkyes.commonTitle = title;
      this.commonkyes.commonBlockId = blockId;
      this.commonkyes.commonTitleId = titleId;
      this.commonkyes.commonLevelId = levelId;
      this.blockWiseSuggestion(blockId, titleId, levelId);

    },
    commonCloseModel() {
      this.commonModal = false;
      this.commonkyes = this.commonData()
      this.suggestionLoop = [];
    },
    commonSubmitFrom() {
      const form = {
        age: this.age,
        year: this.year,
        title: this.commonkyes.commonTitle,
        block_id: this.commonkyes.commonBlockId,
        title_id: this.commonkyes.commonTitleId,
        level_id: this.commonkyes.commonLevelId,
        description: this.commonkyes.commonDescription
      }
      if (this.empty(form.description)) {
        this.$toast.error('The description field is required.')
        return false
      }
      axios.post('/school/annual-plan', form).then(response => {
        this.getAnnualData();
        this.commonCloseModel();
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    },
    suggestionsOpenModal(suggestionBlockId, suggestionTitleId, suggestionLevelId = null) {
      this.suggestionBlockId = suggestionBlockId
      this.suggestionTitleId = suggestionTitleId
      this.suggestionLevelId = suggestionLevelId
      this.suggestionModal = true
      this.commonModal = false;
    },
    suggestionCloseModel() {
      this.commonModal = true;
      this.suggestionBlockId = null
      this.suggestionTitleId = null
      this.suggestionLevelId = null
      this.suggestionFrom = this.nullSuggestion(),
          this.suggestionModal = false;
    },
    nullSuggestion() {
      return {
        suggestionTitle: null,
        suggestionDescription: null,
      }
    },

    suggestionSubmitFrom() {
      const form = {
        block_id: this.suggestionBlockId,
        title_id: this.suggestionTitleId,
        level_id: this.suggestionLevelId,
        suggestion_title: this.suggestionFrom.suggestionTitle,
        suggestion_description: this.suggestionFrom.suggestionDescription,
      }
      if (this.empty(form.suggestion_title)) {
        this.$toast.error('The suggestion title field is required.')
        return false
      } else if (this.empty(form.suggestion_description)) {
        this.$toast.error('The suggestion description field is required.')
        return false
      }
      axios.post('/school/quick-annual-suggestions-store', form).then(response => {
        this.$toast.success(response.data.message)
        this.blockWiseSuggestion(this.suggestionBlockId, this.suggestionTitleId, this.suggestionLevelId);
        this.suggestionCloseModel();
      }).catch(error => {
        this.checkError(error)
      })
    },
    selectArticle(selectDes) {
      this.commonkyes.commonDescription = selectDes
    },

    blockWiseSuggestion(blockId, titleId, levelId) {
      axios.get('/school/block-wise-annual-guidance-suggestion', {
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

    nullObject() {
      return {
        quarter_phase_one: null,
        quarter_phase_two: null,
        quarter_phase_three: null,
        quarter_phase_four: null
      }
    },
    setAge(event) {
      this.age = event.target.value;
      this.getAnnualData();
    },
  },
  mounted() {
    this.getAnnualData()
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

.prefill-td {
  width: 40px;
  background: #F8F7F7;
  vertical-align: middle;
}
</style>
