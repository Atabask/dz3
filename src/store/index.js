import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: [],
    allPaymentList: [],
    paymentEditList: []
  },
  getters: {
    getPaymentList: state => state.paymentList,
    // getFullPaymentValue: state => {
    //   return state.paymentList.reduce((res, cur )=> res + Number(cur.value), 0)
    // },
    getCategoryList: state => state.categoryList
  },
  mutations: {
    setPaymentList(state, payload) {
      state.paymentList = payload
    },
    addDataPaymentList(state, payload) {
      state.paymentList.push(payload)
    },
    addCategoryList(state, payload) {
      state.categoryList = payload
    },
    addAllPaymentList(state, payload) {
      state.allPaymentList = payload
    },
    paymentListDeleteItem(state, id) {
      state.paymentList.splice(this.state.paymentList.indexOf(Event, id), 1) 
    },
    paymentEditList(state, item){
      state.paymentEditList = item 
      console.log(state.paymentEditList)
    },
    paymentListEditItem(state, newItemEdit) {
      
      state.paymentList.splice(state.paymentEditList, 1, this.newItemEdit)

      console.log(this.state.paymentEditList)
      console.log(newItemEdit)
      
    }
  },
  actions: {
   fetchData({commit}) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i <= 10; i++ ) {
            items.push(              
              { "id": i++, "date": "20.03.2020", "category": "Food", "value": 169 },
              { "id": i++, "date": "21.03.2020", "category": "Navigation", "value": 50 },
              { "id": i++, "date": "22.03.2020", "category": "Sport", "value": 450 },             
              { "id": i++, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
              { "id": i++, "date": "24.03.2020", "category": "Education", "value": 1500 },
              { "id": i++, "date": "25.03.2020", "category": "Food", "value": 200 }
              )
          }
          resolve(items)
        }, 2000);
      }).then( res => {
        commit('setPaymentList', res)
      })
    },
    fetchCategoryList({commit}) {
      return new Promise ((resolve) => {
        setTimeout (() => {
          resolve (['Sport', 'Auto', 'Food', 'Health', 'Female', 'Navigation', 'Entertainment', 'Transport'])
        }, 1000);
      }).then(res => {
        commit('addCategoryList', res)
      })
    }
  },
})



