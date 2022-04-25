<template>
    <v-container>
        <v-row>
            <v-col :cols="1" >#</v-col>
            <v-col :cols="2" >Date</v-col>
            <v-col :cols="3" >Category</v-col>
            <v-col :cols="2" >Value</v-col>
            <span :cols="0" ></span>
        </v-row>
        <v-row v-for="item in list" :key="item.id">
            <v-col :cols="1" >{{ item.id }}</v-col>
            <v-col :cols="2" >{{ item.date }}</v-col>
            <v-col :cols="3" >{{ item.category }}</v-col>
            <v-col :cols="2" >{{ item.value }}</v-col>
            <!-- <v-btn :cols="0" class="action" @click="onClickContextItem($event, item)">⁝</v-btn> -->
            <v-btn class="pa-1" @click="deleteItem(item)"><v-icon>{{icons.mdiDelete}}</v-icon></v-btn>
            <v-btn class="pa-1" @click="editItem(item)"><v-icon>{{icons.mdiPencil}}</v-icon></v-btn>
        </v-row>

        <!-- <div class="list">
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
    </div> -->
  </v-container>
</template>

<script>

import {mdiDelete, mdiPencil} from '@mdi/js'

export default {
    name: "PaymentsDisplay",
    components: {
        //  ModalWindowEditPaymentForm: () => import(/* webpackChunkName: "ContextMenu" */ "./ModalWindowEditPaymentForm.vue"),
    },
    props: {
        list: {
            type: Array,
            default: ()=>[]
        },
    },
    data() {
        return {
            icons: {
                mdiDelete,
                mdiPencil
            },
            modalShown: false,

      }
    },
    
    methods: {

        editItem(item) {     
            this.modalShown = true
            this.$store.commit("paymentEditList", item)
        
        },
            
            //мутация для редактирования 1Открыть модальное окно 
        
        deleteItem(item) {

            this.$store.commit("paymentListDeleteItem", item) 
            
            //мутация для удаления
        },
        // onClickContextItem(event, item) {
        //     const items =  [
        //         {
        //             text: "Edit",
        //             action: ()=> {
        //                 this.editItem(item)
        //             }
        //         },
        //         {
        //             text: "Delete",
        //             action: ()=> {
        //                 this.deleteItem(item)
        //                 console.log(item.id)
                    
        //             }
        //         },

        //     ]
        //     this.$contextMenu.show({event, items})

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


<v-container>
        <v-row>
            <v-col :cols="2" >#</v-col>
            <v-col :cols="2" >Date</v-col>
            <v-col :cols="4" >Category</v-col>
            <v-col :cols="4" >Value</v-col>
        </v-row>
        <v-row v-for="item in list" :key="item.id">
            <v-col :cols="2" >{{ item.id }}</v-col>
            <v-col :cols="2" >{{ item.date }}</v-col>
            <v-col :cols="4" >{{ item.category }}</v-col>
            <v-col :cols="4" >{{ item.value }}</v-col>
        </v-row>
                <!-- <transition name="fade">
                        <ModalWindowEditPaymentForm v-if="modalShown"  />
                    </transition> -->
  </v-container>