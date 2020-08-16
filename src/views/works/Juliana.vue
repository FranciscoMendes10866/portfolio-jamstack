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
        project_name: 'Juliana Morais PT',
        tech_stack: [
          {
            id: 1,
            name: 'Nuxt'
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
            name: 'Vuetify'
          },
          {
            id: 5,
            name: 'Express'
          },
          {
            id: 6,
            name: 'Firebase'
          },
          {
            id: 7,
            name: 'GraphQL'
          },
          {
            id: 8,
            name: 'Netlify'
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
          previous: '/works/illery',
          next: '/works/docus'
        },
        launch_project: {
          href: 'https://julianamoraispt.netlify.app/',
          figma_link: 'https://www.figma.com/file/FAnLqiN2uklG0mDzl3YcGY/Juliana?node-id=0%3A1',
          source_code: 'https://github.com/FranciscoMendes10866/'
        },
        screenshots_design: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597419758/nuxt-portfolio/julianamoraispt/Screenshot_2020-08-14_JU_awbjrs.png',
            alt: 'Home page'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597585280/nuxt-portfolio/julianamoraispt/Screenshot_2020-08-16_JU_xhkrhu.png',
            alt: 'Sign In page'
          }
        ],
        screenshots_implementation: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597585280/nuxt-portfolio/julianamoraispt/Screenshot_2020-08-16_JU_1_mzdoce.png',
            alt: 'Dashboard data'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597585280/nuxt-portfolio/julianamoraispt/Screenshot_2020-08-16_JU_2_mde4x6.png',
            alt: 'Dashboard calendar events'
          },
          {
            id: 3,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597585280/nuxt-portfolio/julianamoraispt/Screenshot_2020-08-16_JU_3_dlgn72.png',
            alt: 'Form'
          }
        ],
        bg_img: {
          first_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1597538676/nuxt-portfolio/julianamoraispt/juliana_yzqey9.png)'
        }
      }
    }
  }
}
</script>
