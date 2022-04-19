<template>
  <div>
      <header>
        <div class="title">My personal costs</div>
        <div>Total {{ getFPV }}</div>
      </header>
      <main>
        <!-- <ModalWindowAddPaymentForm v-if="addFormShown" @close="addFormShown = false" :settings="settings" /> -->
        <PaymentDisplay :list="currentElements" />
        <MyPagination  :length="paymentList.length" :n="n" :cur="cur" @changePage="onChangePage" />
        <button @click="addFormOpen">ADD NEW COST +</button>
      </main>
    </div>
</template>

<script>

export default {
  name: 'MyDashboard',
  components: {
    PaymentDisplay: () => import("../components/PaymentDisplay.vue"),
    MyPagination: () => import("../components/MyPagination.vue") ,
    
},
    data() {
    return {
        n: 10,
        cur: 1,
    
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
    },
  },
  methods: {
    addData(data){
      this.$store.commit('addDataPaymentList', data)
    },
    onChangePage(p) {
      this.cur = p
    },
    addFormOpen() {
      
      this.$modal.show("Addpaymentform", {
         
          content: "AddPaymentForm",
          title: "Add new payment",
          }
      )
    }

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




