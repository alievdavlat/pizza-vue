<template>
       <div class="header">
        <div class="container"> 
          <RouterLink to="/">
          <div class="header__logo">
              <img width="38" src="../../public/img/pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </RouterLink>
          <div class="header__cart">
            <RouterLink to="/cart" class="button button--cart">
              <span>520 ₽</span>
              <div class="button__delimiter"></div>
              <Karzinka/>
              <span>3</span>
            </RouterLink>
          </div>
        </div>
      </div>

</template>

<script>
import { Karzinka } from '../assets/Icons';
import { RouterLink } from 'vue-router';
export default {
    components: { Karzinka }
}
</script>

<style>
  
</style>