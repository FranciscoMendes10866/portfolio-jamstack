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
          first_paragraph: 'Locise is a personal application that was created in order to have a personal page with important links.',
          second_paragraph: 'The fundamental idea was to create a page that aggregates these same important links so that it can be used on the most diverse digital platforms to help people know how to access my work, personal pages, etc.'
        },
        headers: {
          first_topic: {
            title: 'Design.',
            body: 'The design is very similar to the Docus project dashboard. Although this is a project with a simple design, small animations on hover were added and it was guaranteed that it also works properly on all devices.'
          },
          second_topic: {
            title: 'Implementation.',
            body: 'The project is not powered by a graphql api created by me. I used a CMS called GraphCMS that has an intuitive and simple to use interface. Which matches this same project.'
          },
          third_topic: {
            title: 'Challenges.',
            first_body: 'The main challenge was to use the Apollo library to create a client and query the CMS. Although this sounds simple, it was very difficult for me because what I had used previously was @ nuxtjs / apollo which makes the whole configuration simple in Nuxt.js while in Vue I needed to have more knowledge.'
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
