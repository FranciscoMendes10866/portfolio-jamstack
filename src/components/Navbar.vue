<template>
  <div>
    <!-- Header -->
    <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div class="flex-1 flex justify-end items-center">
        <a @click="openNav()">
          <ion-icon name="menu-outline" class="text-4xl font-bold mt-6 text-gray-600" />
        </a>
      </div>
    </header>
    <!-- The Curtain Menu -->
    <div id="myNav" class="overlay bg-gray-400">
      <!-- Button to close the overlay navigation -->
      <a href="javascript:void(0)" class="closebtn text-4xl font-bold" @click="closeNav()">
        <ion-icon name="close-outline">&times;</ion-icon>
      </a>
      <!-- Overlay content -->
      <div class="overlay-content">
        <router-link class="text-5xl font-semi-bold text-gray-700" to="/">
          <span @click="closeNav()">Home</span>
        </router-link>
        <router-link class="text-5xl font-semi-bold text-gray-700" to="/about">
          <span @click="closeNav()">About</span>
        </router-link>
        <router-link class="text-5xl font-semi-bold text-gray-700" to="/works">
          <span @click="closeNav()">Works</span>
        </router-link>
        <router-link class="text-5xl font-semi-bold text-gray-700" to="/contact">
          <span @click="closeNav()">Contact</span>
        </router-link>
      </div>
    </div>
    <!-- End of the Curtain Menu -->
  </div>
</template>

<script>
export default {
  methods: {
    openNav () {
      document.getElementById('myNav').style.width = '100%'
    },
    closeNav () {
      document.getElementById('myNav').style.width = '0%'
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Lato', sans-serif;
}
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
}
.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.overlay a {
  padding: 8px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
}
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
}
@media screen and (max-height: 450px) {
  .overlay .closebtn {
  top: 15px;
  right: 35px;
  }
}
</style>
