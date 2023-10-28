<template>
  <div class="fixed-phrase-setting">
    <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <div class="container">
      <div class="row">
        <div class="col-md-8 p-3">
          <h4>定型文設定</h4>
          <p class="mt-3">
            チャットや指導案の作成時、頻繁に利用する質問や回答を事前に作成しておくことで、<br>
            問い合わせなどにスムーズに返信ができ、業務の効率化を図ることができます。
          </p>
        </div>
        <div class="col-md-4">
          <img src="../../assets/images/admin/ID2632907.png" alt="EXY" class="">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="details-tab">
        <div class="px-0 tabs">
          <a @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]"><img src="../../assets/images/svg/tab-message.svg" alt="EXY"> トーク用定型文</a>
          <a @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]"><img src="../../assets/images/svg/tab-note.svg" alt="EXY"> 指導案用定型文</a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
      <div v-if="activeTab===1" class="tab-1 py-3 text-base">
        <div class="text-right">
          <button class="px-3 py-2 btn-1" @click="messageSuggestionOpenModel">＋作成</button>
        </div>
        <div class="row top-1 mt-3 py-3">
          <div class="col-md-3">タイトル</div>
          <div class="col-md-9">メッセージ</div>
        </div>
        <div class="row body-1 py-3" v-for="(value,index) in messageSuggestions.data" :key="index">
          <div class="col-md-3 fw-bold">
            <p class="m-0"> {{ value.title }}</p>
          </div>
          <div class="col-md-8">
            <p class="m-0"> {{ value.message }} </p>
          </div>
          <div class="col-md-1 text-center my-auto">
            <button class="btn-2" @click="editMessageSuggestion(value.id)"><img src="../../assets/images/svg/tab-edit.svg" alt="EXY"></button>
            <button class="btn-2" @click="deleteMessageSuggestion(value.id)"><img src="../../assets/images/svg/tab-trash.svg" alt="EXY"></button>
          </div>
        </div>
        <div class="my-5">
          <div v-if="messageSuggestions.data.length < 1">
            <h4 class="text-center text-dark">No record found.</h4>
          </div>
          <paginate :meta="messageSuggestions.meta" @page-change="changePage"></paginate>
        </div>
      </div>
      <div v-if="activeTab===2" class="tab-1 py-3 text-base">
        <div class="text-right">
          <button class="px-3 py-2 btn-1" @click="modal=true">＋作成</button>
        </div>
        <div class="row top-1 mt-3 py-3">
          <div class="col-md-3">タイトル</div>
          <div class="col-md-9">メッセージ</div>
        </div>
        <div class="row body-1 py-3" v-for="(suggestions ,index) in overAllSuggestions.data" :key="index">
          <div class="col-md-3 fw-bold">
            <p class="m-0">{{ suggestions.title }}</p>
          </div>
          <div class="col-md-8">
            <p class="m-0">{{ suggestions.description }}</p>
          </div>
          <div class="col-md-1 text-center my-auto">
            <button class="btn-2" @click="getSuggestion(suggestions.id)">
              <img src="../../assets/images/svg/tab-edit.svg" alt="EXY">
            </button>
            <button class="btn-2" @click="deleteSuggestion(suggestions.id)"><img src="../../assets/images/svg/tab-trash.svg" alt="EXY"></button>
          </div>
        </div>
        <div class="my-5">
          <div v-if="messageSuggestions.data.length < 1">
            <h4 class="text-center text-dark">No record found.</h4>
          </div>
          <paginate :meta="overAllSuggestions.meta" @page-change="osChangePage"></paginate>
        </div>
      </div>
    </div>
    <div class="exy--modal">
      <div v-if="modal" class="modal show fade" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center">内容入力</h5>
              <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>ブロック名</label>
                <select class="form-control" v-model="suggestion_from.block_id" @change="getLavelAndTitel($event)">
                  <option v-for="(blockList, i) in allBlockList" :value="blockList.id" :key="i">
                    {{ blockList.name }}
                  </option>
                </select>
              </div>
              <div class="form-group mt-4" v-if="isTitle">
                <label>タイトル名</label>
                <select class="form-control" v-model="suggestion_from.title_id">
                  <option v-for="(title, i) in blockWiseTitle" :value="title.id" :key="i">
                    {{ title.name }}
                  </option>
                </select>
              </div>
              <div class="form-group mt-4" v-if="isLabel">
                <label>ラベル名 </label>
                <select class="form-control" v-model="suggestion_from.level_id">
                  <option v-for="(lab, i) in labelList" :value="lab.id" :key="i">
                    {{ lab.name }}
                  </option>
                </select>
              </div>
              <div class="form-group mt-4">
                <label for="title">タイトル</label>
                <input type="text" class="form-control" id="title" v-model="suggestion_from.title">
              </div>
              <div class="form-group mt-4">
                <label>メッセージ</label>
                <textarea class="form-control" id="form_description" v-model="suggestion_from.description"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secodery border rounded-0" data-bs-dismiss="modal" @click="closeModal">
                キャンセル
              </button>
              <button type="button" class="btn btn btn-secodery text-white rounded-0 border-0 bg-cb3a82" @click="submitForm">
                保存
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- message Suggestion Modal -->
    <div class="exy--modal">
      <div class="modal show" aria-hidden="true" v-if="messageSuggestionModal">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="messageSuggestionCloseModel()"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="border-bottom mb-2 col-sm-12 ">タイトル</label>
                    <input class="form-control" type="text" v-model="message_suggestion_from.title" placeholder="タイトルを入力してください">
                  </div>
                  <div class="form-group mt-2">
                    <label class="border-bottom mb-2">メッセージ</label>
                    <textarea id="" rows="6" class="form-control rounded-0 bg-light" v-model="message_suggestion_from.message" placeholder="記事を入力してください">
                  </textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="exy-default-btn border border-333333 text-dark bg-white me-4 px-5 my-0" @click="messageSuggestionCloseModel()">キャンセル
              </button>
              <button type="button" class="exy-default-btn" @click="messageSuggestionSubmitForm()">保存</button>
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
import axios from "../../axios";
import Paginate from "../../helpers/Paginate";

