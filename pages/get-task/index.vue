<template>
  <div>
    <div v-if="!data || data.length === 0">
      No Task available
    </div>
    <div v-else class="d-flex">
      <b-card-group v-for="(task, index) in data" :key="task.id" deck class="cardBox">
        <b-card
          :bg-variant="index % 4 === 0 ? 'primary' : index % 2 === 0 ? 'secondary' : 'success'"
          text-variant="white"
          :header="task.comment"
          class="text-center"
        >
          <b-card-text>Duration - {{ task.duration }}</b-card-text>
          <b-card-text>{{ dateFormat(task.date) }}</b-card-text>
          <br>
          <b-card-text v-for="(activity, index) in task" :key="index">
            {{ activity.name }}
          </b-card-text>
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
    //   const { data } = await axios.get('/getTasks');
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
      data: [
        {
          id: 1,
          date: '2019-05-10T00:00:00.000+0000',
          duration: 1.5,
          comment: 'There was a traffic jam',
          activity: {
            id: 1,
            name: 'Driving'
          }
        },
        {
          id: 2,
          date: '2019-05-10T00:00:00.000+0000',
          duration: 5.5,
          comment: 'It was exciting',
          activity: {
            id: 2,
            name: 'Fishing'
          }
        },
        {
          id: 3,
          date: '2019-05-12T00:00:00.000+0000',
          duration: 3,
          comment: 'It was boring',
          activity: {
            id: 3,
            name: 'Shopping'
          }
        }
      ]
    }
  },
  methods: {
    dateFormat (date) {
      return new Date(date).getFullYear() + '/' + ('0' + new Date(date).getDate()).slice(-2) + '/' + ('0' + (new Date(date).getMonth() + 1)).slice(-2)
    }
  }
}
</script>
<style lang="scss">
.cardBox {
  padding: 0 15px;
  width: 33.33%;
}
</style>
