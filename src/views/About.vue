<template>
  <div class="index">
    <!-- Hero Section -->
    <section class="bg-white py-64">
      <div class="container mx-auto">
        <div class="grid grid-cols-1">
          <div>
            <h1
              class="text-center text-4xl tracking-wide leading-loose"
            >
              “When you work hard for something, all the universe conspires in helping you to achieve it.”
            </h1>
          </div>
        </div>
      </div>
    </section>
    <!-- Profile Section -->
    <section class="bg-gray-300 py-32">
      <div class="container mx-auto">
        <div>
          <img
            class="object-cover w-full -mt-64"
            src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1594059634/nuxt-portfolio/me_j2astx.png"
            alt="Profile Picture"
          >
        </div>
        <div class="grid grid-cols-2 mt-10">
          <div>
            <h1 class="text-4xl font-bold tracking-wide">
              Profile
            </h1>
          </div>
          <div>
            <p class="text-lg font-normal tracking-wide leading-loose">
              Born and raised in the beautiful Portuguese coast.
              By day I'm a Designer, but by night I'm a massive
              hard working person.
            </p>
            <p class="text-lg font-normal tracking-wide leading-loose mt-8">
              My core value is to embrace my limitations and
              always stay hungry for new challenges. I love to
              study everything around me, from how people
              perceive color, to how they interact with an App.
            </p>
            <p class="text-lg font-normal tracking-wide leading-loose mt-8">
              Even with this being said, my works are seen as
              uninteresting, I'm saying this because of the
              reaction of my 2 year old goddaughter.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Tech stack Section -->
    <section class="bg-gray-200 py-32">
      <div class="container mx-auto">
        <div class="grid grid-cols-2">
          <div>
            <h1 class="text-4xl font-bold tracking-wide">
              Tech stack
            </h1>
          </div>
          <div>
            <p class="text-lg font-normal tracking-wide leading-loose">
              In addition to loving design, I also like to make them
              come true and coding is fascinating.
            </p>
            <p class="text-lg font-normal tracking-wide leading-loose mt-8">
              I may not be fluent in all of them but I am self-taught
              and I love to acquire new knowledge. In the same way
              that I like to deepen the knowledge I have.
            </p>
            <div class="mt-8 grid grid-cols-2 text-gray-600 text-lg font-normal tracking-wide">
              <div>
                <h1>
                  <ion-icon name="logo-vue" />&nbsp;&nbsp;Vue.js
                </h1>
              </div>
              <div>
                <h1>
                  <ion-icon name="logo-nodejs" />&nbsp;&nbsp;Node.js
                </h1>
              </div>
            </div>
            <div class="grid grid-cols-2 mt-6 text-gray-600 text-lg font-normal tracking-wide">
              <div>
                <h1>
                  <ion-icon name="server-outline" />&nbsp;&nbsp;Postgres
                </h1>
              </div>
              <div>
                <h1>
                  <ion-icon name="cloudy-outline" />&nbsp;&nbsp;Heroku
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Network Section -->
    <section class="bg-white py-20">
      <div class="container mx-auto">
        <div class="grid grid-cols-2">
          <div>
            <h1 class="text-4xl font-bold tracking-wide">
              Network
            </h1>
          </div>
          <div>
            <p class="text-lg font-normal tracking-wide leading-loose">
              And while you are at it, why not network a bit,
              and follow me in one (or all) of this websites?
            </p>
            <p class="mt-8 text-lg font-normal tracking-wide leading-loose">
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
  </div>
</template>

<script>
export default {}
</script>
