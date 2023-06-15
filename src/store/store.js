import { createStore } from 'vuex'

export  const store = createStore({
  state () {
    return {
      filtN: 'all'

    }
  },
  mutations: {
    filerProducts(state, payload){
      state.filtN = payload
      

    }
  }
})
