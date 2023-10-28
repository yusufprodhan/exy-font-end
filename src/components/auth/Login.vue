<template>
  <div class="login-page">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item active">会員登録 ｜ ログイン</li>
          </ol>
        </nav>
      </div>
    </div>
    <section class="login-area mt-5">
      <div class="container">
        <div class="row row-eq-height">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="text-center m-0 py-2 fw-bold color-cb3a82">
                  ログイン
                </h5>
              </div>
              <div class="card-body">
                <p class="fs-6 text-center">
                  下記サイトなどで登録されている方は、同じIDでログインができます。
                </p>
                <div class="login-btn-area text-center">
                  <button class="btn btn-dark rounded-pill">THE WOMAN</button>
                  <button class="btn btn-dark rounded-pill">
                    キガルニホイクシ
                  </button>
                </div>
                <div class="login-area-main mt-5">
                  <form action="" method="POST" @submit.prevent="login">
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">メールアドレス <br/>
                        (又は保育園ID）</label>
                      <div class="col-sm-9 m-auto">
                        <input type="text" class="form-control" v-model="credentials.email" required/>
                      </div>
                    </div>
                    <div class="form-group row mt-3">
                      <label class="col-sm-3 col-form-label">パスワード</label>
                      <div class="col-sm-9 m-auto">
                        <input type="password" class="form-control" v-model="credentials.password" required/>
                      </div>
                    </div>
                    <div class="form-group mt-4 mb-1">
                      <label class="container-checkbox mb-1 color-333333 text-sm">次回から自動的にログイン
                        <input type="checkbox"><span class="checkmark"></span>
                      </label>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn text-xl exy-default-btn w-100">
                        ログイン
                      </button>
                    </div>
                  </form>
                  <div class="forget-pass-email-option mt-4">
                    <ul>
                      <li>
                        <router-link :to="{ name: 'PasswordReset' }">パスワードを忘れた方はこちら</router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'ConformEmail' }">メールアドレスを忘れた方はこちら</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-header">
                <h5 class="text-center m-0 py-2 fw-bold color-cb3a82">
                  新規会員登録
                </h5>
              </div>
              <div class="card-body">
                <div class="">
                  <div class="registration-box">
                    <p class="m-0 p-0 fw-bold">24時間いつでもネット予約</p>
                    <p class="m-0 p-0 fw-bold">会員登録は無料です。</p>
                  </div>
                  <router-link :to="{ name: 'Registration' }" class="btn text-xl exy-default-btn w-100 mt-4">新規会員登録へ</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 mt-5">
            <div class="login-page-footer border border-color-707070 h-100 p-4">
              <p class="d-table-cell fw-bold">
                キガルニホイク利用をご検討されている保育園様はこちら ＞
              </p>
            </div>
          </div>
          <div class="space-100"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Frontend from "../../layouts/Frontend";

export default {
  name: "Login",
  data() {
    return {
      credentials: {
        email: null,
        password: null,
      },
    };
  },
  created() {
    this.$emit("update:layout", Frontend);
  },
  methods: {
    login() {
      this.$store
          .dispatch("login", this.credentials)
          .then((response) => {
            if (response.data.user.type === "school")
              window.location.href = "/school/my-page";
            else if (response.data.user.type === "parent")
              window.location.href = "/my-page/home";
          })
          .catch((error) => {
            this.checkError(error);
          });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: #FEFDFC;
  border: 1px solid #AAAAAA;
  border-radius: 5px 5px 0 0;

  .card-header {
    background: #FEFDFC;
    box-shadow: 0 2px 5px #0000001A;
  }
}

.form-control {
  border: 1px solid #707070;
  border-radius: 5px;
}
</style>
