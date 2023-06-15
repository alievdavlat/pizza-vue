<template>
        <div class="content">
        <div class="container">
          <div class="content__top">
            <Filter :getData="getData"/>
            
            <Sort/>
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">

            <PizzaCard v-for="pizza in pizzass" :key="pizza.id" :pizza="pizza"/>
            
          </div>
        </div>
      </div>

</template>

<script>
import { Filter, Sort, PizzaCard } from '../components';

export default {
  data() {
    return {
      pizzass:[]
    }
  },
  components:{
    Filter,
    Sort,
    PizzaCard
  },
  methods:{
    async getData(){
      const res =  await fetch(`http://localhost:3001/${this.$store.state.filtN}`)
      const data = await res.json()
      this.pizzass = data
    }
  },
   async mounted() {
      this.getData()
    },
    watch:{
      
    }
}
</script>

<style>
  
</style>