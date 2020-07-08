<template>
  <div class="index">
    <!-- Hero Section -->
    <section class="bg-white py-64">
      <div class="container mx-auto">
        <div class="grid grid-cols-1">
          <div>
            <h1
              class="text-center text-4xl tracking-wide leading-loose font-bold"
            >Made with meaning.</h1>
          </div>
        </div>
      </div>
    </section>
    <!-- Portfolio Section -->
    <section class="bg-purple-700 py-32">
      <div class="container mx-auto">
        <div class="grid grid-cols-1">
          <ApolloQuery :query="require('../graphql/getWorks.gql')">
            <template v-slot="{ result: { error, data } }">
              <h1 v-if="error">Try again later.</h1>
              <div v-if="data">
                <div v-for="item in data.work" :key="item.id">
                  <h2 class="font-bold text-white tracking-wide text-4xl">{{ item.name }}</h2>
                  <img :src="item.thumbnail.id" />
                </div>
              </div>
            </template>
          </ApolloQuery>
        </div>
      </div>
    </section>
    <!-- Work Section -->
    <section class="bg-gray-100 py-32">
      <div class="container mx-auto">
        <div class="grid grid-cols-2 mt-10">
          <div>
            <h1 class="text-4xl font-bold tracking-wide">Work</h1>
          </div>
          <div>
            <p class="text-lg font-normal tracking-wide leading-loose">
              Are you interested in working with me on a
              freelance project or hiring me full time?
            </p>
            <p class="text-lg font-normal tracking-wide leading-loose mt-8">
              Feel free to contact me sending an email to:
              <span
                class="font-bold"
              >franciscomendes@gmail.com</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>