export default {
  name: "FixedPhraseSetting",
  created() {
    this.$emit('update:layout', Admin)
    this.getMessageSuggestions();
    this.getOverAllSuggestions()
  },
  components: {
    Paginate,
    Breadcrumb,
  },
  data() {
    return {
      dataPageName: "定型文設定",
      activeTab: 1,
      modal: false,
      allBlockList: [],
      overAllSuggestions: {
        meta: {},
        data: []
      },
      blockWiseTitle: [],
      labelList: [],
      isTitle: true,
      isLabel: false,
      suggestion_from: this.initialForm(),
      message_suggestion_from: this.messageInitialForm(),
      messageSuggestions: {
        meta: {},
        data: []
      },
      messageSuggestionModal: false,
      currentPage: 1,
      osCurrentPage: 1,
    }
  },
  methods: {
    getOverAllSuggestions() {
      axios.get(`/school/over-all-suggestions?page=${this.osCurrentPage}`).then(response => {
        this.allBlockList = response.data.data.allBlockList
        this.overAllSuggestions = response.data.data.overAllSuggestions
      }).catch(error => {
        this.checkError(error)
      })
    },

    /**
     * Handle page change request
     * @param page
     */
    osChangePage: function (page) {
      this.osCurrentPage = page
      this.getOverAllSuggestions()
    },

    getMessageSuggestions() {
      axios.get(`/school/message-suggestion?page=${this.currentPage}`).then(response => {
        this.messageSuggestions = response.data.data.messageSuggestions
      }).catch(error => {
        this.checkError(error)
      })
    },
    /**
     * Handle page change request
     * @param page
     */
    changePage: function (page) {
      this.currentPage = page
      this.getMessageSuggestions()
    },

    messageSuggestionSubmitForm() {
      this.message_suggestion_from.id ? this.updateMessageSuggestion(this.message_suggestion_from.id) : this.messageSuggestionStore()
    },

    messageSuggestionOpenModel() {
      this.messageSuggestionModal = true
    },

    messageSuggestionStore() {
      axios.post('/school/message-suggestion', this.message_suggestion_from).then(response => {
        this.getMessageSuggestions();
        this.messageSuggestionCloseModel()
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error)
      })
    },

    deleteMessageSuggestion(id) {
      this.removeConfirm(() => {
        axios.delete(`/school/message-suggestion/${id}`).then(response => {
          this.getMessageSuggestions();
          this.$toast.success(response.data.message)
        }).catch(error => {
          this.checkError(error);
        })
      });
    },

    editMessageSuggestion(id) {
      this.messageSuggestionModal = true
      axios.get(`/school/message-suggestion/${id}`).then(response => {
        this.message_suggestion_from = response.data.data
      }).catch(error => {
        this.checkError(error);
      });
    },
    updateMessageSuggestion(id) {
      axios.put(`/school/message-suggestion/${id}`, this.message_suggestion_from).then(response => {
        this.$toast.success(response.data.message)
        this.getMessageSuggestions();
        this.messageSuggestionCloseModel()
      }).catch(error => {
        this.checkError(error);
      })
    },

    messageInitialForm() {
      return {
        id: null,
        title: null,
        message: null
      }
    },

    messageSuggestionCloseModel() {
      this.messageSuggestionModal = false
      this.message_suggestion_from = this.messageInitialForm()

    },


    getLavelAndTitel(event) {
      if (event.target.value == 2 || event.target.value == 5) {
        this.isTitle = false;
        this.isLabel = false;
        this.blockWiseTitle = [];
        this.labelList = [];
      } else if (event.target.value == 4) {
        this.isTitle = true;
        this.isLabel = true;
        this.getTitles(event.target.value)
        this.getLevel(event.target.value)

      } else if (event.target.value == 1 || event.target.value == 3) {
        this.isTitle = true;
        this.isLabel = false;
        this.labelList = [];
        this.getTitles(event.target.value)

      }
    },

    getTitles(id) {
      axios.get('/school/block-wise-title/' + id).then(response => {
        this.blockWiseTitle = response.data.data;
      }).catch(error => {
        this.checkError(error)
      })
    },

    getLevel(id) {
      axios.get('/school/title-wise-label/' + id).then(response => {
        this.labelList = response.data.data;
      }).catch(error => {
        this.checkError(error)
      })
    },

    submitForm() {
      this.suggestion_from.id ? this.updateSuggestion(this.suggestion_from.id) : this.suggestionStore()

    },
    suggestionStore() {
      axios.post('/school/over-all-suggestions', this.suggestion_from).then(response => {
        this.getOverAllSuggestions()
        this.closeModal()
        this.$toast.success(response.data.message)
      }).catch(error => {
        this.checkError(error);
      })
    },

    deleteSuggestion: function (ids) {
      this.removeConfirm(() => {
        axios.delete('/school/over-all-suggestions/' + ids).then(response => {
          this.getOverAllSuggestions()
          this.$toast.success(response.data.message)
        }).catch(error => {
          this.checkError(error);
        })
      });
    },

    getSuggestion(id) {
      this.modal = true
      this.isTitle = false;
      this.isLabel = false;
      axios.get(`/school/over-all-suggestions/${id}`).then(response => {
        this.suggestion_from = response.data.data
        if (this.suggestion_from.title_id) {
          this.getTitles(this.suggestion_from.block_id)
          this.isTitle = true;
          if (this.suggestion_from.level_id) {
            this.getLevel(this.suggestion_from.block_id)
            this.isLabel = true;
          }
        }
      }).catch(error => {
        this.checkError(error);
      });

    },
    updateSuggestion(id) {
      axios.put(`/school/over-all-suggestions/${id}`, this.suggestion_from).then(response => {
        this.$toast.success(response.data.message)
        this.getOverAllSuggestions()
        this.closeModal()
      }).catch(error => {
        this.checkError(error);
      })
    },

    initialForm() {
      return {
        block_id: null,
        level_id: null,
        title_id: null,
        title: null,
        description: null,
        id: null
      }
    },
    closeModal() {
      this.suggestion_from = this.initialForm()
      this.modal = false
    }

  }
}
</script>

<style scoped>

</style>
