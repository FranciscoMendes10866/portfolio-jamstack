<template>
  <div class="index">
    <!-- Hero Section -->
    <section class="bg-white py-40 md:py-64">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              class="font-black ml-4 md:ml-0 text-left md:text-center text-2xl md:text-4xl tracking-wide md:leading-loose"
            >Let's talk.</h1>
          </div>
        </div>
      </div>
    </section>
    <!-- Email Section -->
    <section class="bg-gray-300 py-32">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              class="ml-4 md:ml-0 text-2xl md:text-4xl font-bold tracking-wide"
            >Email</h1>
          </div>
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              class="mt-4 md:mt-0 ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose"
            >
              Please don't hesitate to get in touch to discuss
              any possible projects or further information
              or even just to say hello!
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              class="mt-8 ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose"
            >
              You can reach me by filling out the form
              (down below), or emailing me to:
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              class="mt-8 ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose"
            >
              <a href class="font-bold">franciscomendes@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Social Media Section -->
    <section class="bg-gray-200 py-32">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              class="ml-4 md:ml-0 text-2xl md:text-4xl font-bold tracking-wide"
            >Social Media</h1>
          </div>
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              class="mt-4 md:mt-0 ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose"
            >
              You can also contact me on social media, there
              I love to share some daily tests I do.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              class="mt-8 ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose"
            >
              Also, you can contact me on my portfolio page,
              to see my new case studies.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              class="mt-8 ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose"
            >
              <a
                class="text-black font-bold"
                href="https://www.instagram.com/francisco.morais.mendes/"
                target="blank"
              >Instagram</a> and
              <a
                class="text-black font-bold"
                href="https://github.com/FranciscoMendes10866"
                target="blank"
              >Github</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Form Section -->
    <Form />
  </div>
</template>

<script>
export default {
  components: {
    Form: () => import('../components/Form')
  }
}
</script>
