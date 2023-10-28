<template>
  <div class="row w-100 row-1 ms-0">
    <div class="col-md-2 left-col">
      <span>掲載写真</span>
    </div>
    <div class="col-md-10 right-col my-3">
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="posted-image-area">
            <div class="image-remove-box" v-if="postedImage.id">
              <div class="image-remove-icon" @click="removePostedImage(999)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                削除する
              </div>
            </div>
            <div class="photo-upload__top border border-aaa">
              <div class="file-upload-form__top">
                <input type="file" @change="postedImgUpdate" id="exterior" accept="image/*" class="input-file__top"/>
                <label for="exterior">
                  <i class="fa fa-camera fa-5x" aria-hidden="true"></i>
                </label>
              </div>
              <div class="image-preview__top" v-if="postedImage.image_path !== null && postedImage.image_path !== ''">
                <img :src="postedImage.image_path" class="w-100 h-100" alt="">
              </div>
            </div>
            <div class="text-center border border-aaa py-1 fs-5">外観</div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4" v-for="(image, i) in postedImages" :key="i">
          <div class="posted-image-area">
            <div class="image-remove-box" v-if="image.id">
              <div class="image-remove-icon" @click="removePostedImage(i, image)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                削除する
              </div>
            </div>
            <div class="blank-image-remove" v-if="!image.id && i > 1" @click="removePostedImage(i, null, 1)">
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <div class="photo-upload__top border border-aaa">
              <div class="file-upload-form__top">
                <input type="file" @input="postedImg($event, i)" :id="`pImg${i}`" accept="image/*" class="input-file__top"/>
                <label :for="`pImg${i}`">
                  <i class="fa fa-camera fa-5x" aria-hidden="true"></i>
                </label>
              </div>
              <div class="image-preview__top" v-if="image.image_path !== null && image.image_path !== ''">
                <img :src="image.image_path" class="w-100 h-100" alt="">
              </div>
            </div>
            <div class="text-center border border-aaa py-1 fs-5">
              <span>内観 {{ i + 1 }}</span>
            </div>
          </div>
        </div>
        <div class="text-right">
          <button type="button" class="image-plus-btn" @click="addPostedImage"><i class="fa fa-plus"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../../../axios";

export default {
  name: "PostedPhotos",
  props: {
    postedImage: Object,
    postedImages: Array,
  },
  methods: {
    postedImgUpdate(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.postedImage.image_path = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }

      setTimeout(() => {
        axios.post('/school/update-posted-images', this.postedImage).then(response => {
          this.$toast.success(response.data.message)
          this.$emit('getBasicInfo')
        }).catch(error => {
          this.checkError(error)
        })
      }, 10)
    },
    addPostedImage() {
      this.postedImages.push({
        image_path: null
      });
    },
    removePostedImage(index, image, blank = 0) {
      this.removeConfirm(() => {
        if (index === 999) {
          axios.delete('/school/delete-posted-images/' + this.postedImage.id).then(response => {
            this.$toast.success(response.data.message)
            this.$emit('getBasicInfo')
          })
        }

        if (image && image.id) {
          axios.delete('/school/delete-posted-images/' + image.id).then(response => {
            this.postedImages.splice(index, 1)
            this.$toast.success(response.data.message)
            this.$emit('getBasicInfo')
          }).catch(error => {
            this.checkError(error)
          })
        }

        if (blank) this.postedImages.splice(index, 1)
      })
    },
    postedImg(event, i) {
      const input = event.target;

      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.postedImages[i].image_path = e.target.result

          axios.post('/school/update-posted-images', this.postedImages[i]).then(response => {
            this.$toast.success(response.data.message)
            this.$emit('getBasicInfo')
          }).catch(error => {
            this.checkError(error)
          })
        }
        reader.readAsDataURL(input.files[0]);
      }
    },
  }
}
</script>

<style scoped>

</style>
