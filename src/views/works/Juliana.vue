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
          first_paragraph: 'Julina Morais PT is a personal website created for a Personal Training professional who needed a complete platform. From online presence, to a dashboard that would help you on a daily basis.',
          second_paragraph: 'For this, according to your needs, I decided to use the concept of JAMSTACK to facilitate the development of the website added to services that at the same time help the professional.'
        },
        headers: {
          first_topic: {
            title: 'Design.',
            body: 'In order for the user experience to be the best possible, I decided to use Vuetify which is based on Material Design. This UI Library, reconciled with the Material Design Documentation, established a huge consistency and visual consistency on the website, in the same way that it provides a better navigation experience on the website.'
          },
          second_topic: {
            title: 'Implementation.',
            body: 'At the time the website development started, I had no knowledge about the development of api\'s in Node.js. So I decided to use Firebase, I ended up loving the service but at the end of the day I prefer to create something from scratch and have total control over it. As well as I used many other services that were basically a way of overcoming, since I was totally new to web development.'
          },
          third_topic: {
            title: 'Challenges.',
            first_body: 'As mentioned in the previous topic, I chose to use Firebase as a database and the services that were used were Firebase Auth and Firebase Firestore. It turned out to have a great operation with Vuetify. Although Firebase has such detailed docs, it was difficult for me to apply that acquired knowledge and apply it to Nuxt.',
            second_body: 'Another challenge during the development of the application was the use of graphql with DatoCMS and making the posts dynamic. According to the post that was clicked, a page would open with the content of that post.',
            third_body: 'My biggest challenge for this project was the implementation of multi language. All articles and tutorials on the internet teach you how to do things with Vue (SPA) and not with Nuxt (SSR). Despite finding some articles on how to implement it in Nuxt, I ended up getting very confused and almost got to give up. But through a snippet on Dev.to I had a little light and spent some hours trying to make it work.'
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
