import Vue from "vue";
import swal from "sweetalert2";
import Functions from './functions'
import Loader from "./loader";

Vue.mixin({
    mixins: [Functions, Loader],
    methods: {
        /**
         * SWAL confirm alert wrapper
         * @param callback
         */
        removeConfirm: function (callback) {
            swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#CB3A82',
                cancelButtonColor: 'btn btn-default',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) callback();
            })
        }
    }
});
