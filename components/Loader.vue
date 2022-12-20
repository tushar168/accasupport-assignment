<template>
  <b-row v-if="loading" class="loading-page" align-v="center">
    <b-col md="12">
      <!-- <img id="loader-image" src="/register/images/loader.svg" alt="Loading..."> -->
    </b-col>
  </b-row>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

  <style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-size: 2rem;
    z-index: 10000;
    cursor: wait;
  }
  </style>
