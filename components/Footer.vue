<template>
  <b-row id="footer">
    <b-col lg="12" md="12" sm="12">
      <p>© 2022</p>
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue'
export default {
  components: {
    BCol,
    BRow
  }
}
</script>

<style lang="scss" scoped>
#footer {
  padding: 0.5rem 0rem;
  border-top: 1px solid #626262;

  p {
    text-align: center;
  }
}
</style>
