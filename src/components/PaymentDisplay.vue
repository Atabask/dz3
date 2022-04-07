<template>
  <div class="list">
      <div class="item" v-for="item in list" :key="item.id">
            <span>Date: {{ item.data }} </span>
            <span>Category:{{ item.category }}</span>
            <span>value: {{item.value}}</span>
            <span>{{ item.id }}</span>
            <span class="action" @click="onClickContextItem($event,item)"> ⁝ </span>
      </div>
  </div>
</template>

<script>
export default {
    name: "PaymentsDisplay",
    props: {
        list: {
            type: Array,
            default: ()=>[]
        }
    },
    methods: {
        editItem(item){
            console.log(item)
            //мутация для редактирования 1Открыть модальное окно 2Передать данные для автоматического заполнения формы 3кнопка меняется на edit(save) 4если true по клике на кнопку вызывается мутация для изменения 
                    },
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

    }
}
</script>

<style lang="scss" scoped>

*{
    margin: 10px;
}

span{
    margin: 10px;
}

.action{
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
}

</style>