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
          first_paragraph: 'Minary\'s idea is to create a Blog where people can give some of their knowledge to the world, as if it were Open Knowledge.',
          second_paragraph: 'People with academic knowledge or simply professional knowledge in the specific area of Design and Tech could write a short article about something that they think is relevant to share and that should be of general knowledge.'
        },
        headers: {
          first_topic: {
            title: 'Design.',
            body: 'The design of this application was inspired by the DigitalOcean Blog, I thought the design was amazing so I decided to replicate and implement this project.'
          },
          second_topic: {
            title: 'Implementation.',
            body: 'As Docker was used in all projects to create a local database, whether in PostgreSQL or in NoSql. I also decided to do the same with MySQL but the only GUI I like to use is phpmyadmin so the challenge was the creation of a docker-compose in which I defined both images (MySQL and phpmyadmin) as well as creating a network for both if they could communicate.'
          },
          third_topic: {
            title: 'Challenges.',
            first_body: 'My main challenge was to pass the id parameter through the vue-router so that a selected article could be printed on a given page. That yes, it was difficult for me at the time and without a doubt it was the main challenge.',
            third_body: 'Another challenge was the use of TypeORM, despite having good documentation it was difficult for me to understand the difference between Active Record and Data Mapper. So far, the only ORM I had used was the Sequelize ORM and so I had only used Active Record. And I found it interesting to learn and read about Data Mapper and the use of repositories.'
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
