import Vue from 'vue'
import {ValidationObserver, ValidationProvider, extend} from 'vee-validate';
import {required, email, numeric, confirmed, max, min} from 'vee-validate/dist/rules';

extend('max', max)
extend('min', min)
extend('email', email)
extend('numeric', numeric)

extend('required', {
    ...required,
    message: 'こちらは記入、必須項目です。'
})

extend('email', {
    ...email,
    message: 'このメールアドレスは無効です。'
})

extend("confirmed", {
    ...confirmed,
    message: "パスワードの確認が一致しません"
});

extend('min', {
    validate(value, args) {
        return value.length >= args.length;
    },
    params: ['length'],
    message: 'パスワードには{length}文字を含める必要があります'
});

extend('max', {
    validate(value, args) {
        return value.length <= args.length;
    },
    params: ['length'],
    message: 'パスワードには最大{length}文字を含める必要があります'
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
