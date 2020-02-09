<template>
  <div class="image">
    <!-- <h1>index番号は{{$route.params.id}}です</h1> -->
    <hr style="color:black;" />
    <div class="test text-center">
      <img :src="img" id="target" />
    </div>
    <div>
      <a href="javascript:history.back();">戻る</a>
    </div>
    <hr style="color:black;" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      width: "",
      height: ""
    };
  },
  computed: {
    img() {
      return this.imgs[this.$route.params.id];
    }
  },
  activated() {
    let a = document.getElementById("target");
    this.width = a.width / 2;
    this.height = a.height / 2;
  },
  deactivated() {
    this.width = "";
    this.height = "";
  },
  props: ["imgs"]
};
</script>

<style scoped>
.test {
  height:calc(100vh - 200px);
  min-height:400px;
}
img {
  width:auto;
  height:auto;
  max-width: 100%;
  max-height:100%;
}
</style>