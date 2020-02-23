<template>
  <div class="photo-list p-0 mb-5">
    <h1>This is a Photos page</h1>
    <div class="row m-0 p-0">
      <ul class="col-12 m-0 p-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <li v-for="(img, index) in images" :key="index" class="text-center">
          <img tabindex="0" class="photoImage" @click="open(index)" @keyup.enter="open(index)" :src="img">
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
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
    }
  },
}
</script>

<style>
li {
  padding:10px;
  list-style: none;
}
.photoImage {
  cursor:pointer;
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
