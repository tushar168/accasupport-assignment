<template>
  <b-row id="logo">
    <b-col md="12">
      <div class="d-flex align-items-center">
        <a id="logo-link">
          Logo Here
        </a>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue'
export default {
  components: {
    BCol,
    BRow
  },
  data: () => ({
  }),
  methods: {

  }
}
</script>

  <style lang="scss" scoped>
  #logo {
    padding: 0.5rem 0rem;
    border-bottom: 1px solid #626262;
    #logo-image {
      width: 200px;
      @media screen and (min-width: 0) and (max-width: 767px) {
        width: 130px;
      }
    }
  }
  </style>
