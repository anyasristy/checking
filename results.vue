<template>
    <div class="page">
      <h1>Your Results: </h1>
      <div class="result-box">
        <p>BMI: </p>
        <p>Calories: </p>
        <p>Protein: </p>
        <p>Carbs: </p>
        <p>Fats: </p>
      </div>
      <button @click="goToMeals">Track Your Meals</button>
    </div>
  </template>
  <script>
  import { useRouter } from 'vue-router'
  export default {
    setup() {
      const router = useRouter()
      const goToMeals = () => {
        router.push('/meals')
      }
      return { goToMeals }
    }
  }
  </script>
  