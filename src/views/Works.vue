<template>
  <div class="index">
    <!-- Hero Section -->
    <section class="bg-white py-40 md:py-48">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              class="font-bold ml-4 md:ml-0 text-left md:text-center text-2xl md:text-4xl tracking-wide md:leading-loose"
            >Made with meaning.</h1>
            <h2
              data-aos="fade-up"
              data-aos-duration="900"
              class="text-left md:text-center text-transparent md:text-gray-500"
            >
              <span>
                <ion-icon class="mt-0 md:mt-32 text-2xl" name="arrow-down-outline" />
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
    <!-- Portfolio Section -->
    <Portfolio />
    <!-- Work Section -->
    <section class="bg-gray-50 pt-40 md:pt-64">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              class="ml-4 md:ml-0 text-2xl md:text-4xl font-bold tracking-wide"
            >Work</h1>
          </div>
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              class="mt-4 md:mt-0 ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose"
            >
              Are you interested in working with me on a
              freelance project or hiring me full time?
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              class="ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose mt-8"
            >
              Feel free to contact me sending an email to:
              <span
                class="font-bold"
              >franciscomendes@gmail.com</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    Portfolio: () => import('../components/Portfolio')
  }
}
</script>
