<template>
    <div class="page">
      <h1>Meal Tracker🍎</h1>
      <input v-model="height" type="number" placeholder="Height" />
      <input v-model="weight" type="number" placeholder="Weight" />
      <button @click="goToResults">See Results</button>
    </div>
  </template>
  <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  export default {
    setup() {
      const height = ref('')
      const weight = ref('')
      const router = useRouter()
      const goToResults = () => {
        router.push('/results')
      }
      return { height, weight, goToResults }
    }
  }
  </script>
  