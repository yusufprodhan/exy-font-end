<template>
  <div>
    <div class="mypage-profile mb-10 mb-responsive" v-if="loaded">
      <div class="mypage-profile-header">
        <h4>プロフィール設定</h4>
      </div>
      <div class="mypage-profile-profileinof md-mb-auto">
        <div class="row">
          <div class="col-md-2">
            <div class="mypage-profile-prfileimage text-center">
              <img
                src="../../../assets/images/mypage/daiga-ellaby--0KARP5Jh_8-unspl.png"
              />
              <p class="text-base">
                <u>プロフィール写真を変更</u>
              </p>
            </div>
          </div>
          <div class="col-md-10">
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-3">
                  <div class="bg-info-header input-label">
                    <span>名前（ふりがな）</span>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <p class="m-0 p-0">{{ user.details.furigana_name }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-3">
                  <div class="bg-info-header input-label">
                    <span>ユーザーネーム</span>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="input-group-container-right">
                    <div class="info" v-if="!updateModule._name">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                        v-if="!updateModule._name"
                      >
                        <p class="m-0">{{ user.details.name }}</p>
                        <button
                          type="button"
                          @click="doStateAction('_name', null)"
                          class="btn btn-link m-0 p-0"
                        >
                          修正する
                        </button>
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-between responsive"
                      v-if="updateModule._name"
                    >
                      <input
                        type="text"
                        class="form-control"
                        :placeholder="user.name"
                        v-model="user.details.name"
                      />
                      <button
                        type="button"
                        class="btn btn-outline-light border text-dark"
                        @click="doStateAction('_name', 'name')"
                      >
                        修正する
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mypage-profile-main bg-light p-3">
        <div
          class="
            mypage-profile-singlebox
            shadow shadow-sm
            bg-white
            p-3
            rounded-2
            mb-2
          "
        >
          <div class="mypage-profile-singlebox-label">メールアドレス</div>
          <div class="mypage-profile-singlebox-border"></div>
          <div class="mypage-profile-singlebox-main">
            <div
              class="d-flex justify-content-between align-items-center"
              v-if="!updateModule._email"
            >
              <p class="m-0">{{ user.email }}</p>
              <button
                type="button"
                @click="doStateAction('_email', null)"
                class="btn btn-link m-0 p-0"
              >
                修正する
              </button>
            </div>
            <div
              class="d-flex justify-content-between responsive"
              v-if="updateModule._email"
            >
              <input
                type="text"
                class="form-control"
                :placeholder="user.email"
                v-model="user.email"
              />
              <button
                type="button"
                class="btn btn-outline-light border text-dark"
                @click="doStateAction('_email', 'email')"
              >
                修正する
              </button>
            </div>
          </div>
        </div>
        <div
          class="
            mypage-profile-singlebox
            shadow shadow-sm
            bg-white
            p-3
            rounded-2
            mb-2
          "
        >
          <div class="mypage-profile-singlebox-label">電話番号</div>
          <div class="mypage-profile-singlebox-border"></div>
          <div class="mypage-profile-singlebox-main">
            <div
              class="d-flex justify-content-between"
              v-if="!updateModule._phone"
            >
              <p class="m-0 p-0">{{ user.details.phone_number }}</p>
              <button
                type="button"
                @click="doStateAction('_phone', null)"
                class="btn btn-link m-0 p-0"
              >
                変更する
              </button>
            </div>
            <div
              class="d-flex justify-content-between responsive"
              v-if="updateModule._phone"
            >
              <input
                type="text"
                class="form-control"
                :placeholder="user.details.phone_number"
                v-model="user.details.phone_number"
              />
              <button
                type="button"
                class="btn btn-outline-light border text-dark"
                @click="doStateAction('_phone', 'phone_number')"
              >
                修正する
              </button>
            </div>
          </div>
        </div>
        <div
          class="
            mypage-profile-singlebox
            shadow shadow-sm
            bg-white
            p-3
            rounded-2
            mb-2
          "
        >
          <div class="mypage-profile-singlebox-label">住所</div>
          <div class="mypage-profile-singlebox-border"></div>
          <div class="mypage-profile-singlebox-main">
            <div
              class="d-flex justify-content-between align-items-center"
              v-if="!updateModule._address"
            >
              <div>
                <p class="m-0 p-0">{{ user.details.building_name }}</p>
                <p class="m-0 p-0">{{ user.details.city }}</p>
                <p class="m-0 p-0">{{ user.details.address }}</p>
              </div>
              <div>
                <button
                  type="button"
                  @click="doStateAction('_address', null)"
                  class="btn btn-link m-0 p-0"
                >
                  変更する
                </button>
              </div>
            </div>
            <div class="" v-if="updateModule._address">
              <div>
                <div class="row">
                  <div class="col-md-9">
                    <div class="input-group rounded-0">
                      <span class="input-group-text rounded-0">郵便番号</span>
                      <input
                        type="text"
                        class="form-control rounded-0"
                        :placeholder="user.details.post_code"
                        v-model="user.details.post_code"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 text-right">
                    <button
                      type="button"
                      class="btn btn-outline-light border text-dark pull-right"
                    >
                      住所自動入力
                    </button>
                  </div>
                  <div class="col-md-9">
                    <div class="input-group rounded-0">
                      <span class="input-group-text rounded-0"
                        >所在地（都道府県）</span
                      >
                      <select
                        class="form-control rounded-0"
                        v-model="user.details.prefecture_id"
                      >
                        <option value="" disabled selected>
                          選択してください
                        </option>
                        <option
                          v-for="prefecture in prefectures"
                          :key="prefecture.id"
                          :value="prefecture.id"
                        >
                          {{ prefecture.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input-group rounded-0">
                      <span class="input-group-text rounded-0"
                        >所在地（市区町村/番地）</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        :placeholder="user.details.city"
                        v-model="user.details.city"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input-group rounded-0">
                      <span class="input-group-text rounded-0"
                        >所在地（建物名）</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        :placeholder="user.details.building_name"
                        v-model="user.details.building_name"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button
                      type="button"
                      class="
                        btn btn-outline-light
                        border
                        text-dark
                        pull-right
                        mt-2
                      "
                      @click="doStateAction('_address', 'address')"
                    >
                      修正する
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            mypage-profile-singlebox
            shadow shadow-sm
            bg-white
            p-3
            rounded-2
            mb-2
          "
        >
          <div class="mypage-profile-singlebox-label">生年月日</div>
          <div class="mypage-profile-singlebox-border"></div>
          <div class="mypage-profile-singlebox-main">
            <div class="d-flex justify-content-between">
              <div>
                <p class="m-0 p-0">
                  {{ user.details.birthday | formatDateMdy }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            mypage-profile-singlebox
            shadow shadow-sm
            bg-white
            p-3
            rounded-2
            mb-2
          "
        >
          <div class="mypage-profile-singlebox-label">性別</div>
          <div class="mypage-profile-singlebox-border"></div>
          <div class="mypage-profile-singlebox-main">
            <div>
              <div>
                <p class="m-0 p-0">{{ user.details.gender | capitalize }}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            mypage-profile-singlebox
            shadow shadow-sm
            bg-white
            p-3
            rounded-2
            mb-2
          "
        >
          <div class="mypage-profile-singlebox-label">書類登録</div>
          <div class="mypage-profile-singlebox-border"></div>
          <div class="mypage-profile-singlebox-main">
            <div class="d-flex justify-content-between">
              <div>
                <p class="m-0 p-0">本人確認</p>
              </div>
              <div>
                <router-link :to="{ name: 'Mypage.DocumentUpload' }">
                  <span class="text-decoration-underline">登録完了</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            shadow shadow-sm
            bg-white
            p-3
            rounded-2
            mb-2
            d-flex
            justify-content-between
          "
        >
          <div>顔写真（送迎者登録）</div>
          <div class="mypage-profile-singlebox-main">
            <div>
              <div>
                <router-link :to="{ name: 'Mypage.PickupPersonRegistration' }">
                  <span class="text-decoration-underline">登録完了</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            shadow shadow-sm
            bg-white
            p-3
            rounded-2
            mb-2
            d-flex
            justify-content-between
            line
          "
        >
          <div>勤務証明書</div>
          <div class="mypage-profile-singlebox-main">
            <div class="d-flex justify-content-between">
              <div>
                <button
                  type="button"
                  class="btn btn-outline-light border text-dark pull-right mt-2"
                >
                  ダウンロード
                </button>
              </div>
              <div>
                <router-link
                  :to="{ name: 'Mypage.WorkCertificate' }"
                  class="btn btn-link mt-2"
                >
                  <span class="text-decoration-underline"
                    >アップロード完了</span
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 d-flex justify-content-end">
        <router-link :to="{ name: 'Mypage.WithdrowFromKigarniHoik' }">
          <span class="text-decoration-underline" style="color: #3b86ff"
            >キガルニホイクを退会する</span
          >
        </router-link>
      </div>
    </div>
    <div>
      <vue-element-loading
        :active="isLoadingshow"
        spinner="bar-fade-scale"
        color="#FF6700"
        :is-full-screen="isFullScreen"
      />
    </div>
  </div>
</template>

<script>
import VueElementLoading from "vue-element-loading";
import Frontend from "../../../layouts/Frontend";
import axios from "../../../axios";

export default {
  name: "Profile",
  components: {
    VueElementLoading,
  },
  data() {
    return {
      user: [],
      prefectures: [],
      loaded: false,
      isLoadingshow: true,
      isFullScreen: false,
      updateModule: {
        _name: false,
        _email: false,
        _phone: false,
        _address: false,
      },
      username: true,
      email: true,
      phone: true,
      address: true,
    };
  },
  created() {
    this.$emit("update:layout", Frontend);
    /* --- user details --- */
    this.getParentLatestData();
    /* --- prefecture --- */
    axios
      .get("/prefecture", this.$data)
      .then((res) => {
        this.prefectures = res.data.data;
      })
      .catch((error) => {
        this.checkError(error);
      });
  },
  methods: {
    doStateAction(_state, _action) {
      if (_action !== null) {
        var params = {};
        if (_action === "address") {
          params = {
            address: true,
            post_code: this.user.details.post_code,
            prefecture_id: this.user.details.prefecture_id,
            city: this.user.details.city,
            building_name: this.user.details.building_name,
          };
        } else {
          params = {
            [_action]:
              _action == "email"
                ? this.user[_action]
                : this.user["details"][_action],
          };
        }
        this.updateModule[_state] = !this.updateModule[_state];
        axios
          .post("/update-parent-information", params)
          .then((res) => {
            if (res.data.success) {
              this.$toast.success(res.data.message);
            } else {
              this.$toast.error(res.data.message);
            }
          })
          .catch((error) => {
            this.checkError(error);
          });
      } else {
        this.updateModule[_state] = !this.updateModule[_state];
      }
    },
    getParentLatestData() {
      this.isLoadingshow = true;
      axios
        .get("/parent")
        .then((res) => {
          this.user = res.data;
          this.loaded = true;
          this.isLoadingshow = false;
        })
        .catch((error) => {
          this.checkError(error);
        });
    },
  },
};
</script>

<style lang="scss">
.mypage-profile-main {
  background: #f8f7f7 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
}
.bg-info-header {
  background: #fbeef5 0% 0% no-repeat padding-box;
}
.mypage-profile-header h4 {
  color: #333333;
  position: relative;
  margin-bottom: 25px;
  &::after {
    content: "";
    display: block;
    clear: both;
    background: #333333;
    width: 78%;
    height: 1px;
    position: absolute;
    right: 7px;
    top: 14px;
  }
}
.mypage-profile-prfileimage {
  p {
    font-size: 13px;
  }
}
.form-group-container {
  margin: 0 !important;
}
.mypage-profile-singlebox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .mypage-profile-singlebox-label {
    margin-right: 10px;
    width: 15%;
  }
  .mypage-profile-singlebox-border {
    margin-right: 10px;
    width: 2%;
    &::after {
      content: "";
      display: block;
      clear: both;
      height: 20px;
      width: 1px;
      background: #666;
    }
  }
  .mypage-profile-singlebox-main {
    width: 80%;
  }
}
.btn-link {
  color: #333333 !important;
}
.mb-10 {
  margin-bottom: 10rem;
}

.mypage-profile-profileinof {
  .d-flex.responsive {
    gap: 10px;
    button {
      width: 200px;
    }
  }
}

.mypage-profile-singlebox-main {
  .d-flex.responsive {
    gap: 10px;
    button {
      width: 200px;
    }
  }
}

/* responsive design */
@media only screen and (max-width: 600px) {
  .md-mb-auto {
    margin-bottom: 1rem;
  }
  .mypage-profile-singlebox {
    align-items: flex-start;
    flex-direction: column;
    .mypage-profile-singlebox-label {
      width: 100%;
      border-right: 1px solid #aeaeae;
      background: #f2f2f2;
      padding: 7px 10px;
      margin-bottom: 10px;
    }
    .mypage-profile-singlebox-border {
      display: none;
    }
    .mypage-profile-singlebox-main {
      width: 100%;
      .d-flex {
        padding: 0px 5px;
      }
      .d-flex.responsive {
        flex-direction: column;
        align-content: flex-end;
        gap: 5px;
      }
    }
  }

  .responsive {
    flex-direction: column;
    align-content: flex-end;
    gap: 5px;
  }

  .mb-responsive {
    .form-group-container {
      margin-bottom: 2px !important;
    }
    .input-label {
      padding: 10px;
    }
    .input-group-container-right {
      padding: 15px 10px;
    }
    .line {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
