  <template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="title">My personal costs</div>
      </header>
      <main>
        <AddPaymentForm @addNewPayment="addData" ref="addpaymentForm"/>
        <PaymentDisplay :list="paymentsList"/>
      </main>
    </div>
  </div>
</template>

<script>
import PaymentDisplay from "./components/PaymentDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm
  },

    data() {
    return {
      paymentsList: []
    };
  },
  methods: {
    fetchData () {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360,
          
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532,
        
        },
      ]
    },
    addData(data){
      this.paymentsList.push(data)
    }
  },
  created() {
    this.paymentsList = this.fetchData()
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