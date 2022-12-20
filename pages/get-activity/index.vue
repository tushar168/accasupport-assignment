<template>
  <div>
    <h2>Activity List</h2>
    <div v-if="!data || data.length === 0">
      No Activities available
    </div>
    <div v-else class="d-flex">
      <b-card-group v-for="(activity, index) in data" :key="activity.id" deck class="cardBox">
        <b-card
          :bg-variant="index % 4 === 0 ? 'primary' : index % 2 === 0 ? 'secondary' : 'success'"
          text-variant="white"
          :header="activity.name"
          class="text-center"
        >
          <b-card-text>Activity - {{ activity.name }}</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <br>
    <NuxtLink to="/" class="card-link">
      Back to Dashboard
    </NuxtLink>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'GetTask',
  middleware: ['anonymous'],
  async asyncData ({ redirect, store, route }) {

    // API calling comment due to there is no test api url available

    // const header = {
    //   'x-api-key': process.env.X_API_KEY,
    //   Authorization: cookie.getCookie('token')
    // }
    // try {
    //   const { data } = await axios.get('/getActivities');
    //   if (!data) {
    //     return { data: [] }
    //   } else {
    //     return { data: data, };
    //   }

    // } catch (error) {
    //   store.commit('error', error)
    //   redirect('/error')
    // }
  },
  data () {
    return {
      data: [{ id: 1, name: 'Driving' }, { id: 2, name: 'Fishing' }, { id: 3, name: 'Shopping' }]
    }
  },
  methods: {}
}
</script>
<style lang="scss">
.cardBox {
  padding: 0 15px;
  width: 33.33%;
}
</style>
