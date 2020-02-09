<template>
  <div class="image">
    <div class="test d-flex align-items-center justify-content-center">
      <transition name="fade" appear>
      <img :src="img" id="target" />
      </transition>
    </div>
    <div class="text-center">
      <a v-if="prev" @click="pagePrev">prev</a>
      <span v-if="partition"> | </span>
      <a v-if="next" @click="pageNext">next</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      prev:true,
      next:true,
      width: "",
      height: "",
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
    };
  },
  computed: {
    img() {
      return this.images[this.$route.params.id];
    },
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
      this.$router.push(`/photos/image/${this.$route.params.id}`)
      if(this.$route.params.id === "0") {
      this.prev = false
      }
    },
    pageNext() {
      this.prev = true
      this.$route.params.id++
      this.$router.push(`/photos/image/${this.$route.params.id}`)
      if(this.$route.params.id === String(this.images.length - 1)) {
      this.next = false
      }
    }
  },
  activated() {
    if(this.$route.params.id > (this.images.length - 1) || this.$route.params.id < 0 || isNaN(this.$route.params.id) ) {
      this.$router.push('/')
      return
    }
    let a = document.getElementById("target");
    this.width = a.width / 2;
    this.height = a.height / 2;
    this.prev = true
    this.next = true
    if(this.$route.params.id === "0") {
      this.prev = false
    }else if(this.$route.params.id === String(this.images.length - 1)) {
      this.next = false
    }
  },
  deactivated() {
    this.width = "";
    this.height = "";
  },
  updated() {
    let target = document.getElementById('target')
    target.animate({
      opacity:[0,1]
    },200)
  },
  props: ["imgs"]
};
</script>

<style scoped>
a {
  cursor:pointer;
}
.test {
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
.animate {
  animation: fadeIn 2s;
}
</style>