<template>
    <div class="page">
      <h1>Track Your Food!🥗</h1>
      <div class="bar-container">
        <div class="bar" :style="{ width: '30%' }"></div>
      </div>
      <p>900 / 2500 Calories</p>
      <input v-model="mealName" type="text" placeholder="Meal name" />
      <input v-model="mealCalories" type="number" placeholder="Calories" />
      <button @click="addMeal">Add Meal</button>
      <div class="meal-list">
        <div v-for="meal in meals" :key="meal.name" class="meal-item">
          {{ meal.name }} - {{ meal.calories }} kcal
        </div>
      </div>
    </div>
  </template>
  <script>
  import { ref } from 'vue'
  export default {
    setup() {
      const mealName = ref('')
      const mealCalories = ref('')
      const meals = ref([])
      const addMeal = () => {
        if (mealName.value && mealCalories.value) {
          meals.value.push({ name: mealName.value, calories: mealCalories.value })
          mealName.value = ''
          mealCalories.value = ''
        }
      }
      return { mealName, mealCalories, meals, addMeal }
    }
  }
  </script>
  