<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">MyDashboard</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/mypage404">Error</router-link> 
    </nav>
    <main>
      <router-view/>
    </main>
    <transition name="fade">
      <ModalWindowAddPaymentForm v-if="modalShown" :settings="settings" />
    </transition>
    <transition name="fade">
      <ContextMenu />
    </transition>
  </div>
</template>

<script>
import ContextMenu from "./components/ContextMenu.vue";

export default {
  name: 'App',
  components: {
    ModalWindowAddPaymentForm: () => import(/* webpackChunkName: "ModalWindowAddPaymentForm" */ "./components/ModalWindowAddPaymentForm.vue"),
    ContextMenu
},
  data() {
    return {
      modalShown: false,
      settings: {}
    };
  },
  props: {
   
  },
  methods: {
    onShow(settings) {
      this.modalShown = true,
      this.settings = settings
    },
    onHide() {
      this.modalShown = false,
      this.settings = {}
    }
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow)
    this.$modal.EventBus.$on("hide", this.onHide)
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow)
    this.$modal.EventBus.$off("hide", this.onHide)
  }
}
</script>


<style scoped>
nav {
  padding: 10px;
}
a {
  padding: 10px;
  text-decoration: none;
}
</style>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>