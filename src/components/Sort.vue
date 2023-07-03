<template>
              <div class="sort">
              <div class="sort__label" @click="showSort = !showSort">
                <StrelkaSort/>
                <b>Сортировка по:</b>
                <span>популярности</span>
              </div>
              <div class="sort__popup" v-if="showSort">
                <ul>
                  <li  v-for="item in sortItem" :class="activeItem === item.id ? 'active' : ''"  @click="sorting(item.id, item.sort)" :key="item.id">{{ item.name }}</li>
                </ul>
              </div>
            </div>

</template>

<script>
import { StrelkaSort } from '../assets/Icons';

export default {
    components: { StrelkaSort },
    data() {
      return {
        sortItem:[
          {
            id:1,
            name:'популярности',
            sort:'rating'
          },
          {
            id:2,
            name:'цене',
            sort:'price'
          },
           {
            id:3,
            name:'алфавиту',
            sort:'name'
          }
        ],
        activeItem:1,
        showSort:false
      }
    },
    methods: {
      sorting(id, sort){
        this.activeItem = id;
        this.$store.state.sorting = sort
      }
    },
}
</script>

<style>
  
</style>