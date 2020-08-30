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
          first_paragraph: 'Mr Glicemia allows the creation of profiles accessible from your desktop and mobile phone.',
          second_paragraph: 'Users who want to store all their blood sugar data anywhere, free of charge and quickly.'
        },
        headers: {
          first_topic: {
            title: 'Design.',
            body: 'Before creating the application, I decided to make a few sketches where I would define how the website would be structured. The landing page contains basically the tech stack and why was used. The dashboard displays the data inserted by the user, from data related to blood glucose to the user profile.'
          },
          second_topic: {
            title: 'Implementation.',
            body: 'From the beginning I had the idea of using persisted state, since the platform would work with several json objects. Likewise, if the user leaves the platform, he / she remains logged in on the website. And the user experience is much better.'
          },
          third_topic: {
            title: 'Challenges.',
            first_body: 'The biggest challenge during the development of this project was the creation of all components of absolute zero. Because until now I had only used component-based css frameworks, however in this project I decided to push my head and understand how things work. However, I used Tailwind CSS to make the website prototyping faster.',
            second_body: 'Another challenge during the development of this platform was the manipulation of the frontend UI through the use of Vuex state. Undoubtedly it was a lot of fun to be able to create a simple logic that through the data that is sent to the frontend, the UI adjusts.',
            third_body: 'In the same way that this project was almost the culmination of all the individual projects I had done to date. What I mean by this is that we usually add more dependencies in a single project, or we end up creating a few components with a greater number of lines of code. With this project I learned to reuse code and components.'
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
          first_image: 'background-image: url(https://res.cloudinary.com/dj5iihhqv/image/upload/v1597526205/nuxt-portfolio/glicemia/Frame_1_l3dfsd.png)'
        }
      }
    }
  }
}
</script>
