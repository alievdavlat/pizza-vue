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
    <div class="button button--outline button--add">
      <Plus/>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>

</template>

<script>
import { Plus } from '../assets/Icons';

export default {
    components: { Plus },
    data() {
      return {
        
      }
    },
    props:{
      pizza:{
        type:Object,
        required:true
      }
    }
}
</script>

