<template>
  <div class="pizza-block">
  <img
    class="pizza-block__image"
    :src="pizza.imageUrl"
    alt="Pizza"
  />
  <h4 class="pizza-block__title">{{ pizza.name }}</h4>
  <div class="pizza-block__selector">
    <ul>
      <li class="active" v-for="typee in pizza.types">{{ type }}</li>
      
    </ul>
    <ul>
      <li class="active" v-for="size in pizza.sizes">26 см.</li>
    </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от {{ pizza.price }} ₽</div>
    <div class="button button--outline button--add" @click="setData">
      <Plus/>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>

</template>

<script>
import { Plus } from '../assets/Icons';
import axios from 'axios'
export default {
    components: { Plus },
    
    props:{
      pizza:{
        type:Object,
        required:true
      }
    },
    computed:{
      pizzas (){
        return pizza
      }
    },
    methods: {
     async setData(){
     try {
      const response  = await axios.post('http://localhost:3001/cart', pizza )
      const { data } = response
     } catch (error) {
      console.log(error);
     }
     }
    },
}
</script>

