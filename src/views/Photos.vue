<template>
  <div class="photo-list p-0 mb-5">
    <h1>Photos page</h1>
    <div class="row m-0 p-0 wrap-photos">
      <!-- <transition-group name="fade" tag="ul" class="col-12 m-0 p-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"> -->
      <ul class="col-12 m-0 p-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <li v-for="(img, index) in images" :key="index" class="text-center">
          <img
            tabindex="0"
            class="photo-images"
            :src="img"
            @click="open(index)"
            @keyup.enter="open(index)"
            @load="loaded(arguments[0])"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
img {
  width:200px;
  height:200px;
  object-fit:cover;

}
</style>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      imgElement: []
    }
  },
  computed: {
    ...mapGetters(["images"])
  },
  methods: {
    open(index) {
      this.$router.push(`/photos/photo-view/${index}`)
    },
    async loaded(ev) {
      const el = ev.target
      // await this.wait(200)
      el.classList.add("loaded_complete")
      el.animate({
        opacity:[0,1]
      },1000)
    },
    wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  },
  async mounted() {
    // const img = document.querySelectorAll("img")
    // const  elements = [...img]
    // for (let i = 0; i < elements.length; i++) {
    //   const el = elements[i]
    //   await this.wait(20)
    //   el.classList.add("loaded_complete")
    //   el.animate({
    //     opacity:[0,1]
    //   },1000)
    // }
  }
}
</script>

<style lang="scss" scoped>

.wrap-photos {
  max-width: 1100px;
}

li {
  padding:10px;
  list-style: none;
}
.photo-images {
  cursor:pointer;
  display: none;
}
.loaded_complete {
  display:inline;
}
.photo-images:hover {
  opacity: 0.8;
  transition-duration: 0.3s;
  // animation:fadeHover .3s forwards;
}
.photo-images:focus:not(.focus-visible) {
    outline: none;
}

@keyframes fadeHover {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.7;
  }
}


</style>
