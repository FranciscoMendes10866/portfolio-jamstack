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
            <router-link
              to="/"
              class="tracking-wide text-sm text-gray-600 no-underline hover:underline"
            >Home</router-link>
            <br />
            <router-link
              to="/about"
              class="tracking-wide text-sm text-gray-600 no-underline hover:underline"
            >About</router-link>
            <br />
            <router-link
              to="/works"
              class="tracking-wide text-sm text-gray-600 no-underline hover:underline"
            >Works</router-link>
            <br />
            <router-link
              to="/contact"
              class="tracking-wide text-sm text-gray-600 no-underline hover:underline"
            >Contact</router-link>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 class="tracking-wide text-md text-gray-600 font-bold">Works</h6>
            <router-link
              to="/works/minary"
              class="tracking-wide text-sm text-gray-600 no-underline hover:underline"
            >Minary</router-link>
            <br />
            <router-link
              to="/works/glicemia"
              class="tracking-wide text-sm text-gray-600 no-underline hover:underline"
            >Mr Glicemia</router-link>
            <br />
            <router-link
              to="/works/juliana"
              class="tracking-wide text-sm text-gray-600 no-underline hover:underline"
            >Juliana Morais PT</router-link>
            <br />
            <router-link
              to="/works/illery"
              class="tracking-wide text-sm text-gray-600 no-underline hover:underline"
            >Illery Events</router-link>
            <br />
            <router-link
              to="/works/noteit"
              class="tracking-wide text-sm text-gray-600 no-underline hover:underline"
            >Note it!</router-link>
            <br />
            <router-link
              to="/works/docus"
              class="tracking-wide text-sm text-gray-600 no-underline hover:underline"
            >Docus</router-link>
            <br />
            <router-link
              to="/works/locise"
              class="tracking-wide text-sm text-gray-600 no-underline hover:underline"
            >Locise</router-link>
          </div>
          <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <a
              href="https://drive.google.com/file/d/1-I14ccj4u_u-V_iH46aHmmSM-CN65sB-/view?usp=sharing"
              target="blank"
              class="transition duration-150 ease-in-out px-4 py-2 border-solid border-2 border-black bg-transparent hover:bg-black text-black hover:text-white"
            >
              Download CV&nbsp;&nbsp;
              <ion-icon name="download-outline" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>
