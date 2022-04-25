<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 pb-3">My personal costs</div>
        <v-dialog v-model="dialog" @click:outside="dialog = false">
          <template v-slot:activator="{ on }">
            <v-btn color="#009688" dark v-on="on">
              ADD NEW COST <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <AddPaymentForm  />
          </v-card>
        </v-dialog>
        <PaymentDisplay :list="currentElements" />
        <MyPagination :length="paymentList.length" :n="n" :cur="cur" @changePage="onChangePage" />
      </v-col>
      <v-col>
        DIAGRAMMA
        <div class="text-h5 py-4">Total {{ getFPV }}</div>
        <DoughnutValue />
        <!-- <DoughnutValue :chart-data="chartData" /> -->
      </v-col>
      <!-- <v-btn @click="countAll">Count</v-btn> -->
    </v-row>
    <!-- <div class="wrapper">
        <header>
          <div class="title">My personal costs</div>
          <div>Total {{ getFPV }}</div>
        </header>
        <main>
          <PaymentDisplay :list="currentElements" />
          <MyPagination  :length="paymentList.length" :n="n" :cur="cur" @changePage="onChangePage" />
        </main>
      </div>  -->
  </v-container>
</template>

<script>



export default {
  name: 'MyDashboard',
  components: {
    PaymentDisplay: () => import("../components/PaymentDisplay.vue"),
    MyPagination: () => import("../components/MyPagination.vue"),
    AddPaymentForm: () => import("../components/AddPaymentForm.vue"),
    DoughnutValue: () => import("../components/DoughnutValue.vue")
},
  data() {
    return {
      dialog: false,
      n: 5,
      cur: 1,
      // categoryCount: null,
      // chartData: null

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
      return this.paymentList.slice(this.n * (this.cur - 1), this.n * (this.cur - 1) + this.n)
    },
  },
  methods: {
    addData(data) {
      this.$store.commit('addDataPaymentList', data);
      this.dialog = false
    },
    onChangePage(p) {
      this.cur = p
    },
    
  },

  async created() {
    if (!this.paymentList?.length) {
      await this.$store.dispatch('fetchData')
      this.cur = Number(this.$route.params.page)
    }

  },
}
</script>


<style>
</style>




<!-- <ModalWindowAddPaymentForm v-if="addFormShown" @close="addFormShown = false" :settings="settings" /> -->



