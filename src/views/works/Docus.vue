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
          first_paragraph: 'This application arose out of necessity. As I browse the internet on multiple devices, I would like to have my bookmarks present on all of them.',
          second_paragraph: 'Although browsers nowadays offer services like this by creating an account, I decided to create my own so that it would have greater privacy.'
        },
        headers: {
          first_topic: {
            title: 'Design.',
            body: 'The main page only has some aspects related to the functionality of the application itself. The dashboard page had the idea of creating an easy and intuitive way to save bookmarks.'
          },
          second_topic: {
            title: 'Implementation.',
            body: 'Like the Mr Glicémia Project, I also decided to create this project completely from scratch. Again, to improve my knowledge of the frontend and backend.'
          },
          third_topic: {
            title: 'Challenges.',
            first_body: 'The biggest challenge in the development of this project was to understand how a NoSql database works. Despite having used Firebase Firestore in the past, making an api using an MDG like mongoose was a totally new concept for me.',
            second_body: 'On the other hand, in the act of deployment, I decided to split my application from side to side. To date, it had the frontend on Vercel and the backend along with the daos base on Heroku. This time I decided to use MongoDB Atlas as a database.',
            third_body: 'Also in this project, I challenged myself to reuse as many components as possible, despite being a small project, it was a small challenge to play with all these aspects.'
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
