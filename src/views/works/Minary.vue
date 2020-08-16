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
        project_name: 'Minary',
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
            name: 'Tailwind'
          },
          {
            id: 5,
            name: 'Express'
          },
          {
            id: 6,
            name: 'TypeORM'
          },
          {
            id: 7,
            name: 'MySQL'
          },
          {
            id: 8,
            name: 'Heroku'
          },
          {
            id: 9,
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
          previous: '/works/locise',
          next: '/works/glicemia'
        },
        launch_project: {
          href: 'https://minary-pj.vercel.app/',
          figma_link: 'https://www.figma.com/',
          source_code: 'https://github.com/FranciscoMendes10866/minary'
        },
        screenshots_design: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597419816/nuxt-portfolio/minary/Screenshot_2020-08-14_frontend_1_mrhorq.png',
            alt: 'Home page'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420719/nuxt-portfolio/minary/Screenshot_2020-08-14_frontend_j8wltr.png',
            alt: 'Sign Up page'
          },
          {
            id: 3,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420719/nuxt-portfolio/minary/Screenshot_2020-08-14_frontend_1_t8gy5w.png',
            alt: 'Sign In page'
          }
        ],
        screenshots_implementation: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420720/nuxt-portfolio/minary/Screenshot_2020-08-14_frontend_2_wnrzpi.png',
            alt: 'Reading a Blog post'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420720/nuxt-portfolio/minary/Screenshot_2020-08-14_frontend_3_owkczu.png',
            alt: 'Form to create a Blog post'
          },
          {
            id: 3,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420719/nuxt-portfolio/minary/Screenshot_2020-08-14_frontend_5_ouccau.png',
            alt: 'User posts'
          },
          {
            id: 4,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420719/nuxt-portfolio/minary/Screenshot_2020-08-14_frontend_4_j1id7z.png',
            alt: 'All Blog posts'
          }
        ],
        bg_img: {
          first_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1597538718/nuxt-portfolio/minary/minary_jzfg7p.png)'
        }
      }
    }
  }
}
</script>
