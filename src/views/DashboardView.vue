<template>
  <div class="wrapper">
      <header>
        <div class="title">My personal costs</div>
        <div>Total {{ getFPV }}</div>
      </header>
      <main>
        <button @click="showForm">{{visible?'Close':'Open'}}</button>
        <AddPaymentForm v-show="visible" @addNewPayment="addData" :defaultValue="defaultValue" :defaultCategory="defaultCategory" />
        <PaymentDisplay :list="currentElements" />
        <MyPagination  :length="paymentList.length" :n="n" :cur="cur" @changePage="onChangePage" />
      </main>
    </div>
</template>

<script>
import PaymentDisplay from "../components/PaymentDisplay.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import MyPagination from "../components/MyPagination.vue";

export default {
  name: 'MyDashboard',
  components: {
    PaymentDisplay,
    AddPaymentForm,
    MyPagination,
  },
    data() {
    return {
        n: 5,
        cur: 1,
        visible: false,
        defaultCategory: "",
        defaultValue: ""
    };
  },
  watch: {
    $route:{
      immediate: true,
      handler(newRoute) {
        console.log(newRoute)
        
        if(newRoute.params.page) {
          this.visible = true

          switch(newRoute.params.page) {
            case "Food": this.defaultCategory = "Food";
              break;
            case "Transport": this.defaultCategory = "Transport";
              break;
            case "Entertainment": this.defaultCategory = "Entertainment";
              break;
          }

          this.defaultValue = newRoute.query["value"] ? newRoute.query["value"] : "" 
        } else {
          this.visible = false
          this.defaultCategory = "Sport",
          this.defaultValue = ""
        }
      }
    }
  },
  computed: {
    getFPV() {
      return this.$store.getters.getFullPaymentValue
    },
    paymentList() {
      return this.$store.getters.getPaymentList
    },
    currentElements() {
      return this.paymentList.slice(this.n * (this.cur - 1), this.n * (this.cur -1) + this.n)
    },
  },
  methods: {
    addData(data){
      this.$store.commit('addDataPaymentList', data)
    },
    onChangePage(p) {
      this.cur = p
    },
    showForm() {
      this.visible =! this.visible;
      console.log(this.visible)
    },

  },

  async created() {
    if(!this.paymentList?.length) {
     await this.$store.dispatch('fetchData')
         this.cur = Number(this.$route.params.page)
    }
    
  },
}
</script>


<style>

</style>




