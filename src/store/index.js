import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    images:[
      // require(`../../static/img_1.jpg`),
    ],
  },
  getters:{
    images(state) {
      return state.images
    }
  },
  mutations:{
    imageSet(state) {
      for(let i = 1;i <= 13;i++) {
        state.images[(i - 1)] = require(`../../static/img_${i}.jpg`);
      }
    }
  }
});