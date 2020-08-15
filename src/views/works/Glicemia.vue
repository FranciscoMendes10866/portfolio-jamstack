<template>
  <div>
    <!-- Back arrow link -->
    <div class="fixed ml-12 mt-8">
      <router-link to="/works">
        <ion-icon
          class="transform scale-100 hover:scale-150 transition duration-150 ease-in-out font-bold text-2xl text-gray-700"
          name="arrow-back-outline"
        />
      </router-link>
    </div>
    <!-- Project Header -->
    <section>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-11 px-10 md:px-0 py-24 gap-12">
          <div class="col-span-2">
            <h1 class="font-bold tracking-wide text-md mb-4 text-left sm:text-center">Year</h1>
            <p
              class="tracking-wide leading-loose text-sm font-normal text-gray-700 text-left sm:text-center"
            >2020</p>
          </div>
          <div class="col-span-2">
            <h1 class="font-bold tracking-wide text-md mb-4">Tech Stack</h1>
            <ul
              v-for="tech in project.tech_stack"
              :key="tech.id"
              class="tracking-wide leading-loose text-sm font-normal text-gray-700"
            >
              <li>{{ tech.name }}</li>
            </ul>
          </div>
          <div class="col-span-7">
            <h1 class="font-bold tracking-wide text-5xl mb-8">{{ project.project_name }}</h1>
            <p
              class="tracking-wide leading-loose text-md font-normal text-gray-700"
            >{{ project.first_paragraph }}</p>
            <p
              class="tracking-wide leading-loose text-md font-normal mt-4 text-gray-700 mb-12"
            >{{ project.second_paragraph }}</p>
            <a
              :href="launch_project.href"
              target="blank"
              class="transition duration-150 ease-in-out px-4 py-2 border-solid border-2 border-gray-400 hover:border-gray-600 bg-white hover:bg-gray-600 text-black hover:text-white"
            >
              Visit website&nbsp;&nbsp;
              <ion-icon name="open-outline" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- First Image -->
    <section class="bg-cover py-64" :style="project.first_image"></section>
    <!-- First topic -->
    <section class="bg-gray-200">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 px-10 md:px-0 py-20">
          <div>
            <h1
              class="font-bold tracking-wide text-4xl leading-relaxed mb-6 md:mb-0"
            >{{ project.first_topic_title }}</h1>
          </div>
          <div>
            <p
              class="tracking-wide leading-loose text-md font-normal text-gray-700"
            >{{ project.first_topic_body }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Screenshots -->
    <section class="bg-gray-100">
      <div class="container mx-auto">
        <div class="py-12 px-10 md:px-0">
          <img
            v-for="screenshot in screenshots"
            :key="screenshot.id"
            class="object-cover w-full shadow-lg mt-12 mb-12"
            v-lazy="screenshot.src"
            :alt="screenshot.alt"
          />
        </div>
      </div>
    </section>
    <!-- Second topic -->
    <section class="bg-gray-200">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 px-10 md:px-0 py-20">
          <div>
            <h1
              class="font-bold tracking-wide text-4xl leading-relaxed mb-6 md:mb-0"
            >{{ project.second_topic_title }}</h1>
          </div>
          <div>
            <p
              class="tracking-wide leading-loose text-md font-normal text-gray-700"
            >{{ project.second_topic_body }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Third Image -->
    <section class="bg-cover py-64" :style="project.third_image"></section>
    <!-- Next/Previous Project -->
    <section class="bg-gray-50">
      <div class="container mx-auto">
        <div class="flex flex-auto justify-evenly pt-32 pb-10 text-center align-center">
          <div class="w-1/5 self-center">
            <router-link :to="routing.previous">
              <h1 class="font-medium tracking-wide text-md leading-relaxed">
                <ion-icon class="align-middle" name="arrow-back-outline" />&nbsp;&nbsp;Previous Project
              </h1>
            </router-link>
          </div>
          <div class="w-1/5 self-center">
            <h1 class="font-bold tracking-wide text-3xl leading-relaxed">Works</h1>
          </div>
          <div class="w-1/5 self-center">
            <router-link :to="routing.next">
              <h1 class="font-medium tracking-wide text-md leading-relaxed">
                Next Project&nbsp;&nbsp;
                <ion-icon class="align-middle" name="arrow-forward-outline" />
              </h1>
            </router-link>
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
      project: {
        project_name: 'Mr. Glicémia',
        tech_stack: [
          {
            id: 1,
            name: 'Vue.js'
          },
          {
            id: 2,
            name: 'Express.js'
          },
          {
            id: 3,
            name: 'Prisma'
          },
          {
            id: 4,
            name: 'Cloudinary'
          },
          {
            id: 5,
            name: 'PostgreSQL'
          },
          {
            id: 6,
            name: 'Heroku'
          },
          {
            id: 7,
            name: 'Vercel'
          }
        ],
        first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra neque a eros molestie, a volutpat quam tristique. Morbi ut laoreet eros, quis accumsan ante.',
        second_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra neque a eros molestie, a volutpat quam tristique. Morbi ut laoreet eros, quis accumsan ante.',
        first_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png)',
        second_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png)',
        first_topic_title: 'Design.',
        first_topic_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra neque a eros molestie, a volutpat quam tristique. Morbi ut laoreet eros, quis accumsan ante.',
        second_topic_title: 'Challenges.',
        second_topic_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra neque a eros molestie, a volutpat quam tristique. Morbi ut laoreet eros, quis accumsan ante.',
        third_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png)'
      },
      routing: {
        previous: '/works/minary',
        next: '/works/illery'
      },
      launch_project: {
        href: 'https://mr-glicemia.vercel.app'
      },
      screenshots: [
        {
          id: 1,
          src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597419679/nuxt-portfolio/glicemia/Screenshot_2020-08-14_ts-frontend_jogdzi.png',
          alt: 'Home page'
        },
        {
          id: 2,
          src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420233/nuxt-portfolio/glicemia/Screenshot_2020-08-14_ts-frontend_b3maas.png',
          alt: 'Sign Up page'
        },
        {
          id: 3,
          src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420233/nuxt-portfolio/glicemia/Screenshot_2020-08-14_ts-frontend_1_cp7iyx.png',
          alt: 'Sign In page'
        }
      ]
    }
  }
}
</script>
