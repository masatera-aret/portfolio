import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    images:[
      require(`../../static/img_1.jpg`),
      require(`../../static/img_2.jpg`),
      require(`../../static/img_3.jpg`),
      require(`../../static/img_4.jpg`),
      require(`../../static/img_5.jpg`),
      require(`../../static/img_6.jpg`),
      require(`../../static/img_7.jpg`),
      require(`../../static/img_8.jpg`),
      require(`../../static/img_9.jpg`),
      require(`../../static/img_10.jpg`),
      require(`../../static/img_11.jpg`),
      require(`../../static/img_12.jpg`),
      require(`../../static/img_13.jpg`),
    ]
  },
  getters:{
    images(state) {
      return state.images
    }
  }
});