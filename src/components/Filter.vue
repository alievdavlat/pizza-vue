<template>
      <div class="categories">
              <ul>

                <li :class="filterActive === filter ? 'active' :'' " v-for="filter in filteres" :key="filter" @click="handleFilter(filter)" >{{ filter }}</li>
                
              </ul>
     </div>
</template>


<script>
import { filterNames } from '../constants';
export default {
  props:{
    getData:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
      filteres:filterNames,
      filterActive:'all'
    }
  },
  methods:{
    handleFilter(name){
      this.filterActive = name
      $store.commit('filerProducts', name)
      this.getData()
    },

  }
}
</script>


