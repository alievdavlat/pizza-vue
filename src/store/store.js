import { createStore } from 'vuex'

export  const store = createStore({
  state () {
    return {
      filtN: 'all',
      pizzass:[],
      sorting:''
    }
  },

  mutations: {
    filerProducts(state, payload){
      state.filtN = payload
    },
    async getData(state){
     try {
      const res =  await fetch(`http://localhost:3001/`+ state.filtN)
      const data = await res.json()
      state.pizzass = data
     } catch (error) {
      console.log(error);
     }
    },
   
  },
  actions: {
    getinServer({commit}){
      commit('getData')
    }
  }




})
