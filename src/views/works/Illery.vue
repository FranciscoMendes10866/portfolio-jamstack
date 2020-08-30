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
          first_paragraph: 'Sometimes, even close to us, there are events related to areas that we like but have not had any knowledge of.',
          second_paragraph: 'Therefore, Illery closes that gap, where any user, related to any area of multimedia, can share information related to an event that he knows will happen.'
        },
        headers: {
          first_topic: {
            title: 'Design.',
            body: 'The main screen contains a brief description of the main areas of event sharing. In the dashboard, the events are organized, in the same way that we can see the information related to each event.'
          },
          second_topic: {
            title: 'Implementation.',
            body: 'This project was one of my first full stack projects. Many of the terms and practices were unknown to me. In such a way that I used Vuex, to have a common state, but the manipulation of the frontend (for example the navbar when the user is logged in or not) was totally done with booleans. Just like it was the first project where you could upload an image to the backend, which in turn would go to a Cloudinary folder and the path would be stored in the database.'
          },
          third_topic: {
            title: 'Challenges.',
            first_body: 'As mentioned in the previous topic, this project was crazy for me, but it ended up giving me a huge amount of luggage in all fields, from the frontend to the backend.',
            second_body: 'One of the main challenges was definitely uploading images. Because I didn\'t want to have something to store the images locally, I already wanted to communicate with an api so that I was already ready for the production environment.',
            third_body: 'Another challenge in the development of this project was the manipulation of the items present in the navigation bar according to the state of the user\'s session. So, the only thing that came to my mind was the use of booleans according to the login response.'
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
