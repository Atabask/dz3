<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">MyDashboard</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/mypage404">Error</router-link> 
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {
   
},
  data() {
    return {
    
    };
  },
  methods: {
   
  },
  mounted() {
   
  }
}
</script>


<style scoped>
nav {
  padding: 10px;
}
a {
  padding: 10px;
  text-decoration: none;
}
</style>