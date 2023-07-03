<template>
  <div class="wrapper">
    <div class="content">
      <div class="container container--cart">
        <div class="cart">
          <CartTop />
          <div class="content__items">
            <CartItem />
          </div>
          
          <CartBottom/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { CartTop, CartItem, CartBottom } from '../components'

export default {
  components: { 
    CartTop,
    CartItem,
    CartBottom
   },
   methods: {
    async getData () {
      const response = axios.get()
    }
   },
};
</script>
