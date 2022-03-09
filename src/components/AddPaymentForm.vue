<template>
  <div>
    <input placeholder="Date" v-model="value" />
    <input placeholder="Type" v-model="category" />
    <input placeholder="Amount" v-model="date" />
    <button @click="onSave">Save!</button>
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
    }
  },
};
</script>

<style></style>