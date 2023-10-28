<template id="range-slider">
  <div class="position-relative">
    <div class="range-slider" :class="{'cursor-none': !schoolSettingFormActive}">
      <input type="range" :value="value" @input="onInput" :min="min" :max="max" :step="step" :disabled="!schoolSettingFormActive">
    </div>
    <div class="position-absolute top-0 slider-dots d-flex align-items-center justify-content-between w-100 z-index-1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeSlider",
  props: {
    value: {
      default: 0
    },
    min: {
      type: Number,
      default: 20
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    }
  },
  computed: {
    schoolSettingFormActive() {
      return this.$store.getters.schoolSettingFormActive
    }
  },
  data: function () {
    return {
      range: this.value
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    }
  },
  watch: {
    range: function () {
      this.$emit('input', this.range)
    },
    value: function () {
      this.range = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.range-slider input {
  -webkit-appearance: none;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 5px;
  background: none;
}

.range-slider input:focus {
  outline: none;
}

.range-slider input::-webkit-slider-runnable-track {
  height: 4px;
  background: #CECECE;
  cursor: pointer;
  transition: all 0.2s ease;
}

.range-slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 70px;
  height: 68px;
  background: url('data:image/png;base64,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') center/contain no-repeat content-box;
  position: relative;
  z-index: 3;
  cursor: pointer;
  transform: translateY(-50%);
}

.cursor-none input::-webkit-slider-thumb,
.cursor-none input::-webkit-slider-runnable-track {
  cursor: default;
}

.z-index-1 {
  z-index: -1;
}

.slider-dots {
  span {
    background: #CECECE;
    height: 22px;
    width: 22px;
    border-radius: 50%;
  }
}
</style>
