<template>
  <div class="photo-display">
    <div class="img_wrap d-flex align-items-center justify-content-center">
      <transition name="fade" appear>
      <img :src="images[this.$route.params.id]" id="target" />
      </transition>
    </div>
    <div class="page_transition text-center mx-auto mb-5">
      <button v-if="prev" @click="pagePrev" class="float-left p-0">prev</button>
      <span v-if="partition"> | </span>
      <button v-if="next" @click="pageNext" class="float-right p-0">next</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import 'focus-visible';
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      prev:true,
      next:true,
      width: "",
      height: "",
    };
  },
  computed: {
    ...mapGetters(["images"]),
    partition() {
      if(this.prev === true && this.next === true) {
        return true
      }else {
        return false
      }
    }
  },
  methods: {
    pagePrev() {
      this.next = true
      this.$route.params.id--
      this.$router.push(`/photos/photo-view/${this.$route.params.id}`)
      if(this.$route.params.id === "0") {
      this.prev = false
      }
    },
    pageNext() {

      this.prev = true
      this.$router.push(`/photos/photo-view/${Number(this.$route.params.id) + 1}`)
      if(this.$route.params.id === String(this.$store.getters.images.length - 1)) {
      this.next = false
      }
    }
  },
  activated() {
    if(this.$route.params.id > (this.images.length - 1) || this.$route.params.id < 0 || isNaN(this.$route.params.id) ) {
      this.$router.push('/')
    }
    this.prev = true
    this.next = true
    if(this.$route.params.id === "0") {
      this.prev = false
    }else if(this.$route.params.id === String(this.$store.getters.images.length - 1)) {
      this.next = false
    }
  },
  deactivated() {
    this.width = "";
    this.height = "";
  },
  updated() {
    // console.log("id:",Number(this.$route.params.id) + 1)
    // console.log("length:",this.images.length)
    // if(Number(this.$route.params.id) + 1 < this.images.length) {
    //   this.next = true
    // }else {
    //   this.next = false
    // }
    // if(Number(this.$route.params.id) > 0) {
    //   this.prev = true
    // }else {
    //   this.prev = false
    // }
  },
};
</script>

<style lang="scss" scoped>
button {
  background:none;
  border:none;
  opacity:.7;
}
button:hover {
  opacity:1;
}
button:focus:not(.focus-visible) {
    outline: none;
}

.page_transition {
  width:120px;
  height:25px;
}
.img_wrap {
  height:calc(100vh - 200px);
  min-height:400px;
  margin:20px 0;
  padding-bottom:20px;
  border-bottom:solid 1px rgba(0, 0, 0, 0.3);
}
img {
  width:auto;
  height:auto;
  max-width: 100%;
  max-height:100%;
}

</style>
