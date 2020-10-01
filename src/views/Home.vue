<template>
  <div class="home">
    <p>
    これはテストです<br />
    これはテストです<br />
    これはテストです<br />
    これはテストです<br />
    これはテストです<br />
    これはテストです<br />
    これはテストです<br />
    これはテストです<br />
    これはテストです<br />
    これはテストです<br />
    これはテストです<br />
    </p>
    <h2 class="hover">hoverのテスト</h2>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/prepends";

.home {
  font-size:2rem;
}


.hover {
  cursor:pointer;
  position: relative;
  display: inline-block;
  animation: blur 1.5s;
  // transition-duration: 1.5s;
}

// .hover:hover {
//   color:white;
//   filter: blur(1.5rem);
//   transition-duration: .5s;
// }




</style>