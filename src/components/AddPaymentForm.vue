<template>
  <div>
    <button @click="showContainerInput" :key="show" >{{this.visible?'Close':'Open'}}</button>
    <div v-show="visible">
      <input placeholder="Date" v-model="date" />
      <div class="category" v-if="categoryList.length">
        <select v-model="category">
          <option v-for="(option, idx) in categoryList" :key="idx">
            {{ option }}
          </option>
        </select>
      </div>
      <input placeholder="Amount" v-model="value" />
      <button @click="onSave">Save!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: "",
      category: "",
      date: "",
      visible: false
    };
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
          data: this.data || this.getCurrentDate,
          category: this.category,
          value: this.value 
        }
        this.$emit('addNewPayment', data)
    },
    showContainerInput() {
      this.visible =! this.visible;
    }
  },
  async mounted() {
    if(!this.categoryList.length){
      await this.$store.dispatch('fetchCategoryList')
      this.category = this.categoryList[0]
    }
  }
};
</script>
 
<style>

</style> 