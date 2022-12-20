<template>
  <b-row align-v="center" align-h="center" class="h-100">
    <b-col v-if="error">
      Error Image
    </b-col>
    <b-col v-if="error" id="error" md="6">
      <h3 id="title">
        {{ error.title }}
      </h3>
      <p id="description" v-html="error.description" />
      <b-button v-if="error.btnText" variant="link" nuxt @click="nextStep()">
        {{ error.btnText }}
      </b-button>
    </b-col>
  </b-row>
</template>

<script>

export default {
  data () {
    return {
      error: {
        title: 'Something went wrong',
        description: 'Dang! We\'ve hit a problem, these things happen from time to time. Try again later.',
        btnText: 'Return to Dashboard',
        btnUrl: '/'
      }
    }
  },
  head () {
    return {
      title: `Assignment | ${this.$data.error ? this.$data.error.title : 'Error'}`,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    }
  },
  mounted () {
    this.setErrorDetails()
  },
  methods: {
    setErrorDetails () {
      if (!this.$store.state.error) {
        this.$data.error = {
          ...this.$data.error,
          title: 'Page not found',
          description: 'The page you were looking for could not be found.'
        }
        return
      }
      const status = this.$store.state.error.status
      switch (status) {
        case 400:
          this.$data.error = {
            title: 'Bad request',
            description: 'JSON parse error: Cannot construct instance of `com.accelsiors.test.model.Task`',
            btnText: 'Dashboard',
            btnUrl: '/'
          }
          break
        case 401:
          this.$data.error = {
            title: 'Session expired',
            description: 'You took too long! We need you to sign in again.',
            btnText: 'Dashboard',
            btnUrl: '/'
          }
          break
        case 403:
          this.$data.error = {
            ...this.$data.error,
            title: 'Forbidden',
            description: 'The page you were looking for could not be found.'
          }
          break
        case 404:
          this.$data.error = {
            ...this.$data.error,
            title: 'Page not found',
            description: 'The page you were looking for could not be found.'
          }
          break
      }
    },
    nextStep () {
      switch (401) {
        case this.$store.state.error && this.$store.state.error.status:
          window.location.href = this.$data.error.btnUrl
          break
        default:
          window.open(this.$data.error.btnUrl)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#logo img,
#title,
#description {
    margin-bottom: 1rem;
}

.btn-link {
    padding: 0.5rem 0rem;
}
</style>
