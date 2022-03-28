<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="title">My personal costs</div>
        <div>Total {{ getFPV }}</div>
      </header>
      <main>
        <AddPaymentForm @addNewPayment="addData" />
        <PaymentDisplay :list="currentElements" />
        <MyPagination  :length="paymentList.length" :n="n" :cur="cur" @changePage="onChangePage" />
      </main>
    </div>
  </div>
</template>

<script>
import PaymentDisplay from "./components/PaymentDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import MyPagination from "./components/MyPagination.vue";

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm,
    MyPagination,
  },

    data() {
      return {
        n: 5,
        cur: 1
    };
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
    }
  },
  methods: {
    addData(data){
      this.$store.commit('addDataPaymentList', data)
    },
    onChangePage(p) {
      this.cur = p
    }
  },
  async created() {
    // this.$store.commit('setPaymentList', this.fetchData())
    if(!this.paymentList?.length) {
     await this.$store.dispatch('fetchData')
    }
  },
};
</script>

<style lang='scss' scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  font-size: 30px;
}
</style>