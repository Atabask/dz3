<template>
  <div class="wrp">
      <button @click="onClick(cur -1)">-</button>
      <div  v-for="i in amount" :key="i" @click="onClick(i)">
          {{ i }}
      </div>
      <button @click="onClick(cur +1)">+</button>
  </div>
</template>

<script>

export default {
    name: 'MyPagination',
    props: {
        length: Number,
        n: Number,
        cur: Number,
    },
    data() {
        return {

        }
    },
    computed: {
        amount() {
            return Math.ceil(this.length / this.n)
        }
    },
    methods: {
        onClick(p) {
            if(p < 1 || p > this.amount){
                return
            }
            this.$emit('changePage', p)
        }
    },
}
</script>

<style>
.wrp {
    display: flex;
}
</style>