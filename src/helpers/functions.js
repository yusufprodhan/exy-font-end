import empty from 'locutus/php/var/empty';
import moment from 'moment'
import is_bool from 'locutus/php/var/is_bool';
import in_array from 'locutus/php/array/in_array';
import number_format from 'locutus/php/strings/number_format';

const baseURL = process.env.VUE_APP_API_URL;

export default {
    filters: {
        /**
         * Truncate text if it exceeds limit & add ellipsis
         *
         * @param {string} value
         * @param {int} limit
         * @return {string}
         */
        truncate: function (value, limit = 80) {
            if (value.length <= limit) return value;
            return value.substr(0, limit) + "...";
        },

        /**
         * Make first Letter of the string uppercase
         *
         * @param value
         * @return {string}
         */
        capitalize: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },

        /**
         * Date format
         *
         * @param value
         * @returns {string}
         */
        formatDate: function (value) {
            if (value) {
                return moment(String(value)).format('YYYY/MM/DD')
            }
        },
        formatDateMdy: function (value) {
            if (value) {
                return moment(String(value)).format('MMMM DD, YYYY')
            }
        },
        formatTime: function (value) {
            if (value) {
                return moment(String(value)).format('HH:mm')
            }
        },

        numberWithCommas(n) {
            return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    methods: {
        /**
         * Determine whether a variable is empty
         *
         * @param mixedVar
         * @return {boolean}
         */
        empty: function (mixedVar) {
            if (mixedVar instanceof File) {
                return this.empty(mixedVar.name);
            }

            return empty(mixedVar);
        },

        /**
         * Determine whether a variable is not empty
         *
         * @param mixedVar
         * @return {boolean}
         */
        notEmpty: function (mixedVar) {
            return !empty(mixedVar);
        },

        /**
         * Finds out whether a variable is a boolean
         *
         * @param mixedVar
         * @return {*}
         */
        is_bool: function (mixedVar) {
            return is_bool(mixedVar);
        },

        /**
         * Format a number with grouped thousands
         *
         * @param number
         * @param decimals
         * @param decPoint
         * @param thousandsSep
         */
        number_format: function (number, decimals, decPoint, thousandsSep) {
            return number_format(number, decimals, decPoint, thousandsSep);
        },

        /**
         * Checks if a value exists in an array
         * @param needle
         * @param haystack
         * @param argStrict
         * @return {boolean}
         */
        in_array: function (needle, haystack, argStrict) {
            return in_array(needle, haystack, argStrict);
        },

        /**
         * Truncate text if it exceeds limit & add ellipsis
         *
         * @param {string} value
         * @param {int} limit
         * @return {string}
         */
        truncate: function (value, limit = 80) {
            if (value.length <= limit) return value;
            return value.substr(0, limit) + "...";
        },

        timeShow: function (value, limit = 5) {
            if (value.length <= limit) return value;
            return value.substr(0, limit);
        },

        /**
         * Make first Letter of the string uppercase
         *
         * @param value
         * @return {string}
         */
        capitalize: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },

        /**
         * Get File path
         * @param dir
         * @param fileName
         * @returns {string}
         */
        file_path(dir, fileName) {
            return `${baseURL}/storage/${dir}/${fileName}`
        },
    },
};
