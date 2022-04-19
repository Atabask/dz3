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
    getFullPaymentValue: state => {
      return state.paymentList.reduce((res, cur )=> res + Number(cur.value), 0)
    },
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
    paymentListDeleteItem(state, item) {
      state.paymentList.indexOf(item.id)
      state.paymentList.splice(1, item.id)
      console.log(item.id)
      console.log(item)
    },
    paymentEditList(state, item){
      state.paymentEditList = item 
      console.log(state.paymentEditList)
    },
    paymentListEditItem(state, newItemEdit) {
      
      state.paymentList.splice(0, 1, this.newItemEdit)

      console.log(this.state.paymentEditList)
      console.log(newItemEdit)
      
    }
  },
  actions: {
   fetchData({commit}) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i <= 1; i++ ) {
            items.push(              
              { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
              { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
              { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 },             
              { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
              { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
              { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 },
              { "id": 7, "date": "20.03.2020", "category": "Food", "value": 169 },
              { "id": 8, "date": "21.03.2020", "category": "Navigation", "value": 50 },
              { "id": 9, "date": "22.03.2020", "category": "Sport", "value": 450 },             
              { "id": 10, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
              { "id": 11, "date": "24.03.2020", "category": "Education", "value": 1500 },
              { "id": 12, "date": "25.03.2020", "category": "Food", "value": 200 }
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



