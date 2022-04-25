<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Date" />
    <v-text-field v-model="value" label="Value" />
    <v-select v-model="category" :items="categoryList" label="Category"/>
    <v-btn color="#009688" dark @click="onSave">Save!</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    defaultCategory: {type:String, default: "Sport"},
    defaultValue: {type:String, default: ""}
  },
  data() {
    return {
      value: this.defaultValue,
      category: this.defaultCategory,
      date: "",
    };
  },
  watch: {
    defaultCategory(newValue) {
      this.category = newValue
    },
    defaultValue(newValue) {
      this.value = newValue
    }
  },
  computed: {
    getCurrentDate(){
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    }
  },
  methods: {
    onSave(){
        const data = {
          date: this.date || this.getCurrentDate,
          category: this.category,
          value: this.value 
        }
        this.$store.commit("addDataPaymentList", data)
        this.$emit('addNewPayment', data)
    },
  },
  async mounted() {
    if(!this.categoryList.length){
      await this.$store.dispatch('fetchCategoryList')
    }
  }
};
</script>
 
<style>

</style> 