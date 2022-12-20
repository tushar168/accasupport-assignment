<template>
  <ValidationProvider
    v-slot="{ errors, valid }"
    class="relative appearance-none w-full"
    tag="div"
    :vid="vid"
    :rules="rules"
    :name="field"
  >
    <b-input-group :id="container" :label-for="field">
      <b-input
        :id="field"
        v-model="innerValue"
        :autocomplete="autocomplete"
        :name="field"
        :type="type"
        :placeholder="placeholder"
        class="form-control"
        :state="errors[0] ? false : (valid ? true : null)"
        :formatter="formatter"
        @copy="onCopyPaste"
        @drag="onCopyPaste"
        @drop="onCopyPaste"
        @paste="onCopyPaste"
      />
      <b-input-group-append v-if="showPasswordToggle">
        <span class="input-group-text">
          <b-icon-eye-slash v-if="type === 'password'" @click="changeType('text')" />
          <b-icon-eye v-else @click="changeType('password')" />
        </span>
      </b-input-group-append>

      <b-form-invalid-feedback
        v-if="showFeedbackToggle"
        class="text-left"
        :state="valid"
      >
        {{ errors[0] }}
      </b-form-invalid-feedback>
    </b-input-group>
  </ValidationProvider>
</template>

<script>
import Vue from 'vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import { ValidationProvider, extend } from 'vee-validate'

import {
  required,
  regex,
  max,
  min
} from 'vee-validate/dist/rules'

Vue.use(BootstrapVueIcons)

extend('regex', regex)
extend('max', {
  ...max,
  message: (fieldName, _placeholders) => {
    return `Please enter valid ${fieldName}`
  }
})
extend('min', {
  ...min,
  message: (fieldName, _placeholders) => {
    return `Please enter valid ${fieldName}`
  }
})
extend('required', {
  ...required,
  message: (fieldName, _placeholders) => {
    return `Please enter valid ${fieldName}`
  },
  computesRequired: true
})

extend('requiredInput', {
  ...required,
  message: (fieldName, _placeholders) => {
    if (fieldName === 'firstName') {
      return 'Please enter valid first name'
    } else if (fieldName === 'lastName') {
      return 'Please enter valid last name'
    } else if (fieldName === 'startYear' || fieldName === 'endYear') {
      return 'Please enter valid year'
    } else if (fieldName === 'code') {
      return 'You must supply a verification code.'
    } else {
      return `Please enter a valid ${fieldName}`
    }
  },
  computesRequired: true
})

extend('nospaces', {
  validate: (value) => {
    const spaces = new RegExp('^\\S*$')
    return spaces.test(value)
  },
  message: 'No spaces allowed.'
})

export default {
  components: {
    ValidationProvider
  },
  props: {
    field: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: 'text',
      validator (value) {
        return [
          'url',
          'text',
          'password',
          'tel',
          'search',
          'number',
          'email'
        ].includes(value)
      }
    },
    autocomplete: {
      type: String,
      required: false,
      default: 'on'
    },
    placeholder: {
      type: String,
      required: true
    },
    vid: {
      type: String,
      default: undefined
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    // must be included in props
    value: {
      type: null,
      default: null
    }
  },
  data () {
    return {
      innerValue: '',
      container: this.field + '-group',
      showPasswordToggle: this.type === 'password',
      showFeedbackToggle:
          !(this.field === 'day' || this.field === 'month' || this.field === 'year')
    }
  },
  watch: {
    // Handles internal model changes.
    innerValue (value) {
      this.$emit('update-value', value, this.field)
    },
    value (val) {
      if (val !== this.innerValue) {
        this.innerValue = val
      }
    }
  },
  created () {
    if (this.value) {
      this.innerValue = this.value
    }
  },
  methods: {
    onCopyPaste (e) {
      if (this.type === 'email') {
        e.preventDefault()
        return false
      }
      return true
    },
    changeType (type) {
      this.type = type
    },
    formatter (value) {
      if (
        this.field === 'year' ||
          this.field === 'day' ||
          this.field === 'month' ||
          this.field === 'startYear' ||
          this.field === 'endYear'
      ) {
        return value === '' ? '' : value < 0 ? Math.abs(value) : value
      }
      return value
    }
  }
}
</script>

  <style lang="scss" scoped>
  .input-group {
    input.form-control {
      border-radius: 0.25rem
    }
  }
  </style>
