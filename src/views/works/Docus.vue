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
        project_name: 'Docus',
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
            name: 'Mongoose ODM'
          },
          {
            id: 7,
            name: 'MongoDB Atlas'
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
          previous: '/works/juliana',
          next: '/works/noteit'
        },
        launch_project: {
          href: 'https://docus-ms.vercel.app/',
          figma_link: 'https://www.figma.com/file/V61D2IxtOYxrqKrMx8qfLK/Docus?node-id=0%3A1',
          source_code: 'https://github.com/FranciscoMendes10866/docus-ms'
        },
        screenshots_design: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597419709/nuxt-portfolio/docus/Screenshot_2020-08-14_frontend_i1yovl.png',
            alt: 'Home page'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420100/nuxt-portfolio/docus/Screenshot_2020-08-14_frontend_gr15ay.png',
            alt: 'Sign Up page'
          },
          {
            id: 3,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420101/nuxt-portfolio/docus/Screenshot_2020-08-14_frontend_1_u5wbg8.png',
            alt: 'Sign In page'
          }
        ],
        screenshots_implementation: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420005/nuxt-portfolio/docus/Screenshot_2020-08-14_frontend_ziaupm.png',
            alt: 'Form to create a link'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420006/nuxt-portfolio/docus/Screenshot_2020-08-14_frontend_1_nqquer.png',
            alt: 'Links page'
          }
        ],
        bg_img: {
          first_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1597538639/nuxt-portfolio/docus/docus_m6jn22.png)'
        }
      }
    }
  }
}
</script>
