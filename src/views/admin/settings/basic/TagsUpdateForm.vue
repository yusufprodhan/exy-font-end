<template>
  <div class="mt-5">
    <div class="py-2 bg-707070 border border-333333">
      <span class="text-white ps-2 fw-bold">タグ</span>
    </div>
    <div class="border border-top-0 border-333333">
      <div class="p-4" style="background: #F8F7F7">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 gy-3 text-center justify-content-center">
          <div class="col" v-for="(item, index) in tags" :key="index">
            <a class="bg-white rounded-3 d-flex align-items-center justify-content-center py-3 fw-bold text-base text-center cursor-pointer"
               :class="[currentTag.id === item.id ? 'text-decoration-underline bg-bcbcbc':'']" @click="tagSwitch(index)">{{ item.stg_tag.name }}</a>
          </div>
          <div class="col">
            <button type="button" class="bg-white border border-color-e6006e --color-e6006e py-3 fw-bold text-base text-center cursor-pointer w-100" @click="modalHideShow">タグを追加・削除＋</button>
          </div>
        </div>
      </div>

      <div class="py-5 px-4">
        <div class="row">
          <div class="col-md-5 col-lg-4">
            <div class="posted-image-area">
              <div class="image-remove-box" v-if="currentTag.image_path">
                <div class="image-remove-icon" @click="removeImage">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  削除する
                </div>
              </div>
              <div class="photo-upload__top border border-aaa">
                <div class="file-upload-form__top">
                  <input type="file" @change="addImage" id="tagImage" accept="image/*" class="input-file__top"/>
                  <label for="tagImage">
                    <i class="fa fa-camera fa-5x" aria-hidden="true"></i>
                  </label>
                </div>
                <div class="image-preview__top" v-if="currentTag.image_path !== null && currentTag.image_path !== ''">
                  <img :src="currentTag.image_path" class="w-100 h-100 bg-white" alt="">
                </div>
              </div>
              <div class="text-center border border-aaa py-1 fs-5">登録画像</div>
            </div>
          </div>
          <div class="col-md-7 col-lg-8">
            <div class="row gy-4">
              <div class="col-12">
                <div class="d-flex border border-color-707070">
                  <div class="d-flex justify-content-center align-items-center bg-fbeef5 py-2 text-center w-150 flex-shrink-0">タイトル</div>
                  <div class="w-100 p-2">
                    <textarea class="form-control" v-model="currentTag.title" maxlength="80"></textarea>
                    <div class="text-right text-sm mt-1">※最大80文字（現在：{{ empty(!currentTag.title) ? currentTag.title.length : 0 }}文字）</div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="d-flex border border-color-707070">
                  <div class="d-flex justify-content-center align-items-center bg-fbeef5 py-2 text-center w-150 flex-shrink-0">文章</div>
                  <div class="w-100 p-2">
                    <textarea class="form-control" style="min-height: 220px" maxlength="250" v-model="currentTag.description"></textarea>
                    <div class="text-right text-sm mt-1">※最大250文字（現在：{{ empty(!currentTag.description) ? currentTag.description.length : 0 }}文字）</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-right pe-4 mb-4">
        <button type="button" @click="tagUpdate" class="submit-btn">変更内容を保存</button>
      </div>
    </div>

    <div class="exy--modal">
      <div class="modal show" aria-hidden="true" v-if="isModalOpen">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="close" @click="modalHideShow">
              <i class="fa fa-times-circle text-2xl"></i>
            </div>
            <div class="p-4 mt-2">
              <h4 class="text-xl fw-bold mb-4 mt-2">タグとして表示させたい項目にチェックを入れてください。（最高10項目まで）</h4>

              <div class="row gy-4 my-4">
                <div class="col-md-4" v-for="(item, index) in allTags" :key="index">
                  <label class="container-checkbox"> {{ item.name }}
                    <input type="checkbox" :value="item.id" v-model="currentTags">
                    <span class="checkmark" :class="currentTags.includes(item.id) ? 'rounded-circle':''">
                      <small>{{ currentTags.includes(item.id) ? currentTags.indexOf(item.id) + 1 : '10' }}</small>
                    </span>
                  </label>
                </div>
              </div>

              <div class="text-center py-2 mt-5">
                <button type="button" class="w-150 border py-2 text-xs d-inline-block text-white border border-color-e6006e bg-cb3a82" @click="tagsUpdate">登録する</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../../../axios";

export default {
  name: "TagsUpdateForm",
  props: {
    tags: Array,
    allTags: Array,
  },
  created() {
    this.getCurrentTagIds()
  },
  data() {
    return {
      currentTags: [],
      isModalOpen: false,
      currentTag: this.tags[0]
    }
  },
  watch: {
    currentTags() {
      if (this.currentTags.length > 10) {
        this.currentTags.splice(-1)
      }
    }
  },
  methods: {
    tagSwitch(index) {
      this.currentTag = this.tags[index]
    },
    getCurrentTagIds() {
      this.currentTags = []
      this.tags.forEach(e => {
        this.currentTags.push(e.stg_srch_tag_id)
      })
    },
    modalHideShow() {
      this.isModalOpen = !this.isModalOpen
      this.getCurrentTagIds()
    },
    removeImage() {
      axios.post(`/school/tag-image/${this.currentTag.id}`).then(() => {
        this.currentTag.image_path = ''
        this.$emit('getBasicInfo')
      }).catch(error => {
        this.checkError(error)
      })
    },
    addImage(event) {
      const input = event.target;

      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.currentTag.image_path = e.target.result
          axios.post(`/school/tag-image/${this.currentTag.id}`, { image_path: e.target.result }).then(() => {
            this.$emit('getBasicInfo')
          }).catch(error => {
            this.checkError(error)
          })
        }
        reader.readAsDataURL(input.files[0]);
      }
    },
    tagsUpdate() {
      if (this.currentTags.length === 10) {
        axios.post('/school/tags-store', { stg_srch_tag_id: this.currentTags }).then(() => {
          this.$emit('getBasicInfo')
          this.isModalOpen = false
        }).catch(error => {
          this.checkError(error)
        })
      } else if (this.currentTags.length > 10) {
        this.$toast.error('A maximum of 10 tags can be select.')
      } else {
        this.$toast.error('Select 10 tags')
      }
    },
    tagUpdate() {
      axios.post(`/school/tag-content-update/${this.currentTag.id}`, {
        title: this.currentTag.title,
        description: this.currentTag.description,
      }).then(response => {
        this.$toast.success(response.data.message)
        this.$emit('getBasicInfo')
        this.$store.commit('schoolSettingFormActiveUpdate', false)
      }).catch(error => {
        this.checkError(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  background: #F2F2F2;
  border: 1px solid #cecece;
}

textarea:focus {
  border: 1px solid #cecece;
}

.container-checkbox {
  .checkmark:after {
    height: 20px;
    width: 20px;
    background: #84C942;
    top: 0;
    left: -2px;
    border: none;
    transform: inherit;
    border-radius: 50%;
  }

  small {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #ffffff;
    font-size: 12px;
    z-index: 9;
    transform: translate(-50%, -40%);
  }
}
</style>
