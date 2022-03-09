<template>
  <div>
    <button @click="showContainerInput" :key="show" >{{this.visible?'Close':'Open'}}</button>
    <div v-show="visible">
      <input placeholder="Date" v-model="date" />
      <input placeholder="Type" v-model="category" />
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
};
</script>

<style></style>