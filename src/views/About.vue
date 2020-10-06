<template>
  <div class="index">
    <!-- Hero Section -->
    <section class="bg-white py-40 md:py-56">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              class="ml-4 md:ml-0 text-left md:text-center text-2xl md:text-4xl tracking-wide md:leading-loose"
            >
              “When you work hard for something, all the universe conspires in
              helping you to achieve it.”
            </h1>
          </div>
        </div>
      </div>
    </section>
    <!-- Profile Section -->
    <section class="bg-gray-300 py-20 md:py-32">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div>
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            class="object-cover w-full -mt-40 md:-mt-64 p-4 md:p-0"
            v-lazy="img"
            alt="Profile Picture"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 mt-10">
          <div>
            <h1
              data-aos="fade-up"
              class="ml-4 md:ml-0 text-2xl md:text-4xl font-bold tracking-wide"
            >
              Profile
            </h1>
          </div>
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="500"
              class="mt-4 md:mt-0 ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose"
            >
              Born and raised in the beautiful Portuguese coast. By day I'm a
              Designer, but by night I'm a massive hard working person.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              class="ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose mt-8"
            >
              My core value is to embrace my limitations and always stay hungry
              for new challenges. I love to study everything around me, from how
              people perceive color, to how they interact with an App.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              class="ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose mt-8"
            >
              Even with this being said, my works are seen as uninteresting, I'm
              saying this because of the reaction of my 2 year old goddaughter.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Tech stack Section -->
    <section class="bg-gray-200 py-20 md:py-32">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1
              data-aos="fade-up"
              class="ml-4 md:ml-0 text-2xl md:text-4xl font-bold tracking-wide"
            >
              Tech stack
            </h1>
          </div>
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="500"
              class="mt-4 md:mt-0 ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose"
            >
              In addition to loving design, I also like to make them come true
              and coding is fascinating.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              class="ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide leading-loose mt-8"
            >
              I may not be fluent in all of them but I am self-taught and I love
              to acquire new knowledge. In the same way that I like to deepen
              the knowledge I have.
            </p>
            <div
              class="mt-8 grid grid-cols-2 text-gray-600 ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide"
            >
              <div>
                <h1 data-aos="fade-up" data-aos-duration="500">
                  <ion-icon name="logo-vue" />&nbsp;&nbsp;Vue.js
                </h1>
              </div>
              <div>
                <h1 data-aos="fade-up" data-aos-duration="600">
                  <ion-icon name="logo-nodejs" />&nbsp;&nbsp;Node.js
                </h1>
              </div>
            </div>
            <div
              class="grid grid-cols-2 mt-6 text-gray-600 ml-4 md:ml-0 text-md md:text-lg font-normal tracking-wide"
            >
              <div>
                <h1 data-aos="fade-up" data-aos-duration="800">
                  <ion-icon name="logo-nodejs" />&nbsp;&nbsp;Prisma
                </h1>
              </div>
              <div>
                <h1 data-aos="fade-up" data-aos-duration="700">
                  <ion-icon name="server-outline" />&nbsp;&nbsp;PostgreSQL
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Network Section -->
    <section class="bg-white py-16 md:py-20">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1 md:grid-cols-2" data-aos="fade-up">
          <div>
            <h1
              data-aos-duration="500"
              class="ml-4 md:ml0 text-2xl md:text-4xl font-bold tracking-wide"
            >
              Education
            </h1>
          </div>
          <div>
            <p
              data-aos-duration="600"
              class="mt-4 md:mt-0 ml-4 md:ml0 text-md md:text-lg font-normal tracking-wide leading-loose"
            >
              The scanned documents found in this section are official
              <a
                class="text-black no-underline hover:underline font-bold"
                href="https://www.ismt.pt/"
                target="blank"
                >ISMT</a
              >
              documents.
            </p>
            <p
              data-aos-duration="700"
              class="mt-8 ml-4 md:ml0 text-md md:text-lg font-normal tracking-wide leading-loose"
            >
              <a
                class="text-black no-underline hover:underline font-bold"
                href="https://drive.google.com/file/d/16G1qKsKly43bD825qJkKPfgfToJHXuDM/view?usp=sharing"
                target="blank"
                >Diploma</a
              ><small>(PT)</small> and
              <a
                class="text-black no-underline hover:underline font-bold"
                href="https://drive.google.com/file/d/1hGplY-OvFD8Flajy2E6PNpR5gjLH7y3A/view?usp=sharing"
                target="blank"
                >Suplement</a
              ><small>(EN)</small>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      img: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1594059634/nuxt-portfolio/me_j2astx.png'
    }
  }
}
</script>
