<template>
  <b-card title="List" sub-title="With activity">
    <b-card-text>
      Below Links to Get Task, Activity and Add New Task
    </b-card-text>
    <NuxtLink to="/get-task" class="card-link">
      Tasks
    </NuxtLink>
    <NuxtLink to="/get-activity" class="card-link">
      Activity
    </NuxtLink>
    <NuxtLink to="/post-task" class="card-link">
      Add New Task
    </NuxtLink>
  </b-card>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
  }),
  methods: {

  }
}
</script>
