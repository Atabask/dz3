<template>
  <div class="list">
      <div class="item" v-for="item in list" :key="item.id">
            <span>Date: {{ item.date }} </span>
            <span>Category:{{ item.category }}</span>
            <span>value: {{item.value}}</span>
            <span>{{ item.id }}</span>
            <span class="action" @click="onClickContextItem($event, item)"> ⁝ </span>
      </div>
      <transition name="fade">
      <ModalWindowEditPaymentForm v-if="modalShown"  />
      </transition>
  </div>
</template>

<script>


export default {
    name: "PaymentsDisplay",
    components: {
         ModalWindowEditPaymentForm: () => import(/* webpackChunkName: "ContextMenu" */ "./ModalWindowEditPaymentForm.vue"),
    },
    props: {
        list: {
            type: Array,
            default: ()=>[]
        },
    },
    data() {
        return {
            modalShown: false,

      }
    },
    
    methods: {

        editItem(item) {     
            this.modalShown = true
            this.$store.commit("paymentEditList", item)
        
        },
            
            //мутация для редактирования 1Открыть модальное окно 
        
        deleteItem(id) {
            this.$store.commit("paymentListDeleteItem", id) //мутация для удаления
        },
        onClickContextItem(event, item) {
            const items =  [
                {
                    text: "Edit",
                    action: ()=> {
                        this.editItem(item)
                    }
                },
                {
                    text: "Delete",
                    action: ()=> {
                        this.deleteItem(item.id)
                    }
                }
            ];

            this.$contextMenu.show({event, items})
        },

    },
    mounted() {
        this.$modal.EventBus.$on("showFormEdit", this.onShow)
        this.$modal.EventBus.$on("hideFormEdit", this.onHide)
    },
    beforeDestroy() {
        this.$modal.EventBus.$off("showFormEdit", this.onShow)
        this.$modal.EventBus.$off("hideFormEdit", this.onHide)
    }
}

</script>

<style lang="scss" scoped>

*{
    margin: 10px;
}

span{
    margin: 20px;
}

.action{
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>