<template>
  <div class="photos p-0">
    <h1>This is a Photos page</h1>
    <div class="row m-0 p-0">
      <ul class="col-12 m-0 p-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <li v-for="(img, index) in imgs" :key="index" class="text-center">
            <img @click="opne(index)" :src="img">
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
export default {
  data() {
    return {
      // wide:"rect(200)",
      imgs:[
        require(`../../static/img_1.jpg`),
        require(`../../static/img_2.jpg`),
        require(`../../static/img_3.jpg`),
        require(`../../static/img_4.jpg`),
        require(`../../static/img_5.jpg`),
        require(`../../static/img_6.jpg`),
        require(`../../static/img_7.jpg`),
      ]
    }
  },
  methods: {
    opne(index) {
      // console.log(this.imgs.length - 1)
      this.$router.push(`/photos/image/${index}`)
    }
  },
  created() {
    this.$emit('img-length',this.imgs)
    console.log(`created:${this.imgs.length}`)
  },
}
</script>

<style>
li {
  padding:10px;
  list-style: none;
}
</style>
