<template>
  <div class="wrapper" v-if="settings.content">
      <div class="header">
          {{ settings.title }}
      </div>
      <div class="content">
          <component :is="settings.content" />
      </div>
      <div class="footer">
          <button @click="onCloseClick">
              Close
          </button>
      </div>
  </div>
</template>

<script>


export default {
    name: "ModalWindowAddPaymentForm",
    components: {
      AddPaymentForm: () => import("./AddPaymentForm.vue") ,
      MyAuth: () => import("./MyAuth.vue")
    },
    props: {
        settings: Object
    },
    data() {
        return {
            defaultCategory: "",
            defaultValue: "",
        }
    },
    watch: {
    $route:{
      immediate: true,
      handler(newRoute) {
        
        if(newRoute.params.page) {
          this.addFormShown = true

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
          this.addFormShown = false
          this.defaultCategory = "Sport",
          this.defaultValue = ""
        }
      }
    }
  },
  methods: {
      onCloseClick() {
        this.$modal.hide()
        console.log(this.$modal.hide)
    
    }
  }
    
}
</script>

<style>
.wrapper {
    padding: 20px;
    position: absolute;
    top: 10%;
    left: 5%;
    background: #efefef;
}
</style>