export default {
  data: function () {
    return {
      bdLoading: false,
    }
  },
  watch: {
    bdLoading: function (loading) {
      this.toggleLoader(loading)
    },
  },
  methods: {
    /**
     * Show loader indicator
     */
    showLoader: function () {
      this.bdLoading = true
    },

    /**
     * Hide loader indicator
     * @returns {default.methods}
     */
    hideLoader: function () {
      this.bdLoading = false
      return this
    },

    /**
     * Toggle loader indicator
     * @param {boolean} loading
     */
    toggleLoader: function (loading = false) {
      if (loading === false) {
        document.getElementById("loading-bg").style.display="none";
      } else {
        document.getElementById("loading-bg").style.display="block";
      }
    }
  },
  mounted: function () {
    this.toggleLoader(this.bdLoading)
  }
}
