<template>
  <div id="app">
    <div id="nav" class="m-0 row flex-column">
      <div class="ml-4 px-0">
        <h1 class="m-0"><a href="/">Chuck Nicholson</a></h1>
      </div>
      <div class="nav_list_link row col-12 px-0 m-0 justify-content-center">
        <div class="row text-center">
          <router-link active-class="active--link" exact class="router-link" to="/">Home</router-link>
          <router-link active-class="active--link" class="router-link" to="/photo_list">Photos</router-link>
        </div>
      </div>
    </div>
    <div class="container px-5 px-md-0">
      <transition name="fade" mode="out-in" appear>
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit("imageSet");
  }
};
</script>

<style>
#app {
  font-family: serif, "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav_list_link {
  /* color:white; */
  padding: 5px 0;
  background: rgb(130, 130, 130);
}

.router-link {
  color: white;
  display: block;
  margin: 0 15px;
  text-decoration: none;
  position: relative;
}
.router-link:hover {
  color: white;
  text-decoration: none;
}
.active--link::after {
  content: "";
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid rgb(230, 230, 230);
}
.router-link-exact-active::after {
  content: "";
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid rgb(230, 230, 230);
}

.router-link:hover:not(.active--link)::after {
  content: "";
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid rgb(230, 230, 230);
  animation: stretchBar 0.5s;
}
.router-link:not(.active--link)::after {
  content: "";
  width: 0%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid rgb(230, 230, 230);
  transition: 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  animation: fadeIn 0.5s;
}
/* .fade-leave-active {
  animation: fadeIn 0.2s reverse;
} */

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

/*------------
animation
------------*/

@keyframes stretchBar {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
