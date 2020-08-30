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
        project_name: 'Note it!',
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
            name: 'Vuesax'
          },
          {
            id: 5,
            name: 'Adonis'
          },
          {
            id: 6,
            name: 'PostgreSQL'
          },
          {
            id: 7,
            name: 'Heroku'
          },
          {
            id: 8,
            name: 'Vercel'
          }
        ],
        description: {
          first_paragraph: 'Note it is a to-do app like many others found in sandboxes or tutorials on youtube. The only thing that differs from its functionality is the dynamic way of choosing the tasks for each project.',
          second_paragraph: 'Normally, we see all the things we have to do, after that we can define whether it was completed or not. However, the way Note it works is that the user only sees tasks that are associated with a single project.'
        },
        headers: {
          first_topic: {
            title: 'Design.',
            body: 'In the scope of the application design, all of it is simple, which facilitated the consistency and the whole visual aspect of the application was the use of the Vuesax UI Library, which holds a huge amount of beautiful and easy to work with components.'
          },
          second_topic: {
            title: 'Implementation.',
            body: 'The interesting thing is that it was with this project that I had the courage to dive into the world of backend. It was in this same project that I developed my first api and the framework used was AdonisJS which, unlike Express.js, is a complete framework, easy and quick to work with. Not to mention that it brings opinion to the table, which was all I needed since I was new.'
          },
          third_topic: {
            title: 'Challenges.',
            first_body: 'One of my first challenges was to understand how Lucid ORM worked, but with a light reading in the documentation I was able to understand how to make queries in the database.',
            second_body: 'Another challenge was the use of a UI Library, the only frameworks I had used so far were Bootstrap and Bulma. And Vuesax in comparison to a UI Library like Vuetify has less information on the internet due to the difference in popularity.',
            third_body: 'Last but not least, it was in this project that I had the courage to learn Vuex. Up to this point, I have always been afraid of the complexity of developing a common state. Still, this was also the first project in which I used Axios to make HTTP requests from the client to the backend.'
          }
        },
        routing: {
          previous: '/works/docus',
          next: '/works/locise'
        },
        launch_project: {
          href: 'https://noteit.now.sh/',
          figma_link: 'https://www.figma.com/',
          source_code: 'https://github.com/FranciscoMendes10866/Note-it-'
        },
        screenshots_design: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597419765/nuxt-portfolio/noteit/Screenshot_2020-08-14_Note_it_vn9yys.png',
            alt: 'Home page'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420889/nuxt-portfolio/noteit/Screenshot_2020-08-14_Note_it_ce20ku.png',
            alt: 'Sign Up page'
          },
          {
            id: 3,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420889/nuxt-portfolio/noteit/Screenshot_2020-08-14_Note_it_1_l8vape.png',
            alt: 'Sign In page'
          }
        ],
        screenshots_implementation: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420889/nuxt-portfolio/noteit/Screenshot_2020-08-14_Note_it_2_n7bmrh.png',
            alt: 'Create an account error'
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420889/nuxt-portfolio/noteit/Screenshot_2020-08-14_Note_it_3_uin0ex.png',
            alt: 'Empty dashboard'
          },
          {
            id: 3,
            src: 'https://res.cloudinary.com/dj5iihhqv/image/upload/v1597420890/nuxt-portfolio/noteit/Screenshot_2020-08-14_Note_it_4_sio2w9.png',
            alt: 'Project with tasks'
          }
        ],
        bg_img: {
          first_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1597538742/nuxt-portfolio/noteit/noteit_wo74ed.png)'
        }
      }
    }
  }
}
</script>
