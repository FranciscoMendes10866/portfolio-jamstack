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
          previous: '/works/minary',
          next: '/works/illery'
        },
        launch_project: {
          href: 'https://mr-glicemia.vercel.app',
          figma_link: 'https://www.figma.com/file/Cbz124yaByxPXyvJ1A27t9/Mr-Glicemia?node-id=0%3A1',
          source_code: 'https://github.com/FranciscoMendes10866/mrGlicemiaFrontend'
        },
        screenshots_design: [
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
        ],
        screenshots_implementation: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420232/nuxt-portfolio/glicemia/Screenshot_2020-08-14_ts-frontend_3_nkcayw.png',
            alt: 'Dashboard page without data'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420232/nuxt-portfolio/glicemia/Screenshot_2020-08-14_ts-frontend_4_aud65x.png',
            alt: 'Dashboard page form to insert data'
          },
          {
            id: 3,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420232/nuxt-portfolio/glicemia/Screenshot_2020-08-14_ts-frontend_2_y0aoj0.png',
            alt: 'Dashboard page with data'
          },
          {
            id: 4,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420233/nuxt-portfolio/glicemia/Screenshot_2020-08-14_ts-frontend_6_pwucfm.png',
            alt: 'Profile page form to insert data'
          },
          {
            id: 5,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420232/nuxt-portfolio/glicemia/Screenshot_2020-08-14_ts-frontend_5_lre36f.png',
            alt: 'Profile page with data'
          }
        ],
        bg_img: {
          first_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png)',
          second_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png)'
        }
      }
    }
  }
}
</script>
