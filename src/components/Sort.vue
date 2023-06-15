<template>
              <div class="sort">
              <div class="sort__label">
                <StrelkaSort/>
                <b>Сортировка по:</b>
                <span>популярности</span>
              </div>
              <div class="sort__popup">
                <ul>
                  <li class="active">популярности</li>
                  <li>цене</li>
                  <li>алфавиту</li>
                </ul>
              </div>
            </div>

</template>

<script>
import { StrelkaSort } from '../assets/Icons';

export default {
    components: { StrelkaSort }
}
</script>

<style>
  
</style>