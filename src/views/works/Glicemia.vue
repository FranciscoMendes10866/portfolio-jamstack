<template>
  <div>
    <!-- Back arrow link -->
    <div class="fixed ml-8 mt-12">
      <router-link to="/works">
        <h1 class="font-bold text-xl">
          <ion-icon class="align-middle" name="arrow-back-outline" />&nbsp;&nbsp;Back
        </h1>
      </router-link>
    </div>
    <!-- Project Header -->
    <section>
      <div class="container mx-auto">
        <div class="flex flex-auto justify-evenly py-24">
          <div class="w-2/5">
            <h1 class="font-bold tracking-wide text-xl mb-4">Tech Stack</h1>
            <ul
              v-for="tech in project.tech_stack"
              :key="tech.id"
              class="tracking-wide leading-loose text-md font-normal text-gray-700"
            >
              <li>{{ tech.name }}</li>
            </ul>
          </div>
          <div class="w-2/5">
            <h1 class="font-bold tracking-wide text-3xl">{{ project.project_name }}</h1>
            <p
              class="tracking-wide leading-loose text-md font-normal mt-4 text-gray-700"
            >{{ project.first_paragraph }}</p>
            <p
              class="tracking-wide leading-loose text-md font-normal mt-4 text-gray-700"
            >{{ project.second_paragraph }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- First Image -->
    <section class="bg-cover py-64" :style="project.first_image"></section>
    <!-- First topic -->
    <section class="bg-gray-200">
      <div class="container mx-auto">
        <div class="flex flex-auto justify-evenly py-20">
          <div class="w-2/5">
            <h1
              class="font-bold tracking-wide text-4xl leading-relaxed"
            >{{ project.first_topic_title }}</h1>
          </div>
          <div class="w-2/5">
            <p
              class="tracking-wide leading-loose text-md font-normal text-gray-700"
            >{{ project.first_topic_body }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Second Image -->
    <section class="bg-cover py-64" :style="project.second_image"></section>
    <!-- Second topic -->
    <section class="bg-gray-200">
      <div class="container mx-auto">
        <div class="flex flex-auto justify-evenly py-20">
          <div class="w-2/5">
            <h1
              class="font-bold tracking-wide text-4xl leading-relaxed"
            >{{ project.second_topic_title }}</h1>
          </div>
          <div class="w-2/5">
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
            name: 'Heroku'
          },
          {
            id: 6,
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
      }
    }
  }
}
</script>
