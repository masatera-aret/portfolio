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

li {
  padding:0;
  margin-top: 7px;
}
</style>