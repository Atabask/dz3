<template>
<v-card>
    <v-text-field v-model="date" label="Date" />
    <v-text-field v-model="value" label="Value" />
    <v-select v-model="category" :items="categoryList" label="Category"/>
    <v-btn color="#009688" dark @click="onEdit">Edit</v-btn>
</v-card>
  <!-- <div>
    <div >
      <input placeholder="Date" v-model="date" />
      <div class="category" v-if="categoryList.length">
        <select v-model="category">
          <option v-for="(option, idx) in categoryList" :key="idx">
            {{ option }}
          </option>
        </select>
      </div>
      <input placeholder="Amount" v-model="value" />
      <button @click="onEdit()">Edit</button>
      <div class="footer">
          <button @click="onCloseClick">Close</button>
        </div>
    </div>
  </div> -->
</template>

<script>


export default {
    name: "ModalWindowEditPaymentForm",
   
    data() {
        return {
            date: "",
            category: "",
            value: "",
            
        };
    },
    
    
    
    methods: {

        onEdit() {
            
            const newItemEdit = {
            
                date: this.date || this.getCurrentDate,
                category: this.category,
                value: Number(this.value),
            }
                
            this.$store.commit("paymentListEditItem", newItemEdit)
            // console.log(newItemEdit)
            

            // this.$store.commit("paymentListEditItem", (newItemEdit, id))
        },

        onCloseClick() {
            this.$modal.hide() // Почему не отрабатывает метод???
            // console.log(this.$modal.hide)
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
    async mounted() {
        if(!this.categoryList.length){
        await this.$store.dispatch('fetchCategoryList')
        }
        this.$modal.EventBus.$on("hideFormEdit", this.onHide)
    },
    
    beforeDestroy() {
        this.$modal.EventBus.$off("hideFormEdit", this.onHide)
    }
}

</script>

<style>
.wrapper {
    padding: 20px;
    position: absolute;
    top: 10%;
    left: 5%;
    background: #efefef;
}
</style>