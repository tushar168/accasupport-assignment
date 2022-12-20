<template>
  <ValidationObserver ref="details" v-slot="{ invalid }">
    <b-row align-h="center">
      <b-col lg="4" md="6">
        <b-form id="frmLogin" @submit.prevent="register(invalid)">
          <b-alert :show="!!formErrors" variant="danger" v-html="formErrors" />
          <b-alert :show="!!noFormErrors" variant="success" v-html="noFormErrors" />
          <TextInput
            field="comment"
            type="text"
            autocomplete="given-comment"
            vid="comment"
            rules="requiredInput"
            placeholder="Enter Comment"
            @update-value="updateValue"
          />
          <TextInput
            field="duration"
            type="number"
            autocomplete="given-duration"
            vid="duration"
            rules="requiredInput"
            placeholder="Enter Duration"
            @update-value="updateValue"
          />
          <b-form-datepicker
            id="example-datepicker"
            v-model="form.date"
            :state="form.date !== ''"
            today-button
            reset-button
            close-button
            class="mb-4"
          />
          <TextInput
            field="activity"
            type="text"
            autocomplete="given-activity"
            vid="activity"
            rules="requiredInput"
            placeholder="Enter Activity"
            @update-value="updateValue"
          />
          <b-row>
            <b-col lg="6" md="6" sm="12">
              <b-button id="btnNext" block variant="success" type="submit" :disabled="invalid">
                Post Task
              </b-button>
            </b-col>
          </b-row>
          <NuxtLink to="/" class="card-link">
            Back to Dashboard
          </NuxtLink>
        </b-form>
      </b-col>
    </b-row>
  </ValidationObserver>
</template>

<script>
import { BButton, BCol, BForm, BRow } from 'bootstrap-vue'
import { ValidationObserver } from 'vee-validate'

import TextInput from '~/components/TextInput'
export default {
  name: 'PostTask',
  components: {
    BButton,
    BCol,
    BForm,
    BRow,
    TextInput,
    ValidationObserver
  },
  middleware: ['anonymous'],
  asyncData ({ redirect }) {

  },
  data: () => ({
    form: {
      comment: '',
      duration: '',
      date: '',
      activity: ''
    },
    formErrors: null,
    noFormErrors: null,
    rules: {
      type: [Object, String],
      default: ''
    }
  }),
  head () {
    return {
      title: 'Assignment'
    }
  },
  mounted () {
  },
  methods: {
    getReqBody () {
      const register = {
        ...this.form
      }
      return {
        comment: this.form.comment,
        duration: this.form.duration,
        date: this.form.date,
        activity: { id: Math.random().toString(16).slice(2), name: this.form.activity }
      }
    },
    async register (invalid) {
      if (invalid) {
        return false
      }
      let formData = null
      this.$nextTick(() => this.$nuxt.$loading.start())
      try {
        formData = this.getReqBody()
        const { data } = await axios.post('/saveTask', formData)
        if (!data) {
          this.formErrors = 'Something Went Wrong'
        } else {
          this.noFormErrors = data.message
        }
      } catch (error) {
        this.$nextTick(() => this.$nuxt.$loading.finish())
        this.$store.commit('error', error)
        this.$router.push('/error')
        return false
      }
    },
    updateValue (value, field) {
      this.form[field] = value
    }
  }
}
</script>

<style lang="scss" scoped>
#date-container {
  margin-top: -0.5rem;
  min-height: 107px;

  .date-error {
    padding-left: 0.85rem;
    margin-top: -1.9rem;
    font-size: 0.8rem;
    color: #dc3545;
  }
}

label {
  padding-left: 0.9rem;
}

#btnLogin,
#btnJoin,
#help-container {
  margin: 1rem 0rem;
}

#affiliation-error {
  margin-top: -1.4rem;
  padding-left: 0.8125rem;
}
</style>
