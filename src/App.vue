<template >
      <div class="wrapper">
        <Navbar/>
        <RouterView/>
          
    </div>

</template>


<script>
import { Navbar } from './components';
import Home from './views/Home.vue';
export default {
  components:{
    Navbar,
    Home,
}
}
</script>

