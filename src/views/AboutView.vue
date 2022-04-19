<template>
  <div>
    <div class="about">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet odio obcaecati odit dolore quos! Modi beatae molestiae, doloribus ad aliquid reiciendis nemo, at non consectetur iste libero accusamus omnis inventore.
      <header>This is about</header>
      
    </div>
  </div>
</template>

<script>
// import ModalWindowAddPaymentForm from "@/components/ModalWindowAddPaymentForm.vue";

export default {
    components: { 
      // ModalWindowAddPaymentForm 
    },

    data() {
      return {
        authFormShown: false
      }
    },
    mounted() {
      this.$modal.show("Authpaymentform", {

        content: "authpaymentform",
        title: "AUTH new payment"

      })
    }


}
</script>

<style>

</style>