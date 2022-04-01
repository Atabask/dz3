<template>
  <div>
      <router-link to="/dashboard/Food?value=50">Food</router-link> 
      <router-link to="/dashboard/Transport?value=170">Transport</router-link> 
      <router-link to="/dashboard/form">Entertainment</router-link> 
  </div>
</template>

<script>
export default {
  name: 'MyHome',

}
</script>

<style>
a {
  padding: 10px;
}
</style>