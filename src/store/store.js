import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    images:[],
  },
  getters:{
    images(state) {
      return state.images
    }
  },
  mutations:{
    imageSet(state) {
      for(let i = 1;i <= 15;i++) {
        state.images[(i - 1)] = `https://static.teshimato.site/images/img_${i}.jpg`;
      }
    }
  }
});