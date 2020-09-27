<template>
  <div class="photo-list p-0 mb-5">
    <h1>Photos page</h1>
    <div class="row m-0 p-0">
      <!-- <transition-group name="fade" tag="ul" class="col-12 m-0 p-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"> -->
      <ul class="col-12 m-0 p-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <li v-for="(img, index) in images" :key="index" class="text-center">
          <img
            tabindex="0"
            class="photoImage"
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
      // wide:"rect(200)",
    }
  },
  computed: {
    ...mapGetters(["images"])
  },
  methods: {
    open(index) {
      this.$router.push(`/photo_list/photo_display/${index}`)
    },
    // async completeImg(event) {
    //   const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
    //   event.target.classList.add("animate", "loaded_complete")
    //   await wait(2000)
    //   let img = document.querySelectorAll(".animate")
    //   img = [...img]
    //   img.map(el => {
    //     el.classList.remove("animate")
    //   })
    // },
    loaded(el) {
      el.target.classList.add("loaded_complete")
      el.target.animate({
        opacity:[0,1]
      },1000)
    }
  },
}
</script>

<style lang="scss" scoped>
li {
  padding:10px;
  list-style: none;
}
.photoImage {
  cursor:pointer;
  display: none;
}
.loaded_complete {
  display:inline;
}
.photoImage:hover {
  animation:fadeHover .3s forwards;
}
.photoImage:focus:not(.focus-visible) {
    outline: none;
}

@keyframes fadeHover {
  0% {
    opacity: 1;
  }
  100% {
    opacity: .7;
  }
}


</style>
