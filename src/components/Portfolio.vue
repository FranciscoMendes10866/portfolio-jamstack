<template>
  <div>
    <section class="bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1">
          <div v-for="project in projects" :key="project.id" class="mt-10 md:mt-32">
            <router-link :to="project.to">
              <div class="text-transparent hover:text-gray-800">
                <img class="z-0 p-10 object-cover w-full" :src="project.thumb" :alt="project.alt" />
                <h1
                  class="underline ml-16 md:ml-24 text-left text-2xl md:text-4xl lg:text-5xl z-20 -mt-32 md:-mt-48 lg:-mt-64"
                >{{ project.title }}</h1>
                <h2
                  class="ml-16 md:ml-24 text-left text-xs md:text-lg z-10 mt-2 md:mt-4"
                >{{ project.desc }}</h2>
                <p class="mr-16 md:mr-24 text-right text-2xl md:text-5xl z-10 -mt-12">
                  <span>
                    <ion-icon name="eye-outline" />
                  </span>
                </p>
              </div>
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
      projects: [
        {
          id: 1,
          title: 'Mr. Glicémia',
          desc: 'An app for diabetic people.',
          to: '/works/glicemia',
          thumb: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png',
          alt: 'Glicemia app image'
        },
        {
          id: 2,
          title: 'Illery events',
          desc: 'An app to share multimedia events..',
          to: '/works/illery',
          thumb: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png',
          alt: 'Illery app image'
        },
        {
          id: 3,
          title: 'Juliana PT',
          desc: 'An app for a personal trainer.',
          to: '/works/juliana',
          thumb: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png',
          alt: 'Juliana Personal Trainer app image'
        },
        {
          id: 4,
          title: 'Docus',
          desc: 'An app to share links.',
          to: '/works/docus',
          thumb: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png',
          alt: 'Docus app image'
        },
        {
          id: 5,
          title: 'Note it!',
          desc: 'A todo-list app',
          to: '/works/noteit',
          thumb: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png',
          alt: 'Note it app image'
        },
        {
          id: 6,
          title: 'Locise',
          desc: 'A link-based app',
          to: '/works/locise',
          thumb: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png',
          alt: 'Locise app image'
        },
        {
          id: 7,
          title: 'Minary',
          desc: 'A blog app',
          to: '/works/minary',
          thumb: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png',
          alt: 'Minary app image'
        }
      ]
    }
  }
}
</script>
