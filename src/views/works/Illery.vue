<template>
  <div>
    <Project :project="project" />
  </div>
</template>

<script>
export default {
  components: {
    Project: () => import('../../components/Project')
  },
  data: () => {
    return {
      project: {
        project_name: 'Illery',
        tech_stack: [
          {
            id: 1,
            name: 'Vue'
          },
          {
            id: 2,
            name: 'Vuex'
          },
          {
            id: 3,
            name: 'Axios'
          },
          {
            id: 4,
            name: 'Buefy'
          },
          {
            id: 5,
            name: 'Express'
          },
          {
            id: 6,
            name: 'Prisma'
          },
          {
            id: 7,
            name: 'PostgreSQL'
          },
          {
            id: 8,
            name: 'Cloudinary'
          },
          {
            id: 9,
            name: 'Heroku'
          },
          {
            id: 10,
            name: 'Vercel'
          }
        ],
        description: {
          first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra neque a eros molestie, a volutpat quam tristique. Morbi ut laoreet eros, quis accumsan ante.',
          second_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra neque a eros molestie, a volutpat quam tristique. Morbi ut laoreet eros, quis accumsan ante.'
        },
        headers: {
          first_topic: {
            title: 'Design.',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra neque a eros molestie, a volutpat quam tristique. Morbi ut laoreet eros, quis accumsan ante.'
          },
          second_topic: {
            title: 'Implementation.',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra neque a eros molestie, a volutpat quam tristique. Morbi ut laoreet eros, quis accumsan ante.'
          },
          third_topic: {
            title: 'Challenges.',
            first_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra neque a eros molestie, a volutpat quam tristique. Morbi ut laoreet eros, quis accumsan ante.',
            second_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra neque a eros molestie, a volutpat quam tristique. Morbi ut laoreet eros, quis accumsan ante.',
            third_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra neque a eros molestie, a volutpat quam tristique. Morbi ut laoreet eros, quis accumsan ante.'
          }
        },
        routing: {
          previous: '/works/glicemia',
          next: '/works/juliana'
        },
        launch_project: {
          href: 'https://illery-multimedia-events.vercel.app/',
          figma_link: 'https://www.figma.com/file/lmACOcObTSuHOWT52rS5fM/Illery?node-id=0%3A1',
          source_code: 'https://github.com/FranciscoMendes10866/illery-frontend'
        },
        screenshots_design: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597419730/nuxt-portfolio/illery/Screenshot_2020-08-14_illery-frontend_g8xdbv.png',
            alt: 'Home page'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420525/nuxt-portfolio/illery/Screenshot_2020-08-14_illery-frontend_fuwakx.png',
            alt: 'Sign Up page'
          },
          {
            id: 3,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420525/nuxt-portfolio/illery/Screenshot_2020-08-14_illery-frontend_1_vo3af5.png',
            alt: 'Sign In page'
          }
        ],
        screenshots_implementation: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420526/nuxt-portfolio/illery/Screenshot_2020-08-14_illery-frontend_2_nobb4w.png',
            alt: 'User logged in'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420524/nuxt-portfolio/illery/Screenshot_2020-08-14_illery-frontend_4_yrv6kc.png',
            alt: 'Events page'
          },
          {
            id: 3,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420524/nuxt-portfolio/illery/Screenshot_2020-08-14_illery-frontend_3_fpa9rs.png',
            alt: 'Form to add an event'
          },
          {
            id: 4,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420524/nuxt-portfolio/illery/Screenshot_2020-08-14_illery-frontend_5_ci6ujq.png',
            alt: 'Filled form'
          },
          {
            id: 5,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420525/nuxt-portfolio/illery/Screenshot_2020-08-14_illery-frontend_6_zcp8qn.png',
            alt: 'All events'
          }
        ],
        bg_img: {
          first_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1597538661/nuxt-portfolio/illery/illery_dfozwu.png)'
        }
      }
    }
  }
}
</script>
