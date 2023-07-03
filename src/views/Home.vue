<template>
        <div class="content">
        <div class="container">
          <div class="content__top">
            <Filter />
            
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
  components:{
    Filter,
    Sort,
    PizzaCard
  },
  computed:{
    pizzass(){
        return this.$store.state.pizzass
      },
      selectedSort(){
        return this.$store.state.sorting
      }
    },
    mounted() {
      this.$store.dispatch('getinServer' )
    },
    watch:{
      selectedSort(newValue){
        this.pizzass.sort((a,b) => {
          if(newValue === 'name'){
            return a.name.localeCompare(b.name)
          } else if(newValue === 'rating'){
            return a.rating - b.rating
          } else if(newValue === 'price'){
            return a.price - b.price
          }
        })
      }
    }
    
}
</script>

<style>
  
</style>