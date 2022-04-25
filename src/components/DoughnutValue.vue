<template>
  <v-content>
      <Doughnut />
  </v-content>
</template>

<script>

import { Doughnut } from "vue-chartjs"
import { Chart } from "chart.js"

export default {
    name: "DoughnutValue",
    components: { Doughnut },

    data(){
        
    }
}
</script>

<style>

</style>