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
        project_name: 'Locise',
        tech_stack: [
          {
            id: 1,
            name: 'Vue'
          },
          {
            id: 2,
            name: 'Vue Apollo'
          },
          {
            id: 3,
            name: 'GraphCMS'
          },
          {
            id: 4,
            name: 'Tailwind'
          },
          {
            id: 5,
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
          previous: '/works/noteit',
          next: '/works/minary'
        },
        launch_project: {
          href: 'https://locise.vercel.app/',
          figma_link: 'https://www.figma.com/',
          source_code: 'https://github.com/FranciscoMendes10866/locise-gql-cms'
        },
        screenshots_design: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597419781/nuxt-portfolio/locise/Screenshot_2020-08-14_locise_uxmqgs.png',
            alt: 'Home page'
          }
        ],
        screenshots_implementation: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597586789/nuxt-portfolio/locise/Screenshot_2020-08-16_GraphCMS_tcxazp.png',
            alt: 'Content schema'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597586789/nuxt-portfolio/locise/Screenshot_2020-08-16_GraphCMS_1_qphmbh.png',
            alt: 'Content dashboard'
          }
        ],
        bg_img: {
          first_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1597538703/nuxt-portfolio/locise/locise_vyewaj.png)'
        }
      }
    }
  }
}
</script>
