<template>
  <div>
    <footer class="footer-1 bg-white py-8 sm:py-12">
      <div class="container mx-auto px-4">
        <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div class="sm:w-full px-4 md:w-1/6">
            <h1 class="tracking-wide text-sm text-gray-600">Copyright © Francisco Mendes 2020</h1>
            <div class="mt-2">
              <a href="https://www.instagram.com/francisco.morais.mendes/" target="blank">
                <ion-icon name="logo-instagram" />
              </a>
              <a class="ml-2" href="https://github.com/FranciscoMendes10866" target="blank">
                <ion-icon name="logo-github" />
              </a>
            </div>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 class="tracking-wide text-md text-gray-600 font-bold">Pages</h6>
            <router-link to="/" class="tracking-wide text-sm text-gray-600">Home</router-link>
            <br />
            <router-link to="/about" class="tracking-wide text-sm text-gray-600">About</router-link>
            <br />
            <router-link to="/" class="tracking-wide text-sm text-gray-600">Works</router-link>
            <br />
            <router-link to="/contact" class="tracking-wide text-sm text-gray-600">Contact</router-link>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 class="tracking-wide text-md text-gray-600 font-bold">Works</h6>
            <router-link to="/" class="tracking-wide text-sm text-gray-600">Juliana Morais PT</router-link>
            <br />
            <router-link to="/" class="tracking-wide text-sm text-gray-600">Note it!</router-link>
            <br />
            <router-link to="/" class="tracking-wide text-sm text-gray-600">Illery Events</router-link>
            <br />
            <router-link to="/" class="tracking-wide text-sm text-gray-600">Mr Glicemia</router-link>
          </div>
          <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button
              class="transition duration-100 ease-in-out px-4 py-2 border-solid border-2 border-gray-400 hover:border-gray-600 bg-white hover:bg-gray-600 text-black hover:text-white"
            >
              Download CV&nbsp;&nbsp;
              <ion-icon name="download-outline" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>
