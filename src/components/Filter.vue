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
 
  data() {
    return {
      filteres:filterNames,
      filterActive:'all'
    }
  },
  methods:{
    handleFilter(name){
      this.filterActive = name
      this.$store.commit('filerProducts', name)
      this.$store.dispatch('getinServer' )
    },

  }
}
</script>


